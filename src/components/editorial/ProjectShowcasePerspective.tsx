"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface ProjectShowcasePerspectiveProps {
  onSelectProject?: (project: Project) => void;
}

export interface PerspectiveCardData {
  number: string;
  brand: string;
  client: string;
  category: string;
  year: string;
  slug: string;
  image: string;
  badge: string;
  description: string;
  tags: string[];
}

export const SHOWCASE_PROJECTS: PerspectiveCardData[] = [
  {
    number: "01",
    brand: "Messiah Sports",
    client: "Messiah Athletics",
    category: "Athletic Apparel & Packaging System",
    year: "2026",
    slug: "messiah-sports-socks",
    image: "/images/projects/messiah-sports/socks-campaign.png",
    badge: "HERO COMMERCIAL CAMPAIGN",
    description: "High-octane typographic mark, dynamic angled terminals, and tactile packaging designed for anti-slip performance stockings.",
    tags: ["Brand Identity", "Packaging Design", "Commercial Campaign"],
  },
  {
    number: "02",
    brand: "Ramyas Jeweller",
    client: "Ramyas Jeweller",
    category: "Retail Festive Campaign & Prepress Passbook",
    year: "2026",
    slug: "ramyas-jeweller-diwali-savings",
    image: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
    badge: "OFFSET CMYK PRODUCTION",
    description: "Bespoke Tamil typography layout celebrating traditional gold micro-savings, complete with 4-page offset passbooks.",
    tags: ["Prepress Production", "Tamil Typography", "Savings Ledger"],
  },
  {
    number: "03",
    brand: "CR7 Iconic Celebration",
    client: "Commercial Print Art",
    category: "Commercial Stadium Wall Art Graphic",
    year: "2024",
    slug: "cr7-celebration-fan-art",
    image: "/images/projects/football-wallpaper/cr7-celebration-wallpaper.png",
    badge: "ULTRA-WIDE STADIUM ART",
    description: "Kinetic stadium atmosphere illustration capturing the iconic celebration with crowd spotlights and motion streaks.",
    tags: ["Sports Illustration", "Wall Mural Art", "Large Format"],
  },
  {
    number: "04",
    brand: "Messiah Pro Elite Boots",
    client: "Messiah Athletics",
    category: "Footwear Advertising & Technical Staging",
    year: "2024",
    slug: "messiah-sports-football-boots",
    image: "/images/projects/messiah-sports/football-boots.png",
    badge: "CINEMATIC FOOTWEAR SPEC",
    description: "Cinematic athletic footwear campaign staged on wet reflective stadium stone under moody spotlights.",
    tags: ["Footwear Staging", "Traction Geometry", "Lighting Direction"],
  },
  {
    number: "05",
    brand: "ThinkLoom Studio",
    client: "ThinkLoom Studio",
    category: "Brand Identity & Production System",
    year: "2025",
    slug: "thinkloom-studio-identity",
    image: "/images/brand/thinkloom-printing-light.png",
    badge: "STUDIO CORE IDENTITY",
    description: "The official brand identity for ThinkLoom uniting graphic design, digital & offset multicolour printing.",
    tags: ["Geometric Insignia", "Brand Guidelines", "Prepress Calibration"],
  },
  {
    number: "06",
    brand: "Kuttyverse Retail",
    client: "Kuttyverse Retail & Toys",
    category: "Children's Retail Brand & Grand Opening Flyer",
    year: "2025",
    slug: "kuttyverse-toys-and-launch",
    image: "/images/projects/kuttyverse/grand-opening-invitation.png",
    badge: "RETAIL OFFSET PROMO",
    description: "Full-bleed offset promotional flyer with whimsical children's toy store character mascot and retail launch discount tokens.",
    tags: ["Retail Flyers", "Character Branding", "Offset Press"],
  },
  {
    number: "07",
    brand: "Swanzaa Couture",
    client: "Swanzaa Atelier",
    category: "Haute Couture & Luxury Fashion Identity",
    year: "2025",
    slug: "swanzaa-couture-identity",
    image: "/images/projects/swanzaa/emblem-dark.png",
    badge: "LUXURY MONOGRAM",
    description: "Golden-ratio origami swan silhouette engineered for an avant-garde boutique and luxury atelier.",
    tags: ["Origami Vector", "Foil Stamping", "Monogram Mark"],
  },
  {
    number: "08",
    brand: "Blue Waves FC",
    client: "Blue Waves Football Club",
    category: "Sports Crest & Maritime Heraldry",
    year: "2025",
    slug: "blue-waves-fc-crest",
    image: "/images/projects/blue-waves-fc/club-crest.png",
    badge: "MARITIME CLUB CREST",
    description: "Coastal maritime football shield symbolizing velocity, tidal power, and team camaraderie.",
    tags: ["Club Crest", "Sports Heraldry", "Matchday Identity"],
  },
];

