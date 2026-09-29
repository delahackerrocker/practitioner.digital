import { portfolioWork } from "./portfolioWork.js";

export const referenceSite = {
  brand: { initials: "SD", name: "Steven de la Torre", givenName: "Steven", familyName: "de la Torre" },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  primaryCta: {
    label: "Let’s Talk for 30 Minutes →",
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
    summary: "A tactical RPG with guns, magic, hacking, and AI that’s gone off the rails. Make a living and try to stay alive in a busted cyberpunk city.",
    tags: ["Game", "Unity", "Systems", "Worldbuilding"],
    href: "https://ko-fi.com/pract1t10ner",
    cta: "Follow the Build →",
    tone: "yellow",
  },
  {
    title: "Nationwide Map Tool",
    status: "In Development",
    summary: "Find your seat, grab some food, and figure out where to park. An independent arena guide I’m building for desktop and mobile.",
    tags: ["Maps", "Wayfinding", "Visitor Experience", "Web"],
    href: "https://practitioner.digital/nationwide-arena/",
    cta: "Try the Prototype →",
    tone: "cyan",
  },
];

const featuredStudies = portfolioWork.slice(0, 3);

const engagements = [
  { title: "Build Your AI App", bullets: ["Get your idea into a working first version", "Figure out how people will use it and what we need to build", "Try the part most likely to break the plan first", "Leave you with code your team can understand and keep working on"] },
  { title: "Unblock Your AI App", bullets: ["Look at the app, the code, and where people get stuck", "Find out what’s broken, confusing, or holding things up", "Sort out the problem underneath all the workarounds", "Work out a fix and help build it"] },
  { title: "Games and Interactive Tools", bullets: ["Gameplay systems, controls, cameras, combat, UI, and tools", "Unity prototypes and C# code ready for the project", "Make the controls feel right and the game easy to follow", "Keep the game you wanted and code you can still work on"] },
  { title: "Web Design & Development", bullets: ["Plan the site, organize the pages, and make it easy to use", "Websites, apps, and tools for getting work done", "Build in React, or use a CMS if you need to update it yourself", "Use AI where it saves work and makes sense"] },
];

const process = [
  { title: "Start With the Person Using It", body: "Who’s using this? What are they trying to do? I start there, before picking tools or making anything look pretty." },
  { title: "Try the Risky Part First", body: "Every project has a bit we’re hoping will work. I try that bit early. Better to find a bad idea on Tuesday than three months from now." },
  { title: "Design It. Build It. Try It.", body: "I work on the design and the code together. Try it, see what feels wrong, fix it, and go again." },
  { title: ["Keep It Simple.", "Keep It Working."], body: "Build enough to test the idea. Write down what matters. Skip the extra machinery until there’s a reason for it." },
];

export const homePage = {
  eyebrow: "UX Designer · Game Developer · AI Builder",
  headline: ["You Have Something in Your Head.", "I Make It Real."],
  intro: "I design and build games, websites, and apps. I’ve worked on Call of Duty, built tools for clients, and made plenty of my own stuff. Got an idea that needs sorting out? That’s my kind of job.",
  spec: [["Based", "Columbus, Ohio"], ["Location", "Remote · US / Worldwide"], ["Work", "Contract · Part-time · Full-time"], ["Tools", "Unity · C# · React · AI"], ["Status", "Available"]],
  capabilities,
  proof: [
    { label: "5 Shipped Releases", value: "Call of Duty", body: "Work across Modern Warfare and Warzone releases.", note: "AAA · Live Service · Game UX" },
    { label: "UX + Code", value: "Both Sides", body: "I work out how it should behave, then write the code to make it happen.", note: "Design · Prototype · Build" },
    { label: "Big Brands", value: "Google · NBA · USAF", body: "VR, AR, and interactive projects I worked on before Call of Duty.", note: "VR · AR · Interactive Projects" },
    { label: "AAA → Indie", value: "End to End", body: "I use what I learned on big teams to build my own games and tools.", note: "Systems · Tools · Worldbuilding" },
    { label: "Current Build", value: "GR1M01RE", body: "A tactical RPG with a whole city to build, guns and magic to balance, and plenty left to figure out.", note: "Unity 6.5 · Active Development" },
  ],
  credentials: ["Accessible Player Experience Trained", "Design and Code", "Building Since Age 14", "Published Musician", "Independent Game Developer"],
  engagements,
  featuredStudies,
  selectedWork: [
    { title: "Call of Duty Player Systems", tags: ["Game UX", "Technical Design", "Live Service"], summary: "Worked on weapon icons, menus, new-player guidance, and messages after a match. Built alongside design, UI, engineering, and production teams.", outcome: "Five Shipped Releases · Millions of Players · Teams Across Studios" },
    { title: "GR1M01RE / PRACT1T10N3R", tags: ["Unity", "C#", "Systems Design", "Worldbuilding"], summary: "An RPG where you can plan from above or get into the fight yourself. Guns, magic, hacking, and a city full of trouble.", outcome: "Playable Combat · City-Building Tools · Work in Progress" },
    { title: "Nationwide Arena Map Tool", tags: ["Interaction Design", "Wayfinding", "Prototyping"], summary: "A guide for finding your section, food, restrooms, and a way to get there. Works on desktop and mobile.", outcome: "Seating Map · Visit Planning · Work in Progress" },
    { title: "Websites for Clients and Partners", tags: ["UX", "Product Strategy", "Web Development"], summary: "Sites for selling products, comparing performance, and finding music to license. Different jobs, with the same goal: make the next step clear.", outcome: "Plan · Design · Build" },
    { title: "Things I’m Trying Out", tags: ["Prototype Design", "Unity", "Web"], summary: "Small tests for cameras, controls, hacking, maps, and game rules. A quick way to find out what’s fun and what needs more work.", outcome: "Playable Tests · Browser and App Builds" },
  ],
  products,
  profile: {
    eyebrow: "Who You’d Be Working With",
    title: ["I’m Steven de la Torre", "UX Designer, Game Developer, and AI Builder."],
    body: "I’m in Columbus, Ohio. I spent years working on Call of Duty, with earlier projects for Google, the NBA, and the U.S. Air Force. These days I’m building an indie RPG, websites, and tools that use AI to help get work done. I like a messy starting point. We can figure it out and build from there.",
  },
  process,
};

