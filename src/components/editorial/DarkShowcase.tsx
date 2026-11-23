"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Film, 
  Play, 
  Pause, 
  Maximize2,
  Volume2,
  VolumeX,
  Download,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import MotionLab from "@/components/editorial/MotionLab";
import SocialCreativesCarousel from "@/components/editorial/SocialCreativesCarousel";

interface DarkShowcaseProps {
  onSelectProject?: (project: Project) => void;
}

export default function DarkShowcase({ onSelectProject }: DarkShowcaseProps) {
  const handleSelect = (slug: string) => {
    if (!onSelectProject) return;
    const found = projects.find((p) => p.slug === slug);
    if (found) {
      onSelectProject(found);
    }
  };

  // 4-PAGE PRINT PASSBOOK SPREAD
  const passbookPages = [
    {
      num: "01",
      title: "Cover & Insignia",
      desc: "Deep maroon bond stock with 3D sculpted gold Tamil emblem & floral dieline borders",
      url: "/images/projects/ramyas-jeweller/savings-scheme-page-1.png",
    },
    {
      num: "02",
      title: "Customer & UPI Onboarding",
      desc: "Account holder credentials, digital QR codes for instant PhonePe/GPay payments & WhatsApp link",
      url: "/images/projects/ramyas-jeweller/savings-scheme-page-2.png",
    },
    {
      num: "03",
      title: "12-Month Installment Ledger",
      desc: "High-precision accounting grid with monthly payment stamps, cashier signatures & verification",
      url: "/images/projects/ramyas-jeweller/savings-scheme-page-3.png",
    },
    {
      num: "04",
      title: "Maturity & Bonus Rules",
      desc: "Gold bonus calculation matrix, redemption terms, and full showroom contact credentials",
      url: "/images/projects/ramyas-jeweller/savings-scheme-page-4.png",
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full bg-[#0D0D11] text-white py-28 sm:py-36 border-b-2 border-neutral-900 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 dark-technical-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* =========================================================================
            SHOWCASE MASTER HEADER
            ========================================================================= */}
        <div className="mb-24 sm:mb-32 pb-8 border-b-2 border-neutral-800 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00B8C8] tracking-widest uppercase mb-3 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B8C8] animate-pulse" />
              <span>BEHANCE-INSPIRED CREATIVE EXHIBITION // 2026 ARCHIVE</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
              PROJECT <span className="text-[#00B8C8]">SHOWCASE</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-neutral-400 space-y-1">
            <p className="text-neutral-200 font-bold uppercase">
              Brand identity, commercial campaigns, AI video motion, and multicolour print production.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Explore authentic commissioned works executed with rigorous craft and architectural discipline.
            </p>
          </div>
        </div>

        {/* =========================================================================
            FEATURED PROJECT 01: MESSIAH SPORTS (Full-Width Asymmetric Exhibition)
            ========================================================================= */}
        <div className="mb-32 sm:mb-40">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-[#00B8C8] text-[#171717] font-mono text-[10px] font-bold uppercase tracking-wider">
                FEATURED CASE STUDY 01
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase font-bold">
                MESSIAH SPORTS // ATHLETIC APPAREL & PACKAGING SYSTEM
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-500 font-bold hidden sm:inline">
              2024 ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left 7 Columns: Giant Campaign Hero Artwork */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => handleSelect("messiah-sports-socks")}
              className="lg:col-span-7 group cursor-pointer bg-[#14141A] border-2 border-neutral-800 hover:border-[#00B8C8] p-4 sm:p-6 shadow-[10px_10px_0px_#171717] transition-all flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[3/4] bg-neutral-950 overflow-hidden rounded-lg mb-6">
                <Image
                  src="/images/projects/messiah-sports/socks-campaign.png"
                  alt="Messiah Sports Small Gear Big Difference Campaign Poster"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain p-2 group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-4 left-4 bg-neutral-950/90 text-[#00B8C8] border border-neutral-700 px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                  OFFICIAL COMMERCIAL POSTER
                </div>

                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00B8C8] text-[#171717] font-mono text-xs font-bold uppercase shadow-2xl rounded">
                    <Maximize2 className="w-4 h-4" />
                    <span>EXPLORE MESSIAH CASE STUDY</span>
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs text-[#00B8C8] font-bold uppercase tracking-wider">
                    ATHLETIC APPAREL & PACKAGING SYSTEM
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#00B8C8] transition-colors leading-tight">
                  Messiah Sports — Small Gear, Big Difference Campaign
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  High-octane typographic mark, dynamic angled terminals, geometric compression monogram, and tactile retail packaging designed for athletic footwear and anti-slip performance stockings.
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 text-white font-bold group-hover:text-[#00B8C8] transition-colors">
                    <span>VIEW FULL CASE STUDY & ASSETS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="text-neutral-500 uppercase">CLIENT: MESSIAH ATHLETICS</span>
                </div>
              </div>
            </motion.div>

            {/* Right 5 Columns: Supporting Asymmetric Artworks */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Boots Cinematic Staging */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => handleSelect("messiah-sports-football-boots")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#00B8C8] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/messiah-sports/football-boots.png"
                    alt="Messiah Sports Pro Elite Football Boots Staging"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-white font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    FOOTWEAR STAGING
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#00B8C8] transition-colors">
                      Pro Elite Footwear Cinematic Art
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      Stadium floodlight reflection & high-traction stud staging
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#00B8C8] shrink-0" />
                </div>
              </motion.div>

              {/* Retail Packaging Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => handleSelect("messiah-sports-socks")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#00B8C8] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/messiah-sports/mockup-packaging-box.jpeg"
                    alt="Messiah Sports Tactile Packaging Box Artwork"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-white font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    TACTILE PACKAGING
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#00B8C8] transition-colors">
                      Retail Packaging Box Design
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      Monochrome typography with technical prepress dielines
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#00B8C8] shrink-0" />
                </div>
              </motion.div>

              {/* Technical Blueprint Board */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => handleSelect("messiah-sports-socks")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#00B8C8] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/messiah-sports/stockings-board.png"
                    alt="Messiah Sports Technical Specification Board"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-[#00B8C8] font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    TECHNICAL BLUEPRINT
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#00B8C8] transition-colors">
                      Engineering Specification Board
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      Anti-slip silicone grip map & graduated compression metrics
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#00B8C8] shrink-0" />
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* =========================================================================
            FEATURED PROJECT 02: RAMYAS JEWELLER (Festive Campaign & 4-Page Passbook)
            ========================================================================= */}
        <div className="mb-32 sm:mb-40">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-[#65C74A] text-[#171717] font-mono text-[10px] font-bold uppercase tracking-wider">
                FEATURED CASE STUDY 02
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase font-bold">
                RAMYAS JEWELLER // DIWALI MICRO-SAVINGS & BULLION IDENTITY
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-500 font-bold hidden sm:inline">
              2024 ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left 5 Columns: Supporting Festive Brochures & Digital App Staging */}
            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
              
              {/* Diwali Savings Brochure Hero */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => handleSelect("ramyas-jeweller-diwali-savings")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#65C74A] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png"
                    alt="Ramyas Jeweller Diwali Savings Scheme Brochure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-[#65C74A] font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    PROMOTIONAL BROCHURE
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#65C74A] transition-colors">
                      Diwali Micro-Savings Commercial Brochure
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      12-Month gold installment table with Diwali bonus structure
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#65C74A] shrink-0" />
                </div>
              </motion.div>

              {/* 3D Sculpted Gold Logo Motion Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => handleSelect("ramyas-jeweller-gold-silver-rates")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#65C74A] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/ramyas-jeweller/brand-identity-gold.png"
                    alt="Ramyas Jeweller 3D Sculpted Gold Mark"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-amber-300 font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    3D SCULPTED GOLD EMBLEM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#65C74A] transition-colors">
                      3D Sculpted Gold Insignia & Vel Filigree
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      High-poly Tamil ligature sculpted for showroom architecture
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#65C74A] shrink-0" />
                </div>
              </motion.div>

              {/* Play Store Digital Onboarding Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => handleSelect("ramyas-jeweller-diwali-savings")}
                className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#65C74A] p-4 shadow-[6px_6px_0px_#171717] transition-all rounded-lg"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden rounded mb-3">
                  <Image
                    src="/images/projects/ramyas-jeweller/play-store-header.png"
                    alt="Ramyas Jeweller Play Store Application Header"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-[#00B8C8] font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                    PLAY STORE APP ASSETS
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-base font-bold text-white group-hover:text-[#65C74A] transition-colors">
                      Mobile App Store Branding & UI Guide
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">
                      Customer passbook tracking & instant UPI payment screens
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#65C74A] shrink-0" />
                </div>
              </motion.div>

            </div>

            {/* Right 7 Columns: Giant Diwali Savings Poster Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => handleSelect("ramyas-jeweller-diwali-savings")}
              className="lg:col-span-7 group cursor-pointer bg-[#14141A] border-2 border-neutral-800 hover:border-[#65C74A] p-4 sm:p-6 shadow-[10px_10px_0px_#171717] transition-all flex flex-col justify-between order-1 lg:order-2"
            >
              <div className="relative w-full aspect-[3/4] bg-neutral-950 overflow-hidden rounded-lg mb-6">
                <Image
                  src="/images/projects/ramyas-jeweller/diwali-savings-poster.png"
                  alt="Ramyas Jeweller Diwali Savings Launch Poster"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain p-2 group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-4 left-4 bg-neutral-950/90 text-[#65C74A] border border-neutral-700 px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded">
                  TAMIL FESTIVE TYPOGRAPHY POSTER
                </div>

                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#65C74A] text-[#171717] font-mono text-xs font-bold uppercase shadow-2xl rounded">
                    <Maximize2 className="w-4 h-4" />
                    <span>EXPLORE RAMYAS CASE STUDY</span>
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs text-[#65C74A] font-bold uppercase tracking-wider">
                    RETAIL FESTIVE ADVERTISING & PREPRESS
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#65C74A] transition-colors leading-tight">
                  Ramyas Jeweller — Diwali Gold Savings Campaign
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  Bespoke Tamil typography layout celebrating traditional gold micro-savings, complete with 4-page offset passbooks, festive commercial explainer videos, and daily bullion market templates.
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 text-white font-bold group-hover:text-[#65C74A] transition-colors">
                    <span>VIEW FULL CASE STUDY & ASSETS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="text-neutral-500 uppercase">CLIENT: RAMYAS JEWELLER</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================================================
            FEATURED PROJECT 03: PANORAMIC WALL ART & RETAIL FLYERS
            ========================================================================= */}
        <div className="mb-32 sm:mb-40">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-neutral-800 text-neutral-200 border border-neutral-700 font-mono text-[10px] font-bold uppercase tracking-wider">
                FEATURED CASE STUDY 03
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase font-bold">
                COMMERCIAL WALL ART & MILESTONE INVITATIONS
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-500 font-bold hidden sm:inline">
              2024 ARCHIVE
            </span>
          </div>

          {/* Panoramic CR7 Wall Art */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleSelect("cr7-celebration-fan-art")}
            className="group cursor-pointer bg-[#14141A] border-2 border-neutral-800 hover:border-[#00B8C8] p-4 sm:p-6 shadow-[8px_8px_0px_#171717] transition-all rounded-xl mb-8"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 overflow-hidden rounded-lg mb-4">
              <Image
                src="/images/projects/football-wallpaper/cr7-celebration-wallpaper.png"
                alt="CR7 Iconic Celebration Stadium Wall Art Illustration"
                fill
                sizes="100vw"
                className="object-contain p-2 group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-neutral-950/90 text-[#00B8C8] border border-neutral-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider rounded">
                COMMERCIAL STADIUM WALL ART // ULTRA-WIDE
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-neutral-800">
              <div>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  COMMERCIAL PRINT ART // FOOTBALL WALLPAPER
                </span>
                <h4 className="font-sans text-xl sm:text-2xl font-black text-white group-hover:text-[#00B8C8] transition-colors mt-0.5">
                  CR7 Iconic Celebration — Stadium Atmosphere Wall Graphic
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00B8C8] font-bold uppercase">
                <span>VIEW LARGE ARTWORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Dual Invitations Grid: Ceremonial Housewarming & Kuttyverse Flyer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Housewarming */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-[#14141A] border border-neutral-800 hover:border-[#65C74A] p-5 shadow-[6px_6px_0px_#171717] transition-all rounded-xl flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[4/3] bg-neutral-950 overflow-hidden rounded mb-4">
                <Image
                  src="/images/projects/creative/house-warming.png"
                  alt="Ceremonial Housewarming Invitation Card"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-amber-300 font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                  CEREMONIAL FOIL PRINT
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                  PRIVATE MILESTONE // FOIL PRINTING
                </span>
                <h4 className="font-sans text-lg font-black text-white mt-0.5">
                  Traditional Tamil Housewarming Invitation Card
                </h4>
                <p className="font-mono text-xs text-neutral-400 mt-1 leading-relaxed">
                  Lavish gold foil stamping, traditional auspicious verses, and rich ceremonial border artwork printed on heavy textured ivory cardstock.
                </p>
              </div>
            </motion.div>

            {/* Kuttyverse Flyer */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => handleSelect("kuttyverse-toys-and-launch")}
              className="group cursor-pointer bg-[#14141A] border border-neutral-800 hover:border-[#00B8C8] p-5 shadow-[6px_6px_0px_#171717] transition-all rounded-xl flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[4/3] bg-neutral-950 overflow-hidden rounded mb-4">
                <Image
                  src="/images/projects/kuttyverse/grand-opening-invitation.png"
                  alt="Kuttyverse Grand Opening Invitation Flyer"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-950/90 text-[#00B8C8] font-mono text-[9px] font-bold border border-neutral-700 uppercase">
                  RETAIL FLYER PRINT
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#00B8C8] uppercase tracking-wider block">
                  KUTTYVERSE RETAIL // OFFSET PROMO
                </span>
                <h4 className="font-sans text-lg font-black text-white group-hover:text-[#00B8C8] transition-colors mt-0.5">
                  Grand Opening Ceremony Invitation & Flyer
                </h4>
                <p className="font-mono text-xs text-neutral-400 mt-1 leading-relaxed">
                  Full-bleed offset promotional flyer with whimsical children&apos;s toy store character mascot and retail launch discount tokens.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================================================
            CHAPTER 03: THINKLOOM / MOTION LAB (CINEMATIC FILM EXHIBITION)
            ========================================================================= */}
        <div className="mb-32 sm:mb-40">
          <MotionLab />
        </div>

      </div>

      {/* =========================================================================
          CHAPTER 04: DIGITAL & OFFSET PRINTING PRODUCTION (Warm Ivory Prepress Spread)
          ========================================================================= */}
      <div className="w-full bg-[#F5F1E8] text-[#171717] py-24 sm:py-32 border-y-2 border-neutral-900 mt-20 relative overflow-hidden">
        {/* Architectural drafting grid on ivory */}
        <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b-2 border-[#DDD8CF] gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#00B8C8] font-bold tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#65C74A]" />
                <span>PHYSICAL CRAFTSMANSHIP & PREPRESS PRODUCTION</span>
              </div>
              <h3 className="text-4xl sm:text-6xl font-black text-[#171717] tracking-tight uppercase leading-tight">
                DIGITAL & OFFSET PRINTING CASE STUDY
              </h3>
            </div>

            {/* Direct Prepress Master PDF Download */}
            <div className="shrink-0">
              <a
                href="/docs/ramyas-savings-scheme-print-master.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 py-3.5 px-6 bg-[#171717] text-white hover:bg-[#65C74A] hover:text-[#171717] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[4px_4px_0px_#DDD8CF] rounded-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PREPRESS PDF MASTER (3.37 MB)</span>
              </a>
            </div>
          </div>

          {/* Ramyas Jeweller 4-Page Passbook Editorial Spread */}
          <div className="bg-white border-2 border-[#DDD8CF] p-6 sm:p-10 shadow-[10px_10px_0px_#DDD8CF] rounded-2xl mb-12">
            <div className="mb-6">
              <span className="px-2.5 py-0.5 bg-[#65C74A] text-[#171717] font-mono text-[10px] font-bold uppercase tracking-wider rounded">
                OFFSET CMYK PRODUCTION
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-[#171717] mt-2">
                Ramyas Jeweller — 12-Month Gold Savings Scheme Collateral
              </h4>
              <p className="font-mono text-xs sm:text-sm text-[#666666] mt-1 max-w-3xl leading-relaxed">
                Industrial offset press proof on 300 GSM bond stock with 4-page gatefold architecture: Cover insignia, account & UPI digital onboarding, 12-month installment ledger, and bonus calculation table.
              </p>
            </div>

            {/* 4 Pages Interlocking Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {passbookPages.map((page) => (
                <div
                  key={page.num}
                  onClick={() => handleSelect("ramyas-jeweller-diwali-savings")}
                  className="group cursor-pointer bg-[#F8F6F0] border border-[#DDD8CF] hover:border-[#65C74A] p-4 rounded-xl flex flex-col justify-between transition-all"
                >
                  <div className="relative w-full aspect-[3/4] bg-white overflow-hidden rounded-lg mb-3 border border-[#DDD8CF]">
                    <Image
                      src={page.url}
                      alt={page.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-[#171717] text-[#65C74A] px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                      PAGE {page.num}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-sans text-sm font-bold text-[#171717] group-hover:text-[#65C74A] transition-colors">
                      {page.title}
                    </h5>
                    <p className="font-mono text-[11px] text-[#666666] mt-1 line-clamp-2">
                      {page.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666666] pt-4">
            <span className="flex items-center gap-1.5 font-bold text-[#171717]">
              <CheckCircle2 className="w-4 h-4 text-[#65C74A]" />
              <span>STRICT CMYK COLOUR PROFILE CALIBRATION & HIGH-SPEED DIE CUTTING</span>
            </span>
            <span className="mt-2 sm:mt-0 font-medium">
              ESTIMATES & PRESS SPECS AVAILABLE FOR ALL PRINT COMMISSIONS
            </span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          CHAPTER 05: SOCIAL MEDIA CREATIVES (REACT BITS CIRCULAR CAROUSEL)
          ========================================================================= */}
      <SocialCreativesCarousel />
    </section>
  );
}
