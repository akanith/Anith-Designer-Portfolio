"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Scissors } from "lucide-react";

export default function TornPaperStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F5F2EB] py-0 z-20 select-none">
      
      {/* Upper Torn Paper Jagged Edge with White Exposed Fibers */}
      <div className="relative w-full h-8 sm:h-12 overflow-hidden -mb-1">
        {/* White fibrous deckle underlay */}
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full text-white fill-current opacity-90 drop-shadow-sm"
        >
          <path d="M0,48 L0,14 L12,18 L25,12 L38,20 L50,11 L65,19 L80,10 L95,22 L112,11 L128,21 L145,10 L162,23 L180,12 L200,21 L220,9 L240,24 L260,11 L282,22 L300,9 L322,23 L340,11 L362,22 L380,9 L402,24 L420,11 L442,21 L460,9 L482,23 L500,11 L522,22 L540,9 L562,24 L580,11 L602,21 L620,9 L642,23 L660,11 L682,22 L700,9 L722,24 L740,11 L762,21 L780,9 L802,23 L820,11 L842,22 L860,9 L882,24 L900,11 L922,21 L940,9 L962,23 L980,11 L1002,22 L1020,9 L1042,24 L1060,11 L1082,21 L1100,9 L1122,23 L1140,11 L1162,22 L1180,10 L1200,16 L1200,48 Z" />
        </svg>

        {/* Black torn top edge */}
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="relative w-full h-full text-[#111111] fill-current drop-shadow-[0_-3px_5px_rgba(0,0,0,0.15)]"
        >
          <path d="M0,48 L0,18 L15,14 L30,22 L45,12 L60,20 L78,13 L95,24 L115,14 L132,22 L150,12 L172,25 L190,14 L210,23 L230,12 L252,25 L270,13 L292,23 L310,12 L332,25 L350,13 L372,24 L390,12 L412,26 L430,14 L452,23 L470,12 L492,25 L510,14 L532,24 L550,12 L572,26 L590,14 L612,23 L630,12 L652,25 L670,14 L692,24 L710,12 L732,26 L750,14 L772,23 L790,12 L812,25 L830,14 L852,24 L870,12 L892,26 L910,14 L932,23 L950,12 L972,25 L990,14 L1012,24 L1030,12 L1052,26 L1070,14 L1092,23 L1110,12 L1132,25 L1150,14 L1172,24 L1190,13 L1200,20 L1200,48 Z" />
        </svg>
      </div>

      {/* Main Ripped Black Paper Band */}
      <div className="relative w-full bg-[#111111] py-14 sm:py-20 px-4 sm:px-8 shadow-2xl border-y border-neutral-800">
        {/* Subtle background paper fiber texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <Image
            src="/images/textures/torn-black-paper.jpg"
            alt="Torn paper fibers"
            fill
            className="object-cover"
          />
        </div>

        {/* Small Graphic Design Tape and Marker Marks */}
        <div className="absolute top-4 left-8 font-mono text-[10px] text-neutral-400 uppercase tracking-widest hidden sm:flex items-center gap-2">
          <Scissors className="w-3.5 h-3.5 text-accent-coral" />
          <span>TEAR LINE // DISCIPLINE TRANSITION</span>
        </div>

        <div className="absolute top-4 right-8 font-mono text-[10px] text-accent-cobalt uppercase tracking-widest hidden sm:block font-bold">
          ✦ VISUAL ARTS ARCHIVE
        </div>

        {/* Splatter & Accents */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-accent-cobalt/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-accent-coral/15 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Small Electric-Blue Stamp Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cobalt text-white font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-[2px_2px_0px_#ffffff]"
          >
            <Sparkles className="w-3 h-3 text-accent-yellow" />
            <span>EST. THINKLOOM CREATIVE</span>
          </motion.div>

          {/* Large White Brush-Script Wordmark: THINKLOOM */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-brush text-6xl sm:text-8xl md:text-9xl text-white tracking-wide drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)] leading-tight select-none transform -rotate-1 hover:rotate-0 transition-transform"
          >
            ThinkLoom
          </motion.h2>

          {/* Subtitle: DESIGN × BRAND × POSTERS × CREATIVE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm md:text-base font-mono text-neutral-300 tracking-widest uppercase font-bold"
          >
            <span className="text-white">DESIGN</span>
            <span className="text-accent-coral">×</span>
            <span className="text-white">BRAND</span>
            <span className="text-accent-coral">×</span>
            <span className="text-white">POSTERS</span>
            <span className="text-accent-coral">×</span>
            <span className="text-white">CREATIVE CONTENT</span>
          </motion.div>

          {/* Editorial Technical Coordinates */}
          <p className="mt-4 font-mono text-[11px] text-neutral-400 uppercase tracking-widest max-w-lg">
            SCROLL DOWN TO ENTER THE EXHIBITION CHAPTERS
          </p>
        </div>
      </div>

      {/* Lower Torn Paper Jagged Edge with White Exposed Fibers */}
      <div className="relative w-full h-8 sm:h-12 overflow-hidden -mt-1">
        {/* Black torn bottom edge */}
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="relative w-full h-full text-[#111111] fill-current drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)] rotate-180"
        >
          <path d="M0,48 L0,18 L15,14 L30,22 L45,12 L60,20 L78,13 L95,24 L115,14 L132,22 L150,12 L172,25 L190,14 L210,23 L230,12 L252,25 L270,13 L292,23 L310,12 L332,25 L350,13 L372,24 L390,12 L412,26 L430,14 L452,23 L470,12 L492,25 L510,14 L532,24 L550,12 L572,26 L590,14 L612,23 L630,12 L652,25 L670,14 L692,24 L710,12 L732,26 L750,14 L772,23 L790,12 L812,25 L830,14 L852,24 L870,12 L892,26 L910,14 L932,23 L950,12 L972,25 L990,14 L1012,24 L1030,12 L1052,26 L1070,14 L1092,23 L1110,12 L1132,25 L1150,14 L1172,24 L1190,13 L1200,20 L1200,48 Z" />
        </svg>
      </div>

    </div>
  );
}
