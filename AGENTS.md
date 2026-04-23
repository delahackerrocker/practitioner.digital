# AGENTS.md

## Purpose

This repository is for the rebuild of Dela's personal portfolio site for `drive-fast-take-chances.com`.

The immediate goal is not to build a giant personal brand platform or CMS.  
The immediate goal is to create a modern, credible, recruiter-friendly portfolio that presents Dela's work clearly and professionally.

This repo should prioritize:

* clarity
* speed of iteration
* strong presentation
* tasteful design
* media-ready case studies
* a polished final result over novelty

---

## Project Scope

This project is a focused portfolio rebuild.

It is intended to answer:

* Can we quickly build a portfolio that feels modern, clean, and professional?
* Can the site present Dela's strongest work with better hierarchy than the older Squarespace site?
* Can the portfolio support screenshots, click-through slideshows, embedded videos, and strong case-study storytelling?
* Can the final result feel senior, credible, and suitable for recruiter and hiring-manager review?

It is **not** currently intended to solve:

* CMS authoring workflows
* admin tooling
* authentication
* backend-heavy app architecture
* experimental 3D experiences unless explicitly requested
* speculative product features
* overbuilt personal-brand infrastructure

Do not expand scope unless explicitly asked.

---

## Tech Stack

Default stack for this repository:

* Vite
* React
* JavaScript
* HTML / CSS

Allowed additions:

* React Router, if routing clearly improves the portfolio
* Framer Motion or GSAP, when clearly useful for restrained motion
* a lightweight gallery or media helper, if it clearly saves time

Avoid introducing additional libraries unless there is a strong practical reason.

Do not introduce:

* TypeScript unless explicitly requested
* heavy UI frameworks
* large animation systems
* state-management frameworks
* CMS dependencies
* unnecessary abstractions

Keep the stack lean.

---

## Core Working Principles

### 1. Credibility over cleverness

The portfolio succeeds by making Dela look experienced, sharp, and trustworthy.

A cleaner, more restrained result is better than a louder or more experimental one.

### 2. Simplicity over architecture theater

Do not over-engineer.

Do not build speculative systems for future needs.

Implement only what is needed for the current portfolio milestone.

### 3. The work is the hero

Case studies, images, videos, outcomes, and role clarity are the primary value of this site.

The UI should support the work, not compete with it.

### 4. Keep the code readable

Favor code that is easy to inspect, edit, and extend.

If a simple solution works well, prefer it over a clever one.

### 5. Separate content from presentation

Keep layout/components distinct from portfolio content wherever practical.

The project should remain mentally legible as:

* content / case-study data
* layout / components
* styling / visual system

### 6. Ship the current task, not the imaginary future

Do not add editors, configuration systems, toggles, dashboards, or generalized tooling unless explicitly requested.

No anticipatory feature creep.

### 7. Taste matters

Motion should be restrained.  
Typography should be strong.  
Spacing should be intentional.  
Color should be controlled.

When in doubt, remove clutter rather than add more.

---

## Human-in-the-Loop Requirement

The user remains the owner of repository operations and the final point of judgment for structure, scope, and direction.

Coding agents should not assume control of repository-management decisions. The user will handle repo creation, branching, commits, merges, deployment decisions, and other repository-level actions unless explicitly asked otherwise.

Agents should focus on producing clear, reviewable work that keeps the user closely connected to the project's evolution.

---

## Working Tree Safety

At the start of each task, inspect the working tree.

If there are uncommitted tracked changes:
* ask once whether the user wants you to wait for a commit first, or proceed and modify the current uncommitted changes
* treat the user's answer as the rule for the rest of that task
* do not ask again during the same task unless the situation materially changes in a new way

Default behavior:
* do not modify existing uncommitted tracked files unless the user explicitly approves it for that task

If the task instruction already says you may build on top of current uncommitted work, proceed without asking.

Focus this rule on protecting user work in tracked files. Do not stop just because of untracked files or ordinary build artifacts unless the user explicitly asks for that behavior.

