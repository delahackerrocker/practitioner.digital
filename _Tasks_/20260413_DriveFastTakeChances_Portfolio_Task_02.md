# 20260413 Drive Fast Take Chances Portfolio — Task 02
**Repo Path:** `E:\Developer\drive-fast-take-chances.com`  
**Priority:** High  
**Goal:** Replace weaker placeholder project choices with stronger featured work, and seed the portfolio content model using real material from the current live site.

---

## Context

Task 01 established the React/Vite portfolio shell.

Now the priority is to improve the credibility of the **content layer** by replacing generic placeholder structure with real starter content drawn from the existing site.

The current live site contains usable source material at:

- `https://www.drive-fast-take-chances.com/`
- `https://www.drive-fast-take-chances.com/interactive-portfolio`
- `https://www.drive-fast-take-chances.com/callofduty`

We are intentionally using the old site as a **content mine**, not as a design reference.

---

## Core Direction Change

### Replace USAF as a featured visual project
The USAF project should **remain in the portfolio**, but it should **not** be one of the primary featured projects on the homepage or in the first row of selected work.

Reason:
- it has credibility, but the current presentation is more text-forward and less visually impressive
- for first impression, we want more immediate visual punch

### Promote these instead
The featured set should now prioritize:

1. **Call of Duty** — flagship credibility anchor
2. **Snoopy's Soapbox Racers** — stronger visual showcase piece
3. **Rebel Future** — important personal vision / original IP / design identity
4. **Overwatch Companion Demo** — strong concept / interface / fan-product style piece
5. **How to Train Your Dragon Demo** or other strongest visual backup piece, if needed

USAF can stay in the broader work list, just not as one of the main highlighted entries.

---

## Main Task

Update the portfolio's content/data layer so the site feels less like placeholders and more like a real first-pass portfolio.

This task is primarily about:
- content selection
- project ordering
- real starter copy
- case-study seeding
- small content-driven presentation updates where needed

This task is **not** about a major visual redesign.

---

## Required Work

### 1) Audit the current local portfolio data structure
Inspect whatever was created in Task 01, especially files such as:

- `src/data/siteContent.js`
- `src/data/projects.js`

or equivalent.

Understand how project cards, featured work, and case-study detail pages are currently populated.

Work within that structure unless a small cleanup clearly improves maintainability.

Do not over-refactor.

---

### 2) Replace the featured project set
Update the homepage / featured work / selected work ordering to reflect this preferred priority:

#### Primary featured projects
- Call of Duty
- Snoopy's Soapbox Racers
- Rebel Future
- Overwatch Companion Demo

#### Secondary / supporting projects
- How to Train Your Dragon Demo
- Glave Gunner iPad UI
- VR Intelligence Tool for the USAF
- Authoring Tool Final + VR Panels
- Curious George

You do not need to expose every project equally.

Prefer a tighter, more curated first impression.

---

### 3) Seed real content from the existing site
Use the live site as source material and write concise, believable first-pass case-study copy into the local content model.

Do **not** scrape blindly and dump raw text everywhere.

Instead, interpret and shape the content into a cleaner case-study format.

Use concise language and clear hierarchy.

---

## Source Material to Seed

### A) Home / hero summary
The current landing page positions Dela as:
- a UX designer and coder
- someone who has been designing and coding games since age 14
- someone who has worked on AAA titles like Call of Duty at Activision Blizzard
- someone who has shipped VR/AR experiences for clients like Google, the NBA, and the U.S. Air Force
- someone who combines user experience, gameplay design, and scalable technology

Use that as source material for:
- hero intro
- short positioning copy
- brief experience strip or about strip

Do not copy it verbatim if it reads too long. Tighten it.

---

### B) Call of Duty
Use the current Call of Duty page as the basis for a stronger flagship entry.

Existing site source material says:
- Dela shipped 5 major Call of Duty releases:
  - Black Ops 6
  - Vanguard
  - MW2
  - MW3
  - Warzone
- He designed and implemented multiple features
- He engineered content pipelines
- He worked on a large team with hundreds of people

Existing feature/document examples on the page include:
- Warzone Style Guide
- Stealth Meter In-World UI
- Warzone Character Selection
- After Action Report (AAR) UX Flow for Successful Exfil
- Jupiter AAR User Flow
- Multiplayer AAR + Play Again With Team
- Health Bar and Armor Plate UI
- Keypad Mini Game (WORDL-like)
- Stealth Bomber Kill Cam Overlay
- Tactical Map Screen
- Other Map Screens
- Contextual Messaging UI
- Ghostbusters Limited Time Mode
- teammate training documents

