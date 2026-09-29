const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/storm-commander/${name}.webp`, alt, caption,
  width: portrait ? 390 : 1440, height: portrait ? 844 : 1000, portrait,
});

export const stormCommander = {
  slug: "storm-commander",
  meta: "Independent Game Prototype · Tactical Space Encounters",
  title: "Storm Commander",
  tagline: "A Pirate Fleet. A Small Board. A Different Mission Every Time.",
  summary: "A playable space-tactics prototype built around short, randomized missions. Command the orange Pirate fleet against Imperial, Robocorp, or Rebel ships, read the board, and choose the move that gets your crew through the encounter.",
  href: "https://practitioner.digital/storm_commander/",
  cta: "Play Storm Commander",
  tags: ["Game Design", "Interaction Design", "React", "Tactical Systems", "Responsive Web"],
  hero: [
    image("battle", "Pirate and Imperial fleets on a seven-by-seven space board, flanked by commander portraits and mission progress", "Desktop Web · Pirate vs. Imperial"),
    image("mobile", "Storm Commander portrait mobile layout with a tactical board, compact comms, and touch controls", "Mobile Web · Pirate vs. Robocorp", true),
  ],
  context: {
    title: "From Chess Experiment to Mission-Driven Space Tactics.",
    body: [
      "I’m using a lightweight React prototype to develop the rules, interface, pacing, and visual identity together. The current game has its own encounter model: randomized fleets on 5×5, 6×6, or 7×7 boards, four objective types, and a capture-seeking opponent.",
      "The September update brings faction title art, commander introductions, radio chirps, combat audio, and clearer turn cues into one playable loop. The screenshots here were captured from the live browser build. A campaign that carries progress between battles is still a future idea. For now, you play one standalone mission after another.",
    ],
  },
  sections: [
    {
      label: "Identity", title: "Meet the World Before the First Move.",
      body: ["The title screen cycles through four faction illustrations. You get a feel for the crews, their colors, and the space-adventure mood before the first battle.", "Press to Play drops you into a random mission. That’s the focus now; the earlier chess drills and character roster are no longer in the menu."],
      image: image("title", "Storm Commander Rebel faction title illustration with two characters and a Press to Play prompt", "Faction Title Screens · Rebel Illustration"),
    },
    {
      label: "Briefing", title: "Give the Mission a Voice and a Face.",
      body: ["A Pirate commander introduces the objective through a short written radio transmission. Portraits, faction color, and synthesized radio chirps make the briefing feel like part of the world.", "The board waits until the exchange is over. Let each transmission finish or tap to move on. A short input lock at the start keeps the Play tap from accidentally skipping the briefing."],
      image: image("radio-pirate", "Pirate commander radio transmission introducing the mission before play begins", "Opening Radio · Pirate Command"),
    },
    {
      label: "Opposition", title: "Make the Other Fleet Feel Present.",
      body: ["The opposing commander answers with a hostile transmission from the other side of the screen. You meet the commander you’re up against before the ships start moving.", "Commander portraits and ship-class panels carry that faction identity into the battle interface. Captures pair laser and destruction effects with attack and explosion animations; a Sound control lets the player mute the effects."],
      image: image("radio-enemy", "Opposing commander portrait and hostile radio transmission over the encounter board", "Opening Radio · Hostile Channel"),
    },
    {
      label: "Decisions", title: "Make the Next Move Readable.",
      body: ["Selecting a Pirate ship highlights its position and available moves while the comms panel shows its class and movement pattern. Different ship shapes and faction colors help you tell the fleets apart at a glance.", "Turn notices distinguish Your move commander! from Enemy is moving! On touch layouts the notice appears over the board, dismisses when the player touches the game area, and returns on the next turn."],
      image: image("selection", "Selected Pirate pawn with highlighted destinations and its movement diagram beside the board", "Ship Selection · Movement Hints and Turn Feedback"),
    },
    {
      label: "Objectives", title: "Change the Goal, Change the Decision.",
      body: ["Four mission types ask the player to destroy a marked target, survive a number of turns, reach an extraction square, or capture enough enemy ship value. The Mission control reopens the objective and progress at any time.", "Victory and defeat lead into another randomized encounter through Next Mission. Small boards and clear goals let me try different tactical situations before building a whole campaign around them."],
      image: image("mission", "Mission briefing showing a six-turn survival objective, Pirate and Imperial factions, and progress", "Mission Briefing · Survive Until the Jump Drive Charges"),
    },
  ],
  closeTitle: "Take Command of the Next Encounter.",
  closeIntro: "Try the browser prototype, meet the commanders, and see how the missions and controls feel in play.",
};