---

## Creative Direction

The target feeling is:

* modern
* dark
* clean
* confident
* polished
* professional
* restrained
* premium

The site should avoid feeling:

* template-y
* noisy
* gamey
* gimmicky
* over-animated
* cluttered
* overly corporate and bland
* like a student portfolio

Preferred qualities:

* dark or black as a core visual foundation
* strong hierarchy
* generous spacing
* large, confident media areas
* subtle motion
* minimal chrome
* clear call-to-action paths
* fast scanning for recruiters

The portfolio should feel like a polished product experience, not a generic personal website.

---

## Coding Style

Use plain JavaScript unless explicitly told otherwise.

Prefer straightforward functions and components over heavy abstraction.

Break files apart only when doing so improves clarity.

Do not create elaborate class hierarchies or framework-like patterns for a site of this size.

Comments should be used when they genuinely clarify intent, not to narrate obvious code.

When choosing between multiple technically valid solutions:

* prefer fewer moving parts
* prefer readability
* prefer easy tuning
* prefer easy content updates
* prefer stronger presentation with less code

---

## File and Folder Guidance

A preferred structure is:

src/
data/
siteContent.js
projects.js

components/
Navbar.jsx
Hero.jsx
Section.jsx
ProjectCard.jsx
MediaGallery.jsx
Footer.jsx

pages/
Home.jsx
ProjectDetail.jsx

styles/
globals.css
layout.css
components.css

App.jsx
main.jsx

public/
assets/
images/
videos/
documents/

This structure may be adjusted if a simpler organization proves better.

Do not create unnecessary folder nesting.

---

## Content Guidance

This portfolio should present a curated selection of work.

Prioritize:

* strongest, most credible projects first
* clear role descriptions
* concise summaries
* readable problem / process / outcome framing
* evidence of shipped work
* media that actually supports the story

Avoid:

* huge undifferentiated project dumps
* vague self-promotional filler copy
* walls of text with no hierarchy
* inconsistent case-study structure
* placeholder junk that makes the portfolio feel unfinished

Default toward fewer, stronger projects.

---

## Title Case Rule

Use standard Title Case for user-facing titles and headings.

That means:

* capitalize the first word
* capitalize the last word
* capitalize all major words, including nouns, pronouns, verbs, adjectives, adverbs, and subordinating conjunctions

Keep these lowercase unless they are the first or last word:

* articles: a, an, the
* coordinating conjunctions: and, but, or, nor, for, so, yet
* short prepositions: at, by, for, in, of, off, on, out, per, to, up, via

Respect official or intentional styling when it should remain as-is, including:

* product names
* game titles
* franchise styling
* brand names
* acronyms and initialisms
* known stylized spellings
* UI labels that are intentionally sentence case for product reasons

Do not “correct” official capitalization into something less accurate.

Apply this rule to:

* page titles
* hero headings
* section headings
* card titles
* nav labels when they function as title-style labels
* CTA headings
* modal or panel headings
* case study listing titles
* project index titles
* other prominent user-facing display headings

This is a capitalization consistency rule, not permission for a broader rewrite.

---

## Asset Handling

Existing material from the old Squarespace site, résumé, PDFs, screenshots, videos, and other project assets should be treated as source material for the rebuild.

Do not destructively alter source assets unless explicitly asked.

Runtime assets should be kept organized and clearly named.

If final assets are not yet available, it is acceptable to use structured placeholders as long as the layout remains clean and believable.

---

## Motion and Visual Effects Guidance

Prioritize:

* subtle polish
* smooth hover states
* restrained entrance motion
* elegant page transitions when justified
* clear and stable media presentation

Avoid:

* aggressive animation
* excessive parallax
* gimmicky scroll behavior
* flashy hero effects
* distracting transitions
* anything that hurts readability or perceived professionalism

Everything should feel intentional.

A smaller amount of well-tuned motion is better than a larger amount of average motion.

---

