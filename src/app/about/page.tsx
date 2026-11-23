import React from "react";
import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About ThinkLoom — Design and Printing Studio",
  description:
    "Learn about ThinkLoom Studio. Uniting graphic design, digital & offset multicolour printing, and generative AI video creation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <AboutSection />
      <ContactSection />
    </main>
  );
}
