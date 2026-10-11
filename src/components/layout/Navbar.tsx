"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Universe", href: "#" },
    { label: "Selected Work", href: "#work" },
    { label: "How I Create", href: "#process" },
    { label: "Capabilities", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full border transition-all duration-400 ${
            isScrolled
              ? "bg-white/90 border-[#E5E5DF] px-5 sm:px-7 py-3 backdrop-blur-xl shadow-gallery"
              : "bg-white/75 border-[#EAEAE4] px-6 sm:px-8 py-3.5 backdrop-blur-md shadow-sm"
          } w-full max-w-5xl`}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-ink transition-opacity hover:opacity-90"
            data-cursor="hover"
            data-cursor-text="HOME"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-cobalt text-white font-mono text-xs font-black shadow-sm">
              T
            </span>
            <div className="flex items-center gap-1.5">
              <span className="tracking-tighter font-extrabold text-ink">THINKLOOM</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-coral group-hover:scale-125 transition-transform" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs tracking-wider uppercase text-ink-secondary">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="relative rounded-full px-3.5 py-1.5 text-ink-secondary transition-colors duration-200 hover:text-ink hover:bg-black/5"
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Start a Project Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-ink px-4 sm:px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-accent-cobalt hover:shadow-gallery hover:scale-[1.02] active:scale-[0.98]"
              data-cursor="hover"
              data-cursor-text="TALK"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-ink-border bg-white text-ink transition-colors hover:border-ink hover:text-accent-coral"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 text-accent-coral" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-canvas/98 p-8 pt-24 backdrop-blur-2xl md:hidden text-ink"
          >
            {/* Close button in drawer */}
            <div className="flex justify-between items-center border-b border-ink-border pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
                {"// ThinkLoom Navigation"}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-ink-border p-2 text-ink hover:bg-black/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="font-display text-3xl font-extrabold tracking-tight text-ink hover:text-accent-coral transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom contact CTA */}
            <div className="border-t border-ink-border pt-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent-cobalt p-4 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-gallery"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="mt-4 text-center font-mono text-[11px] text-ink-muted">
                {siteConfig.contact.email} • {siteConfig.contact.phone}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
