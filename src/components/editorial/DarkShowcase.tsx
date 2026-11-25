"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Download,
  CheckCircle2
} from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import MotionLab from "@/components/editorial/MotionLab";
import SocialCreativesCarousel from "@/components/editorial/SocialCreativesCarousel";
import ProjectShowcasePerspective from "@/components/editorial/ProjectShowcasePerspective";

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
    <>
      {/* =========================================================================
          CHAPTER 01: PROJECT SHOWCASE — 3D PERSPECTIVE CARD GALLERY
          ========================================================================= */}
      <ProjectShowcasePerspective onSelectProject={onSelectProject} />

      {/* =========================================================================
          CHAPTER 02: THINKLOOM / MOTION LAB (CINEMATIC FILM EXHIBITION)
          ========================================================================= */}
      <section id="motion-lab-cinema" className="relative w-full bg-[#0D0D11] text-white py-24 sm:py-32 border-b-2 border-neutral-900 overflow-hidden">
        {/* Background Architectural Grid Pattern */}
        <div className="absolute inset-0 dark-technical-grid opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <MotionLab />
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03: DIGITAL & OFFSET PRINTING PRODUCTION (Warm Ivory Prepress Spread)
          ========================================================================= */}
      <div className="w-full bg-[#F5F1E8] text-[#171717] py-24 sm:py-32 border-b-2 border-neutral-900 relative overflow-hidden">
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
          CHAPTER 04: SOCIAL MEDIA CREATIVES (REACT BITS CIRCULAR CAROUSEL)
          ========================================================================= */}
      <SocialCreativesCarousel />
    </>
  );
}
