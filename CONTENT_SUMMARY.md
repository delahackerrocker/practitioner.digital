# CONTENT_SUMMARY

## 1. Site Snapshot

The current site is a recruiter-facing portfolio built around one landing page and a set of project routes under `/projects/...`. The homepage is tightly curated around Dela's Call of Duty work, broader practice framing, and a contact/footer block whose final destinations are still pending approval.

Most of the strongest and most complete content lives in the Call of Duty cluster. That cluster includes one hub page plus five artifact-led case studies with in-site slideshows, video, flow charts, PDFs, and supporting stills. Outside that cluster, the repo also contains eight additional project pages that use a shared `ProjectDetail` template. Those pages are readable and routeable, but many of them currently rely on restrained copy and placeholder media slots rather than final assets.

The most important content sources are:

- `src/data/siteContent.js`
- `src/data/callOfDuty.js`
- `src/data/projects.js`

Important non-public tooling note: the repo also includes a dev-only tuning/editor system in `src/editor` and `src/tuning`. It is not part of the recruiter-facing site content, but it does affect presentation during development by applying CSS variables, tuning profiles, and debug guide toggles. Rendering-performance and editor-tooling plans are summarized separately in `OPTIMIZATION_STRATEGY.md`.

### Content Density Notes

- Dense / well-developed: `Call of Duty`, `MW3 Exfil`, `Warzone / Cold War Design Guide`, `Play Again With Team`
- Media-heavy: the five Call of Duty case studies, especially the PDF slideshow pages
- Light / sparse: `Snoopy's Soapbox Racers`, `How to Train Your Dragon Demo`, `Glave Gunner iPad UI`, `Authoring Tool Final + VR Panels`, `Curious George`
- Placeholder-heavy: footer contact cards and most non-Call-of-Duty media galleries

## 2. Route / Page Inventory

| Route / URL | Page / Section Name | Purpose | Key Content Present | Primary Source File(s) |
| --- | --- | --- | --- | --- |
| `/` | Home | Main recruiter-facing landing page | Hero, Call of Duty feature cluster, broader-practice section, start-here CTA, contact footer | `src/pages/Home.jsx`, `src/data/siteContent.js`, `src/data/projects.js`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty` | Call of Duty | Franchise hub page | Cluster overview, role/project metadata, five project cards, challenge/approach/artifacts sections | `src/pages/CallOfDutyHubPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty/mw3-exfil` | MW3 Exfil | Artifact-led COD case study | 49-page slideshow, two flow diagrams, challenge/approach/artifacts, PDF link | `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty/bo6-keypad-mini-game` | BO6 Keypad Mini Game | Artifact-led COD case study | Local video clip, inspectable flow chart, challenge/approach/artifacts | `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty/warzone-cold-war-design-guide` | Warzone / Cold War Design Guide | Artifact-led COD case study | 40-page slideshow, supporting stills, challenge/approach/artifacts, PDF link | `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty/play-again-with-team` | Play Again With Team | Artifact-led COD case study | 7-page slideshow, supporting still, challenge/approach/artifacts, PDF link | `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/call-of-duty/bo6-stealth-system` | BO6 Stealth System | Artifact-led COD case study | Single exploration image, challenge/approach/artifacts | `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js` |
| `/projects/snoopys-soapbox-racers` | Snoopy's Soapbox Racers | Generic project-detail route | Restrained visual-project summary, placeholder image/video media slots, challenge/approach/outcome, legacy link | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/rebel-future` | Rebel Future | Generic project-detail route | Original-IP framing, three media slots, universe/look-and-feel links, challenge/approach/outcome | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/overwatch-companion-demo` | Overwatch Companion Demo | Generic project-detail route | Embedded YouTube demo, placeholder image slot, companion-product framing, links | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/how-to-train-your-dragon-demo` | How to Train Your Dragon Demo | Generic project-detail route | Supporting visual-project framing, placeholder image/video, challenge/approach/outcome | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/glave-gunner-ipad-ui` | Glave Gunner iPad UI | Generic project-detail route | Rebel Future sub-project framing, two placeholder image slots, challenge/approach/outcome, links | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/vr-intelligence-tool-usaf` | VR Intelligence Tool for the USAF | Generic project-detail route | XR/tool UX summary, two placeholder image slots, challenge/approach/outcome | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/authoring-tool-final-vr-panels` | Authoring Tool Final + VR Panels | Generic project-detail route | Desktop-and-VR workflow-system framing, two placeholder image slots, challenge/approach/outcome | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |
| `/projects/curious-george` | Curious George | Generic project-detail route | Educational app summary, one placeholder media slot, challenge/approach/outcome | `src/pages/ProjectDetail.jsx`, `src/data/projects.js` |

Note: `src/pages/ProjectDetail.jsx` also includes a fallback "Project Not Found" state for unresolved `/projects/:slug` paths. Its copy is: `Project Not Found`, `The Requested Case Study Has Not Been Wired Yet.`, and `Return to the home page to continue through the portfolio.`

## 3. Global Content Elements

- Brand / meta:
  `siteMeta` identifies the owner as `Dela`, the brand as `Drive Fast Take Chances`, and the top-level title as `Dela | Design Engineer, UX Designer, UI Developer`.
- Header / nav:
  The brand button reads `Drive Fast Take Chances` with the smaller label `Dela portfolio`. Main nav labels are `Overview`, `Call of Duty`, `Experience`, and `Contact`. Mobile nav toggle copy switches between `Menu` and `Close`.
- Project-view nav behavior:
  On any project route, the header adds a `Back Home` action that returns to `/#overview`.
