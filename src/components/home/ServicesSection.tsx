import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D9D5CC]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-semibold tracking-editorial uppercase text-teal block mb-3">
            What I Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight">
            Design Capabilities
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-grey max-w-xl">
            Specialized visual execution tailored for brands that want to communicate with clarity, prestige, and market authority.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-editorial text-charcoal hover:text-teal border-b border-charcoal hover:border-teal pb-1 transition-all w-fit group"
        >
          <span>All Services & Deliverables</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white border border-[#D9D5CC] p-7 md:p-8 flex flex-col justify-between hover:border-teal transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-medium text-muted-grey">
                  0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D9D5CC] group-hover:bg-teal transition-colors" />
              </div>

              <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-teal transition-colors mb-2">
                {service.title}
              </h3>

              <p className="text-xs font-medium text-teal mb-4 font-sans">
                {service.tagline}
              </p>

              <p className="text-xs md:text-sm text-muted-grey leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables snippet */}
              <div className="pt-4 border-t border-[#D9D5CC]/40 space-y-2">
                <span className="text-[11px] font-semibold tracking-editorial uppercase text-charcoal block mb-2">
                  Key Deliverables:
                </span>
                {service.deliverables.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted-grey">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D9D5CC]/60 flex items-center justify-between">
              <span className="text-[11px] text-muted-grey italic">
                Tailored scope
              </span>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-editorial text-charcoal group-hover:text-teal"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
