# Add a Dev-Only Tuning Editor to practitioner.digital

## Objective
Add a **dev-only visual tuning editor** to the `practitioner.digital` portfolio site.

This is **not** a CMS task and **not** a content-authoring task. It is an **art-direction / layout / presentation tuning system** so we can quickly refine the site visually without hardcoding values all over the repo.

## Core Intent
The site should gain a **single-source-of-truth tuning system** with a lightweight in-app editor.

That means:
- a floating Edit button
- an editor panel
- tabs / grouped controls
- JSON-backed tuning profiles
- an active tuning file
- schema-driven controls
- major visual components reading from shared tuning values instead of local hardcoded magic numbers

This task file is the **authoritative specification** for the feature. Do not assume access to any other repo or project for context.

## Important Product Direction
For `practitioner.digital`, the editor is for:
- typography
- color / brand tuning
- layout spacing and widths
- card treatment
- case-study page presentation
- slideshow / media sizing and framing
- motion tuning
- debug guides

It is **not** for:
- CMS content editing
- WYSIWYG text editing
- database-backed authoring
- marketing automation
- per-page admin tools
- public-facing editing for visitors

## First Step: Inspect the Repo and Fit the Existing Stack
Before implementing, inspect the current project structure and use the **native architecture already present in the site**.

If the repo already has established patterns for:
- components
- hooks
- state
- styles
- JSON config
- route/page organization

then the editor/tuning system should fit that structure cleanly.

Do **not** force a weird parallel architecture if the current site already has a clean pattern.

## Desired High-Level Architecture
Use a structure like this **if it fits the current repo**:

```text
src/
  editor/
    EditorApp.(js|jsx|ts|tsx)
    editor.css
    controls/
  tuning/
    active-tuning.json
    profiles/
      practitioner-default.json
    tuningSchema.(js|ts)
    tuningStore.(js|ts)
    useTuning.(js|ts)
```

Use equivalent naming/extensions if the project stack prefers TypeScript or a different layout.

## Non-Negotiable Rules
1. **Single source of truth**
   - If a visual value is exposed in the editor, the corresponding component should read from that tuning system instead of from a second local hardcoded constant.

2. **Dev-only by default**
   - The editor UI should only appear in local/dev contexts unless there is already a safe project convention for gated debug tooling.
   - Do not expose editing controls publicly on the production site.

3. **Keep it simple**
   - No optional future-proof overengineering.
   - No giant abstraction maze.
   - Build only what we need for this editor pass.

4. **Trustworthy controls**
   - If a control is shown in the editor, it must actually affect the thing it claims to control.
   - Avoid fake or half-wired controls.

5. **Do not break the site**
   - Preserve current site behavior and presentation as closely as possible on initial migration.
   - First pass should mainly expose current behavior through a tunable system, not redesign the whole site.

## Editor Tabs We Want
Create a first-pass editor with these tabs, or their clean equivalent if naming needs slight adjustment:

### 1. Brand
Controls for global brand presentation such as:
- accent colors
- page background colors
- surface/card colors
- text colors
- border colors
- shadow strengths / opacities if applicable

### 2. Typography
Controls for:
- headline font family selection if the repo supports it
- body font family selection if the repo supports it
- headline sizes
- body sizes
- line heights
- letter spacing
- section title spacing
- paragraph spacing

### 3. Layout
Controls for:
- page max widths
- section max widths
- global gutters / horizontal padding
- section vertical spacing
- card padding
- content rhythm
- breakpoint-aware spacing if the current repo already handles responsive tuning in a clean way

### 4. Header / Nav
Controls for:
- header height / spacing
- logo scale
- nav spacing
- sticky behavior flags only if already cleanly supported
- background opacity
- blur strength
- border visibility / opacity

### 5. Home / Hero
Controls for:
- hero content width
- intro block width
- hero vertical spacing
- headline max width
- CTA spacing
- portrait / hero image sizing if present

