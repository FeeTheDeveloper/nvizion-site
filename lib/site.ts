const companyName = "Nvizion Transportation LLC";
const companyShortName = "Nvizion Transportation";
const companyDomain = "nviziontransport.com";
const companyEmail = "contact@nviziontransport.com";
const companyBaseLocation = "Texas, United States";
const companyBaseRegion = companyBaseLocation.split(",")[0]?.trim() ?? companyBaseLocation;

export const siteConfig = {
  name: companyName,
  shortName: companyShortName,
  domain: companyDomain,
  email: companyEmail,
  phone: "",
  baseLocation: companyBaseLocation,
  baseRegion: companyBaseRegion,
  tagline: "Driven With Precision. Delivered With Purpose.",
  veteranOwnedLabel: "Veteran-Owned",
  identityDescription: "Veteran-owned transportation company",
  defaultDescription:
    "Veteran-owned transportation company delivering dependable freight and logistics support with discipline, professionalism, and precision.",
  seoKeywords: [
    "veteran-owned transportation company",
    `${companyBaseRegion} transportation company`,
    "freight transportation",
    "logistics support",
    "commercial transportation services",
    "scheduled delivery support",
    "dedicated transportation support"
  ],
  footerSummary:
    "Dependable freight movement, strong communication, and disciplined transportation support built for commercial clients that value credibility and follow-through.",
  contactIntro:
    "Need a quote or want to discuss transportation support? Reach out and our team will connect with you with the next steps.",
  themeColor: "#0F0B09",
  url: `https://${companyDomain}`,
  logoPath: "/logo.png" as string | null,
  socialImagePath: "/logo.png" as string | null,
  primaryNavigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Drivers", href: "/drivers" },
    { label: "Contact", href: "/contact" }
  ]
};

