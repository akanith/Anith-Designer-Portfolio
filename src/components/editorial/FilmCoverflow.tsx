"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize, 
  ChevronLeft, 
  ChevronRight, 
  Film, 
  Sparkles, 
  X,
  Clapperboard,
  RotateCcw
} from "lucide-react";

export interface MotionFilm {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  format: string;
  src: string;
  poster: string;
  description: string;
  badge: string;
  ratio: "16:9" | "9:16";
}

export const MOTION_FILMS: MotionFilm[] = [
  {
    id: "messiah-sports-commercial",
    number: "01",
    title: "Messiah Sports — High-Performance Product Commercial",
    client: "Messiah Sports",
    category: "AI Commercial Video",
    duration: "0:25",
    format: "1080p MP4",
    src: "/videos/messiah-sports.mp4",
    poster: "/images/videos/messiah-sports-poster.jpg",
    description: "Generative athletic commercial featuring cinematic lighting shifts, dynamic footwear motion, and high-cadence product staging.",
    badge: "AI ADVERTISEMENT",
    ratio: "9:16",
  },
  {
    id: "ramyas-logo-reveal",
    number: "02",
    title: "Ramyas Jeweller — 3D Sculpted Gold Logo Reveal",
    client: "Ramyas Jeweller",
    category: "Brand Motion Graphic",
    duration: "0:10",
    format: "1080p MP4",
    src: "/videos/ramyas-logo-motion.mp4",
    poster: "/images/videos/ramyas-logo-motion-poster.jpg",
    description: "Lustrous 3D metallic particle reveal highlighting sculpted Tamil ligatures and traditional divine vel filigree.",
    badge: "3D MOTION GRAPHIC",
    ratio: "9:16",
  },
  {
    id: "ramyas-diwali-explainer",
    number: "03",
    title: "Ramyas Jeweller — Diwali Savings Scheme Explainer",
    client: "Ramyas Jeweller",
    category: "Promotional Explainer Video",
    duration: "0:30",
    format: "1080p MP4",
    src: "/videos/ramyas-diwali-explainer.mp4",
    poster: "/images/videos/ramyas-diwali-explainer-poster.jpg",
    description: "Commercial festive explainer detailing 12-month micro-savings, digital registration, and gold bonuses.",
    badge: "EXPLAINER VIDEO",
    ratio: "9:16",
  },
  {
    id: "ramyas-savings-commercial",
    number: "04",
    title: "Ramyas Jeweller — Savings Scheme Video Commercial",
    client: "Ramyas Jeweller",
    category: "AI Advertisement Video",
    duration: "0:45",
    format: "1080p MP4",
    src: "/videos/ramyas-savings-scheme.mp4",
    poster: "/images/videos/ramyas-savings-scheme-poster.jpg",
    description: "Generative festive jewellery commercial broadcast across regional digital channels and showroom displays.",
    badge: "AI COMMERCIAL",
    ratio: "9:16",
  },
  {
    id: "ramyas-diwali-greeting",
    number: "05",
    title: "Ramyas Jeweller — Festive Diwali Wishes Commercial",
    client: "Ramyas Jeweller",
    category: "Festive Video Greeting",
    duration: "0:20",
    format: "1080p MP4",
    src: "/videos/ramyas-diwali-wishing.mp4",
    poster: "/images/videos/ramyas-diwali-wishing-poster.jpg",
    description: "Auspicious festive greetings combining traditional brass diyas, fireworks, and gold jewellery collections.",
    badge: "FESTIVE GREETING",
    ratio: "9:16",
  },
  {
    id: "ramyas-app-guide",
    number: "06",
    title: "Ramyas Jeweller — Mobile App Walkthrough & Install Guide",
    client: "Ramyas Jeweller",
    category: "App Walkthrough Video",
    duration: "1:00",
    format: "1080p MP4",
    src: "/videos/ramyas-app-installation.mp4",
    poster: "/images/videos/ramyas-app-installation-poster.jpg",
    description: "Step-by-step customer onboarding video demonstrating Play Store app installation and UPI passbook tracking.",
    badge: "APP WALKTHROUGH",
    ratio: "9:16",
  },
];

