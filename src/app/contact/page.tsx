import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact ThinkLoom — Start a Project",
  description:
    "Direct contact details, email (thinkloomstudio@gmail.com), WhatsApp connection, and project inquiry form for design and printing commissions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-obsidian text-warm-white pt-24 pb-20">
      <ContactSection />
    </main>
  );
}
