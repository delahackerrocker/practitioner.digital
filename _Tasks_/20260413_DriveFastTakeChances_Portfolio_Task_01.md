# 20260413 Drive Fast Take Chances Portfolio — Task 01
**Repo Path:** `E:\Developer\drive-fast-take-chances.com`  
**Priority:** High  
**Goal:** Build the first clean, modern, dark-mode version of the portfolio site shell in React, with enough structure and polish that Dela can immediately start dropping in real case-study content.

---

## Context
This repo is the new custom rebuild of Dela's portfolio site, replacing an older Squarespace portfolio currently living at:

- `https://www.drive-fast-take-chances.com/`
- `https://www.drive-fast-take-chances.com/interactive-portfolio`
- `https://www.drive-fast-take-chances.com/callofduty`

The old site has good raw material but outdated presentation.  
This rebuild should feel:

- modern
- clean
- professional
- dark / black as the core visual direction
- strong enough for recruiter and hiring-manager review
- especially suitable for Microsoft-adjacent UI / UX / game / product work

This is **not** the final content pass.  
This task is about building the **foundation**.

---

## High-Level Intent
Create a portfolio shell that immediately looks credible and current.

The site should feel more like a polished product experience than a template portfolio.  
Keep it restrained. Avoid gimmicks, novelty interactions, and over-designed motion.

Think:
- premium black / charcoal UI
- strong typography
- excellent spacing
- large media areas
- subtle hover / reveal motion only
- responsive
- easy to extend with real case-study content

---

## Core Requirements

### 1) Establish the app structure
Inspect the repo and work with whatever is already there.

If the repo is already a React app, continue from the existing structure.  
If the repo is not yet scaffolded, set up the minimum clean React foundation needed for this task.

Preferred stack if needed:
- React
- Vite
- plain CSS or a very lightweight styling approach already present in repo

Do **not** introduce unnecessary framework complexity.

---

### 2) Build the first real page structure
Create a professional first pass of the portfolio with these sections/pages:

#### Home
Should include:
- hero / introduction
- short positioning statement
- CTA area for:
  - Resume
  - Contact
  - LinkedIn and/or GitHub if easy placeholders exist
- featured work preview section
- brief “about / experience” strip
- contact footer

#### Work / Selected Projects
A section or route showing featured project cards.

For now, seed it with placeholder or migrated starter entries based on the old site content, such as:
- Call of Duty
- USAF / VR Intelligence Tool
- Overwatch Companion
- Dragon / creature / technical art work
- one personal / experimental project

These do **not** need perfect final copy yet, but should be structured cleanly.

#### Case Study Detail Pattern
At least create the reusable structure for a detailed case-study page or view, even if only one item is partially wired.

Each case study should be capable of supporting:
- title
- short summary
- role
- project type
- timeframe or release context
- problem / challenge
- process / approach
- outcome / impact
- media gallery area
- video embed area
- external links / docs if needed

It is acceptable if only one detail page is actually wired in this task, as long as the pattern is clearly established.

---

### 3) Make the site data-driven
Do **not** hardcode the whole site inline in one giant component.

Create a sane, lightweight content model for:
- site metadata
- hero copy
- featured projects
- case-study entries
- contact links

This can be a local data file or small config structure.

The goal is that later tasks can update content cleanly without ripping apart layout code.

Keep it simple.

---

### 4) Visual design direction
Dark / black is the core color direction.

Target feel:
- black or near-black background
- slightly lifted dark panels/cards
- soft white text
- restrained accent color if needed
- subtle borders, dividers, and hover states
- no loud gradients unless extremely controlled
- no cheesy glow spam
- no fake “gamer” styling

This should look like a senior designer / developer portfolio, not a sci-fi landing page.

---

### 5) Media-ready layout
This site must support:
- large screenshots
- click-through slideshows
- embedded videos

For **this first task**, do not overbuild the media system.

Instead:
- build project/media containers that are clearly ready for images and video
- if appropriate, create a very simple gallery or carousel pattern
- prioritize layout quality over feature completeness

A basic clean click-through image gallery for project detail pages is welcome if it can be done simply and cleanly.  
If not, just create the structure and placeholders.

---

### 6) Responsive behavior
The site must look good on:
- desktop
- laptop
- tablet
- mobile

Prioritize desktop first, but do not leave mobile broken.

The home hero, featured cards, nav, and case-study layout should all collapse gracefully.

---

### 7) Navigation and polish
Create a simple, professional navigation model.

Could be one of:
- top nav with section links
- top nav with routes
- hybrid lightweight routing

Either is fine. Use judgment based on the repo and what feels fastest + cleanest.

Polish expectations:
- smooth scrolling if appropriate
- subtle hover states
- restrained entrance animations
- no laggy, fragile motion systems
- clear readable hierarchy

---

## Important Constraints

### Keep it simple
Do not over-architect.
Do not add CMS logic.
Do not add authentication.
Do not add admin tooling.
Do not add unnecessary animation libraries unless already present and useful.

### Build for speed and credibility
This is meant to get Dela to a strong, presentable first version quickly.

### Make clean design decisions autonomously
You do not need to ask for detailed art direction.
Use strong judgment.
Err on the side of:
- minimal
- elegant
- spacious
- confident

### Avoid filler
Do not generate cheesy marketing copy.
Use concise, plausible placeholder copy where necessary.

### Do not get stuck trying to perfect content
This task is about shell, structure, and visual system.

---

## Recommended Content Pull From Old Site
Use the old Squarespace site only as inspiration for starter structure/content hierarchy:

Potential featured items:
- Call of Duty work
- USAF / VR / intelligence-related UX work
- Overwatch Companion
- Dragon / creature / animation / technical work
- one personal or experimental project

The new site should **not** preserve the old split between “interactive portfolio” and “callofduty” as two separate portfolio worlds.  
Unify everything into one modern portfolio experience.

---

## Suggested Implementation Shape
Use your judgment, but a solid target would be something like:

- `App`
- `layout/`
- `components/`
  - `Navbar`
  - `Hero`
  - `Section`
  - `ProjectCard`
  - `CaseStudyHero`
  - `MediaGallery`
  - `Footer`
- `data/`
  - portfolio content / project definitions
- `pages/`
  - `Home`
  - optional `ProjectDetail`

This is only a suggestion.  
Do not restructure aggressively unless it improves clarity.

---

## Deliverables
By the end of this task, Dela should have:

1. A working first-pass portfolio site shell
2. Dark, modern visual direction established
3. Home page that already looks professional
4. Featured projects presented in a convincing way
5. At least one reusable case-study detail pattern
6. Content/data separated from layout code in a sane way
7. A clean foundation for future tasks involving:
   - better case-study writing
   - real media population
   - resume/contact polish
   - deployment / domain setup

---

## Acceptance Standard
This task is successful if Dela can open the site locally and say:

> “Yes, this already feels like a real modern portfolio, and now we just need to keep filling it in.”

Not successful if it feels:
- template-y
- over-styled
- under-designed
- cluttered
- too experimental
- too sparse to be useful

---

## End-of-Task Notes
When finished, provide:

1. A short summary of what you changed
2. Any new folders/files created
3. Any placeholder content areas that still need real assets/copy
4. Exact local run command if anything changed
5. Any recommendations for Task 02

Do not create Task 02. Only recommend it briefly.
