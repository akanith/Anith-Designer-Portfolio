"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState(services[0].title);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate direct WhatsApp link or mailto
    const text = encodeURIComponent(
      `Hi Anith / ThinkLoom,\n\nName: ${name}\nEmail: ${email}\nService: ${selectedService}\n\nProject details: ${message}`
    );
    window.open(`https://wa.me/919842143307?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-canvas border-t border-ink-border subtle-grid">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-accent-coral animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
              {"// CHAPTER 06 — LET'S CREATE"}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.06]">
            HAVE AN IDEA? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cobalt via-accent-violet to-accent-coral">
              LET’S GIVE IT A WORLD.
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
            Currently accepting select client commissions for brand identity, high-voltage posters, retail jewellery systems, and creative technology collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-ink-border bg-white p-7 md:p-8 transition-all hover:border-ink hover:shadow-gallery">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-bold block mb-2">
                Official Studio Email
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-display text-xl sm:text-2xl font-bold text-ink hover:text-accent-cobalt transition-colors block break-all"
                data-cursor="hover"
                data-cursor-text="EMAIL"
              >
                {siteConfig.contact.email}
              </a>
              <p className="mt-2 text-xs text-ink-secondary font-sans">
                Direct inquiry inbox. Scope discussions & briefs welcomed.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-2xl border border-accent-coral/30 bg-accent-coral/5 p-7 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-accent-coral animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent-coral font-bold">
                  Instant WhatsApp Connect
                </span>
              </div>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl sm:text-2xl font-bold text-ink hover:text-accent-coral transition-colors block"
                data-cursor="hover"
                data-cursor-text="CHAT"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="mt-2 text-xs text-ink-secondary font-sans">
                Available for agile project briefs, direct asset reviews, and audio calls.
              </p>
            </div>

            {/* Location & Studio Hours */}
            <div className="rounded-2xl border border-ink-border bg-white p-6 md:p-8 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block mb-2">
                Studio Headquarters
              </span>
              <div className="font-display text-base font-bold text-ink mb-1">
                {siteConfig.contact.location}
              </div>
              <p className="font-sans text-xs text-ink-secondary">
                Collaborating with domestic & global brands across time zones.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl border border-ink-border bg-white p-8 md:p-10 shadow-gallery">
            <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-5 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cobalt font-semibold">
                {"// Project Brief Initiator"}
              </span>
              <span className="font-mono text-[10px] text-ink-muted">
                CONFIDENTIAL & DIRECT
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-cobalt text-white shadow-md">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Inquiry Dispatched
                </h3>
                <p className="mt-2 text-sm text-ink-secondary font-sans max-w-sm mx-auto">
                  WhatsApp will open with your pre-formatted brief. Anith will review your project details directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-ink-border bg-[#FAFAF7] px-5 py-2 font-mono text-xs font-semibold text-ink hover:border-ink transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary mb-2">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. John Doe / Apex Studios"
                      className="w-full rounded-xl border border-ink-border bg-[#FAFAF7] px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent-cobalt focus:outline-none focus:ring-1 focus:ring-accent-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. contact@domain.com"
                      className="w-full rounded-xl border border-ink-border bg-[#FAFAF7] px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent-cobalt focus:outline-none focus:ring-1 focus:ring-accent-cobalt"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary mb-2">
                    Primary Service Requirement
                  </label>
                  <select
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                    className="w-full rounded-xl border border-ink-border bg-[#FAFAF7] px-4 py-3 text-sm text-ink focus:border-accent-cobalt focus:outline-none focus:ring-1 focus:ring-accent-cobalt"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-ink-secondary mb-2">
                    Project Vision & Timelines *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Describe your brand challenge, target deliverables, or key milestones..."
                    className="w-full rounded-xl border border-ink-border bg-[#FAFAF7] px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent-cobalt focus:outline-none focus:ring-1 focus:ring-accent-cobalt resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0F0EB]">
                  <span className="font-mono text-[11px] text-ink-muted">
                    ⚡ Instant WhatsApp redirect on dispatch
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-accent-cobalt hover:shadow-gallery active:scale-[0.98]"
                    data-cursor="hover"
                    data-cursor-text="DISPATCH"
                  >
                    <span>Send Brief & Start</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
