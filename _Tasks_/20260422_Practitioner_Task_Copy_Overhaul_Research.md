# Practitioner.digital — Copy Overhaul Research Task

## Objective
Update the **general site copy** on `practitioner.digital` so it feels sharper, more credible, more current, and more hireable.

The copy **inside the case studies is already mostly decent**. The main target is the broader framing copy around the site:
- homepage hero / intro
- supporting homepage paragraphs
- section intros
- overview / category copy
- project card blurbs if they feel soft or generic
- about / profile language
- CTA / contact copy
- footer copy or other repeated framing language

This task should **not** turn the site into corporate beige. Keep Dela’s hybrid artist / engineer identity intact. The goal is to make the site read like a strong senior design-engineering portfolio instead of a first-pass self-description.

---

## Core Strategy
Do a **research-backed copy pass** before editing. The site should sound grounded in real shipped work, informed by how strong UX / design-engineering portfolios present themselves, and aligned with the actual games / features being discussed.

You are not just line-editing. You are:
1. verifying claims,
2. tightening positioning,
3. improving clarity,
4. reducing vague language,
5. making the site easier for hiring managers / leads to scan quickly.

---

## Research Inputs
Use web research first, then edit.

### 1) Research Dela’s current positioning
Review and compare the copy and public framing across:
- `https://www.practitioner.digital/`
- `https://www.drive-fast-take-chances.com/`
- `https://www.linkedin.com/in/delahackerrocker/`

Pull from these sources to understand:
- Dela’s hybrid role across UX, UI, gameplay, and engineering
- shipped Call of Duty work
- XR / interactive work for brands or institutions
- tone already present in the portfolio
- which claims are strong and specific versus vague and reusable

### 2) Research the games / features discussed in the site
For the case-study ecosystem and surrounding copy, look up the games, modes, systems, and project contexts Dela references.

Prioritize official sources when possible. Use Call of Duty / Activision / official game materials first, then reputable supporting coverage if needed.

At minimum, investigate the public context for items like:
- Call of Duty: Modern Warfare III
- Modern Warfare Zombies / Exfil context
- Call of Duty: Warzone
- Black Ops Cold War + Warzone integration context
- Call of Duty: Black Ops 6
- Black Ops 6 campaign / stealth / safehouse / keypad or adjacent feature context if publicly documented
- any project names or feature names currently present on the site

The goal is **not** to rewrite private internal work as if it were public design documentation. The goal is to make the surrounding copy more accurate about the player context, the product context, and why the work mattered.

### 3) Research strong portfolio copy patterns
Study a small set of high-quality UX / design-engineering / developer portfolio references to understand how they:
- introduce themselves quickly
- frame cross-disciplinary strengths
- balance personality with credibility
- keep project descriptions concise
- avoid generic self-important fluff

Use a mix of direct portfolio examples and portfolio advice sources.

Suggested references:
- Brittany Chiang
- Simon Pan
- Bruno Simon
- one strong game-UI / game-UX portfolio if you find a relevant one
- NN/g article(s) on UX portfolios
- hiring-manager or portfolio guidance from a credible source

Do **not** imitate any one site’s voice. Extract patterns only.

---

## What To Improve
Audit the live copy and update the real source files in the repo.

### Priority 1 — Homepage / top-level framing
Tighten the first impression so a recruiter or hiring lead immediately understands:
- what Dela is
- what Dela has shipped
- why the hybrid design + engineering angle matters
- what kinds of roles or problems this portfolio is relevant to

The top-level copy should be:
- clearer
- more concrete
- less overwritten
- easier to skim

### Priority 2 — General section copy
Improve any copy that introduces groups of work, such as:
- case study index intros
- section or category descriptions
- portfolio overview blurbs
- generic descriptors like “I make experiences” if they are too broad

Every section intro should earn its space.

### Priority 3 — Project summaries outside the main case-study body
If there are project cards, teasers, or overview blurbs that undersell the work or sound generic, rewrite them.