export const workPage = {
  eyebrow: "Work",
  title: "Things I’ve Built and Worked On.",
  intro: "Big games, small games, websites, and tools. Some shipped, some still on the workbench.",
  products,
  work: portfolioWork,
};

export const aboutPage = {
  eyebrow: "About",
  title: "I Like Figuring Things Out. Then Building Them.",
  intro: "I’m Steven de la Torre. I design, write code, and build games and apps in Columbus, Ohio.",
  shortVersion: [
    "I spent years working on Call of Duty: menus, weapon icons, new-player guidance, and the details that help players know what’s going on. Before that, I worked on VR, AR, and interactive projects for Google, the NBA, and the U.S. Air Force.",
    "Now I split my time between an indie RPG, client websites, and tools that use AI. I do the design and the coding. I like getting something working, trying it out, and fixing the bits that don’t hold up.",
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
  intro: "Need a website, a game prototype, or an app that’s finally going to work? I can help you figure it out and build it.",
  engagements,
  process,
};

export const referenceCaseStudies = [
  {
    slug: "call-of-duty",
    index: "02",
    meta: "Five Releases · AAA / Live Service",
    title: "My Work on Call of Duty",
    summary: "Weapon icons, menus, helping new players get started, and keeping people informed after a match. My work across Modern Warfare and Warzone releases.",
    metrics: [
      { value: "5", label: "Shipped Releases" },
      { value: "Millions", label: "Players" },
      { value: "Cross-Studio", label: "UX, UI, engineering, production, and game design" },
    ],
    sections: [
      { title: "The Work", body: ["I worked on weapon icons, new-player guidance, menus, and messages after a match. The job was to make those pieces clear and get them working inside a huge game."] },
      { title: "The Challenge", body: ["Players don’t stop a match to puzzle out the interface. Things had to make sense quickly, whether it was someone’s first game or their thousandth. New content, different modes, and teams at several studios kept us busy."] },
      { title: "My Role", body: ["I worked with designers, UI artists, engineers, and producers to figure out how things should work. Then I helped turn that into clear instructions and working features, and kept up as the game changed."] },
      { title: "Getting the Details Right", body: ["A good-looking screen still has to work. The game rules, the information on screen, and the messages players get all have to agree. Getting that right took plenty of checking and talking between teams."] },
    ],
    process: [
      { title: "Start With the Player", meta: "Step 01", body: "What’s happening right now? What does the player need to know or do next?" },
      { title: "Work Out What Happens", meta: "Step 02", body: "Decide what each action does, what the screen shows, and what the game can support." },
      { title: "Get the Teams on the Same Page", meta: "Step 03", body: "Talk through the plan with the people building it. Catch the crossed wires early." },
      { title: "Try It in Play", meta: "Step 04", body: "Check how it works when someone is actually playing." },
    ],
    stack: ["Game UX", "Technical Design", "Live Service", "Interaction Design", "Cross-Studio Development"],
  },
  {
    slug: "gr1m01re",
    index: "03",
    meta: "GR1M01RE · Unity 6.5",
    title: "GR1M01RE: Guns, Magic, and a City in Trouble",
    summary: "An indie RPG where you can plan a fight from above or jump in yourself. I’m building the combat, the city, and the tools to put it all together.",
    metrics: [
      { value: "2 Modes", label: "Tactical and Over-the-Shoulder Play" },
      { value: "Unity 6.5", label: "Gameplay and Build Tools" },
      { value: "City Scale", label: "Generated Streets and Interiors" },
    ],
    sections: [
      { title: "The Game", body: ["GR1M01RE mixes cyberpunk and fantasy: runners taking jobs, factions fighting for control, and AI causing problems of its own. You’ve got guns, magic, and hacking. Staying alive will take some work."] },
      { title: "Make the Fight Feel Right", body: ["I’m working on the cameras, aiming, movement, guns, spells, healing, melee, and hacking. There are a lot of parts, and they need to feel like one game when you play."] },
      { title: "Build Places That Make Sense", body: ["A generated city needs more than a pile of buildings. I start with what a place is used for, what belongs there, and how people get around. Then I build reusable parts and rules to put it together."] },
      { title: "Give the Player Something to Work With", body: ["First I decide what the player should be able to do in a place. Then I work out what belongs there, build it, and test it in the game. Can you find your way around? Spot trouble? Make a plan? That’s how I check whether it’s working."] },
    ],
    process: [
      { title: "Pick the Job", meta: "Step 01", body: "Decide what the player needs to do and what would make it interesting." },
      { title: "Work Out What Belongs", meta: "Step 02", body: "Give each room, object, and character a reason to be there." },
      { title: "Build the Place", meta: "Step 03", body: "Turn those rules into spaces you can move through and play in." },
      { title: "See If It Works", meta: "Step 04", body: "Check that the camera, sound, and on-screen information help you follow the action." },
    ],
    stack: ["Unity 6.5", "C#", "Gameplay Systems", "Technical Design", "Procedural Worldbuilding"],
  },
];

export function getReferenceCaseStudy(slug) {
  return referenceCaseStudies.find((study) => study.slug === slug) ?? null;
}