export default function ProjectShowcasePerspective({ onSelectProject }: ProjectShowcasePerspectiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);

  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Drag tracking refs
  const dragStartX = useRef(0);
  const currentDrag = useRef(0);
  const isDragThresholdPassed = useRef(false);

  // Responsive window measurement
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive perspective and spacing calculations
  const getSpacing = useCallback(() => {
    if (viewportWidth >= 1440) return { spacingX: 250, spacingY: 20, spacingZ: 70, baseRotateY: -22, baseRotateX: 8, baseRotateZ: -4 };
    if (viewportWidth >= 1024) return { spacingX: 210, spacingY: 16, spacingZ: 60, baseRotateY: -18, baseRotateX: 6, baseRotateZ: -3 };
    if (viewportWidth >= 768) return { spacingX: 170, spacingY: 12, spacingZ: 50, baseRotateY: -15, baseRotateX: 5, baseRotateZ: -2 };
    return { spacingX: 130, spacingY: 8, spacingZ: 40, baseRotateY: -12, baseRotateX: 4, baseRotateZ: -2 };
  }, [viewportWidth]);

  const { spacingX, spacingY, spacingZ, baseRotateY, baseRotateX, baseRotateZ } = getSpacing();

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(SHOWCASE_PROJECTS.length - 1, prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Click handler to open case study modal
  const openCaseStudy = useCallback((slug: string) => {
    if (!onSelectProject) return;
    const found = projects.find((p) => p.slug === slug);
    if (found) {
      onSelectProject(found);
    }
  }, [onSelectProject]);

  const handleCardClick = (slug: string, index: number) => {
    if (isDragThresholdPassed.current) return;
    if (index !== activeIndex) {
      // Clicking adjacent card brings it to center focus
      setActiveIndex(index);
    } else {
      // Clicking active focused card opens case study modal
      openCaseStudy(slug);
    }
  };

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    currentDrag.current = 0;
    isDragThresholdPassed.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 0) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 12) {
      isDragThresholdPassed.current = true;
      currentDrag.current = delta;
      setDragOffset(delta);
    }
  };

  const handlePointerUp = () => {
    if (isDragThresholdPassed.current) {
      const threshold = 40;
      if (currentDrag.current < -threshold) {
        handleNext();
      } else if (currentDrag.current > threshold) {
        handlePrev();
      }
    }
    setDragOffset(0);
    // Allow slight delay before resetting drag flag so standard click doesn't trigger drag
    setTimeout(() => {
      isDragThresholdPassed.current = false;
    }, 60);
  };

  const activeProject = SHOWCASE_PROJECTS[activeIndex];

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full paper-warm-canvas text-neutral-900 border-b-2 border-neutral-900 py-16 sm:py-24 lg:py-28 overflow-hidden select-none"
    >
      {/* Background Architectural Drafting Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* =========================================================================
            HEADER BAR: Typography, Kicker & Minimal Prev/Next Controls
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b-2 border-neutral-900 gap-6">
          <div>
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 font-mono text-xs uppercase tracking-widest text-neutral-700 shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-pulse" />
              <span>CURATED COMMISSIONED WORKS // 2026 ARCHIVE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-950 tracking-tighter uppercase leading-none">
              PROJECT <span className="text-[#00B8C8]">SHOWCASE.</span>
            </h2>
          </div>

          {/* Subtitle & Interactive Controls */}
          <div className="flex flex-col md:items-end gap-3.5">
            <p className="font-mono text-xs sm:text-sm text-neutral-600 font-medium max-w-sm md:text-right leading-relaxed">
              Interactive 3D perspective gallery of brand identities, packaging systems, and commercial campaigns.
            </p>

            {/* Prev / Next & Counter Controls */}
            <div className="flex items-center gap-3">
              {/* Counter Display */}
              <div className="flex items-center gap-2 font-mono text-xs font-black px-3 py-1.5 bg-white border border-neutral-300 shadow-xs rounded">
                <span className="text-neutral-950">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-400">/</span>
                <span className="text-neutral-400">
                  {String(SHOWCASE_PROJECTS.length).padStart(2, "0")}
                </span>
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className={`p-2 rounded border border-neutral-300 font-mono text-xs font-bold transition-all flex items-center justify-center ${
                  activeIndex === 0
                    ? "opacity-35 cursor-not-allowed bg-neutral-100 text-neutral-400"
                    : "bg-white text-neutral-900 hover:bg-[#00B8C8] hover:text-neutral-950 hover:border-neutral-900 shadow-xs cursor-pointer active:scale-95"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === SHOWCASE_PROJECTS.length - 1}
                aria-label="Next project"
                className={`p-2 rounded border border-neutral-300 font-mono text-xs font-bold transition-all flex items-center justify-center ${
                  activeIndex === SHOWCASE_PROJECTS.length - 1
                    ? "opacity-35 cursor-not-allowed bg-neutral-100 text-neutral-400"
                    : "bg-white text-neutral-900 hover:bg-[#00B8C8] hover:text-neutral-950 hover:border-neutral-900 shadow-xs cursor-pointer active:scale-95"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3D PERSPECTIVE STAGE
            ========================================================================= */}
        <div
          className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            perspective: prefersReducedMotion ? "none" : "1500px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {SHOWCASE_PROJECTS.map((item, idx) => {
            const offset = idx - activeIndex;
            const isHovered = hoveredIndex === idx;
            const isCenter = idx === activeIndex;

            // Compute 3D Coordinates
            const xPos = offset * spacingX + dragOffset;
            const yPos = offset * spacingY;
            const zPos = isHovered 
              ? 130 
              : -Math.abs(offset) * spacingZ;

            // 3D Rotations: Default diagonal orientation vs hovered flat focus
            const rotY = prefersReducedMotion 
              ? 0 
              : isHovered 
                ? 0 
                : baseRotateY;

            const rotX = prefersReducedMotion 
              ? 0 
              : isHovered 
                ? 0 
                : baseRotateX;

            const rotZ = prefersReducedMotion 
              ? 0 
              : isHovered 
                ? 0 
                : baseRotateZ;

            const scale = isHovered 
              ? 1.07 
              : isCenter 
                ? 1.0 
                : 0.94;

            // Stacking order: hovered is always on top; otherwise active card and near neighbors stack higher
            const zIndex = isHovered 
              ? 90 
              : 50 - Math.abs(offset) * 5;

            // Visible opacity falloff for outer cards
            const opacity = Math.abs(offset) > 4 ? 0 : Math.max(0.35, 1 - Math.abs(offset) * 0.16);

            return (
              <motion.div
                key={item.number}
                initial={false}
                animate={{
                  x: xPos,
                  y: yPos,
                  z: zPos,
                  rotateY: rotY,
                  rotateX: rotX,
                  rotateZ: rotZ,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  position: "absolute",
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(item.slug, idx)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(item.slug, idx);
                  }
                }}
                aria-label={`${item.brand} - ${item.category}`}
                className="group/card cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8C8]"
              >
                {/* 3D Perspective Card Container — 8px Border Radius */}
                <article
                  className={`relative flex flex-col justify-between bg-white border-2 transition-all duration-300 rounded-[8px] overflow-hidden ${
                    isHovered
                      ? "border-[#00B8C8] shadow-[0_30px_60px_rgba(0,184,200,0.25),0_8px_24px_rgba(23,23,23,0.18)] ring-1 ring-[#00B8C8]"
                      : isCenter
                        ? "border-neutral-900 shadow-[0_20px_40px_rgba(0,0,0,0.14),0_4px_12px_rgba(0,0,0,0.08)]"
                        : "border-neutral-400/80 shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
                  } w-[280px] h-[380px] sm:w-[350px] sm:h-[460px] lg:w-[410px] lg:h-[530px] p-4 sm:p-5`}
                >
                  {/* Card Top Meta Strip */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-black px-2 py-0.5 bg-neutral-950 text-white rounded">
                        {item.number}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-[#00B8C8] uppercase tracking-wider truncate max-w-[140px] sm:max-w-[180px]">
                        {item.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 font-bold shrink-0">
                      {item.year}
                    </span>
                  </div>

                  {/* Primary Artwork Stage — Preserves proportions, fills majority of card */}
                  <div className="relative w-full flex-1 bg-[#121216] rounded-[6px] overflow-hidden border border-neutral-200 group-hover/card:border-neutral-900 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.brand}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 410px"
                      className="object-contain p-2 sm:p-3 group-hover/card:scale-103 transition-transform duration-500 ease-out"
                    />

                    {/* Centered Click Cue Hint on Hover */}
                    <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-950/95 text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded border border-neutral-700 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#00B8C8]" />
                        <span>VIEW CASE STUDY</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Project Title, Category & Action */}
                  <div className="pt-3.5 mt-3 border-t border-neutral-200 shrink-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] text-[#00B8C8] font-bold uppercase tracking-wider block mb-0.5 truncate max-w-[200px] sm:max-w-[260px]">
                          {item.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-neutral-950 group-hover/card:text-[#00B8C8] transition-colors uppercase tracking-tight leading-snug truncate max-w-[200px] sm:max-w-[260px]">
                          {item.brand}
                        </h3>
                      </div>

                      {/* View Project Action Arrow Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openCaseStudy(item.slug);
                        }}
                        aria-label={`View ${item.brand} case study`}
                        className="p-1.5 bg-neutral-100 group-hover/card:bg-[#00B8C8] rounded text-neutral-900 group-hover/card:text-neutral-950 transition-colors shrink-0 cursor-pointer hover:scale-110 active:scale-95"
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM CONTROL RAIL & PROJECT DISCOVERY STRIP
            ========================================================================= */}
        <div className="pt-8 border-t border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          {/* Subtle Project Navigation Dots / Step Rail */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mr-1">
              INDEX:
            </span>
            {SHOWCASE_PROJECTS.map((proj, pIdx) => (
              <button
                key={proj.number}
                type="button"
                onClick={() => setActiveIndex(pIdx)}
                aria-label={`Go to project ${proj.number}: ${proj.brand}`}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === pIdx
                    ? "w-8 bg-[#00B8C8]"
                    : "w-2 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          {/* Active Project Highlight Bar */}
          <div className="flex items-center gap-4 text-neutral-600 font-medium">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <span className="text-neutral-400">ACTIVE:</span>
              <span className="text-neutral-950 font-bold">{activeProject.brand}</span>
              <span className="text-neutral-400">[{activeProject.year}]</span>
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="hidden sm:inline text-[#00B8C8] font-bold uppercase tracking-wider">
              ● CLICK CARD TO OPEN CASE STUDY
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
