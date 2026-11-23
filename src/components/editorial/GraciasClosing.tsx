"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  ArrowUpRight, 
  Check, 
  Copy,
  Sparkles,
  ArrowUp
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ProfileCard from "@/components/ProfileCard";

export default function GraciasClosing() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full paper-warm-canvas pt-24 sm:pt-32 pb-16 px-4 sm:px-6 md:px-12 border-t-2 border-neutral-900 overflow-hidden">
      {/* Draftsman Corner Marks */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        [TL-FINALE-2026] // CLOSING SPREAD
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        COPYRIGHT © THINKLOOM // DESIGN AND PRINTING
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 font-mono text-xs uppercase tracking-widest text-neutral-700 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-ping" />
          <span>PROJECT COMMISSIONS & BRAND INQUIRIES</span>
        </div>

        {/* Massive Bold Heading: GRACIAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative select-none"
        >
          <h2 className="text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black tracking-tighter text-neutral-950 uppercase leading-none">
            GRACIAS
          </h2>

          {/* Hand-drawn blue brush star / accent */}
          <div className="absolute -top-6 right-2 sm:right-10 text-[#00B8C8] font-brush text-4xl sm:text-6xl rotate-12">
            ★ thank you!
          </div>
        </motion.div>

        {/* Subtitle */}
        <p className="mt-4 font-mono text-base sm:text-xl md:text-2xl text-neutral-800 font-semibold max-w-2xl">
          “Thanks for exploring ThinkLoom&apos;s creative world.”
        </p>

        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
          Have a project in mind? From distinctive visual identity to multicolour offset printing and AI advertisement videos, let&apos;s bring your ideas into reality.
        </p>

        {/* Integrated Founder Spotlight & Contact Suite */}
        <div className="w-full max-w-5xl mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive React Bits Founder Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <ProfileCard
                name="A.K. Anith"
                role="Founder / Creative Designer"
                studio="ThinkLoom"
                tagline="Beyond Design. Into Reality."
                avatarUrl="/images/founder/anith-profile.jpg"
                email={siteConfig.contact.email}
                phone={siteConfig.contact.phone}
                whatsappUrl={siteConfig.contact.whatsapp}
                instagramUrl={siteConfig.contact.socials.instagram}
              />
            </div>
            <p className="mt-3 text-[11px] font-mono text-neutral-500 uppercase tracking-wider text-center">
              Interactive 3D Holographic Founder Card • Hover & Tilt
            </p>
          </div>

          {/* Right Column: Clean Editorial Contact Cards Suite */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left w-full">
            
            {/* Direct Email Card (Fixed wrapping issue) */}
            <div className="bg-white border-2 border-neutral-900 p-5 sm:p-6 shadow-[5px_5px_0px_#171717] transition-all hover:translate-x-0.5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#00B8C8] font-bold tracking-widest uppercase">
                  DIRECT STUDIO INBOX
                </span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </div>

              {/* Full email with nowrap protection on larger screens and readable styling */}
              <div className="my-2">
                <p className="font-mono text-base sm:text-lg lg:text-xl font-bold text-neutral-950 tracking-tight select-all">
                  {siteConfig.contact.email}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Typical reply within 24 hours for branding, printing quotes & AI commercial briefs.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#00B8C8] hover:text-neutral-950 transition-colors"
                >
                  <span>COMPOSE EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 py-2.5 px-4 bg-neutral-100 border border-neutral-300 text-neutral-800 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="bg-white border-2 border-neutral-900 p-5 sm:p-6 shadow-[5px_5px_0px_#171717] transition-all hover:translate-x-0.5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">
                  INSTANT WHATSAPP CHAT
                </span>
                <MessageCircle className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="my-2">
                <p className="font-mono text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                  {siteConfig.contact.phone}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Direct line for urgent print jobs, press checks, and design consultation.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                >
                  <span>START WHATSAPP CHAT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Official Instagram & Social */}
            <div className="bg-white border-2 border-neutral-900 p-5 sm:p-6 shadow-[5px_5px_0px_#171717] transition-all hover:translate-x-0.5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#FF5A45] font-bold tracking-widest uppercase">
                  OFFICIAL INSTAGRAM
                </span>
                <Instagram className="w-4 h-4 text-[#FF5A45]" />
              </div>

              <div className="my-2">
                <p className="font-mono text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                  {siteConfig.contact.socials.instagramHandle}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Daily creative drops, print press runs, packaging mockups & behind-the-scenes reels.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={siteConfig.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF5A45] hover:text-white transition-colors"
                >
                  <span>VIEW @THINKLOOM__</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Studio Location & Production Notice */}
        <div className="mt-14 pt-8 border-t border-neutral-300 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#65C74A]" />
            <span>STUDIO LOCATION: TAMIL NADU, INDIA // NATIONWIDE PRINT SHIPPING</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-800 hover:text-[#00B8C8] transition-colors font-bold uppercase"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
