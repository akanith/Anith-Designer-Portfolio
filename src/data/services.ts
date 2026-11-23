import { ServiceItem, CreativeProcessStep } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "graphic-design",
    number: "01",
    title: "Graphic Design",
    tagline: "Distinctive brand identities, arresting posters, and comprehensive publication design.",
    description:
      "Sculpting iconic vector marks, high-octane commercial posters, corporate stationery, and agile social media publishing templates engineered with precision typography and grid geometry.",
    deliverables: [
      "Logo Design",
      "Poster Design",
      "Business Card Design",
      "Brochure & Catalogue Design",
      "Advertising Design",
      "Social Media Creatives",
    ],
    suitableFor:
      "Founders, retail enterprises, sports apparel labels, and luxury brands seeking distinctive, memorable market presence.",
    accent: "#00B8C8", // Electric Teal
  },
  {
    id: "printing-production",
    number: "02",
    title: "Digital & Offset Multicolour Printing",
    tagline: "Commercial-grade digital & offset printing, fine finishing, and architectural large formats.",
    description:
      "Bringing digital designs into the physical realm with high-fidelity colour calibration, specialized paper stocks, foil stamping, precision die-cutting, and large-scale backlit displays.",
    deliverables: [
      "Brochures & Catalogues",
      "Flyers & Notices",
      "Business Cards",
      "Wedding & Invitation Cards",
      "Letterheads & Bill Books",
      "Lamination & Binding",
      "Stickers & Die Cutting",
      "A4 to A0 Plan Printing",
      "Backlit Printing",
      "LED Frames",
    ],
    suitableFor:
      "Showrooms, event celebrations, corporate offices, architectural firms, and retailers requiring high-precision print production.",
    accent: "#65C74A", // Fresh Green
  },
  {
    id: "ai-video-creation",
    number: "03",
    title: "AI Video Creation",
    tagline: "Next-generation generative commercial videos and dynamic product motion stories.",
    description:
      "Pairing cutting-edge AI generative video pipelines with professional keyframe choreography to produce high-retention commercial advertisements, product reveals, and festive social video campaigns.",
    deliverables: [
      "AI Advertisement Videos",
      "Product Motion Teasers",
      "3D Logo Reveal Animations",
      "Festive Social Video Campaigns",
      "9:16 Vertical Video Commercials",
      "App Walkthrough & Explainer Videos",
    ],
    suitableFor:
      "Modern commerce brands, direct-to-consumer labels, and forward-thinking businesses demanding high-impact video content.",
    accent: "#00B8C8", // Electric Teal
  },
];

export const creativeProcess: CreativeProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Brand DNA & Strategic Direction",
    description:
      "Deconstructing your brand identity, target demographic, and production requirements to define an airtight creative compass.",
    deliverables: ["Creative Direction Brief", "Material & Finish Specs", "Visual Direction"],
  },
  {
    step: "02",
    title: "CONCEPT",
    subtitle: "Art Direction & Composition",
    description:
      "Developing bold typographic systems, layout structures, and high-contrast colour studies before committing to final output.",
    deliverables: ["Concept Proofs", "Grid Architecture", "Motion Storyboards"],
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Obsessing Over Vector & Motion Craft",
    description:
      "Refining typography, kerning, lighting, textures, and video choreography until every deliverable meets gallery-grade standards.",
    deliverables: ["Master Vector Art", "Video Cut & Audio Sync", "Prepress Proofing"],
  },
  {
    step: "04",
    title: "PRODUCE",
    subtitle: "Into Reality — Print & Launch",
    description:
      "Delivering calibrated press-ready CMYK files, physical offset/digital print production, and high-bitrate video renders for immediate deployment.",
    deliverables: ["Digital/Offset Print Output", "Master Vector Archives", "Broadcast 4K Video Files"],
  },
];

// Backwards-compatible alias
export const processSteps = creativeProcess;
