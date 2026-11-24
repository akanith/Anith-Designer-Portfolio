"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Maximize2, Sparkles, Compass } from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface ProjectShowcaseHorizontalProps {
  onSelectProject?: (project: Project) => void;
}

interface ShowcaseCardData {
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

export const SHOWCASE_PROJECTS: ShowcaseCardData[] = [
  {
    number: "01",
    brand: "Messiah Sports",
    client: "Messiah Athletics",
    category: "Athletic Apparel & Packaging System",
    year: "2024",
    slug: "messiah-sports-socks",
    image: "/images/projects/messiah-sports/socks-campaign.png",
    badge: "HERO COMMERCIAL CAMPAIGN",
    description: "High-octane typographic mark, dynamic angled terminals, geometric compression monogram, and tactile retail packaging designed for athletic footwear and anti-slip performance stockings.",
    tags: ["Brand Identity", "Packaging Design", "Commercial Campaign", "Silicone Spec"],
  },
  {
    number: "02",
    brand: "Ramyas Jeweller",
    client: "Ramyas Jeweller",
    category: "Retail Festive Campaign & Prepress Passbook",
    year: "2024",
    slug: "ramyas-jeweller-diwali-savings",
    image: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
    badge: "OFFSET CMYK PRODUCTION",
    description: "Bespoke Tamil typography layout celebrating traditional gold micro-savings, complete with 4-page offset passbooks, festive commercial explainer videos, and daily bullion market templates.",
    tags: ["Prepress Production", "Tamil Typography", "Savings Ledger", "3D Gold Mark"],
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
    description: "Ultra-wide kinetic stadium atmosphere illustration capturing the iconic celebration with high-octane crowd spotlights, stadium atmosphere, and motion streaks.",
    tags: ["Sports Illustration", "Wall Mural Art", "4K Desktop Wallpaper", "Large Format"],
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
    description: "Cinematic athletic footwear campaign staged on wet reflective stadium stone under moody spotlights, with feature callouts for molded traction studs.",
    tags: ["Footwear Staging", "Traction Geometry", "Lighting Direction", "Digital Billboard"],
  },
  {
    number: "05",
    brand: "ThinkLoom Studio",
    client: "ThinkLoom Studio",
    category: "Brand Identity & Production System",
    year: "2024",
    slug: "thinkloom-studio-identity",
    image: "/images/brand/thinkloom-printing-light.png",
    badge: "STUDIO CORE IDENTITY",
    description: "The official brand identity for ThinkLoom uniting graphic design, digital & offset multicolour printing, and AI advertisement videos under the creed 'Beyond Design. Into Reality.'",
    tags: ["Geometric Insignia", "Brand Guidelines", "Prepress Calibration", "Print Tokens"],
  },
  {
    number: "06",
    brand: "Kuttyverse Retail",
    client: "Kuttyverse Retail & Toys",
    category: "Children's Retail Brand & Grand Opening Flyer",
    year: "2024",
    slug: "kuttyverse-toys-and-launch",
    image: "/images/projects/kuttyverse/grand-opening-invitation.png",
    badge: "RETAIL OFFSET PROMO",
    description: "Full-bleed offset promotional flyer with whimsical children's toy store character mascot, celestial world silhouette, and retail launch discount tokens.",
    tags: ["Retail Flyers", "Character Branding", "Promotion Design", "Offset Press"],
  },
  {
    number: "07",
    brand: "Swanzaa Couture",
    client: "Swanzaa Atelier",
    category: "Haute Couture & Fashion",
    year: "2024",
    slug: "swanzaa-couture-identity",
    image: "/images/projects/swanzaa/emblem-dark.png",
    badge: "LUXURY MONOGRAM",
    description: "Golden-ratio origami swan silhouette engineered for an avant-garde boutique and luxury atelier, embodying architectural elegance and tactile restraint.",
    tags: ["Origami Vector", "Foil Stamping", "Monogram Mark", "Editorial Spec"],
  },
  {
    number: "08",
    brand: "Blue Waves FC",
    client: "Blue Waves Football Club",
    category: "Sports Crest & Maritime Heraldry",
    year: "2024",
    slug: "blue-waves-fc-crest",
    image: "/images/projects/blue-waves-fc/club-crest.png",
    badge: "MARITIME CLUB CREST",
    description: "Coastal maritime football shield symbolizing velocity, tidal power, and team camaraderie, engineered for high-visibility matchday kits and stadium embroidery.",
    tags: ["Club Crest", "Sports Heraldry", "Embroidery Spec", "Matchday Identity"],
  },
];

export default function ProjectShowcaseHorizontal({ onSelectProject }: ProjectShowcaseHorizontalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  const [isDesktop, setIsDesktop] = useState(false);
  const [maxTravel, setMaxTravel] = useState(3800);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  // Detect desktop vs mobile viewport
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Calculate dynamic travel distance when track is rendered
  useEffect(() => {
    if (!isDesktop) return;

    const calculateTravel = () => {
      if (trackRef.current) {
        const scrollWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Include padding so the final card rests comfortably in view
        const travel = Math.max(0, scrollWidth - viewportWidth + 120);
        setMaxTravel(travel);
      }
    };

    // Calculate immediately and after layout stabilization
    calculateTravel();
    const t1 = setTimeout(calculateTravel, 100);
    const t2 = setTimeout(calculateTravel, 500);

    window.addEventListener("resize", calculateTravel, { passive: true });
    const observer = new ResizeObserver(calculateTravel);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", calculateTravel);
      observer.disconnect();
    };
  }, [isDesktop]);

