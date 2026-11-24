"use client";

import React from "react";
import Image from "next/image";
import { Waves, Users, Flower2, MapPin, Compass, ArrowRight, Info } from "lucide-react";

function TrailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19L10 5l4 8 6-10" />
      <circle cx="10" cy="5" r="1.5" />
      <circle cx="14" cy="13" r="1.5" />
    </svg>
  );
}

const propertyActivities = [
  {
    title: "Mudra Spa Wellness",
    category: "On-Property Wellness",
    description: "Ayurvedic treatments, relaxation therapies and body wellness situated within the resort grounds.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    icon: Flower2,
  },
  {
    title: "Infinity Pool & Deck",
    category: "On-Property Recreation",
    description: "Expansive swimming pool offering panoramic vistas of the surrounding Aravalli hills.",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    icon: Waves,
  },
  {
    title: "Resort Nature Trails",
    category: "On-Property Exploration",
    description: "Walking pathways and green trails throughout the property's lush hillside acreage.",
    image: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    icon: TrailIcon,
  },
  {
    title: "Kids Recreation Zone",
    category: "On-Property Family Space",
    description: "Dedicated play areas and games designed for visiting families with children.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Users,
  },
];

const nearbyAttractions = [
  {
    title: "Lake Pichola",
    category: "Regional Destination",
    description: "Iconic historic freshwater lake renowned for scenic boat rides and views of Jag Mandir and Lake Palace.",
    image: "/destinations/lake-pichola.jpg",
    icon: Waves,
  },
  {
    title: "City Palace Udaipur",
    category: "Heritage Monument",
    description: "Centuries-old royal palace complex and museum overlooking Lake Pichola.",
    image: "/destinations/city-palace.jpg",
    icon: MapPin,
  },
];

export function ExperiencesSection() {
  return (
    <section id="things-to-do" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              ACTIVITIES & REGIONAL PURSUITS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Activities & <span className="text-[#B8934E] italic font-serif font-normal">Attractions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Explore property recreation and iconic landmarks across the Udaipur region.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Ask a Question</span>
          <span>→</span>
        </a>
      </div>

      {/* Group 1: Property Facilities & Activities */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#0D2E24]" />
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#111827]">
            Property Facilities & Activities
          </h3>
          <span className="text-xs text-[#71717A] font-mono ml-2">(On-Property Amenities)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {propertyActivities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 text-white z-10 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-xs bg-[#0D2E24]/80 backdrop-blur-xs text-[#D4AF67] flex items-center justify-center border border-[#B8934E]/40">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                      {act.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#111827] group-hover:text-[#B8934E] transition-colors">
                      {act.title}
                    </h4>
                    <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed font-light">
                      {act.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Group 2: Nearby Udaipur Attractions */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#B8934E]" />
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#111827]">
            Nearby Udaipur Attractions
          </h3>
          <span className="text-xs text-[#71717A] font-mono ml-2">(Independent Regional Destinations)</span>
        </div>
        <p className="text-xs text-[#71717A] mb-4">
          Note: These attractions are external regional destinations in Udaipur and are not operated or hosted by The Ananta Udaipur.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {nearbyAttractions.map((att, idx) => {
            const Icon = att.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row group"
              >
                <div className="relative aspect-[16/10] sm:aspect-square sm:w-48 overflow-hidden bg-[#FAF8F5] shrink-0">
                  <Image
                    src={att.image}
                    alt={att.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8934E] block mb-1">
                      {att.category}
                    </span>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#B8934E] transition-colors">
                      {att.title}
                    </h4>
                    <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed font-light">
                      {att.description}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] text-[#71717A] italic">
                    External regional attraction
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
