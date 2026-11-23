import React from "react";

export function QuickFacts() {
  const facts = [
    { label: "Property Type", value: "Resort / Hill City" },
    { label: "Location", value: "Lonavala, Maharashtra" },
    { label: "Setting", value: "Hill & Nature Surroundings" },
    { label: "Accommodation", value: "Multiple Categories" },
    { label: "Suitable For", value: "Families, Couples, Groups & Corporate" },
    { label: "Area", value: "Aamby Valley City, Lonavala Region" },
  ];

  return (
    <section id="overview" className="block mb-12 sm:mb-16 mt-6 sm:mt-8 scroll-mt-28 md:scroll-mt-40">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {facts.map((fact, idx) => (
          <div key={idx} className="p-4 sm:p-5 md:p-6 flex flex-col justify-center text-center bg-white border border-[#E5E7EB] hover:border-[#C5A059]/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#A38038] uppercase tracking-widest mb-1.5 group-hover:text-[#C5A059] transition-colors">
              {fact.label}
            </span>
            <span className="text-[13px] sm:text-[15px] md:text-[17px] font-serif font-semibold text-[#111827] leading-snug">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
