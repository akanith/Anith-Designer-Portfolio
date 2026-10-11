import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D9D5CC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Brand Statement & Persona */}
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold tracking-editorial uppercase text-teal block mb-3">
            About ThinkLoom
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-tight">
            An Independent Studio Backed by Direct Craft.
          </h2>

          <div className="mt-8 relative aspect-square max-w-sm bg-charcoal border border-[#D9D5CC] p-8 flex flex-col justify-between overflow-hidden group">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/images/brand/thinkloom-logo.png"
                alt="ThinkLoom Identity Mark"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-editorial uppercase text-teal block mb-1">
                Studio Philosophy
              </span>
              <p className="text-white font-display text-xl sm:text-2xl font-bold leading-snug">
                Where ideas turn into enduring brands.
              </p>
              <p className="text-xs text-[#8E8A82] mt-3">
                Direct client collaboration without agency bureaucracy or inflated overhead.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6 text-base sm:text-lg text-charcoal/90 leading-relaxed font-normal">
            <p>
              Hello, I am the designer behind <strong>{siteConfig.brand}</strong>. I operate as an independent graphic designer and creative director, partnering directly with founders, retailers, sports labels, and local brands to shape their visual presence.
            </p>
            <p className="text-muted-grey text-base">
              My work spans brand identity design, high-converting product advertisements, festive jewellery retail campaigns, sports event branding, and contemporary AI-assisted motion content. Rather than relying on generic templates, every project is crafted around the specific personality, culture, and market needs of the client.
            </p>
            <p className="text-muted-grey text-base">
              I believe great design is not just ornamentation—it is a critical business asset that establishes instant trust, commands fair pricing, and turns first-time viewers into loyal customers.
            </p>
          </div>

          {/* Three Studio Pillars */}
          <div className="mt-10 pt-10 border-t border-[#D9D5CC] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white border border-[#D9D5CC]">
              <Compass className="w-5 h-5 text-teal mb-3" />
              <h3 className="font-display font-bold text-sm text-charcoal">
                Strategic Foundation
              </h3>
              <p className="text-xs text-muted-grey mt-1">
                Every design choice begins with market positioning and authentic client goals.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#D9D5CC]">
              <Layers className="w-5 h-5 text-teal mb-3" />
              <h3 className="font-display font-bold text-sm text-charcoal">
                Meticulous Craft
              </h3>
              <p className="text-xs text-muted-grey mt-1">
                Relentless attention to kerning, color harmony, hierarchy, and print fidelity.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#D9D5CC]">
              <ShieldCheck className="w-5 h-5 text-teal mb-3" />
              <h3 className="font-display font-bold text-sm text-charcoal">
                Production-Ready
              </h3>
              <p className="text-xs text-muted-grey mt-1">
                Flawless asset delivery optimized for social feeds, digital ads, and print shops.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial text-charcoal hover:text-teal border-b border-charcoal hover:border-teal pb-1 transition-all group"
            >
              <span>Read Full Designer Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
