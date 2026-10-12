"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Compass, 
  ArrowUpRight, 
  Play, 
  Pause, 
  Sparkles, 
  Layers, 
  RotateCcw,
  Sparkle
} from "lucide-react";
import OrbitImages, { OrbitImageItem } from "@/components/OrbitImages";
import HoloCard, { HoloPreset } from "@/components/HoloCard";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface LogoGalleryProps {
  onSelectProject?: (project: Project) => void;
}

interface BrandEntry {
  id: string;
  brandName: string;
  client: string;
  category: string;
  year: string;
  projectSlug: string;
  orbitImage: string;
  orbitBg: string;
  orbitBorder: string;
  tagline: string;
  holoPreset: HoloPreset;
  holoFoilColor: string;
  holoBackImage?: string;
  items: {
    title: string;
    desc: string;
    url: string;
    bg: string;
    tag: string;
  }[];
}

export default function LogoGallery({ onSelectProject }: LogoGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [activeBrandIndex, setActiveBrandIndex] = useState<number | null>(null);

  // All 8 authentic brand identities with real assets from the project
  const brandEntries: BrandEntry[] = [
    {
      id: "thinkloom-studio",
      brandName: "ThinkLoom",
      client: "ThinkLoom Design Studio",
      category: "Studio Identity & Creative Mark",
      year: "2024",
      projectSlug: "thinkloom-studio-identity",
      orbitImage: "/images/raw/Think Loom.png",
      orbitBg: "bg-[#0B0B0D]",
      orbitBorder: "border-neutral-700/80 shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
      tagline: "The authentic ThinkLoom brand mark representing experimental craft & structured thought threads.",
      holoPreset: "bursts",
      holoFoilColor: "#355CFF",
      items: [
        {
          title: "Master Studio Wordmark",
          desc: "The authentic ThinkLoom brand mark representing experimental craft & thought threads",
          url: "/images/raw/Think Loom.png",
          bg: "bg-[#0B0B0D] text-white",
          tag: "Master Brand",
        },
      ],
    },
    {
      id: "messiah-sports",
      brandName: "Messiah Sports",
      client: "Messiah Athletic Apparel",
      category: "Sports Branding",
      year: "2024",
      projectSlug: "messiah-sports-socks",
      orbitImage: "/images/projects/messiah-sports/brand-identity.png",
      orbitBg: "bg-white",
      orbitBorder: "border-neutral-300 shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
      tagline: "High-octane typographic mark and geometric monogram engineered for compression athletic apparel.",
      holoPreset: "shards",
      holoFoilColor: "#E7FF59",
      holoBackImage: "/images/projects/messiah-sports/emblem.png",
      items: [
        {
          title: "Primary Angular Wordmark",
          desc: "High-octane typographic mark with dynamic angled terminals",
          url: "/images/projects/messiah-sports/brand-identity.png",
          bg: "bg-white",
          tag: "Vector Master",
        },
        {
          title: "MS Monogram Shield",
          desc: "Geometric apparel emblem engineered for compression jerseys",
          url: "/images/projects/messiah-sports/emblem.png",
          bg: "bg-neutral-900 text-white",
          tag: "Chest Badge",
        },
      ],
    },
    {
      id: "ramyas-jeweller",
      brandName: "Ramyas Jeweller",
      client: "Ramyas Heritage Gold",
      category: "Jewellery & Luxury Heritage",
      year: "2024",
      projectSlug: "ramyas-jeweller-diwali-savings",
      orbitImage: "/images/projects/ramyas-jeweller/brand-identity-gold.png",
      orbitBg: "bg-[#14080A]",
      orbitBorder: "border-amber-900/60 shadow-[0_8px_24px_rgba(20,8,10,0.35)]",
      tagline: "3D sculpted 24K gold logotype paired with the sacred divine vel motif seal for fine heirloom packaging.",
      holoPreset: "gold",
      holoFoilColor: "#FFD700",
      holoBackImage: "/images/projects/ramyas-jeweller/monogram-vel.png",
      items: [
        {
          title: "Master Golden Identity",
          desc: "3D sculpted 24K gold logotype with traditional Tamil ligature",
          url: "/images/projects/ramyas-jeweller/brand-identity-gold.png",
          bg: "bg-[#14080a] text-amber-200",
          tag: "Royal Seal",
        },
        {
          title: "Traditional Vel Insignia",
          desc: "Divine vel motif vector seal for fine heirloom packaging",
          url: "/images/projects/ramyas-jeweller/monogram-vel.png",
          bg: "bg-white",
          tag: "Packaging Stamp",
        },
      ],
    },
    {
      id: "blue-waves-fc",
      brandName: "Blue Waves FC",
      client: "Blue Waves Football Club",
      category: "Sports Crest & Heraldry",
      year: "2024",
      projectSlug: "blue-waves-fc-crest",
      orbitImage: "/images/projects/blue-waves-fc/club-crest.png",
      orbitBg: "bg-white",
      orbitBorder: "border-blue-200 shadow-[0_8px_24px_rgba(53,92,255,0.12)]",
      tagline: "Coastal maritime football shield symbolizing velocity, tidal power, and team camaraderie.",
      holoPreset: "swirl",
      holoFoilColor: "#355CFF",
      items: [
        {
          title: "Official Match Crest",
          desc: "Coastal maritime football shield symbolizing velocity and unity",
          url: "/images/projects/blue-waves-fc/club-crest.png",
          bg: "bg-white",
          tag: "Official Crest",
        },
      ],
    },
    {
      id: "swanzaa",
      brandName: "Swanzaa",
      client: "Swanzaa Atelier",
      category: "Haute Couture & Fashion",
      year: "2024",
      projectSlug: "swanzaa-couture-identity",
      orbitImage: "/images/projects/swanzaa/emblem-dark.png",
      orbitBg: "bg-[#0A0A0A]",
      orbitBorder: "border-neutral-700 shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
      tagline: "Golden-ratio origami swan silhouette engineered for an avant-garde boutique and luxury atelier.",
      holoPreset: "stars",
      holoFoilColor: "#EDE9FE",
      holoBackImage: "/images/projects/swanzaa/emblem-white.png",
      items: [
        {
          title: "Obsidian Dark Study",
          desc: "Golden-ratio origami swan silhouette on deep black canvas",
          url: "/images/projects/swanzaa/emblem-dark.png",
          bg: "bg-[#0A0A0A] text-white",
          tag: "Dark Spec",
        },
        {
          title: "Pure White Study",
          desc: "High-contrast vector execution demonstrating adaptability",
          url: "/images/projects/swanzaa/emblem-white.png",
          bg: "bg-[#FAFAF8]",
          tag: "Light Spec",
        },
      ],
    },
    {
      id: "lensora",
      brandName: "Lensora",
      client: "Lensora Optical",
      category: "Optometry & Studio Identity",
      year: "2024",
      projectSlug: "lensora-visual-identity",
      orbitImage: "/images/projects/lensora/logo-dark.png",
      orbitBg: "bg-[#111113]",
      orbitBorder: "border-neutral-700 shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
      tagline: "Interlocking concentric refraction arcs evoking optical precision, glass curves, and Scandinavian clarity.",
      holoPreset: "swirl",
      holoFoilColor: "#CBD5E1",
      holoBackImage: "/images/projects/lensora/logo-light.png",
      items: [
        {
          title: "Concentric Arc Mark (Dark)",
          desc: "Interlocking optical glass refraction curvature symbol",
          url: "/images/projects/lensora/logo-dark.png",
          bg: "bg-[#111111] text-white",
          tag: "Dark Studio",
        },
        {
          title: "Concentric Arc Mark (Light)",
          desc: "Vector precision icon system on crisp white paper",
          url: "/images/projects/lensora/logo-light.png",
          bg: "bg-white",
          tag: "Light Studio",
        },
      ],
    },
    {
      id: "pretty-makeover",
      brandName: "Pretty Makeover Artistry",
      client: "Pretty Makeover Studio",
      category: "Bridal Calligraphy & Beauty",
      year: "2024",
      projectSlug: "pretty-makeover-artistry",
      orbitImage: "/images/projects/pretty-makeover/brand-logo.png",
      orbitBg: "bg-[#070707]",
      orbitBorder: "border-amber-900/50 shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
      tagline: "Opulent calligraphic flourish brandmark paired with traditional bridal salon instruments.",
      holoPreset: "gold",
      holoFoilColor: "#F59E0B",
      items: [
        {
          title: "Master Bridal Identity",
          desc: "Calligraphic flourish typography paired with beauty salon instruments",
          url: "/images/projects/pretty-makeover/brand-logo.png",
          bg: "bg-[#070707] text-amber-200",
          tag: "Bridal Insignia",
        },
      ],
    },
    {
      id: "kuttyverse",
      brandName: "Kuttyverse",
      client: "Kuttyverse Retail & Toys",
      category: "Children's Retail & Toys",
      year: "2024",
      projectSlug: "kuttyverse-toys-and-launch",
      orbitImage: "/images/projects/kuttyverse/brand-logo.png",
      orbitBg: "bg-[#0C0B0A]",
      orbitBorder: "border-neutral-700 shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
      tagline: "Enchanting children's toy world silhouette and bouncy custom lettering under glowing celestial moonlight.",
      holoPreset: "glitter",
      holoFoilColor: "#FDE047",
      items: [
        {
          title: "Toy Boutique Emblem",
          desc: "Vibrant, friendly character seal and wordmark for children's retail",
          url: "/images/projects/kuttyverse/brand-logo.png",
          bg: "bg-[#0C0B0A] text-amber-300",
          tag: "Retail Mark",
        },
      ],
    },
  ];

  const handleOpen = (projectSlug: string) => {
    const found = projects.find((p) => p.slug === projectSlug);
    if (found && onSelectProject) {
      onSelectProject(found);
    }
  };

  // Convert brand entries into OrbitImageItems for OrbitImages component
  const orbitItems: OrbitImageItem[] = brandEntries.map((brand) => ({
    id: brand.id,
    src: brand.orbitImage,
    name: brand.brandName,
    subtitle: brand.client,
    category: brand.category,
    slug: brand.projectSlug,
    bg: brand.orbitBg,
    ariaLabel: `Explore ${brand.brandName} brand identity case study`,
    onClick: () => handleOpen(brand.projectSlug),
  }));

  const activeBrand = activeBrandIndex !== null ? brandEntries[activeBrandIndex] : null;

  return (
    <section 
      id="logos" 
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-neutral-300 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Consistent with portfolio art direction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b-2 border-neutral-900 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-accent-cobalt mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>SELECTED IDENTITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-950 tracking-tighter uppercase">
              LOGOS & BRANDING
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:text-right">
            <p className="max-w-md text-sm sm:text-base text-neutral-600 font-medium leading-relaxed">
              Distinctive identities. Thoughtful design. Brands built to be remembered.
            </p>
          </div>
        </div>

        {/* Orbit Interactive Stage */}
        <div className="relative mb-16 sm:mb-20 bg-[#F9F9F6] border border-neutral-300 rounded-none shadow-[8px_8px_0px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Stage Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b border-neutral-200 bg-white/90 backdrop-blur-xs text-[11px] sm:text-xs font-mono gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? "bg-neutral-400" : "bg-accent-coral"} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? "bg-neutral-500" : "bg-accent-coral"}`} />
              </span>
              <span className="font-bold tracking-wider text-neutral-800 uppercase text-[10px] sm:text-xs">
                {isPaused ? "ORBIT PAUSED" : "ORBIT ACTIVE // 30S CYCLE"}
              </span>
              <span className="hidden md:inline-block text-neutral-400">|</span>
              <span className="hidden md:inline-block text-neutral-500">
                8 IDENTITIES DISTRIBUTED
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <span className="text-accent-cobalt font-bold tracking-wider uppercase text-[10px] sm:text-xs">
                EXPLORE THE BRAND UNIVERSE ↗
              </span>
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume orbit animation" : "Pause orbit animation"}
                className="p-1 sm:p-1.5 rounded-none border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-900 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span className="hidden sm:inline">RESUME</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 fill-current" />
                    <span className="hidden sm:inline">PAUSE</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Central Orbit Stage Canvas */}
          <div className="relative w-full max-w-full overflow-hidden py-6 sm:py-12 px-2 flex items-center justify-center min-h-[340px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* React Bits OrbitImages Component */}
            <OrbitImages
              items={orbitItems}
              shape="ellipse"
              radiusX={340}
              radiusY={100}
              rotation={-8}
              duration={30}
              itemSize={96}
              responsive={true}
              aspectRatio="2.2 / 1"
              direction="normal"
              fill={true}
              showPath={true}
              pathColor="rgba(23, 23, 23, 0.14)"
              pathWidth={1.5}
              pathStrokeDasharray="5 5"
              paused={isPaused}
              pauseOnHover={true}
              ariaLabel="Interactive Orbiting Brand Identities"
              centerContent={
                <div className="pointer-events-auto">
                  {/* Mobile Compact Hub: Minimalist Pill/Circle that doesn't obstruct orbits */}
                  <div className="flex sm:hidden flex-col items-center justify-center p-2 rounded-full w-12 h-12 bg-white/95 border border-neutral-300 shadow-[4px_4px_0px_rgba(0,0,0,0.06)] backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-accent-coral" />
                  </div>

                  {/* Tablet & Desktop: Rich Interactive Preview Hub */}
                  <div className="hidden sm:flex flex-col items-center justify-center text-center p-3 sm:p-5 max-w-[240px] sm:max-w-[280px] bg-white/95 border border-neutral-300 shadow-[6px_6px_0px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300">
                    {activeBrand ? (
                      <motion.div
                        key={activeBrand.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-accent-coral mb-1">
                          {activeBrand.category}
                        </span>
                        <h4 className="font-sans font-black text-base sm:text-lg text-neutral-950 uppercase tracking-tight">
                          {activeBrand.brandName}
                        </h4>
                        <p className="text-[11px] text-neutral-500 font-medium line-clamp-1 mt-0.5">
                          {activeBrand.client}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleOpen(activeBrand.projectSlug)}
                          className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold bg-neutral-950 text-white hover:bg-accent-cobalt transition-colors"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center mb-2 bg-[#FAFAF8]">
                          <Sparkles className="w-3.5 h-3.5 text-accent-coral" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-500">
                          BRAND UNIVERSE
                        </span>
                        <p className="text-xs font-sans font-black text-neutral-900 uppercase mt-0.5 tracking-tight">
                          8 CURATED IDENTITIES
                        </p>
                        <span className="text-[9px] font-mono text-neutral-400 mt-1">
                          HOVER TO PAUSE • CLICK EMBLEM
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              }
              renderItem={(entry, index) => {
                const brand = brandEntries[index];
                if (!brand) return null;

                const isHovered = activeBrandIndex === index;

                return (
                  <div
                    onMouseEnter={() => setActiveBrandIndex(index)}
                    onMouseLeave={() => setActiveBrandIndex(null)}
                    className="relative w-full h-full flex items-center justify-center group"
                  >
                    {/* Emblem Badge Container */}
                    <div
                      className={`relative w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 ${brand.orbitBg} ${brand.orbitBorder} ${
                        isHovered 
                          ? "scale-115 ring-2 ring-accent-coral shadow-[0_16px_36px_rgba(0,0,0,0.35)] -translate-y-1" 
                          : "hover:scale-105"
                      }`}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={brand.orbitImage}
                          alt={brand.brandName}
                          fill
                          className="object-contain p-1 filter drop-shadow-sm transition-transform duration-300"
                          sizes="110px"
                        />
                      </div>

                      {/* Micro Pill Tag on Badge */}
                      <span className="absolute -bottom-2 px-1.5 py-0.2 bg-neutral-950 text-white border border-neutral-700 text-[8px] font-mono font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {brand.brandName}
                      </span>
                    </div>
                  </div>
                );
              }}
            />
          </div>

          {/* Accessible Discovery Ribbon: Interactive Pills */}
          <div className="border-t border-neutral-200 bg-white/80 p-3 sm:p-4 w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full max-w-full">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest shrink-0 mr-1">
                SELECT IDENTITY:
              </span>
              {brandEntries.map((brand, bIdx) => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => {
                    setActiveBrandIndex(bIdx);
                    handleOpen(brand.projectSlug);
                  }}
                  onMouseEnter={() => setActiveBrandIndex(bIdx)}
                  onMouseLeave={() => setActiveBrandIndex(null)}
                  className={`shrink-0 px-3 py-1.5 text-xs font-mono font-bold border transition-all duration-200 flex items-center gap-1.5 ${
                    activeBrandIndex === bIdx
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-[3px_3px_0px_#FF5A45]"
                      : "bg-[#FAFAF7] text-neutral-700 border-neutral-300 hover:border-neutral-900 hover:bg-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
                  <span>{brand.brandName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* REDESIGNED DETAILED EMBLEM ARCHIVE WITH REACT BITS HOLOCARD */}
        {/* ======================================================== */}
        <section
          id="detailed-emblem-archive"
          aria-label="BRAND IDENTITY / ARCHIVE 01"
          className="relative -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-[#0B0B0E] text-white border-t-2 border-neutral-900 mt-16 sm:mt-24 overflow-hidden"
        >
          {/* Subtle Architectural Charcoal Grid Pattern */}
          <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Archive Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-neutral-800 gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-accent-coral mb-2">
                  <Sparkle className="w-3.5 h-3.5 fill-current" />
                  <span>BRAND IDENTITY / ARCHIVE 01</span>
                </div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  DETAILED EMBLEM ARCHIVE
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="max-w-md text-sm sm:text-base text-neutral-400 font-medium leading-relaxed">
                  A collection of visual identities, built with purpose and crafted to be remembered.
                </p>
              </div>
            </div>

            {/* Interactive Holographic Foil Gallery */}
            <div className="space-y-8 sm:space-y-12">
              {/* Marquee Duo Showcase: ThinkLoom & Messiah Sports */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {brandEntries.slice(0, 2).map((brand, idx) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#121217] border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,0.6)] hover:border-neutral-600 transition-all duration-300 group"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                      <div>
                        <span className="font-mono text-[10px] text-accent-coral uppercase tracking-widest font-bold">
                          {brand.category}
                        </span>
                        <h4 className="font-sans text-2xl font-black text-white tracking-tight mt-0.5">
                          {brand.brandName}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        {brand.holoBackImage && (
                          <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[9px] font-mono tracking-wider uppercase font-bold flex items-center gap-1">
                            <RotateCcw className="w-2.5 h-2.5" />
                            <span>DUAL STUDY</span>
                          </span>
                        )}
                        <span className="font-mono text-xs text-neutral-500 font-bold">
                          {brand.year}
                        </span>
                      </div>
                    </div>

                    {/* HoloCard Centered Stage */}
                    <div className="my-4 py-6 px-4 bg-[#08080A] border border-neutral-900/80 rounded-none flex flex-col items-center justify-center relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />
                      
                      <div className="relative z-10 flex items-center justify-center w-full">
                        <HoloCard
                          image={brand.orbitImage}
                          backImage={brand.holoBackImage}
                          alt={`${brand.brandName} Holographic Emblem`}
                          preset={brand.holoPreset}
                          intensity={0.35}
                          edgeSparkle={0.45}
                          glare={0.3}
                          tiltMax={10}
                          hoverScale={1.03}
                          idle={true}
                          shadow={true}
                          radius={12}
                          foilColor={brand.holoFoilColor}
                          objectFit="contain"
                          width={260}
                          onClick={brand.holoBackImage ? undefined : () => handleOpen(brand.projectSlug)}
                        />
                      </div>

                      {brand.holoBackImage ? (
                        <p className="mt-4 text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                          <RotateCcw className="w-3 h-3 text-accent-coral" />
                          <span>CLICK CARD TO FLIP STUDY ↻</span>
                        </p>
                      ) : (
                        <p className="mt-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                          TILT TO REVEAL SPECULAR SHIMMER
                        </p>
                      )}
                    </div>

                    {/* Description and Trigger */}
                    <div className="pt-4 border-t border-neutral-800">
                      <p className="text-sm text-neutral-300 font-medium leading-relaxed mb-4">
                        {brand.tagline}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleOpen(brand.projectSlug)}
                        className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-white text-white hover:text-neutral-950 border border-neutral-700 hover:border-white font-mono text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn"
                      >
                        <span>VIEW FULL CASE STUDY & ASSETS</span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/btn:text-neutral-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trio Showcase: Ramyas Jeweller, Blue Waves FC, Swanzaa */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {brandEntries.slice(2, 5).map((brand, idx) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#121217] border border-neutral-800 p-6 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:border-neutral-600 transition-all duration-300 group"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                      <div>
                        <span className="font-mono text-[10px] text-accent-coral uppercase tracking-widest font-bold">
                          {brand.category}
                        </span>
                        <h4 className="font-sans text-xl font-black text-white tracking-tight mt-0.5">
                          {brand.brandName}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {brand.holoBackImage && (
                          <span className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[8px] font-mono tracking-wider uppercase font-bold flex items-center gap-1">
                            <RotateCcw className="w-2.5 h-2.5" />
                            <span>FLIP</span>
                          </span>
                        )}
                        <span className="font-mono text-xs text-neutral-500 font-bold">
                          {brand.year}
                        </span>
                      </div>
                    </div>

                    {/* HoloCard Stage */}
                    <div className="my-3 py-5 px-3 bg-[#08080A] border border-neutral-900 rounded-none flex flex-col items-center justify-center relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                      <HoloCard
                        image={brand.orbitImage}
                        backImage={brand.holoBackImage}
                        alt={`${brand.brandName} Holographic Emblem`}
                        preset={brand.holoPreset}
                        intensity={0.35}
                        edgeSparkle={0.45}
                        glare={0.3}
                        tiltMax={10}
                        hoverScale={1.03}
                        idle={true}
                        shadow={true}
                        radius={12}
                        foilColor={brand.holoFoilColor}
                        objectFit="contain"
                        width={240}
                        onClick={brand.holoBackImage ? undefined : () => handleOpen(brand.projectSlug)}
                      />

                      {brand.holoBackImage ? (
                        <p className="mt-3 text-[9px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                          <RotateCcw className="w-2.5 h-2.5 text-accent-coral" />
                          <span>TAP TO FLIP DUAL STUDY</span>
                        </p>
                      ) : (
                        <p className="mt-3 text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                          INTERACTIVE FOIL
                        </p>
                      )}
                    </div>

                    {/* Description and Trigger */}
                    <div className="pt-3 border-t border-neutral-800">
                      <p className="text-xs text-neutral-400 font-medium leading-relaxed mb-3 line-clamp-2">
                        {brand.tagline}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleOpen(brand.projectSlug)}
                        className="w-full py-2 px-3 bg-neutral-900 hover:bg-white text-white hover:text-neutral-950 border border-neutral-700 hover:border-white font-mono text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-neutral-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trio Showcase: Lensora, Pretty Makeover, Kuttyverse */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {brandEntries.slice(5, 8).map((brand, idx) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#121217] border border-neutral-800 p-6 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:border-neutral-600 transition-all duration-300 group"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                      <div>
                        <span className="font-mono text-[10px] text-accent-coral uppercase tracking-widest font-bold">
                          {brand.category}
                        </span>
                        <h4 className="font-sans text-xl font-black text-white tracking-tight mt-0.5">
                          {brand.brandName}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {brand.holoBackImage && (
                          <span className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[8px] font-mono tracking-wider uppercase font-bold flex items-center gap-1">
                            <RotateCcw className="w-2.5 h-2.5" />
                            <span>FLIP</span>
                          </span>
                        )}
                        <span className="font-mono text-xs text-neutral-500 font-bold">
                          {brand.year}
                        </span>
                      </div>
                    </div>

                    {/* HoloCard Stage */}
                    <div className="my-3 py-5 px-3 bg-[#08080A] border border-neutral-900 rounded-none flex flex-col items-center justify-center relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                      <HoloCard
                        image={brand.orbitImage}
                        backImage={brand.holoBackImage}
                        alt={`${brand.brandName} Holographic Emblem`}
                        preset={brand.holoPreset}
                        intensity={0.35}
                        edgeSparkle={0.45}
                        glare={0.3}
                        tiltMax={10}
                        hoverScale={1.03}
                        idle={true}
                        shadow={true}
                        radius={12}
                        foilColor={brand.holoFoilColor}
                        objectFit="contain"
                        width={240}
                        onClick={brand.holoBackImage ? undefined : () => handleOpen(brand.projectSlug)}
                      />

                      {brand.holoBackImage ? (
                        <p className="mt-3 text-[9px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                          <RotateCcw className="w-2.5 h-2.5 text-accent-coral" />
                          <span>TAP TO FLIP DUAL STUDY</span>
                        </p>
                      ) : (
                        <p className="mt-3 text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                          INTERACTIVE FOIL
                        </p>
                      )}
                    </div>

                    {/* Description and Trigger */}
                    <div className="pt-3 border-t border-neutral-800">
                      <p className="text-xs text-neutral-400 font-medium leading-relaxed mb-3 line-clamp-2">
                        {brand.tagline}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleOpen(brand.projectSlug)}
                        className="w-full py-2 px-3 bg-neutral-900 hover:bg-white text-white hover:text-neutral-950 border border-neutral-700 hover:border-white font-mono text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-neutral-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
