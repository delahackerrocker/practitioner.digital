const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/accurate-it/${name}.webp`, alt, caption,
  width: portrait ? 390 : 1440, height: portrait ? 844 : 1000, portrait,
});

export const accurateIt = {
  slug: "accurate-it",
  meta: "Client Website · Electronics Recycling & ITAD",
  title: "Accurate IT",
  tagline: "Old Tech. Now What?",
  summary: "One old laptop or a whole office full of computers: people need to know what to do with them. This site explains drop-offs, business pickups, recycling, and what happens to the data.",
  href: "https://practitioner.digital/accurate-it/",
  cta: "Try the Site",
  tags: ["UX Design", "Information Architecture", "Responsive Web", "Service Journeys"],
  hero: [
    image("home-desktop", "Accurate IT homepage with separate personal recycling and business service paths", "Desktop Web · Two Clear Starting Points"),
    image("home-mobile", "Accurate IT homepage adapted to a narrow mobile screen", "Mobile Web", true),
  ],
  context: {
    title: "One Laptop or a Truckload.",
    body: [
      "Someone clearing out a closet needs hours, directions, and a list of what they can bring. A business replacing its computers needs pickup details, data handling, and records of what happened to the equipment.",
      "The homepage gives each group a clear place to start. These screenshots show the current site preview.",
    ],
  },
  sections: [
    {
      label: "Start", title: "What Are You Here to Do?",
      body: ["Personal Recycling and Business & Commercial sit near the top. Pick the one that fits and get to the details.", "The menu uses the same split, with drop-off information and business pickup requests easy to find."],
      image: image("home-desktop", "Homepage path selection for personal recycling and business or commercial services", "Choose a Service · Desktop Web"),
    },
    {
      label: "Prepare", title: "Know Before You Load the Car.",
      body: ["The drop-off page covers what you can bring, hours, directions, fees, and what to do when you get there.", "Check the list before hauling that old TV across town. The address and phone number are right there if you need them."],
      image: image("residential", "Residential drop-off instructions with arrival hours, facility address, phone number, and TV recycling fee guidance", "Residential Drop-Off · Desktop Web"),
    },
    {
      label: "Check", title: "Answer “Can I Recycle This?”",
      body: ["Open a category to see what’s accepted and what isn’t. No need to read one giant list.", "The page also explains what can be dropped off and what qualifies for pickup."],
      image: image("items", "Expanded accepted-items list on the Accurate IT recycling website", "Accepted Equipment · Expanded List"),
    },
    {
      label: "Pickup", title: "Where Does All That Equipment Go?",
      body: ["The business pages explain the job from pickup to paperwork: count the equipment, handle the data, then reuse or recycle what’s left.", "The pickup form asks what you have, where it is, and what you need done. Service pages explain the details."],
      image: image("business", "Commercial services page describing pickup, IT asset disposition, and the process through reporting", "Business & Commercial · Desktop Web"),
    },
    {
      label: "Understand", title: "What Happens to the Data?",
      body: ["Old equipment can still hold sensitive data. This page explains wiping, purging, physical destruction, and the records that go with the work.", "That gives customers a place to start and questions to ask before booking a pickup."],
      image: image("security", "Accurate IT data-security page with destruction options and documented handling information", "Data Security · Desktop Web"),
    },
    {
      label: "Navigate", title: "Easy to Find on Your Phone, Too.",
      body: ["Pickup, drop-off, and contact links sit in one simple phone menu.", "You can find what you need without wrestling with a menu built for a big screen."],
      image: image("mobile-navigation", "Expanded Accurate IT mobile navigation with service and contact links", "Mobile Navigation", true),
    },
  ],
  closeTitle: "Try the Recycling Site.",
  closeIntro: "Take a look at the drop-off and business pages in the current preview.",
};
