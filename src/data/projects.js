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
      "A visually led racing-game project with room for stronger final media.",
    summary:
      "A concise, media-first case study for a racing project with immediate visual appeal. The available source material is still light, so the writeup stays short and lets final screenshots do the heavy lifting.",
    role: "Visual showcase and game-facing presentation",
    projectType: "Racing game project",
    timeframe: "Legacy portfolio-selected work",
    previewNote:
      "Held for stronger screenshots, motion clips, and a tighter final story.",
    focusTags: [
      "Visual showcase",
      "Racing project",
      "Media-first presentation",
    ],
    context:
      "Snoopy's Soapbox Racers is clearly identified in the source material, but the available detail is still limited.",
    challenge: [
      "Present a visually strong project without overstating details that are not yet documented in the source material.",
      "Build a concise case study structure that can absorb stronger media later.",
    ],
    approach: [
      "Kept the copy restrained and factual rather than filling gaps with invented production detail.",
      "Positioned the project as a visually driven counterpoint to the more systems-heavy franchise and XR work.",
      "Reserved larger media slots so final captures can carry more of the story.",
    ],
    outcome: [
      "Keeps a visually distinctive racing project in the featured set.",
      "Creates a clean foundation for a stronger media-led case study once final assets are ready.",
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
      "An original IP case study spanning world-building, UI, embodiment, and game direction.",
    summary:
      "Rebel Future brings together original-world development, interface studies, teaser material, and gameplay concepts into one broader case study about IP creation and interactive direction.",
    role: "Creative direction, UI/UX, gameplay concepting, and development",
    projectType: "Original IP and game universe",
    timeframe: "Ongoing independent project family",
    previewNote:
      "Glave Gunner demos, UI studies, teaser material, universe docs, and embodiment work collected under one project family.",
    focusTags: [
      "Original IP",
      "Game direction",
      "UI and embodiment",
    ],
    context:
      "The legacy material presents Rebel Future as Dela's original game universe, with linked documentation covering characters, world-building, and gameplay look and feel.",
    challenge: [
      "Give one original universe a coherent identity across gameplay ideas, UI, motion, world-building, and teaser material.",
      "Use smaller artifacts and demos to test tone and embodiment without losing the bigger picture of the project family.",
    ],
    approach: [
      "Used Rebel Future as the umbrella story, with Glave Gunner acting as a recurring vehicle for UI, gameplay, and embodiment experiments.",
      "Connected supporting artifacts such as the player embodiment demo, StarFighter module, teaser, and character documentation into one clearer project narrative.",
      "Kept the structure broad so the project family reads clearly before it is split into narrower case studies.",
    ],
    outcome: [
      "Shows original IP thinking alongside client and franchise work.",
      "Turns scattered legacy material into a clearer project family.",
      "Leaves room for narrower case studies later if stronger assets surface.",
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
      "A companion-app concept focused on utility, browsing, and service-minded UX.",
    summary:
      "This demo explores what a useful companion product could look like around a live game, with an emphasis on product framing, interface utility, and hands-on implementation.",
    role: "UX design, UI, and demo implementation",
    projectType: "Companion app concept",
    timeframe: "Personal demo project",
    previewNote:
      "Utility-driven companion UX and product framing, backed by an existing video demo.",
    focusTags: [
      "Companion UX",
      "Utility features",
      "Demo implementation",
    ],
    context:
      "The project is supported by a video artifact rather than a long written case study.",
    challenge: [
      "Design a companion experience that feels genuinely useful instead of ornamental.",
      "Create a service-product layer that supports browsing, utility, and quick understanding without the sprawl of the main client.",
    ],
    approach: [
      "Framed the project as a compact product experience with clear utility rather than as a fan-art exercise.",
      "Emphasized product framing, information hierarchy, and interface usefulness.",
      "Used the existing demo link so the work can show motion without extra UI overhead.",
    ],
    outcome: [
      "Adds a more product-shaped case study to the featured lineup.",
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
      "A visually led supporting project with room for stronger final media.",
    summary:
      "A concise supporting entry that broadens the visual range without overstating the limited source material.",
    role: "Demo presentation and visual showcase",
    projectType: "Demo and animation-led project",
    timeframe: "Legacy portfolio-selected work",
    previewNote:
      "Held as a media-first supporting project with room for final stills, animation clips, and a tighter story.",
    focusTags: [
      "Visual demo",
      "Character-led project",
      "Media-ready layout",
    ],
    context:
      "The available source material sits alongside separate animation content, making this a natural media-led case study.",
    challenge: [
      "Keep the project present without pretending the legacy source contains more detail than it does.",
      "Reserve enough space for future animation and visual material to become the hero.",
    ],
    approach: [
      "Wrote the project as a restrained supporting entry instead of forcing it into the primary tier.",
      "Left the structure image-first so the eventual case study can rely on media instead of filler copy.",
    ],
    outcome: [
      "Preserves a recognizable visual project in the broader mix.",
      "Creates a clean secondary case study that can be strengthened quickly when final assets arrive.",
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
      "A concrete interface slice from the Rebel Future universe, focused on game UI for a one- or two-player iPad experience.",
    role: "Direction, development, and UI/UX",
    projectType: "iPad game UI",
    timeframe: "Independent Rebel Future project",
    previewNote:
      "Focused UI case study that supports the broader Rebel Future umbrella.",
    focusTags: [
      "Rebel Future",
      "Game UI",
      "Directed and developed",
    ],
    context:
      "The legacy material frames this as a specific Glave Gunner interface piece, which makes it a useful supporting entry beneath the larger Rebel Future world.",
    challenge: [
      "Show a specific UI artifact from an original IP without losing the larger project family around it.",
      "Keep the entry concrete enough to feel real while leaving room for fuller screenshots and flow notes later.",
    ],
    approach: [
      "Positioned the project as a focused UI slice within the Rebel Future family.",
      "Focused the copy on direction, development, and interface ownership as stated on the legacy site.",
    ],
    outcome: [
      "Adds a more tangible Rebel Future UI entry.",
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
      "An immersive product UX case study spanning tablets, VR, and dense information workflows.",
    summary:
      "A security-conscious UX project built around fake data sets, 3D globe views, and complex intelligence structures across tablets and VR headsets.",
    role: "UX design, Unity prototyping, and development",
    projectType: "Tablet and VR intelligence workflow tool",
    timeframe: "Client product",
    previewNote:
      "Dense information design across flat and immersive surfaces, from Unity prototypes to shipping support.",
    focusTags: [
      "Simulation UX",
      "Tablet plus VR workflows",
      "Security-conscious prototype data",
    ],
    context:
      "The source material describes Dela starting as a UX designer prototyping in Unity and later contributing as a developer on the larger shipping team.",
    challenge: [
      "Make complex intelligence data readable across tablets, VR headsets, globe views, and network-like structures.",
      "Prototype enough interaction clarity to support expert workflows without exposing sensitive real-world information.",
    ],
    approach: [
      "Used Unity-based UI prototyping to make the workflow tangible early and to test how dense data should behave across surfaces.",
      "Balanced tablet and VR interaction needs so the product could feel like one connected system rather than two unrelated interfaces.",
      "Kept the writeup concise and factual while preserving the project's credibility.",
    ],
    outcome: [
      "Retains one of the strongest product-credibility projects in the body of work.",
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
      "A desktop-and-VR interface system connecting authoring workflows to immersive surfaces.",
    summary:
      "This project pairs a backend authoring tool with the VR panels it powered, showing workflow-heavy UI, system thinking, and alignment between creator tools and front-end experience.",
    role: "UX design and interface prototyping",
    projectType: "Authoring tool and VR interface system",
    timeframe: "Client-side product workflow",
    previewNote:
      "Backend authoring and immersive front-end UI presented as one connected system.",
    focusTags: [
      "Workflow-heavy UI",
      "Desktop plus VR pairing",
      "System design thinking",
    ],
    context:
      "The legacy material presents this as near-final UI for both the backend authoring tool and the VR frontend, making it a strong systems-oriented supporting project.",
    challenge: [
      "Keep authoring surfaces and VR-facing panels aligned so the overall product feels coherent.",
      "Present a workflow-heavy tool without making it feel dry or text-bound.",
    ],
    approach: [
      "Framed the project as one connected interface system rather than splitting desktop and VR work into unrelated cards.",
      "Kept the writeup concise so screenshots and process notes can carry more of the storytelling.",
    ],
    outcome: [
      "Adds a strong backend-to-frontend systems example to the broader body of work.",
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
      "A learning-game project that broadens the audience and product range.",
    summary:
      "A learning game app for kids with Dela handling both UI/UX and principal development.",
    role: "UI/UX and principal development",
    projectType: "Learning game app for kids",
    timeframe: "Educational game project",
    previewNote:
      "Supporting case study for kid-friendly interaction design and hands-on build work.",
    focusTags: [
      "Educational game",
      "UI/UX plus development",
      "Audience range",
    ],
    context:
      "Even though the legacy writeup is short, it clearly points to Dela's ownership across both experience design and development.",
    challenge: [
      "Create playful, readable interaction for younger users without sacrificing clarity.",
      "Build a product that works for a very different audience than the rest of the game and tool work.",
    ],
    approach: [
      "Positioned the project as a range-expanding supporting case study.",
      "Kept the copy specific to the source material: UI/UX ownership plus principal development responsibility.",
    ],
    outcome: [
      "Broadens the body of work beyond shooter, VR, and original IP projects.",
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
