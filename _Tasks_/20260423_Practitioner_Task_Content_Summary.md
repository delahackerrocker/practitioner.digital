# Practitioner.digital — Content Summary Task

## Objective
Create a single markdown document that summarizes **all user-facing content currently present in the practitioner.digital site**.

This is a **content audit / summary task**, not a redesign task. The goal is to produce a clean, readable `.md` reference that tells us what content is on the site right now, where it lives, and how it is currently framed.

## Read First
Before making changes, read and follow:
- `AGENTS.md`
- `PROJECT_CONTEXT.md`

## Primary Deliverable
Create a new markdown file in the repo:

`CONTENT_SUMMARY.md`

If a better docs location already exists in the repo, place it there instead, but keep the filename exactly:

`CONTENT_SUMMARY.md`

## Scope
Audit and summarize **current site content only**, including:
- all public routes/pages currently represented in the site
- homepage sections
- header / nav labels
- footer content
- case study titles and their current supporting text
- bios / about copy
- service / capability copy
- CTA text
- labels, headings, subheadings, button copy, and notable UI copy
- notable embedded media references tied to content (videos, PDFs, image galleries, flow charts, etc.)

Also include content that is present in the codebase even if it is hidden behind tabs, accordions, modal content, slide viewers, or route-level data structures, **as long as it is part of the current site experience**.

## What This Task Is Not
Do **not**:
- rewrite copy
- redesign layouts
- rename sections
- delete content
- create new marketing language
- perform speculative cleanup

This task is about documenting the current state.

## Working Method
1. Inspect the current repo and identify all user-facing routes and content sources.
2. Trace the content back to its source files where practical.
3. Produce a concise but thorough summary of what is currently on the site.
4. Prefer summarizing the actual rendered experience, not just dumping raw strings from code.
5. If the site has repeated/shared content patterns, summarize the pattern once and note where it is reused.

## Required Output Structure
Use this structure in `CONTENT_SUMMARY.md`:

### 1. Site Snapshot
A brief high-level summary of what the site currently is and what kind of content it contains.

### 2. Route / Page Inventory
A table with columns like:
- Route / URL
- Page / Section Name
- Purpose
- Key Content Present
- Primary Source File(s)

### 3. Global Content Elements
Summarize:
- header / nav
- footer
- persistent UI copy
- recurring labels / repeated structural content

### 4. Per-Page / Per-Section Content Summary
For each route or major page section, include:
- section/page name
- concise summary of what the section says
- important headings/subheadings
- key body copy themes
- CTA/button text
- notable media/content attachments
- source file(s)

### 5. Case Study Inventory
For every case study currently present, include:
- title
- short summary of what the case study communicates
- supporting media present (PDF, slideshow, video, images, flow chart, etc.)
- current state notes if relevant (for example: sparse copy, placeholder copy, stronger than average copy, media-heavy, etc.)
- source file(s)

### 6. Content Patterns and Reuse
Identify recurring patterns such as:
- repeated bio/capability language
- shared case study templates
- repeated CTA structures
- content driven by shared data/config files

### 7. Gaps / Incomplete / Placeholder Content
Create a clearly labeled section for anything that appears incomplete, temporary, duplicated, overly thin, placeholder, or likely unfinished.

This section should be observational, not prescriptive.

### 8. Appendix — Content Source Map
List the most important files that contain or drive site content so a human can quickly find and edit content later.

## Quality Bar
The summary should be:
- easy to skim
- useful to a human making future copy or IA decisions
- grounded in the actual current repo/site
- organized enough that we can use it as a reference document later

## Implementation Notes
- Be precise about what exists now.
- When helpful, name the component/file where content lives.
- Do not flood the document with unnecessary code detail.
- Do not paste giant raw copy blocks unless needed for clarity.
- Prefer clean summaries over exhaustive string dumps.
- If content is generated from data/config, say so.

## Acceptance Criteria
- A new `CONTENT_SUMMARY.md` file exists.
- The document covers all current user-facing pages/sections/routes.
- The document includes a case study inventory.
- The document includes nav/footer/global content.
- The document includes source file references.
- The document calls out obvious placeholder/incomplete areas without trying to fix them.
- No unrelated code or design changes are made.

## Nice-to-Have
If straightforward, include a short **“Content Density Notes”** subsection that lightly flags which pages/sections are:
- dense / well-developed
- light / sparse
- media-heavy
- copy-heavy

Keep that light and observational.
