function createPageGallery(basePath, pageCount, titlePrefix, caption) {
  return Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;
    const padded = String(pageNumber).padStart(2, "0");

    return {
      type: "image",
      label: `Page ${padded}`,
      shortLabel: padded,
      title: `${titlePrefix} ${padded}`,
      src: `${basePath}/page-${padded}.png`,
      caption,
      fit: "contain",
    };
  });
}

export const callOfDutyCaseStudies = [
  {
    slug: "call-of-duty/mw3-exfil",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    featuredTier: "flagship",
    accent: "#8fb7ff",
    cardImage: "/assets/projects/call-of-duty/images/Exfil_Success_After_Action_Report.png",
    eyebrow: "Modern Warfare 3 Exfil",
    title: "MW3 Exfil",
    tagline:
      "A post-extraction flow focused on reward reveal, inventory clarity, and pacing.",
    summary:
      "This After Action Report work shows how reward reveal, loot presentation, XP breakdown, and screen sequencing were shaped to feel dramatic without sacrificing readability.",
    role: "UI/UX Technical Designer",
    projectType: "After Action Report flow",
    timeframe: "Modern Warfare 3",
    previewNote:
      "49-page deck plus supporting flow diagrams for sequencing, inventory reveal, and progression communication.",
    focusTags: [
      "AAR flow design",
      "Reward reveal",
      "Animation and sequencing logic",
    ],
    context:
      "The artifact centers on a core Call of Duty UX problem: making a successful extraction feel clear, high-value, and readable across multiple information-dense states.",
    challenge: [
      "Make a successful extraction feel rewarding and readable across multiple information-dense screens.",
      "Balance cinematic reveal with practical clarity for inventory, XP, loot, and progression breakdowns.",
    ],
    approach: [
      "Used the AAR deck to stage the player journey from extraction success through inventory, rewards, and summary states.",
      "Supported the deck with flow diagrams that make timing, hierarchy, and sequencing logic easier to scan.",
      "Structured the artifact for a page-by-page review that keeps the flow readable.",
    ],
    outcome: [
      "Highlights post-match UX thinking through a dense but readable reward flow.",
      "Shows how pacing, hierarchy, and screen logic can be communicated in a production-ready design deck.",
    ],
    deliverables: [
      "49-page Exfil deck",
      "Big-picture flow map",
      "Individual user flow",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary deck",
        title: "Exfil After Action Report slideshow",
        intro:
          "The full deck is rendered page by page for a readable walkthrough of the flow.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/exfil/pages",
          49,
          "Exfil deck page",
          "Page from the Exfil After Action Report deck."
        ),
      },
      {
        eyebrow: "Supporting flows",
        title: "Flow and sequencing support",
        intro:
          "Supporting diagrams clarify the logic from big-picture reward sequencing down to the individual user journey.",
        items: [
          {
            type: "image",
            label: "Flow map 01",
            shortLabel: "01",
            title: "Jupiter big-picture flow",
            src: "/assets/projects/call-of-duty/exfil/flows/Jupiter-AAR-BIG-PICTURE-FLOW.png",
            caption:
              "High-level sequencing map for how the Exfil AAR moves across major beats and reward framing.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Flow map 02",
            shortLabel: "02",
            title: "Cerberus individual user flow",
            src: "/assets/projects/call-of-duty/exfil/flows/Cerberus-AAR-IndividualUserFlow.png",
            caption:
              "A closer look at the user journey and state progression inside the Exfil AAR experience.",
            fit: "contain",
          },
        ],
      },
    ],
    links: [
      {
        label: "Original Exfil PDF",
        href: "/assets/projects/call-of-duty/exfil/pdf/Exfil_Success_After_Action_Report.pdf",
      },
      {
        label: "Legacy Call of Duty overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-keypad-mini-game",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    featuredTier: "flagship",
    accent: "#f2b76a",
    cardImage: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
    eyebrow: "Black Ops 6 Keypad Mini Game",
    title: "BO6 Keypad Mini Game",
    tagline:
      "An interaction case study about puzzle readability, state feedback, and player guidance.",
    summary:
      "This mini-game centers on a compact interaction loop: helping players understand state changes, progression, and feedback at a glance while preserving tension.",
    role: "UI/UX Technical Designer",
    projectType: "Mini-game interaction design",
    timeframe: "Black Ops 6",
    previewNote:
      "Video-first case study with flow support for state changes, feedback beats, and puzzle readability.",
    focusTags: [
      "Mini-game UX",
      "Feedback and progression",
      "Interaction clarity",
    ],
    context:
      "The artifact set shows how a short, high-pressure interaction can still benefit from clear UX framing and well-structured feedback.",
    challenge: [
      "Make a puzzle interaction readable at a glance while still preserving tension and progression.",
      "Communicate state changes, success cues, and player feedback clearly inside a compact mini-game loop.",
    ],
    approach: [
      "Put the motion artifact first so the interaction can be understood in the same way a player would experience it.",
      "Used the flow diagram as supporting evidence for feedback logic, readability, and sequencing decisions.",
      "Kept the authored text short so the case study stays centered on interaction clarity, not over-explanation.",
    ],
    outcome: [
      "Adds a concise interaction-design proof point to the Call of Duty cluster.",
      "Shows how compact mechanics can still benefit from thoughtful UX framing and state communication.",
    ],
    deliverables: [
      "Gameplay video",
      "Keypad flow diagram",
      "Interaction notes",
    ],
    mediaBlocks: [
      {
        eyebrow: "Video artifact",
        title: "Keypad interaction in motion",
        intro:
          "Motion leads because timing and feedback are central to the case study.",
        items: [
          {
            type: "video",
            label: "Video",
            shortLabel: "V1",
            title: "BO6 keypad mini game clip",
            src: "/assets/projects/call-of-duty/keypad-mini-game/video/BlackOps6-Keypads.mp4",
            poster: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
            caption:
              "Local video capture showing interaction rhythm, puzzle pacing, and feedback states in sequence.",
          },
          {
            type: "image",
            label: "Flow support",
            shortLabel: "F1",
            title: "Keypad flow chart",
            src: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
            caption:
              "Flow support image that clarifies interaction branches, readability, and state communication.",
            fit: "contain",
          },
        ],
      },
    ],
    links: [
      {
        label: "Legacy Call of Duty overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/warzone-cold-war-design-guide",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    featuredTier: "flagship",
    accent: "#9fc2ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
    eyebrow: "Warzone / Cold War Design Guide",
    title: "Warzone / Cold War Design Guide",
    tagline:
      "A visual-systems case study about consistency, brand balance, and UI targets.",
    summary:
      "This style guide shows system-level UI thinking: balancing shared-content needs with premium product identity across typography, color, item branding, and visual tone.",
    role: "UI/UX Technical Designer",
    projectType: "Style guide and visual system design",
    timeframe: "Warzone / Cold War",
    previewNote:
      "40 pages of visual targets, typography, color, item branding, and consistency guidance.",
    focusTags: [
      "Visual systems",
      "Typography and color",
      "Brand balancing",
    ],
    context:
      "The deck demonstrates how UI direction can scale beyond single features into a coherent franchise-wide visual system.",
    challenge: [
      "Create visual guidance that balances shared-content needs with premium product identity.",
      "Document typography, color, branding, and consistency targets in a form teams can actually use.",
    ],
    approach: [
      "Let the document itself remain central while giving it a cleaner, more readable presentation.",
      "Focused the authored story on visual leadership, consistency targets, and brand-system balancing rather than on generic design-process filler.",
      "Curated the surrounding stills so the deck remains the backbone of the case study.",
    ],
    outcome: [
      "Shows visual leadership around tone, consistency, and decision-making at scale.",
      "Demonstrates how a design guide can align teams around a shared visual target.",
    ],
    deliverables: [
      "40-page style guide",
      "Brand and item direction",
      "Typography and color targets",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary deck",
        title: "In-site style guide slideshow",
        intro:
          "Every page of the guide is available in-site for a readable review of the artifact.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/warzone-cold-war-design-guide/pages",
          40,
          "Style guide page",
          "Page from the Warzone / Cold War design guide."
        ),
      },
      {
        eyebrow: "Supporting stills",
        title: "Visual tone and brand targets",
        intro:
          "Supporting stills help connect the guide to outcome-facing visuals.",
        items: [
          {
            type: "image",
            label: "Still 01",
            shortLabel: "01",
            title: "Style guide cover still",
            src: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
            caption:
              "A direct still from the guide that works well as a quick visual summary of the artifact.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Still 02",
            shortLabel: "02",
            title: "Warzone promotional target",
            src: "/assets/projects/call-of-duty/images/AGB_WZ_0309_TOUT.jpg",
            caption:
              "Supporting marketing-style visual that helps frame the tone and premium-product balancing discussed in the guide.",
          },
        ],
      },
    ],
    links: [
      {
        label: "Original style guide PDF",
        href: "/assets/projects/call-of-duty/warzone-cold-war-design-guide/pdf/WZ_Chapter2_StyleGuide_v2.pdf",
      },
      {
        label: "Legacy Call of Duty overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/play-again-with-team",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    featuredTier: "flagship",
    accent: "#a2d0ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_UX__AAR_and_PlayAgainWithTeam.png",
    eyebrow: "Play Again With Team",
    title: "Play Again With Team",
    tagline:
      "A social UX case study about post-match decisions, team continuity, and progression context.",
    summary:
      "This deck focuses on the moment after a match when players review rewards, decide whether to stay together, and move into the next session.",
    role: "UI/UX Technical Designer",
    projectType: "Post-match and social UX flow",
    timeframe: "Warzone",
    previewNote:
      "Concise 7-page deck framed around social continuity, post-match clarity, and player decision flow.",
    focusTags: [
      "Social UX",
      "Post-match decisions",
      "Progression framing",
    ],
    context:
      "The artifact shows how post-match UX can support both progression communication and socially meaningful choices without clutter.",
    challenge: [
      "Make the post-match handoff between rewards, decisions, and team continuity easy to understand.",
      "Support a socially meaningful choice without cluttering the AAR with too many competing messages.",
    ],
    approach: [
      "Centered the case study on decision flow, social continuity, and readability rather than treating the PDF like a generic attachment.",
      "Let the slideshow stay concise and easy to step through, which matches the artifact itself.",
      "Used one strong supporting still so the work lands quickly before the user starts paging through the deck.",
    ],
    outcome: [
      "Adds a clear social UX case study to the Call of Duty cluster.",
      "Shows thinking around team continuity and post-match framing without overclaiming outcomes.",
    ],
    deliverables: [
      "7-page Play Again deck",
      "Supporting still image",
      "Post-match decision framing",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary deck",
        title: "Play Again With Team slideshow",
        intro:
          "The smaller deck keeps the story compact and easy to move through.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/play-again-with-team/pages",
          7,
          "Play Again page",
          "Page from the Play Again With Team deck."
        ),
      },
      {
        eyebrow: "Supporting still",
        title: "Social and AAR framing",
        intro:
          "A supporting still helps the work land before the user opens the deck itself.",
        items: [
          {
            type: "image",
            label: "Still",
            shortLabel: "01",
            title: "AAR and Play Again still",
            src: "/assets/projects/call-of-duty/images/WZ_UX__AAR_and_PlayAgainWithTeam.png",
            caption:
              "Supporting still that reinforces how the social decision sits beside AAR and reward framing.",
            fit: "contain",
          },
        ],
      },
    ],
    links: [
      {
        label: "Original Play Again PDF",
        href: "/assets/projects/call-of-duty/play-again-with-team/pdf/WZ_UX__AAR_and_PlayAgainWithTeam_v01.pdf",
      },
      {
        label: "Legacy Call of Duty overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-stealth-system",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    featuredTier: "flagship",
    accent: "#88d4c4",
    cardImage: "/assets/projects/call-of-duty/stealth-system/flows/Stealth_Meter-01.png",
    eyebrow: "Black Ops 6 Stealth System",
    title: "BO6 Stealth System",
    tagline:
      "A communication-design case study about awareness states, iconography, and combat readability.",
    summary:
      "This exploration focuses on a clear gameplay question: how to communicate enemy awareness and escalation states quickly enough to support stealth play under pressure.",
    role: "UI/UX Technical Designer",
    projectType: "Awareness-state communication system",
    timeframe: "Black Ops 6",
    previewNote:
      "Visual artifact centered on awareness states, escalation clarity, and icon direction.",
    focusTags: [
      "State readability",
      "Icon exploration",
      "Combat communication",
    ],
    context:
      "Even as a compact artifact, it shows systems thinking through state communication, icon exploration, and player-readable combat feedback.",
    challenge: [
      "Communicate awareness escalation clearly enough for players to understand stealth status at a glance.",
      "Explore iconography and state treatment that can survive combat pressure without adding noise.",
    ],
    approach: [
      "Centered the case study on enemy awareness states and the communication problem they create for players.",
      "Kept the supporting copy concise so the artifact stays central.",
      "Positioned the exploration as a focused proof point within the broader Call of Duty work.",
    ],
    outcome: [
      "Adds a communication-design-focused case study to the Call of Duty cluster.",
      "Shows how a tightly scoped UI problem can still reveal strong systems and communication design.",
    ],
    deliverables: [
      "Stealth meter exploration",
      "State-readability framing",
      "Icon direction support",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary artifact",
        title: "Stealth awareness exploration",
        intro:
          "The artifact does the heavy lifting here, making state progression and alert behavior easy to review.",
        items: [
          {
            type: "image",
            label: "Artifact",
            shortLabel: "01",
            title: "Stealth meter exploration",
            src: "/assets/projects/call-of-duty/stealth-system/flows/Stealth_Meter-01.png",
            caption:
              "Exploration board focused on awareness states, escalation clarity, and player-readable status communication.",
            fit: "contain",
          },
        ],
      },
    ],
    links: [
      {
        label: "Legacy Call of Duty overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
];

export const callOfDutyHub = {
  slug: "call-of-duty",
  pageType: "call-of-duty-hub",
  accent: "#8fb7ff",
  cardImage: "/assets/projects/call-of-duty/images/header.jpg",
  eyebrow: "Flagship AAA cluster",
  title: "Call of Duty",
  tagline:
    "Five case studies spanning feature flows, systems work, social UX, and combat communication across shipped releases.",
  summary:
    "Dela shipped UI and UX work across Black Ops 6, Vanguard, MW2, MW3, and Warzone. This hub brings the strongest artifacts together in one recruiter-friendly view.",
  role: "UI/UX Technical Designer",
  projectType: "AAA franchise UI/UX",
  timeframe: "Black Ops 6, Vanguard, MW2, MW3, and Warzone",
  previewNote:
    "Hub for MW3 Exfil, the BO6 Keypad Mini Game, the Warzone / Cold War Design Guide, Play Again With Team, and the BO6 Stealth System.",
  focusTags: [
    "5 shipped releases",
    "Flagship AAA cluster",
    "Feature, systems, and documentation work",
  ],
  context:
    "The page gives the franchise work a concise overview, then routes directly into the strongest artifact-led case studies.",
  challenge: [
    "Present a broad body of franchise work without collapsing everything into one giant catch-all page.",
    "Make the strongest case studies easier to scan, compare, and revisit individually.",
  ],
  approach: [
    "Organized the strongest artifacts into five dedicated case studies with tailored media treatment.",
    "Kept the hub concise so it frames the body of work without repeating the full case-study material.",
    "Moved PDF decks from dead attachments to in-site slideshows rendered page by page.",
  ],
  outcome: [
    "Makes a broad body of franchise work easier to scan.",
    "Surfaces feature design, systems thinking, documentation, and communication design across shipped releases.",
  ],
  deliverables: [
    "Call of Duty hub page",
    "Five sub-case-study pages",
    "In-site PDF slideshows",
  ],
  links: [
    {
      label: "Legacy Call of Duty overview",
      href: "https://www.drive-fast-take-chances.com/callofduty",
    },
  ],
};
