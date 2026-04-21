# Practitioner.Digital — Task 03 — Make Image / Slideshow Backdrops Black

## Goal
Replace the bright white backdrop that appears behind slideshow pages and other image presentation surfaces with black so the image areas feel intentional, cinematic, and consistent with the rest of the site.

This is a presentation-layer cleanup task, not a content rewrite.

---

## Context
On the live site, slideshow frames and some other image containers are rendering with a white background behind the media. This is breaking the dark visual language of the portfolio and making the image sections feel unfinished.

We want those backdrop areas to resolve to black instead of white.

This should apply wherever the current image/presentation treatment is using a white panel, white media stage, white fallback fill, or white empty area around the image.

---

## What to change
Audit the presentation components used for:
- PDF/page slideshow displays
- Case study image frames
- Any shared media/image presentation shells
- Any fallback/loading/empty media surfaces related to those components

Then update them so:
- the backdrop behind the media is black
- any letterboxing/pillarboxing areas are black
- any default empty image surface is black
- any loading/fallback state for these media surfaces stays visually coherent with the dark site treatment

Do **not** add new visual decoration.
Do **not** tint it blue or gray.
Do **not** introduce gradients unless the component already depends on one and the black treatment cannot be achieved without preserving that structure.

The desired result is simple: the image stage should read as black, not white.

---

## Important constraints
- Follow existing project guidance in `AGENTS.md` and `PROJECT_CONTEXT.md`.
- Keep this implementation simple.
- Prefer updating the shared media/frame component or shared styling source rather than patching many pages one-by-one.
- Do not disturb image sizing, cropping, pagination, slideshow logic, or navigation behavior.
- Do not change copy.
- Do not change layout spacing unless required to remove white seams or white container bleed.

---

## Things to inspect
Check for white coming from any of these sources:
- inline style values
- component-level CSS
- global CSS variables / tokens
- media frame background colors
- PDF/page renderer wrappers
- image placeholders
- transparent PNG/PDF areas revealing a white parent background
- fallback panels rendered before media loads

The issue may be caused by a parent container rather than the image element itself.

---

## Acceptance criteria
1. Slideshow/page-viewer image stages render with a black backdrop instead of white.
2. Other major image presentation areas that currently show the same white backing also render black.
3. Transparent or non-full-bleed media no longer reveals white behind it.
4. No regression to slideshow controls, page stepping, thumbnails, or layout.
5. The result feels consistent with the dark visual system of the site.

---

## Deliverables
- Implement the styling fix in the appropriate shared component(s) and/or CSS.
- Briefly document:
  - which component(s) or style source(s) were changed
  - what was causing the white backdrop
  - why the final fix point was chosen

---

## Verification steps
Use at least one slideshow/detail page and at least one other image-heavy section to confirm the fix.

Verify:
- loaded state
- initial load / fallback state
- pages with visible margins around media
- transparent or non-edge-to-edge assets if any exist