  // Framer Motion scroll progress on desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate horizontal track leftwards based on vertical scroll (with px unit)
  const x = useTransform(scrollYProgress, (v) => {
    if (prefersReducedMotion) return "0px";
    return `${-v * maxTravel}px`;
  });

  // Active step counter on desktop
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    if (!isDesktop) return;
    return scrollYProgress.on("change", (latest) => {
      const step = Math.min(
        SHOWCASE_PROJECTS.length,
        Math.max(1, Math.round(latest * (SHOWCASE_PROJECTS.length - 1)) + 1)
      );
      setActiveStep(step);
    });
  }, [isDesktop, scrollYProgress]);

  // Mobile scroll handler for native swipe progress
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setMobileActiveIndex(Math.min(SHOWCASE_PROJECTS.length - 1, Math.max(0, index)));
  };

  const handleSelect = (slug: string) => {
    if (!onSelectProject) return;
    const found = projects.find((p) => p.slug === slug);
    if (found) {
      onSelectProject(found);
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className={`relative w-full paper-warm-canvas text-neutral-900 border-b-2 border-neutral-900 ${
        isDesktop ? "h-[340vh]" : "h-auto py-16 sm:py-24"
      }`}
    >
      {/* Sticky Frame on Desktop / Static Container on Tablet & Mobile */}
      <div
        className={`${
          isDesktop
            ? "sticky top-0 h-screen flex flex-col justify-between py-8 sm:py-10 overflow-hidden"
            : "relative w-full overflow-hidden"
        }`}
      >
        {/* =========================================================================
            HEADER BAR: Typography, Kicker & "Scroll To Explore" Indicator
            ========================================================================= */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-neutral-900 gap-4 sm:gap-6">
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

            {/* Subtitle & Scroll to Explore Cue */}
            <div className="flex flex-col md:text-right max-w-md gap-3">
              <p className="font-mono text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                Brand identity, commercial campaigns, and multicolour print production executed with architectural discipline.
              </p>

              {/* SCROLL TO EXPLORE Indicator */}
              <div className="flex items-center md:justify-end gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                <span className="px-2.5 py-1 bg-white border border-neutral-300 shadow-xs rounded flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#00B8C8] animate-spin" style={{ animationDuration: "12s" }} />
                  <span>SCROLL TO EXPLORE</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-[#00B8C8] inline-block"
                  >
                    →
                  </motion.span>
                </span>
                <span className="text-neutral-400 font-normal hidden sm:inline">
                  [{SHOWCASE_PROJECTS.length} FEATURED ARCHIVES]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            GALLERY TRACK: Desktop Pinned Scroll / Mobile Native Swipe Snap
            ========================================================================= */}
        <div className="w-full relative my-auto py-6 sm:py-8 overflow-hidden">
          {isDesktop ? (
            /* DESKTOP PINNED HORIZONTAL TRACK */
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-stretch gap-8 pl-4 sm:pl-6 md:pl-12 pr-16 w-max will-change-transform"
            >
              {SHOWCASE_PROJECTS.map((item) => (
                <ProjectCard
                  key={item.number}
                  item={item}
                  onSelect={() => handleSelect(item.slug)}
                />
              ))}
            </motion.div>
          ) : (
            /* TABLET & MOBILE NATIVE SWIPE TRACK WITH SCROLL SNAPPING */
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 pb-4 pt-1 no-scrollbar w-full"
            >
              {SHOWCASE_PROJECTS.map((item) => (
                <div key={item.number} className="snap-center shrink-0 w-[84vw] sm:w-[480px]">
                  <ProjectCard
                    item={item}
                    onSelect={() => handleSelect(item.slug)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =========================================================================
            BOTTOM PROGRESS BAR & NAVIGATION CONTROLS
            ========================================================================= */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 relative z-20 shrink-0">
          <div className="pt-4 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            {/* Minimal Horizontal Scroll Progress Indicator */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="font-bold text-neutral-900 tracking-wider">
                {String(isDesktop ? activeStep : mobileActiveIndex + 1).padStart(2, "0")}
              </span>

              {/* Progress Track */}
              <div className="relative flex-1 sm:w-64 h-1.5 bg-neutral-200 border border-neutral-300 rounded-full overflow-hidden">
                {isDesktop ? (
                  <motion.div
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                    className="absolute inset-y-0 left-0 right-0 bg-[#00B8C8]"
                  />
                ) : (
                  <div
                    style={{
                      width: `${((mobileActiveIndex + 1) / SHOWCASE_PROJECTS.length) * 100}%`,
                      transition: "width 0.25s ease-out",
                    }}
                    className="h-full bg-[#00B8C8]"
                  />
                )}
              </div>

              <span className="text-neutral-400 font-bold">
                {String(SHOWCASE_PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Interaction Helper Notice */}
            <div className="flex items-center gap-4 text-neutral-500 font-medium">
              <span className="hidden md:inline">
                CLICK ANY CARD TO OPEN FULL CASE STUDY MODAL
              </span>
              <span className="text-[#00B8C8] font-bold uppercase tracking-wider">
                ● HIGH-RESOLUTION ARTIFACTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   INDIVIDUAL PROJECT EXHIBITION CARD COMPONENT
   ========================================================================= */
interface ProjectCardProps {
  item: ShowcaseCardData;
  onSelect: () => void;
}

function ProjectCard({ item, onSelect }: ProjectCardProps) {
  return (
    <article
      onClick={onSelect}
      className="group relative cursor-pointer flex flex-col justify-between bg-white border-2 border-neutral-900 p-5 sm:p-6 lg:p-7 shadow-[8px_8px_0px_#171717] hover:shadow-[12px_12px_0px_#00B8C8] hover:border-[#00B8C8] transition-all duration-300 rounded-xl w-[84vw] sm:w-[480px] lg:w-[620px] xl:w-[680px] shrink-0"
    >
      {/* Top Meta Bar inside Card */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-neutral-200">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-black px-2 py-0.5 bg-neutral-900 text-white rounded">
            {item.number}
          </span>
          <span className="font-mono text-[11px] font-bold text-[#00B8C8] uppercase tracking-wider">
            {item.badge}
          </span>
        </div>
        <span className="font-mono text-[11px] text-neutral-400 font-bold">
          {item.year} ARCHIVE
        </span>
      </div>

      {/* Primary Project Artwork: Large, High-Resolution Landscape Frame */}
      <div className="relative w-full aspect-[16/10] bg-[#121216] overflow-hidden rounded-lg mb-5 border border-neutral-200 group-hover:border-neutral-900 transition-colors">
        <Image
          src={item.image}
          alt={item.brand}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 680px"
          className="object-contain p-3 group-hover:scale-104 transition-transform duration-700 ease-out"
        />

        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-950/90 text-white font-mono text-xs font-bold uppercase tracking-wider rounded border border-neutral-700 shadow-xl">
            <Maximize2 className="w-3.5 h-3.5 text-[#00B8C8]" />
            <span>OPEN CASE STUDY</span>
          </span>
        </div>
      </div>

      {/* Card Content: Editorial Typography */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Category */}
          <span className="font-mono text-xs text-[#00B8C8] font-bold uppercase tracking-wider block mb-1">
            {item.category}
          </span>

          {/* Brand & Project Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 group-hover:text-[#00B8C8] transition-colors tracking-tight uppercase leading-snug">
            {item.brand}
          </h3>

          {/* Description */}
          <p className="font-mono text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Deliverable Tags Ribbon */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t border-neutral-100">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-600 font-mono text-[10px] font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-5 pt-3.5 border-t border-neutral-200 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-neutral-900 group-hover:text-[#00B8C8] transition-colors uppercase tracking-wider">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>

          <span className="font-mono text-[11px] text-neutral-400">
            {item.client}
          </span>
        </div>
      </div>
    </article>
  );
}
