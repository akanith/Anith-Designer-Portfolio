import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian text-warm-white flex flex-col items-center justify-center px-6 text-center subtle-grid">
      <span className="font-mono text-xs text-lime font-bold tracking-widest uppercase mb-3">
        {"// 404 — Coordinate Not Found"}
      </span>
      <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-warm-white tracking-tight mb-4">
        VOID HORIZON.
      </h1>
      <p className="text-base text-warm-gray max-w-md mb-8 font-sans">
        The link or case study you requested is not at these coordinates. Return to the main portfolio showcase.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#D8FF33] hover:shadow-lime-pill"
          data-cursor="hover"
        >
          <Home className="w-4 h-4" />
          <span>Return to Showcase</span>
        </Link>

        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-warm-white hover:border-lime hover:text-lime transition-all"
          data-cursor="hover"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore All Work</span>
        </Link>
      </div>
    </div>
  );
}
