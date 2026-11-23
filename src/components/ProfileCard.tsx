"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Instagram, Sparkles, ArrowUpRight } from "lucide-react";

export interface ProfileCardProps {
  name?: string;
  role?: string;
  studio?: string;
  tagline?: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  statusText?: string;
  className?: string;
}

export default function ProfileCard({
  name = "A.K. Anith",
  role = "Founder / Creative Designer",
  studio = "ThinkLoom | Design and Printing",
  tagline = "Beyond Design. Into Reality.",
  avatarUrl = "/images/founder/anith-profile.jpg",
  email = "thinkloomstudio@gmail.com",
  phone = "+91 87781-73681",
  whatsappUrl = "https://wa.me/918778173681?text=Hi%20ThinkLoom%2C%20I%20would%20like%20to%20discuss%20a%20design%20and%20printing%20project.",
  instagramUrl = "https://www.instagram.com/thinkloom__/",
  statusText = "Studio Creative Director",
  className = "",
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glare, setGlare] = useState<{ opacity: number; x: number; y: number }>({
    opacity: 0,
    x: 0,
    y: 0,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Subtle, restrained tilt (-12deg to +12deg)
    const rX = -((mouseY / height) * 20 - 10);
    const rY = (mouseX / width) * 20 - 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      opacity: 0.45,
      x: mouseX,
      y: mouseY,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ opacity: 0, x: 0, y: 0 });
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Perspective Card Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-2xl overflow-hidden bg-[#121216] border-2 border-neutral-800 shadow-[0_24px_50px_rgba(0,0,0,0.45)] group cursor-pointer"
      >
        {/* Top Technical Metadata Bar */}
        <div className="relative z-20 flex items-center justify-between px-4 py-2.5 bg-[#171717]/90 border-b border-neutral-800/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#65C74A] animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-300 font-bold">
              FOUNDER SPOTLIGHT
            </span>
          </div>
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#00B8C8] font-bold">
            THINKLOOM // ID-2026
          </span>
        </div>

        {/* Portrait Media Area */}
        <div className="relative w-full aspect-[4/5] bg-neutral-950 overflow-hidden">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 340px, 360px"
            className="object-cover object-top filter grayscale-[15%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
          />

          {/* Architectural Drafting Watermark */}
          <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none mix-blend-overlay" />

          {/* Holographic Specular Glare Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle 220px at ${glare.x}px ${glare.y}px, rgba(0, 184, 200, 0.35), transparent 75%),
                           conic-gradient(from 180deg at 50% 50%, rgba(0,184,200,0.18), rgba(101,199,74,0.18), rgba(0,184,200,0.18))`,
              mixBlendMode: "screen",
            }}
          />

          {/* Bottom Gradient Veil for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/50 to-transparent" />

          {/* Live Studio Badge Overlay */}
          <div className="absolute bottom-3 left-4 right-4 z-20">
            <span className="inline-block px-2.5 py-1 bg-[#171717]/90 border border-neutral-700 backdrop-blur-md text-[#00B8C8] font-mono text-[10px] uppercase font-bold tracking-wider rounded-md mb-1.5 shadow-sm">
              {studio}
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
              {name}
            </h3>
            <p className="text-xs font-mono font-medium text-neutral-300 mt-0.5">
              {role}
            </p>
          </div>
        </div>

        {/* Card Lower Footer & Philosophy */}
        <div className="relative z-20 p-4 bg-[#121216] border-t border-neutral-800">
          <p className="text-xs font-sans text-neutral-300 leading-relaxed italic border-l-2 border-[#00B8C8] pl-2.5 mb-4">
            “{tagline}”
          </p>

          {/* Quick Direct Channels */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/80">
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#00B8C8] hover:text-[#00B8C8] text-neutral-300 text-[11px] font-mono transition-colors"
              title={`Email ${email}`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#65C74A] hover:text-[#65C74A] text-neutral-300 text-[11px] font-mono transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#00B8C8] hover:text-[#00B8C8] text-neutral-300 text-[11px] font-mono transition-colors"
              title="Follow on Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Insta</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
