"use client";

import React, { useState, useEffect } from "react";
import EditorialHero from "@/components/editorial/EditorialHero";
import TornPaperStrip from "@/components/editorial/TornPaperStrip";
import LogoGallery from "@/components/editorial/LogoGallery";
import ServicesEditorial from "@/components/editorial/ServicesEditorial";
import DarkShowcase from "@/components/editorial/DarkShowcase";
import StudioAbout from "@/components/editorial/StudioAbout";
import GraciasClosing from "@/components/editorial/GraciasClosing";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { Project } from "@/types";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Ensure fresh visits and normal refreshes start at Hero (scrollY = 0), while preserving anchor links & back/forward
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Preserve anchor links (e.g. /#work, /#services, /#about, /#contact)
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    const restoreSavedScroll = (savedY?: number | null) => {
      const targetY = savedY ?? (history.state?.scrollY ?? (sessionStorage.getItem("scroll_" + window.location.pathname) ? parseInt(sessionStorage.getItem("scroll_" + window.location.pathname)!, 10) : null));
      if (typeof targetY === "number" && !isNaN(targetY)) {
        window.scrollTo({ top: targetY, behavior: "instant" });
      }
    };

    // Preserve browser back/forward navigation
    const navEntries = performance.getEntriesByType("navigation");
    const navTiming = navEntries[0] as PerformanceNavigationTiming | undefined;
    if (navTiming?.type === "back_forward") {
      restoreSavedScroll();
      return;
    }

    // For fresh visits and normal page refreshes without hash, ensure starting at Hero (top of page)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Handle in-page SPA back/forward popstate
    const handlePopState = (e: PopStateEvent) => {
      restoreSavedScroll(e.state?.scrollY);
    };
    window.addEventListener("popstate", handlePopState);

    // Save scroll position for back/forward restoration
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        try {
          sessionStorage.setItem("scroll_" + window.location.pathname, window.scrollY.toString());
          if (history.replaceState) {
            history.replaceState({ ...history.state, scrollY: window.scrollY }, "");
          }
        } catch {}
      }, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F5F2EB] text-neutral-900 selection:bg-[#00B8C8] selection:text-neutral-950 overflow-x-hidden">
      {/* 1. Introduction — Textured Editorial Hero */}
      <EditorialHero />

      {/* 2. Torn-Paper Transition strip with white brush-script THINKLOOM */}
      <TornPaperStrip />

      {/* 3. Logo and Brand Identity Gallery (bright editorial grid with real logos, Orbit & HoloCard) */}
      <LogoGallery onSelectProject={setSelectedProject} />

      {/* 4. Dedicated Official Services Section (Graphic Design, Multicolour Printing, AI Video) */}
      <ServicesEditorial />

      {/* 5. Dark Project Showcase — Exhibition with AI Video Player & Print Showcase */}
      <DarkShowcase onSelectProject={setSelectedProject} />

      {/* 6. Studio and About Section */}
      <StudioAbout />

      {/* 7. Contact and Closing Screen (Huge GRACIAS heading & verified contacts) */}
      <GraciasClosing />

      {/* Interactive Full-Screen Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
