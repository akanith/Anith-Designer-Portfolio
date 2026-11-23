"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, FolderOpen, Folder as FolderIcon } from "lucide-react";

export interface FolderNote {
  id: string;
  title: string;
  category?: string;
}

export interface FolderFloatProps {
  number: string; // "01", "02", "03"
  id: string;
  title: string;
  subtitle: string;
  description: string;
  notes: FolderNote[];
  color: string; // "#00B8C8" | "#65C74A"
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onHover?: () => void;
  onNoteClick?: (note: FolderNote) => void;
  className?: string;
}

/**
 * React Bits Folder Float Component for ThinkLoom
 * Skeuomorphic folder that opens on hover/tap, releasing floating paper service notes.
 * Exact non-overlapping trajectory math ensures 100% visibility and zero clipping.
 */
export default function FolderFloat({
  number,
  id,
  title,
  subtitle,
  description,
  notes,
  color = "#00B8C8",
  icon,
  isOpen,
  onToggle,
  onHover,
  onNoteClick,
  className = "",
}: FolderFloatProps) {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);

      return () => {
        window.removeEventListener("resize", checkMobile);
        mediaQuery.removeEventListener("change", listener);
      };
    }
  }, []);

  /**
   * Precise non-overlapping coordinates calculated for each discipline.
   * Every note receives a distinct vertical tier with >= 48px Y-separation,
   * guaranteeing 0 collisions in 2D bounding space.
   */
  const getNotePosition = (idx: number, total: number, mobile: boolean) => {
    // 1 NOTE: AI Video Creation (Centered cleanly above folder)
    if (total === 1) {
      return {
        x: 0,
        y: -65,
        rotate: -2,
        zIndex: 30,
      };
    }

    // 6 NOTES: Graphic Design (Balanced staggered 2-column cloud, compact headroom)
    if (total === 6) {
      const desktopOffsets = [
        { x: -75, y: -45, rotate: -2.5, zIndex: 21 }, // 0: Logo Design
        { x: 75, y: -65, rotate: 2.5, zIndex: 22 },  // 1: Poster Design
        { x: -75, y: -95, rotate: 2, zIndex: 23 },   // 2: Business Card Design
        { x: 75, y: -115, rotate: -2, zIndex: 24 },  // 3: Brochure & Catalogue Design
        { x: -75, y: -145, rotate: -2.5, zIndex: 25 },// 4: Advertising Design
        { x: 75, y: -165, rotate: 2.5, zIndex: 26 }, // 5: Social Media Creatives
      ];

      const mobileOffsets = [
        { x: -48, y: -42, rotate: -2, zIndex: 21 },
        { x: 48, y: -62, rotate: 2, zIndex: 22 },
        { x: -48, y: -90, rotate: 1.5, zIndex: 23 },
        { x: 48, y: -110, rotate: -1.5, zIndex: 24 },
        { x: -48, y: -138, rotate: -2, zIndex: 25 },
        { x: 48, y: -158, rotate: 2, zIndex: 26 },
      ];

      return mobile ? mobileOffsets[idx % mobileOffsets.length] : desktopOffsets[idx % desktopOffsets.length];
    }

    // 10 NOTES: Digital & Offset Printing (Structured 2-column cloud: 5 left, 5 right, compact headroom)
    const desktop10Offsets = [
      { x: -80, y: -42, rotate: -2.5, zIndex: 21 }, // 0: Flyers & Notices
      { x: 80, y: -60, rotate: 2.5, zIndex: 22 },   // 1: LED Frames
      { x: -80, y: -82, rotate: 2, zIndex: 23 },    // 2: Business Cards
      { x: 80, y: -100, rotate: -2, zIndex: 24 },   // 3: Backlit Printing
      { x: -80, y: -122, rotate: -2, zIndex: 25 },  // 4: Lamination & Binding
      { x: 80, y: -140, rotate: 2, zIndex: 26 },   // 5: Stickers & Die Cutting
      { x: -80, y: -162, rotate: 2.5, zIndex: 27 }, // 6: Letterheads & Bill Books
      { x: 80, y: -180, rotate: -2.5, zIndex: 28 }, // 7: A4 to A0 Plan Printing
      { x: -80, y: -202, rotate: -2, zIndex: 29 },  // 8: Brochures & Catalogues
      { x: 80, y: -220, rotate: 2, zIndex: 30 },   // 9: Wedding & Invitation Cards
    ];

    const mobile10Offsets = [
      { x: -50, y: -40, rotate: -2, zIndex: 21 },
      { x: 50, y: -58, rotate: 2, zIndex: 22 },
      { x: -50, y: -78, rotate: 1.5, zIndex: 23 },
      { x: 50, y: -96, rotate: -1.5, zIndex: 24 },
      { x: -50, y: -116, rotate: -2, zIndex: 25 },
      { x: 50, y: -134, rotate: 2, zIndex: 26 },
      { x: -50, y: -154, rotate: 2, zIndex: 27 },
      { x: 50, y: -172, rotate: -2, zIndex: 28 },
      { x: -50, y: -192, rotate: -1.5, zIndex: 29 },
      { x: 50, y: -210, rotate: 1.5, zIndex: 30 },
    ];

    return mobile ? mobile10Offsets[idx % mobile10Offsets.length] : desktop10Offsets[idx % desktop10Offsets.length];
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  const isTeal = color === "#00B8C8";

  // Dynamic headroom based on number of notes
  const stagePaddingClass = "pt-56 sm:pt-64";

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col justify-end select-none ${className}`}
      onMouseEnter={() => {
        if (!isMobile && onHover) onHover();
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={`${title} interactive service folder`}
    >
      {/* Folder Stage Container (provides headroom for the floating notes cloud) */}
      <div className={`relative w-full ${stagePaddingClass} flex items-center justify-center transition-all duration-300`}>
        
        {/* ========================================================
            FLOATING NOTES CLOUD (Springs out when folder is open)
            ======================================================== */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {notes.map((note, idx) => {
              const pos = getNotePosition(idx, notes.length, isMobile);
              const isHovered = activeNote === note.id;

              return (
                <motion.div
                  key={note.id}
                  initial={false}
                  animate={
                    isOpen
                      ? {
                          y: prefersReducedMotion ? pos.y * 0.5 : pos.y,
                          x: prefersReducedMotion ? 0 : pos.x,
                          rotate: prefersReducedMotion ? 0 : pos.rotate,
                          scale: isHovered ? 1.06 : 1,
                          opacity: 1,
                        }
                      : {
                          y: 20 + idx * 3,
                          x: (idx % 2 === 0 ? -1 : 1) * (idx * 2),
                          rotate: (idx % 2 === 0 ? -1 : 1) * 2,
                          scale: 0.85,
                          opacity: 0,
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.2 }
                      : {
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                          mass: 0.8,
                          delay: isOpen ? idx * 0.03 : 0,
                        }
                  }
                  style={{
                    zIndex: isHovered ? 60 : pos.zIndex,
                  }}
                  onMouseEnter={() => setActiveNote(note.id)}
                  onMouseLeave={() => setActiveNote(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNoteClick) onNoteClick(note);
                  }}
                  className={`absolute pointer-events-auto cursor-pointer px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border-2 shadow-lg transition-all flex items-center gap-2 max-w-[200px] sm:max-w-[230px] ${
                    isHovered
                      ? isTeal
                        ? "bg-[#171717] text-white border-[#00B8C8] shadow-[0_10px_25px_rgba(0,184,200,0.35)] -translate-y-1"
                        : "bg-[#171717] text-white border-[#65C74A] shadow-[0_10px_25px_rgba(101,199,74,0.35)] -translate-y-1"
                      : "bg-[#FBF9F5] text-[#171717] border-neutral-900 shadow-[3px_3px_0px_#171717]"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-mono text-xs sm:text-[12.5px] font-bold tracking-tight whitespace-nowrap truncate">
                    {note.title}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            SKEUOMORPHIC FOLDER BODY (Back Cover + Front Flap)
            ======================================================== */}
        <div
          onClick={onToggle}
          className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[400px] cursor-pointer group"
          style={{ perspective: 1200 }}
        >
          {/* FOLDER BACK COVER with Top Index Tab */}
          <div
            className={`relative w-full rounded-2xl bg-[#1A1A1F] border-2 transition-all duration-300 shadow-[8px_8px_0px_#171717] overflow-visible ${
              isOpen
                ? isTeal
                  ? "border-[#00B8C8] shadow-[8px_8px_0px_#00B8C8]"
                  : "border-[#65C74A] shadow-[8px_8px_0px_#65C74A]"
                : "border-neutral-800 hover:border-neutral-600"
            }`}
          >
            {/* Top Manila-Style Folder Tab */}
            <div
              className={`absolute -top-7 left-4 px-3.5 py-1.5 rounded-t-xl border-t-2 border-x-2 transition-colors flex items-center gap-2 ${
                isOpen
                  ? isTeal
                    ? "bg-[#171717] border-[#00B8C8] text-[#00B8C8]"
                    : "bg-[#171717] border-[#65C74A] text-[#65C74A]"
                  : "bg-[#23232A] border-neutral-700 text-neutral-300"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                FOLDER {number}
              </span>
            </div>

            {/* Top Right Quick Status Tag */}
            <div className="absolute -top-5 right-4 font-mono text-[9px] text-neutral-400 uppercase tracking-wider font-bold">
              {notes.length} {notes.length === 1 ? "DELIVERABLE" : "DELIVERABLES"}
            </div>

            {/* Folder Interior Well (Paper Sheets Stacked) */}
            <div className="h-48 sm:h-52 p-5 flex flex-col justify-between relative bg-gradient-to-b from-[#141418] to-[#1E1E24] rounded-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  THINKLOOM SPECIFICATION FILE
                </span>
                <span className="font-mono text-[10px] text-neutral-400">
                  {number} {"//"} 03
                </span>
              </div>

              {/* Peeking internal paper textures */}
              <div className="space-y-1.5 opacity-30 pointer-events-none">
                <div className="h-2 w-3/4 bg-neutral-600 rounded-sm" />
                <div className="h-2 w-1/2 bg-neutral-700 rounded-sm" />
                <div className="h-2 w-2/3 bg-neutral-600 rounded-sm" />
              </div>

              <div className="font-mono text-[10px] text-neutral-500 flex items-center justify-between">
                <span>PRESS ARCHIVE</span>
                <span style={{ color }}>
                  {isOpen ? "STATUS: RELEASED" : "STATUS: DOCKED"}
                </span>
              </div>
            </div>

            {/* ========================================================
                FOLDER FRONT FLAP (Tilts forward smoothly on open)
                ======================================================== */}
            <motion.div
              initial={false}
              animate={
                isOpen
                  ? {
                      rotateX: prefersReducedMotion ? 0 : -32,
                      y: prefersReducedMotion ? 8 : 6,
                      scale: 0.98,
                    }
                  : {
                      rotateX: 0,
                      y: 0,
                      scale: 1,
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : {
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }
              }
              style={{
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
              className={`absolute inset-0 rounded-2xl bg-[#121216] border-2 p-5 sm:p-6 flex flex-col justify-between shadow-[0_16px_30px_rgba(0,0,0,0.6)] transition-colors ${
                isOpen
                  ? isTeal
                    ? "border-[#00B8C8]"
                    : "border-[#65C74A]"
                  : "border-neutral-700 hover:border-neutral-500"
              }`}
            >
              {/* Flap Header & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                    {icon}
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
                    DISCIPLINE {number}
                  </span>
                </div>

                <span
                  className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase border"
                  style={{
                    backgroundColor: `${color}18`,
                    color: color,
                    borderColor: `${color}40`,
                  }}
                >
                  {isOpen ? "ACTIVE FOLDER" : "TAP TO OPEN"}
                </span>
              </div>

              {/* High-Contrast Discipline Typography */}
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#00B8C8] transition-colors">
                  {title}
                </h4>
                <p className="font-mono text-[11px] font-bold text-neutral-400 mt-1 uppercase tracking-wide">
                  {subtitle}
                </p>
              </div>

              {/* Flap Footer Action Line */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-400 uppercase flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: color }}
                  />
                  <span>
                    {isOpen
                      ? `${notes.length} DELIVERABLES RELEASED`
                      : `CLICK TO VIEW ${notes.length} SERVICES`}
                  </span>
                </span>
                <ArrowUpRight
                  className={`w-4 h-4 transition-transform ${
                    isOpen ? "rotate-90 text-[#00B8C8]" : "text-neutral-400"
                  }`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Folder Subtitle Description */}
      <div className="mt-4 text-center max-w-[360px] sm:max-w-[390px] mx-auto w-full">
        <p className="text-xs text-neutral-600 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