### 6. Project Grid
Controls for:
- grid gaps
- card aspect ratio / media height
- card radius
- card padding
- title/subtitle spacing
- hover lift amount
- hover scale / shadow tuning if applicable

### 7. Case Study
Controls for:
- case-study page content width
- section spacing
- slideshow/media frame height
- image radius
- caption spacing
- divider spacing
- callout panel treatment if those exist

### 8. Media
Controls for:
- screenshot radius
- gallery gaps
- video frame radius
- media border / shadow treatment
- slideshow sizing / containment behavior where appropriate

### 9. Motion
Controls for:
- transition durations
- hover easing
- reveal distance / intensity if present
- global motion strength
- reduced-motion-safe fallback behavior

### 10. Debug / Guide
Controls for:
- layout guide overlays
- safe-area guides if useful
- max-width guide visualization
- card / section bounds visualization

## Scope of Wiring
Identify the major site components/pages that should consume tuning values in this first pass.

At minimum, wire the tuning system into the major visible shells such as the repo’s equivalents of:
- site shell / app shell
- header / nav
- hero/home intro
- project card grid
- project detail / case-study pages
- slideshow / media framing components
- footer if styling is shared there

Where the repo already has clean shared tokens, prefer routing tuning values through those shared tokens rather than duplicating style logic.

## Implementation Guidance

### A. Build the editor shell
Create:
- floating Edit button
- panel open/close behavior
- tab system
- grouped controls
- consistent control row layout

The editor should feel practical, compact, and trustworthy.

### B. Build the tuning data flow
Create a clean first-pass system for:
- loading a default profile
- reading from an active tuning profile
- applying values to the app
- updating values live while the editor is open

Prefer a lightweight architecture. The goal is to make tuning immediate and dependable.

### C. Create a schema-driven control layer
Where reasonable, use a schema/config-driven control definition so tabs and controls are not hand-built in an excessively repetitive way.

Do not overabstract this. A simple, readable schema is enough.

### D. Use CSS variables where that makes the system cleaner
For global colors, typography, spacing, radii, and shadows, prefer CSS variables if that helps create a reliable single source of truth.

For component-specific layout values, use the most direct and readable approach.

### E. Preserve visual parity on day one
The initial tuning profile should reproduce the current site as closely as possible.

That means:
- audit existing values
- move them into the tuning system
- do not arbitrarily change the art direction during migration

## Deliverables
Implement the feature and provide a concise summary of:
1. what files were added
2. what files were modified
3. which components/pages now read from tuning
4. which tabs/controls are live
5. any values intentionally left hardcoded for now and why

## Acceptance Criteria
This task is successful when all of the following are true:

1. A **dev-only** editor can be opened from the site with a floating Edit button or equivalent unobtrusive trigger.
2. The editor has a clear tabbed structure appropriate for a portfolio site.
3. The site reads core visual values from a shared tuning system rather than scattered hardcoded values.
4. The visible controls actually affect the visuals they claim to control.
5. The initial active tuning profile reproduces the current site look closely.
6. Major areas of the site—especially home/project cards/case study/media framing—are wired into the system.
7. The implementation remains simple and readable.
8. Production visitors do not see the editor by default.

## Nice-to-Have (Only If Cheap and Clean)
If it is inexpensive and fits naturally, it is fine to include:
- reset current tab values to defaults
- reset all values to profile defaults
- copy/export current tuning JSON
- import a profile JSON manually in dev

Do **not** let these nice-to-haves bloat the task.

## Avoid
- introducing a CMS
- building a content editor
- building an account/admin system
- creating fake controls that do not affect the UI
- duplicating style values in multiple places
- massive abstraction for hypothetical future needs
- changing unrelated site functionality

## Final Note
Think of this as giving `practitioner.digital` a **live art-direction workbench** for a polished portfolio / case-study website.

The result should make it dramatically easier to tune the site’s presentation without turning the repo into a science project.
