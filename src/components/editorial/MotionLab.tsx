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
  Clapperboard,
  RotateCcw
} from "lucide-react";

export interface MotionFilm {
  id: string;
  number: string; // e.g. "01"
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
    format: "4K MOV",
    src: "/videos/ramyas-logo-motion.mov",
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
    format: "1080p MOV",
    src: "/videos/ramyas-diwali-wishing.mov",
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

export default function MotionLab() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true); // Audio starts muted per specification
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const currentFilm = MOTION_FILMS[activeIdx];
  const totalFilms = MOTION_FILMS.length;

  // Format time helper (seconds to M:SS)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Play / Pause toggle
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Play interrupted:", e);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Mute / Unmute toggle
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  // Seek handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? totalFilms - 1 : prev - 1));
    setIsPlaying(false);
    setCurrentTime(0);
  }, [totalFilms]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev === totalFilms - 1 ? 0 : prev + 1));
    setIsPlaying(false);
    setCurrentTime(0);
  }, [totalFilms]);

  const handleSelectFilm = (idx: number) => {
    if (idx === activeIdx) {
      togglePlay();
      return;
    }
    setActiveIdx(idx);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(err => {
        console.warn("Error attempting fullscreen:", err);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.warn("Error exiting fullscreen:", err);
      });
    }
  }, []);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Keyboard controls when focused on section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if active element is inside player or body
      const activeEl = document.activeElement;
      const isInput = activeEl?.tagName === "INPUT" || activeEl?.tagName === "TEXTAREA";
      if (isInput) return;

      const isInsidePlayer = playerContainerRef.current?.contains(activeEl);
      if (!isInsidePlayer) return;

      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (e.shiftKey) {
          handlePrev();
        } else if (videoRef.current) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
        }
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        if (e.shiftKey) {
          handleNext();
        } else if (videoRef.current) {
          videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 5);
        }
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay, handlePrev, handleNext, toggleMute, toggleFullscreen, duration]);

  // Keep active filmstrip item visible in scroll view
  useEffect(() => {
    if (!filmstripRef.current) return;
    const activeItem = filmstripRef.current.children[activeIdx] as HTMLElement;
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative w-full text-white">
      {/* 1. Header: THINKLOOM / MOTION LAB */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-800 gap-6">
        <div>
          {/* Studio Meta Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-neutral-900 border border-neutral-800 font-mono text-[11px] font-bold tracking-widest uppercase text-[#00B8C8] mb-3 rounded">
            <Film className="w-3.5 h-3.5 text-[#00B8C8]" />
            <span>THINKLOOM / MOTION LAB</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#65C74A] animate-ping ml-1" />
          </div>

          {/* Main Oversized Heading */}
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none">
            IDEAS IN MOTION<span className="text-[#00B8C8]">.</span>
          </h3>
        </div>

        {/* Supporting Line & Reel Index */}
        <div className="flex flex-col md:text-right max-w-md">
          <p className="font-mono text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
            AI-powered commercial films, crafted to make brands move.
          </p>
          <div className="mt-2 flex items-center md:justify-end gap-3 font-mono text-xs text-neutral-500 font-bold uppercase tracking-widest">
            <span>REEL ARCHIVE // 06 PRODUCTIONS</span>
            <span className="text-neutral-700">•</span>
            <span className="text-[#00B8C8]">ACTIVE: {currentFilm.number} / {totalFilms.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* 2. Primary 16:9 Cinema Screening Theater */}
      <div 
        ref={playerContainerRef}
        tabIndex={0}
        aria-label="ThinkLoom Motion Lab Screening Player"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full bg-[#121216] border-2 border-neutral-800 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00B8C8]"
      >
        {/* Ambient Teal Radial Bloom behind the 16:9 Screen */}
        <div 
          className="absolute -inset-10 pointer-events-none opacity-25 blur-3xl transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle at 50% 45%, rgba(0, 184, 200, 0.45) 0%, rgba(101, 199, 74, 0.1) 45%, transparent 70%)"
          }}
        />

        {/* Cinema Stage Header Bar */}
        <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#17171C]/95 border-b border-neutral-800/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#00B8C8] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65C74A] animate-pulse" />
              NOW SCREENING // REEL {currentFilm.number}
            </span>
            <span className="hidden sm:inline text-neutral-600 font-mono text-xs">|</span>
            <span className="hidden sm:inline font-mono text-xs text-neutral-300 font-bold truncate max-w-md">
              {currentFilm.client}
            </span>
          </div>

          {/* Quick Step Controls & Counter */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous film"
              className="p-1.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-white tracking-widest px-1.5 select-none">
              {currentFilm.number} / {totalFilms.toString().padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next film"
              className="p-1.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dominant 16:9 Screen Area */}
        <div className="relative w-full aspect-[16/9] bg-neutral-950 flex items-center justify-center overflow-hidden group select-none">
          {/* The Live Video Element */}
          <video
            ref={videoRef}
            key={currentFilm.src}
            src={currentFilm.src}
            poster={currentFilm.poster}
            playsInline
            preload="metadata"
            muted={isMuted}
            onTimeUpdate={() => {
              if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
              }
            }}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                setDuration(videoRef.current.duration);
              }
            }}
            onEnded={() => {
              setIsPlaying(false);
              setCurrentTime(0);
            }}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Subtle Film Grain Overlay */}
          <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none mix-blend-overlay" />

          {/* Prominent Play Overlay when Paused */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={togglePlay}
                className="absolute inset-0 bg-neutral-950/65 backdrop-blur-[3px] flex flex-col items-center justify-center cursor-pointer z-10 transition-colors hover:bg-neutral-950/50"
              >
                {/* Glowing Play Hex / Circle */}
                <div className="relative group/btn">
                  <div className="absolute -inset-3 bg-[#00B8C8]/40 rounded-full blur-xl group-hover/btn:bg-[#00B8C8]/60 transition-all duration-300" />
                  <button
                    type="button"
                    aria-label={`Play ${currentFilm.title}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00B8C8] text-[#171717] flex items-center justify-center shadow-[0_0_35px_rgba(0,184,200,0.6)] group-hover/btn:scale-105 transition-transform"
                  >
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current translate-x-1" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col items-center text-center px-4">
                  <span className="font-mono text-xs sm:text-sm text-white uppercase tracking-widest font-black bg-neutral-900/90 px-4 py-1.5 border border-neutral-700 rounded shadow-md">
                    CLICK TO SCREEN FILM
                  </span>
                  <span className="text-xs font-mono text-neutral-400 mt-2 font-medium">
                    {currentFilm.title} • {currentFilm.duration}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Corner Technical Badges */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-neutral-950/90 border border-neutral-700/80 rounded font-mono text-[10px] text-[#00B8C8] font-bold uppercase tracking-wider backdrop-blur-sm">
              ● {currentFilm.format}
            </span>
            <span className="px-2.5 py-1 bg-neutral-900/90 border border-neutral-700/80 rounded font-mono text-[10px] text-white font-bold uppercase tracking-wider backdrop-blur-sm">
              {currentFilm.badge}
            </span>
          </div>

          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="px-2.5 py-1 bg-neutral-950/90 border border-neutral-700/80 rounded font-mono text-[10px] text-[#65C74A] font-bold uppercase tracking-widest backdrop-blur-sm">
              16:9 MASTER
            </span>
          </div>
        </div>

        {/* 3. Integrated Custom Cinema Control Deck */}
        <div className="relative z-20 bg-[#15151A] border-t border-neutral-800 p-4 sm:p-6">
          {/* Scrub / Progress Bar */}
          <div className="relative w-full flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-neutral-400 font-bold shrink-0 w-10 text-right select-none">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex-1 flex items-center h-5 group/scrub">
              {/* Background Track */}
              <div className="absolute inset-x-0 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <div 
                  className="h-full bg-gradient-to-r from-[#00B8C8] to-[#65C74A] transition-all duration-75"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Native Scrub Range Input for smooth touch & click */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                aria-label="Seek film timeline"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <span className="font-mono text-[11px] text-neutral-500 font-bold shrink-0 w-10 select-none">
              {formatTime(duration) || currentFilm.duration}
            </span>
          </div>

          {/* Lower Control Bar: Film Metadata + Playback Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Left: Film Narrative Synopsis */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold uppercase text-[#00B8C8] tracking-wider">
                  {currentFilm.client}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="font-mono text-[11px] text-neutral-400 uppercase">
                  {currentFilm.category}
                </span>
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
                {currentFilm.title}
              </h4>
              <p className="font-mono text-xs text-neutral-400 mt-1 leading-relaxed line-clamp-2">
                {currentFilm.description}
              </p>
            </div>

            {/* Right: Master Control Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start lg:self-center">
              {/* Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-950 font-mono text-xs font-black uppercase tracking-wider rounded-lg shadow-md hover:bg-[#00B8C8] hover:text-neutral-950 transition-colors"
                aria-label={isPlaying ? "Pause film" : "Play film"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    <span>Screen Film</span>
                  </>
                )}
              </button>

              {/* Mute / Audio Toggle Button */}
              <button
                type="button"
                onClick={toggleMute}
                className="p-2.5 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] transition-colors rounded-lg flex items-center justify-center"
                title={isMuted ? "Unmute sound" : "Mute sound"}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-[#00B8C8]" />}
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2.5 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#00B8C8] transition-colors rounded-lg flex items-center justify-center"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Cinema"}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Horizontal Filmstrip Below Player */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clapperboard className="w-4 h-4 text-[#00B8C8]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300">
              COMMERCIAL FILMSTRIP // 06 MASTER REELS
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-500 uppercase hidden sm:inline">
            SELECT TO LOAD INTO MASTER SCREEN
          </span>
        </div>

        {/* Horizontal Filmstrip Scroller */}
        <div 
          ref={filmstripRef}
          className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar focus:outline-none"
          tabIndex={0}
          aria-label="Horizontal commercial filmstrip selector"
        >
          {MOTION_FILMS.map((film, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={film.id}
                onClick={() => handleSelectFilm(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectFilm(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Select ${film.title}`}
                aria-pressed={isActive}
                className={`group relative shrink-0 w-[240px] sm:w-[260px] md:w-[280px] p-3 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#181822] border-[#00B8C8] shadow-[0_8px_24px_rgba(0,184,200,0.3)] ring-1 ring-[#00B8C8] -translate-y-1"
                    : "bg-[#131318] border-neutral-800 hover:border-neutral-600 hover:bg-[#181820]"
                }`}
              >
                {/* Sprocket / Film Header Strip */}
                <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#65C74A] animate-pulse" : "bg-neutral-600"}`} />
                    <span className={`font-bold tracking-wider ${isActive ? "text-[#00B8C8]" : "text-neutral-400"}`}>
                      REEL {film.number}
                    </span>
                  </div>
                  <span className="text-neutral-500 font-medium">
                    {film.duration}
                  </span>
                </div>

                {/* 16:9 Staging Thumbnail */}
                <div className="relative w-full aspect-[16/9] bg-neutral-950 rounded-lg overflow-hidden mb-3 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors">
                  <Image
                    src={film.poster}
                    alt={film.title}
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                    isActive ? "bg-black/25" : "bg-black/50 group-hover:bg-black/35"
                  }`}>
                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-[#00B8C8] text-[#171717] flex items-center justify-center shadow-md">
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-neutral-900/80 border border-neutral-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Format Pill on Thumbnail */}
                  <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-neutral-950/90 text-neutral-300 font-mono text-[9px] font-bold rounded">
                    {film.format}
                  </span>
                </div>

                {/* Film Title & Client Metadata */}
                <div>
                  <span className="font-mono text-[10px] text-[#00B8C8] uppercase font-bold block truncate">
                    {film.badge}
                  </span>
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-white line-clamp-2 mt-0.5 leading-snug group-hover:text-[#00B8C8] transition-colors">
                    {film.title}
                  </h5>
                  <p className="font-mono text-[10px] text-neutral-400 mt-1 truncate">
                    {film.client}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
