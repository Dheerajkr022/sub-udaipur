"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Utensils, Sparkles, Clock, Wine, Info, ExternalLink } from "lucide-react";

const allOutlets = [
  {
    name: "Oasis",
    tag: "Multi-Cuisine & Regional Indian",
    timing: "Breakfast, Lunch & Dinner (Timings subject to change)",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    description: "Main dining venue offering a range of Indian and international cuisines with indoor and outdoor seating.",
  },
  {
    name: "Float Poolside Bar",
    tag: "Beverages & Sunken Lounge",
    timing: "Poolside refreshments (Timings subject to change)",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    description: "Casual poolside outlet serving refreshing beverages, cocktails and light bites overlooking the Aravalli hills.",
  },
  {
    name: "Zenith",
    tag: "Scenic Dining Outlet",
    timing: "Evening dining (Timings subject to change)",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    description: "Speciality venue offering elevated perspectives and curated culinary selections.",
  },
  {
    name: "Jharna",
    tag: "Waterfront Ambience Dining",
    timing: "Speciality hours (Timings subject to change)",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    description: "Dining experience set amidst picturesque waterfall-inspired landscaping and resort scenery.",
  },
  {
    name: "Baker's Delight",
    tag: "Bakery & Confectionery",
    timing: "Daytime bakery service (Timings subject to change)",
    image: "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
    description: "Freshly baked breads, pastries, coffee, tea and light bakery delicacies.",
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
              DINING INFORMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Dining <span className="text-[#B8934E] italic font-serif font-normal">Information</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Overview of confirmed restaurants, dining venues and bars at The Ananta Udaipur.
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

      {/* Dining Notice Box */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs p-4 sm:p-5 mb-8 text-xs sm:text-sm text-[#4B5563] leading-relaxed flex items-start gap-3">
        <Info className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5" />
        <p className="m-0">
          The property&apos;s dining outlets and food and beverage services may change. Names, operating hours, menus, access and charges should be confirmed directly with The Ananta Udaipur before visiting.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {displayedOutlets.map((outlet, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
              <Image
                src={outlet.image}
                alt={outlet.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-3 text-white z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-xs bg-[#0D2E24]/80 backdrop-blur-xs text-[#D4AF67] flex items-center justify-center border border-[#B8934E]/40">
                  <Utensils className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                  {outlet.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#B8934E] transition-colors">
                  {outlet.name}
                </h3>
                <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed font-light">
                  {outlet.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E8E2D8]/80 flex items-center justify-between text-[11px] text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#B8934E]" />
                  <span>{outlet.timing}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
