# Practitioner.digital — Task 01 — Case Study Card Cleanup

## Goal
Clean up the featured case study cards so they feel calm, premium, and portfolio-forward.

The current card treatment is visually noisy because there is dynamic text rendered directly over the preview images. The portfolio should not feel self-aware or explanatory about itself. It should simply present the work.

## What to change

### 1) Remove dynamic text layered over case study imagery
The top visual area of the featured case study cards should **not** render live text on top of the images.

Use the screenshot below as the problem reference:
- MW3 Exfil card
- BO6 Keypad Mini Game card

Right now the preview area is trying to be both an image gallery and a text surface at the same time. That overlap is chaotic.

#### Desired behavior
- The image area should be **purely visual**.
- Keep the image, slideshow, collage, or preview treatment if it is working.
- Remove any live title, deck, metadata, or duplicate copy that is being composited on top of that image area.
- All readable text content should live in the dedicated content area of the card, not inside the image plane.

#### Important
If there is a hover state, autoplay state, carousel state, or animated state that injects text into the image area, remove that too. This cleanup applies to the resting state and interactive states.

### 2) Eliminate self-aware / recruiter-addressed copy
Audit portfolio copy in this section and remove text that:
- refers to recruiters directly
- talks about the portfolio as a portfolio
- sounds self-conscious, meta, or explanatory
- reads like it is describing the structure of the site instead of the work itself

#### Copy direction
The site should read like a confident body of work, not like a presentation explaining how to read the presentation.

#### Examples of copy to avoid
- “for recruiters”
- “this portfolio”
- “here’s what this case study is meant to show”
- anything that sounds like the site is narrating itself

#### Desired tone
- direct
- specific
- work-focused
- calm
- professional
- not over-written

### 3) Preserve useful content below the image area
Keep the content that is helping:
- project title
- short descriptive deck
- role / tags / discipline chips
- concise body copy

But ensure there is no duplicated title/deck in both the image area and the content area.

## Implementation notes
- Find the component responsible for the featured case study cards and remove the over-image text layer at the component level.
- If the overlay text is data-driven, do not just hide it with opacity. Remove the rendering path so it does not remain as dead complexity.
- If the card layout becomes too tall or too empty after removing the overlay layer, rebalance spacing so the visual area still feels intentional.
- If necessary, slightly darken or simplify the image treatment for consistency, but do **not** replace the actual imagery unless the existing implementation requires it.

## Acceptance criteria
- No live text appears on top of featured case study imagery.
- Each featured card has one clear text reading area below the visual area.
- Titles and decks are not duplicated.
- No recruiter-addressed or portfolio-self-referential copy remains in the cleaned section.
- The section feels quieter and easier to scan than before.
- Desktop layout remains polished and responsive behavior is not degraded.

## Deliverables
- Code changes
- Brief summary of which components/content sources were updated
- Before/after screenshots of the affected cards
