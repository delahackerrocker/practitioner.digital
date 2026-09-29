import { portfolioWork } from "./portfolioWork.js";

export const referenceSite = {
  brand: { initials: "SD", name: "Steven de la Torre", givenName: "Steven", familyName: "de la Torre" },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  primaryCta: {
    label: "Book a 30-Min Project Call →",
    href: "mailto:stevedelatorre@gmail.com?subject=30-minute%20Project%20Fit%20Call",
  },
  email: "stevedelatorre@gmail.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/delahackerrocker/" },
    { label: "GitHub", href: "https://github.com/delahackerrocker" },
    { label: "Ko-fi", href: "https://ko-fi.com/pract1t10ner" },
  ],
};

const capabilities = [
  "UX Design", "Game UX", "Interaction Design", "Technical Design", "Unity", "C#", "React",
  "TypeScript", "Three.js", "Prototyping", "Design Systems", "Gameplay Systems",
  "AI Workflows", "Product Strategy", "Accessibility",
];

const products = [
  {
    title: "GR1M01RE",
    status: "In Development",
    summary: "A tactical cyberpunk-fantasy RPG about runners, factions, off-leash AI, hacking, magic, guns, and survival in a broken future.",
    tags: ["Game", "Unity", "Systems", "Worldbuilding"],
    href: "https://ko-fi.com/pract1t10ner",
    cta: "Follow the Build →",
    tone: "yellow",
  },
  {
    title: "Nationwide Map Tool",
    status: "In Development",
    summary: "An independent arena-map prototype to help you find your section, see what’s nearby, and plan your visit. I’m still building it out for desktop and mobile.",
    tags: ["Maps", "Wayfinding", "Visitor Experience", "Web"],
    href: "https://practitioner.digital/nationwide-arena/",
    cta: "Explore the Prototype →",
    tone: "cyan",
  },
];

const featuredStudies = portfolioWork.slice(0, 3);

const engagements = [
  { title: "Build Your AI App", bullets: ["Turn an idea into a working product prototype", "Work out the UX, how people use it, and how to build it", "Build the user flow most likely to trip us up first", "Leave your team something it understands and can keep building"] },
  { title: "Unblock Your AI App", bullets: ["Go through the product, workflow, and code", "Find what’s getting stuck in the UX, architecture, or build", "Sort out the actual problem and the workarounds piled on top", "Make a plan to get it moving and, when useful, build the fix"] },
  { title: "Game Development & Interactive Systems", bullets: ["Gameplay systems, controls, cameras, combat, UI, and tools", "Unity prototypes and production-ready C#", "Design around the player: how it feels and how it behaves", "Technical design that keeps the idea intact and the code maintainable"] },
  { title: "Web Design & Development", bullets: ["Product strategy, information architecture, UX, and responsive UI", "Marketing sites, web apps, internal tools, and custom platforms", "React, or a practical CMS when that’s the better fit", "AI-assisted workflows where they actually help"] },
];

const process = [
  { title: "I Start With the Experience", body: "Before picking a framework or polishing a screen, I figure out what the player, user, or customer needs to understand, feel, and do." },
  { title: "I Prototype the Dangerous Part", body: "Every project has something we’re assuming will work. I build that part early, while there’s still time to find out we were wrong and change course." },
  { title: "Design and Implementation in One Loop", body: "I move from interaction design to technical design to working code without throwing the idea over a wall and hoping it survives." },
  { title: ["No Theater,", "No Unnecessary Architecture"], body: "I build the smallest version that lets us see if the idea works, write down the decisions that matter, and keep things understandable." },
];

