import { ServiceItem, CreativeProcessStep } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "brand-identity",
    number: "01",
    title: "Brand Identity & Logo Design",
    tagline: "Distinctive visual marks and comprehensive design systems that build lasting equity.",
    description:
      "Engineering primary marks, monogram crests, bespoke typography scales, color systems, and comprehensive brand guidelines that look formidable on retail packaging and digital interfaces alike.",
    deliverables: [
      "Primary Brand Mark & Monogram",
      "Vector Emblem & Favicon System",
      "Typography Scale & Color Tokens",
      "Packaging & Collateral Prototypes",
      "Master Vector Assets (SVG, AI, PDF)",
    ],
    suitableFor: "Startups, fashion ateliers, sports labels, and emerging founders building long-term recognition.",
    accent: "#355CFF", // Vivid cobalt
  },
  {
    id: "social-media-posters",
    number: "02",
    title: "Social Media & Promotional Posters",
    tagline: "Arresting digital posters and agile publishing templates that demand attention.",
    description:
      "Strategic daily and weekly social asset design that maintains gallery polish. From high-frequency daily market rate bulletins to promotional announcements and carousel spreads.",
    deliverables: [
      "Modular Social Feed Layouts (4:5 / 1:1)",
      "9:16 Vertical Story & Reel Covers",
      "Daily Bullion & Market Rate Bulletins",
      "Festive & Seasonal Campaign Creative",
      "Multi-Slide Educational Systems",
    ],
    suitableFor: "Retail showrooms, lifestyle brands, creators, and commerce businesses seeking daily visual prestige.",
    accent: "#FF5A45", // Electric coral
  },
  {
    id: "product-advertising",
    number: "03",
    title: "Product Advertising",
    tagline: "Tactile studio staging and technical callouts showcasing material craftsmanship.",
    description:
      "Purpose-built commercial visuals engineered specifically for physical consumer products. Staging items on architectural pedestals with cinematic lighting and benefit infographics.",
    deliverables: [
      "Studio Staging & Key Visual (KV) Art Direction",
      "Technical Feature Callout Infographics",
      "Retail Mockup Boards & Display Cards",
      "Packaging Box Artwork & Label Systems",
      "High-Resolution Print & Digital Formats",
    ],
    suitableFor: "Athletic wear, consumer hardware, luxury goods, and direct-to-consumer product lines.",
    accent: "#8B5CF6", // Vivid violet
  },
  {
    id: "jewellery-retail-campaigns",
    number: "04",
    title: "Jewellery & Retail Campaigns",
    tagline: "Heritage gold & silver schemes, sacred Tamil typography, and multi-page collateral.",
    description:
      "Full promotional collateral suites for high-value retail showrooms. Fusing traditional cultural motifs (diyas, sacred vels, peacock filigree) with clear transactional tabular ledgers.",
    deliverables: [
      "Multi-Page Savings Passbooks & Schemes",
      "Festival Launch Posters (Tamil / English)",
      "Customer Ledger & Payment Flow Graphics",
      "Daily Gold & Silver Price Bulletins",
      "Showroom Counter Banners & Signage",
    ],
    suitableFor: "Jewellery houses, luxury retail chains, festive savings clubs, and heritage showrooms.",
    accent: "#E7FF59", // Acid yellow
  },
  {
    id: "sports-branding",
    number: "05",
    title: "Sports Branding",
    tagline: "Aggressive team crests, athletic typography, and competition gear advertising.",
    description:
      "Crafting authentic athletic identities that evoke power, speed, and club pride. Designing competition crests, jersey badges, footwear posters, and locker-room visual assets.",
    deliverables: [
      "Club Shield Crests & Monograms",
      "Jersey Chest Embroidery Master Files",
      "Footwear & Gear Campaign Posters",
      "Stadium Banner & Flag Vectors",
      "Social Matchday & Player Posters",
    ],
    suitableFor: "Football clubs, athletic footwear labels, training academies, and sports gear innovators.",
    accent: "#355CFF", // Vivid cobalt
  },
  {
    id: "invitations-event-design",
    number: "06",
    title: "Invitations & Event Design",
    tagline: "Opulent ceremonial invitations and illustrated launch collateral.",
    description:
      "Bespoke invitations for flagship store inaugurations, luxury bridal celebrations, and traditional ceremonies, blending ornate typography with contemporary print finishes.",
    deliverables: [
      "Ceremonial Invitation Suites (Print & Digital)",
      "Grand Opening Announcements & Posters",
      "Storefront Inauguration Banners",
      "VIP Gift Vouchers & Guest Passports",
      "Social RSVP & Messaging Creatives",
    ],
    suitableFor: "Boutiques, salon ateliers, bridal brands, and ceremonial milestone hosts.",
    accent: "#FF5A45", // Electric coral
  },
  {
    id: "ai-video-motion",
    number: "07",
    title: "AI-Assisted Video & Motion Content",
    tagline: "Generative commercial visuals, dynamic pacing, and next-generation motion stories.",
    description:
      "Merging artificial intelligence pipelines with professional motion design workflows to create stylized product teasers, generative spatial visuals, and social video ads.",
    deliverables: [
      "Generative Video Visual Concepts",
      "Social Commercial Motion Teasers",
      "Kinetic Typography Stings & Intros",
      "Sound Synchronization & Color Grading",
      "9:16 Social Video Adaptations",
    ],
    suitableFor: "Progressive brands and visionary creators seeking high-production motion visuals.",
    accent: "#8B5CF6", // Vivid violet
  },
];

export const creativeProcess: CreativeProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Unearthing the core narrative",
    description:
      "Deconstructing brand DNA, competitive positioning, and target audience psychology to define the strategic creative compass.",
    deliverables: ["Visual Moodboard", "Creative Direction Brief", "Strategic Angle"],
  },
  {
    step: "02",
    title: "CONCEPT",
    subtitle: "Pushing aesthetic boundaries",
    description:
      "Developing bold typographic systems, spatial compositions, and high-contrast color studies before committing to final production.",
    deliverables: ["Style Frames", "Directional Spreads", "Typographic Studies"],
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Obsessing over craft & fidelity",
    description:
      "Refining lighting, materials, balance, kerning, and production tolerances until every asset meets gallery-grade standards.",
    deliverables: ["Master Art Direction", "Component Architecture", "Polished Assets"],
  },
  {
    step: "04",
    title: "DELIVER",
    subtitle: "Launch-ready execution",
    description:
      "Delivering print-ready vectors, web-optimized raster formats, and modular guidelines engineered for flawless omnichannel deployment.",
    deliverables: ["Complete Asset Kit", "Production Specifications", "Deployment Guide"],
  },
];

export const processSteps = creativeProcess;
