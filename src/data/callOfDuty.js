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
    accent: "#8fb7ff",
    cardImage: "/assets/projects/call-of-duty/images/Exfil_Success_After_Action_Report.png",
    eyebrow: "Modern Warfare III Exfil",
    title: "MW3 Exfil",
    tagline:
      "Reward, inventory, and extraction UX for Modern Warfare Zombies.",
    summary:
      "A post-exfil After Action Report flow for Modern Warfare Zombies, balancing reward drama with readable inventory, XP, loot, and progression breakdowns.",
    role: "UI/UX Technical Designer",
    projectType: "After Action Report Flow",
    timeframe: "Modern Warfare III",
    focusTags: [
      "AAR Flow Design",
      "Reward Reveal",
      "Animation and Sequencing Logic",
    ],
    context:
      "Set inside Modern Warfare Zombies' extraction loop, the work tackles a familiar tension: making Exfil feel high-stakes and satisfying without losing clarity across dense post-run states.",
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
      "49-Page Exfil Deck",
      "Big-Picture Flow Map",
      "Individual User Flow",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "Exfil After Action Report Slideshow",
        intro:
          "The full deck is rendered page by page for a readable walkthrough of the flow.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/exfil/pages",
          49,
          "Exfil Deck Page",
          "Page from the Exfil After Action Report deck."
        ),
      },
      {
        eyebrow: "Supporting Flows",
        title: "Flow and Sequencing Support",
        intro:
          "Supporting diagrams clarify the logic from big-picture reward sequencing down to the individual user journey.",
        items: [
          {
            type: "image",
            label: "Flow Map 01",
            shortLabel: "01",
            title: "Jupiter Big-Picture Flow",
            src: "/assets/projects/call-of-duty/exfil/flows/Jupiter-AAR-BIG-PICTURE-FLOW.png",
            caption:
              "High-level sequencing map for how the Exfil AAR moves across major beats and reward framing.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Flow Map 02",
            shortLabel: "02",
            title: "Cerberus Individual User Flow",
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
        label: "Legacy Call of Duty Overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-keypad-mini-game",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    accent: "#f2b76a",
    cardImage: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
    eyebrow: "Black Ops 6 Keypad Mini Game",
    title: "BO6 Keypad Mini Game",
    tagline:
      "A compact BO6 interaction shaped around readability, feedback, and pressure.",
    summary:
      "A tight Black Ops 6 interaction loop focused on readable state changes, success feedback, and fast comprehension under pressure.",
    role: "UI/UX Technical Designer",
    projectType: "Mini-Game Interaction Design",
    timeframe: "Black Ops 6",
    focusTags: [
      "Mini-Game UX",
      "Feedback and Progression",
      "Interaction Clarity",
    ],
    context:
      "The artifact set shows how even a short, high-tension Black Ops 6 interaction benefits from clear feedback, visible state, and disciplined pacing.",
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
      "Gameplay Video",
      "Keypad Flow Diagram",
      "Interaction Notes",
    ],
    mediaBlocks: [
      {
        eyebrow: "Video Artifact",
        title: "Keypad Interaction in Motion",
        intro:
          "Motion leads because timing and feedback are central to the case study.",
        items: [
          {
            type: "video",
            label: "Video",
            shortLabel: "V1",
            title: "BO6 Keypad Mini Game Clip",
            src: "/assets/projects/call-of-duty/keypad-mini-game/video/BlackOps6-Keypads.mp4",
            poster: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
            caption:
              "Local video capture showing interaction rhythm, puzzle pacing, and feedback states in sequence.",
          },
          {
            type: "image",
            label: "Flow Support",
            shortLabel: "F1",
            title: "Keypad Flow Chart",
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
        label: "Legacy Call of Duty Overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/warzone-cold-war-design-guide",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    accent: "#9fc2ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
    eyebrow: "Warzone / Cold War Design Guide",
    title: "Warzone / Cold War Design Guide",
    tagline:
      "A franchise visual-systems guide for shared content, brand balance, and UI targets.",
    summary:
      "A Warzone / Black Ops Cold War guide that frames typography, color, item branding, and UI tone for a shared ecosystem without flattening each product's identity.",
    role: "UI/UX Technical Designer",
    projectType: "Style Guide and Visual System Design",
    timeframe: "Warzone / Cold War",
    focusTags: [
      "Visual Systems",
      "Typography and Color",
      "Brand Balancing",
    ],
    context:
      "As Warzone and Black Ops Cold War moved toward deeper integration, the visual system needed clearer rules for consistency, readability, and premium presentation.",
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
      "40-Page Style Guide",
      "Brand and Item Direction",
      "Typography and Color Targets",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "In-Site Style Guide Slideshow",
        intro:
          "Every page of the guide is available in-site for a readable review of the artifact.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/warzone-cold-war-design-guide/pages",
          40,
          "Style Guide Page",
          "Page from the Warzone / Cold War design guide."
        ),
      },
      {
        eyebrow: "Supporting Stills",
        title: "Visual Tone and Brand Targets",
        intro:
          "Supporting stills help connect the guide to outcome-facing visuals.",
        items: [
          {
            type: "image",
            label: "Still 01",
            shortLabel: "01",
            title: "Style Guide Cover Still",
            src: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
            caption:
              "A direct still from the guide that works well as a quick visual summary of the artifact.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Still 02",
            shortLabel: "02",
            title: "Warzone Promotional Target",
            src: "/assets/projects/call-of-duty/images/AGB_WZ_0309_TOUT.jpg",
            caption:
              "Supporting marketing-style visual that helps frame the tone and premium-product balancing discussed in the guide.",
          },
        ],
      },
    ],
    links: [
      {
        label: "Original Style Guide PDF",
        href: "/assets/projects/call-of-duty/warzone-cold-war-design-guide/pdf/WZ_Chapter2_StyleGuide_v2.pdf",
      },
      {
        label: "Legacy Call of Duty Overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/play-again-with-team",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    accent: "#a2d0ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_UX__AAR_and_PlayAgainWithTeam.png",
    eyebrow: "Play Again With Team",
    title: "Play Again With Team",
    tagline:
      "A post-match Warzone flow built around squad continuity and next-match choice.",
    summary:
      "A Warzone post-match flow focused on the moment players review results, decide whether to stay together, and move into the next session.",
    role: "UI/UX Technical Designer",
    projectType: "Post-Match and Social UX Flow",
    timeframe: "Warzone",
    focusTags: [
      "Social UX",
      "Post-Match Decisions",
      "Progression Framing",
    ],
    context:
      "The artifact centers on a small but important social decision: preserving squad momentum without overloading the post-match screen.",
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
      "7-Page Play Again Deck",
      "Supporting Still Image",
      "Post-Match Decision Framing",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "Play Again With Team Slideshow",
        intro:
          "The smaller deck keeps the story compact and easy to move through.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/play-again-with-team/pages",
          7,
          "Play Again Page",
          "Page from the Play Again With Team deck."
        ),
      },
      {
        eyebrow: "Supporting Still",
        title: "Social and AAR Framing",
        intro:
          "A supporting still helps the work land before the user opens the deck itself.",
        items: [
          {
            type: "image",
            label: "Still",
            shortLabel: "01",
            title: "AAR and Play Again Still",
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
        label: "Legacy Call of Duty Overview",
        href: "https://www.drive-fast-take-chances.com/callofduty",
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-stealth-system",
    parentSlug: "call-of-duty",
    pageType: "call-of-duty-case-study",
    accent: "#88d4c4",
    cardImage: "/assets/projects/call-of-duty/stealth-system/flows/Stealth_Meter-01.png",
    eyebrow: "Black Ops 6 Stealth System",
    title: "BO6 Stealth System",
    tagline:
      "A BO6 awareness system for stealth states, escalation, and combat readability.",
    summary:
      "A focused exploration of how enemy awareness and escalation states can stay readable enough to support stealth play under pressure.",
    role: "UI/UX Technical Designer",
    projectType: "Awareness-State Communication System",
    timeframe: "Black Ops 6",
    focusTags: [
      "State Readability",
      "Icon Exploration",
      "Combat Communication",
    ],
    context:
      "Framed against Black Ops 6's spy-thriller campaign language, the artifact explores how stealth information can stay legible without flattening tension.",
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
      "Stealth Meter Exploration",
      "State-Readability Framing",
      "Icon Direction Support",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Artifact",
        title: "Stealth Awareness Exploration",
        intro:
          "The artifact does the heavy lifting here, making state progression and alert behavior easy to review.",
        items: [
          {
            type: "image",
            label: "Artifact",
            shortLabel: "01",
            title: "Stealth Meter Exploration",
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
        label: "Legacy Call of Duty Overview",
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
  eyebrow: "AAA Franchise UI/UX",
  title: "Call of Duty",
  tagline:
    "Five shipped case studies across extraction UX, interaction feedback, visual systems, social flow, and combat communication.",
  summary:
    "Across Black Ops 6, Vanguard, MW2, MW3, and Warzone, Dela shipped UI/UX work spanning feature design, visual systems, documentation, and implementation support for franchise-scale teams.",
  role: "UI/UX Technical Designer",
  projectType: "AAA Franchise UI/UX",
  timeframe: "Black Ops 6, Vanguard, MW2, MW3, and Warzone",
  focusTags: [
    "5 Shipped Releases",
    "Franchise UI/UX",
    "Feature Flows, Systems, and Documentation",
  ],
  context:
    "The hub frames the Call of Duty work at product level, then routes directly into the strongest artifact-led case studies.",
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
    "Call of Duty Hub Page",
    "Five Sub-Case-Study Pages",
    "In-Site PDF Slideshows",
  ],
  links: [
    {
      label: "Legacy Call of Duty Overview",
      href: "https://www.drive-fast-take-chances.com/callofduty",
    },
  ],
};
