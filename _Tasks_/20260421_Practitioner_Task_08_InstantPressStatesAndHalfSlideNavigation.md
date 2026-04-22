# Practitioner.Digital Task 08 — Instant Press States and Half-Slide Click Navigation

## Goal
Tighten slideshow interaction feedback so navigation feels more direct and more legible.

This task adds:
- instant pressed/clicked visual states for slideshow buttons
- left-half / right-half click navigation directly on the slide image
- matching visual feedback on the paired navigation button when the slide itself is used to navigate

## Context
Right now the slideshow interaction can be made clearer and more tactile.

We want:
- button press feedback to be immediate and obvious
- the slide itself to behave as a large navigation surface
- left/right slide clicks to visually reinforce the same Previous/Next controls the user would have pressed

This should feel crisp, not animated.

## Requirements

### 1) Button press state should invert instantly
For slideshow navigation buttons, use a simple instant pressed state.

#### Applies to
- Previous
- Next
- any slideshow navigation buttons in fullscreen if separate components are used there

#### Press behavior
When the button is pressed / active:
- reverse the background color and text color
- no animation
- no transition
- no fade
- no easing

The state change should be immediate.

#### Notes
- Keep the default and hover states consistent with the current design language unless already being revised elsewhere.
- This task is specifically about the **press/click/active** state.
- If focus styling exists, preserve it.

### 2) Make the slide image clickable by halves
The slideshow image/stage itself should support direct left/right navigation.

#### Behavior
- Clicking or pressing the **left half** of the slide goes to **Previous**
- Clicking or pressing the **right half** of the slide goes to **Next**

This should apply to:
- the inline slideshow
- the fullscreen slideshow, if technically appropriate within the current structure

### 3) Mirror the paired button press visually
When the user navigates by clicking the image halves, also trigger the matching button's pressed feedback momentarily.

#### Examples
- click left half of image -> navigate Previous -> show Previous button pressed state
- click right half of image -> navigate Next -> show Next button pressed state

This is to make the relationship between image-click navigation and the explicit navigation buttons visually obvious.

### 4) Keep feedback crisp and restrained
This visual feedback should be short, clear, and non-animated.

#### Rules
- no motion tweening
- no color transition animation
- no scale animation
- no bounce
- no opacity pulse

Just a direct, immediate visual state swap.

If a short pressed-state duration is needed after image-click navigation so users can perceive it, keep it brief and clean.

### 5) Avoid accidental UX mess
Implement image-half navigation in a way that does not make the slideshow feel sloppy.

#### Expectations
- Do not interfere with obvious fullscreen controls or close controls
- Do not break swipe behavior if fullscreen/mobile swipe already exists
- Do not create confusing overlap with text selection or drag behavior
- Cursor behavior should make sense if pointer cues are already being used

### 6) Keep behavior in sync across inline and fullscreen
If both inline and fullscreen slideshow viewers exist, keep the interaction model aligned:
- same left/right image click behavior
- same button press feedback behavior
- same navigation result

Do not let the two viewers feel like different products.

## Accessibility / input notes
- Preserve keyboard navigation behavior already in place
- Do not remove accessible button controls in favor of image-only interaction
- The explicit Previous / Next buttons must remain usable and visible
- Image-half navigation is an enhancement, not a replacement

## Acceptance Criteria
- Previous and Next buttons have an instant pressed state that reverses background and text color
- There is no animation or transition on that pressed-state change
- Clicking the left half of the slide navigates Previous
- Clicking the right half of the slide navigates Next
- When image-half navigation is used, the matching Previous or Next button also shows its pressed state briefly
- Inline slideshow behavior works cleanly
- Fullscreen slideshow behavior also works cleanly if it shares the slideshow interaction model
- Existing keyboard/button navigation still works
- Build succeeds cleanly

## Notes for Codex
Please include in your final summary:
1. Which button components/styles were updated for the instant press state
2. How image-half hit areas were implemented
3. Whether the same behavior was applied to both inline and fullscreen viewers
4. How the paired button press feedback was triggered from image-click navigation
5. Any interaction edge cases you handled