Build a more coherent starter case study around this material.

Suggested framing:
- **Role:** UI/UX Technical Designer
- **Scope:** shipped features, UX flows, pipelines, documentation
- **Environment:** large multi-discipline AAA team
- **Value:** feature design plus implementation-minded execution

Do not try to fully author every sub-feature yet.
Instead, make this first-pass case study feel real, structured, and impressive.

---

### C) Snoopy's Soapbox Racers
The current interactive portfolio clearly presents this as a named project.

For now:
- include it as a featured visual project
- give it a concise summary written in a professional way
- create placeholders for media if assets are not already available locally

Because the current source page is thin here, it is acceptable to write a restrained starter summary instead of pretending to know every production detail.

Tone target:
- honest
- concise
- visually led
- not fake-detailed

---

### D) Rebel Future
Use the current site's Rebel Future / Glave Gunner material to seed this as a significant project family.

Relevant source items on the old site include:
- RF: Glave Gunner: Player Embodiment Demo
- Rebel Future: Glave Gunner: StarFighter Module
- Rebel Future Video Game Teaser
- Glave Gunner Cartoon Intro
- Glave Gunner iPad UI
- PDFs on the Call of Duty page describing the universe / characters and gameplay look-and-feel

This should be consolidated into a cleaner portfolio story.

Suggested treatment:
- use **Rebel Future** as the main project title
- present it as Dela's original game/world/brand
- mention that Glave Gunner is part of that universe
- mention relevant sub-areas such as:
  - game direction
  - UI/UX
  - gameplay concepting
  - embodiment / VR experimentation
  - visual identity
  - teaser / intro / supporting media

Do not overcomplicate the information architecture.
This can be one strong umbrella case study for now.

---

### E) Overwatch Companion Demo
Use the existing title and current portfolio presence to seed a strong starter case study card and detail view.

This can stay concise in this pass.
The goal is to make it look intentional and real, not unfinished.

---

### F) USAF
Keep the USAF project in the site, but move it out of the featured hero tier.

Existing source material says:
- it used a fake data set for security reasons
- it worked on tablets and VR headsets
- it allowed operatives to consume or record intelligence data using 3D globe views and complex network-like data structures
- Dela was a UX designer building UI prototypes in Unity and later also played a developer role with a larger team shipping the product

This is very good credibility material.
Preserve it.
Just do not let it dominate the first impression.

---

## Copy Expectations

### General rules
- Tighten everything
- Remove weak filler
- Avoid cheesy self-marketing language
- Avoid giant blocks of text
- Prefer 2–4 sentence summaries where possible
- Structure detail pages so they can later be expanded

### Case-study structure
Where practical, seed fields like:
- title
- short summary
- role
- type
- context
- challenge
- contribution / approach
- outcome or current placeholder outcome
- media array
- optional links

Not every field must be fully populated yet, but the structure should feel ready for real content.

---

## Presentation Expectations

Where content updates expose opportunities for small improvements, you may also:

- improve project ordering
- tighten card labels
- improve section headings
- refine CTA labels
- make sure the homepage feels intentionally curated

Do not turn this into a redesign task.

---

## Important Constraints

### Be honest
Do not invent fake achievements, metrics, or production details.

If source material is thin, write restrained placeholder summaries that sound professional and believable.

### Keep the site curated
More projects is not automatically better.

A smaller set of stronger projects is the right move.

### Preserve data-driven structure
Do not collapse everything back into one giant JSX file.

Keep the content layer easy to edit in future tasks.

---

## Deliverables

By the end of this task, Dela should have:

1. A better featured-project lineup
2. Snoopy and Rebel Future promoted into meaningful featured positions
3. USAF retained but deprioritized visually
4. A more convincing Call of Duty flagship entry
5. Starter copy seeded from the existing site into the local content model
6. A portfolio that feels less placeholder-heavy and more like a real first draft

---

## Acceptance Standard

This task is successful if the site now feels like:

- it has a point of view
- it is highlighting the right work first
- the project cards and case-study pages feel intentionally seeded from real content
- the user can begin replacing summaries with stronger authored copy later, instead of rebuilding structure

Not successful if:
- the site still feels mostly placeholder
- the featured work order is weak
- the new copy reads generic or invented
- the content model becomes more tangled

---

## End-of-Task Notes

When finished, provide:

1. A short summary of what content and ordering changed
2. Which projects are now featured vs secondary
3. Which fields still need real assets or better copy
4. Any recommendation for Task 03

Do not create Task 03. Only recommend it briefly.
