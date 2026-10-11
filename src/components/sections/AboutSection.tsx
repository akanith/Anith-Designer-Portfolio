"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Palette, Cpu, Compass, Layers, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const tools = [
    { name: "Adobe Photoshop", category: "Compositing & Retouching" },
    { name: "Adobe Illustrator", category: "Vector Systems & Logotypes" },
    { name: "Adobe After Effects", category: "Motion Graphics & Kinetic Typography" },
    { name: "Figma", category: "Design Architecture & UI/UX" },
    { name: "Blender 3D", category: "Spatial Modeling & Staging" },
    { name: "Three.js / R3F", category: "Interactive Web Shaders" },
    { name: "Midjourney & ComfyUI", category: "AI Generative Concepts" },
    { name: "Next.js / React", category: "Creative Front-End Engineering" },
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas border-t border-ink-border subtle-grid">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-accent-cobalt" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
                {"// ANITH / THINKLOOM CREATIVE STUDIO"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
              DESIGN IS HOW <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cobalt via-accent-violet to-accent-coral">
                IDEAS BECOME VISIBLE.
              </span>
            </h2>

            <div className="mt-8 space-y-4 max-w-2xl text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
              <p>
                I am <span className="text-ink font-bold">Anith</span>, an independent designer creating identities, campaigns, and visual experiences backed by the creative studio <span className="text-accent-cobalt font-mono font-bold">ThinkLoom</span>.
              </p>
              <p>
                My work spans brand identity systems, high-voltage advertising posters, sports graphics, retail jewellery collateral, and AI-assisted motion narratives. Rather than relying on generic templates or repetitive formulas, I treat each project as a unique spatial artifact designed to build durable brand equity.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-accent-cobalt hover:shadow-gallery"
                data-cursor="hover"
                data-cursor-text="CONNECT"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-white px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-ink hover:border-ink hover:text-accent-coral transition-all shadow-sm"
                data-cursor="hover"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Tenets */}
          <div className="lg:col-span-4 rounded-2xl border border-ink-border bg-white p-7 md:p-8 shadow-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-cobalt block mb-4">
              {"// Studio Tenets"}
            </span>
            <ul className="space-y-4 font-sans text-sm text-ink-secondary">
              <li className="border-b border-[#F0F0EB] pb-3">
                <strong className="text-ink block font-display text-base mb-1">
                  Tactile Realism
                </strong>
                Materials should feel weighted, light should interact honestly, and compositions should carry physical presence.
              </li>
              <li className="border-b border-[#F0F0EB] pb-3">
                <strong className="text-ink block font-display text-base mb-1">
                  Typographic Gravity
                </strong>
                Letterforms are not placeholders—they set the cadence, stature, and tone of the entire brand.
              </li>
              <li>
                <strong className="text-ink block font-display text-base mb-1">
                  Creative Technology
                </strong>
                Merging procedural shaders, 3D spatial modeling, and agile design systems to elevate visual storytelling.
              </li>
            </ul>
          </div>
        </div>

        {/* Tools and Capabilities Matrix */}
        <div className="rounded-2xl border border-ink-border bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0F0EB] pb-6 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-coral block mb-1">
                {"// Production Stack"}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Tools, Software & Systems
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              MASTERED WORKFLOWS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((t, idx) => (
              <div
                key={t.name}
                className="group rounded-xl border border-ink-border bg-[#FAFAF7] p-4 transition-all hover:border-accent-cobalt hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-ink-muted group-hover:text-accent-cobalt font-semibold">
                    SYS-0{idx + 1}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-cobalt opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-display text-sm font-bold text-ink group-hover:text-accent-cobalt transition-colors">
                  {t.name}
                </div>
                <div className="font-sans text-xs text-ink-secondary mt-1">
                  {t.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
