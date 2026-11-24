"use client";

import React from "react";
import { BedDouble, Utensils, Mountain, Compass, ExternalLink } from "lucide-react";

export function HeroText() {
  return (
    <div className="flex flex-col pt-4 sm:pt-6 pb-6 md:pb-10 relative z-10 text-left border-b border-[#E8E2D8]/60 mb-8 sm:mb-12">
      {/* Editorial Eyebrow */}
      <div className="flex items-center gap-3 mb-3.5">
        <span className="w-6 sm:w-10 h-[1px] bg-[#B8934E]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#B8934E] uppercase">
          HILLSIDE DESTINATION • ARAVALLI HILLS
        </span>
      </div>

      {/* Main Display Headline */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#111827] tracking-tight leading-[1.08]">
          The Ananta, <span className="text-[#B8934E] italic font-serif font-normal">Udaipur</span>
        </h1>
        <div className="lg:text-right lg:max-w-xs">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#71717A] font-medium">
            Independent Property Information
          </p>
          <p className="text-xs text-[#8F6E2E] font-medium mt-1">
            Kodiyat Road, Bujhda, Udaipur, Rajasthan, India
          </p>
        </div>
      </div>

      {/* Hero Independence Notice Block */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs p-4 sm:p-5 mb-6 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
        <div className="font-serif font-bold text-sm sm:text-base text-[#111827] mb-1.5">
          Independent Property Information Guide
        </div>
        <p className="mb-2">
          This page is published by Udaipur Gateway, operated by Nothing Like Travel LLP. We are an independent information website and are not owned, operated, sponsored, authorised or endorsed by The Ananta Udaipur or its owner/operator. We do not check live room availability, provide live rates, take bookings, confirm reservations or collect accommodation payments. For current availability, rates, reservations, cancellations and official property services, contact The Ananta Udaipur directly through its official website or contact channels.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E8E2D8]/80 text-[11px] text-[#71717A]">
          <span>Property names and trademarks belong to their respective owners.</span>
          <a
            href="https://www.anantahotels.com/ananta-hotels-udaipur/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F6E2E] hover:text-[#0D2E24] font-medium underline inline-flex items-center gap-1"
          >
            Visit The Ananta Udaipur official website <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Narrative Subtitle Description */}
      <p className="text-sm sm:text-base md:text-lg text-[#52525B] max-w-3xl leading-relaxed mb-8 font-light">
        Review independent information about accommodation categories, facilities, dining and nearby attractions at The Ananta Udaipur, situated against the scenic backdrop of the Aravalli range.
      </p>

      {/* Architectural Category Index */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-6 border-t border-[#E8E2D8]">
        <a
          href="#rooms"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">01</span>
            <BedDouble className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Room Categories
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Cottages, Suites & Villas
            </span>
          </div>
        </a>

        <a
          href="#amenities"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">02</span>
            <Mountain className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Property Facilities
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Pool, Spa & Lawns
            </span>
          </div>
        </a>

        <a
          href="#dining"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">03</span>
            <Utensils className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Dining Information
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Restaurants & Bars
            </span>
          </div>
        </a>

        <a
          href="#location"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">04</span>
            <Compass className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Location & Nearby
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Attractions & Map
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
