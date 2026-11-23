"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  ExternalLink,
  Maximize2,
  Filter
} from "lucide-react";
import CircularCarousel, { CarouselPoster } from "@/components/CircularCarousel";

export const SOCIAL_POSTERS: CarouselPoster[] = [
  // MESSIAH SPORTS SERIES
  {
    id: "messiah-boots",
    number: "01",
    title: "Football Boots — Precision & Traction Campaign",
    client: "Messiah Sports",
    category: "Athletic Product Campaign",
    year: "2024",
    src: "/images/projects/messiah-sports/football-boots.png",
    format: "Hero Campaign Poster",
    tagline: "High-octane footwear campaign highlighting calibrated traction studs and speed-engineered upper.",
  },
  {
    id: "messiah-socks",
    number: "02",
    title: "Grip Socks — Small Gear, Big Difference",
    client: "Messiah Sports",
    category: "Commercial Advertising",
    year: "2024",
    src: "/images/projects/messiah-sports/socks-campaign.png",
    format: "Commercial Print & Feed",
    tagline: "Commercial campaign celebrating technical anti-slip grip pads for competitive athletes.",
  },
  {
    id: "messiah-velocity",
    number: "03",
    title: "Velocity In Motion — Matchday Speed Graphic",
    client: "Messiah Sports",
    category: "Performance Creative",
    year: "2024",
    src: "/images/projects/messiah-sports/posters/poster-creative-05.jpeg",
    format: "Social Feed Poster",
    tagline: "Dynamic typography paired with high-velocity kinetic athletic silhouettes.",
  },
  {
    id: "messiah-grip-tech",
    number: "04",
    title: "Anatomic Grip Tech — Electric Teal Studio Spec",
    client: "Messiah Sports",
    category: "Technical Apparel",
    year: "2024",
    src: "/images/projects/messiah-sports/posters/poster-creative-06.jpeg",
    format: "Studio Product Spec",
    tagline: "Studio macro capture exploring elastane compression weaving and pressure distributions.",
  },
  {
    id: "messiah-agility",
    number: "05",
    title: "Pro Agility Dynamic — Athletic Training Campaign",
    client: "Messiah Sports",
    category: "Speed Performance",
    year: "2024",
    src: "/images/projects/messiah-sports/posters/poster-creative-09.jpeg",
    format: "Commercial Story Creative",
    tagline: "High-contrast sportswear advertising calibrated for youth soccer tournaments and digital broadcasts.",
  },
  {
    id: "messiah-soleplate",
    number: "06",
    title: "Cleat Architecture — Metallic Soleplate Staging",
    client: "Messiah Sports",
    category: "Footwear Studio",
    year: "2024",
    src: "/images/projects/messiah-sports/posters/poster-creative-10.jpeg",
    format: "Studio Staging",
    tagline: "Sculpted soleplate study featuring reflective chrome sprint blades and ergonomic heel support.",
  },

  // RAMYAS JEWELLER SERIES
  {
    id: "ramyas-diwali",
    number: "07",
    title: "Diwali Gold Savings Scheme — Festive Commercial Poster",
    client: "Ramyas Jeweller",
    category: "Retail Jewellery Campaign",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
    format: "Showroom & Social Poster",
    tagline: "Grand festive campaign promoting gold accumulation, auspicious bonuses, and digital enrollment.",
  },
  {
    id: "ramyas-temple",
    number: "08",
    title: "Festive Temple Heirlooms — Auspicious Gold Series",
    client: "Ramyas Jeweller",
    category: "Bridal Jewellery",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/ad-campaign-1.jpeg",
    format: "Festive Campaign Poster",
    tagline: "Opulent South Indian temple gold artistry celebrating sacred festivals and wedding celebrations.",
  },
  {
    id: "ramyas-bangles",
    number: "09",
    title: "916 Pure Hallmarked Bangles — Traditional Elegance",
    client: "Ramyas Jeweller",
    category: "Fine Jewellery",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/ad-campaign-2.jpeg",
    format: "Product Showcase Creative",
    tagline: "Intricate filigree craftsmanship and calibrated hallmarking standards.",
  },
  {
    id: "ramyas-ingot",
    number: "10",
    title: "Divine Vel & Lakshmi Coins — Heritage Ingot Collection",
    client: "Ramyas Jeweller",
    category: "Heritage Gold",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/ad-campaign-3.jpeg",
    format: "Festive Coin Campaign",
    tagline: "Sacred Tamil vel insignia minted onto pure 24K bullion coins for auspicious Diwali gifts.",
  },
  {
    id: "ramyas-rate-sep21",
    number: "11",
    title: "Live Bullion Movement — Market Movement Bulletin",
    client: "Ramyas Jeweller",
    category: "Daily Bullion Feed",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/gold-silver-rate-sep21.jpeg",
    format: "Daily Story Broadcast",
    tagline: "Daily price transparency bulletins designed for instant WhatsApp status & Instagram stories.",
  },
  {
    id: "ramyas-rate-july7",
    number: "12",
    title: "Gold & Silver Rate Broadcast — July 07 Daily Bulletin",
    client: "Ramyas Jeweller",
    category: "Daily Bullion Feed",
    year: "2024",
    src: "/images/projects/ramyas-jeweller/gold-silver-rate-july7.jpeg",
    format: "Daily Story Broadcast",
    tagline: "High-contrast commercial typography communicating 22K/24K gold and silver trading rates.",
  },
];