export const homePage = {
  eyebrow: "UX Designer · Game Developer · Agentic Builder",
  headline: ["You Have Something in Your Head.", "I Make It Real."],
  intro: "I design and build interactive products where UX, games, software, and AI meet — from player-facing systems on Call of Duty to indie game worlds, custom tools, and working web products.",
  spec: [["Based", "Columbus, Ohio"], ["Mode", "Remote · US / Intl"], ["Engage", "Contract · Fractional · Full-time"], ["Stack", "Unity · C# · React · AI"], ["Status", "Available"]],
  capabilities,
  proof: [
    { label: "5 Shipped Releases", value: "Call of Duty", body: "Credits across the Modern Warfare and Warzone era.", note: "AAA · Live Service · Player-Facing UX" },
    { label: "UX + Code", value: "One Loop", body: "One person working out the interactions and writing the code.", note: "Design · Prototype · Build" },
    { label: "Big Brands", value: "Google · NBA · USAF", body: "Immersive and interactive work delivered before Call of Duty.", note: "VR · AR · Experiential" },
    { label: "AAA → Indie", value: "End to End", body: "Taking what I learned on big production teams and using it to build whole products and systems.", note: "Systems · Tools · Worldbuilding" },
    { label: "Current Build", value: "GR1M01RE", body: "A city-scale tactical RPG with combat, magic, hacking, procedural spaces, and developer tooling.", note: "Unity 6.5 · Active Development" },
  ],
  credentials: ["Accessible Player Experience Trained", "Cross-Disciplinary by Default", "Building Since Age 14", "Published Musician", "Independent Game Developer"],
  engagements,
  featuredStudies,
  selectedWork: [
    { title: "Call of Duty Player Systems", tags: ["Game UX", "Technical Design", "Live Service"], summary: "Designed and implemented player-facing systems within the Modern Warfare and Warzone ecosystem, working across UX, UI, engineering, production, and game design.", outcome: "Five shipped releases · Millions of players · Cross-studio development" },
    { title: "GR1M01RE / PRACT1T10N3R", tags: ["Unity", "C#", "Systems Design", "Worldbuilding"], summary: "Building an original tactical RPG that shifts between overhead command and direct action, with guns, magic, melee, hacking, a living city, and game systems that affect each other.", outcome: "Playable combat foundation · Procedural-world pipeline · Active development" },
    { title: "Nationwide Arena Map Tool", tags: ["Interaction Design", "Wayfinding", "Prototyping"], summary: "An independent arena guide with an interactive seating map, section search, nearby amenities, and visit planning on desktop and mobile.", outcome: "Interactive seating map · Visitor guidance · Active development" },
    { title: "Client and Partner Web Platforms", tags: ["UX", "Product Strategy", "Web Development"], summary: "Designing and building practical web products across healthcare commerce, performance benchmarking, and music licensing.", outcome: "Strategy · UX · Systems · Production" },
    { title: "Interactive System Experiments", tags: ["Prototype Design", "Unity", "Web"], summary: "Focused experiments in cameras, controls, tactical interfaces, hacking interactions, procedural generation, and player feedback.", outcome: "Playable interaction experiments · Browser / executable builds" },
  ],
  products,
  profile: {
    eyebrow: "Who You’d Be Working With",
    title: ["I’m Steven de la Torre", "UX Designer, Game Developer, and Agentic Builder."],
    body: "Based in Columbus, Ohio, I spent years designing player-facing systems for Call of Duty and previously shipped immersive work for Google, the NBA, and the U.S. Air Force. Today I build an indie tactical RPG in Unity, web products with clients and partners, and AI-assisted workflows. I’m at my best when the brief is messy, the work crosses a few different fields, and the experience needs to make sense — not just function.",
  },
  process,
};

export const workPage = {
  eyebrow: "Work",
  title: "Selected Work and Experiments.",
  intro: "Game systems for players, original worlds, agentic tools, websites, and experiments in how things feel and work.",
  products,
  work: portfolioWork,
};

export const aboutPage = {
  eyebrow: "About",
  title: "I Take Ideas That Aren’t Quite Figured Out and Make Them Work.",
  intro: "I’m Steven de la Torre — a UX designer, game developer, and agentic builder based in Columbus, Ohio.",
  shortVersion: [
    "I spent years designing player-facing systems for Call of Duty and previously shipped immersive work for organizations including Google, the NBA, and the U.S. Air Force.",
    "These days I do both design and engineering: an indie tactical RPG in Unity, web products, and AI-assisted workflows that help get the work done without losing sight of why we’re doing it.",
  ],
  principles: process.slice(0, 3),
  quotes: [],
  stack: [
    { title: "Experience", items: ["UX Design", "Game UX", "Interaction Design", "Accessibility"] },
    { title: "Games", items: ["Unity", "C#", "Gameplay Systems", "Technical Design"] },
    { title: "Web", items: ["React", "JavaScript", "TypeScript", "Three.js"] },
    { title: "Building", items: ["Prototyping", "Design Systems", "Product Strategy", "AI Workflows"] },
  ],
};

