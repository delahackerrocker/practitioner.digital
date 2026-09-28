const assetRoot = "/assets/projects/nationwide-arena";

export const nationwideStudy = {
  slug: "nationwide-arena",
  index: "01",
  meta: "Independent Prototype · Visitor Experience",
  title: "Nationwide Arena",
  summary: "An arena companion across desktop, mobile web, iOS, and Android. Find a section, plan a visit, explore events, and get the information that makes the night easier.",
  metric: "4 Platforms",
  href: "https://practitioner.digital/nationwide-arena/",
  image: {
    src: `${assetRoot}/desktop-map.webp`,
    alt: "Nationwide Arena desktop guide with a searchable place list and Section 113 highlighted on the seating chart",
    width: 1440,
    height: 1050,
  },
  // Replace this object with the native iOS capture and its label when available.
  mobileImage: {
    src: `${assetRoot}/mobile-web-map.webp`,
    alt: "Mobile web seating map with Section 113 selected and persistent bottom navigation",
    width: 390,
    height: 844,
    label: "Mobile Web",
  },
  platforms: ["Desktop Web", "Mobile Web", "iOS", "Android"],
  features: [
    {
      id: "explore",
      label: "01 / Explore",
      title: "Find Your Section. Find What’s Nearby.",
      body: "An interactive seating chart connects sections with the places visitors need: food, restrooms, entrances, and help. Search, category filters, floor selection, and map or list views offer different ways to find the same answer.",
      detail: "Event configurations and accessible-seating controls keep the map useful across different kinds of visits.",
      image: "desktop-map.webp",
      alt: "Desktop seating chart showing a highlighted section alongside food, restroom, and help filters",
      caption: "Section selection and place discovery · Desktop web",
    },
    {
      id: "plan",
      label: "02 / Plan",
      title: "Keep the Visit Together.",
      body: "A saved section and event give visitors a personal starting point. Arrival planning brings destinations, parking, and travel modes together, with a handoff to Google Maps for directions.",
      detail: "Visit choices stay on the device, so the next step is easy to return to.",
      image: "visit-planner.webp",
      alt: "Visit planner with Section 113 saved and destination, starting point, and travel mode controls",
      caption: "Saved section and arrival planning · Desktop web",
    },
    {
      id: "events",
      label: "03 / Discover",
      title: "Make a Night of It.",
      body: "Searchable events and a calendar view connect discovery to planning. Visitors can save an event to their visit and follow links to official details and ticketing.",
      detail: "The prototype labels its schedule as a dated snapshot rather than implying live availability.",
      image: "event-calendar.webp",
      alt: "Event calendar with scheduled dates marked and links to event details and ticketing",
      caption: "Calendar and event discovery · Desktop web",
    },
    {
      id: "services",
      label: "04 / Support",
      title: "Useful Answers, Close at Hand.",
      body: "A searchable guest guide brings accessibility information, venue policies, family amenities, and other practical questions into the same experience.",
      detail: "Source links connect visitors to official arena information for current details.",
      image: "guest-services.webp",
      alt: "Guest services search showing expanded accessibility information and official resource links",
      caption: "Searchable guest and accessibility information · Desktop web",
    },
  ],
};

export function nationwideAsset(filename) {
  return `${assetRoot}/${filename}`;
}
