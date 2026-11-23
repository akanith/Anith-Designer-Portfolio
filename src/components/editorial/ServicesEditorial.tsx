"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Printer, Video, ArrowUpRight, Sparkles, FolderOpen } from "lucide-react";
import FolderFloat, { FolderNote } from "@/components/FolderFloat";

type FolderId = "graphic-design" | "multicolour-printing" | "ai-video-creation";

export default function ServicesEditorial() {
  // Controlled single active folder: exactly one folder open at a time. Default to folder 01.
  const [activeFolder, setActiveFolder] = useState<FolderId | null>("graphic-design");

  const handleNoteClick = (note: FolderNote, folderId: string) => {
    // Scroll seamlessly to relevant chapter in Project Showcase
    if (folderId === "graphic-design") {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (folderId === "multicolour-printing") {
      const el = Array.from(document.querySelectorAll("h3")).find(
        (h) => h.textContent && h.textContent.includes("PRINTING PRODUCTION")
      );
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (folderId === "ai-video-creation") {
      const el = Array.from(document.querySelectorAll("h3")).find(
        (h) => h.textContent && h.textContent.includes("AI VIDEO")
      );
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFolder = (id: FolderId) => {
    setActiveFolder((prev) => (prev === id ? null : id));
  };

  // 1. FOLDER 01 — GRAPHIC DESIGN (Exact 6 official deliverables)
  const graphicDesignNotes: FolderNote[] = [
    { id: "logo-design", title: "Logo Design", category: "Brand Identity" },
    { id: "poster-design", title: "Poster Design", category: "Commercial Advertising" },
    { id: "business-card-design", title: "Business Card Design", category: "Corporate Stationery" },
    { id: "brochure-catalogue-design", title: "Brochure & Catalogue Design", category: "Editorial Publications" },
    { id: "advertising-design", title: "Advertising Design", category: "Commercial Campaigns" },
    { id: "social-media-creatives", title: "Social Media Creatives", category: "Digital Marketing" },
  ];

  // 2. FOLDER 02 — DIGITAL & OFFSET MULTICOLOUR PRINTING (Exact all 10 official deliverables)
  const printingNotes: FolderNote[] = [
    { id: "flyers-notices", title: "Flyers & Notices", category: "High-Speed Press" },
    { id: "led-frames", title: "LED Frames", category: "Illuminated Retail" },
    { id: "business-cards", title: "Business Cards", category: "Tactile Finishes" },
    { id: "backlit-printing", title: "Backlit Printing", category: "Signage & Displays" },
    { id: "lamination-binding", title: "Lamination & Binding", category: "Finishing & Bindery" },
    { id: "stickers-die-cutting", title: "Stickers & Die Cutting", category: "Custom Dielines" },
    { id: "letterheads-bill-books", title: "Letterheads & Bill Books", category: "Corporate Stationery" },
    { id: "plan-printing", title: "A4 to A0 Plan Printing", category: "Architectural Drafting" },
    { id: "brochures-catalogues", title: "Brochures & Catalogues", category: "Offset Prepress" },
    { id: "wedding-invitation-cards", title: "Wedding & Invitation Cards", category: "Specialty Foil" },
  ];

  // 3. FOLDER 03 — AI VIDEO CREATION (Exact 1 official deliverable)
  const aiVideoNotes: FolderNote[] = [
    { id: "ai-advertisement-videos", title: "AI Advertisement Videos", category: "Generative Commercial Motion" },
  ];

  const foldersConfig = [
    {
      id: "graphic-design" as FolderId,
      number: "01",
      title: "GRAPHIC DESIGN",
      subtitle: "Brand Identity & Commercial Creatives",
      description: "Bespoke vector marks, brand systems, and high-impact commercial advertising crafted for enduring recognition.",
      notes: graphicDesignNotes,
      color: "#00B8C8",
      icon: <PenTool className="w-5 h-5 text-[#00B8C8]" />,
    },
    {
      id: "multicolour-printing" as FolderId,
      number: "02",
      title: "MULTICOLOUR PRINTING",
      subtitle: "Digital & Offset Production",
      description: "Industrial-fidelity offset press, precision CMYK prepress, tactile lamination, and bespoke ceremonial binding.",
      notes: printingNotes,
      color: "#65C74A",
      icon: <Printer className="w-5 h-5 text-[#65C74A]" />,
    },
    {
      id: "ai-video-creation" as FolderId,
      number: "03",
      title: "AI VIDEO CREATION",
      subtitle: "Commercial Motion Teasers",
      description: "High-velocity AI advertisement videos, 3D metallic logo reveals, and cinematic product teasers engineered for digital reach.",
      notes: aiVideoNotes,
      color: "#00B8C8",
      icon: <Video className="w-5 h-5 text-[#00B8C8]" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full paper-warm-canvas py-16 sm:py-20 px-4 sm:px-6 md:px-12 border-b-2 border-neutral-900 overflow-hidden"
    >
      {/* Drafting Corner Coordinates */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        [TL-SERVICES-2026] // REACT BITS FOLDER FLOAT
      </div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block">
        BEYOND DESIGN. INTO REALITY. // THREE SPECIALIZED FOLDERS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Master Section Header */}
        <div className="mb-10 sm:mb-12 border-b-2 border-neutral-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#00B8C8] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-pulse" />
              <span>INTERACTIVE SERVICES ARCHIVE // REACT BITS FOLDER FLOAT</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-neutral-950 tracking-tighter uppercase leading-none">
              OUR <span className="text-[#00B8C8]">SERVICES</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-neutral-600 space-y-1">
            <p className="font-bold text-neutral-900 uppercase">
              Three production disciplines stored in tactile studio folders.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Hover on desktop or tap on mobile to open each folder and release its floating deliverables cloud.
            </p>
          </div>
        </div>

        {/* ========================================================
            THREE INTERACTIVE REACT BITS FOLDER FLOAT PRESENTATIONS
            Controlled single active folder prevents overlapping.
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-end">
          {foldersConfig.map((folder, idx) => {
            const isOpen = activeFolder === folder.id;

            return (
              <motion.div
                key={folder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-full flex justify-center"
              >
                <FolderFloat
                  id={folder.id}
                  number={folder.number}
                  title={folder.title}
                  subtitle={folder.subtitle}
                  description={folder.description}
                  notes={folder.notes}
                  color={folder.color}
                  icon={folder.icon}
                  isOpen={isOpen}
                  onToggle={() => toggleFolder(folder.id)}
                  onHover={() => setActiveFolder(folder.id)}
                  onNoteClick={(note) => handleNoteClick(note, folder.id)}
                  className="w-full"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Section Quick Summary & Inquire CTA */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-ping" />
            <span>ALL THREE DISCIPLINES EXECUTED IN-HOUSE WITH STRICT QUALITY STANDARDS</span>
          </div>

          <a
            href="#contact"
            className="font-bold text-neutral-900 hover:text-[#00B8C8] transition-colors inline-flex items-center gap-1 uppercase"
          >
            <span>INQUIRE ABOUT PRINT & DESIGN PRODUCTION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