## React / UI Guidance

React should primarily serve as:

* portfolio structure
* layout composition
* content presentation
* lightweight interaction
* media display

Do not let UI styling overwhelm the content.

Keep the interface clean and legible.

The React layer should support the case studies, not compete with them.

---

## Routing and Content Model Guidance

Prefer a simple architecture.

A one-page structure, lightweight routes, or a hybrid approach are all acceptable if they keep the site easy to maintain and fast to scan.

Case studies should be data-driven where practical.

Do not hardcode the entire site in one giant component if a simple local data structure would make content easier to maintain.

---

## Dependency Discipline

Before adding a dependency, ask:

1. Does this clearly save time?
2. Does this clearly improve the portfolio?
3. Is it simpler than writing the required behavior directly?

If the answer is not clearly yes, do not add it.

Default to fewer dependencies.

---

## Build / validation policy for this React/Vite project

- This project may fail to run `npm run build` inside the Codex sandbox because Vite/esbuild may hit `spawn EPERM`.
- Do not retry `npm run build` repeatedly if the failure is a sandbox/permission/child-process error.
- If build verification is blocked by sandbox limitations, say so plainly and do not claim a clean build.
- In that case, still complete the code changes and run any lower-risk verification that is available in the environment.
- Prefer this fallback order:
  1. targeted file inspection
  2. typecheck/lint if available and runnable
  3. explain exactly what the user should run locally to verify
- When reporting results, distinguish clearly between:
  - code changes completed
  - validation completed
  - validation blocked by sandbox limitations
- Do not describe sandbox-blocked build failure as a project code failure unless there is direct evidence.

---

## Permissions and Tooling Expectations for Coding Agents

Coding agents may:

* create and modify source files
* refactor code related to the current portfolio task
* add lightweight dependencies when justified
* improve structure when it clearly simplifies the current work
* create reusable content/data structures when they clearly help maintainability

Coding agents should not:

* introduce large new frameworks
* rewrite the project around speculative future goals
* add build or deployment complexity that is not needed for the current milestone
* create lots of optional toggles or future-proofing systems
* change the project's core scope without being asked
* perform repository operations such as repo creation, branching, commits, merges, or other repo-level control unless explicitly asked

---

## Vite Build Policy

For this repository, do not run `npm run build` / Vite builds by default in Codex unless the user explicitly requests it or the task specifically requires runtime build verification.

Reason:
- In this repo’s Codex environment, Vite/esbuild build attempts may fail for sandbox/environment reasons rather than project-code reasons.

Workflow:
- Prefer lightweight validation first for copy/content/styling tasks.
- For runtime-affecting code changes, a single build attempt is acceptable if explicitly requested or clearly warranted.
- If the build fails with a known sandbox/environment execution error, do not retry repeatedly.
- Report clearly whether:
  - code changes are complete
  - validation was completed
  - validation was blocked by the Codex environment

---

## Tasking Philosophy

Tasks should be narrowly scoped and visibly meaningful.

Good tasks:

* produce visible progress
* improve hierarchy, polish, or readability
* strengthen the portfolio's credibility
* preserve simplicity
* leave the repo cleaner or clearer than before

Bad tasks:

* solve imaginary future problems
* create architecture without visible payoff
* add infrastructure before the site earns it
* overcomplicate simple presentation problems

---

## Preferred Development Order

In general, prioritize work in this order:

1. Site shell and layout structure
2. Visual system and typography
3. Featured work presentation
4. Case-study detail pattern
5. Media handling for screenshots and video
6. Copy/content refinement
7. Deployment polish

Do not start with speculative plumbing.

Start with the thing that makes the portfolio immediately feel credible.

---

## Final Standard

This portfolio should feel like:

“a modern, dark, professional portfolio for a senior UI / UX / game developer”

not:

“a generic template site”  
or  
“an overdesigned experiment”

If forced to choose, always choose the path that makes the portfolio feel clearer, more polished, more intentional, and more credible.