export const baseRegion = siteConfig.baseRegion;
const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` : null;

export const heroChips = [
  siteConfig.veteranOwnedLabel,
  `${baseRegion}-Based`,
  "Commercial Freight Focus"
];

export const servicesPreview = [
  {
    eyebrow: "Core Service",
    title: "Freight Transportation",
    summary:
      "Dependable freight movement executed with route awareness, schedule discipline, and clear communication from dispatch to delivery.",
    highlights: ["Route coordination", "Shipment visibility"],
    href: "/services#freight-transportation"
  },
  {
    eyebrow: "Recurring Coverage",
    title: "Scheduled Route Support",
    summary:
      "Consistent recurring transportation support for businesses that need predictable route coverage and accountable execution.",
    highlights: ["Predictable route windows", "Repeatable coverage"],
    href: "/services#scheduled-deliveries"
  },
  {
    eyebrow: "Operational Alignment",
    title: "Dedicated Logistics Service",
    summary:
      "Focused transportation capacity for clients who need a trusted service partner aligned to their standards and delivery flow.",
    highlights: ["Dedicated support posture", "Long-term service fit"],
    href: "/services#dedicated-transportation-support"
  },
  {
    eyebrow: "Priority Response",
    title: "Time-Sensitive Deliveries",
    summary:
      "Urgent transport handled with disciplined timing, responsive updates, and a high-priority operational mindset.",
    highlights: ["Urgent movement planning", "Rapid communication"],
    href: "/services#time-sensitive-transportation"
  }
];

export const trustPoints = [
  {
    title: "Disciplined execution",
    body: "We approach every assignment with a process-driven standard rooted in preparation, timing, and follow-through."
  },
  {
    title: "Responsive communication",
    body: "Clients stay informed with direct communication and dependable updates that reduce uncertainty and friction."
  },
  {
    title: "Veteran-owned accountability",
    body: "Our operating mindset is shaped by service, respect, and ownership of the mission from start to finish."
  },
  {
    title: "Reliable scheduling",
    body: "Routine, recurring, and time-sensitive loads are managed with a consistent, punctual, client-first approach."
  },
  {
    title: "Long-term partnership focus",
    body: "We are built to earn repeat business through credibility, professionalism, and dependable day-to-day performance."
  }
];

export const homeStats = [
  {
    value: "Mission-Focused",
    label: "Operating Standard",
    detail: "Execution is approached with preparation, timing discipline, and follow-through."
  },
  {
    value: "Service-First",
    label: "Client Experience",
    detail: "Clients get direct communication, dependable updates, and professional interaction."
  },
  {
    value: "Texas-Based",
    label: "Regional Foundation",
    detail: "Built from a disciplined regional base with a long-term commercial service mindset."
  }
];

export const heroSupportLine =
  "Freight transportation, scheduled route support, dedicated logistics service, and time-sensitive delivery execution for commercial clients.";

export const pageHeroChips = {
  about: [siteConfig.veteranOwnedLabel, "Professional Service", "Long-Term Partnerships"],
  services: ["Freight Transportation", "Dedicated Support", "Time-Sensitive Response"],
  contact: ["Quote Requests", siteConfig.veteranOwnedLabel, siteConfig.baseLocation]
};

export const driverPageChips = [
  siteConfig.veteranOwnedLabel,
  "Driver Admissions",
  "Company Drivers and Owner-Operators"
];

export const driverOpportunityHighlights = [
  {
    title: "Company Drivers",
    body: "Apply if you are a dependable professional who can represent the company with punctuality, communication, and disciplined execution."
  },
  {
    title: "Owner-Operators",
    body: "Apply if you are an independent operator seeking contract opportunities with a transportation company that values clear standards and reliable follow-through."
  },
  {
    title: "Operational Fit",
    body: "Applicants should be prepared for review based on qualifications, documentation, driving history, and fit for current transportation needs."
  }
];

export const driverReviewStandards = [
  "Commercial driving experience and driver type fit",
  "CDL status, DOT medical card status, and document readiness",
  "Driving history, major moving violations, and preventable accident history",
  "Availability, route preferences, and overall operational alignment"
];

export const driverApplicationSteps = [
  {
    title: "Prescreen",
    body: "Complete the admissions questions so our team can review licensing, availability, and baseline qualification details quickly."
  },
  {
    title: "Application Review",
    body: "We review the full submission for professionalism, documentation readiness, driving history, and current opportunity alignment."
  },
  {
    title: "Follow-Up",
    body: "If there is a fit for current opportunities, our team will contact you for the next conversation or supporting documents."
  }
];

export const heroVisualHighlights = [
  {
    label: "Operational posture",
    value: "Disciplined dispatch",
    body: "Execution-first support shaped by timing, communication, and accountability."
  },
  {
    label: "Client priority",
    value: "Dependable service",
    body: "Commercial transportation support handled with professionalism from first call to final delivery."
  }
];

export const veteranStandards = [
  {
    title: "Preparedness",
    body: "Every assignment is approached with planning, route awareness, and readiness to execute cleanly."
  },
  {
    title: "Accountability",
    body: "We own commitments, communicate directly, and stay focused on the standard promised to the client."
  },
  {
    title: "Respect",
    body: "Professionalism matters at every touchpoint, from dispatch communication to final delivery conduct."
  },
  {
    title: "Mission Focus",
    body: "When timing matters, we stay disciplined, responsive, and centered on getting the job done right."
  }
];

export const clientMindsetPoints = [
  "Clear communication from request to delivery",
  "Dependable execution for routine and urgent transportation needs",
  "A professional standard designed to earn repeat business"
];

export const contactExpectationPoints = [
  "Share service type, route details, timing, and any delivery priority requirements.",
  "Use the form for quote requests, dedicated transportation support, or recurring route discussions.",
  `${siteConfig.shortName} serves clients from ${siteConfig.baseLocation}.`
];

export const aboutPillars = [
  {
    title: "Mission",
    body: "Deliver dependable transportation solutions with discipline, professionalism, and communication that clients can trust."
  },
  {
    title: "Vision",
    body: "Build long-term transportation relationships by becoming the go-to logistics partner for dependable execution and service."
  }
];

export const coreValues = [
  {
    title: "Preparedness",
    body: "We plan for clean execution, strong communication, and reliable service before the route ever begins."
  },
  {
    title: "Accountability",
    body: "We own outcomes, protect commitments, and keep clients informed when timing and precision matter most."
  },
  {
    title: "Respect",
    body: "We operate with professionalism toward clients, facilities, schedules, and the responsibility entrusted to us."
  },
  {
    title: "Consistency",
    body: "We aim to be steady, dependable, and repeatable so businesses can count on the same high standard every time."
  }
];

export const relationshipPoints = [
  {
    title: "Built for repeat business",
    body: "Our focus is not one-off transactions. We want to become a dependable extension of our clients' transportation workflow."
  },
  {
    title: "Professional under pressure",
    body: "From routine freight to urgent assignments, we stay composed, responsive, and focused on execution."
  },
  {
    title: "Trust earned through performance",
    body: "Credibility comes from showing up prepared, communicating clearly, and delivering as promised."
  }
];

export const serviceDetails = [
  {
    id: "freight-transportation",
    title: "Freight Transportation",
    intro:
      "Reliable freight movement for businesses that need disciplined service, clear communication, and dependable delivery execution.",
    points: [
      "Commercial freight handling with a strong focus on timing and route coordination",
      "Professional communication throughout pickup, transit, and delivery milestones",
      "Dependable service standards designed to support repeat business relationships"
    ]
  },
  {
    id: "dedicated-transportation-support",
    title: "Dedicated Transportation Support",
    intro:
      "Transportation capacity aligned to your operation when you need a dependable partner who understands your standards.",
    points: [
      "Consistent support for businesses with recurring transportation demands",
      "A service model built around reliability, accountability, and operational alignment",
      "Strong fit for companies that value continuity and long-term service consistency"
    ]
  },
  {
    id: "scheduled-deliveries",
    title: "Scheduled Deliveries",
    intro:
      "Routine and recurring deliveries managed with a punctual, organized, and client-focused approach.",
    points: [
      "Structured route execution for predictable delivery schedules",
      "Reliable service windows supported by planning and disciplined follow-through",
      "Ideal for businesses that depend on consistency across recurring stops or routes"
    ]
  },
  {
    id: "time-sensitive-transportation",
    title: "Time-Sensitive Transportation",
    intro:
      "Priority transportation support for loads where timing, responsiveness, and execution are critical.",
    points: [
      "Urgent transportation handled with focused attention and rapid coordination",
      "A responsive operating mindset for jobs that cannot afford avoidable delays",
      "Direct communication that supports visibility and confidence under tighter timelines"
    ]
  },
  {
    id: "business-to-business-logistics-support",
    title: "Business-to-Business Logistics Support",
    intro:
      "Professional transportation support for commercial clients that need a reliable service partner, not just another carrier.",
    points: [
      "Operational support shaped around professionalism, communication, and trust",
      "Flexible service thinking for businesses managing supply movement and delivery obligations",
      "A relationship-based approach designed to support long-term logistics needs"
    ]
  }
];

export const contactHighlights = [
  ...(siteConfig.phone
    ? [
        {
          label: "Phone",
          value: siteConfig.phone,
          href: phoneHref
        }
      ]
    : []),
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "Website",
    value: siteConfig.domain,
    href: siteConfig.url
  },
  {
    label: "Location",
    value: siteConfig.baseLocation,
    href: null
  }
];

export const footerServiceLinks = servicesPreview.map((service) => ({
  label: service.title,
  href: service.href
}));
