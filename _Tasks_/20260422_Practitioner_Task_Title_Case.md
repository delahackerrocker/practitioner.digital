# Practitioner.Digital Task — Normalize Titles to Title Case

## Objective
Audit the practitioner.digital site and normalize all user-facing titles/headings to proper Title Case.

This is a focused polish pass, not a broader copy rewrite.

## Core Rule
Use standard Title Case for titles and headings:

- Capitalize the first word
- Capitalize the last word
- Capitalize all major words:
  - nouns
  - pronouns
  - verbs
  - adjectives
  - adverbs
  - subordinating conjunctions

## Words Usually Lowercase in Title Case
Unless they are the first or last word, keep these lowercase:

- articles: a, an, the
- coordinating conjunctions: and, but, or, nor, for, so, yet
- short prepositions: at, by, for, in, of, off, on, out, per, to, up, via

## Important Exceptions
Respect official or intentional styling when it should remain as-is:

- product names
- game titles
- franchise styling
- brand names
- acronyms / initialisms
- known stylized spellings
- UI labels that are intentionally sentence case for product reasons

Examples:
- Call of Duty: Warzone
- Black Ops 6
- UI / UX
- GitHub
- LinkedIn
- practitioner.digital (only if intentionally styled that way in branding contexts)

Do not “correct” official capitalization into something less accurate.

## Scope
Review and normalize Title Case in:

- page titles
- hero headings
- section headings
- card titles
- nav labels, if they are intended as title-style labels
- CTA headings
- modal / panel headings
- case study listing titles
- project index titles
- any other prominent user-facing display headings

## Out of Scope
Do not do a broad prose rewrite.
Do not substantially change body copy unless a tiny wording adjustment is necessary to support a corrected heading.
Do not rename slugs, routes, filenames, or data keys unless required for rendering consistency and clearly justified.

## Implementation Guidance
1. Find every user-facing heading/title pattern in the site.
2. Normalize them to Title Case using the rule above.
3. Preserve intentional brand/game/product capitalization.
4. Keep wording the same where possible; this is a capitalization consistency pass.
5. Check reusable data/config sources first so repeated titles are fixed at the source rather than patched one-by-one in multiple render layers.
6. Avoid introducing regressions in navigation, SEO metadata, or project data bindings.

## Deliverables
Make the code/content changes directly in the repo.

Then provide a concise completion report with:

- files changed
- examples of before/after title fixes
- any titles intentionally left non-Title-Case and why
- any ambiguous cases that were resolved by preserving official branding

## Acceptance Criteria
- User-facing titles/headings are consistently Title Case
- Official/stylized names remain correct
- No unnecessary copy rewrites
- No broken rendering or content bindings
- Repeated titles are fixed from the best source of truth where practical
