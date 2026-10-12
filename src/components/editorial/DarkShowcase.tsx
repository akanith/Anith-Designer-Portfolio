"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Film, 
  Layers, 
  Sparkles, 
  Play, 
  Pause, 
  Eye, 
  SlidersHorizontal,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface DarkShowcaseProps {
  onSelectProject?: (project: Project) => void;
}

export default function DarkShowcase({ onSelectProject }: DarkShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isPlayingMotion, setIsPlayingMotion] = useState(false);

  // Grouped project data
  const posters = [
    {
      title: "Ramyas Jeweller — Festive Diwali Gold Savings System",
      client: "Ramyas Jeweller",
      category: "Brochure & Ledger Architecture",
      year: "2024",
      url: "/images/projects/ramyas-jeweller/diwali-savings-scheme-brochure.png",
      slug: "ramyas-jeweller-diwali-savings",
      aspect: "aspect-[3/4]",
      featuredBadge: "4-PAGE SYSTEM",
    },
    {
      title: "Messiah Sports — Small Gear Big Difference Campaign",
      client: "Messiah Sports",
      category: "Product Launch Poster",
      year: "2024",
      url: "/images/projects/messiah-sports/socks-campaign.png",
      slug: "messiah-sports-socks",
      aspect: "aspect-[3/4]",
      featuredBadge: "COMMERCIAL HERO",
    },
    {
      title: "Ramyas Jeweller — Diwali Savings Launch Poster",
      client: "Ramyas Jeweller",
      category: "Tamil Festive Typography Poster",
      year: "2024",
      url: "/images/projects/ramyas-jeweller/diwali-savings-poster.png",
      slug: "ramyas-jeweller-diwali-savings",
      aspect: "aspect-[3/4]",
      featuredBadge: "RETAIL CAMPAIGN",
    },
    {
      title: "CR7 Iconic Celebration — Stadium Wall Art",
      client: "Commercial Print Art",
      category: "Sports Poster Illustration",
      year: "2024",
      url: "/images/projects/football-wallpaper/cr7-celebration-wallpaper.png",
      slug: "cr7-celebration-wallpaper",
      aspect: "aspect-[3/4]",
      featuredBadge: "WALL ART",
    },
  ];

  const productAds = [
    {
      title: "Messiah Sports — Pro Elite Football Boots Poster",
      client: "Messiah Sports",
      category: "Cinematic Footwear Advertisement",
      year: "2024",
      url: "/images/projects/messiah-sports/football-boots.png",
      slug: "messiah-sports-football-boots",
      aspect: "aspect-[3/4] md:aspect-[4/5]",
      description: "Staged on wet reflective stadium stone under moody spotlights, with feature callouts for molded studs.",
    },
    {
      title: "Messiah Sports — Stockings Technical Specification Board",
      client: "Messiah Sports",
      category: "Multi-Angle Mockup & Packaging Board",
      year: "2024",
      url: "/images/projects/messiah-sports/stockings-board.png",
      slug: "messiah-sports-socks",
      aspect: "aspect-[16/9]",
      description: "Exploded engineering diagram demonstrating anti-slip grip zone, compression, and breathable fibers.",
    },
  ];

  const socialCreatives = [
    {
      title: "Ramyas Daily Gold & Silver Rate — July 07",
      client: "Ramyas Jeweller",
      category: "Daily Price Broadcast",
      year: "2024",
      url: "/images/projects/ramyas-jeweller/gold-silver-rate-july7.jpeg",
      slug: "ramyas-jeweller-gold-silver-rates",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Ramyas Daily Gold & Silver Rate — July 08",
      client: "Ramyas Jeweller",
      category: "Bullion Market Template",
      year: "2024",
      url: "/images/projects/ramyas-jeweller/gold-silver-rate-july8.jpeg",
      slug: "ramyas-jeweller-gold-silver-rates",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Ramyas Daily Gold & Silver Rate — September 21",
      client: "Ramyas Jeweller",
      category: "Market Movement Bulletin",
      year: "2024",
      url: "/images/projects/ramyas-jeweller/gold-silver-rate-sep21.jpeg",
      slug: "ramyas-jeweller-gold-silver-rates",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Kuttyverse — Grand Opening Invitation",
      client: "Kuttyverse Kids Boutique",
      category: "Retail Launch Creative",
      year: "2024",
      url: "/images/projects/kuttyverse/grand-opening-invitation.png",
      slug: "kuttyverse-grand-opening",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Pretty Makeover — Housewarming Invitation",
      client: "Pretty Makeover Studio",
      category: "Bespoke Invitation Art",
      year: "2024",
      url: "/images/projects/pretty-makeover/housewarming-invitation.png",
      slug: "pretty-makeover-invitation",
      aspect: "aspect-[4/5]",
    },
  ];

  const handleSelect = (slug: string) => {
    const found = projects.find((p) => p.slug === slug);
    if (found && onSelectProject) {
      onSelectProject(found);
    }
  };

  return (
    <section id="dark-showcase" className="relative w-full bg-[#0D0D0D] text-white py-28 px-4 sm:px-6 md:px-12 border-b border-neutral-800">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 dark-technical-grid opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Exhibition Master Header */}
        <div className="mb-20 pb-8 border-b border-neutral-800 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-coral tracking-widest uppercase mb-3 font-bold">
              <span className="w-2 h-2 bg-accent-coral animate-pulse" />
              <span>BLACK EDITORIAL EXHIBITION // ALL DISCIPLINARY CHAPTERS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
              PROJECT <span className="text-accent-coral">SHOWCASE</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-neutral-400 space-y-2">
            <p className="text-neutral-300">
              [CURATED PORTFOLIO] — Commercial poster campaigns, product launches, bullion broadcasts, and athletic branding.
            </p>
            <p className="text-[11px] text-neutral-500">
              CLICK ANY ARTWORK TO OPEN FULL CASE STUDY & HIGH-RES VIEWER
            </p>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 01: POSTERS & CAMPAIGNS
            ========================================================================= */}
        <div className="mb-28">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-accent-coral font-bold tracking-widest uppercase">
                CHAPTER 01
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                POSTERS & CAMPAIGNS
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              04 CURATED RELEASES
            </span>
          </div>

          {/* Mosaic Gallery of Posters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posters.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleSelect(item.slug)}
                className="group relative cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Poster Frame */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-neutral-950`}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-neutral-950/90 text-white border border-neutral-700 px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase">
                    {item.featuredBadge}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-coral text-white font-mono text-xs font-bold uppercase shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      VIEW ARTWORK
                    </span>
                  </div>
                </div>

                {/* Poster Caption */}
                <div className="p-4 border-t border-neutral-800 bg-neutral-950/40">
                  <span className="font-mono text-[10px] text-accent-coral uppercase tracking-wider block mb-1">
                    {item.client}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-accent-coral transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 02: PRODUCT & ADVERTISING
            ========================================================================= */}
        <div className="mb-28">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-accent-cobalt font-bold tracking-widest uppercase">
                CHAPTER 02
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                PRODUCT & ADVERTISING
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              COMMERCIAL ART DIRECTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Wide Hero Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => handleSelect(productAds[0].slug)}
              className="lg:col-span-6 group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-500 transition-all p-4"
            >
              <div className="relative w-full aspect-[3/4] bg-neutral-950 overflow-hidden mb-4">
                <Image
                  src={productAds[0].url}
                  alt={productAds[0].title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute bottom-3 left-3 bg-neutral-950/90 border border-neutral-700 px-3 py-1 font-mono text-[10px] text-accent-coral tracking-widest uppercase">
                  EXPLOSIVE TRACTION // NIKE-RIVAL KEY VISUAL
                </div>
              </div>
              <h4 className="font-sans text-xl font-bold text-white group-hover:text-accent-coral transition-colors">
                {productAds[0].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-400 leading-relaxed">
                {productAds[0].description}
              </p>
            </motion.div>

            {/* Side Specification Board */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => handleSelect(productAds[1].slug)}
              className="lg:col-span-6 group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-500 transition-all p-4"
            >
              <div className="relative w-full aspect-[16/9] bg-neutral-950 overflow-hidden mb-4">
                <Image
                  src={productAds[1].url}
                  alt={productAds[1].title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute bottom-3 left-3 bg-neutral-950/90 border border-neutral-700 px-3 py-1 font-mono text-[10px] text-accent-cobalt tracking-widest uppercase">
                  TECHNICAL BLUEPRINT // SPECIFICATION BOARD
                </div>
              </div>
              <h4 className="font-sans text-xl font-bold text-white group-hover:text-accent-cobalt transition-colors">
                {productAds[1].title}
              </h4>
              <p className="mt-2 text-xs font-mono text-neutral-400 leading-relaxed">
                {productAds[1].description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 03: AI VIDEO & MOTION GRAPHICS
            ========================================================================= */}
        <div className="mb-28">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-accent-coral font-bold tracking-widest uppercase">
                CHAPTER 03
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                AI VIDEO & MOTION GRAPHICS
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              EXPERIMENTAL SEQUENCES
            </span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-video bg-neutral-950 border border-neutral-800 overflow-hidden group">
                {/* Motion Preview Canvas */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-gradient-to-tr from-neutral-950 via-[#180f1d] to-[#0c1825] flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Pulsing ambient graphic core */}
                    <div className="w-24 h-24 rounded-full bg-accent-coral/20 filter blur-xl animate-pulse" />
                    
                    <div className="relative z-10">
                      <Film className="w-10 h-10 text-accent-coral mx-auto mb-3" />
                      <p className="font-mono text-xs text-accent-coral uppercase tracking-widest mb-1">
                        AI MOTION DIRECTED CONCEPT REEL
                      </p>
                      <h4 className="font-sans text-xl sm:text-2xl font-black text-white">
                        “The Kinetic Silk” — Dynamic Textile Simulation
                      </h4>
                      <p className="font-mono text-[11px] text-neutral-400 mt-2 max-w-md mx-auto">
                        High-framerate procedural lighting, cloth dynamics, and brand monogram particle morphing.
                      </p>
                    </div>

                    {/* Interactive Play Button */}
                    <button
                      type="button"
                      onClick={() => setIsPlayingMotion(!isPlayingMotion)}
                      className="mt-6 flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 font-mono text-xs font-bold uppercase rounded-full hover:bg-accent-coral hover:text-white transition-all shadow-lg"
                    >
                      {isPlayingMotion ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>PAUSE SIMULATION</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>PLAY REEL PREVIEW</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-neutral-950/80 px-2.5 py-1 font-mono text-[10px] text-emerald-400 border border-neutral-800">
                  ● 4K 60FPS // AFTER EFFECTS + PROMPTED LATENT FRAMES
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xl font-bold text-white">
                  Motion Storytelling & Generative Direction
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  By pairing traditional keyframe choreography in Adobe After Effects with custom generative motion loops, I build commercial reels that stop viewers mid-scroll.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 bg-neutral-950 border border-neutral-800">
                    <span className="text-accent-coral block font-bold mb-1">TOOL PIPELINE</span>
                    <span className="text-neutral-300">After Effects, Runway Gen, Premiere Pro</span>
                  </div>
                  <div className="p-3 bg-neutral-950 border border-neutral-800">
                    <span className="text-accent-cobalt block font-bold mb-1">OUTPUT FORMATS</span>
                    <span className="text-neutral-300">9:16 Social Reels, 16:9 Display Billboards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 04: SOCIAL MEDIA & DIGITAL CREATIVES
            ========================================================================= */}
        <div>
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800">
            <div>
              <span className="font-mono text-xs text-accent-cobalt font-bold tracking-widest uppercase">
                CHAPTER 04
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                SOCIAL MEDIA & DIGITAL CREATIVES
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              HIGH-VELOCITY CREATIVE SYSTEM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {socialCreatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => handleSelect(item.slug)}
                className="group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-accent-coral transition-all p-2 flex flex-col justify-between"
              >
                <div className={`relative w-full ${item.aspect} bg-neutral-950 overflow-hidden mb-2`}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 220px"
                  />
                </div>
                <div className="p-1">
                  <span className="font-mono text-[9px] text-accent-coral uppercase tracking-wider block">
                    {item.client}
                  </span>
                  <h5 className="font-sans text-xs font-bold text-white line-clamp-1 group-hover:text-accent-coral transition-colors">
                    {item.title}
                  </h5>
                  <span className="font-mono text-[10px] text-neutral-500 block mt-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