These should communicate:
- the product context
- the design / systems problem
- the kind of contribution made
- enough intrigue to click through

### Priority 4 — About / contact / supporting copy
Refine any biography or CTA language so it sounds senior, specific, and human.

---

## Voice + Style Guardrails
Keep these constraints tight:

### Keep
- confident tone
- creative identity
- hybrid designer / developer positioning
- some edge and personality
- love of games, systems, craft, and interaction

### Reduce
- generic “I’m passionate about…” filler
- overblown fantasy wording when a concrete claim would hit harder
- repeated claims said three different ways
- vague adjectives like “innovative,” “immersive,” or “impactful” unless backed by context
- copy that sounds like agency boilerplate

### Aim for
- concise first sentences
- concrete nouns over abstract language
- active voice
- strong scanability
- short paragraphs
- fewer stacked metaphors
- clearer role framing and contribution framing

The finished voice should feel like:
**smart, practiced, a little dangerous, and very real**.
Not sterile. Not try-hard.

---

## Truthfulness Rules
Do **not** invent:
- metrics
- titles
- team size
- shipped features
- public release details
- studio claims
- exact responsibilities that are not supported by existing site copy / LinkedIn / public context

When a claim is uncertain, simplify it instead of embellishing it.

---

## Editing Rules
1. Prefer editing existing copy over adding a bunch of new copy.
2. Keep the site structure intact unless a tiny text-only restructuring clearly improves clarity.
3. Do not bloat pages.
4. Do not make the site sound like it was written by a content marketer.
5. Preserve important search / recruiter keywords where useful:
   - UX Designer
   - UI Developer
   - Design Engineer
   - Frontend / UI Engineering
   - Game UI / UX
   - Call of Duty
   - Unity / Unreal / interactive / XR where relevant and truthful
6. Keep case-study body rewrites minimal unless a surrounding sentence is clearly weak.
7. If there is duplicated copy across pages/components, consolidate tone and wording so the site feels authored, not stitched together.

---

## Deliverables
### Required
- Update the real site copy in the repo.
- Create a short companion note at the repo root:
  - `20260422_practitioner_copy_overhaul_notes.md`

### In that notes file include:
1. **What you changed**
   - homepage
   - section intros
   - about / CTA / supporting copy
   - any project-card or overview text

2. **Research references used**
   - list the portfolio references and advice sources reviewed
   - list the official or reputable game-context sources reviewed

3. **Tone decisions**
   - 5–10 bullets on how the new copy differs from the old copy

4. **Open questions / risky assumptions**
   - anything you could not verify cleanly

---

## Acceptance Criteria
This task is successful when:
- the site’s general copy is noticeably tighter and more compelling
- the homepage explains Dela faster and better
- the surrounding copy for the work feels informed by real product context
- the site sounds more senior and more specific
- the copy still feels like Dela, not a template
- there are no invented claims
- the updated tone is consistent across the site

---

## Practical Heuristics While Rewriting
Use these tests on each rewritten block:

### Test 1: Could this sentence belong on anyone’s portfolio?
If yes, rewrite it.

### Test 2: Does the first sentence communicate role + value quickly?
If no, rewrite it.

### Test 3: Is the sentence doing one job clearly?
If not, split or tighten it.

### Test 4: Is a concrete product / player / system context missing?
Add it if it can be done truthfully.

### Test 5: Would a hiring lead understand the contribution in 10 seconds?
If not, improve scanability.

---

## Suggested Workflow
1. Inspect current site copy.
2. Gather research references.
3. Identify weak copy zones.
4. Rewrite highest-leverage sections first.
5. Do one consistency pass across the site.
6. Write the notes file.

---

## Final Instruction
Be editorial, not decorative.
Make the portfolio feel like the work of a **senior hybrid practitioner who has actually shipped complex products**, especially in games and interactive systems.
