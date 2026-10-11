"use client";

import { siteConfig } from "@/data/siteConfig";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-ink-border bg-[#F5F5F0] py-16 px-6 md:px-12 subtle-grid text-ink-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-ink-border">
          {/* Brand Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-cobalt text-white font-mono text-xs font-black shadow-xs">
                T
              </span>
              <span className="font-extrabold">THINKLOOM</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
            </div>

            <p className="mt-4 max-w-md text-sm text-ink-secondary leading-relaxed font-sans">
              Anith / ThinkLoom — Experimental 3D art universe and creative studio crafting brand identities, advertising posters, retail jewellery systems, and motion visuals.
            </p>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-accent-cobalt font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent-cobalt animate-ping" />
              <span>Available for Select Client Commissions {"//"} 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block mb-4">
              Index
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#work" className="hover:text-accent-cobalt transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-cobalt transition-colors">
                  About Anith
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-cobalt transition-colors">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-accent-cobalt transition-colors">
                  Interactive 3D Lab
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-cobalt transition-colors">
                  Contact & Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block mb-4">
              Direct Contact
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent-cobalt transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent-coral transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-ink-muted">
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
          <div>
            © {new Date().getFullYear()} Anith / ThinkLoom Creative Studio. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-ink hover:text-accent-cobalt transition-colors"
            data-cursor="hover"
          >
            <span>Back to Summit</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
