"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { LayoutGrid, Compass, Sparkles, SlidersHorizontal } from "lucide-react";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All Work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"spatial" | "grid">("spatial");

  // The 6 exact requested categories plus "All Work"
  const categories = [
    "All Work",
    "Brand Identity & Logo Design",
    "Social Media & Advertising Posters",
    "Jewellery Branding — Ramyas Jeweller",
    "Sports Branding — Messiah Sports",
    "AI Video & Motion Design",
    "Creative Experiments",
  ];

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Work") return projects;

    return projects.filter(p => {
      if (p.category === activeCategory) return true;
      if (p.secondaryCategories?.includes(activeCategory as ProjectCategory)) return true;

      // Handle category matching variations
      if (
        activeCategory === "Brand Identity & Logo Design" &&
        (p.category === "Branding & Logos" || p.secondaryCategories?.includes("Branding & Logos"))
      ) {
        return true;
      }
      if (
        activeCategory === "Social Media & Advertising Posters" &&
        (p.category === "Posters & Campaigns" || p.secondaryCategories?.includes("Posters & Campaigns"))
      ) {
        return true;
      }
      if (
        activeCategory === "Jewellery Branding — Ramyas Jeweller" &&
        (p.slug.includes("ramyas") || p.category === "Jewellery & Retail")
      ) {
        return true;
      }
      if (
        activeCategory === "Sports Branding — Messiah Sports" &&
        (p.slug.includes("messiah") ||
          p.slug.includes("blue-waves") ||
          p.slug.includes("cr7") ||
          p.category === "Sports & Products")
      ) {
        return true;
      }
      if (
        activeCategory === "AI Video & Motion Design" &&
        (p.category === "AI Video & Motion" || p.slug.includes("thinkloom"))
      ) {
        return true;
      }
      if (
        activeCategory === "Creative Experiments" &&
        (p.category === "Invitations & Events" || p.slug.includes("kuttyverse") || p.slug.includes("pretty"))
      ) {
        return true;
      }

      return false;
    });
  }, [activeCategory]);

  return (
    <section id="work" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas subtle-grid border-t border-ink-border">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-ink-border pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-accent-coral animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
                {"// CHAPTER 03 — SELECTED WORK"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
              REAL ARTWORK. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cobalt via-accent-violet to-accent-coral">
                MEASURED IMPACT.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 max-w-md">
            <p className="text-sm md:text-base text-ink-secondary font-sans leading-relaxed">
              An asymmetrical spatial collection of verified production graphics, brand identities, retail systems, and motion visuals.
            </p>

            {/* View Mode Toggle (Spatial vs Accessible Grid) */}
            <div className="flex items-center gap-1 rounded-full border border-ink-border bg-white p-1 shadow-sm">
              <button
                onClick={() => setViewMode("spatial")}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "spatial"
                    ? "bg-accent-cobalt text-white shadow-sm"
                    : "text-ink-secondary hover:text-ink"
                }`}
                data-cursor="hover"
              >
                <Compass className="h-3 w-3" />
                <span>Spatial View</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "grid"
                    ? "bg-accent-cobalt text-white shadow-sm"
                    : "text-ink-secondary hover:text-ink"
                }`}
                data-cursor="hover"
              >
                <LayoutGrid className="h-3 w-3" />
                <span>Archive Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Navigation Bar */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
                className={`relative whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-ink text-white font-bold shadow-gallery"
                    : "border border-ink-border bg-white text-ink-secondary hover:border-ink hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Curated Gallery Layout */}
        <motion.div
          layout
          className={
            viewMode === "spatial"
              ? "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              : "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          }
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
                viewMode={viewMode}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-16 border border-ink-border rounded-2xl bg-white shadow-sm">
            <p className="font-mono text-sm text-ink-muted">
              No projects in this category yet. Click &quot;All Work&quot; to view completed client case studies.
            </p>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
