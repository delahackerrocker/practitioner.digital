const assetRoot = "/assets/projects/nationwide-arena";

export const nationwideStudy = {
  slug: "nationwide-arena",
  index: "01",
  meta: "Independent Prototype · Arena Guide",
  title: "Nationwide Arena",
  summary: "Find your seat, grab some food, and spend less time wandering around. An arena guide for desktop, mobile web, iOS, and Android.",
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
      body: "Pick your section on the map, then look for food, restrooms, entrances, or help. Search by name, choose a category, or switch to a list if that’s easier.",
      detail: "Switch event layouts or check accessible-seating information without digging through another page.",
      image: "desktop-map.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-map.webp`, alt: "Mobile seating map with Section 113 selected", width: 390, height: 844 },
      alt: "Desktop seating chart showing a highlighted section alongside food, restroom, and help filters",
      caption: "Find Your Section · Desktop Web",
    },
    {
      id: "plan",
      label: "02 / Plan",
      title: "A Plan Before You Leave the House.",
      body: "Save your section and event, pick a parking spot, and open Google Maps for directions. A few less things to juggle on the way there.",
      detail: "Your choices stay on your device for the next time you open the guide.",
      image: "visit-planner.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-plan.webp`, alt: "Mobile visit planner with Section 113 saved and arrival planning below", width: 390, height: 844 },
      alt: "Visit planner with Section 113 saved and destination, starting point, and travel mode controls",
      caption: "Plan Your Visit · Desktop Web",
    },
    {
      id: "events",
      label: "03 / Discover",
      title: "Make a Night of It.",
      body: "See what’s on, pick an event, and save it to your visit. Official details and tickets are a link away.",
      detail: "The schedule is a dated snapshot. Check the official links for current dates and tickets.",
      image: "event-calendar.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-events.webp`, alt: "Mobile event calendar with scheduled dates marked", width: 390, height: 844 },
      alt: "Event calendar with scheduled dates marked and links to event details and ticketing",
      caption: "Events Calendar · Desktop Web",
    },
    {
      id: "services",
      label: "04 / Support",
      title: "Find an Answer. Get on With Your Night.",
      body: "Can you bring that bag? Where can you get help? Search the guest guide for arena rules, accessibility information, and family services.",
      detail: "Links to the arena’s own pages let you check the latest information.",
      image: "guest-services.webp",
      mobileImage: { src: `${assetRoot}/mobile-web-services.webp`, alt: "Mobile guest guide with expanded accessibility information", width: 390, height: 844 },
      alt: "Guest services search showing expanded accessibility information and official resource links",
      caption: "Guest Guide · Desktop Web",
    },
  ],
};

export function nationwideAsset(filename) {
  return `${assetRoot}/${filename}`;
}