- Home hero CTA system:
  Primary actions are `View Call of Duty Case Studies`, `Open Franchise Hub`, and `Open Call of Duty Hub`. Quick-link tiles repeat `Call of Duty`, `Experience`, and `Contact` with short descriptive notes.
- Repeated card CTA:
  `ProjectCard` always ends with `View Project`.
- Repeated case-study section language:
  Generic project pages reuse headings such as `Media Gallery`, `Project Media`, `Challenge`, `What Needed to Work`, `Approach`, `How the Work Was Shaped`, `Outcome`, `What the Project Shows`, `Deliverables`, `Artifacts This Case Study Can Hold`, `Supporting Links`, `Additional Material`, and `More Projects`.
- Repeated Call of Duty case-study section language:
  COD case studies reuse `Challenge`, `What Needed to Work`, `Approach`, `How the Case Study Is Framed`, `Artifacts`, `Included Artifacts`, `Supporting Links`, `Source Material`, and `Continue Through the Cluster`.
- Slideshow / lightbox UI copy:
  Repeated controls include `Previous`, `Next`, `Fullscreen`, `Close`, slide counts like `1 / 49`, and fullscreen labels such as `Fullscreen slideshow for ...`.
- Flow chart viewer UI copy:
  Repeated controls include `Click to Inspect`, `Inspect`, `Zoom and Pan`, `Reset`, `Close`, `Previous`, `Next`, and the instructional help text `Drag while zoomed. Use the wheel or buttons to change scale.`
- Footer:
  The persistent footer section is labeled `Contact` and currently presents staged rather than final destinations.

## 4. Per-Page / Per-Section Content Summary

### Home / Overview Hero

- Summary:
  Introduces Dela as a hybrid design-and-engineering practitioner with shipped work across Call of Duty, XR tools, and interactive products.
- Important headings / subheadings:
  `Design Engineer, UX Designer, UI Developer`; `Shipped UI/UX for Call of Duty, XR Tools, and Interactive Products.`
- Key body-copy themes:
  Shipped work across five Call of Duty releases; immersive product work for Google, the NBA, and the U.S. Air Force; emphasis on readable systems, prototyping, and production-ready implementation.
- CTA / button text:
  `View Call of Duty Case Studies`, `Open Franchise Hub`, `Open Call of Duty Hub`
- Notable media / attachments:
  No hero image or video; the main supporting content is the highlight list and quick-link tile set.
- Source file(s):
  `src/components/Hero.jsx`, `src/data/siteContent.js`

### Home / Flagship Franchise Work

- Summary:
  Frames Call of Duty as the flagship cluster and positions it as the fastest route into the strongest shipped work.
