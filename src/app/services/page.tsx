import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import PlaygroundSection from "@/components/sections/PlaygroundSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services & Capabilities — ThinkLoom Studio",
  description:
    "Comprehensive creative services: Brand poster design, social media creative systems, brand identity, AI video editing, product launch staging, and creative development.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <ServicesSection />
      <PlaygroundSection />
      <ContactSection />
    </main>
  );
}
