# 20260413 Drive Fast Take Chances Portfolio — Task 04
**Repo Path:** `E:\Developer\drive-fast-take-chances.com`  
**Priority:** Highest  
**Goal:** Restructure the Call of Duty section so it is no longer a single oversized case study. Instead, create a **Call of Duty hub** with **five prominently featured sub-case-studies**, each with its own page and its own slideshow/video/artifact presentation.

---

## Context

We have enough real artifact depth now to justify a more editorial, more professional information architecture.

The following Call of Duty pieces should become the most prominently featured work in the entire portfolio:

1. **Modern Warfare 3 Exfil**
2. **Black Ops 6 Keypad Mini Game**
3. **Warzone / Cold War Design Guide**
4. **Play Again With Team**
5. **Black Ops 6 Stealth System**

These are not weak supporting materials.  
These are strong, real case-study anchors and should be treated that way.

The assets are already in the repo under:

`public/assets/projects/call-of-duty`

The PDFs in this folder should be broken apart and presented as **slideshows / document galleries inside the site**, not as dead file links.

---

## Strategic Direction Change

### Do not keep Call of Duty as only one giant page
The current direction of “one mega Call of Duty case study” is no longer the best structure.

Instead, build:

- one **Call of Duty overview / hub page**
- five **sub-case-study detail pages**
- each sub-case-study gets its own media treatment and tighter authored story

This gives the portfolio:
- better hierarchy
- better recruiter scanning
- better media presentation
- less clutter
- more professional editorial structure

---

## New Information Architecture

### A) Call of Duty Hub Page
Create or adapt the main Call of Duty page so it functions as a **hub**.

It should:
- briefly frame Dela's work across multiple shipped Call of Duty titles
- summarize role/scope at a high level
- present the five featured Call of Duty case studies as premium cards/modules
- allow the user to click into each one
- still feel like the flagship portfolio area

Suggested featured cards:
- MW3 Exfil
- BO6 Keypad Mini Game
- Warzone / Cold War Design Guide
- Play Again With Team
- BO6 Stealth System

This hub page should feel concise and curated, not like a dumping ground.

---

### B) Five Dedicated Call of Duty Sub-Case-Studies
Create a dedicated page or route for each of these:

#### 1. Modern Warfare 3 Exfil
Use the Exfil PDF and supporting imagery as the basis for a polished case study focused on:
- successful extraction AAR flow
- reward reveal
- inventory / XP breakdown
- gained loot presentation
- screen sequencing and animation logic

#### 2. Black Ops 6 Keypad Mini Game
Use the uploaded video plus keypad flow image(s) and any repo assets already present to create a case study focused on:
- mini-game interaction design
- clarity / legibility
- progression / feedback
- puzzle readability
- motion / state communication

#### 3. Warzone / Cold War Design Guide
Use the style guide PDF as a system-design case study focused on:
- visual brand foundation
- UI consistency
- item branding
- typography
- color systems
- visual targets
- shared-content/premium-product balancing

#### 4. Play Again With Team
Use the Play Again PDF as the basis for a case study focused on:
- information flow
- post-match decision making
- team continuity
- progression / reward framing
- social UX and retention-oriented design thinking

#### 5. Black Ops 6 Stealth System
Use the stealth meter image(s) and any other repo assets already present to create a case study focused on:
- enemy awareness states
- iconography exploration
- escalation clarity
- state readability
- combat communication

---

## Required Work

### 1) Audit current Call of Duty implementation
Inspect the current:
- Call of Duty project entry
- routing model
- project card structure
- case-study detail structure
- media gallery/document viewer behavior

Understand what was built in Tasks 01–03 and extend it cleanly.

Do not over-refactor the whole site.

---

### 2) Introduce a nested or grouped COD case-study structure
Update the data model so Call of Duty can support:
- one parent overview entry
- multiple child case studies

The implementation can be:
- nested routes
- grouped project data with child slugs
- or another clean lightweight structure

Use judgment.

Keep it simple and maintainable.

---

### 3) Make these five the most prominently featured items in the portfolio
These five Call of Duty case studies should become the highest-priority featured work across the site.

This may mean:
- elevating the Call of Duty hub on the homepage
- surfacing 2–3 of the sub-case-studies directly in featured work
- improving the homepage or work-page ordering
- making the COD section clearly feel like the anchor of the portfolio

Do not bury them.

---

## PDF Slideshow Requirements

### 4) Break PDF documents into in-site slideshows
The PDFs should be presented as in-site slideshows for their respective pages.

Target behavior:
- each PDF becomes a **click-through slide gallery**
- users can go page by page
- pages are rendered visually as slides
- navigation is clean on desktop and mobile
- the experience feels like a portfolio presentation, not a raw document embed

Preferred implementation approaches:
- pre-generated page images used by a slideshow component
- or a lean PDF-to-page rendering approach if justified

Avoid:
- raw PDF embeds as the primary experience
- forcing the user to download the PDF to see the work
- clunky iframe/browser-PDF behavior

