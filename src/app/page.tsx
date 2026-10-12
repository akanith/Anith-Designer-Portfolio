"use client";

import React, { useState } from "react";
import EditorialHero from "@/components/editorial/EditorialHero";
import TornPaperStrip from "@/components/editorial/TornPaperStrip";
import LogoGallery from "@/components/editorial/LogoGallery";
import DarkShowcase from "@/components/editorial/DarkShowcase";
import StudioAbout from "@/components/editorial/StudioAbout";
import GraciasClosing from "@/components/editorial/GraciasClosing";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { Project } from "@/types";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen bg-[#F5F2EB] text-neutral-900 selection:bg-accent-coral selection:text-white">
      {/* 1. Introduction — Textured Editorial Hero (with Anith's actual photo) */}
      <EditorialHero />

      {/* 2. Torn-Paper Transition strip with white brush-script THINKLOOM */}
      <TornPaperStrip />

      {/* 3. Logo and Brand Identity Gallery (bright editorial grid with real logos) */}
      <LogoGallery onSelectProject={setSelectedProject} />

      {/* 4. Dark Project Showcase — Match the video (charcoal/black editorial chapters) */}
      <DarkShowcase onSelectProject={setSelectedProject} />

      {/* 5. Studio and About Section (warm paper collage with authentic photos & manifesto) */}
      <StudioAbout />

      {/* 6. Contact and Closing Screen (Huge GRACIAS heading & verified contacts) */}
      <GraciasClosing />

      {/* Interactive Full-Screen Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
