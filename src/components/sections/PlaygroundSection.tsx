"use client";

import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

const PlaygroundScene = dynamic(() => import("@/components/three/PlaygroundScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full items-center justify-center rounded-2xl border border-ink-border bg-white shadow-sm">
      <div className="h-10 w-10 rounded-full border-2 border-accent-cobalt border-t-transparent animate-spin" />
    </div>
  ),
});

export default function PlaygroundSection() {
  return (
    <section id="playground" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas subtle-grid border-t border-ink-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink-border pb-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-accent-violet animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-violet font-semibold">
                {"// EXPERIMENTAL 3D LAB"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
              INTERACTIVE 3D & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-cobalt to-accent-coral">
                SHADING PLAYGROUND.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-ink-secondary font-sans leading-relaxed">
            Test real-time geometry forms, procedural surface shaders, and studio lighting setups rendered dynamically in your browser.
          </p>
        </div>

        {/* 3D Playground Canvas */}
        <PlaygroundScene />
      </div>
    </section>
  );
}
