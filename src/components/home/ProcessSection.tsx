import React from "react";
import { processSteps } from "@/data/services";
import { CreativeProcessStep } from "@/types";

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="max-w-2xl mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-lime block mb-3">
          Methodology
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-warm-white tracking-tight">
          How We Work
        </h2>
        <p className="mt-3 text-sm md:text-base text-warm-gray font-sans">
          A disciplined, transparent creative workflow designed to transform ambitious ideas into market-defining brand assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step: CreativeProcessStep) => (
          <div
            key={step.step}
            className="bg-obsidian-card border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-lime/40 transition-all duration-300 relative group rounded-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-lime">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-warm-muted px-2 py-0.5 bg-white/5 rounded">
                  Stage
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-warm-white mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-lime mb-4">
                {step.subtitle}
              </p>

              <p className="text-xs text-warm-gray leading-relaxed mb-6 font-sans">
                {step.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-wider uppercase text-warm-muted block mb-2">
                Stage Deliverables:
              </span>
              <ul className="space-y-1 text-[11px] text-warm-gray">
                {step.deliverables.map((del: string) => (
                  <li key={del} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-lime" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
