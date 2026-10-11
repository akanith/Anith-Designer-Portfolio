"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const availableServices = [
  "Brand Identity & Logo Systems",
  "Advertising & Campaign Design",
  "Social Media Creatives",
  "Product Advertising & Staging",
  "AI Video & Motion Content",
  "Invitations & Event Design",
  "Other / Custom Scope",
];

const timelineOptions = [
  "Within 1-2 weeks",
  "Within a month",
  "Flexible / Planning phase",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedProject = searchParams.get("project") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || (preselectedProject ? `Similar to ${preselectedProject}` : ""),
    timeline: "Within a month",
    details: preselectedProject
      ? `Hi ThinkLoom, I would like to discuss a project similar to "${preselectedProject}". Here are our initial ideas:`
      : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedAction, setSubmittedAction] = useState<"email" | "whatsapp" | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.details.trim()) {
      errs.details = "Please share a brief description of your project.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Project Enquiry from ${formData.name}: ${formData.service || "Design Project"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone/WhatsApp: ${formData.phone || "Not specified"}\n` +
        `Service Requested: ${formData.service || "General Inquiry"}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Project Brief & Details:\n${formData.details}\n\n` +
        `---\nSent via ThinkLoom Portfolio Inquiry Form`
    );

    setSubmittedAction("email");
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;

    const text = encodeURIComponent(
      `*New Project Enquiry for ThinkLoom*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone || "N/A"}\n` +
        `*Service:* ${formData.service || "General"}\n` +
        `*Timeline:* ${formData.timeline}\n\n` +
        `*Project Details:*\n${formData.details}`
    );

    setSubmittedAction("whatsapp");
    const waUrl = `https://wa.me/919842143307?text=${text}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-[#D9D5CC] p-8 md:p-12">
      <div className="mb-8">
        <h2 className="font-display font-bold text-2xl text-charcoal tracking-tight mb-2">
          Project Inquiry Form
        </h2>
        <p className="text-xs sm:text-sm text-muted-grey">
          Fill in your details below. You can send your brief directly via email client or initiate a WhatsApp chat with formatted project specs.
        </p>
      </div>

      <form onSubmit={handleSendViaEmail} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2"
            >
              Your Name / Business <span className="text-teal">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Preethi / Messiah Sports"
              className={`w-full px-4 py-3 bg-[#F4F2EC] border text-sm text-charcoal focus:bg-white focus:outline-none transition-colors ${
                errors.name ? "border-red-500" : "border-[#D9D5CC] focus:border-teal"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2"
            >
              Email Address <span className="text-teal">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="yourname@domain.com"
              className={`w-full px-4 py-3 bg-[#F4F2EC] border text-sm text-charcoal focus:bg-white focus:outline-none transition-colors ${
                errors.email ? "border-red-500" : "border-[#D9D5CC] focus:border-teal"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone and Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2"
            >
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98421 ..."
              className="w-full px-4 py-3 bg-[#F4F2EC] border border-[#D9D5CC] text-sm text-charcoal focus:bg-white focus:border-teal focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2"
            >
              Desired Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-[#F4F2EC] border border-[#D9D5CC] text-sm text-charcoal focus:bg-white focus:border-teal focus:outline-none transition-colors"
            >
              <option value="">Select a service category...</option>
              {availableServices.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2">
            Target Timeline
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {timelineOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-2 p-3 border text-xs cursor-pointer transition-colors ${
                  formData.timeline === opt
                    ? "bg-charcoal text-cream border-charcoal font-medium"
                    : "bg-[#F4F2EC] text-muted-grey border-[#D9D5CC] hover:text-charcoal"
                }`}
              >
                <input
                  type="radio"
                  name="timeline"
                  value={opt}
                  checked={formData.timeline === opt}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="sr-only"
                />
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-xs font-semibold uppercase tracking-editorial text-charcoal mb-2"
          >
            Project Details & Goals <span className="text-teal">*</span>
          </label>
          <textarea
            id="details"
            required
            rows={5}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Tell me about what you are building, the deliverables you need, and any visual reference or deadline requirements..."
            className={`w-full px-4 py-3 bg-[#F4F2EC] border text-sm text-charcoal focus:bg-white focus:outline-none transition-colors leading-relaxed ${
              errors.details ? "border-red-500" : "border-[#D9D5CC] focus:border-teal"
            }`}
          />
          {errors.details && (
            <p className="text-[11px] text-red-600 mt-1">{errors.details}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#D9D5CC] flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-editorial bg-charcoal text-cream hover:bg-teal transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Send Enquiry via Email</span>
          </button>

          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-editorial bg-teal text-white hover:bg-teal-hover transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>
        </div>

        {submittedAction && (
          <div className="p-4 bg-teal-subtle border border-teal text-teal-dark text-xs flex items-start gap-2.5 mt-4">
            <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
            <div>
              <strong>Action triggered:</strong> Your inquiry details have been formatted and opened in your {submittedAction === "email" ? "default email application" : "WhatsApp messenger"}. If it didn&apos;t open automatically, feel free to reach out directly at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="underline font-semibold">
                {siteConfig.contact.email}
              </a>.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
