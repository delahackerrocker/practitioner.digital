const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/storm-commander/2026-09-28/${name}.webp`, alt, caption,
  width: portrait ? 1206 : 1440, height: portrait ? 2622 : 1000, portrait,
});

export const stormCommander = {
  slug: "storm-commander",
  iphoneFrames: true,
  meta: "Independent Game Prototype · Tactical Space Encounters",
  title: "Storm Commander",
  tagline: "Small Fleet. Big Trouble.",
  summary: "A hostile fleet, a handful of ships, and a plan that might just work. Storm Commander puts you in charge of the orange Pirate crew for bite-sized tactical encounters against Imperial, Robocorp, and Rebel forces. Read the board, pick your moment, and give the other commander something to complain about.",
  href: "https://practitioner.digital/storm_commander/",
  cta: "Play Storm Commander",
  tags: ["Game Design", "Interaction Design", "React", "Tactical Systems", "Responsive Web", "iOS / Capacitor"],
  hero: [
    image("desktop-battle", "Pirate and Imperial fleets on a six-by-six board with commander panels, starfield, and an extraction objective", "Desktop Web · Pirate vs. Imperial"),
    image("ios-battle", "Native iPhone battle showing Pirate and Imperial ships, a turn notice, compact comms, and survival objective", "Mobile · Pirate vs. Imperial", true),
  ],
  context: {
    title: "Chess Went to Space. The Pirates Took Over.",
    body: [
      "What began as a chess experiment has grown into a scrappy little space-tactics game with a taste for trouble. Randomized fleets face off on 5×5, 6×6, or 7×7 boards, where a few squares can separate a clean getaway from a very bad day. Four mission types keep the orders changing, and the opposing fleet is always looking for a capture.",
      "I’m building the prototype around that mix of deliberate moves and Saturday-matinee swagger: larger-than-life commanders, crackling radio cues, arcade-style laser volleys, and wreckage tumbling into the starfield. Each mission is a standalone skirmish, ready for another roll of the dice when it ends. The screenshots below show the current desktop game alongside the native iPhone build in the iOS simulator.",
    ],
  },
  sections: [
    {
      label: "Identity", title: "A Crew Worth Getting Into Trouble With.",
      body: ["The orange Pirate crew gets top billing, but the title screen gives all four factions their moment in the spotlight. Bold colors, paired commanders, and a little pulp sci-fi bravado set the tone before a single ship moves. The artwork gets its own portrait composition on iPhone, so the crews still make a proper entrance on a smaller screen."],
      images: [
        image("desktop-title", "Orange Pirate faction title screen with both commanders and a small Press to Play prompt", "Desktop Web · Pirate Title Screen"),
        image("ios-title", "Blue Robocorp portrait title screen in the native iPhone app with both commanders visible", "Mobile · Robocorp Portrait Title", true),
      ],
    },
    {
      label: "Briefing", title: "Your Commander Has a Plan. Probably.",
      body: ["Before the shooting starts, your commander comes over the radio with the job: get a ship out, hold the line, or make something on the other side disappear. Written dialogue gives the orders an 80s action-movie streak, while a familiar face and a burst of radio static make it feel like your crew is checking in.", "The battle waits while the commanders have their say. Read every word or tap through once the connection is established; there’s a brief pause after Play to keep an eager thumb from skipping the opening line."],
      images: [
        image("desktop-radio-pirate", "Captain Lilith Haraway introduces an extraction mission in the right-side Pirate radio panel", "Desktop Web · Pirate Briefing"),
        image("ios-radio-pirate", "Prank Sumatra delivers a survival mission briefing in the native iPhone radio layout", "Mobile · Pirate Briefing", true),
      ],
    },
    {
      label: "Opposition", title: "The Enemy Has Your Frequency.",
      body: ["Your Pirate commander has barely finished the briefing when the other side cuts in from the left, full of threats and the sort of confidence that makes you want to prove someone wrong. Before the first move, both sides have a face—and a little attitude.", "Once the exchange is over, the portraits stay with their fleets. Captures bring short laser volleys, crunchy arcade-style explosions, and fragments that drift away with the stars. Even on a tiny board, a ship going down gets its moment."],
      images: [
        image("desktop-radio-enemy", "Imperial commander sends a hostile transmission from the left side of the desktop screen", "Desktop Web · Hostile Channel"),
        image("ios-radio-enemy", "Admiral/Bishop John Trace delivers an Imperial taunt in the native iPhone radio panel", "Mobile · Hostile Channel", true),
      ],
    },
    {
      label: "Decisions", title: "Pick Your Ship. Find Your Opening.",
      body: ["Tap a Pirate ship and the board shows you its options. Movement hints mark the open routes, capture markers pick out opportunities, and the comms panel gives you the ship’s class and movement pattern. The question becomes deliciously simple: which opening is worth taking?", "“Your move commander!” hands you the spotlight; “Enemy is moving!” tells you to watch the other fleet. On iPhone, the notice blinks over the board, then gets out of the way as soon as you touch the game area. The ships, their colors, and their silhouettes do the rest."],
      images: [
        image("desktop-selection", "Selected Pirate rook with orange movement hints, a movement diagram, and player turn feedback", "Desktop Web · Rook Movement Hints"),
        image("ios-selection", "Selected Pirate queen with legal destinations and a capture hint on the iPhone board", "Mobile · Queen Movement Hints", true),
      ],
    },
    {
      label: "Objectives", title: "Sometimes the Smart Move Is to Run.",
      body: ["Some missions call for a marked enemy ship to go up in smoke. Others ask you to hold out for a set number of turns, reach an extraction square, or capture enough enemy ship value. That change of orders can turn an inviting attack into a distraction: sometimes the ship you need most is the one that can get away.", "Need a reminder while the enemy is breathing down your neck? Mission brings the objective and progress back into view. Win or lose, Next Mission deals out another randomized encounter—a fresh board, a fresh problem, and another chance to get the crew through it."],
      images: [
        image("desktop-mission", "Desktop mission panel showing an extraction objective, faction pairing, and Battle control", "Desktop Web · Reach the Extraction Square"),
        image("ios-mission", "iPhone mission panel identifies the Robocorp queen as the destruction target", "Mobile · Destroy the Marked Target", true),
      ],
    },
  ],
  closeTitle: "Your Fleet Is Waiting, Commander.",
  closeIntro: "The radio is about to crackle, the enemy has an opinion, and those orange ships need orders. Jump into the browser prototype and see what your next mission throws at you.",
};
