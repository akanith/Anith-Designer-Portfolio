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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Oversized Typographic Statement */}
          <div className="lg:col-span-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t-2 border-neutral-900">
              {pillars.map((p) => (
                <div key={p.num} className="p-4 bg-white border border-neutral-900 shadow-[4px_4px_0px_#171717]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {p.num}
                    </span>
                    {p.icon}
                  </div>
                  <h4 className="font-sans text-sm sm:text-base font-black text-neutral-950 uppercase tracking-tight mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Genuine Studio Artwork Editorial Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Asymmetric Two-Panel Artwork Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-5 items-start">
              
              {/* Panel 01 — Messiah Sports (Primary, Larger Panel) */}
              <div className="sm:col-span-7 flex flex-col group">
                <div className="relative w-full aspect-[2/3] bg-neutral-950 rounded-xl border-2 border-neutral-900 shadow-[5px_5px_0px_#171717] overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#00B8C8]">
                  <Image
                    src="/images/projects/messiah-sports/socks-campaign.png"
                    alt="Messiah Sports Commercial Campaign Poster"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-contain p-1.5 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                {/* Caption Underneath Image */}
                <div className="mt-3">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#00B8C8] uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B8C8]" />
                    <span>MESSIAH SPORTS</span>
                  </div>
                  <h5 className="font-sans text-sm font-bold text-neutral-950 mt-0.5 tracking-tight">
                    Performance Grip Socks Campaign
                  </h5>
                  <p className="font-mono text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Commercial advertising poster & calibrated prepress production proof.
                  </p>
                </div>
              </div>

              {/* Panel 02 — Ramyas Jeweller (Secondary, Aligned Panel) */}
              <div className="sm:col-span-5 flex flex-col group">
                <div className="relative w-full aspect-square bg-[#121216] rounded-xl border-2 border-neutral-900 shadow-[5px_5px_0px_#171717] overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#65C74A]">
                  <Image
                    src="/images/projects/ramyas-jeweller/brand-identity-gold.png"
                    alt="Ramyas Jeweller 3D Sculpted Mark"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                    className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Caption Underneath Image */}
                <div className="mt-3">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber-500 uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>RAMYAS JEWELLER</span>
                  </div>
                  <h5 className="font-sans text-sm font-bold text-neutral-950 mt-0.5 tracking-tight">
                    3D Gold Vel Filigree Mark
                  </h5>
                  <p className="font-mono text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Heritage brand emblem sculpted for fine jewellery branding.
                  </p>
                </div>

                {/* Balanced Studio Prepress Quality Card */}
                <div className="mt-4 p-3.5 bg-white border border-neutral-900 rounded-lg shadow-[3px_3px_0px_#171717]">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65C74A]" />
                    <span>CALIBRATED PRODUCTION</span>
                  </div>
                  <p className="font-mono text-[11px] text-neutral-700 font-medium mt-1 leading-snug">
                    Vector identities engineered for seamless offset & digital multicolour press output.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Bar / CTA */}
            <div className="mt-2 p-5 bg-[#171717] text-white border-2 border-neutral-900 shadow-[6px_6px_0px_#00B8C8] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                className="py-2.5 px-5 bg-[#00B8C8] hover:bg-white text-[#171717] font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0 rounded-lg"
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