export const servicesPage = {
  eyebrow: "Services",
  title: "How You Can Hire Me.",
  intro: "I help teams take ideas that aren’t quite figured out and build things people can use, play, and understand.",
  engagements,
  process,
};

export const referenceCaseStudies = [
  {
    slug: "call-of-duty",
    index: "02",
    meta: "Five Releases · AAA / Live Service",
    title: "Player-Facing Systems for Call of Duty",
    summary: "Designing player-facing systems across the Modern Warfare and Warzone era, from onboarding and interface flows to technical design and post-match communication.",
    metrics: [
      { value: "5", label: "Shipped releases" },
      { value: "Millions", label: "Players in the live ecosystem" },
      { value: "Cross-Studio", label: "UX, UI, engineering, production, and game design" },
    ],
    sections: [
      { title: "The Work", body: ["My work included weapon icon systems, onboarding and first-time-user experience, post-match communication, interface flows, and technical design inside one of the largest live game ecosystems in the world."] },
      { title: "The Challenge", body: ["These systems had to make sense in the middle of a match, for new and experienced players alike. They also had to work across game modes, changing content, and teams at different studios."] },
      { title: "My Role", body: ["I worked with UX, UI, engineering, production, and game design to turn the intended player experience into specs and working behavior, then keep it working as the live game changed."] },
      { title: "What Tied It Together", body: ["A polished screen was only part of the job. The rules, data, feedback, and work between teams all had to line up so players could understand what was happening."] },
    ],
    process: [
      { title: "Understand the Player State", meta: "Step 01", body: "Define what the player knows, needs, and can do at that moment." },
      { title: "Model the Interaction", meta: "Step 02", body: "Connect interface behavior to game state and production constraints." },
      { title: "Get the Teams on the Same Page", meta: "Step 03", body: "Make sure design, UI, engineering, and production understand the decisions and why we made them." },
      { title: "Try It in Play", meta: "Step 04", body: "Check how it works when someone is actually playing." },
    ],
    stack: ["Game UX", "Technical Design", "Live Service", "Interaction Design", "Cross-Studio Development"],
  },
  {
    slug: "gr1m01re",
    index: "03",
    meta: "GR1M01RE · Unity 6.5",
    title: "Building a Tactical RPG From the Idea to Playable Systems",
    summary: "A city-scale indie RPG combining overhead tactics and direct action with guns, magic, melee, hacking, procedural spaces, and custom development tools.",
    metrics: [
      { value: "2 Modes", label: "Tactical and over-the-shoulder play" },
      { value: "Unity 6.5", label: "Playable systems and developer tooling" },
      { value: "City Scale", label: "Procedural spaces built around a purpose" },
    ],
    sections: [
      { title: "The Intent", body: ["GR1M01RE is a tactical cyberpunk-fantasy RPG about runners, factions, off-leash AI, hacking, magic, guns, and survival in a broken future."] },
      { title: "From Feel to System", body: ["The work spans tactical and over-the-shoulder cameras, lock-on, strafing, true aiming, weapon handling, projectiles, spellcasting, healing, melee, hit feedback, and hacking interactions."] },
      { title: "Give the World Some Meaning", body: ["For procedural cities and interiors, I start with what a place is for and why things belong there. CityParts catalogs, construction rules, and visual checks turn those worldbuilding decisions into systems I can reuse."] },
      { title: "The Design Philosophy", body: ["The pipeline is intent → semantics → geometry → presentation: decide what a space is for, give its parts meaning, build its shape, then make it clear in play. I want a world at a scale players can understand and make decisions in, not just an impressive generator."] },
    ],
    process: [
      { title: "Intent", meta: "Step 01", body: "Define the experience and the player decision the system must support." },
      { title: "Semantics", meta: "Step 02", body: "Give spaces, objects, and behaviors explicit meaning before generating them." },
      { title: "Geometry", meta: "Step 03", body: "Build the playable form and tools that express those rules." },
      { title: "Presentation", meta: "Step 04", body: "Use camera, feedback, sound, and UI to make system state understandable." },
    ],
    stack: ["Unity 6.5", "C#", "Gameplay Systems", "Technical Design", "Procedural Worldbuilding"],
  },
];

export function getReferenceCaseStudy(slug) {
  return referenceCaseStudies.find((study) => study.slug === slug) ?? null;
}
