"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function EditorialHero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[75vh] flex flex-col justify-center paper-warm-canvas overflow-hidden pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 md:px-12 border-b border-neutral-300"
    >
      {/* Decorative Blueprint Corner Marks & Screentone Elements */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-500 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        [TL-SPEC-2026] // THINKLOOM | DESIGN & PRINTING
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        EDITION 04 // BEYOND DESIGN. INTO REALITY.
      </div>

      {/* Floating Hand-Drawn / Graphic Design Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid crosshairs */}
        <div className="absolute top-1/4 left-10 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute top-1/3 right-16 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute bottom-1/4 left-1/3 text-neutral-300 font-mono text-xl select-none">+</div>
        <div className="absolute bottom-1/2 right-1/4 text-neutral-300 font-mono text-xl select-none">+</div>

        {/* Hand-drawn vector scribble arrow */}
        <svg
          className="absolute top-36 right-12 w-28 h-28 text-neutral-400 opacity-60 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10,80 Q50,20 85,35" strokeDasharray="3 3" />
          <path d="M75,25 L88,36 L78,48" />
          <text x="30" y="75" className="text-[10px] font-mono fill-neutral-600">
            CREATIVE PRODUCTION
          </text>
        </svg>

        {/* Asterisk and Star Graphic Marks */}
        <div className="absolute top-44 left-12 text-[#FF5A45] select-none text-2xl font-black">✻</div>
        <div className="absolute bottom-40 right-20 text-[#00B8C8] select-none text-3xl font-black">✦</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* 1. Top Subheading Banner */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-3 bg-[#171717] text-neutral-100 px-3 py-1.5 sm:px-4 rounded-full text-[10px] sm:text-xs md:text-sm font-mono tracking-wider sm:tracking-widest uppercase mb-6 shadow-sm border border-neutral-800 max-w-full text-center"
        >
          <span className="w-2 h-2 rounded-full bg-[#65C74A] animate-ping shrink-0" />
          <span className="truncate sm:whitespace-normal">GRAPHIC DESIGN • MULTICOLOUR PRINTING • AI VIDEO CREATION</span>
        </motion.div>

        {/* 2. Massive Editorial Typographic Composition */}
        <div className="w-full text-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative inline-block"
          >
            {/* Background huge THINKLOOM text */}
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] font-black tracking-tighter text-[#171717] leading-none uppercase">
              THINKLOOM
            </h1>

            {/* Overlapping Electric Teal Brush-Lettered "Design & Print" */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -4, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              className="absolute -top-3 sm:-top-7 left-1/2 -translate-x-1/2 md:translate-x-6 z-20 whitespace-nowrap pointer-events-none"
            >
              <span className="font-brush text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[#00B8C8] font-black tracking-normal drop-shadow-md select-none block transform hover:scale-105 transition-transform">
                Design & Printing
              </span>
            </motion.div>

            {/* Studio Identity Tag */}
            <div className="absolute -bottom-3 sm:-bottom-4 right-1 sm:right-6 bg-white border border-[#171717] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-wider sm:tracking-widest text-[#171717] shadow-[2px_2px_0px_#171717] sm:shadow-[3px_3px_0px_#171717] rotate-2">
              BEYOND DESIGN. INTO REALITY.
            </div>
          </motion.div>
        </div>

        {/* 3. Concise Official Studio Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 text-center max-w-3xl text-base sm:text-lg md:text-xl text-neutral-800 font-medium leading-relaxed px-4"
        >
          From distinctive graphic design to multicolour printing and AI-powered advertisements, we bring creative ideas into reality.
        </motion.p>

        {/* 4. Action Links / Capability Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs uppercase tracking-wider"
        >
          <a
            href="#work"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white rounded-full font-bold shadow-[3px_3px_0px_#00B8C8] hover:bg-[#00B8C8] hover:text-[#171717] transition-all"
            data-cursor="hover"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-neutral-900 text-neutral-900 rounded-full font-bold shadow-[3px_3px_0px_#171717] hover:bg-neutral-100 transition-all"
            data-cursor="hover"
          >
            <span>Studio Services</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F1E8] border border-neutral-400 text-neutral-700 rounded-full font-bold hover:border-neutral-900 transition-all"
            data-cursor="hover"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
