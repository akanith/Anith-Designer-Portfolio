"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp, ArrowUpRight } from "lucide-react";

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
              <div className="relative w-7 h-7 rounded-sm bg-[#171717] p-1 flex items-center justify-center">
                <Image
                  src="/images/brand/thinkloom-logo.png"
                  alt="ThinkLoom Logo"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold uppercase">THINKLOOM</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#00B8C8]" />
              <span className="font-mono text-xs font-normal text-ink-muted">DESIGN & PRINTING</span>
            </div>

            <p className="mt-4 max-w-md text-sm text-ink-secondary leading-relaxed font-sans">
              ThinkLoom is a design and printing studio uniting graphic design, digital & offset multicolour printing, and generative AI video creation to bring creative ideas into reality.
            </p>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-[#00B8C8] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#65C74A] animate-ping" />
              <span>BEYOND DESIGN. INTO REALITY. // 2026 COMMISSIONS OPEN</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink block mb-4">
              Index
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#hero" className="hover:text-[#00B8C8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#00B8C8] transition-colors">
                  Our Work & Showcase
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8C8] transition-colors">
                  Official Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00B8C8] transition-colors">
                  About ThinkLoom
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00B8C8] transition-colors">
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
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#00B8C8] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#65C74A] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#00B8C8] transition-colors flex items-center gap-1">
                  <span>Instagram: {siteConfig.contact.socials.instagramHandle}</span>
                  <ArrowUpRight className="w-3 h-3" />
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
            © {new Date().getFullYear()} ThinkLoom | Design and Printing. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-ink hover:text-[#00B8C8] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
