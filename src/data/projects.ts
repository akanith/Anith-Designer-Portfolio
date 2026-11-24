import { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    slug: "thinkloom-studio-identity",
    title: "ThinkLoom — Design & Printing Brand Identity",
    category: "Branding & Logo Design",
    secondaryCategories: ["Brand Identity & Logo Design", "Digital & Offset Printing"],
    year: "2025",
    client: "ThinkLoom Studio",
    location: "Tamil Nadu, India",
    cover: "/images/brand/thinkloom-printing-light.png",
    coverAspect: "square",
    featured: true,
    featuredOrder: 1,
    description:
      "The official brand identity for ThinkLoom — a multidisciplinary design and printing house uniting graphic design, digital & offset multicolour printing, and AI advertisement videos.",
    brief:
      "Develop a distinctive, highly-calibrated brand identity that embodies creative intellect, structured thought threads, and physical print production precision under the tagline 'Beyond Design. Into Reality.'",
    approach:
      "Constructed a dynamic geometric insignia with interconnected facets and precision terminals. Optimized for high-contrast visibility on dark apparel, ivory paper stocks, business stationery, and large-format exterior signage.",
    deliverables: [
      "Master Studio Brandmark (Light & Dark)",
      "Official Design & Printing Descriptor Typography",
      "Palette Tokens (#171717, #F5F1E8, #00B8C8, #65C74A)",
      "Stationery & Collateral Guidelines",
      "Vector Master File Suite (SVG, AI, PDF)",
    ],
    tools: ["Adobe Illustrator", "Vector Craft", "Figma", "Typography Systems"],
    images: [
      {
        url: "/images/brand/thinkloom-printing-light.png",
        alt: "ThinkLoom Design and Printing Official Logo — Warm Ivory Canvas",
        caption: "Master identity on warm ivory background with precision typography",
        aspectRatio: "square",
      },
      {
        url: "/images/brand/thinkloom-printing-dark.png",
        alt: "ThinkLoom Design and Printing Official Logo — Charcoal Black Canvas",
        caption: "High-contrast dark variant engineered for backlit signage and dark packaging",
        aspectRatio: "square",
      },
      {
        url: "/images/brand/thinkloom-logo.png",
        alt: "ThinkLoom Geometric Brand Symbol",
        caption: "Minimal geometric emblem designed for favicon, stamps, and embroidery",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "messiah-sports-socks",
    title: "Messiah Sports — Performance Grip Socks Campaign & Brand System",
    category: "Sports Branding — Messiah Sports",
    secondaryCategories: ["Branding & Logo Design", "Posters & Advertising Design"],
    year: "2026",
    client: "Messiah Sports",
    location: "Dindigul, India",
    cover: "/images/projects/messiah-sports/socks-campaign.png",
    coverAspect: "poster",
    featured: true,
    featuredOrder: 2,
    description:
      "A high-impact product campaign elevating athletic compression gear through tactile studio staging, multi-angle mockup boards, packaging, and commercial video motion.",
    brief:
      "Messiah Sports required a launch campaign for their professional compression sports socks. The challenge was to communicate technical benefits—soft comfort, breathable fabric, durability, and ergonomic fit—while conveying an aspirational, disciplined brand voice.",
    approach:
      "Positioned the campaign under the headline 'Small Gear. Big Difference.' Staged the monochromatic socks on architectural stone pedestals alongside a branded training flask, accompanied by exploded technical specification boards and an energetic commercial product video.",
    deliverables: [
      "Campaign Art Direction & Key Visual",
      "Product Advertising Posters",
      "Multi-Angle Stockings Technical Spec Board",
      "Packaging Box Artwork & Mockups",
      "Apparel Staging & Display Cards",
      "Commercial Product Video",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "3D Staging", "Figma"],
    images: [
      {
        url: "/images/projects/messiah-sports/socks-campaign.png",
        alt: "Messiah Sports Small Gear Big Difference Campaign Poster",
        caption: "Main commercial poster with studio pedestal staging and benefit badges",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/messiah-sports/stockings-board.png",
        alt: "Messiah Sports Football Stockings Technical Specification Board",
        caption: "Exploded engineering diagram demonstrating anti-slip grip zone, compression, and packaging",
        aspectRatio: "landscape",
      },
      {
        url: "/images/projects/messiah-sports/brand-identity.png",
        alt: "Messiah Sports Brand Identity & Wordmark",
        caption: "Official Messiah Sports angular shield mark with modern gothic athletic typography",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/messiah-sports/emblem.png",
        alt: "Messiah Sports MS Monogram Shield Emblem",
        caption: "Minimal geometric 'MS' emblem designed for jersey chest badges and compression apparel",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/messiah-sports/mockup-packaging-box.jpeg",
        alt: "Messiah Sports Retail Packaging Box Mockup",
        caption: "Tactile retail packaging box design featuring high-contrast branding and material callouts",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/messiah-sports/mockup-brand-display.jpeg",
        alt: "Messiah Sports Brand Display & Card Presentation",
        caption: "In-store retail display card and business card collateral mockup",
        aspectRatio: "landscape",
      },
      {
        url: "/images/projects/messiah-sports/mockup-socks-studio.jpeg",
        alt: "Messiah Sports Studio Staging Mockup",
        caption: "Studio product photography staging showcasing high-friction sole pads",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/messiah-sports/mockup-apparel-staging.jpeg",
        alt: "Messiah Sports Athletic Apparel Staging Mockup",
        caption: "Compression fabric texture and chest badge placement mockup",
        aspectRatio: "square",
      },
    ],
    videos: [
      {
        url: "/videos/messiah-sports.mp4",
        poster: "/images/projects/messiah-sports/socks-campaign.png",
        title: "Messiah Sports — High-Performance Product Commercial",
        category: "Product Commercial Video",
        type: "ai-video",
      },
    ],
  },
  {
    slug: "messiah-sports-football-boots",
    title: "Messiah Sports — Pro Elite Football Boots Poster",
    category: "Posters & Advertising Design",
    secondaryCategories: ["Sports Branding — Messiah Sports", "Branding & Logo Design"],
    year: "2024",
    client: "Messiah Sports",
    location: "Dindigul, India",
    cover: "/images/projects/messiah-sports/football-boots.png",
    coverAspect: "poster",
    featured: true,
    featuredOrder: 3,
    description:
      "A dramatic, cinematic advertising poster showcasing pro-tier football studs designed to communicate explosive acceleration, aggressive traction, and competition dominance.",
    brief:
      "Craft an international-grade sports advertisement for Messiah's flagship football studs. The creative needed to rival global athletic campaigns from Nike and Adidas while positioning Messiah as a high-performance athletic innovator.",
    approach:
      "Staged the iridescent neon-lime football boots on a wet, light-reflective stadium stone base under moody spotlighting. Layered technical specification callouts—molded stud configuration, textured forefoot touch zone, and reinforced heel counter—into an editorial magazine layout.",
    deliverables: [
      "Hero Advertising Campaign Poster",
      "Dynamic Light Beam & Shadow Compositing",
      "Feature Specification Callout Hierarchy",
      "Athletic Monogram Integration",
      "Showroom Poster & Retail Display Artwork",
    ],
    tools: ["Adobe Photoshop", "Light Compositing", "Typography Systems"],
    images: [
      {
        url: "/images/projects/messiah-sports/football-boots.png",
        alt: "Messiah Sports Football Boots Pro Advertising Poster",
        caption: "Cinematic key visual with atmospheric lighting and product feature callouts",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/messiah-sports/brand-identity.png",
        alt: "Messiah Sports Angular Logo Mark",
        caption: "Primary athletic brand wordmark",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/messiah-sports/stockings-board.png",
        alt: "Messiah Sports Product Lineup",
        caption: "Cross-product collateral alignment",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    slug: "ramyas-jeweller-diwali-savings",
    title: "Ramyas Jeweller — Festive Diwali Gold Savings System & 4-Page Passbook",
    category: "Digital & Offset Printing",
    secondaryCategories: ["Jewellery Branding — Ramyas Jeweller", "Posters & Advertising Design"],
    year: "2026",
    client: "Ramyas Jeweller",
    location: "Dindigul, Tamil Nadu",
    cover: "/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png",
    coverAspect: "poster",
    featured: true,
    featuredOrder: 4,
    description:
      "A complete 4-page promotional passbook, master CMYK print PDF, and campaign collateral system for an annual festive 12-month gold and silver micro-savings scheme.",
    brief:
      "Design an authentic, trust-building collateral package for Ramyas Jeweller's marquee festival savings scheme. The design needed to guide retail customers through registration, monthly installment tracking, digital payments, and year-end bonus redemptions.",
    approach:
      "Combined sacred festive iconography—traditional brass diyas, temple bells, and gold bangles—with clean tabular ledger architecture. Page 1 establishes emotional festive warmth; Page 2 facilitates digital UPI onboarding; Page 3 provides monthly ledger tables; and Page 4 details the ₹13,000 maturity reward value.",
    deliverables: [
      "4-Page Savings Passbook & Brochure Spread",
      "Promotional Festival Poster (தீபாவளி சிறுசேமிப்பு திட்டம்)",
      "Print-Ready CMYK Master PDF (Scheme Final.pdf)",
      "Customer Ledger Table Layout",
      "UPI & WhatsApp Payment Flow Graphic",
      "Tamil Typography & Golden Filigree Borders",
      "Promotional Video Commercials",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Tamil Typography Systems", "Prepress CMYK"],
    images: [
      {
        url: "/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png",
        alt: "Ramyas Jeweller 4-Page Diwali Savings Scheme Brochure and Passbook",
        caption: "Complete 4-page spread: Cover, Customer Details & QR Onboarding, 12-Month Table, and Maturity Benefits",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/savings-scheme-page-1.png",
        alt: "Ramyas Savings Scheme Cover Page",
        caption: "Page 01: Festive cover with 3D sculpted gold insignia and auspicious diwali motifs",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/savings-scheme-page-2.png",
        alt: "Ramyas Savings Scheme Customer Details & UPI Onboarding",
        caption: "Page 02: Passbook holder profile fields, QR code for GPay/PhonePe, and WhatsApp joins",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/savings-scheme-page-3.png",
        alt: "Ramyas Savings Scheme 12-Month Ledger Table",
        caption: "Page 03: Structured installment payment ledger with date, amount, and cashier stamp columns",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/savings-scheme-page-4.png",
        alt: "Ramyas Savings Scheme Maturity Schedule & Bonus Terms",
        caption: "Page 04: Gold bonus reward calculation table, rules, and showroom contact directory",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
        alt: "Ramyas Jeweller Diwali Savings Promotional Poster in Tamil",
        caption: "Festival launch poster highlighting registration window, store visit vs. WhatsApp joining, and digital payment options",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/play-store-header.png",
        alt: "Ramyas Jeweller Play Store Digital Header Banner",
        caption: "Digital app store banner supporting mobile onboarding and payment gateway",
        aspectRatio: "landscape",
      },
      {
        url: "/images/projects/ramyas-jeweller/brand-identity-gold.png",
        alt: "Ramyas Jeweller Master Golden Brand Identity",
        caption: "Official Tamil typography with 3D sculpted golden RJ monogram, sacred vel, and peacock insignia",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/ramyas-jeweller/monogram-vel.png",
        alt: "Ramyas Jeweller Traditional Monogram with Vel Motif",
        caption: "Ornate traditional brand seal featuring divine Vel iconography for heirloom packaging",
        aspectRatio: "square",
      },
    ],
    videos: [
      {
        url: "/videos/ramyas-logo-motion.mov",
        poster: "/images/projects/ramyas-jeweller/brand-identity-gold.png",
        title: "Ramyas Jeweller — 3D Gold Logo Motion Graphic",
        category: "Brand Motion Graphic",
        type: "motion-graphic",
      },
      {
        url: "/videos/ramyas-diwali-explainer.mp4",
        poster: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
        title: "Ramyas Jeweller — Diwali Savings Scheme Explainer",
        category: "Promotional Explainer Video",
        type: "explainer",
      },
      {
        url: "/videos/ramyas-savings-scheme.mp4",
        poster: "/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png",
        title: "Ramyas Jeweller — Savings Scheme Video Commercial",
        category: "AI Advertisement Video",
        type: "ai-video",
      },
      {
        url: "/videos/ramyas-diwali-wishing.mov",
        poster: "/images/projects/ramyas-jeweller/ad-campaign-1.jpeg",
        title: "Ramyas Jeweller — Diwali Festive Wishes Commercial",
        category: "Festive Video Greeting",
        type: "greeting",
      },
      {
        url: "/videos/ramyas-app-installation.mp4",
        poster: "/images/projects/ramyas-jeweller/play-store-header.png",
        title: "Ramyas Jeweller — Mobile App Walkthrough & Install Guide",
        category: "App Walkthrough Video",
        type: "walkthrough",
      },
    ],
  },
  {
    slug: "ramyas-jeweller-gold-silver-rates",
    title: "Ramyas Jeweller — Daily Market Rate Bulletin System",
    category: "Business & Promotional Materials",
    secondaryCategories: ["Jewellery Branding — Ramyas Jeweller", "Posters & Advertising Design"],
    year: "2024",
    client: "Ramyas Jeweller",
    location: "Dindigul, Tamil Nadu",
    cover: "/images/projects/ramyas-jeweller/gold-silver-rate-july7.jpeg",
    coverAspect: "poster",
    featured: true,
    featuredOrder: 5,
    description:
      "A high-velocity, template-driven social media creative system communicating live 22K/24K gold and silver market prices to over 10,000 daily retail customers.",
    brief:
      "Jewellery buyers make purchase decisions based on daily market movements. Ramyas Jeweller required an agile social publishing system that delivered crystal-clear gold and silver rates every morning with zero visual degradation.",
    approach:
      "Engineered a modular poster template featuring deep crimson and rich royal navy backdrops accented by brushed 24K gold borders. Clear typographic hierarchy differentiates 1 Gram vs. 1 Sovereign (8 Gram) rates, with QR codes and phone links directly in the footer.",
    deliverables: [
      "Daily Bullion Rate Poster System",
      "Multi-Date Template Variations (July 7, July 8, Sept 21)",
      "High-Contrast Value Display Grid",
      "Tamil/English Dual-Language Typography",
      "Social Feed (4:5) & WhatsApp Status (9:16) Export Presets",
    ],
    tools: ["Adobe Illustrator", "Photoshop Automation", "Social Template Engine"],
    images: [
      {
        url: "/images/projects/ramyas-jeweller/gold-silver-rate-july7.jpeg",
        alt: "Ramyas Jeweller Gold & Silver Rate Daily Poster — July 7 Edition",
        caption: "July 7 rate bulletin with 1 Gram and 8 Gram rates and contact ribbons",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/gold-silver-rate-july8.jpeg",
        alt: "Ramyas Jeweller Gold & Silver Rate Daily Poster — July 8 Edition",
        caption: "July 8 rate bulletin illustrating quick typographic adjustments for fluctuating bullion markets",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/gold-silver-rate-sep21.jpeg",
        alt: "Ramyas Jeweller Gold & Silver Rate Daily Poster — September 21 Edition",
        caption: "September 21 edition with refined gold filigree framing and updated pricing tables",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/ramyas-jeweller/brand-identity-gold.png",
        alt: "Ramyas Jeweller Sculpted Gold Logo",
        caption: "Master vector identity anchoring every daily rate broadcast",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "swanzaa-couture-identity",
    title: "Swanzaa — Luxury Fashion Couture Monogram",
    category: "Branding & Logo Design",
    secondaryCategories: ["Brand Identity & Logo Design"],
    year: "2025",
    client: "Swanzaa Atelier",
    location: "Chennai, India",
    cover: "/images/projects/swanzaa/emblem-dark.png",
    coverAspect: "square",
    featured: true,
    featuredOrder: 6,
    description:
      "A refined geometric swan monogram and wordmark engineered for an avant-garde apparel label and luxury bespoke boutique.",
    brief:
      "Swanzaa required a sophisticated, timeless emblem representing elegance, grace, and modern architectural tailoring. The mark had to scale cleanly across microscopic garment tags, embroidered chest patches, and grand storefront signs.",
    approach:
      "Constructed a dual-tone origami-style swan silhouette using precision golden-ratio arcs. The stylized 'S' spine flows into feathered geometric facets, paired with an ultra-spaced tracking serif wordmark for maximum high-fashion stature.",
    deliverables: [
      "Geometric Swan Monogram (Light & Dark)",
      "High-Fashion Logotype Pairing",
      "Garment Tag & Woven Label Guidelines",
      "Embossed Stationery & Box Packaging Specs",
      "Vector Master File Suite",
    ],
    tools: ["Adobe Illustrator", "Grid Geometry", "Vector Craft"],
    images: [
      {
        url: "/images/projects/swanzaa/emblem-dark.png",
        alt: "Swanzaa Origami Swan Emblem — Dark Mode",
        caption: "Vector geometric swan emblem on deep obsidian black canvas",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/swanzaa/emblem-white.png",
        alt: "Swanzaa Origami Swan Emblem — Light Mode",
        caption: "Pure white vector emblem execution demonstrating contrast and adaptability",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "lensora-visual-identity",
    title: "Lensora — Optometry & Eyewear Studio Identity",
    category: "Branding & Logo Design",
    secondaryCategories: ["Brand Identity & Logo Design"],
    year: "2025",
    client: "Lensora Optical",
    location: "Bangalore, India",
    cover: "/images/projects/lensora/logo-dark.png",
    coverAspect: "square",
    featured: true,
    featuredOrder: 7,
    description:
      "A minimalist optical brand identity fusing optical lens curvature with the letterform 'L' for a boutique designer eyewear showroom.",
    brief:
      "Lensora sought an identity that conveyed medical precision and high-end fashion eyewear. The brand needed to stand out from clinical optometry clinics while retaining clinical credibility.",
    approach:
      "Engineered an interlocking concentric arc mark evoking optical refraction, glass curves, and focus rings. Paired with a bespoke geometric sans-serif that exudes contemporary Scandinavian clarity.",
    deliverables: [
      "Refraction Arc Brandmark",
      "Light and Dark Identity Assets",
      "Eyewear Case Debossing Specs",
      "Prescription Card & Envelope Layouts",
      "Responsive Digital Icon Suite",
    ],
    tools: ["Adobe Illustrator", "Optical Geometry", "Figma"],
    images: [
      {
        url: "/images/projects/lensora/logo-dark.png",
        alt: "Lensora Refraction Arc Brandmark on Dark Surface",
        caption: "Interlocking optical arcs on dark textured background",
        aspectRatio: "square",
      },
      {
        url: "/images/projects/lensora/logo-light.png",
        alt: "Lensora Refraction Arc Brandmark on White Canvas",
        caption: "Precision vector logo mark rendered in crisp monochrome",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "blue-waves-fc-crest",
    title: "Blue Waves FC — Football Club Shield Crest",
    category: "Branding & Logo Design",
    secondaryCategories: ["Sports Branding — Messiah Sports", "Brand Identity & Logo Design"],
    year: "2025",
    client: "Blue Waves Football Club",
    location: "Kanyakumari, India",
    cover: "/images/projects/blue-waves-fc/club-crest.png",
    coverAspect: "square",
    featured: false,
    description:
      "An aggressive maritime football crest pairing oceanic tidal power with athletic discipline for a competitive coastal club.",
    brief:
      "Blue Waves FC needed an authentic football crest embodying coastal identity, team camaraderie, and relentless on-pitch energy.",
    approach:
      "Modeled a classical European shield boundary containing sculpted ocean crest waves, an authentic football sphere, and bold collegiate ribbon typography.",
    deliverables: [
      "Club Crest Master Illustration",
      "Jersey Chest Embroidery Master Files",
      "Banner & Stadium Flag Vectors",
      "Monochrome Crest Variant",
    ],
    tools: ["Adobe Illustrator", "Vector Illustration", "Crest Heraldry"],
    images: [
      {
        url: "/images/projects/blue-waves-fc/club-crest.png",
        alt: "Blue Waves FC Official Club Crest",
        caption: "Primary full-color shield crest featuring dynamic tidal swells and classic football insignia",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "kuttyverse-toys-and-launch",
    title: "Kuttyverse — Children's World Brand & Grand Opening Flyer",
    category: "Digital & Offset Printing",
    secondaryCategories: ["Business & Promotional Materials", "Branding & Logo Design"],
    year: "2025",
    client: "Kuttyverse Retail",
    location: "Madurai, India",
    cover: "/images/projects/kuttyverse/grand-opening-invitation.png",
    coverAspect: "poster",
    featured: false,
    description:
      "A vibrant, playful visual identity and promotional grand opening launch flyer for a flagship toy store and children's amusement boutique.",
    brief:
      "Design an enchanting, approachable brand identity and launch invitation flyer for Kuttyverse that excites children and builds trust with parents.",
    approach:
      "Crafted rounded, bouncy custom lettering alongside cheerful character illustrations, celebratory confetti, and festive retail discount bursts.",
    deliverables: [
      "Toy Retail Wordmark & Character Seal",
      "Grand Opening Invitation Flyer & Print Art",
      "Storefront Inauguration Banner Layout",
      "Promotional Gift Voucher & Poster",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Print Preparation"],
    images: [
      {
        url: "/images/projects/kuttyverse/grand-opening-invitation.png",
        alt: "Kuttyverse Grand Opening Invitation Poster",
        caption: "Illustrated launch flyer highlighting store opening date, special gifts, and venue location",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/kuttyverse/brand-logo.png",
        alt: "Kuttyverse Playful Brandmark",
        caption: "Colorful, child-friendly vector logo mark designed for toy packaging and signage",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "pretty-makeover-artistry",
    title: "Pretty Makeover — Luxury Bridal Identity & Ceremonial Card",
    category: "Digital & Offset Printing",
    secondaryCategories: ["Branding & Logo Design", "Business & Promotional Materials"],
    year: "2025",
    client: "Pretty Makeover Artistry",
    location: "Coimbatore, India",
    cover: "/images/projects/pretty-makeover/housewarming-invitation.png",
    coverAspect: "poster",
    featured: false,
    description:
      "An opulent brand mark and traditional ceremonial housewarming invitation system blending luxury salon aesthetics with classical Indian motifs.",
    brief:
      "Create an elegant identity for an upscale bridal makeup studio, as well as a lavish ceremonial invitation for the founder's studio opening.",
    approach:
      "Fused graceful script flourishes with traditional kolam mandalas, marigold garland framing, and metallic bronze accents.",
    deliverables: [
      "Bridal Studio Wordmark & Emblem",
      "Ceremonial Housewarming Invitation Card",
      "Social Media Invitation Suite",
      "Gold Foil & Embossing Specifications",
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Tamil Calligraphy"],
    images: [
      {
        url: "/images/projects/pretty-makeover/housewarming-invitation.png",
        alt: "Pretty Makeover Ceremonial Housewarming Invitation",
        caption: "Traditional festive invitation featuring sacred lamps, auspicious Tamil verses, and ceremonial timings",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/pretty-makeover/brand-logo.png",
        alt: "Pretty Makeover Bridal Beauty Monogram",
        caption: "Sophisticated script brandmark crafted for bridal salon collateral",
        aspectRatio: "square",
      },
    ],
  },
  {
    slug: "cr7-celebration-fan-art",
    title: "Cristiano Ronaldo (CR7) — Kinetic Sports Poster & Wall Art",
    category: "Posters & Advertising Design",
    secondaryCategories: ["Sports Branding — Messiah Sports"],
    year: "2024",
    client: "Commercial Print Art",
    location: "India",
    cover: "/images/projects/football-wallpaper/cr7-celebration-wallpaper.png",
    coverAspect: "poster",
    featured: false,
    description:
      "A vertical mobile wallpaper and kinetic sports poster capturing Cristiano Ronaldo's iconic celebration with stylized stadium lighting and editorial typography.",
    brief:
      "Create an electric, high-energy vertical sports artwork that merges dynamic action photography with magazine-style kinetic typography.",
    approach:
      "Blended high-contrast rim lighting, energetic halftone textures, and large-scale editorial numerals ('07') behind the celebrating silhouette.",
    deliverables: [
      "9:16 High-Resolution Mobile Wallpaper",
      "Vertical Editorial Poster Art",
      "Kinetic Athletic Typography Layout",
      "Stadium Halftone Flare Effects",
    ],
    tools: ["Adobe Photoshop", "Digital Compositing", "Typography"],
    images: [
      {
        url: "/images/projects/football-wallpaper/cr7-celebration-wallpaper.png",
        alt: "Cristiano Ronaldo CR7 Celebration Wallpaper Poster",
        caption: "High-contrast dynamic phone wallpaper with layered typography and stadium backdrop",
        aspectRatio: "poster",
      },
      {
        url: "/images/projects/creative/desktop-wallpaper.png",
        alt: "CR7 Celebration Desktop Wallpaper Artwork",
        caption: "Wide-format stadium desktop wallpaper composition",
        aspectRatio: "landscape",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
}

export const categories: ProjectCategory[] = [
  "All Work",
  "Branding & Logo Design",
  "Posters & Advertising Design",
  "Business & Promotional Materials",
  "Digital & Offset Printing",
  "AI Advertisement Videos",
];
