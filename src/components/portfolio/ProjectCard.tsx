"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
  viewMode?: "spatial" | "grid";
}

export default function ProjectCard({
  project,
  onSelect,
  index,
  viewMode = "spatial",
}: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D tilt calculation on pointer move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((-(y - centerY) / centerY) * 5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Determine card height / aspect ratio based on artwork proportion
  const aspectClass =
    project.coverAspect === "poster"
      ? "aspect-[4/5] sm:aspect-[3/4]"
      : project.coverAspect === "landscape"
      ? "aspect-[16/10]"
      : "aspect-square";

  // Accent colors for exhibition pedestals
  const accentBorderColors = [
    "hover:border-accent-cobalt group-hover:shadow-[0_20px_40px_rgba(53,92,255,0.12)]",
    "hover:border-accent-coral group-hover:shadow-[0_20px_40px_rgba(255,90,69,0.12)]",
    "hover:border-accent-violet group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)]",
    "hover:border-accent-yellow group-hover:shadow-[0_20px_40px_rgba(231,255,89,0.2)]",
  ];
  const accentClass = accentBorderColors[index % accentBorderColors.length];

  const exhibitNum = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onSelect(project)}
      data-cursor="hover"
      data-cursor-text="VIEW"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          viewMode === "spatial"
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                isHovered ? "translateY(-6px) scale(1.015)" : "translateY(0) scale(1)"
              }`
            : undefined,
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
      }}
    >
      {/* Floating Gallery Frame (Warm-white art paper presentation) */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-[#E5E5DF] bg-white transition-all duration-400 shadow-gallery ${accentClass}`}
      >
        {/* Gallery Header Bar with Technical Annotation */}
        <div className="flex items-center justify-between border-b border-[#F0F0EB] px-5 py-3 bg-[#FAF9F5]/80 font-mono text-[11px] text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent-cobalt" />
            <span className="font-bold tracking-widest text-ink uppercase">
              EXHIBIT {exhibitNum}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-ink-secondary">
            {project.year} {"// ARCHIVE"}
          </span>
        </div>

        {/* Artwork Matting & Frame Container */}
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-[#F6F6F2] p-4 flex items-center justify-center`}
        >
          {/* Subtle archival paper shadow */}
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-sm border border-[#EAEAE4]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Floating Action Trigger on Hover */}
          <div className="absolute bottom-6 right-6 flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-bold text-white uppercase tracking-wider opacity-0 transition-all duration-300 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
            <span>Explore Work</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-accent-yellow" />
          </div>
        </div>

        {/* Gallery Caption & Curatorial Notes */}
        <div className="p-5 sm:p-6 bg-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-cobalt mb-1 block">
                {project.category}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-cobalt">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-2.5 text-xs sm:text-sm text-ink-secondary line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Micro Deliverables tags */}
          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#F0F0EB]">
            {project.deliverables.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="rounded-md bg-[#F4F4EE] px-2.5 py-1 font-mono text-[10px] text-ink-secondary border border-[#E8E8E0]"
              >
                {item}
              </span>
            ))}
            {project.deliverables.length > 3 && (
              <span className="font-mono text-[10px] text-ink-muted self-center ml-1">
                +{project.deliverables.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
