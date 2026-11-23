"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, creativeProcess } from "@/data/services";
import { ArrowUpRight, Plus, Minus, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  return (
    <section id="services" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas subtle-grid border-t border-ink-border">
      <div className="mx-auto max-w-7xl">
        {/* CHAPTER 04: HOW I CREATE (The Design Process) */}
        <div id="process" className="mb-28">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-accent-cobalt" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
              {"// CHAPTER 04 — HOW I CREATE"}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-border pb-8 mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
              DISCOVER → CONCEPT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cobalt via-accent-violet to-accent-coral">
                DESIGN → DELIVER.
              </span>
            </h2>

            <p className="max-w-md text-sm md:text-base text-ink-secondary font-sans leading-relaxed">
              A disciplined four-phase creative pipeline that transforms raw brand intent into high-fidelity, gallery-grade deliverables.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeProcess.map((step, idx) => {
              const borderAccents = [
                "hover:border-accent-cobalt group-hover:text-accent-cobalt",
                "hover:border-accent-coral group-hover:text-accent-coral",
                "hover:border-accent-violet group-hover:text-accent-violet",
                "hover:border-accent-yellow group-hover:text-ink",
              ];
              const accent = borderAccents[idx % borderAccents.length];

              return (
                <div
                  key={step.step}
                  className={`group relative rounded-2xl border border-ink-border bg-white p-7 transition-all duration-300 shadow-sm hover:shadow-gallery ${accent.split(" ")[0]}`}
                >
                  <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-4 mb-5">
                    <span className="font-mono text-xs font-black text-ink-muted group-hover:text-ink transition-colors">
                      PHASE {step.step}
                    </span>
                    <span className="font-mono text-[10px] text-ink-secondary uppercase tracking-widest">
                      {idx < 3 ? "NEXT →" : "COMPLETE"}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-black text-ink tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-cobalt font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="border-t border-[#F0F0EB] pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted block mb-2">
                      {"// Key Deliverables"}
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="font-mono text-[11px] text-ink flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-accent-coral" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CHAPTER 05: CAPABILITIES (The 3 Studio Production Verticals) */}
        <div className="border-t border-ink-border pt-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-[#00B8C8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#00B8C8] font-semibold">
              {"// CHAPTER 05 — CAPABILITIES"}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-border pb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
                PRECISION CRAFT. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8C8] to-[#65C74A]">
                  THREE DISCIPLINES.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm md:text-base text-ink-secondary font-sans leading-relaxed">
              Graphic Design, Digital & Offset Multicolour Printing, and AI Video Creation under one unified production roof.
            </p>
          </div>

          {/* Interactive Editorial Services List */}
          <div className="mt-8 divide-y divide-ink-border border-b border-ink-border">
            {services.map(service => {
              const isOpen = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className={`group transition-colors duration-300 ${
                    isOpen ? "bg-white" : "hover:bg-white/50"
                  }`}
                >
                  {/* Header row toggle */}
                  <button
                    onClick={() => setActiveServiceId(isOpen ? "" : service.id)}
                    className="flex w-full items-center justify-between py-7 md:py-9 text-left transition-all"
                    data-cursor="hover"
                    data-cursor-text={isOpen ? "CLOSE" : "EXPAND"}
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="font-mono text-sm md:text-base font-bold text-ink-muted group-hover:text-accent-cobalt transition-colors">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink transition-colors group-hover:text-accent-cobalt">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 font-sans text-sm md:text-base text-ink-secondary hidden sm:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden lg:inline-block font-mono text-xs uppercase tracking-wider text-ink-muted">
                        {service.suitableFor.slice(0, 36)}...
                      </span>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-accent-cobalt bg-accent-cobalt text-white shadow-sm"
                            : "border-ink-border bg-white text-ink group-hover:border-ink"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Collapsible Deep Details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pb-10 pt-2"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 rounded-2xl border border-ink-border bg-[#FAFAF7] p-6 md:p-8 shadow-inner">
                          {/* Left description */}
                          <div className="md:col-span-7 flex flex-col justify-between">
                            <div>
                              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-cobalt mb-3 block">
                                {"// Scope & Strategic Purpose"}
                              </span>
                              <p className="font-sans text-base text-ink leading-relaxed mb-6">
                                {service.description}
                              </p>

                              <div className="rounded-xl border border-ink-border bg-white p-4">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted block mb-1">
                                  Ideal For
                                </span>
                                <p className="font-sans text-sm text-ink-secondary">
                                  {service.suitableFor}
                                </p>
                              </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-ink-border flex items-center gap-3">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-cobalt transition-colors"
                              >
                                <span>Commission This Capability</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </a>
                            </div>
                          </div>

                          {/* Right deliverables */}
                          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-ink-border pt-6 md:pt-0 md:pl-8">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-coral mb-4 block">
                              {"// Tangible Deliverables"}
                            </span>
                            <ul className="space-y-3">
                              {service.deliverables.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 font-sans text-sm text-ink font-medium"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-accent-coral shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
