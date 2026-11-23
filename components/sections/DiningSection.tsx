"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allOutlets = [
  { name: "Woodpecker Restaurant", image: "/images/dining/woodpecker.jpg" },
  { name: "Mabruk Restaurant", image: "/images/dining/mabruk.jpg" },
  { name: "Lake Front Café", image: "/images/dining/lakefront.jpg" },
  { name: "Girasole", image: "/images/dining/girasole.jpg" },
  { name: "Grill Chaska", image: "/images/dining/grillchaska.jpg" },
  { name: "Tuk Tuk Street Food Corner", image: "/images/dining/tuktuk.jpg" },
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
    <section id="dining" className="mb-24 scroll-mt-28 relative">
      {/* Background Container */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              A Culinary <span className="text-[#C5A059] italic font-serif">Journey</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              Indulge in a variety of cuisines at world-class restaurants, with breathtaking views and unforgettable dining experiences.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedOutlets.map((outlet, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#C5A059]/60 transition-all duration-300 shadow-md hover:shadow-xl block bg-white"
              >
                {/* Image */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Card Bottom Bar */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-t border-gray-100">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] group-hover:text-[#C5A059] transition-colors tracking-wide truncate">
                    {outlet.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
                aria-label="Previous page"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#C5A059] active:bg-gray-50 text-[#111827] flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className="p-2 cursor-pointer flex items-center justify-center"
                  >
                    <span
                      className={`block transition-all duration-300 rounded-full ${
                        page === i
                          ? "w-6 h-2 bg-[#C5A059]"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
                aria-label="Next page"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#C5A059] active:bg-gray-50 text-[#111827] flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Footnote Disclaimer */}
          <div className="flex items-center justify-center gap-2 mt-6 text-[12px] text-gray-500 text-center">
            <span className="w-4 h-4 rounded-full bg-[#C5A059] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              i
            </span>
            <span>Dining information is for reference only. Timings, availability and charges may vary.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