export default function SocialCreativesCarousel() {
  const [selectedFilter, setSelectedFilter] = useState<"ALL" | "MESSIAH" | "RAMYAS">("ALL");
  const [lightboxPoster, setLightboxPoster] = useState<CarouselPoster | null>(null);

  // Filter items based on active brand identity
  const filteredPosters = React.useMemo(() => {
    if (selectedFilter === "MESSIAH") {
      return SOCIAL_POSTERS.filter(p => p.client === "Messiah Sports");
    }
    if (selectedFilter === "RAMYAS") {
      return SOCIAL_POSTERS.filter(p => p.client === "Ramyas Jeweller");
    }
    return SOCIAL_POSTERS;
  }, [selectedFilter]);

  // Lightbox navigation helpers
  const handleNextArtwork = useCallback(() => {
    if (!lightboxPoster) return;
    const currentIdx = filteredPosters.findIndex(p => p.id === lightboxPoster.id);
    if (currentIdx === -1) return;
    const nextIdx = (currentIdx + 1) % filteredPosters.length;
    setLightboxPoster(filteredPosters[nextIdx]);
  }, [lightboxPoster, filteredPosters]);

  const handlePrevArtwork = useCallback(() => {
    if (!lightboxPoster) return;
    const currentIdx = filteredPosters.findIndex(p => p.id === lightboxPoster.id);
    if (currentIdx === -1) return;
    const prevIdx = (currentIdx - 1 + filteredPosters.length) % filteredPosters.length;
    setLightboxPoster(filteredPosters[prevIdx]);
  }, [lightboxPoster, filteredPosters]);

  // Handle escape key to close lightbox and arrow keys to navigate
  useEffect(() => {
    if (!lightboxPoster) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxPoster(null);
      } else if (e.key === "ArrowRight") {
        handleNextArtwork();
      } else if (e.key === "ArrowLeft") {
        handlePrevArtwork();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll while lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxPoster, handleNextArtwork, handlePrevArtwork]);

  return (
    <div 
      id="social-creatives" 
      className="relative w-full paper-warm-canvas py-24 sm:py-32 px-4 sm:px-6 md:px-12 border-t-2 border-neutral-900 overflow-hidden text-neutral-900"
    >
      {/* Drafting Marks & Grid */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block pointer-events-none">
        [TL-EXHIBIT-2026] // SOCIAL & CAMPAIGN FEEDS
      </div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-neutral-400 tracking-widest uppercase hidden sm:block pointer-events-none">
        CIRCULAR CAROUSEL // 3D CYLINDER STAGE
      </div>
      <div className="absolute inset-0 architectural-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b-2 border-neutral-900 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 font-mono text-xs uppercase tracking-widest text-neutral-700 shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-pulse" />
              <span>COMMERCIAL PRINT & DIGITAL CAMPAIGNS</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-neutral-950 tracking-tighter uppercase leading-none">
              SOCIAL MEDIA CREATIVES<span className="text-[#00B8C8]">.</span>
            </h2>
          </div>

          <div className="flex flex-col md:text-right max-w-md">
            <p className="font-mono text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
              Explore our collection of commercial advertising, product campaigns, and social media artwork.
            </p>
            <div className="mt-2 flex items-center md:justify-end gap-2 font-mono text-xs text-neutral-500 font-bold uppercase tracking-wider">
              <span>{filteredPosters.length} AUTHENTIC POSTERS</span>
              <span>•</span>
              <span className="text-[#00B8C8]">DRAG TO ROTATE 3D CYLINDER</span>
            </div>
          </div>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase text-neutral-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER IDENTITY:</span>
          </span>

          <button
            type="button"
            onClick={() => setSelectedFilter("ALL")}
            className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
              selectedFilter === "ALL"
                ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
            }`}
          >
            ALL CREATIVES ({SOCIAL_POSTERS.length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter("MESSIAH")}
            className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
              selectedFilter === "MESSIAH"
                ? "bg-[#171717] text-[#00B8C8] border-neutral-950 shadow-xs ring-1 ring-[#00B8C8]"
                : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
            }`}
          >
            MESSIAH SPORTS (6)
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter("RAMYAS")}
            className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
              selectedFilter === "RAMYAS"
                ? "bg-[#171717] text-amber-300 border-neutral-950 shadow-xs ring-1 ring-amber-400"
                : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
            }`}
          >
            RAMYAS JEWELLER (6)
          </button>
        </div>

        {/* React Bits Circular Carousel Stage */}
        <div className="relative w-full bg-white/70 border-2 border-neutral-900 p-4 sm:p-8 shadow-[8px_8px_0px_#171717] rounded-2xl backdrop-blur-xs">
          <CircularCarousel
            key={selectedFilter} // reset state on filter switch
            items={filteredPosters}
            autoRotate={!lightboxPoster}
            onOpenLightbox={(poster) => setLightboxPoster(poster)}
          />
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/90 backdrop-blur-md"
            onClick={() => setLightboxPoster(null)}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#141418] border-2 border-neutral-700 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxPoster(null)}
                aria-label="Close artwork preview"
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left/Main: Uncropped Full-Resolution Artwork Display */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] md:min-h-[560px] p-4 overflow-hidden">
                <Image
                  src={lightboxPoster.src}
                  alt={lightboxPoster.title}
                  width={1024}
                  height={1536}
                  className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-xl"
                  priority
                />

                {/* Lightbox Nav Steppers (Floating over artwork) */}
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevArtwork();
                    }}
                    aria-label="Previous artwork"
                    className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-700 text-white transition-transform hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextArtwork();
                    }}
                    aria-label="Next artwork"
                    className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-700 text-white transition-transform hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right/Bottom: Artwork Curatorial Details */}
              <div className="w-full md:w-80 p-6 bg-[#16161C] border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-[#00B8C8] uppercase font-bold tracking-widest px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded">
                      EXHIBIT {lightboxPoster.number}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase font-bold">
                      {lightboxPoster.year}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block font-bold">
                    {lightboxPoster.client}
                  </span>

                  <h3 className="font-sans text-xl font-black text-white mt-1 leading-tight tracking-tight">
                    {lightboxPoster.title}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-2 font-mono text-xs text-neutral-400">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">CATEGORY:</span>
                      <span className="text-neutral-200 font-bold">{lightboxPoster.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">FORMAT:</span>
                      <span className="text-neutral-200 font-bold">{lightboxPoster.format}</span>
                    </div>
                  </div>

                  {lightboxPoster.tagline && (
                    <p className="mt-4 text-xs font-sans text-neutral-300 leading-relaxed italic border-l-2 border-[#00B8C8] pl-2.5">
                      “{lightboxPoster.tagline}”
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>PRESS ESC TO CLOSE</span>
                  <span>ARROWS TO NAV</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
