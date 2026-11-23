import React, { Suspense } from "react";
import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Work — ThinkLoom Design and Printing Showcase",
  description:
    "Explore the complete work archive: brand identities, commercial posters, sports advertising, jewellery campaigns, multicolour printing, and AI videos.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <Suspense
        fallback={
          <div className="py-24 text-center font-mono text-xs text-warm-muted">
            Loading portfolio archives...
          </div>
        }
      >
        <PortfolioGallery />
      </Suspense>

      <div className="mt-16">
        <ContactSection />
      </div>
    </main>
  );
}
