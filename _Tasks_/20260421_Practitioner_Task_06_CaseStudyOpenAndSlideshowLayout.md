# Practitioner.Digital Task 06 — Case Study Open Behavior and Slideshow Layout Cleanup

## Goal
Tighten the case study interaction model and simplify the slideshow layout so it feels like a single clear experience instead of a split panel.

This task combines the related UX changes below into one cohesive pass.

## Context
Current issues:
- The case study cards feel too compartmentalized.
- Users should be able to click the case study card itself to open the project, not hunt for a smaller CTA.
- The slideshow section is wasting width by splitting the presentation into a large image area plus a side sub-card.
- The slideshow controls should live with the slideshow itself.
- The slideshow needs a fullscreen mode that preserves navigation context.

We want this interaction to feel more direct, more elegant, and less editorially noisy.

## Requirements

### 1) Entire case study card should open the case study
On the case study cards, make the entire card clickable.

#### Behavior
- Clicking anywhere on the card should open the case study/project.
- The card should behave as one coherent interactive surface.
- Existing CTA text like **Open Project** can remain only if it still feels useful, but it should no longer be the only clickable target.
- Avoid nested conflicting click targets if possible.

#### Interaction details
- Preserve a clear hover/focus state for the whole card.
- Maintain keyboard accessibility:
  - the card must be focusable
  - Enter and Space behavior should be sensible for the chosen implementation
- Prioritize clean card interaction over small isolated click zones.

### 2) Slideshow image area should fill the full width of the card
Refactor the slideshow section so the slideshow image/stage uses the full available card width.

#### Remove the split layout
- Remove the right-side sub-card that currently repeats title, description, page info, and nav controls.
- The slideshow should read as one primary media card, not a media card plus a metadata card.

#### New layout intent
- Keep the section heading/title/description at the top of the section.
- Beneath that, present one large slideshow image card spanning the full content width.
- The slide itself should feel centered, deliberate, and prominent.

### 3) Move slideshow controls into the image card
Put the slideshow navigation controls on the bottom of the slideshow image card.

#### Controls to include
- Previous
- Next
- Current page count / total count

#### Placement
- These controls should live inside the slideshow image card at the bottom edge or in a bottom control bar attached to that card.
- The count should stay visually associated with the controls.
- The controls should remain readable over the artwork.

#### UX notes
- Preserve good spacing and hierarchy.
- Do not let the controls feel detached from the slide content.
- Keep the control styling consistent with the site.

### 4) Add fullscreen mode for the slideshow
Create a fullscreen viewing mode for slideshow decks.

#### Behavior
- User can enter fullscreen from the slideshow area through a clear affordance.
- In fullscreen, retain:
  - Previous button
  - Next button
  - Current page count / total count
- The fullscreen view should keep the slide as the focus while preserving navigation.

#### Fullscreen expectations
- Works for mouse and touch as appropriate.
- Has an obvious way to exit fullscreen.
- Escape key should exit fullscreen if technically appropriate for the implementation.
- Navigation should continue to work in fullscreen without desyncing from the inline slideshow state.

#### State behavior
- If a user opens fullscreen on page 11, fullscreen should open on page 11.
- If the user advances slides in fullscreen, the inline slideshow should reflect the same current slide when fullscreen closes.

### 5) Keep the slideshow and layout clean
As part of this pass:
- remove duplicate explanatory copy that only existed because of the side sub-card
- avoid repeating the deck title more than necessary
- keep metadata tight and useful
- preserve the elegant visual tone of the site

## Responsive behavior
Please make sure the new structure behaves cleanly across desktop and smaller breakpoints.

### Desktop
- The slideshow image card spans the usable section width.
- Controls sit at the bottom of the slideshow card.
- Fullscreen opens cleanly without layout glitches.

### Smaller screens
- Controls remain usable and readable.
- The slide stays centered and contained.
- No orphaned spacing remains from the removed side sub-card.

## Accessibility and input expectations
- Whole-card case study click target must be keyboard accessible.
- Slideshow controls must be keyboard accessible.
- Fullscreen affordance must be keyboard accessible.
- Visible focus states should remain present.
- If arrow-key navigation for slides already exists or is easy to support cleanly, keep or add it without overengineering.

## Acceptance Criteria
- Clicking anywhere on a case study card opens that case study.
- The slideshow section no longer uses the right-side duplicate info sub-card.
- The slideshow image/stage spans the full width of the main card area.
- Previous, Next, and count are located at the bottom of the slideshow image card.
- There is a fullscreen mode for the slideshow.
- Fullscreen retains Previous, Next, and count.
- Fullscreen and inline slideshow stay in sync on the current slide.
- No duplicate side-panel copy remains.
- Build succeeds cleanly.
- Editor/runtime remain aligned if any editable slideshow layout controls or labels were touched.

## Notes for Codex
Please include in your final summary:
1. Which files were changed for the clickable case study card behavior
2. Which files were changed for the slideshow layout refactor
3. How fullscreen was implemented
4. Any removed duplicate content/UI from the old side sub-card layout
5. Any accessibility considerations handled in the implementation
