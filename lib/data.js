export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export const problemCards = [
  {
    number: "01",
    title: "Delayed response",
    text: "Manual prioritization and fragmented communication can slow down emergency response.",
  },
  {
    number: "02",
    title: "Resource allocation",
    text: "Responders and emergency resources need to be matched according to incident needs, availability, and proximity.",
  },
  {
    number: "03",
    title: "Fragmented coordination",
    text: "Citizens, responders, and agencies need a shared view of an incident as it develops.",
  },
  {
    number: "04",
    title: "Limited visibility",
    text: "Real-time locations and response progress can improve coordination and situational awareness.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Report",
    description: "A citizen shares the incident type, location, and key details, with an image when useful.",
  },
  {
    number: "02",
    title: "Assess & match",
    description: "AI analyzes severity and suggests resources. The system checks responder availability and ranks nearby options.",
  },
  {
    number: "03",
    title: "Dispatch",
    description: "The system assigns an appropriate responder using the recommendation, availability, and proximity.",
  },
  {
    number: "04",
    title: "Track & resolve",
    description: "Live status, location, and ETA updates keep the citizen, responder, and admin in sync through resolution.",
  },
];

export const showcaseData = {
  citizen: [
    {
      title: "Dashboard",
      description: "A clear overview of active needs, nearby resources, and safety guidance.",
      image: "/images/swiftaid/citizen/dashboard.png",
    },
    {
      title: "Emergency submission",
      description: "Citizens can describe an incident, add location details, and attach an image.",
      image: "/images/swiftaid/citizen/submission.jpg",
    },
    {
      title: "Responders map",
      description: "Assigned responders approaching the emergency location can be monitored on a map-based view.",
      image: "/images/swiftaid/citizen/map-sheet.png",
    },
    {
      title: "Safety tips",
      description: "Contextual guidance helps citizens respond safely while help is coordinated.",
      image: "/images/swiftaid/citizen/safety-tips.png",
    },
    {
      title: "Nearby Resources",
      description: "Nearby fire stations, police stations and hospitals can be explored on a map-based view.",
      image: "/images/swiftaid/citizen/nearby-resources.png",
    },
  ],
  responder: [
    {
      title: "Responder dashboard",
      description: "Responders can change their status from offline to online to show they are available in order to receive assignments.",
      image: "/images/swiftaid/responder/dashboard-details.png",
    },
    {
      title: "Current assignment",
      description: "The active incident, urgency, and required response details remain accessible.",
      image: "/images/swiftaid/responder/navigation.png",
    },
    {
      title: "Navigation",
      description: "Travel guidance supports a responder moving from their current location to the scene.",
      image: "/images/swiftaid/responder/arrival.png",
    },
    {
      title: "Emergency completion",
      description: "Responders can mark the incident complete after resolving the emergency. ",
      image: "/images/swiftaid/responder/report-2.png",
    },
    {
      title: "Emergency completion",
      description: "Responders will then submit an outcome report.",
      image: "/images/swiftaid/responder/report.jpg",
    },
  ],
  administrator: [
    {
      title: "Operations dashboard",
      description: "Ongoing incidents and resource demand are visible in a central overview.",
      image: "/images/swiftaid/admin/dashboard-2.png",
    },
    {
      title: "Emergency details",
      description: "Incident context, assigned responders, and live status updates are grouped together.",
      image: "/images/swiftaid/admin/emergency-overview.png",
    },
    {
      title: "Responder management",
      description: "Agency teams can review responder availability and allocation details.",
      image: "/images/swiftaid/admin/responders.png",
    },
    {
      title: "Analytics",
      description: "Operational trends can support planning, staffing, and future resource decisions.",
      image: "/images/swiftaid/admin/analytics-1.png",
    },
  ],
};

// Retained for the standalone section components, which are currently omitted from the homepage.
export const aiHighlights = [
  "Emergency analysis",
  "Severity and context understanding",
  "Resource recommendations",
  "Proximity",
  "Availability",
  "Dynamic allocation",
];

export const technologyGroups = [
  { title: "Frontend / Mobile", items: ["Flutter", "React"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database", items: ["MongoDB"] },
  { title: "AI", items: ["LLaMA 3", "Groq"] },
  { title: "Real-time", items: ["Socket.IO"] },
  { title: "Maps & Geospatial", items: ["Mapbox", "OpenStreetMap"] },
  { title: "Development", items: ["Git", "VS Code"] },
];

export const results = [
  {
    value: "250 ms",
    label: "AI analysis latency reported during project testing",
  },
  {
    value: "<100 ms",
    label: "Geospatial query time reported during testing",
  },
  {
    value: "91%",
    label: "Reported resource recommendation accuracy",
  },
  {
    value: "Prototype",
    label: "System stage reached",
  },
];

export const futureIdeas = [
  "Offline emergency reporting",
  "Predictive emergency and resource demand",
  "Hotspot analysis",
  "Multi-language support",
  "Additional agency integrations",
  "Advanced analytics",
  "Improved scalability",
  "Stronger security and privacy compliance",
  "Wider real-world testing",
];

export const limitations = [
  "Internet dependency can affect availability in unstable connectivity conditions.",
  "Scalability would need to be tested under heavier demand and larger geographic areas.",
  "Map service performance would require further optimization for high-traffic scenarios.",
  "Usability would benefit from extended user testing and accessibility review.",
  "Agency integration and data governance would need formal partnership and compliance work.",
  "Real-world validation with emergency organizations remains an important next step.",
];

export const liveEvents = [
  "Responder assigned",
  "Assignment accepted",
  "Responder location updated",
  "ETA updated",
  "Responder arrived",
  "Emergency completed",
];