If page images already exist or can be generated simply, that is preferred.

---

### 5) Organize PDF page assets cleanly
For PDFs that become slideshows, use or establish a clear structure such as:

- `public/assets/projects/call-of-duty/exfil/pdf/`
- `public/assets/projects/call-of-duty/exfil/pages/`
- `public/assets/projects/call-of-duty/play-again/pdf/`
- `public/assets/projects/call-of-duty/play-again/pages/`
- `public/assets/projects/call-of-duty/style-guide/pdf/`
- `public/assets/projects/call-of-duty/style-guide/pages/`

This is a suggestion, not a hard rule.

The important thing is:
- clear naming
- logical grouping
- easy future maintenance

Do not create chaos.

---

## Media Requirements Per Case Study

### 6) MW3 Exfil
The Exfil PDF should become a slideshow-based case study.

The page should likely support:
- hero summary
- short role/context block
- slideshow for the PDF pages
- captions or section notes if useful
- optional supporting stills if already present

This case study should feel cinematic but still easy to scan.

---

### 7) BO6 Keypad Mini Game
This page should support:
- video as a first-class artifact
- keypad flow chart image(s)
- optional still gallery if assets exist
- tighter explanation of the player interaction and logic

The uploaded keypad material suggests this is a highly visual interaction/puzzle case study.
Make the page feel interactive-design-driven.

---

### 8) Warzone / Cold War Design Guide
This page should feel like a **systems and style guide** case study, not just a generic PDF viewer.

Use the style guide PDF slideshow as the backbone.

Consider sections such as:
- design problem
- tonal / brand balancing
- visual targets
- typography and color system
- item branding
- UI consistency across shared and premium content

This is one of the strongest proof points for systems thinking and visual leadership.

---

### 9) Play Again With Team
This page should emphasize:
- information flow
- team/social UX
- post-match structure
- player decision-making
- progression framing

The PDF already reads like a clear case study seed.  
Use that to build a crisp portfolio page, not just a slideshow.

---

### 10) BO6 Stealth System
This page should emphasize:
- state changes
- icon exploration
- alert / hunting / combat readability
- comparative concept directions

The stealth image is a good visual artifact and should be treated as a strong support graphic.

If multiple stealth assets exist in the repo, group them intelligently.

---

## Writing / Editorial Requirements

### 11) Tighten the authored copy
Each of the five pages should get concise, professional authored text.

Tone:
- direct
- senior
- clear
- grounded
- concise

Avoid:
- bloated marketing language
- fake metrics
- invented production details
- giant text walls

Each page should likely have:
- title
- 1–2 sentence summary
- role/context line
- 2–4 short sections max
- media integrated into those sections

---

### 12) Curate the artifacts
Do not show every single asset just because it exists.

Make editorial decisions:
- lead with the strongest visuals
- group related artifacts
- remove repetition
- preserve readability
- keep the pages visually balanced

Better to show fewer things well.

---

## UI / Interaction Expectations

### 13) Improve the gallery / slideshow system only as much as needed
If the current media component is too generic, improve it carefully.

Acceptable upgrades:
- slideshow mode for PDF page images
- captions
- grouped galleries
- video + still support
- per-case-study media blocks
- responsive navigation

Do not build a giant generalized media platform.

Build the minimum good version needed for these five flagship COD case studies.

---

### 14) Keep the rest of the portfolio stable
Do not let this task destabilize the broader site.

The rest of the portfolio can remain simpler.

Call of Duty is allowed to be richer and deeper than the other project areas for now.

---

## Important Constraints

### Be honest
Do not invent scope, outcomes, roles, titles, or metrics.

### Keep it clean
Do not let the COD area become bloated or confusing.

### Prioritize presentation quality
These pages should feel like real portfolio case studies, not asset repositories.

### Preserve maintainability
Future tasks should still be able to add screenshots, PDFs, or extra pages without rewriting the entire structure.

---

## Deliverables

By the end of this task, Dela should have:

1. A Call of Duty hub page
2. Five distinct COD sub-case-study pages
3. PDFs broken apart into in-site slideshows/document galleries
4. Stronger case-study-specific writing
5. Video integrated for the keypad case study
6. Better asset grouping and media structure
7. The strongest, most prominent section of the entire portfolio now centered around these five COD pieces

---

## Acceptance Standard

This task is successful if the COD section now feels like:

> “a premium cluster of flagship AAA case studies”

Not successful if:
- everything is still crammed into one giant page
- PDFs are still treated like dead attachments
- the pages feel repetitive or cluttered
- the new structure is confusing
- media integration is weak
- the site becomes overbuilt

---

## End-of-Task Notes

When finished, provide:

1. A short summary of the new COD information architecture
2. Which five case-study pages were created
3. How PDF slideshows were implemented
4. Which media types are supported on each case study page
5. Any remaining asset gaps or manual prep still needed
6. Any recommendation for Task 05

Do not create Task 05. Only recommend it briefly.
