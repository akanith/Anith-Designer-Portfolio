"use client";

import { motion } from "framer-motion";
import { Eye, Flame, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function StorytellingSection() {
  const chapters = [
    {
      num: "01",
      tag: "THE VISUAL HOOK",
      title: "In 500 milliseconds, people judge your worth.",
      description:
        "Attention is the rarest currency. Whether it is an athletic poster stopping a scroll or a luxury jewellery passbook landing in a customer's hands, design must deliver immediate authority.",
      icon: Eye,
      accentBg: "bg-accent-coral/10",
      accentBorder: "border-accent-coral/30",
      accentText: "text-accent-coral",
    },
    {
      num: "02",
      tag: "TACTILE DIMENSION",
      title: "Flat designs fade. Tactile dimension endures.",
      description:
        "By merging directional lighting, architectural pedestals, paper grain, and dimensional geometry, we create visual artifacts that feel physically tangible even on a mobile screen.",
      icon: Flame,
      accentBg: "bg-accent-cobalt/10",
      accentBorder: "border-accent-cobalt/30",
      accentText: "text-accent-cobalt",
    },
    {
      num: "03",
      tag: "CULTURAL GRAVITY",
      title: "Honoring heritage while inventing the future.",
      description:
        "From sacred temple gold typography for Ramyas Jeweller to high-octane football crests for Blue Waves FC, true design respects its cultural roots while commanding global aesthetic standards.",
      icon: ShieldCheck,
      accentBg: "bg-accent-violet/10",
      accentBorder: "border-accent-violet/30",
      accentText: "text-accent-violet",
    },
  ];

  return (
    <section id="discover" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas border-t border-ink-border subtle-grid overflow-hidden">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-accent-cobalt/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-accent-coral/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Chapter 02 Marker & Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-accent-coral" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
              {"// CHAPTER 02 — DISCOVER"}
            </span>
          </div>

          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.08]"
          >
            GREAT WORK DOESN’T ASK FOR ATTENTION. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cobalt via-accent-violet to-accent-coral">
              IT EARNS IT.
            </span>
          </motion.h2>

          <p className="mt-6 text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
            Every identity, poster, and digital installation created at ThinkLoom is guided by three principles engineered to guarantee distinction.
          </p>
        </div>

        {/* Narrative Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={ch.num}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-2xl border border-ink-border bg-white p-8 transition-all duration-400 hover:border-ink hover:shadow-gallery"
              >
                {/* Top Number & Tag */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-5 mb-6">
                    <span className="font-mono text-3xl font-black text-ink-muted group-hover:text-ink transition-colors">
                      {ch.num}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${ch.accentBorder} ${ch.accentBg} ${ch.accentText}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[11px] font-bold tracking-widest uppercase block mb-3 ${ch.accentText}`}
                  >
                    {ch.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4">
                    {ch.title}
                  </h3>

                  <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                {/* Bottom Architectural Notation */}
                <div className="mt-8 pt-4 border-t border-[#F0F0EB] flex items-center justify-between font-mono text-[11px] text-ink-muted">
                  <span>FOUNDATION {ch.num}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-ink">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
