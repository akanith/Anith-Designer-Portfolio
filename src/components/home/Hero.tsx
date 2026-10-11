"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Dynamic import of 3D Art Universe with ssr: false
const HeroArtUniverse = dynamic(() => import("@/components/three/HeroArtUniverse"), {
  ssr: false,
  loading: () => (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="h-44 w-44 rounded-2xl border border-ink-border bg-white shadow-card animate-pulse-slow flex items-center justify-center">
        <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
          Loading Spatial Scene...
        </span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 md:pt-32 pb-10 architectural-grid bg-canvas"
    >
      {/* Restrained decorative spatial guides and color blurs */}
      <div className="pointer-events-none absolute top-12 left-12 font-mono text-[10px] text-ink-light tracking-widest uppercase hidden lg:block">
        POS [00.12.84] {"// DIGITAL ART EXHIBITION"}
      </div>
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-accent-paleblue/50 blur-[130px] -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-lavender/50 blur-[120px] -z-10" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Top Eyebrow Metadata Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-border pb-5 mb-8 md:mb-12"
        >
          {/* Studio Brand Label */}
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-accent-coral" />
            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.16em] text-ink uppercase">
              {siteConfig.heroLabel}
            </span>
            <span className="text-ink-light">•</span>
            <span className="font-mono text-[11px] md:text-xs text-ink-muted tracking-wider">
              EXPERIMENTAL 3D ART UNIVERSE
            </span>
          </div>

          {/* Availability Pill */}
          <div className="flex items-center gap-2 rounded-full border border-ink-border bg-white px-3.5 py-1 text-xs shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cobalt opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cobalt" />
            </span>
            <span className="font-mono text-[11px] font-medium text-ink">
              {siteConfig.contact.availability}
            </span>
          </div>
        </motion.div>

        {/* 2-Column Hero: Oversized Typography Left, 3D Spatial Universe Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Oversized Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center z-20">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-[96px] font-black tracking-tightest leading-[0.92] text-ink"
            >
              IDEAS <br />
              <span className="text-accent-coral">INTO</span> <br />
              ORBIT.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 md:mt-8 text-lg sm:text-xl text-ink font-sans font-medium leading-relaxed"
            >
              {siteConfig.heroSupporting}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-3 max-w-md text-sm text-ink-muted leading-relaxed font-sans"
            >
              {siteConfig.heroExtended}
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary Action: EXPLORE THE UNIVERSE ↗ */}
              <button
                onClick={scrollToWork}
                data-cursor="hover"
                data-cursor-text="EXPLORE"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-cobalt hover:shadow-cobalt hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE THE UNIVERSE</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Secondary Action: START A PROJECT */}
              <button
                onClick={scrollToContact}
                data-cursor="hover"
                data-cursor-text="CONTACT"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-border bg-white px-6 py-4 font-mono text-xs sm:text-sm font-semibold tracking-wider text-ink transition-all duration-300 hover:border-ink hover:bg-canvas-warm active:scale-[0.98]"
              >
                <Send className="h-3.5 w-3.5 text-accent-coral" />
                <span>START A PROJECT</span>
              </button>
            </motion.div>

            {/* Architectural Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-muted"
            >
              <span className="font-bold text-ink">DISCIPLINES:</span>
              <span className="rounded bg-white px-2.5 py-1 border border-ink-border text-ink">
                Brand Systems
              </span>
              <span className="rounded bg-white px-2.5 py-1 border border-ink-border text-ink">
                Campaign Posters
              </span>
              <span className="rounded bg-white px-2.5 py-1 border border-ink-border text-ink">
                Spatial 3D
              </span>
            </motion.div>
          </div>

          {/* Right Column: 3D Spatial Art Universe Canvas */}
          <div className="lg:col-span-6 xl:col-span-7 h-[420px] sm:h-[500px] md:h-[580px] lg:h-[660px] w-full relative flex items-center justify-center">
            {/* The 3D Canvas */}
            <div className="relative h-full w-full">
              <HeroArtUniverse />
            </div>

            {/* Fine spatial annotation pin */}
            <div className="pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-ink-border bg-white/90 px-3 py-1 font-mono text-[10px] text-ink-muted backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent-coral animate-pulse" />
              <span>Interactive Spatial Art Universe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spatial Coordinates Indicator */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 pt-8 flex items-end justify-between border-t border-ink-border text-xs text-ink-muted">
        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px]">
          <span>INDEX: 01 {"//"} ORBIT</span>
          <span>•</span>
          <span>CURATED REAL WORKS</span>
        </div>

        {/* Scroll down trigger */}
        <button
          onClick={scrollToWork}
          className="group mx-auto sm:mx-0 flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-ink transition-colors hover:text-accent-cobalt"
          data-cursor="hover"
          data-cursor-text="SCROLL"
        >
          <span>Scroll into Exhibition</span>
          <div className="h-7 w-4 rounded-full border border-ink-border flex justify-center pt-1 group-hover:border-accent-cobalt">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-accent-coral"
            />
          </div>
        </button>

        <div className="hidden sm:block font-mono text-[11px] text-right">
          <span>THINKLOOM STUDIO {"//"} 2026</span>
        </div>
      </div>
    </section>
  );
}
