# Practitioner.Digital Task 07 — Rebuild Slideshow Fullscreen as a Proper Lightbox / Modal Viewer

## Goal
Rebuild the slideshow fullscreen experience so it behaves like a standard high-quality web lightbox / modal slideshow, not just a stretched version of the inline layout.

## Why
There does not appear to be one single canonical “fullscreen slideshow spec” for the web. The closest standard guidance comes from:
- accessible **carousel** patterns
- accessible **modal dialog** patterns
- common UX guidance for carousels on desktop and mobile

So for this site, treat fullscreen as an **accessible modal lightbox wrapped around the slideshow**.

## Core product decision
The fullscreen slideshow should be:
- a modal overlay above the current page
- focused on the current slide
- simple
- dark
- calm
- keyboard accessible
- touch friendly
- synchronized with the inline slideshow state

Do **not** treat fullscreen as “the same layout, but larger”.
Do **not** preserve the old side-card structure in fullscreen.

## Best-practice behavior to implement

### 1) Use a modal/lightbox structure
When the user enters fullscreen, open a true modal overlay.

Requirements:
- background page becomes inert and non-interactive
- background is dimmed/obscured
- focus moves into the fullscreen viewer
- focus is trapped inside until the viewer is closed
- closing the viewer returns focus to the control that opened it

Implementation may use the native `<dialog>` element if appropriate, or a custom modal that correctly reproduces modal behavior.

### 2) Make the slide the hero
The slide itself is the primary content.

Layout intent:
- the active slide is centered in the viewport
- preserve aspect ratio
- fit the full slide within the available viewport as much as possible
- do not crop important slide content just to fill space
- use a black or near-black backdrop behind the slide
- leave enough padding/safe area so controls do not collide with the slide

The viewer should feel like a gallery/lightbox, not a content page.

### 3) Keep only the essential controls visible
Fullscreen should keep a very small set of controls:

Required controls:
- Close
- Previous
- Next
- Current slide count / total slide count

Optional only if it improves the result cleanly:
- slide title / short caption
- fullscreen toggle state label

Do not repeat long descriptive copy in fullscreen.
Do not recreate a metadata side panel.

### 4) Put controls where users expect them
Recommended control placement:
- **Close** in the upper-right corner
- **Previous / Next** as large easy targets on the left and right sides of the viewport, or in a bottom control bar if that produces a cleaner result
- **Count** centered or near the bottom controls
- On smaller screens, controls may collapse into a bottom overlay bar if side arrows feel cramped

No matter the exact placement, controls must stay visually tied to the viewer and remain readable against the artwork.

### 5) Keep state perfectly in sync
The fullscreen viewer and inline slideshow must share one current-slide state.

Behavior:
- opening fullscreen starts on the currently active inline slide
- moving forward/back in fullscreen updates the underlying slideshow state
- closing fullscreen returns the user to the same slide inline
- no desync
- no duplicated state machine if avoidable

### 6) Support the standard interaction model
Support the common slideshow interactions users expect.

Desktop:
- click Previous / Next
- Left Arrow / Right Arrow navigate slides
- Escape closes fullscreen

Mobile / touch:
- swipe left/right changes slides
- controls remain tappable
- close affordance remains obvious and reachable

If click-outside-to-close is implemented, do it carefully so it does not cause accidental dismissal when users interact near the edges.

### 7) Remove noisy motion
Use restrained motion only.

Recommendations:
- quick fade or subtle scale/fade when opening and closing
- quick crossfade or short slide transition between images if needed
- no dramatic zooming, spinning, or elaborate panel choreography
- respect reduced-motion preferences

The fullscreen viewer should feel stable and premium, not flashy.

### 8) Handle overflow and large decks cleanly
If the slide or modal body overflows:
- the viewer still needs proper keyboard focus behavior
- controls should remain reachable
- the slide should stay centered as much as possible

Do not let the user get trapped in an awkward scroll region that hides key controls.

### 9) Accessibility requirements
Treat this as an accessibility-sensitive interaction, not just a visual overlay.

Required accessibility behavior:
- modal has an accessible name/title
- close button has an accessible label
- keyboard users can reach all controls
- focus is trapped within the modal while open
- Escape closes the modal
- focus returns to the opener on close
- background content is not interactive while modal is open

### 10) Keep the inline version simpler too
As part of this cleanup, make sure the inline slideshow and fullscreen slideshow feel related but not identical.

Inline:
- one strong media card
- compact controls at the bottom of the image card

Fullscreen:
- dedicated lightbox/modal treatment
- larger viewing area
- fewer distractions
- stronger control clarity

## Visual direction
Aim for the emotional feel of:
- portfolio artifact viewer
- museum piece / gallery
- premium case study deck review

Not:
- dashboard
- article sidebar
- stretched inline card
- busy UI chrome

## Acceptance Criteria
- Fullscreen opens as a true modal/lightbox viewer.
- Background page is visually subdued and non-interactive.
- Focus moves into the viewer and is trapped correctly while open.
- Escape closes the viewer.
- Focus returns to the opener on close.
- The slide is centered on a black/dark backdrop and shown without awkward cropping.
- Fullscreen contains only Close, Previous, Next, and count, unless an additional tiny caption is clearly beneficial.
- The old right-side metadata/sub-card pattern is not present in fullscreen.
- Left/Right arrow keys navigate slides.
- Touch swipe navigation works on mobile if feasible within the existing implementation.
- Inline and fullscreen slideshow remain perfectly synced on the current slide.
- Motion is restrained and respects reduced-motion settings.
- Build succeeds cleanly.

## Notes for Codex
Please include in your final summary:
1. Whether fullscreen was rebuilt as a true modal/lightbox
2. How focus management was handled
3. How slide-state sync between inline and fullscreen was handled
4. Where the controls ended up and why
5. Any reduced-motion or touch-navigation support added
