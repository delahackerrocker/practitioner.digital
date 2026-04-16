import { callOfDutyCaseStudies, callOfDutyHub } from "./callOfDuty";

const portfolioProjects = [
  callOfDutyHub,
  ...callOfDutyCaseStudies,
  {
    slug: "snoopys-soapbox-racers",
    title: "Snoopy's Soapbox Racers",
    featuredTier: "primary",
    accent: "#ef9d67",
    eyebrow: "Featured visual project",
    tagline:
      "Promoted into the featured set for stronger visual punch and a better first-scan mix.",
    summary:
      "Snoopy's Soapbox Racers now sits in the primary tier because it gives the portfolio a more immediate visual read than some of the heavier tool-driven work. The current source material is thin, so this entry stays intentionally concise while reserving room for final screenshots and a fuller authored case study.",
    role: "Visual showcase and game-facing presentation",
    projectType: "Racing game project",
    timeframe: "Legacy portfolio-selected work",
    previewNote:
      "A media-first project slot held open for stronger screenshots, motion clips, and a tighter final story.",
    focusTags: [
      "Visual showcase",
      "Racing project",
      "Media-first presentation",
    ],
    context:
      "The live portfolio surfaces Snoopy's Soapbox Racers as a named project with clear visual value, but not yet with a long written breakdown.",
    challenge: [
      "Promote a stronger visual project into the featured tier without overstating details that are not yet documented in the source material.",
      "Create a credible starter case study that improves the first impression now and can absorb final assets later.",
    ],
    approach: [
      "Kept the copy restrained and honest rather than filling the page with invented production specifics.",
      "Positioned the project as a visual counterweight to the more systems-heavy franchise and VR case studies.",
      "Reserved larger media slots so the next content pass can be asset-led instead of text-led.",
    ],
    outcome: [
      "Strengthens the featured lineup with a clearer visual beat on the homepage.",
      "Creates a believable case-study stub that can be expanded quickly once approved media is ready.",
    ],
    deliverables: [
      "Hero media slot",
      "Key screenshot gallery",
      "Short production summary",
    ],
    media: [
      {
        type: "image",
        label: "Visual slot 01",
        title: "Featured screenshot placeholder",
        caption:
          "Reserved for the strongest frame or hero crop that makes the project feel instantly distinct on desktop and mobile.",
      },
      {
        type: "video",
        label: "Motion slot",
        title: "Gameplay clip placeholder",
        caption:
          "Ready for a short gameplay or presentation clip once final media is selected.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
    ],
  },
  {
    slug: "rebel-future",
    title: "Rebel Future",
    featuredTier: "primary",
    accent: "#ca8dff",
    eyebrow: "Original IP",
    tagline:
      "An umbrella case study for Dela's own universe, game direction, UI, and embodiment experiments.",
    summary:
      "Rebel Future is Dela's original game world and brand. This umbrella entry consolidates Glave Gunner demos, fighter modules, teaser material, cartoon-intro work, and world-building documents into one cleaner story about original IP, interaction design, and visual identity.",
    role: "Creative direction, UI/UX, gameplay concepting, and development",
    projectType: "Original IP and game universe",
    timeframe: "Ongoing independent project family",
    previewNote:
      "Glave Gunner demos, UI studies, teaser material, universe docs, and embodiment work gathered into one project family.",
    focusTags: [
      "Original IP",
      "Game direction",
      "UI and embodiment",
    ],
    context:
      "The legacy site frames Rebel Future as Dela's own video game brand and links to documentation covering the universe, characters, and gameplay look and feel.",
    challenge: [
      "Give one original universe a coherent identity across gameplay ideas, UI, motion, world-building, and teaser material.",
      "Use smaller artifacts and demos to test tone and embodiment without losing the bigger picture of the project family.",
    ],
    approach: [
      "Used Rebel Future as the umbrella story, with Glave Gunner acting as a recurring vehicle for UI, gameplay, and embodiment experiments.",
      "Connected supporting artifacts such as the player embodiment demo, StarFighter module, teaser, and character documentation into one clearer portfolio narrative.",
      "Kept this version broad on purpose so future tasks can split individual sub-projects out only if that improves clarity.",
    ],
    outcome: [
      "Adds a strong original-voice project to the featured lineup instead of leaving the portfolio entirely anchored in client and franchise work.",
      "Turns scattered legacy material into a more coherent first-pass case study.",
      "Sets up a project family that can later branch into more focused case studies without changing the overall content model.",
    ],
    deliverables: [
      "Universe and character brief",
      "Gameplay look-and-feel document",
      "Player embodiment demo",
      "StarFighter module",
      "Teaser and intro material",
    ],
    media: [
      {
        type: "image",
        label: "Project family 01",
        title: "Universe and visual identity",
        caption:
          "A strong slot for world-building art, character material, or visual identity frames that define the Rebel Future tone.",
      },
      {
        type: "image",
        label: "Project family 02",
        title: "Glave Gunner player embodiment",
        caption:
          "Prepared for embodiment demo media that shows how the project explores player presence and interaction in the world.",
      },
      {
        type: "video",
        label: "Project family 03",
        title: "Teaser or intro reel",
        caption:
          "Ready for a teaser, cartoon intro, or gameplay concept clip once final video sources are selected.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
      {
        label: "Rebel Future universe and character brief",
        href: "https://drive.google.com/file/d/166Znw1O6y-qGAB45BlMC4I2QVGrybjR7/view?usp=sharing",
      },
      {
        label: "Gameplay look-and-feel document",
        href: "https://drive.google.com/file/d/1z7TiI3sz-6F2POTFy3CG8WxuQU1C0Sqp/view?usp=sharing",
      },
    ],
  },
  {
    slug: "overwatch-companion-demo",
    title: "Overwatch Companion Demo",
    featuredTier: "primary",
    accent: "#f0b26e",
    eyebrow: "Companion product concept",
    tagline:
      "A fan-product style demo that shows interface utility and product thinking outside the core game client.",
    summary:
      "Presented on the legacy site as a personal passion-project demo, Overwatch Companion Demo explores what a useful companion product could look like around a live game. It works well as a tighter case study about service-minded UX, browsing, and demo implementation.",
    role: "UX design, UI, and demo implementation",
    projectType: "Companion app concept",
    timeframe: "Personal demo project",
    previewNote:
      "Utility-driven companion UX, product framing, and a video demo already available from the live portfolio.",
    focusTags: [
      "Companion UX",
      "Utility features",
      "Demo implementation",
    ],
    context:
      "The current site places this project under personal passion projects and links directly to a video demo rather than a long written case study.",
    challenge: [
      "Design a companion experience that feels genuinely useful instead of ornamental.",
      "Create a service-product layer that supports browsing, utility, and quick understanding without the sprawl of the main client.",
    ],
    approach: [
      "Framed the project as a compact product experience with clear utility rather than as a fan-art exercise.",
      "Used the portfolio entry to emphasize product framing, information hierarchy, and interface usefulness.",
      "Embedded the demo link directly into the content model so this case study can already show motion in a simple way.",
    ],
    outcome: [
      "Adds a more product-shaped project to the featured set without breaking the overall portfolio tone.",
      "Shows range beyond franchise UI by pairing concept thinking with a working demo artifact.",
    ],
    deliverables: [
      "Video demo",
      "Companion feature framing",
      "Screen and flow concepts",
    ],
    media: [
      {
        type: "video",
        label: "Demo video",
        title: "Overwatch Companion Demo",
        caption:
          "Embedded from the legacy portfolio's YouTube demo so the case study already has a real motion artifact.",
        embedUrl: "https://www.youtube.com/embed/PMTRt2csE1A",
      },
      {
        type: "image",
        label: "Screen slot",
        title: "Companion UI captures",
        caption:
          "Reserved for final mockups or video stills that show account views, utility features, and browsing flows.",
      },
    ],
    links: [
      {
        label: "YouTube demo",
        href: "https://www.youtube.com/watch?v=PMTRt2csE1A",
      },
      {
        label: "Legacy portfolio reference",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "how-to-train-your-dragon-demo",
    title: "How to Train Your Dragon Demo",
    featuredTier: "secondary",
    accent: "#cf8d98",
    eyebrow: "Supporting visual project",
    tagline:
      "A visually driven backup piece that broadens the portfolio without crowding the primary featured set.",
    summary:
      "How to Train Your Dragon Demo stays concise in this pass because the source material is lighter than the top-tier projects, but it remains a useful supporting entry for visual range. The project is best treated as a media-led case study once final breakdowns and approved captures are assembled.",
    role: "Demo presentation and visual showcase",
    projectType: "Demo and animation-led project",
    timeframe: "Legacy portfolio-selected work",
    previewNote:
      "Held as a visual backup project with room for stills, animation clips, and a clearer authored story later.",
    focusTags: [
      "Visual demo",
      "Character-led project",
      "Media-ready layout",
    ],
    context:
      "The live portfolio presents this project alongside a separate animation-sequence item, which makes it a good candidate for a future media-rich update rather than a text-heavy writeup today.",
    challenge: [
      "Keep the project present in the portfolio without pretending the legacy source contains more detail than it does.",
      "Reserve enough space for future animation and visual material to become the hero.",
    ],
    approach: [
      "Wrote the project as a restrained supporting entry instead of forcing it into the primary tier.",
      "Left the structure image-first so the eventual case study can rely on media, not filler copy.",
    ],
    outcome: [
      "Preserves a recognizable visual project in the broader portfolio mix.",
      "Creates a clean secondary slot that can be strengthened quickly when final assets arrive.",
    ],
    deliverables: [
      "Hero screenshot slot",
      "Animation clip slot",
      "Brief production notes",
    ],
    media: [
      {
        type: "image",
        label: "Visual slot 01",
        title: "Demo still placeholder",
        caption:
          "Prepared for the strongest still or marketing frame that makes this project readable at a glance.",
      },
      {
        type: "video",
        label: "Visual slot 02",
        title: "Animation sequence placeholder",
        caption:
          "Ready for a short sequence or breakdown clip tied to the legacy animation material.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
    ],
  },
  {
    slug: "glave-gunner-ipad-ui",
    title: "Glave Gunner iPad UI",
    featuredTier: "secondary",
    accent: "#b68eff",
    eyebrow: "Focused Rebel Future entry",
    tagline: "A more concrete UI case study inside the larger Rebel Future world.",
    summary:
      "The live portfolio describes Glave Gunner iPad UI as an iPad game for one or two players that Dela directed and developed. Keeping it as a secondary entry lets the site show a more specific interface artifact from the Rebel Future universe without splitting the main project family too early.",
    role: "Direction, development, and UI/UX",
    projectType: "iPad game UI",
    timeframe: "Independent Rebel Future project",
    previewNote:
      "A focused UI slice that supports the broader Rebel Future umbrella case study.",
    focusTags: [
      "Rebel Future",
      "Game UI",
      "Directed and developed",
    ],
    context:
      "This project appears on the legacy portfolio as a specific Glave Gunner interface piece, making it useful as a concrete supporting entry beneath the Rebel Future umbrella.",
    challenge: [
      "Show a specific UI artifact from an original IP without fragmenting the overall portfolio structure.",
      "Keep the entry concrete enough to feel real while leaving room for fuller screenshots and flow notes later.",
    ],
    approach: [
      "Positioned the project as a supporting detail page within the Rebel Future family rather than as a competing flagship.",
      "Focused the copy on direction, development, and interface ownership as stated on the legacy site.",
    ],
    outcome: [
      "Gives the portfolio a more tangible Rebel Future UI entry.",
      "Creates a useful supporting case study for future screen captures and flow annotations.",
    ],
    deliverables: [
      "iPad UI screens",
      "Player flow notes",
      "Rebel Future visual language",
    ],
    media: [
      {
        type: "image",
        label: "UI slot 01",
        title: "iPad interface placeholder",
        caption:
          "Reserved for the strongest screen or menu view from the Glave Gunner iPad UI work.",
      },
      {
        type: "image",
        label: "UI slot 02",
        title: "Flow breakdown placeholder",
        caption:
          "Ready for annotations that connect the interface to multiplayer or two-player use cases.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
      {
        label: "Rebel Future universe and character brief",
        href: "https://drive.google.com/file/d/166Znw1O6y-qGAB45BlMC4I2QVGrybjR7/view?usp=sharing",
      },
    ],
  },
  {
    slug: "vr-intelligence-tool-usaf",
    title: "VR Intelligence Tool for the USAF",
    featuredTier: "secondary",
    accent: "#9bd0c4",
    eyebrow: "Immersive product UX",
    tagline:
      "Strong credibility material preserved in the portfolio, but intentionally moved behind the visually stronger featured set.",
    summary:
      "A security-conscious UX project built around fake data sets, 3D globe views, and complex network-style intelligence structures across tablets and VR headsets. The portfolio keeps it as an important supporting case study because it shows serious product and simulation work without needing to dominate the homepage.",
    role: "UX design, Unity prototyping, and development",
    projectType: "Tablet and VR intelligence workflow tool",
    timeframe: "Client product",
    previewNote:
      "Dense information design, cross-surface workflows, and a meaningful bridge between prototyping and shipping.",
    focusTags: [
      "Simulation UX",
      "Tablet plus VR workflows",
      "Security-conscious prototype data",
    ],
    context:
      "The source material describes a fake-data intelligence tool that worked on tablets and VR headsets, with Dela starting as a UX designer building prototypes in Unity and later contributing as a developer on a larger shipping team.",
    challenge: [
      "Make complex intelligence data readable across tablets, VR headsets, globe views, and network-like structures.",
      "Prototype enough interaction clarity to support expert workflows without exposing sensitive real-world information.",
    ],
    approach: [
      "Used Unity-based UI prototyping to make the workflow tangible early and to test how dense data should behave across surfaces.",
      "Balanced tablet and VR interaction needs so the product could feel like one connected system rather than two unrelated interfaces.",
      "Kept the portfolio framing honest: strong credibility, but a supporting role in the homepage hierarchy.",
    ],
    outcome: [
      "Retains one of the strongest product-credibility projects in the portfolio.",
      "Shows that the work extends beyond games into immersive tools, expert workflows, and shipped client products.",
    ],
    deliverables: [
      "Tablet intelligence views",
      "VR panel concepts",
      "Unity UI prototypes",
      "Fake-data workflow demonstrations",
    ],
    media: [
      {
        type: "image",
        label: "Workflow slot 01",
        title: "3D globe and network view placeholder",
        caption:
          "Reserved for the clearest example of how dense intelligence information was organized and read.",
      },
      {
        type: "image",
        label: "Workflow slot 02",
        title: "Tablet and VR interface placeholder",
        caption:
          "Ready for paired captures showing how the product moved between flat and immersive surfaces.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
    ],
  },
  {
    slug: "authoring-tool-final-vr-panels",
    title: "Authoring Tool Final + VR Panels",
    featuredTier: "secondary",
    accent: "#7cc8ff",
    eyebrow: "Workflow-heavy interface system",
    tagline:
      "A paired desktop and VR interface story that adds serious systems range to the broader portfolio.",
    summary:
      "This project pairs a backend authoring tool with the VR-facing panels it powered. It works as a useful supporting case study because it shows workflow-heavy UI, system thinking, and a relationship between creator tools and immersive front-end surfaces.",
    role: "UX design and interface prototyping",
    projectType: "Authoring tool and VR interface system",
    timeframe: "Client-side product workflow",
    previewNote:
      "Backend authoring and immersive front-end UI shown as one connected system instead of isolated screens.",
    focusTags: [
      "Workflow-heavy UI",
      "Desktop plus VR pairing",
      "System design thinking",
    ],
    context:
      "The legacy portfolio presents this as getting close to the final UI for both the backend authoring tool and the VR frontend, which makes it a strong systems-oriented supporting project.",
    challenge: [
      "Keep authoring surfaces and VR-facing panels aligned so the overall product feels coherent.",
      "Present a workflow-heavy tool in a portfolio without making it feel dry or text-bound.",
    ],
    approach: [
      "Framed the project as one connected interface system rather than splitting desktop and VR work into unrelated cards.",
      "Kept the initial writeup concise so future screenshots and process notes can do more of the storytelling.",
    ],
    outcome: [
      "Adds a strong backend-to-frontend systems example to the broader portfolio.",
      "Supports future case-study expansion around process, authoring workflows, and immersive UI behavior.",
    ],
    deliverables: [
      "Authoring tool screens",
      "VR panel layouts",
      "Workflow alignment notes",
    ],
    media: [
      {
        type: "image",
        label: "System slot 01",
        title: "Authoring tool placeholder",
        caption:
          "Reserved for the clearest authoring interface frame or workflow capture.",
      },
      {
        type: "image",
        label: "System slot 02",
        title: "VR panel placeholder",
        caption:
          "Prepared for a matching immersive panel view so the system pairing reads immediately.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
    ],
  },
  {
    slug: "curious-george",
    title: "Curious George",
    featuredTier: "secondary",
    accent: "#ffd36c",
    eyebrow: "Educational game app",
    tagline:
      "A smaller but specific project that widens the portfolio's audience and product range.",
    summary:
      "The legacy portfolio describes Curious George as a learning game app for kids, with Dela handling both UI/UX and principal development. It stays in the secondary set, but it is valuable because it adds a very different audience, tone, and delivery context to the overall mix.",
    role: "UI/UX and principal development",
    projectType: "Learning game app for kids",
    timeframe: "Educational game project",
    previewNote:
      "A concise supporting entry for playful product design, kid-friendly interaction, and hands-on build work.",
    focusTags: [
      "Educational game",
      "UI/UX plus development",
      "Audience range",
    ],
    context:
      "Even though the legacy writeup is short, it clearly identifies Dela's ownership across both experience design and development.",
    challenge: [
      "Create playful, readable interaction for younger users without sacrificing clarity.",
      "Build a product that works for a very different audience than the rest of the portfolio's game and tool work.",
    ],
    approach: [
      "Positioned the project as a range-expanding supporting case study rather than a homepage centerpiece.",
      "Kept the copy specific to the source material: UI/UX ownership plus principal development responsibility.",
    ],
    outcome: [
      "Broadens the portfolio beyond shooter, VR, and original IP work.",
      "Preserves a useful example of full-stack creative ownership in a lighter-weight format.",
    ],
    deliverables: [
      "Game UI screens",
      "Kid-friendly interaction flows",
      "Principal development support",
    ],
    media: [
      {
        type: "image",
        label: "Project slot 01",
        title: "Learning app placeholder",
        caption:
          "Reserved for the clearest screen or interaction still that communicates the app's audience and tone quickly.",
      },
    ],
    links: [
      {
        label: "Legacy interactive portfolio",
        href: "https://www.drive-fast-take-chances.com/interactive-portfolio",
      },
    ],
  },
];

export const projects = portfolioProjects;

export const primaryProjects = portfolioProjects.filter(
  (project) =>
    project.featuredTier === "primary" &&
    !project.parentSlug &&
    project.slug !== "call-of-duty"
);

export const secondaryProjects = portfolioProjects.filter(
  (project) => project.featuredTier === "secondary" && !project.parentSlug
);

export const featuredProjects = primaryProjects;

export { callOfDutyHub, callOfDutyCaseStudies };

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}
