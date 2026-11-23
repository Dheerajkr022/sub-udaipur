import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Compass } from "lucide-react";

const attractions = [
  "Tiger Point",
  "Lion's Point",
  "Bhushi Dam",
  "Lonavala Lake",
  "Pawna Lake",
  "Rajmachi",
  "Karla Caves",
  "Bhaja Caves",
];

export function NearbyAttractions() {
  return (
    <section id="nearby" className="mb-20 scroll-mt-32 md:scroll-mt-40">
      <SectionHeading title="Around Lonavala" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8">
        {attractions.map((place, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-[#E5E7EB] hover:border-[#C5A059]/60 p-4 md:p-5 rounded-2xl shadow-sm flex items-center gap-3.5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Compass className="h-4 w-4 text-[#C5A059] group-hover:rotate-45 transition-transform" />
            </div>
            <span className="font-medium text-[#111827] group-hover:text-[#C5A059] transition-colors text-sm md:text-base">
              {place}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-start">
        <Button size="lg" className="bg-[#C5A059] hover:bg-[#B88A3B] text-white font-bold shadow-md shadow-[#C5A059]/20 tracking-wider" asChild>
          <a href="tel:+917042754628">EXPLORE LOCAL TOURS</a>
        </Button>
      </div>
    </section>
  );
}
