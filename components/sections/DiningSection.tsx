"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Utensils, Sparkles, Clock, Wine } from "lucide-react";

const allOutlets = [
  {
    name: "Oasis Restaurant",
    tag: "Multi-Cuisine & Regional Rajasthani",
    timing: "All Day Dining • 7:00 AM - 11:00 PM",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
  },
  {
    name: "Float Poolside Bar",
    tag: "Cocktails & Sunken Lounge",
    timing: "Poolside Vistas • 11:00 AM - 11:00 PM",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
  },
  {
    name: "Ananta Tara Rooftop",
    tag: "Starlit Dining & Hillside Panorama",
    timing: "Evening Starlight • 7:00 PM - Midnight",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
  },
  {
    name: "In-Villa Private Dining",
    tag: "Bespoke Chef Consultation",
    timing: "24-Hour In-Residence Service",
    image: "/ananta-photos/Udaipur/Executive Suites/Executive_Suite_Bedroom_(Photo-2).jpg",
  },
  {
    name: "Alfresco Garden Dining",
    tag: "Open-Air Terraces & Aravalli Breeze",
    timing: "Breakfast & Sunset Hours",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
  },
  {
    name: "Chalet Tea & Coffee Deck",
    tag: "Artisanal Brews & Pastries",
    timing: "Morning to Twilight • 8:00 AM - 8:00 PM",
    image: "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
  },
];

export function DiningSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allOutlets.length / itemsPerPage);

  const displayedOutlets = allOutlets.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <section id="dining" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              GASTRONOMY & RESTAURANTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            A Culinary <span className="text-[#B8934E] italic font-serif font-normal">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Indulge in authentic Rajasthani delicacies and multi-cuisine favorites at The Ananta Udaipur, accompanied by panoramic hill views.
          </p>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            type="button"
            onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
            aria-label="Previous culinary page"
            className="w-9 h-9 rounded-xs bg-white border border-[#E8E2D8] hover:border-[#B8934E] text-[#111827] flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-[#71717A] px-2">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
            aria-label="Next culinary page"
            className="w-9 h-9 rounded-xs bg-white border border-[#E8E2D8] hover:border-[#B8934E] text-[#111827] flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {displayedOutlets.map((outlet, idx) => (
          <div
            key={idx}
            className="group relative bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
              <Image
                src={outlet.image}
                alt={outlet.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-xs bg-[#0D2E24]/85 text-[#D4AF67] text-[10px] font-mono uppercase tracking-wider backdrop-blur-xs">
                  {outlet.tag}
                </span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="p-4 sm:p-5 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
                  {outlet.name}
                </h3>
                <Wine className="w-4 h-4 text-[#B8934E] shrink-0" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#71717A] pt-2 border-t border-[#E8E2D8]/60">
                <Clock className="w-3.5 h-3.5 text-[#B8934E]" />
                <span>{outlet.timing}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
