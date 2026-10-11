import React from "react";
import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import StorytellingSection from "@/components/sections/StorytellingSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Anith — Creative Direction & ThinkLoom Studio",
  description:
    "Learn about Anith, the designer and creative technologist behind ThinkLoom. Design philosophy, production methodology, and creative capabilities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <AboutSection />
      <StorytellingSection />
      <ContactSection />
    </main>
  );
}
