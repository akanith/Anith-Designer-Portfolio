"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { X, Calendar, MapPin, CheckCircle2, Wrench } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-ink-border bg-canvas shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-ink-border px-6 py-4 bg-white/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-accent-cobalt uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-ink-muted">•</span>
              <span className="font-mono text-xs text-ink-secondary">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-ink-border bg-white text-ink transition-all hover:border-ink hover:text-accent-coral"
              aria-label="Close modal"
              data-cursor="hover"
            >
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            {/* Title & Metadata Header */}
            <div className="mb-8">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
                {project.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-5 font-mono text-xs text-ink-secondary">
                {project.client && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-ink-muted">CLIENT:</span>
                    <span className="text-ink font-semibold">{project.client}</span>
                  </div>
                )}
                {project.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-accent-coral" />
                    <span>{project.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 text-accent-cobalt" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>

            {/* Featured Primary Cover Image */}
            <div className="relative mb-10 overflow-hidden rounded-xl border border-ink-border bg-white shadow-gallery p-4">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#FAF9F5] rounded-lg overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* Overview & Brief Grid */}
            <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-y border-ink-border py-8">
              <div className="md:col-span-7">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold mb-3">
                  {"// Project Overview & Brief"}
                </h3>
                <p className="text-base text-ink leading-relaxed font-sans mb-4">
                  {project.description}
                </p>
                {project.brief && (
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    {project.brief}
                  </p>
                )}

                {project.approach && (
                  <div className="mt-6 rounded-xl border border-ink-border bg-white p-5 shadow-sm">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-accent-coral font-bold mb-2">
                      {"// Curatorial Approach"}
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                      {project.approach}
                    </p>
                  </div>
                )}
              </div>

              {/* Deliverables and Tools */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold mb-3">
                    {"// Key Deliverables"}
                  </h3>
                  <ul className="space-y-2.5">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink font-medium">
                        <CheckCircle2 className="h-4 w-4 text-accent-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2.5 flex items-center gap-1.5">
                      <Wrench className="h-3 w-3 text-accent-cobalt" />
                      <span>Tools & Systems</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map(tool => (
                        <span
                          key={tool}
                          className="rounded-md bg-white px-2.5 py-1 font-mono text-[11px] text-ink-secondary border border-ink-border shadow-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Asset Gallery (All Project Images) */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#00B8C8] font-semibold mb-6">
                {`// Artwork & Exhibit Components (${project.images.length})`}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl border border-ink-border bg-white p-3 shadow-sm hover:shadow-gallery transition-shadow"
                  >
                    <div
                      className={`relative w-full rounded-lg overflow-hidden bg-[#FAF9F5] ${
                        img.aspectRatio === "poster"
                          ? "aspect-[4/5]"
                          : img.aspectRatio === "landscape"
                          ? "aspect-[16/9]"
                          : "aspect-square"
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {img.caption && (
                      <div className="border-t border-ink-border bg-canvas px-4 py-2.5 mt-2 rounded-md">
                        <p className="font-mono text-[11px] text-ink-secondary leading-tight">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Video Showcase Components (if project has videos) */}
            {project.videos && project.videos.length > 0 && (
              <div className="mt-12 pt-8 border-t border-ink-border">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#00B8C8] font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B8C8] animate-pulse" />
                  <span>{`// Commercial Videos & Motion Components (${project.videos.length})`}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.videos.map((vid, vIdx) => (
                    <div
                      key={vIdx}
                      className="rounded-xl border border-ink-border bg-white p-3 shadow-sm overflow-hidden"
                    >
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-950">
                        <video
                          src={vid.url}
                          poster={vid.poster}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-3 border-t border-ink-border bg-canvas mt-2 rounded-md">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#00B8C8] font-bold block">
                          {vid.category || "Commercial Motion"}
                        </span>
                        <h4 className="font-sans text-xs font-bold text-ink mt-0.5">
                          {vid.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
