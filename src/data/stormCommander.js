const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/storm-commander/2026-09-28/${name}.webp`, alt, caption,
  width: portrait ? 1206 : 1440, height: portrait ? 2622 : 1000, portrait,
});

export const stormCommander = {
  slug: "storm-commander",
  iphoneFrames: true,
  meta: "Independent Game Prototype · Turn-Based Space Battles",
  title: "Storm Commander",
  tagline: "Small Fleet. Big Trouble.",
  summary: "You’ve got a few ships and an enemy fleet in the way. Lead the orange Pirate crew in quick, turn-based battles against Imperial, Robocorp, and Rebel forces. Pick your moves, finish the mission, and try to bring a few ships home.",
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
      "This started as a chess experiment. Now it’s a space game with Pirate crews, enemy commanders, and ships that blow up. Each battle gives you a random fleet on a 5×5, 6×6, or 7×7 board. There are four mission types, so wiping out the other team isn’t always the job.",
      "I wanted something you could think through but still have fun with: cheesy commander banter, radio static, lasers, and chunks of wrecked ships floating off into space. Each mission is a short, separate battle. These screenshots show the desktop game and the iPhone app running in the iOS simulator.",
    ],
  },
  sections: [
    {
      label: "Identity", title: "A Crew Worth Getting Into Trouble With.",
      body: ["You play as the orange Pirate crew, but all four factions show up on the title screen. Each has its own colors and pair of commanders. The phone version uses taller artwork so everyone fits without getting cropped out."],
      images: [
        image("desktop-title", "Orange Pirate faction title screen with both commanders and a small Press to Play prompt", "Desktop Web · Pirate Title Screen"),
        image("ios-title", "Blue Robocorp portrait title screen in the native iPhone app with both commanders visible", "Mobile · Robocorp Portrait Title", true),
      ],
    },
    {
      label: "Briefing", title: "Your Commander Has a Plan. Probably.",
      body: ["Your commander starts each battle with the job: get a ship out, survive, or blow something up. The radio chatter has a little 80s action-movie cheese. That’s on purpose.", "The game waits until the briefing is done. Read it or tap through. A short pause after you hit Play keeps you from accidentally skipping the first line."],
      images: [
        image("desktop-radio-pirate", "Captain Lilith Haraway introduces an extraction mission in the right-side Pirate radio panel", "Desktop Web · Pirate Briefing"),
        image("ios-radio-pirate", "Prank Sumatra delivers a survival mission briefing in the native iPhone radio layout", "Mobile · Pirate Briefing", true),
      ],
    },
    {
      label: "Opposition", title: "The Enemy Has Your Frequency.",
      body: ["Then the enemy commander cuts in to talk trash. Now you know who you’re fighting, and they’ve given you a reason to shoot back.", "Both commanders stay on screen during the fight. Take a ship and you get lasers, an explosion, and a few pieces flying off into space. Blowing stuff up should feel good."],
      images: [
        image("desktop-radio-enemy", "Imperial commander sends a hostile transmission from the left side of the desktop screen", "Desktop Web · Hostile Channel"),
        image("ios-radio-enemy", "Admiral/Bishop John Trace delivers an Imperial taunt in the native iPhone radio panel", "Mobile · Hostile Channel", true),
      ],
    },
    {
      label: "Decisions", title: "Pick Your Ship. Find Your Opening.",
      body: ["Tap one of your ships to see where it can move and which enemies it can take. The info panel shows the ship type and how it moves. Then it’s up to you: take the shot or stay out of trouble.", "“Your move commander!” and “Enemy is moving!” let you know whose turn it is. On iPhone, the message flashes over the board and clears when you touch the game area."],
      images: [
        image("desktop-selection", "Selected Pirate rook with orange movement hints, a movement diagram, and player turn feedback", "Desktop Web · Rook Movement Hints"),
        image("ios-selection", "Selected Pirate queen with legal destinations and a capture hint on the iPhone board", "Mobile · Queen Movement Hints", true),
      ],
    },
    {
      label: "Objectives", title: "Sometimes the Smart Move Is to Run.",
      body: ["You might need to destroy one marked ship, survive a few turns, reach an exit, or take enough points’ worth of enemy ships. Check the mission before you go charging in. Sometimes getting out alive is the whole point.", "Tap Mission to check the goal and your progress. When the battle ends, hit Next Mission for a new board and another shot at it."],
      images: [
        image("desktop-mission", "Desktop mission panel showing an extraction objective, faction pairing, and Battle control", "Desktop Web · Reach the Extraction Square"),
        image("ios-mission", "iPhone mission panel identifies the Robocorp queen as the destruction target", "Mobile · Destroy the Marked Target", true),
      ],
    },
    {
      label: "Difficulty", title: "Pick Your Kind of Trouble.",
      body: ["Standard keeps the difficulty steady. Commander Styles changes it by enemy: Rebels go easier on you, Robocorp puts up more of a fight, and Imperials are the toughest. They also play to the mission, protecting targets or chasing you down when you’re trying to escape.", "Adaptive uses those same enemy styles, then gets a little harder when you win and backs off more when you lose. There’s a limit to how hard it gets. Your setting is saved, and any change starts with the next battle."],
      images: [
        image("desktop-difficulty", "Desktop difficulty panel showing Standard, Commander Styles, and Adaptive, with Commander Styles selected", "Desktop Web · Commander Styles"),
        image("ios-difficulty", "Native iPhone difficulty panel with Adaptive selected and an explanation of gradual difficulty changes", "Mobile · Adaptive Difficulty", true),
      ],
    },
  ],
  closeTitle: "Your Fleet Is Waiting, Commander.",
  closeIntro: "Pick a ship, make a move, and see how long your plan holds up. Play the prototype right in your browser.",
};
