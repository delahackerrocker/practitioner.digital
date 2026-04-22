# Practitioner.Digital Task 05 — Keep the Editor Current After Section Removal

## Goal
Now that the **Selected Work** and **Supporting Work** sections are being removed from the site, update the editor so it reflects the real live structure of the portfolio and does not expose dead controls, stale labels, or orphaned data paths.

This is not just a visual cleanup. The editor must stay aligned with the runtime app.

## Context
We are intentionally simplifying the portfolio. If those sections no longer exist on the live site, the editor should not continue to present:
- tabs
- panels
- labels
- section toggles
- copy fields
- layout controls
- card controls
- anchors
- schema entries
- default data
- preview data
- save/load paths

for sections that no longer render.

The editor should describe the current site, not a previous version of the site.

## Requirements

### 1) Remove stale editor UI for deleted sections
Find and remove any editor controls related to:
- Selected Work
- Supporting Work

This includes any tabs, accordions, groups, field labels, sub-panels, or helper text tied to those sections.

### 2) Remove stale data/schema entries
Remove or refactor any configuration objects, schema entries, defaults, profile values, or content structures that only exist to drive those removed sections.

Do not leave dead keys in place unless there is a documented reason they must remain for backwards compatibility.

### 3) Remove dead preview/render hooks
If the editor preview still renders placeholders, cards, headings, or layout regions for those sections, remove them.

The editor preview should match the simplified live site structure.

### 4) Remove dead navigation/editor references
If there are internal anchors, section IDs, navigation labels, or editor jump links that still point to these removed sections, remove or update them.

No ghost links.

### 5) Preserve the rest of the editor
Do not break unrelated editing flows.
This task is about keeping the editor in sync, not refactoring the editor architecture.

### 6) Prefer real removal over hiding
Do not solve this by simply hiding controls with CSS or feature flags unless that is already the established architecture and there is a strong reason to keep the underlying structure.

Prefer deleting or cleanly removing obsolete editor paths.

## Acceptance Criteria
- The live site no longer contains Selected Work or Supporting Work sections.
- The editor no longer contains controls for those sections.
- The editor preview no longer shows those sections.
- No nav items, anchors, or labels point to removed sections.
- No obvious dead schema/default content remains for those sections.
- Build succeeds cleanly.
- A quick editor sanity pass confirms that the remaining editable areas still work.

## Notes for Codex
Please include in your final summary:
1. Which editor files were updated
2. Which runtime files were updated
3. Whether any schema/default/profile keys were removed
4. Whether any dead navigation anchors were removed
5. Any intentionally preserved legacy keys, if applicable, and why
