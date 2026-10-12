"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  ArrowUpRight, 
  Sparkles,
  Check,
  Copy
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function GraciasClosing() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative w-full paper-warm-canvas pt-24 pb-16 px-4 sm:px-6 md:px-12 border-t-2 border-neutral-900 overflow-hidden">
      {/* Draftsman Corner Marks */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        [TL-FINALE-2026] // CLOSING SPREAD
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        COPYRIGHT © THINKLOOM / ANITH
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 font-mono text-xs uppercase tracking-widest text-neutral-700 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-coral" />
          <span>PROJECT COMMISSION & COLLABORATIONS</span>
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
          <div className="absolute -top-6 right-2 sm:right-10 text-accent-cobalt font-brush text-4xl sm:text-6xl rotate-12">
            ★ thank you!
          </div>
        </motion.div>

        {/* Subtitle */}
        <p className="mt-4 font-mono text-base sm:text-xl md:text-2xl text-neutral-800 font-semibold max-w-xl">
          “Thanks for exploring my creative world.”
        </p>

        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
          Ready to launch an unmistakable visual identity, commercial campaign, or high-octane poster suite? Let&apos;s build something bold together.
        </p>

        {/* Central Contact Cards Grid */}
        <div className="w-full max-w-3xl mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          
          {/* Email Direct Card */}
          <div className="bg-white border-2 border-neutral-900 p-6 shadow-[6px_6px_0px_#171717] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-accent-coral font-bold tracking-widest uppercase">
                  DIRECT INBOX
                </span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </div>
              <p className="font-mono text-base sm:text-lg font-bold text-neutral-950 break-all">
                {siteConfig.contact.email}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Typical reply within 24 hours for project inquiries
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex-1 py-2.5 px-4 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-accent-coral transition-colors"
              >
                SEND EMAIL
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2.5 bg-neutral-100 border border-neutral-300 text-neutral-700 hover:bg-neutral-200 transition-colors"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-white border-2 border-neutral-900 p-6 shadow-[6px_6px_0px_#171717] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">
                  INSTANT WHATSAPP
                </span>
                <MessageCircle className="w-4 h-4 text-neutral-400" />
              </div>
              <p className="font-mono text-base sm:text-lg font-bold text-neutral-950">
                {siteConfig.contact.phone}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Immediate responses for urgent commercial commissions
              </p>
            </div>

            <div className="mt-6">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 px-4 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-emerald-700 transition-colors"
              >
                START WHATSAPP CHAT
              </a>
            </div>
          </div>

        </div>

        {/* Social Links & Studio Metadata */}
        <div className="w-full max-w-4xl mt-16 pt-8 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-600">
          
          <div className="flex items-center gap-4">
            <span className="font-bold text-neutral-900">THINKLOOM</span>
            <span>{"//"}</span>
            <span>ART DIRECTED BY ANITH</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-coral transition-colors flex items-center gap-1"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={siteConfig.contact.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-coral transition-colors flex items-center gap-1"
            >
              <span>BEHANCE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={siteConfig.contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-coral transition-colors flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