- Important headings / subheadings:
  `Flagship Franchise Work`; `Five Shipped Call of Duty Case Studies.`
- Key body-copy themes:
  Extraction UX, interaction feedback, franchise visual systems, squad continuity, and stealth communication across MW3, BO6, Warzone, and Cold War.
- CTA / button text:
  `Explore the Call of Duty Hub`
- Notable media / attachments:
  A featured Call of Duty hub callout plus five `ProjectCard` summaries for the individual COD case studies.
- Source file(s):
  `src/pages/Home.jsx`, `src/data/siteContent.js`, `src/data/callOfDuty.js`, `src/components/ProjectCard.jsx`

### Home / Broader Practice

- Summary:
  Broadens the portfolio beyond Call of Duty with three short capability pillars.
- Important headings / subheadings:
  `Broader Practice`; `Game UI/UX, XR Product Design, and Hands-On Implementation.`
- Key body-copy themes:
  AAA franchise scale, VR/AR product work, and original-world experimentation.
- CTA / button text:
  None
- Notable media / attachments:
  No media; content is entirely three copy-only pillar cards.
- Source file(s):
  `src/pages/Home.jsx`, `src/data/siteContent.js`

### Home / Start Here

- Summary:
  Repeats the recommendation that visitors begin with Call of Duty for the clearest read on shipped work.
- Important headings / subheadings:
  `Start Here`; `Call of Duty Is the Fastest Read on the Shipped Work.`
- Key body-copy themes:
  The Call of Duty cluster is framed as the clearest snapshot of game UI/UX practice, then the rest of the portfolio is positioned as supporting range.
- CTA / button text:
  `Explore the Call of Duty Hub`
- Notable media / attachments:
  No media
- Source file(s):
  `src/pages/Home.jsx`, `src/data/siteContent.js`

### Home / Contact Footer

- Summary:
  Keeps contact information present structurally while explicitly signaling that final links are not approved yet.
- Important headings / subheadings:
  `Contact`; `Resume and Profile Links Are Staged for Final Approval.`
- Key body-copy themes:
  Resume, email, LinkedIn, and GitHub are pending; the work above is the best current proof of range.
- CTA / button text:
  None
- Notable media / attachments:
  Four contact cards: `Resume`, `Email`, `LinkedIn`, `GitHub`
- Source file(s):
  `src/components/Footer.jsx`, `src/data/siteContent.js`

### Call of Duty Hub Page

- Summary:
  Functions as a cluster overview page that explains the scope of Dela's franchise work, then routes visitors into five artifact-led sub-case studies.
- Important headings / subheadings:
  `AAA Franchise UI/UX`; `Call of Duty`; `Five Shipped Call of Duty Projects`; `Why the Hub Exists`; `How the Cluster Is Organized`; `What This Cluster Now Supports`
- Key body-copy themes:
  Franchise-scale UI/UX across multiple releases; routing broad work into scan-friendly artifact pages; using slideshows, video, and diagrams instead of dead attachments.
- CTA / button text:
  `Back to Home`; repeated `View Project` cards
- Notable media / attachments:
  No dedicated slideshow on the hub itself; the page is primarily summary copy plus five project cards.
- Source file(s):
  `src/pages/CallOfDutyHubPage.jsx`, `src/data/callOfDuty.js`, `src/components/ProjectCard.jsx`

### Call of Duty Case Study Page Pattern

- Summary:
  Used for the five individual Call of Duty routes. Each page opens with a hero, then moves into one or more artifact sections rendered as a slideshow or inspectable flow chart before ending with short challenge/approach/artifact framing.
- Important headings / subheadings:
  `Back to Call of Duty Hub`; media-block-specific headings from data; `What Needed to Work`; `How the Case Study Is Framed`; `Included Artifacts`; `Source Material`; `Continue Through the Cluster`
- Key body-copy themes:
  Strongest emphasis falls on artifact readability, production logic, player-facing communication, and keeping explanations short enough that the work stays central.
- CTA / button text:
  `Back to Call of Duty Hub`, `Previous`, `Next`, `Fullscreen`, `Close`, `Inspect`
- Notable media / attachments:
  Page-by-page deck slideshows, local MP4 video, PDFs, still images, and inspectable flow charts depending on the project.
