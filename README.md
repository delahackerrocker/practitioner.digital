# drive-fast-take-chances.com

AI handoff and project-context document for the portfolio rebuild of `drive-fast-take-chances.com`.

## Purpose

This repo is a modern React/Vite rebuild of Dela's portfolio site. The goal is a polished, recruiter-friendly portfolio that presents selected work clearly, with a strong focus on hierarchy, media presentation, and credibility.

This is not a CMS, admin tool, backend app, or framework experiment. It is a lean presentation site.

## Stack

- Vite
- React 18
- Plain JavaScript
- HTML/CSS

Current dependencies are intentionally minimal:

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`

There is no React Router, no TypeScript, no backend, and no state-management library.

## High-Level App Model

This site is a single-page app with lightweight custom routing.

- The app shell lives in `src/App.jsx`.
- Navigation uses `window.history.pushState` / `replaceState`.
- Route changes are observed through `popstate` plus a custom `app:navigate` event.
- Home-page section links use hash targets like `/#work` and `/#contact`.
- Project detail pages live under `/projects/...`.

The content model is mostly data-driven:

- global copy and section metadata in `src/data/siteContent.js`
- general portfolio projects in `src/data/projects.js`
- flagship Call of Duty hub and case-study data in `src/data/callOfDuty.js`

## Site Map

### Top-level routes

- `/`
  Home page with hero, featured work, supporting work, experience, and contact
- `/#overview`
  Hero anchor
- `/#work`
  Selected work anchor
- `/#experience`
  Experience anchor
- `/#contact`
  Footer/contact anchor
- `/projects/call-of-duty`
  Flagship Call of Duty hub page
- `/projects/:slug`
  Generic project-detail route

### Current explicit project routes

Call of Duty:

- `/projects/call-of-duty`
- `/projects/call-of-duty/mw3-exfil`
- `/projects/call-of-duty/bo6-keypad-mini-game`
- `/projects/call-of-duty/warzone-cold-war-design-guide`
- `/projects/call-of-duty/play-again-with-team`
- `/projects/call-of-duty/bo6-stealth-system`

Generic project-detail entries currently defined in `src/data/projects.js`:

- `/projects/snoopys-soapbox-racers`
- `/projects/rebel-future`
- `/projects/overwatch-companion-demo`
- `/projects/how-to-train-your-dragon-demo`
- `/projects/glave-gunner-ipad-ui`
- `/projects/vr-intelligence-tool-usaf`
- `/projects/authoring-tool-final-vr-panels`
- `/projects/curious-george`

### Not-found behavior

Unknown project slugs do not use a separate router-level 404 page. Instead, `ProjectDetail.jsx` renders a "Project not found" state with a route back to home.

## Home Page Structure

The home page is assembled in `src/pages/Home.jsx`.

Order of sections:

1. Hero
2. Call of Duty flagship cluster
3. Primary featured projects
4. Secondary/supporting projects
5. Experience
6. Case-study/editorial prompt
7. Footer/contact

This structure keeps the strongest AAA work at the top while still preserving room for original IP, client work, and supporting projects.

## General Features

### 1. Lightweight custom routing

Defined in `src/App.jsx`.

- Normalizes pathnames
- Resolves project routes from the data layer
- Updates document title based on current page/project
- Handles back/forward browser navigation
- Scrolls to hash targets on the home page
- Falls back to top-of-page scrolling on route change

### 2. Data-driven portfolio content

The site is designed so content can be edited without rewriting page structure.

- `src/data/siteContent.js` stores nav labels, hero copy, section copy, CTA content, and footer content
- `src/data/projects.js` stores non-COD projects and filtering helpers
- `src/data/callOfDuty.js` stores the COD hub plus dedicated flagship case studies

Each project entry can define:

- `slug`
- `title`
- `eyebrow`
- `tagline`
- `summary`
- `role`
- `projectType`
- `timeframe`
- `focusTags`
- `challenge`
- `approach`
- `outcome`
- `deliverables`
- `links`
- `media`
- `mediaBlocks`
- `cardImage`
- `accent`
- `pageType`

### 3. Shared section and card system

The site uses a small set of reusable components rather than a large design system.

- `src/components/Section.jsx`
  Generic content-section wrapper with eyebrow, title, and intro
- `src/components/ProjectCard.jsx`
  Reusable project teaser card
- `src/components/CaseStudyHero.jsx`
  Shared hero layout for generic project pages

This keeps the page composition simple and consistent.

### 4. Responsive navigation

Defined in `src/components/Navbar.jsx`.

Capabilities:

- brand button routes home
- mobile menu toggle
- hash-based section navigation
- adds a "Back to Work" action on project-detail pages
- automatically closes menu when route changes

### 5. Hero and CTA system

Defined in `src/components/Hero.jsx`.

Capabilities:

- primary and secondary CTA buttons
- quick-link tiles for resume/contact/link placeholders
- spotlight panel for the Call of Duty flagship cluster
- highlight list for fast recruiter scanning

### 6. Generic project-detail pages

Defined in `src/pages/ProjectDetail.jsx`.

Capabilities:

- reusable case-study hero
- chip-based media gallery
- challenge/approach/outcome sections
- deliverables tag row
- optional supporting links section
- related-project suggestions
- not-found fallback

This is the default layout for non-COD projects.

### 7. Media gallery for standard projects

Defined in `src/components/MediaGallery.jsx`.

Supports:

- local image display
- embedded video via `iframe`
- placeholder media cards when real assets are missing
- chip-based switching between media items
- automatic reset to the first item when project media changes

