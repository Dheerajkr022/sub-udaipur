"use client";

import React from "react";
import { BedDouble, Utensils, Mountain, Compass, ShieldCheck } from "lucide-react";

export function HeroText() {
  return (
    <div className="flex flex-col pt-4 sm:pt-6 pb-6 md:pb-10 relative z-10 text-left border-b border-[#E8E2D8]/60 mb-8 sm:mb-12">
      {/* Editorial Eyebrow */}
      <div className="flex items-center gap-3 mb-3.5">
        <span className="w-6 sm:w-10 h-[1px] bg-[#B8934E]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#B8934E] uppercase">
          THE ANANTA UDAIPUR • HILLSIDE SANCTUARY • ARAVALLI HILLS
        </span>
      </div>

      {/* Main Display Headline */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#111827] tracking-tight leading-[1.08]">
          The Ananta, <span className="text-[#B8934E] italic font-serif font-normal">Udaipur</span>
        </h1>
        <div className="lg:text-right lg:max-w-xs">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#71717A] font-medium">
            Stay Options & Travel Details
          </p>
          <p className="text-xs text-[#8F6E2E] font-medium mt-1">
            Kodiyat Road, Udaipur, Rajasthan
          </p>
        </div>
      </div>

      {/* Narrative Subtitle Description */}
      <p className="text-sm sm:text-base md:text-lg text-[#52525B] max-w-3xl leading-relaxed mb-8 font-light">
        Discover accommodation categories, dining experiences, wellness retreats and nearby Udaipur attractions nestled amidst the majestic Aravalli peaks.
      </p>

      {/* Architectural Category Index */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 pt-6 border-t border-[#E8E2D8]">
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
              Stay Options
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Villas & Cottages
            </span>
          </div>
        </a>

        <a
          href="#dining"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">02</span>
            <Utensils className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Dining
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Fine Cuisine
            </span>
          </div>
        </a>

        <a
          href="#things-to-do"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">03</span>
            <Mountain className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Experiences
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Spa & Wellness
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
              Nearby Sights
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Lakes & Palaces
            </span>
          </div>
        </a>

        <a
          href="#overview"
          className="group p-3 sm:p-4 rounded-sm bg-white/70 hover:bg-white border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#B8934E]">05</span>
            <ShieldCheck className="w-4 h-4 text-[#71717A] group-hover:text-[#B8934E] transition-colors" />
          </div>
          <div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#18181B] group-hover:text-[#B8934E] transition-colors block">
              Quick Facts
            </span>
            <span className="text-[10px] text-[#71717A] tracking-wide block mt-0.5">
              Property Overview
            </span>
          </div>
        </a>
      </div>

      {/* Trust & Independence Badge (Laptop & Mobile) */}
      <div className="mt-5 flex items-center justify-start">
        <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-[13px] font-medium text-[#8F6E2E] py-2 px-4 sm:px-5 rounded-full bg-[#FAF8F5] border border-[#B8934E]/30 shadow-2xs">
          <span>Enquiry Based</span>
          <span className="text-[#B8934E]/40 select-none">|</span>
          <span>No Booking</span>
          <span className="text-[#B8934E]/40 select-none">|</span>
          <span>No Payment</span>
          <span className="text-[#B8934E]/40 select-none">|</span>
          <span>Independent Service</span>
        </div>
      </div>
    </div>
  );
}