- Source file(s):
  `src/pages/CallOfDutyCaseStudyPage.jsx`, `src/data/callOfDuty.js`, `src/components/FeatureSlideshow.jsx`, `src/components/FlowChartViewer.jsx`

### Generic Project Detail Page Pattern

- Summary:
  Used for the non-Call-of-Duty project routes. The pattern is consistent: hero summary, media gallery, challenge/approach/outcome lists, deliverable tags, optional links, and a small related-project strip.
- Important headings / subheadings:
  `Back to Home`; `Project Media`; `What Needed to Work`; `How the Work Was Shaped`; `What the Project Shows`; `Artifacts This Case Study Can Hold`; `Additional Material`; `More Projects`
- Key body-copy themes:
  Concise, factual framing; clear role and project-type labeling; intentionally restrained language when source material is thin.
- CTA / button text:
  `Back to Home`; media chip labels; supporting-link labels from data
- Notable media / attachments:
  Either embedded media or placeholder image/video slots with captions; links out to legacy portfolio pages, YouTube, or Google Drive documents where available.
- Source file(s):
  `src/pages/ProjectDetail.jsx`, `src/data/projects.js`, `src/components/CaseStudyHero.jsx`, `src/components/MediaGallery.jsx`, `src/components/ProjectCard.jsx`

## 5. Case Study Inventory

### Call of Duty (Cluster Hub)

- Route:
  `/projects/call-of-duty`
- Short summary:
  Presents Dela's franchise work as a focused cluster spanning feature design, visual systems, documentation, and implementation support across multiple shipped releases.
- Supporting media present:
  Hero image on the card level; five linked project cards; no standalone deck or gallery on the route itself
- Current state notes:
  Strong framing page; concise by design; works mainly as a router into denser sub-pages
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyHubPage.jsx`

### MW3 Exfil

- Route:
  `/projects/call-of-duty/mw3-exfil`
- Short summary:
  Communicates a dense but readable Modern Warfare Zombies extraction/AAR flow centered on reward drama, inventory clarity, and sequencing logic.
- Supporting media present:
  49-page in-site slideshow, two flow diagrams, original PDF link
- Current state notes:
  One of the strongest and most fully developed pages in the site; heavily media-led
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyCaseStudyPage.jsx`

### BO6 Keypad Mini Game

- Route:
  `/projects/call-of-duty/bo6-keypad-mini-game`
- Short summary:
  Communicates a compact interaction-design case study focused on feedback, state readability, pressure, and progression in a small BO6 loop.
- Supporting media present:
  Local MP4 gameplay clip with poster frame, inspectable flow chart image
- Current state notes:
  Concise and focused; stronger on interaction proof than long-form writing
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyCaseStudyPage.jsx`

### Warzone / Cold War Design Guide

- Route:
  `/projects/call-of-duty/warzone-cold-war-design-guide`
- Short summary:
  Communicates franchise visual-system leadership around typography, color, item branding, and shared-content consistency.
- Supporting media present:
  40-page in-site slideshow, style-guide still, promotional still, original PDF link
- Current state notes:
  Strong documentation-heavy case study with clear artifact support
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyCaseStudyPage.jsx`

### Play Again With Team

- Route:
  `/projects/call-of-duty/play-again-with-team`
- Short summary:
  Communicates a small but meaningful social UX flow about post-match squad continuity and next-session decision making.
- Supporting media present:
  7-page in-site slideshow, supporting still, original PDF link
