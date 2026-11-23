"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, PenTool, Printer, Video } from "lucide-react";

export default function StudioAbout() {
  const pillars = [
    {
      num: "01",
      icon: <PenTool className="w-5 h-5 text-[#00B8C8]" />,
      title: "Graphic Design",
      desc: "Architectural vector marks, brand guidelines, and high-conversion commercial campaign posters.",
    },
    {
      num: "02",
      icon: <Printer className="w-5 h-5 text-[#65C74A]" />,
      title: "Multicolour Printing",
      desc: "Full-scale digital & offset printing, CMYK color separation, specialty lamination, and bespoke binding.",
    },
    {
      num: "03",
      icon: <Video className="w-5 h-5 text-[#00B8C8]" />,
      title: "AI Video Creation",
      desc: "Cinematic commercial motion, 3D metallic logo reveals, and social-first video advertisements.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full paper-warm-canvas py-28 sm:py-36 px-4 sm:px-6 md:px-12 border-b-2 border-neutral-900 overflow-hidden"
    >
      {/* Drafting Marks */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        [TL-MANIFESTO-2026] // STUDIO PHILOSOPHY
      </div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        INTEGRATED CREATIVE PRODUCTION // NO SHORTCUTS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 text-white font-mono text-xs uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-pulse" />
          <span>STUDIO PHILOSOPHY & CRAFT</span>
        </div>

        {/* Master Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Typographic Statement */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-neutral-950 tracking-tighter uppercase leading-[0.9] mb-8">
              BEYOND DESIGN. <br />
              <span className="text-[#00B8C8]">INTO REALITY.</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold leading-relaxed mb-6 max-w-2xl">
              ThinkLoom unifies graphic design, multicolour printing, and AI video creation under one disciplined roof.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-8 max-w-xl">
              Where most creative studios end their journey at a digital Figma file or screen mockup, ThinkLoom executes the entire arc. We construct foundational vector identities, calibrate high-speed digital and offset multicolour presses for tangible physical delivery, and direct cinematic AI commercials that bring brands vividly to life.
            </p>

            {/* 3 Core Production Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t-2 border-neutral-900">
              {pillars.map((p) => (
                <div key={p.num} className="p-4 bg-white border border-neutral-900 shadow-[4px_4px_0px_#171717]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {p.num}
                    </span>
                    {p.icon}
                  </div>
                  <h4 className="font-sans text-base font-black text-neutral-950 uppercase tracking-tight mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Genuine Studio Artwork Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group">
              {/* Primary Artwork Frame */}
              <div className="relative w-full aspect-[4/3] bg-neutral-950 border-2 border-neutral-900 shadow-[8px_8px_0px_#171717] overflow-hidden">
                <Image
                  src="/images/projects/messiah-sports/socks-campaign.png"
                  alt="Messiah Sports Commercial Design & Prepress Poster"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="font-mono text-[10px] text-[#00B8C8] uppercase tracking-wider block font-bold">
                    COMMERCIAL CAMPAIGN DIRECTION
                  </span>
                  <p className="text-white text-sm font-bold font-sans mt-0.5">
                    Messiah Sports — Performance Product Poster
                  </p>
                </div>
              </div>

              {/* Inset Physical Print Proof Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 w-44 sm:w-52 aspect-[4/3] bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#65C74A] p-2 hidden sm:block">
                <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
                  <Image
                    src="/images/projects/ramyas-jeweller/brand-identity-gold.png"
                    alt="Ramyas Jeweller 3D Sculpted Mark"
                    fill
                    sizes="200px"
                    className="object-contain p-2"
                  />
                </div>
                <span className="absolute bottom-1 right-2 text-[8px] font-mono font-bold text-neutral-900 uppercase tracking-wider bg-white/95 px-1">
                  3D GOLD VEL FILIGREE
                </span>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="mt-8 sm:mt-10 p-5 bg-[#171717] text-white border-2 border-neutral-900 shadow-[6px_6px_0px_#00B8C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#00B8C8] uppercase tracking-wider font-bold block">
                  READY TO EXECUTE YOUR PROJECT?
                </span>
                <p className="font-sans text-sm font-bold mt-0.5">
                  Let&apos;s build something memorable together.
                </p>
              </div>

              <a
                href="#contact"
                className="py-2.5 px-5 bg-[#00B8C8] hover:bg-white text-[#171717] font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0"
              >
                <span>INITIATE PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
