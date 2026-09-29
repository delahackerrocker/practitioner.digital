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
      detail: "Event layouts and accessible-seating controls help visitors find the right seats for their visit.",
      image: "desktop-map.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-map.webp`, alt: "Mobile seating map with Section 113 selected", width: 390, height: 844 },
      alt: "Desktop seating chart showing a highlighted section alongside food, restroom, and help filters",
      caption: "Section selection and place discovery · Desktop web",
    },
    {
      id: "plan",
      label: "02 / Plan",
      title: "Keep the Visit Together.",
      body: "Save your section and event so you have a starting point when you come back. Plan where you’re going, where to park, and how to get there, then open Google Maps for directions.",
      detail: "Visit choices stay on the device, so the next step is easy to return to.",
      image: "visit-planner.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-plan.webp`, alt: "Mobile visit planner with Section 113 saved and arrival planning below", width: 390, height: 844 },
      alt: "Visit planner with Section 113 saved and destination, starting point, and travel mode controls",
      caption: "Saved section and arrival planning · Desktop web",
    },
    {
      id: "events",
      label: "03 / Discover",
      title: "Make a Night of It.",
      body: "Search for an event or browse the calendar, save it to your visit, and follow the links for official details and tickets.",
      detail: "The prototype shows the date of its schedule snapshot, so visitors know it isn’t a live availability feed.",
      image: "event-calendar.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-events.webp`, alt: "Mobile event calendar with scheduled dates marked", width: 390, height: 844 },
      alt: "Event calendar with scheduled dates marked and links to event details and ticketing",
      caption: "Calendar and event discovery · Desktop web",
    },
    {
      id: "services",
      label: "04 / Support",
      title: "Useful Answers, Close at Hand.",
      body: "The searchable guest guide keeps accessibility information, venue rules, family amenities, and other practical answers in one place.",
      detail: "Source links connect visitors to official arena information for current details.",
      image: "guest-services.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-services.webp`, alt: "Mobile guest guide with expanded accessibility information", width: 390, height: 844 },
      alt: "Guest services search showing expanded accessibility information and official resource links",
      caption: "Searchable guest and accessibility information · Desktop web",
    },
  ],
};

export function nationwideAsset(filename) {
  return `${assetRoot}/${filename}`;
}