- Current state notes:
  Compact but coherent; good artifact-to-copy balance
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyCaseStudyPage.jsx`

### BO6 Stealth System

- Route:
  `/projects/call-of-duty/bo6-stealth-system`
- Short summary:
  Communicates a tightly scoped awareness/readability problem around stealth states, escalation, and combat communication.
- Supporting media present:
  Single exploration-board image
- Current state notes:
  Sparse relative to the other COD pages, but still clear and artifact-led
- Source file(s):
  `src/data/callOfDuty.js`, `src/pages/CallOfDutyCaseStudyPage.jsx`

### Snoopy's Soapbox Racers

- Route:
  `/projects/snoopys-soapbox-racers`
- Short summary:
  Presents a visually driven racing project as a short showcase entry rather than a fully documented production case study.
- Supporting media present:
  Placeholder image slot, placeholder video slot, legacy portfolio link
- Current state notes:
  Sparse and intentionally restrained; relies on future media more than present proof
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### Rebel Future

- Route:
  `/projects/rebel-future`
- Short summary:
  Presents Rebel Future as an original-IP umbrella that combines character/world briefs, UI studies, embodiment demos, teaser material, and gameplay direction.
- Supporting media present:
  Three media slots (all currently descriptive placeholders), legacy portfolio link, Google Drive universe brief, Google Drive gameplay look-and-feel document
- Current state notes:
  Broader and more ambitious than the other generic pages; stronger on linked documentation than on in-page final media
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### Overwatch Companion Demo

- Route:
  `/projects/overwatch-companion-demo`
- Short summary:
  Presents a utility-first companion-app concept organized around browsing, account support, and service-minded UX.
- Supporting media present:
  Embedded YouTube demo, placeholder image slot, YouTube link, legacy portfolio reference
- Current state notes:
  One of the stronger non-COD pages because it already has a live motion artifact
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### How to Train Your Dragon Demo

- Route:
  `/projects/how-to-train-your-dragon-demo`
- Short summary:
  Presents a supporting visual/animation-led demo intended to broaden range rather than serve as a systems-heavy case study.
- Supporting media present:
  Placeholder still slot, placeholder animation/video slot, legacy portfolio link
- Current state notes:
  Light and media-dependent; copy explicitly acknowledges limited public material
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### Glave Gunner iPad UI

- Route:
  `/projects/glave-gunner-ipad-ui`
- Short summary:
  Presents a focused Rebel Future UI slice centered on tablet flows, account handling, customization, and gameplay surfaces.
- Supporting media present:
  Two placeholder image slots, legacy portfolio link, Rebel Future universe brief link
- Current state notes:
  Useful supporting entry, but currently light on direct artifact proof inside the page itself
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### VR Intelligence Tool for the USAF

- Route:
  `/projects/vr-intelligence-tool-usaf`
- Short summary:
  Presents a security-conscious XR/product UX project for dense intelligence workflows across tablet and VR surfaces.
- Supporting media present:
  Two placeholder image slots, legacy portfolio link
- Current state notes:
  Strong credibility and role framing, but the in-page media is still placeholder-driven
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### Authoring Tool Final + VR Panels

- Route:
  `/projects/authoring-tool-final-vr-panels`
- Short summary:
  Presents a workflow-heavy desktop-and-VR interface system linking creator tooling to immersive front-end panels.
- Supporting media present:
  Two placeholder image slots, legacy portfolio link
- Current state notes:
  Solid system-framing copy, but still thin on final screenshots and supporting evidence
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

### Curious George

- Route:
  `/projects/curious-george`
- Short summary:
  Presents a lighter educational game app used to widen audience and product range in the portfolio.
- Supporting media present:
  Single placeholder image slot, legacy portfolio link
- Current state notes:
  Very light supporting entry; more of a range signal than a fully built-out case study
- Source file(s):
  `src/data/projects.js`, `src/pages/ProjectDetail.jsx`

## 6. Content Patterns and Reuse

- `src/data/siteContent.js` drives almost all homepage copy, nav labels, hero positioning, CTA labels, and footer/contact language.
- `src/data/callOfDuty.js` drives the Call of Duty hub plus all five Call of Duty sub-pages, including titles, summaries, challenge/approach/outcome lists, deliverables, media blocks, and supporting links.
- `src/data/projects.js` is the shared registry that exposes all project routes. It merges the Call of Duty cluster with eight additional generic project pages.
- `ProjectCard` is the main repeated summary pattern. Every card uses the same structure: tagline, title, summary, role, project type, timeframe, focus tags, and `View Project`.
- `ProjectDetail.jsx` is the repeated pattern for non-COD pages. It always uses the same section sequence and framing language, with the project-specific content injected from data.
- `CallOfDutyCaseStudyPage.jsx` is the repeated pattern for COD sub-pages. It also follows a fixed sequence, but inserts media blocks before the shorter written framing.
- Home repeatedly steers the reader toward the same destination: Call of Duty. That emphasis appears in the hero, the flagship cluster section, and the `Start Here` prompt.
- Placeholder-aware component behavior is built into the site. `MediaGallery` and `FeatureSlideshow` can render descriptive placeholder states when a media source is not present.

## 7. Gaps / Incomplete / Placeholder Content

- The footer is structurally complete but content-incomplete. `Resume`, `Email`, and `LinkedIn` still say `pending approval`, and `GitHub` still reads `Code samples optional`.
- Most non-Call-of-Duty project pages still depend on placeholder media slots rather than final screenshots or video. This is especially true for `Snoopy's Soapbox Racers`, `How to Train Your Dragon Demo`, `Glave Gunner iPad UI`, `VR Intelligence Tool for the USAF`, `Authoring Tool Final + VR Panels`, and `Curious George`.
- Several generic project summaries explicitly describe themselves as restrained because source material is thin or incomplete. That language appears intentionally, but it also signals unfinished content density.
- The Call of Duty cluster is the only body of work fully surfaced from the homepage. The eight additional project-detail routes exist and resolve, but they are not currently promoted from the main landing-page project grid.
- Some project pages are set up to hold stronger future material than they currently contain. `Rebel Future`, `Overwatch Companion Demo`, and the XR/tool projects all have structures that imply more screenshots, clips, or annotations can be dropped in later.