export default function FilmCoverflow() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [viewportWidth, setViewportWidth] = useState<number>(1440);

  // Video modal playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number>(0);
  const currentDrag = useRef<number>(0);
  const isDragThresholdPassed = useRef<boolean>(false);

  const currentFilm = MOTION_FILMS[activeIdx];
  const totalFilms = MOTION_FILMS.length;

  // Track responsive viewport
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Geometry calculations for Apple Coverflow
  const getResponsiveParams = useCallback(() => {
    if (viewportWidth >= 1280) {
      return {
        cardWidth: 540,
        cardHeight: 310,
        centerSpacing: 280,
        adjacentSpacing: 90,
        baseAngle: 45,
        stagePerspective: 1200,
      };
    }
    if (viewportWidth >= 1024) {
      return {
        cardWidth: 460,
        cardHeight: 270,
        centerSpacing: 240,
        adjacentSpacing: 75,
        baseAngle: 42,
        stagePerspective: 1100,
      };
    }
    if (viewportWidth >= 768) {
      return {
        cardWidth: 380,
        cardHeight: 225,
        centerSpacing: 180,
        adjacentSpacing: 55,
        baseAngle: 36,
        stagePerspective: 950,
      };
    }
    return {
      cardWidth: 285,
      cardHeight: 170,
      centerSpacing: 105,
      adjacentSpacing: 35,
      baseAngle: 28,
      stagePerspective: 800,
    };
  }, [viewportWidth]);

  const params = getResponsiveParams();

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => Math.min(totalFilms - 1, prev + 1));
  }, [totalFilms]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.code === "Space") {
          e.preventDefault();
          togglePlay();
        }
        return;
      }

      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handlePrev, handleNext]);

  // Open & Close Cinema Modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    document.body.style.overflow = "";
  };

  // Video controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (!modalContainerRef.current) return;
    if (!document.fullscreenElement) {
      modalContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    currentDrag.current = 0;
    isDragThresholdPassed.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 0) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 12) {
      isDragThresholdPassed.current = true;
      currentDrag.current = delta;
      setDragOffset(delta);
    }
  };

  const handlePointerUp = () => {
    if (isDragThresholdPassed.current) {
      const threshold = 40;
      if (currentDrag.current < -threshold) {
        handleNext();
      } else if (currentDrag.current > threshold) {
        handlePrev();
      }
    }
    setDragOffset(0);
    setTimeout(() => {
      isDragThresholdPassed.current = false;
    }, 60);
  };

  const handleCardClick = (idx: number) => {
    if (isDragThresholdPassed.current) return;
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    } else {
      openModal();
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  return (
    <div className="relative w-full text-white select-none">
      {/* 1. Header: IDEAS IN MOTION (Preserved heading & art direction) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-800 gap-6">
        <div>
          {/* Studio Meta Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-neutral-900 border border-neutral-800 font-mono text-[11px] font-bold tracking-widest uppercase text-[#00B8C8] mb-3 rounded">
            <Film className="w-3.5 h-3.5 text-[#00B8C8]" />
            <span>THINKLOOM / MOTION LAB</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#65C74A] animate-ping ml-1" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none">
            IDEAS IN MOTION<span className="text-[#00B8C8]">.</span>
          </h2>
        </div>

        {/* Supporting Line & Interactive Instructions */}
        <div className="flex flex-col md:text-right max-w-md">
          <p className="font-mono text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
            AI-powered commercial films, crafted to make brands move.
          </p>
          <div className="mt-2 flex items-center md:justify-end gap-3 font-mono text-xs text-neutral-500 font-bold uppercase tracking-widest">
            <span>3D COVERFLOW {"//"} 06 PRODUCTIONS</span>
            <span className="text-neutral-700">•</span>
            <span className="text-[#00B8C8]">REEL {currentFilm.number} / {totalFilms.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* 2. 3D Film Coverflow Stage */}
      <div 
        className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ perspective: `${params.stagePerspective}px` }}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {MOTION_FILMS.map((film, idx) => {
            const offset = idx - activeIdx;
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // Coverflow calculation
            let x = 0;
            let z = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 40;
            let opacity = 1;

            if (isCenter) {
              x = dragOffset;
              z = 0;
              rotateY = (dragOffset / 20); // subtle tilt during drag
              scale = 1;
              zIndex = 50;
              opacity = 1;
            } else if (offset < 0) {
              // Left cards
              const baseDist = -params.centerSpacing - (absOffset - 1) * params.adjacentSpacing;
              x = baseDist + dragOffset * 0.4;
              z = -110 - (absOffset - 1) * 60;
              rotateY = Math.min(50, params.baseAngle + (absOffset - 1) * 3);
              scale = Math.max(0.65, 0.88 - (absOffset - 1) * 0.08);
              zIndex = 40 - absOffset;
              opacity = Math.max(0.35, 1 - absOffset * 0.18);
            } else {
              // Right cards
              const baseDist = params.centerSpacing + (absOffset - 1) * params.adjacentSpacing;
              x = baseDist + dragOffset * 0.4;
              z = -110 - (absOffset - 1) * 60;
              rotateY = -Math.min(50, params.baseAngle + (absOffset - 1) * 3);
              scale = Math.max(0.65, 0.88 - (absOffset - 1) * 0.08);
              zIndex = 40 - absOffset;
              opacity = Math.max(0.35, 1 - absOffset * 0.18);
            }

            return (
              <motion.div
                key={film.id}
                onClick={() => handleCardClick(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Select film ${film.number}: ${film.title}`}
                aria-pressed={isCenter}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  position: "absolute",
                  width: `${params.cardWidth}px`,
                  height: `${params.cardHeight}px`,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                className={`group/card rounded-[8px] border cursor-pointer transition-colors overflow-hidden ${
                  isCenter
                    ? "border-[#00B8C8] shadow-[0_22px_55px_rgba(0,0,0,0.85),0_0_24px_rgba(0,184,200,0.22)] ring-1 ring-[#00B8C8]"
                    : "border-neutral-800 bg-[#121217] shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-neutral-600"
                }`}
              >
                {/* 16:9 Thumbnail Artwork */}
                <div className="relative w-full h-full bg-[#0E0E12] overflow-hidden">
                  <Image
                    src={film.poster}
                    alt={film.title}
                    fill
                    sizes="(max-width: 768px) 290px, 540px"
                    priority={isCenter}
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />

                  {/* Top Film Meta Strip */}
                  <div className="absolute top-2.5 sm:top-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2 py-0.5 bg-neutral-950/90 border border-neutral-700/80 rounded font-mono text-[9px] sm:text-[10px] text-[#00B8C8] font-bold uppercase tracking-wider backdrop-blur-sm">
                      REEL {film.number}
                    </span>
                    <span className="px-2 py-0.5 bg-neutral-900/90 border border-neutral-700/80 rounded font-mono text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-wider backdrop-blur-sm">
                      {film.badge}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all ${
                    isCenter 
                      ? "bg-black/25 group-hover/card:bg-black/15" 
                      : "bg-black/55 group-hover/card:bg-black/40"
                  }`}>
                    {isCenter ? (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#00B8C8] text-[#171717] flex items-center justify-center shadow-[0_0_30px_rgba(0,184,200,0.65)] group-hover/card:scale-110 transition-transform">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-900/85 border border-neutral-600 text-white flex items-center justify-center group-hover/card:scale-110 group-hover/card:border-[#00B8C8] transition-all">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Technical Pill */}
                  <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between z-10 pointer-events-none font-mono text-[9px] sm:text-[10px]">
                    <span className="px-2 py-0.5 bg-neutral-950/90 text-neutral-300 font-bold rounded backdrop-blur-sm">
                      {film.format}
                    </span>
                    <span className="px-2 py-0.5 bg-neutral-950/90 text-[#65C74A] font-bold rounded backdrop-blur-sm">
                      {film.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Film Information & Action Deck Below Coverflow */}
      <div className="mt-8 pt-8 border-t border-neutral-800/90 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Film Meta & Narrative Synopsis */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="font-bold uppercase text-[#00B8C8] tracking-wider">
              {currentFilm.client}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 uppercase font-medium">
              {currentFilm.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="px-1.5 py-0.2 bg-neutral-800 text-neutral-300 text-[10px] font-bold rounded">
              {currentFilm.duration}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
            {currentFilm.title}
          </h3>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            {currentFilm.description}
          </p>
        </div>

        {/* Right: Actions, Navigation Controls & Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
          {/* SCREEN FILM Primary CTA */}
          <button
            type="button"
            onClick={openModal}
            aria-label={`Screen film: ${currentFilm.title}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#00B8C8] text-neutral-950 font-mono text-xs font-black uppercase tracking-wider rounded-[8px] shadow-[0_4px_18px_rgba(0,184,200,0.35)] hover:bg-white hover:shadow-[0_4px_22px_rgba(255,255,255,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <Play className="w-4 h-4 fill-current translate-x-0.5" />
            <span>Screen Film</span>
          </button>

          {/* Controls: Prev / Counter / Next */}
          <div className="flex items-center gap-2.5">
            {/* Counter Box */}
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-[8px] text-white">
              <span className="text-[#00B8C8]">{currentFilm.number}</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">{totalFilms.toString().padStart(2, "0")}</span>
            </div>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Previous film"
              className={`p-2 rounded-[8px] border font-mono text-xs transition-all flex items-center justify-center ${
                activeIdx === 0
                  ? "opacity-30 cursor-not-allowed bg-neutral-900 border-neutral-800 text-neutral-500"
                  : "bg-neutral-900 border-neutral-700 text-white hover:border-[#00B8C8] hover:text-[#00B8C8] cursor-pointer active:scale-95"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === totalFilms - 1}
              aria-label="Next film"
              className={`p-2 rounded-[8px] border font-mono text-xs transition-all flex items-center justify-center ${
                activeIdx === totalFilms - 1
                  ? "opacity-30 cursor-not-allowed bg-neutral-900 border-neutral-800 text-neutral-500"
                  : "bg-neutral-900 border-neutral-700 text-white hover:border-[#00B8C8] hover:text-[#00B8C8] cursor-pointer active:scale-95"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Film Index Indicator Rail */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-900">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mr-1">
            REEL INDEX:
          </span>
          {MOTION_FILMS.map((film, fIdx) => (
            <button
              key={film.id}
              type="button"
              onClick={() => setActiveIdx(fIdx)}
              aria-label={`Go to reel ${film.number}: ${film.client}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                activeIdx === fIdx
                  ? "w-8 bg-[#00B8C8]"
                  : "w-2 bg-neutral-800 hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-neutral-500">
          <span>USE ARROW KEYS OR DRAG TO ROTATE</span>
        </div>
      </div>

      {/* =========================================================================
          5. CINEMATIC VIDEO PLAYER MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10 select-text"
            role="dialog"
            aria-modal="true"
            aria-label={`${currentFilm.title} Video Player`}
          >
            {/* Modal Box */}
            <motion.div
              ref={modalContainerRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-[#121217] border border-neutral-800 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#17171C] border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#65C74A] animate-ping" />
                  <span className="font-mono text-xs text-[#00B8C8] font-bold uppercase tracking-wider">
                    SCREENING REEL {currentFilm.number} {"//"} {currentFilm.client}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
                    {currentFilm.duration}
                  </span>
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close video player"
                    className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:border-[#00B8C8] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 16:9 Screen Player Area */}
              <div 
                className="relative w-full aspect-[16/9] bg-black flex items-center justify-center overflow-hidden cursor-pointer group/player"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  key={currentFilm.src}
                  playsInline
                  autoPlay
                  preload="metadata"
                  muted={isMuted}
                  onTimeUpdate={() => {
                    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) setVideoDuration(videoRef.current.duration);
                  }}
                  onEnded={() => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                  }}
                  className="w-full h-full object-contain"
                >
                  <source src={currentFilm.src} type="video/mp4" />
                </video>

                {/* Big Play Overlay When Paused */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 bg-black/45 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#00B8C8] text-[#171717] flex items-center justify-center shadow-[0_0_40px_rgba(0,184,200,0.7)]">
                        <Play className="w-9 h-9 fill-current translate-x-0.5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Control Deck */}
              <div className="p-4 sm:p-5 bg-[#15151A] border-t border-neutral-800 flex flex-col gap-3">
                {/* Scrub Progress Bar */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-400 font-bold w-10 text-right select-none">
                    {formatTime(currentTime)}
                  </span>

                  <div className="relative flex-1 flex items-center h-4 group/scrub">
                    <div className="absolute inset-x-0 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#00B8C8] to-[#65C74A] transition-all duration-75"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={videoDuration || 100}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek video"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  <span className="font-mono text-xs text-neutral-500 font-bold w-10 select-none">
                    {formatTime(videoDuration) || currentFilm.duration}
                  </span>
                </div>

                {/* Bottom Bar: Meta + Playback Action Buttons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                  <div className="max-w-xl">
                    <h4 className="text-sm sm:text-base font-bold text-white truncate">
                      {currentFilm.title}
                    </h4>
                    <p className="font-mono text-xs text-neutral-400 truncate">
                      {currentFilm.badge} • {currentFilm.client}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {/* Play/Pause Button */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="px-4 py-2 bg-white text-neutral-950 font-mono text-xs font-bold uppercase rounded-[6px] hover:bg-[#00B8C8] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Play</span>
                        </>
                      )}
                    </button>

                    {/* Mute Button */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="p-2 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] rounded-[6px] transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-[#00B8C8]" />}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                      className="p-2 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] rounded-[6px] transition-colors cursor-pointer"
                    >
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
