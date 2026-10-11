import React from "react";
import Hero from "@/components/home/Hero";
import StorytellingSection from "@/components/sections/StorytellingSection";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import ServicesSection from "@/components/sections/ServicesSection";
import PlaygroundSection from "@/components/sections/PlaygroundSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-canvas text-ink selection:bg-accent-coral selection:text-white">
      {/* 1. Immersive Hero with 3D Centerpiece */}
      <Hero />

      {/* 2. Scroll-Driven Storytelling & Philosophy */}
      <StorytellingSection />

      {/* 3. Selected Work Editorial Gallery (Real Artwork Showcase) */}
      <PortfolioGallery />

      {/* 4. Interactive Services & Capabilities */}
      <ServicesSection />

      {/* 5. Interactive 3D & Shading Playground */}
      <PlaygroundSection />

      {/* 6. About Anith & ThinkLoom Studio */}
      <AboutSection />

      {/* 7. Memorable Closing Experience & Inquiry System */}
      <ContactSection />
    </main>
  );
}