## 8. Appendix - Content Source Map

- `src/App.jsx`
  Resolves routes, picks the page template, and sets the document title.
- `src/data/siteContent.js`
  Holds global site content: nav labels, hero copy, action links, the broader-practice section, the start-here prompt, and footer/contact text.
- `src/data/callOfDuty.js`
  Holds the Call of Duty hub plus all five franchise case studies, including media block definitions and supporting links.
- `src/data/projects.js`
  Holds the full project registry for all routeable case studies outside the home page, including generic-project copy and media-slot definitions.
- `src/pages/Home.jsx`
  Composes the landing page sections and determines which project cards appear on the homepage.
- `src/pages/CallOfDutyHubPage.jsx`
  Composes the franchise hub route.
- `src/pages/CallOfDutyCaseStudyPage.jsx`
  Composes the five artifact-led Call of Duty sub-pages.
- `src/pages/ProjectDetail.jsx`
  Composes the generic project-detail routes and also contains the `Project Not Found` fallback copy.
- `src/components/Navbar.jsx`
  Holds brand, nav, menu-toggle, and project-view `Back Home` text.
- `src/components/Hero.jsx`
  Holds hero CTA usage, quick-link tiles, and the `Focus` / `Flagship Cluster` support copy layout.
- `src/components/ProjectCard.jsx`
  Defines the repeated project summary card and `View Project` CTA.
- `src/components/Footer.jsx`
  Renders the footer/contact copy and contact cards.
- `src/components/FeatureSlideshow.jsx`
  Defines slideshow, fullscreen, and lightbox control copy used by the COD deck pages.
- `src/components/FlowChartViewer.jsx`
  Defines inspect/zoom/pan copy used for flow-chart content.
- `src/components/MediaGallery.jsx`
  Defines the generic media-gallery summary line and media-chip labels used on non-COD project pages.
- `public/assets/projects/call-of-duty/...`
  Stores the current in-site PDFs, page-render images, stills, flow charts, and local video used by the Call of Duty cluster.
- `src/editor/EditorApp.jsx`
  Dev-only visual tuning workbench. It is mounted through `src/main.jsx` but returns `null` outside `import.meta.env.DEV`, so it does not add public portfolio content.
- `src/tuning/...`
  Stores the tuning schema, default profile, active tuning overrides, localStorage-backed runtime state, CSS-variable application, and debug-guide dataset flags used by the dev editor.

## 9. Related Planning Docs

- `OPTIMIZATION_STRATEGY.md`
  Summarizes the rendering optimization, media caching, culling, and editor-tooling work intended to keep the media-heavy case studies fast and tunable without turning the portfolio into a CMS or heavy app platform.
