"use client";

import React from "react";
import { Compass, MapPin, Mountain, Building, Users, Map } from "lucide-react";

export function QuickFacts() {
  const facts = [
    { label: "Property Type", value: "Hillside Nature Retreat", icon: Building },
    { label: "Location", value: "Udaipur, Rajasthan", icon: MapPin },
    { label: "Setting", value: "Aravalli Hills & Valley Surroundings", icon: Mountain },
    { label: "Accommodation", value: "Villas, Cottages & Suites", icon: Compass },
    { label: "Suitable For", value: "Families, Couples, Leisure & Wellness", icon: Users },
    { label: "Area", value: "Kodiyat Road, Bujhda, Udaipur", icon: Map },
  ];

  return (
    <section id="overview" className="block mb-14 sm:mb-20 scroll-mt-28 md:scroll-mt-36">
      {/* Editorial Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 bg-[#B8934E] rounded-full" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B8934E]">
            Property Specifications & Dossier
          </span>
        </div>
        <span className="text-xs text-[#71717A] hidden sm:inline font-mono">

        </span>
      </div>

      {/* Grid Specification Dossier */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {facts.map((fact, idx) => {
          const Icon = fact.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col justify-between bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 rounded-xs shadow-xs hover:shadow-sm transition-all duration-300 group min-h-[120px]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#71717A] tracking-wider uppercase group-hover:text-[#B8934E] transition-colors">
                  {fact.label}
                </span>
                <Icon className="w-3.5 h-3.5 text-[#B8934E]/70 group-hover:text-[#B8934E] transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-serif font-semibold text-[#111827] leading-snug">
                {fact.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
