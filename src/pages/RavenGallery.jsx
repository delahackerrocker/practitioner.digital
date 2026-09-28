import { StudyImage } from "./VisualCaseStudy";

const images = [
  { name: "interface-consistency", title: "A Consistent Interface Across Screens", alt: "Warzone interface consistency study comparing navigation and panel patterns across multiple menus", caption: "Raven Team Reference · Chapter 2 Style Guide, Page 6" },
  { name: "item-branding", title: "Keep Shared Content Recognizable", alt: "Warzone item-branding examples for operators, weapons, and rewards across Call of Duty titles", caption: "Raven Team Reference · Chapter 2 Style Guide, Page 10" },
  { name: "weapon-mastery", title: "Connect Progress to the Next Goal", alt: "Weapon mastery wireframe showing weapon progress, class mastery, challenges, and unlock rewards", caption: "Weapon Mastery Deck, Page 8 · Deck Credits Jesse Hoy" },
  { name: "daily-challenges", title: "Choose and Track a Challenge", alt: "Daily challenges wireframe with selected challenge details, progress, reward, and replacement action", caption: "All Challenges Deck, Page 27 · Daily Challenges Section Credits Jesse Hoy" },
  { name: "infil-challenges", title: "Carry the Goal Into the Match", alt: "Warzone insertion HUD wireframe showing daily challenge progress beside the squad information", caption: "All Challenges Deck, Page 34 · Daily Challenges Section Credits Jesse Hoy" },
  { name: "challenge-complete", title: "Make Completion Readable in Play", alt: "In-game wireframe showing a completed daily challenge and reward notification", caption: "All Challenges Deck, Page 40 · Daily Challenges Section Credits Jesse Hoy" },
];

export default function RavenGallery() {
  return (
    <section aria-labelledby="raven-materials">
      <h2 id="raven-materials">Interface Flows and Visual Systems</h2>
      <p>Selected Raven team design references show shared visual patterns, progression, challenge selection, and feedback during a match. The weapon mastery and daily challenge sections credit Jesse Hoy in their source decks.</p>
      <div className="raven-gallery">
        {images.map(item => (
          <div key={item.name}><h3>{item.title}</h3><StudyImage image={{src: `/assets/projects/call-of-duty/raven/${item.name}.webp`, alt: item.alt, caption: item.caption}} /></div>
        ))}
      </div>
    </section>
  );
}
