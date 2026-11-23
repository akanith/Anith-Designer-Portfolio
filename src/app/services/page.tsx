import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Official Services — ThinkLoom | Design and Printing",
  description:
    "Graphic Design, Digital & Offset Multicolour Printing, and AI Video Creation. From creative ideas into reality.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
