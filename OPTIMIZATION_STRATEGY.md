# OPTIMIZATION_STRATEGY

## 1. Purpose

This document summarizes the rendering, caching, culling, and editor-tooling work planned for the portfolio as the case studies become more media-heavy.

The goal is practical polish: keep the Call of Duty decks, videos, flow charts, and future screenshot galleries feeling fast and stable while preserving the repo's lean React/Vite architecture.

This is not a plan for a CMS, backend asset pipeline, admin system, or large framework rewrite.

## 2. Current Baseline

- The site is a client-rendered React/Vite app with a lightweight custom router in `src/App.jsx`.
- Portfolio content is data-driven through `src/data/siteContent.js`, `src/data/projects.js`, and `src/data/callOfDuty.js`.
- PDF decks are not rendered at runtime. They are pre-rendered into PNG pages and displayed through `FeatureSlideshow`.
- Local video uses native `<video controls>` with `preload="metadata"` where present.
- Large flow charts are separated from normal slideshow media and use `FlowChartViewer` with a modal inspect mode, zoom controls, wheel zoom, and drag-to-pan.
- The dev-only tuning editor already lives in `src/editor` and `src/tuning`, with schema-driven controls, JSON import/export, localStorage persistence in development, CSS-variable output, and debug guide toggles.

## 3. Rendering Optimizations

Planned rendering work:

- Keep PDF-to-image rendering as an offline/prebuild workflow rather than adding runtime PDF rendering.
- Add explicit `width`, `height`, or `aspect-ratio` metadata to image-driven media entries where practical so slide stages reserve stable space before images decode.
- Use `loading="lazy"` and `decoding="async"` for non-critical images, especially rail thumbnails, related cards, and below-the-fold generic project media.
- Prefer eager loading only for the active slide, hero-adjacent images, and immediately visible media.
- Avoid rendering duplicate heavyweight media trees when a modal/lightbox is closed.
- Keep video embeds and native videos out of the active DOM until their media block is visible or selected, where that can be done without making the UI feel delayed.
- Split artifact presentation by media type: slideshows for page decks and stills, native video blocks for motion artifacts, and inspectable viewers for dense flow charts.
- Respect reduced-motion settings in scroll, rail tracking, hover effects, and modal transitions.

## 4. Caching and Preload Strategy

Planned caching work:

- Preload the current slide plus a small neighbor window, usually previous and next, instead of trying to load every page in large decks at once.
- Cache decoded image objects by `src` during a session so repeated slide navigation does not continually recreate preload work.
- Keep cache size bounded for large decks, with the active slide and near neighbors protected from eviction.
- Use lightweight route-level prefetching only for high-value next destinations, such as the next Call of Duty case-study card, if it proves useful.
- Let the browser handle normal HTTP caching for static assets in `public/assets`; avoid adding service-worker complexity unless there is a clear measured need.
- Keep local video at metadata preload by default, and avoid eager full-video downloads unless the video is the primary first-viewport artifact.

## 5. Culling Strategy

Planned culling work:

- Use `IntersectionObserver` or a small visibility hook to know when media-heavy sections are near the viewport.
- Render lightweight placeholders for offscreen artifact blocks, then mount the full slideshow, video, iframe, or flow-chart viewer shortly before it scrolls into view.
- For large slideshows, keep the rail lightweight and avoid mounting hidden full-size slide images beyond the active/preload window.
- Pause or unload inactive videos when navigating away from a media block or closing a modal.
- Keep modal/lightbox content mounted only while open unless retaining state is essential.
- Avoid virtualizing normal text sections and small card grids; culling should target heavyweight media, not simple editorial content.

## 6. Editor and Debug Tools

Existing editor tools:

- Dev-only floating editor gated by `import.meta.env.DEV`.
- Tabs for Brand, Typography, Layout, Header / Nav, Home / Hero, Project Grid, Case Study, Media, Motion, and Debug / Guide.
- Schema-driven controls in `src/tuning/tuningSchema.js`.
- Default and active JSON tuning profiles in `src/tuning`.
- Runtime CSS-variable application through `TuningProvider`.
- localStorage persistence for development tuning.
- Import JSON, export JSON, reset tab, and reset all actions.
- Debug toggles for component bounds and max-width guides.

Planned editor extensions:

- Add a Performance / Media tab only if the optimization controls become real, useful controls rather than decorative switches.
- Expose practical tuning values such as lazy-load root margin, slide preload neighbor count, max in-memory image cache count, and whether offscreen heavy media should mount early or late.
- Add debug overlays for media section visibility, mounted/unmounted state, cache hits/misses, and preloaded slide windows.
- Add a small development-only performance readout for media-heavy routes, focused on useful signals rather than noisy metrics.
- Keep all performance/debug controls dev-only and avoid shipping public-facing knobs.

## 7. Implementation Order

1. Add image metadata and low-risk native browser hints: `loading`, `decoding`, aspect ratios, and restrained eager loading.
2. Add a small image preloader/cache helper for slideshow neighbors.
3. Add visibility-based mounting for heavy media blocks.
4. Add video pause/unload behavior around route changes, slide changes, and modal close.
5. Add editor/debug visibility for preload windows, mounted media, and cache behavior.
6. Tune defaults after manually reviewing the heaviest pages: `MW3 Exfil`, `Warzone / Cold War Design Guide`, and `BO6 Keypad Mini Game`.

## 8. Guardrails

- Keep the implementation small and readable.
- Do not introduce a service worker, global state library, CMS, or asset backend unless measurement clearly proves it is needed.
- Do not optimize text-only sections or simple cards with complexity they do not need.
- Do not hide broken media behind lazy-loading abstractions.
- Treat tuning controls as contracts: if a control exists, it must visibly affect the behavior it names.
- Prefer measured, targeted fixes over broad performance theater.

