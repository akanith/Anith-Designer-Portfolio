"use client";

import React, { useState } from "react";
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
