import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  // Determine aspect container height based on project artwork aspect ratio
  const aspectClass =
    project.coverAspect === "poster"
      ? "aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]"
      : project.coverAspect === "landscape"
      ? "aspect-[16/10]"
      : "aspect-square";

  // For posters with delicate framing, object-contain with a clean matte backdrop keeps the entire artwork visible without cropping
  const isPoster = project.coverAspect === "poster";

  return (
    <article className="group flex flex-col bg-surface-card border border-[#D9D5CC] hover:border-teal transition-all duration-300">
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline-teal overflow-hidden"
        aria-label={`View project details for ${project.title}`}
      >
        {/* Artwork Canvas Container */}
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-[#EAE7DF] flex items-center justify-center p-3 sm:p-4`}
        >
          <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={isPoster ? "object-contain" : "object-contain p-2"}
            />
          </div>

          {/* Subtle Year Tag in Corner */}
          <span className="absolute top-3 right-3 text-[10px] font-mono tracking-wider px-2 py-0.5 bg-charcoal/80 text-cream backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </Link>

      {/* Project Meta Details */}
      <div className="p-5 md:p-6 flex flex-col flex-grow justify-between border-t border-[#D9D5CC]/80 bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-semibold tracking-editorial uppercase text-teal">
              {project.category}
            </span>
            {project.client && (
              <span className="text-[11px] text-muted-grey font-mono truncate max-w-[140px]">
                {project.client}
              </span>
            )}
          </div>

          <h3 className="font-display font-bold text-lg md:text-xl text-charcoal group-hover:text-teal transition-colors tracking-tight line-clamp-2">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs md:text-sm text-muted-grey line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Deliverables tags & link */}
        <div className="mt-5 pt-4 border-t border-[#D9D5CC]/40 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[80%]">
            {project.deliverables.slice(0, 2).map((del) => (
              <span
                key={del}
                className="text-[10px] text-muted-grey px-2 py-0.5 bg-[#F4F2EC] border border-[#D9D5CC]/60 truncate max-w-[130px]"
              >
                {del}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="w-8 h-8 rounded-full border border-[#D9D5CC] flex items-center justify-center text-charcoal group-hover:bg-teal group-hover:border-teal group-hover:text-white transition-all ml-2 flex-shrink-0"
            aria-hidden="true"
            tabIndex={-1}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
