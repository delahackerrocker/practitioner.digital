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
      "A cinematic AAR flow focused on reward reveal, inventory clarity, and post-extraction pacing.",
    summary:
      "This case study reframes the successful extraction After Action Report as a premium flow piece rather than a buried PDF attachment. The deck shows how reward reveal, gained-loot presentation, XP breakdown, and sequencing logic were shaped to feel dramatic while staying readable.",
    role: "UI/UX Technical Designer",
    projectType: "After Action Report flow",
    timeframe: "Modern Warfare 3",
    previewNote:
      "A 49-page deck plus supporting flow diagrams covering screen sequencing, inventory reveal, and progression communication.",
    focusTags: [
      "AAR flow design",
      "Reward reveal",
      "Animation and sequencing logic",
    ],
    context:
      "The Exfil deck is one of the strongest artifact-driven proof points in the entire Call of Duty set, so it now stands as its own dedicated case study under the franchise hub.",
    challenge: [
      "Make a successful extraction feel rewarding and readable across multiple information-dense screens.",
      "Balance cinematic reveal with practical clarity for inventory, XP, loot, and progression breakdowns.",
    ],
    approach: [
      "Used the AAR deck to stage the player journey from extraction success through inventory, rewards, and summary states.",
      "Supported the deck with flow diagrams that make timing, hierarchy, and sequencing logic easier to scan.",
      "Reframed the artifact as a polished in-site slideshow so the presentation feels like a case study, not a file download.",
    ],
    outcome: [
      "Promotes one of the best Call of Duty artifacts into a flagship portfolio page.",
      "Shows how reward flow, pacing, and screen logic can be communicated in a production-friendly design deck.",
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
          "The full deck is rendered page by page in-site so the work can be reviewed like a presentation rather than a raw PDF.",
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
          "These supporting diagrams help explain how the screen logic scales from the big-picture reward sequence down to the individual user journey.",
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
      "A highly visual interaction case study about legibility, state feedback, and puzzle readability.",
    summary:
      "The keypad mini game works best as an interaction-design case study: the pacing is short, the states are clear, and the artifact set naturally supports video plus flow explanation. This page puts the playable-feeling clip first, then backs it up with the flow chart that explains how the puzzle communicates progression and feedback.",
    role: "UI/UX Technical Designer",
    projectType: "Mini-game interaction design",
    timeframe: "Black Ops 6",
    previewNote:
      "Video-first presentation with flow support for state changes, feedback beats, and puzzle readability.",
    focusTags: [
      "Mini-game UX",
      "Feedback and progression",
      "Interaction clarity",
    ],
    context:
      "The uploaded keypad video and flow image are strong enough to carry their own focused page, especially because the interaction is easier to understand in motion than inside a generic project summary.",
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
      "Adds a distinctly interaction-driven case study to the top of the portfolio.",
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
          "The video leads here because motion, timing, and feedback beats are the core of the case study.",
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
      "A systems-thinking case study about brand balance, UI consistency, and visual targets.",
    summary:
      "The style guide is one of the strongest proof points for systems thinking in the portfolio. Instead of linking out to the PDF, this page turns the guide into a browsable in-site slideshow and frames it as a case study about visual leadership, consistency, and the balancing act between shared content and premium product identity.",
    role: "UI/UX Technical Designer",
    projectType: "Style guide and visual system design",
    timeframe: "Warzone / Cold War",
    previewNote:
      "40 pages of visual targets, typography, color, item branding, and consistency guidance presented as an editorial slideshow.",
    focusTags: [
      "Visual systems",
      "Typography and color",
      "Brand balancing",
    ],
    context:
      "This deck is especially valuable because it shows not just one feature, but the system-level thinking needed to align tone, branding, and UI consistency across a large content ecosystem.",
    challenge: [
      "Create visual guidance that balances shared-content needs with premium product identity.",
      "Document typography, color, branding, and consistency targets in a form teams can actually use.",
    ],
    approach: [
      "Let the document itself remain central while giving it a cleaner in-site presentation and stronger portfolio framing.",
      "Focused the authored story on visual leadership, consistency targets, and brand-system balancing rather than on generic design-process filler.",
      "Curated the surrounding stills so the deck remains the backbone of the page.",
    ],
    outcome: [
      "Elevates a strong systems artifact into one of the top franchise proof points in the portfolio.",
      "Shows leadership around tone, consistency, and visual decision-making at scale.",
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
          "Every page of the style guide is available directly in the site so the artifact reads like a portfolio presentation instead of a detached document.",
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
          "A few supporting stills keep the page grounded in outcome-facing visuals without overwhelming the guide itself.",
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
      "A crisp social and post-match UX case study about decision flow, team continuity, and reward framing.",
    summary:
      "Play Again With Team is a tight, readable artifact that turns post-match decision-making into a clearer social UX story. This page keeps the slideshow backbone, but frames the deck around team continuity, progression context, and the moment when players choose whether to stay together.",
    role: "UI/UX Technical Designer",
    projectType: "Post-match and social UX flow",
    timeframe: "Warzone",
    previewNote:
      "A concise 7-page deck supported by a strong still image and a tighter authored framing around social retention and post-match clarity.",
    focusTags: [
      "Social UX",
      "Post-match decisions",
      "Progression framing",
    ],
    context:
      "Because the deck is already concise, it works especially well as a self-contained page that can be scanned quickly by recruiters and hiring managers.",
    challenge: [
      "Make the post-match handoff between rewards, decisions, and team continuity easy to understand.",
      "Support a socially meaningful choice without cluttering the AAR with too many competing messages.",
    ],
    approach: [
      "Framed the page around decision flow, social continuity, and readability rather than treating the PDF like a generic attachment.",
      "Let the slideshow stay concise and easy to step through, which matches the artifact itself.",
      "Used one strong supporting still so the page still has a quick visual read before the user starts paging through the deck.",
    ],
    outcome: [
      "Adds a clear social UX case study to the flagship Call of Duty cluster.",
      "Shows thinking around retention, team continuity, and post-match framing without overclaiming outcomes.",
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
          "The smaller deck stays intentionally lightweight here so users can move through the full artifact quickly.",
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
          "A supporting still helps the page land quickly before the user opens the deck itself.",
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
      "A focused case study in awareness-state readability, icon exploration, and combat communication.",
    summary:
      "The stealth-system artifact is a strong visual proof point because it concentrates the problem into one core question: how clearly can enemy awareness and escalation states be communicated to the player? This page treats the exploration as a serious communication-design case study instead of a supporting image buried on a larger page.",
    role: "UI/UX Technical Designer",
    projectType: "Awareness-state communication system",
    timeframe: "Black Ops 6",
    previewNote:
      "A focused visual artifact centered on enemy awareness states, escalation clarity, and iconography direction.",
    focusTags: [
      "State readability",
      "Icon exploration",
      "Combat communication",
    ],
    context:
      "Even with a smaller artifact set, the stealth system deserves its own page because the exploration is specific, visually legible, and easy to discuss at a systems level.",
    challenge: [
      "Communicate awareness escalation clearly enough for players to understand stealth status at a glance.",
      "Explore iconography and state treatment that can survive combat pressure without adding noise.",
    ],
    approach: [
      "Framed the page around enemy awareness states and the communication problem they create for players.",
      "Kept the supporting copy concise so the artifact stays the hero of the page.",
      "Used the larger COD cluster to give this smaller but sharper proof point a proper editorial home.",
    ],
    outcome: [
      "Adds a communication-design-focused case study to the flagship Call of Duty cluster.",
      "Shows how a tightly scoped UI problem can still become a compelling portfolio page when the framing is clear.",
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
          "This visual does the heavy lifting: it makes state progression, alert behavior, and escalation readability easy to discuss.",
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
    "Five dedicated case studies spanning flows, systems, social UX, and combat communication across shipped releases.",
  summary:
    "Dela shipped UI and UX work across Black Ops 6, Vanguard, MW2, MW3, and Warzone. This hub reframes that body of work as a curated cluster of flagship case studies rather than one oversized page.",
  role: "UI/UX Technical Designer",
  projectType: "AAA franchise UI/UX",
  timeframe: "Black Ops 6, Vanguard, MW2, MW3, and Warzone",
  previewNote:
    "A hub page for MW3 Exfil, BO6 Keypad Mini Game, Warzone / Cold War Design Guide, Play Again With Team, and BO6 Stealth System.",
  focusTags: [
    "5 shipped releases",
    "Flagship AAA cluster",
    "Feature, systems, and documentation work",
  ],
  context:
    "The goal of the hub is to give the overall franchise work a quick, professional framing and then route visitors directly into the five strongest artifact-driven pages.",
  challenge: [
    "Present a broad body of franchise work without collapsing everything into one giant catch-all page.",
    "Make the strongest case studies easier to scan, compare, and revisit individually.",
  ],
  approach: [
    "Pulled the most compelling artifacts into five dedicated sub-case-study pages with their own media treatment.",
    "Kept the hub concise so it functions as editorial framing rather than as another oversized case study.",
    "Moved PDF decks from dead attachments to in-site slideshows rendered page by page.",
  ],
  outcome: [
    "Turns the Call of Duty section into the clearest flagship cluster in the portfolio.",
    "Improves hierarchy, recruiter scanning, and media presentation while keeping the overall site maintainable.",
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
