"use client";

import React from "react";
import { ProjectCategory } from "@/types";
import { categories } from "@/data/projects";

interface CategoryFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  counts?: Partial<Record<ProjectCategory, number>>;
}

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2 md:gap-3 py-2 overflow-x-auto no-scrollbar"
    >
      {categories.map((cat: ProjectCategory) => {
        const isActive = activeCategory === cat;
        const count = counts ? counts[cat] : undefined;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border whitespace-nowrap rounded-full ${
              isActive
                ? "bg-lime text-black border-lime shadow-lime-pill"
                : "bg-white/5 text-warm-gray hover:text-warm-white border-white/10 hover:border-white/20"
            }`}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-black/20 text-black font-bold"
                    : "bg-white/10 text-warm-muted"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
