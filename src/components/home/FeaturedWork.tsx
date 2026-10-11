import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";

export default function FeaturedWork() {
  // Select the 6-8 strongest featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="featured-work" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D9D5CC]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs font-semibold tracking-editorial uppercase text-teal block mb-3">
            Selected Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight">
            Selected Work
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-grey max-w-xl">
            A curated collection of brand identities, commercial product campaigns, and retail promotions created for businesses that value design excellence.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial text-charcoal hover:text-teal border-b border-charcoal hover:border-teal pb-1 transition-all w-fit group"
        >
          <span>View All Work ({projects.length})</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 3}
          />
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-14 pt-10 border-t border-[#D9D5CC] flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-8 border">
        <div>
          <h3 className="font-display font-bold text-lg md:text-xl text-charcoal">
            Looking for a specific visual style or campaign format?
          </h3>
          <p className="text-xs md:text-sm text-muted-grey mt-1">
            Browse through branding, retail posters, sports advertisements, and invitations in the full portfolio.
          </p>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-editorial bg-charcoal text-cream hover:bg-teal transition-colors whitespace-nowrap"
        >
          <span>Explore All Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
