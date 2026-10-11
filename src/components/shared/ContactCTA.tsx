import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ContactCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function ContactCTA({
  headline = "Have an ambitious project in mind?",
  subheadline = "Whether you are building a new brand from scratch, planning an advertising campaign, or revitalizing your visual identity, let's create something extraordinary together.",
}: ContactCTAProps) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D9D5CC]">
      <div className="bg-charcoal text-cream border border-charcoal p-8 sm:p-12 md:p-16 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-teal/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="text-xs font-semibold tracking-editorial uppercase text-teal block mb-4">
            Start a Conversation
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-[#C5C1B8] leading-relaxed mb-10 max-w-2xl">
            {subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-editorial bg-teal text-white hover:bg-teal-hover transition-all shadow-md group"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-xs font-semibold uppercase tracking-editorial bg-white/10 hover:bg-white/20 text-cream border border-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-teal" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#A8A49C] hover:text-white underline underline-offset-4 ml-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
