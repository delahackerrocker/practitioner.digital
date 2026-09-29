const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/accurate-it/${name}.webp`, alt, caption,
  width: portrait ? 390 : 1440, height: portrait ? 844 : 1000, portrait,
});

export const accurateIt = {
  slug: "accurate-it",
  meta: "Client Website · Electronics Recycling & ITAD",
  title: "Accurate IT",
  tagline: "The Right Path for Retired Technology.",
  summary: "A website that helps households plan an electronics drop-off and helps organizations arrange pickup, IT asset disposition, and data destruction. Different needs, with a clear starting point for each.",
  href: "https://practitioner.digital/accurate-it/",
  cta: "Explore the Site Preview",
  tags: ["UX Design", "Information Architecture", "Responsive Web", "Service Journeys"],
  hero: [
    image("home-desktop", "Accurate IT homepage with separate personal recycling and business service paths", "Desktop Web · Two Clear Starting Points"),
    image("home-mobile", "Accurate IT homepage adapted to a narrow mobile screen", "Mobile Web", true),
  ],
  context: {
    title: "One Service Business. Different Reasons to Visit.",
    body: [
      "A resident with an old computer needs practical answers: what can I bring, where do I go, and what should I expect? An organization retiring equipment needs a different conversation about logistics, inventory, data handling, and documentation.",
      "The homepage gives each group its own way in, with the service information they need next. These screenshots are from the current site preview.",
    ],
  },
  sections: [
    {
      label: "Orient", title: "Start With the Visitor’s Task.",
      body: ["Personal Recycling and Business & Commercial appear together near the top of the homepage. Each path explains what the visitor will find before they leave the page.", "The menu follows the same split, with residential drop-off information easy to find and a clear button for commercial pickup."],
      image: image("home-desktop", "Homepage path selection for personal recycling and business or commercial services", "Audience Selection · Desktop Web"),
    },
    {
      label: "Prepare", title: "Make the Drop-Off Easy to Plan.",
      body: ["The residential page walks through what’s accepted, directions, hours, what to do when you arrive, and any fees.", "Visitors can check what belongs in a drop-off before making the trip, then find the location or call with a question."],
      image: image("residential", "Residential drop-off instructions with arrival hours, facility address, phone number, and TV recycling fee guidance", "Residential Drop-Off · Desktop Web"),
    },
    {
      label: "Check", title: "Answer “Can I Recycle This?”",
      body: ["Expandable lists show what’s accepted and what isn’t. Visitors can open the details they need without facing one huge inventory list.", "The list also explains the drop-off and pickup requirements, so visitors can tell what they can bring in and what qualifies for collection."],
      image: image("items", "Expanded accepted-items list on the Accurate IT recycling website", "Accepted Equipment · Expanded List"),
    },
    {
      label: "Coordinate", title: "Show What Happens After Pickup.",
      body: ["The business pages cover the whole job of retiring equipment: collection, inventory, data protection, reuse, recycling, and reporting.", "Businesses can follow links to the services they need. The pickup request explains what to share about the equipment, location, and work they’re asking for."],
      image: image("business", "Commercial services page describing pickup, IT asset disposition, and the process through reporting", "Business & Commercial · Desktop Web"),
    },
    {
      label: "Understand", title: "Make Data Handling Visible.",
      body: ["The data-security page helps visitors work out how to handle equipment with sensitive data. It covers clearing, purging, physical destruction, and the paperwork that records the work.", "Putting this information alongside the services helps visitors know what to ask before booking a collection."],
      image: image("security", "Accurate IT data-security page with destruction options and documented handling information", "Data Security · Desktop Web"),
    },
    {
      label: "Navigate", title: "Keep the Next Step Within Reach.",
      body: ["The mobile menu puts commercial pickup, residential drop-off, and contact links in one column.", "Visitors can move from a quick question on their phone to the relevant information without working through a desktop-sized menu."],
      image: image("mobile-navigation", "Expanded Accurate IT mobile navigation with service and contact links", "Mobile Navigation", true),
    },
  ],
  closeTitle: "Try the Recycling Site.",
  closeIntro: "Follow the residential and commercial paths in the current site preview.",
};
