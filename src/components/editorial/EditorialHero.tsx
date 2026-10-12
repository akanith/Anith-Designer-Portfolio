"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center paper-warm-canvas overflow-hidden pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 md:px-12 border-b border-neutral-300">
      {/* Decorative Blueprint Corner Marks & Screentone Elements */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-500 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        [TL-SPEC-2026] // ARCHIVE REF: ANITH.DESIGN
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        EDITION 04 / CHENNAI - DINDIGUL
      </div>

      {/* Floating Hand-Drawn / Graphic Design Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid crosshairs */}
        <div className="absolute top-1/4 left-10 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute top-1/3 right-16 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute bottom-1/4 left-1/3 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute bottom-1/2 right-1/4 text-neutral-300 font-mono text-xl select-none">+</div>

        {/* Hand-drawn vector scribble arrow */}
        <svg className="absolute top-36 right-12 w-28 h-28 text-neutral-400 opacity-60 hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10,80 Q50,20 85,35" strokeDasharray="3 3" />
          <path d="M75,25 L88,36 L78,48" />
          <text x="30" y="75" className="text-[10px] font-mono fill-neutral-600">LEAD ART DIRECTION</text>
        </svg>

        {/* Asterisk and Star Graphic Marks */}
        <div className="absolute top-44 left-12 text-accent-coral select-none text-2xl font-black">✻</div>
        <div className="absolute bottom-40 right-20 text-accent-cobalt select-none text-3xl font-black">✦</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* 1. Top Subheading Banner */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 bg-neutral-900 text-neutral-100 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-coral animate-ping" />
          <span>DESIGNER / CREATIVE / VISUAL STORYTELLER</span>
        </motion.div>

        {/* 2. Massive Editorial Typographic Composition */}
        <div className="w-full text-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative inline-block"
          >
            {/* Background huge PORTFOLIO text */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-neutral-900 leading-none uppercase">
              PORTFOLIO
            </h1>

            {/* Overlapping Vivid Blue Brush-Lettered "ANITH" */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -5, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 md:translate-x-4 z-20"
            >
              <span className="font-brush text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent-cobalt font-black tracking-normal drop-shadow-md select-none block transform hover:scale-105 transition-transform">
                Anith
              </span>
            </motion.div>

            {/* Studio Identity Tag */}
            <div className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-6 bg-white border border-neutral-900 px-3 py-1 text-xs sm:text-sm font-mono font-bold tracking-widest text-neutral-900 shadow-[3px_3px_0px_#171717] rotate-2">
              THINKLOOM STUDIO
            </div>
          </motion.div>
        </div>

        {/* 3. Concise Introduction Banner */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center max-w-2xl text-base sm:text-lg md:text-xl text-neutral-700 font-medium leading-relaxed px-4"
        >
          “I&apos;m <span className="font-bold text-neutral-950">Anith</span>, a creative designer building bold visual identities, memorable posters, product campaigns, and digital experiences.”
        </motion.p>


      </div>
    </section>
  );
}
