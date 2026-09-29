const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/storm-commander/2026-09-28/${name}.webp`, alt, caption,
  width: portrait ? 1206 : 1440, height: portrait ? 2622 : 1000, portrait,
});

export const stormCommander = {
  slug: "storm-commander",
  meta: "Independent Game Prototype · Tactical Space Encounters",
  title: "Storm Commander",
  tagline: "A Pirate Fleet. A Small Board. A Different Mission Every Time.",
  summary: "A playable space-tactics prototype built around short, randomized missions. Command the orange Pirate fleet against Imperial, Robocorp, or Rebel ships, read the board, and choose the move that gets your crew through the encounter.",
  href: "https://practitioner.digital/storm_commander/",
  cta: "Play Storm Commander",
  tags: ["Game Design", "Interaction Design", "React", "Tactical Systems", "Responsive Web", "iOS / Capacitor"],
  hero: [
    image("desktop-battle", "Pirate and Imperial fleets on a six-by-six board with commander panels, starfield, and an extraction objective", "Desktop Web · Pirate vs. Imperial"),
    image("ios-battle", "Native iPhone battle showing Pirate and Imperial ships, a turn notice, compact comms, and survival objective", "iOS Simulator · Pirate vs. Imperial", true),
  ],
  context: {
    title: "From Chess Experiment to Mission-Driven Space Tactics.",
    body: [
      "I’m using a lightweight React prototype to develop the rules, interface, pacing, and visual identity together. The current game has its own encounter model: randomized fleets on 5×5, 6×6, or 7×7 boards, four objective types, and a capture-seeking opponent.",
      "The September update brings portrait and landscape faction art, commander introductions, radio chirps, combat audio, and clearer turn cues into one playable loop. An organic starfield and receding space debris add motion behind the board. These screenshots pair the live desktop build with the native iPhone app running in the iOS simulator. A campaign that carries progress between battles is still a future idea. For now, you play one standalone mission after another.",
    ],
  },
  sections: [
    {
      label: "Identity", title: "Meet the World Before the First Move.",
      body: ["The title screen starts with the orange Pirate crew and cycles through four faction illustrations. Dedicated portrait compositions keep both commanders and the title readable on iPhone; desktop uses the wide artwork.", "Press to Play drops you into a random mission. That’s the focus now; the earlier chess drills and character roster are no longer in the menu."],
      images: [
        image("desktop-title", "Orange Pirate faction title screen with both commanders and a small Press to Play prompt", "Desktop Web · Pirate Title Screen"),
        image("ios-title", "Blue Robocorp portrait title screen in the native iPhone app with both commanders visible", "iOS Simulator · Robocorp Portrait Title", true),
      ],
    },
    {
      label: "Briefing", title: "Give the Mission a Voice and a Face.",
      body: ["A Pirate commander introduces the objective through a short written radio transmission. Portraits, faction color, and synthesized radio chirps make the briefing feel like part of the world.", "The board waits until the exchange is over. Let each transmission finish or tap to move on. A short input lock at the start keeps the Play tap from accidentally skipping the briefing."],
      images: [
        image("desktop-radio-pirate", "Captain Lilith Haraway introduces an extraction mission in the right-side Pirate radio panel", "Desktop Web · Pirate Briefing"),
        image("ios-radio-pirate", "Prank Sumatra delivers a survival mission briefing in the native iPhone radio layout", "iOS Simulator · Pirate Briefing", true),
      ],
    },
    {
      label: "Opposition", title: "Make the Other Fleet Feel Present.",
      body: ["The opposing commander answers with a hostile transmission from the other side of the screen. You meet the commander you’re up against before the ships start moving.", "Commander portraits and ship-class panels carry that faction identity into the battle interface. Captures pair laser and destruction effects with attack and explosion animations; a Sound control lets the player mute the effects."],
      images: [
        image("desktop-radio-enemy", "Imperial commander sends a hostile transmission from the left side of the desktop screen", "Desktop Web · Hostile Channel"),
        image("ios-radio-enemy", "Admiral/Bishop John Trace delivers an Imperial taunt in the native iPhone radio panel", "iOS Simulator · Hostile Channel", true),
      ],
    },
    {
      label: "Decisions", title: "Make the Next Move Readable.",
      body: ["Selecting a Pirate ship highlights its position and available moves while the comms panel shows its class and movement pattern. Different ship shapes and faction colors help you tell the fleets apart at a glance.", "Turn notices distinguish Your move commander! from Enemy is moving! On touch layouts the notice appears over the board, dismisses when the player touches the game area, and returns on the next turn."],
      images: [
        image("desktop-selection", "Selected Pirate rook with orange movement hints, a movement diagram, and player turn feedback", "Desktop Web · Rook Movement Hints"),
        image("ios-selection", "Selected Pirate queen with legal destinations and a capture hint on the iPhone board", "iOS Simulator · Queen Movement Hints", true),
      ],
    },
    {
      label: "Objectives", title: "Change the Goal, Change the Decision.",
      body: ["Four mission types ask the player to destroy a marked target, survive a number of turns, reach an extraction square, or capture enough enemy ship value. The Mission control reopens the objective and progress at any time.", "Victory and defeat lead into another randomized encounter through Next Mission. Small boards and clear goals let me try different tactical situations before building a whole campaign around them."],
      images: [
        image("desktop-mission", "Desktop mission panel showing an extraction objective, faction pairing, and Battle control", "Desktop Web · Reach the Extraction Square"),
        image("ios-mission", "iPhone mission panel identifies the Robocorp queen as the destruction target", "iOS Simulator · Destroy the Marked Target", true),
      ],
    },
  ],
  closeTitle: "Take Command of the Next Encounter.",
  closeIntro: "Try the browser prototype, meet the commanders, and see how the missions and controls feel in play.",
};
