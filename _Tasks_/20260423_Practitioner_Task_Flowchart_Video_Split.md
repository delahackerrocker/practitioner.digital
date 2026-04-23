# Practitioner.Digital Task — Separate Video and Flow Charts, Add Flow-Chart Zoom

## Objective
Refactor the case-study media presentation so videos and large flow charts are no longer treated as the same artifact type.

Right now a video and a giant flow-chart image are being grouped into the same slideshow treatment. That is the wrong UX. Flow charts need their own presentation behavior.

## Problem Summary
Current issue:
- a video artifact and a very large flow-chart image are being presented in the same media system
- the flow chart is too large/dense to be useful in the current image treatment
- the video poster/default image does not accurately represent the actual video content

Desired outcome:
- videos remain videos
- flow charts become their own artifact/display mode
- flow charts support zooming/panning so they can actually be inspected
- the video poster image should be replaced with a screenshot from the first frame of the actual video

## Requirements

### 1. Separate videos from flow charts
Do not place giant flow-chart images in the same artifact/slideshow treatment as videos.

Implement a cleaner content split so:
- video artifacts render in a video-focused presentation
- flow-chart artifacts render in a flow-chart-focused presentation
- each artifact type can evolve independently

This can be done through:
- separate sections
- separate components
- or a smarter artifact-type rendering model

Choose the simplest clean solution that fits the current site structure.

### 2. Add special flow-chart functionality
Flow charts need a dedicated viewer behavior.

Required capabilities:
- click/tap to inspect at larger scale
- zoom in
- zoom out
- pan while zoomed
- preserve image clarity as much as practical
- keep the experience clean and premium, not overly tool-like

A lightweight modal/lightbox-style flow-chart viewer is acceptable if it is the cleanest approach.

The main point is:
the user must be able to read and inspect dense diagrams that are currently too large to understand at default size.

### 3. Keep the normal portfolio aesthetic
This should still feel like part of the portfolio, not like a generic document viewer.

Preserve:
- the dark polished presentation
- restrained controls
- strong layout hierarchy
- consistency with the rest of the case-study pages

### 4. Replace the video poster/default image
The current default image/poster for the keypad video does not match the contents of the video.

Use a screenshot from the first frame of the video as the poster image.

If Codex can directly extract or generate a first-frame still from the existing video asset, do that.
If not, explicitly ask the user to provide a screenshot/export from the first frame and then wire that image in as the poster.

Do not leave the inaccurate poster in place if there is a better first-frame image available.

## Scope
Focus on the relevant case-study media presentation only.

This is not a broad rewrite of all media systems unless a small shared refactor is clearly the cleanest path.

## Implementation Guidance
1. Identify where the current mixed artifact handling is defined.
2. Separate video artifacts from flow-chart/support-diagram artifacts.
3. Create or adapt a dedicated flow-chart viewer with zoom/pan support.
4. Ensure the default in-page presentation still looks elegant before fullscreen/modal use.
5. Replace the keypad video poster with a first-frame still.
6. Keep the solution simple and maintainable.

## UX Notes
For flow charts:
- readability matters more than matching the exact slideshow behavior used for normal images
- fullscreen alone is not enough; zoom is required
- controls should be obvious but minimal
- avoid clumsy browser-native feeling interactions when possible

For videos:
- the poster should truthfully preview the clip
- avoid pairing a motion artifact and a dense reference diagram as if they are equivalent slides in one carousel

## Deliverables
Make the code/content changes directly in the repo.

Then provide a concise completion report with:
- files changed
- what was changed structurally
- how flow-chart zoom/pan works
- whether the poster image was extracted from the video or needs a user-provided first-frame still
- any follow-up recommendation if additional flow-chart artifacts should migrate to the same treatment

## Acceptance Criteria
- video and flow-chart artifacts are no longer mixed in the same slideshow treatment
- flow charts have dedicated zoomable inspection behavior
- the flow-chart experience is readable and polished
- the keypad video uses a more accurate first-frame poster image
- the overall case-study presentation remains visually coherent
