import { callOfDutyCaseStudies, callOfDutyHub } from "./callOfDuty";

const portfolioProjects = [
  callOfDutyHub,
  ...callOfDutyCaseStudies,
  {
    slug: "snoopys-soapbox-racers",
    title: "Snoopy's Soapbox Racers",
    accent: "#ef9d67",
    eyebrow: "Featured visual project",
    tagline:
      "A character-led racing project carried by visual punch and game-facing presentation.",
    summary:
      "A visually driven racing project included for range, paced as a short media-first case study rather than padded with unsupported production detail.",
    role: "Visual showcase and game-facing presentation",
    projectType: "Racing game project",
    timeframe: "Archived game work",
    focusTags: [
      "Visual showcase",
      "Racing project",
      "Game-facing presentation",
    ],
    context:
      "The public source material clearly establishes the project and its tone, but not the full production history, so the writeup stays intentionally restrained.",
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
    accent: "#ca8dff",
    eyebrow: "Original IP",
    tagline:
      "Original IP spanning world-building, game UI, embodiment, and direction.",
    summary:
      "An original game universe that pulls together character and world briefs, UI studies, embodiment demos, teaser material, and gameplay look-and-feel into one broader IP story.",
    role: "Creative direction, UI/UX, gameplay concepting, and development",
    projectType: "Original IP and game universe",
    timeframe: "Ongoing independent project family",
    focusTags: [
      "Original IP",
      "Game direction",
      "UI and embodiment",
    ],
    context:
      "The legacy material presents Rebel Future as Dela's own game universe, with documentation spanning characters, world-building, gameplay direction, and supporting experiments.",
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
    accent: "#f0b26e",
    eyebrow: "Companion product concept",
    tagline:
      "A utility-first companion concept for browsing, account support, and service-minded UX.",
    summary:
      "A compact product concept that treats a companion app as a useful service layer, with browsing, account utility, and readable interface structure at the center.",
    role: "UX design, UI, and demo implementation",
    projectType: "Companion app concept",
    timeframe: "Personal demo project",
    focusTags: [
      "Companion UX",
      "Utility features",
      "Demo implementation",
    ],
    context:
      "The project is represented publicly through a video demo rather than a long written case study, so the framing stays focused on product utility and implementation.",
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
    accent: "#cf8d98",
    eyebrow: "Supporting visual project",
    tagline:
      "A character-led demo built around visual tone and animation-led presentation.",
    summary:
      "A supporting visual piece that broadens the portfolio's range through character work, motion, and presentation rather than systems-heavy UX.",
    role: "Demo presentation and visual showcase",
    projectType: "Demo and animation-led project",
    timeframe: "Archived demo work",
    focusTags: [
      "Visual demo",
      "Character-led project",
      "Animation-led presentation",
    ],
    context:
      "The available public material is light, so the case study stays concise and media-led instead of filling gaps with unsupported production claims.",
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
    accent: "#b68eff",
    eyebrow: "Focused Rebel Future entry",
    tagline: "Game UI for a one- or two-player iPad experience inside Rebel Future.",
    summary:
      "A concrete UI slice from the Rebel Future universe, centered on menu flow, account handling, customization, and moment-to-moment play surfaces for tablet.",
    role: "Direction, development, and UI/UX",
    projectType: "iPad game UI",
    timeframe: "Independent Rebel Future project",
    focusTags: [
      "Rebel Future",
      "Game UI",
      "Directed and developed",
    ],
    context:
      "The legacy portfolio frames this as directed and developed by Dela, making it a useful supporting case study beneath the broader Rebel Future umbrella.",
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
    accent: "#9bd0c4",
    eyebrow: "Immersive product UX",
    tagline:
      "A tablet-and-VR intelligence tool for dense information workflows.",
    summary:
      "A security-conscious UX project that paired tablet and headset interfaces for reviewing and recording intelligence data across 3D globe views and network-like structures.",
    role: "UX design, Unity prototyping, and development",
    projectType: "Tablet and VR intelligence workflow tool",
    timeframe: "Client product",
    focusTags: [
      "Simulation UX",
      "Tablet plus VR workflows",
      "Security-conscious prototype data",
    ],
    context:
      "The public source material describes Dela prototyping UI in Unity, then contributing on the broader shipping team for the product.",
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
    accent: "#7cc8ff",
    eyebrow: "Workflow-heavy interface system",
    tagline:
      "A desktop-and-VR interface system linking authoring workflows to immersive panels.",
    summary:
      "A systems-heavy project that pairs backend authoring surfaces with the VR panels they drive, showing workflow design, tool thinking, and front-end alignment.",
    role: "UX design and interface prototyping",
    projectType: "Authoring tool and VR interface system",
    timeframe: "Client-side product workflow",
    focusTags: [
      "Workflow-heavy UI",
      "Desktop plus VR pairing",
      "System design thinking",
    ],
    context:
      "The legacy portfolio presents this as close-to-final UI for both the authoring tool and VR frontend, making it a strong example of connected creator and user surfaces.",
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
    accent: "#ffd36c",
    eyebrow: "Educational game app",
    tagline:
      "A learning game app that widens the audience and product range.",
    summary:
      "An educational game app where Dela handled UI/UX and principal development, showing a lighter but still meaningful example of end-to-end ownership.",
    role: "UI/UX and principal development",
    projectType: "Learning game app for kids",
    timeframe: "Educational game project",
    focusTags: [
      "Educational game",
      "UI/UX plus development",
      "Kid-friendly interaction",
    ],
    context:
      "The public writeup is short but explicit about Dela's role across both experience design and development.",
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

export { callOfDutyHub, callOfDutyCaseStudies };

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}
