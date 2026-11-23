import React from "react";
import { ShieldCheck, Info } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mb-20 sm:mb-28 scroll-mt-28">
      <div className="bg-white border border-[#E8E2D8] rounded-xs p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              PLATFORM INFORMATION & MISSION
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111827] tracking-tight mb-4">
            Independent Information & Enquiry Service
          </h2>

          <div className="text-sm text-[#52525B] space-y-4 leading-relaxed font-light">
            <p>
              Udaipur Gateways is operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), an independent travel discovery and enquiry platform. We provide curated hotel overviews, accommodation details, and local destination insights. We are not the owner, operator, or official representative of The Ananta Udaipur unless specifically stated.
            </p>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-[#FAF8F5] border-l-2 border-[#B8934E] border-y border-r border-[#E8E2D8] rounded-xs flex items-start gap-3 text-xs sm:text-sm text-[#3F3F46]">
            <Info className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5" />
            <p className="leading-relaxed m-0">
              <strong className="text-[#111827] font-semibold">Enquiry Notice:</strong> Submitting an enquiry does not confirm a booking. Availability, seasonal rates, stay inclusions, and final reservations must be confirmed directly with the property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
