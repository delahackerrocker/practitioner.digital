# Practitioner.Digital Task 09 — Keep Page Index Strip Synced and Soften Press State

## Goal
Refine the slideshow navigation feel in two ways:

1. Keep the horizontal page-number strip tracking the selected page so the active page does not drift out of view on the large slideshow.
2. Soften the slideshow button press state so it is only modestly brighter than the default background instead of flipping to a loud high-contrast state.

## Context
The current slideshow is close, but two details still feel off:

- On the large slideshow, the selected page can drift toward or beyond the visible edge of the horizontal page-number strip.
- The pressed state is reading too strong. We want feedback, but not a white-hot flash.

This task is about subtle polish and better continuity while navigating.

## Requirements

### 1) Keep the horizontal page-number strip following the selected page
Update the horizontal page-number strip / scrollbar behavior so it keeps the active page visible as the user navigates.

#### Desired behavior
- As soon as the selected page is **within two page numbers of the visible left edge or right edge**, the strip should begin scrolling to keep up.
- The goal is that the active page number remains comfortably in view and does not disappear off the edge during navigation.
- This should feel like the strip is following the selection, not snapping erratically.

#### Intent
If the visible run of page numbers is, for example:
- `05 06 07 08 09 10 11 12`

and the active page advances toward the right side, once it gets within roughly two numbers of that visible edge, the strip should scroll so the active page stays in view.

#### UX expectations
- Keep the movement smooth and restrained.
- Avoid big jumps if a smaller tracking movement will do.
- Preserve manual scrollbar usability if the user drags or scrolls it directly.
- Do not let the active page become lost off-screen in the large slideshow view.

### 2) Apply this to the large slideshow view
This behavior is primarily for the large slideshow / primary deck experience.

If the same page-number strip component is reused elsewhere, apply the logic carefully so it improves those views too without causing awkward behavior.

### 3) Soften the button press state
Revise the slideshow button pressed state so it is only somewhat brighter than the default button background.

#### New visual direction
Instead of fully reversing background and text colors:
- keep the existing default text treatment unless a small adjustment is needed for legibility
- brighten the button background to roughly **25% of the way from the default gray toward white**
- the effect should feel present but restrained

#### Intent
The pressed state should read as:
- a bit brighter
- a bit more energized
- not loud
- not white
- not high-contrast inversion

Think of it as a tasteful lift, not a flash.

### 4) No animation
Keep this consistent with the current interaction direction:
- no transition
- no easing
- no fade
- no scale
- instant state change

### 5) Keep paired feedback aligned
If slide-half click navigation is already causing the matching Previous / Next button to show a pressed state, update that paired feedback to use this new softer pressed style too.

The image-click navigation and explicit button press should feel identical.

## Implementation guidance

### Page strip tracking
Use the selected page item as the source of truth.

Possible good approaches:
- measure the selected item relative to the scroll container and auto-adjust when it enters a two-item threshold near either visible edge
- or track visible range and nudge the strip forward/back as the active page approaches those thresholds

Either is fine as long as the result is stable and does not jitter.

### Press color
Please derive the pressed background from the current default button background rather than hardcoding a random bright gray that ignores the existing palette.

The final pressed color should feel visually related to the current button styling.

## Acceptance Criteria
- In the large slideshow, the horizontal page-number strip keeps the selected page visible.
- Once the active page gets within two numbers of the visible edge, the strip scrolls along to keep up.
- The strip does not make harsh or erratic jumps.
- Previous / Next pressed state is only modestly brighter than the default button background.
- The pressed state is approximately 25% of the way from the default gray toward white.
- No animation or transition is added.
- Image-half navigation uses the same softened pressed-state feedback.
- Build succeeds cleanly.

## Notes for Codex
Please include in your final summary:
1. How the page-number strip tracking threshold was implemented
2. Which slideshow views/components received the tracking behavior
3. What the original button background color was and how the pressed color was derived from it
4. Whether paired image-click navigation feedback was updated to the new softer pressed state
5. Any edge cases handled for manual scrolling or rapid navigation
