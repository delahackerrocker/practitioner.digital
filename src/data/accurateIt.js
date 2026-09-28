const image = (name, alt, caption, portrait = false) => ({
  src: `/assets/projects/accurate-it/${name}.webp`, alt, caption,
  width: portrait ? 390 : 1440, height: portrait ? 844 : 1000, portrait,
});

export const accurateIt = {
  slug: "accurate-it",
  meta: "Client Website · Electronics Recycling & ITAD",
  title: "Accurate IT",
  tagline: "The Right Path for Retired Technology.",
  summary: "A service website that helps households plan an electronics drop-off and helps organizations navigate pickup, asset disposition, and data destruction. Two audiences, with a clear starting point for each.",
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
      "The updated experience separates those journeys at the homepage, then connects each to focused service information. Screens shown here are from the current hosted preview.",
    ],
  },
  sections: [
    {
      label: "Orient", title: "Start With the Visitor’s Task.",
      body: ["Personal Recycling and Business & Commercial appear together near the top of the homepage. Each path explains what the visitor will find before they leave the page.", "The same distinction carries into navigation, with direct access to residential drop-off information and a prominent commercial pickup action."],
      image: image("home-desktop", "Homepage path selection for personal recycling and business or commercial services", "Audience Selection · Desktop Web"),
    },
    {
      label: "Prepare", title: "Make the Drop-Off Easy to Plan.",
      body: ["The residential journey brings accepted items, directions, opening hours, arrival instructions, and fee guidance into a practical sequence.", "Visitors can check what belongs in a drop-off before making the trip, then find the location or call with a question."],
      image: image("residential", "Residential drop-off instructions with arrival hours, facility address, phone number, and TV recycling fee guidance", "Residential Drop-Off · Desktop Web"),
    },
    {
      label: "Check", title: "Answer “Can I Recycle This?”",
      body: ["The accepted-items page separates eligible equipment from exclusions using expandable lists. The detail is available without making the first view an uninterrupted inventory.", "Drop-off and pickup qualifications sit alongside the list, helping visitors distinguish facility acceptance from collection services."],
      image: image("items", "Expanded accepted-items list on the Accurate IT recycling website", "Accepted Equipment · Expanded List"),
    },
    {
      label: "Coordinate", title: "Connect Pickup to the Whole Lifecycle.",
      body: ["The commercial journey presents equipment retirement as a connected service: collection, inventory, data protection, reuse, recycling, and reporting.", "Service links let organizations explore the outcome they need, while the pickup prompt explains which equipment, location, and service details to bring to the conversation."],
      image: image("business", "Commercial services page describing pickup, IT asset disposition, and the process through reporting", "Business & Commercial · Desktop Web"),
    },
    {
      label: "Understand", title: "Make Data Handling Visible.",
      body: ["A dedicated data-security page gives sensitive equipment its own decision path. It introduces clearing, purging, and physical destruction, and explains the role of service documentation.", "Keeping this information close to the service journey helps visitors identify the questions they need to ask before arranging collection."],
      image: image("security", "Accurate IT data-security page with destruction options and documented handling information", "Data Security · Desktop Web"),
    },
    {
      label: "Navigate", title: "Keep the Next Step Within Reach.",
      body: ["The mobile menu carries the service structure into a single-column layout, including commercial pickup, residential drop-off, and contact paths.", "Visitors can move from a quick question on their phone to the relevant information without working through a desktop-sized menu."],
      image: image("mobile-navigation", "Expanded Accurate IT mobile navigation with service and contact links", "Mobile Navigation", true),
    },
  ],
  closeTitle: "Explore the Recycling Journeys.",
  closeIntro: "Follow the residential and commercial paths in the current site preview.",
};
