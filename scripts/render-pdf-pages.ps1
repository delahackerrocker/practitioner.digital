param(
  [Parameter(Mandatory = $true)]
  [string]$PdfPath,

  [Parameter(Mandatory = $true)]
  [string]$OutputDir,

  [int]$Width = 1440,

  [switch]$Force
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime]

function AwaitOperation($Operation, [Type]$ResultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq "AsTask" -and
    $_.IsGenericMethod -and
    $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -like "IAsyncOperation*"
  } | Select-Object -First 1

  $task = $method.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

function AwaitAction($Action) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq "AsTask" -and
    -not $_.IsGenericMethod -and
    $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq "IAsyncAction"
  } | Select-Object -First 1

  $task = $method.Invoke($null, @($Action))
  $task.Wait()
}

$resolvedPdfPath = (Resolve-Path $PdfPath).Path
$resolvedOutputDir = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($OutputDir)

if (-not (Test-Path $resolvedOutputDir)) {
  New-Item -ItemType Directory -Path $resolvedOutputDir | Out-Null
}

$pdfFile = AwaitOperation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPdfPath)) ([Windows.Storage.StorageFile])
$pdfDocument = AwaitOperation ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($pdfFile)) ([Windows.Data.Pdf.PdfDocument])

for ($index = 0; $index -lt $pdfDocument.PageCount; $index++) {
  $pageNumber = $index + 1
  $outputPath = Join-Path $resolvedOutputDir ("page-{0:D2}.png" -f $pageNumber)

  if ((Test-Path $outputPath) -and -not $Force) {
    continue
  }

  $page = $pdfDocument.GetPage($index)
  $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $renderOptions.DestinationWidth = [uint32]$Width

  $memoryStream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  AwaitAction ($page.RenderToStreamAsync($memoryStream, $renderOptions))
  $memoryStream.Seek(0)

  $fileStream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
  $netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStream($memoryStream)
  $netStream.CopyTo($fileStream)
  $fileStream.Dispose()
  $netStream.Dispose()
  $memoryStream.Dispose()
  $page.Dispose()
}

Write-Output ("Rendered {0} page images to {1}" -f $pdfDocument.PageCount, $resolvedOutputDir)
