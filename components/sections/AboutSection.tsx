import React from "react";
import { Info, BedDouble } from "lucide-react";
import { accommodations } from "@/components/sections/AccommodationSection";

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
              Udaipur Gateways is operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), an independent travel agency and enquiry platform. We provide curated hotel overviews, accommodation details, and local destination insights. We are not the owner, operator, or official representative of The Ananta Udaipur unless specifically stated.
            </p>
          </div>

          {/* Enquiry Notice Box */}
          <div className="mt-6 p-4 sm:p-5 bg-[#FAF8F5] border-l-2 border-[#B8934E] border-y border-r border-[#E8E2D8] rounded-xs space-y-3.5 text-xs sm:text-sm text-[#3F3F46]">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5" />
              <p className="leading-relaxed m-0">
                <strong className="text-[#111827] font-semibold">Enquiry Notice:</strong> Submitting an enquiry does not confirm a booking. Availability, seasonal rates, stay inclusions, and final reservations must be confirmed directly with the property.
              </p>
            </div>

            {/* Direct Mention of Every Room Category */}
            <div className="pt-3 border-t border-[#E8E2D8]/80">
              <div className="flex items-center gap-2 mb-2">
                <BedDouble className="w-3.5 h-3.5 text-[#B8934E]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8934E] font-semibold">
                  Every Room & Villa Category at The Ananta Udaipur:
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52525B]">
                {accommodations.map((room, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8934E] mt-1.5 shrink-0" />
                    <span>
                      <strong className="text-[#111827] font-medium">{room.name}</strong>
                      <span className="text-[#71717A] ml-1">({room.features.split(" • ")[0]} • {room.badge})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