Note: the generic gallery does not currently support local video files with a native `<video>` player. That behavior exists in the COD slideshow component instead.

### 8. Specialized Call of Duty hub

Defined in `src/pages/CallOfDutyHubPage.jsx`.

This page acts as editorial framing for the franchise work rather than trying to hold every artifact in one giant page.

Capabilities:

- hero/meta summary for the COD cluster
- grid of five dedicated case-study pages
- challenge/approach summary blocks
- deliverables summary

### 9. Specialized Call of Duty case-study pages

Defined in `src/pages/CallOfDutyCaseStudyPage.jsx`.

These are the strongest and most fully realized pages in the repo.

Capabilities:

- dedicated case-study hero
- one or more media-block sections
- slideshow presentation for decks, stills, and video
- short challenge/approach framing
- artifact summary
- supporting source links
- related COD case-study navigation

### 10. Feature slideshow for deck-like case studies

Defined in `src/components/FeatureSlideshow.jsx`.

Supports:

- local images
- local video with native `<video controls>`
- embedded video via `iframe`
- previous/next controls
- active slide metadata
- rail-based slide navigation
- compact rail mode for large page counts

This is what powers the in-site presentation of PDF-derived image decks for the flagship COD pages.

### 11. Footer/contact block

Defined in `src/components/Footer.jsx`.

Capabilities:

- contact-oriented CTA area
- grid of contact cards
- placeholder-friendly structure for final resume/email/link updates

## Content Tiers and Editorial Structure

The site currently uses a deliberate hierarchy.

### Flagship cluster

The strongest, most polished section is Call of Duty:

- one hub page
- five dedicated sub-case-study pages
- in-site slideshow treatment for PDF decks
- local video and flow-diagram support

### Primary featured projects

These sit on the home page below the COD cluster and are meant to broaden the portfolio with stronger visual or product range.

### Secondary/supporting projects

These are still meaningful portfolio entries, but they intentionally sit lower in the hierarchy to keep the first scan sharp.

## Asset Model

Assets currently live mostly under `public/assets/projects/call-of-duty/`.

Asset types already present in the repo:

- images
- PDFs
- page-rendered PNGs from PDFs
- local MP4 video
- flow diagrams
- source design files like PSDs

Important note:

The site does not dynamically render PDFs. Instead, PDF pages have already been converted into PNG images and are displayed through the slideshow system.

There is a helper script at `scripts/render-pdf-pages.ps1` for PDF-page rendering workflows.

## File and Folder Overview

### Root

- `index.html`
  Base HTML document
- `package.json`
  Scripts and dependency manifest
- `vite.config.js`
  Vite configuration
- `AGENTS.md`
  Repo instructions and working norms for coding agents
- `README.md`
  This AI handoff document
- `_Tasks_/`
  Task notes / milestone files

### Source

- `src/main.jsx`
  React entry point
- `src/App.jsx`
  App shell and custom route resolution

### Data

- `src/data/siteContent.js`
  Global site copy and section metadata
- `src/data/projects.js`
  General project definitions and project filters
- `src/data/callOfDuty.js`
  COD hub and COD case-study definitions

### Pages

- `src/pages/Home.jsx`
  Home page composition
- `src/pages/ProjectDetail.jsx`
  Generic project page
- `src/pages/CallOfDutyHubPage.jsx`
  COD hub page
- `src/pages/CallOfDutyCaseStudyPage.jsx`
  COD case-study page

### Components

- `src/components/Navbar.jsx`
  Site navigation
- `src/components/Hero.jsx`
  Home hero
- `src/components/Section.jsx`
  Generic section wrapper
- `src/components/ProjectCard.jsx`
  Project teasers
- `src/components/CaseStudyHero.jsx`
  Generic case-study hero
- `src/components/MediaGallery.jsx`
  Standard project media gallery
- `src/components/FeatureSlideshow.jsx`
  COD slideshow/media system
- `src/components/Footer.jsx`
  Contact/footer block

### Styles

- `src/styles/globals.css`
  Base/global styling
- `src/styles/layout.css`
  Overall layout rules
- `src/styles/components.css`
  Component styling

### Public assets

- `public/assets/projects/call-of-duty/...`
  Real media for the flagship COD cluster

## How To Extend The Site

### Add a normal project

1. Add a new project object to `src/data/projects.js`
2. Include a unique `slug`
3. Add `media`, `links`, and summary fields as needed
4. The generic detail page will render it automatically at `/projects/<slug>`

### Add a new Call of Duty flagship page

1. Add a new case-study object to `src/data/callOfDuty.js`
2. Set `pageType: "call-of-duty-case-study"`
3. Provide `mediaBlocks`
4. The app will route it through the specialized COD case-study layout

### Update site-wide copy or nav

Edit `src/data/siteContent.js`.

### Update shared structure or interaction behavior

Edit the relevant component in `src/components/`.

## Current Limitations

- no backend
- no CMS or editor workflow
- no contact form
- no analytics
- no dedicated router library
- no test suite currently visible in the repo
- some links remain placeholders
- many non-COD projects are structurally ready but still waiting on final media and copy polish

## Best Summary For Another AI

This repo is a lean, data-driven React portfolio site with a custom router and a strong editorial focus on case studies. The homepage is a curated recruiter-facing overview. The Call of Duty section is the flagship cluster and currently contains the richest implementation, including dedicated sub-pages, local media, and slideshow-based presentation of design decks. Most future changes should be made by editing the data layer first, then adjusting components only when the presentation pattern genuinely needs to change.
