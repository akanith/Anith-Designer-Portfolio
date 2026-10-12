"use client";

import React from "react";
import { MapPin, Check, BookOpen } from "lucide-react";

export default function StudioAbout() {
  return (
    <section id="about" className="relative w-full paper-warm-canvas py-28 px-4 sm:px-6 md:px-12 border-b border-neutral-300 overflow-hidden">
      {/* Decorative Drafting Marks */}
      <div className="absolute top-10 left-10 font-mono text-[10px] text-neutral-400 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        [ARCHIVE BIO] // MANIFESTO & PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 border-b-2 border-neutral-900 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-accent-coral uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE DESIGNER BEHIND THINKLOOM</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-neutral-950 tracking-tighter uppercase">
              STUDIO & ABOUT
            </h2>
          </div>
          <div className="flex items-center gap-2 text-neutral-700 font-mono text-xs font-bold">
            <MapPin className="w-4 h-4 text-accent-cobalt" />
            <span>OPERATING ACROSS CHENNAI & DINDIGUL</span>
          </div>
        </div>

        {/* Editorial Narrative & Principles Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-neutral-900 text-white font-mono text-xs px-3 py-1 uppercase tracking-widest">
            PERSONAL MANIFESTO
          </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 leading-tight">
              “Graphic design is not decoration. It is visual force, narrative authority, and tactile memory.”
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              I established <strong className="text-neutral-950">ThinkLoom</strong> to push back against generic templates and predictable corporate visuals. Every campaign I direct blends razor-sharp typographic hierarchy with raw physical texture—incorporating ripped paper, screen-print imperfections, and cinematic staging.
            </p>

            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              Whether designing a daily bullion pricing broadcast viewed by thousands of retail buyers, an international-grade sports advertisement, or an heirloom jewellery passbook, my focus remains constant: create work that is impossible to scroll past.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-300">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-accent-coral/20 text-accent-coral flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-neutral-950">Bespoke Vector Craft</h4>
                  <p className="font-mono text-xs text-neutral-500">Every curve and anchor hand-crafted in Illustrator</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-accent-cobalt/20 text-accent-cobalt flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-neutral-950">Rapid Commercial Delivery</h4>
                  <p className="font-mono text-xs text-neutral-500">Agile template systems for daily social publishing</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-neutral-950">Multi-Channel Consistency</h4>
                  <p className="font-mono text-xs text-neutral-500">From 10ft outdoor billboards to 9:16 mobile stories</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-neutral-950">Cinematic Lighting</h4>
                  <p className="font-mono text-xs text-neutral-500">Atmospheric studio light & 3D product staging</p>
                </div>
              </div>
            </div>

            {/* Direct Studio Contact Bar */}
            <div className="p-4 bg-white border border-neutral-300 flex items-center justify-between shadow-[4px_4px_0px_#171717]">
              <div>
                <span className="font-mono text-[10px] text-accent-coral font-bold uppercase tracking-widest block">
                  TALK DIRECTLY WITH ANITH
                </span>
                <span className="font-mono text-sm font-bold text-neutral-900">
                  +91 87781 73681
                </span>
              </div>
              <a
                href="https://wa.me/918778173681"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-emerald-700 transition-colors"
              >
                WHATSAPP CHAT
              </a>
            </div>

          </div>

        </div>
      </section>
  );
}
