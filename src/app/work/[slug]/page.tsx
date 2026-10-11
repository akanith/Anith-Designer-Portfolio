import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Calendar, MapPin, Wrench } from "lucide-react";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import ContactSection from "@/components/sections/ContactSection";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ThinkLoom`,
      description: project.description,
      images: [{ url: project.cover, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="min-h-screen bg-obsidian text-warm-white subtle-grid pt-28 pb-20">
      <article className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-warm-gray hover:text-lime transition-colors group"
            data-cursor="hover"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Header Title & Tags */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 font-mono text-xs text-lime uppercase tracking-widest mb-4">
            <span>{project.category}</span>
            <span className="text-white/30">•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-warm-white tracking-tight">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-xs text-warm-gray">
            {project.client && (
              <div>
                <span className="text-warm-muted">CLIENT: </span>
                <span className="text-warm-white font-medium">{project.client}</span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-lime" />
                <span>{project.location}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-lime" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Hero Artwork Cover */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-white/15 bg-obsidian-deep p-4 shadow-2xl">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Narrative & Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">
              {"// Creative Overview & Strategic Brief"}
            </h2>
            <p className="font-sans text-lg text-warm-white leading-relaxed">
              {project.description}
            </p>
            {project.brief && (
              <p className="font-sans text-base text-warm-gray leading-relaxed">
                {project.brief}
              </p>
            )}

            {project.approach && (
              <div className="mt-6 rounded-xl border border-white/10 bg-obsidian-card p-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime mb-2">
                  Design Approach & Execution
                </h3>
                <p className="font-sans text-sm text-warm-gray leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Deliverables & Stack */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-obsidian-card p-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime mb-5">
              {"// Project Deliverables"}
            </h3>
            <ul className="space-y-3 mb-8">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-warm-white">
                  <CheckCircle2 className="h-4 w-4 text-lime shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {project.tools && project.tools.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-warm-muted block mb-3">
                  Tools & Production Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-warm-gray border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Complete Asset Gallery */}
        <div className="mb-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
              Original Asset Suite ({project.images.length})
            </h2>
            <span className="font-mono text-xs text-warm-muted uppercase">
              Full Fidelity Artwork
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-obsidian-card"
              >
                <div
                  className={`relative w-full ${
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
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {img.caption && (
                  <div className="border-t border-white/10 bg-black/50 p-4">
                    <p className="font-mono text-xs text-warm-gray">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Previous / Next Case Study Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-10">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col rounded-xl border border-white/10 bg-obsidian-card p-6 transition-all hover:border-lime/40"
              data-cursor="hover"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-warm-muted mb-2 flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" />
                <span>Previous Case Study</span>
              </span>
              <span className="font-display text-lg font-bold text-warm-white group-hover:text-lime transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end text-right rounded-xl border border-white/10 bg-obsidian-card p-6 transition-all hover:border-lime/40"
              data-cursor="hover"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-warm-muted mb-2 flex items-center gap-1">
                <span>Next Case Study</span>
                <ArrowRight className="h-3 w-3" />
              </span>
              <span className="font-display text-lg font-bold text-warm-white group-hover:text-lime transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </article>

      {/* Closing CTA */}
      <div className="mt-24">
        <ContactSection />
      </div>
    </main>
  );
}
