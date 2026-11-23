"use client";

import React from "react";
import { BedDouble, Utensils, Mountain, Flower2 } from "lucide-react";

function BinocularsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10h4" />
      <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M8 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3" />
      <circle cx="6" cy="14" r="4" />
      <circle cx="18" cy="14" r="4" />
    </svg>
  );
}

export function HeroText() {
  return (
    <div className="flex flex-col mb-6 md:mb-10 relative z-10 text-left">
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
          THE ANANTA UDAIPUR / HILLSIDE SANCTUARY
        </span>
        <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#111827] tracking-tight mb-2">
        The Ananta, <span className="text-[#C5A059] italic font-serif">Udaipur</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-[15px] sm:text-lg text-[#1F2937] font-semibold tracking-wide mb-1.5">
        Stay options & travel details
      </p>

      {/* Subtitle Description */}
      <p className="text-[13px] sm:text-[15px] text-[#4B5563] max-w-2xl leading-relaxed mb-4">
        Discover accommodation categories, dining experiences, wellness retreats and nearby Udaipur attractions.
      </p>

      {/* 5 Quick Category Navigation Icons */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-4 py-3 border-y border-gray-200 max-w-2xl text-center mb-4">
        <a href="#rooms" className="flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-0.5">
          <BedDouble className="w-5 h-5 text-[#C5A059] mb-1.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#1F2937] group-hover:text-[#C5A059] transition-colors leading-tight">
            Stay Options
          </span>
          <span className="text-[9px] text-[#6B7280] leading-tight hidden xs:block mt-0.5">
            Curated Selection
          </span>
        </a>

        <a href="#dining" className="flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-0.5">
          <Utensils className="w-5 h-5 text-[#C5A059] mb-1.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#1F2937] group-hover:text-[#C5A059] transition-colors leading-tight">
            Dining
          </span>
          <span className="text-[9px] text-[#6B7280] leading-tight hidden xs:block mt-0.5">
            Fine Cuisine
          </span>
        </a>

        <a href="#things-to-do" className="flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-0.5">
          <Mountain className="w-5 h-5 text-[#C5A059] mb-1.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#1F2937] group-hover:text-[#C5A059] transition-colors leading-tight">
            Experiences
          </span>
          <span className="text-[9px] text-[#6B7280] leading-tight hidden xs:block mt-0.5">
            Adventure & Leisure
          </span>
        </a>

        <a href="#location" className="flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-0.5">
          <BinocularsIcon className="w-5 h-5 text-[#C5A059] mb-1.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#1F2937] group-hover:text-[#C5A059] transition-colors leading-tight">
            Nearby
          </span>
          <span className="text-[9px] text-[#6B7280] leading-tight hidden xs:block mt-0.5">
            Attractions
          </span>
        </a>

        <a href="#amenities" className="flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-0.5">
          <Flower2 className="w-5 h-5 text-[#C5A059] mb-1.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#1F2937] group-hover:text-[#C5A059] transition-colors leading-tight">
            Amenities
          </span>
          <span className="text-[9px] text-[#6B7280] leading-tight hidden xs:block mt-0.5">
            Leisure & Wellness
          </span>
        </a>
      </div>

      {/* Trust Badge (Desktop Only) */}
      <div className="hidden md:inline-flex items-center text-xs md:text-sm font-semibold text-[#A38038] tracking-wide py-2 px-4 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 w-fit">
        Enquiry Based &nbsp;|&nbsp; No Direct Booking &nbsp;|&nbsp; No Online Payments &nbsp;|&nbsp; Independent Travel Assistance
      </div>
    </div>
  );
}
