"use client";

import React from "react";
import Image from "next/image";
import { 
  BedDouble, 
  Utensils, 
  Flower2, 
  Dumbbell, 
  Mountain 
} from "lucide-react";

function SwimmerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="6" r="2" />
      <path d="M4 14.5c1.5-.7 3-.7 4.5 0s3 .7 4.5 0 3-.7 4.5 0 3 .7 4.5 0" />
      <path d="M4 18.5c1.5-.7 3-.7 4.5 0s3 .7 4.5 0 3-.7 4.5 0 3 .7 4.5 0" />
      <path d="M9 8.5l3 2 4-2" />
    </svg>
  );
}

function GolfIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21h14" />
      <path d="M8 21V4" />
      <path d="M8 4l8 4-8 4" />
      <circle cx="15" cy="18" r="1.5" />
    </svg>
  );
}

function TennisIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9.5" cy="9.5" r="5.5" />
      <path d="M13.5 13.5L19 19" />
      <path d="M7 7l5 5" />
      <path d="M12 7l-5 5" />
      <circle cx="17" cy="8" r="1.5" />
    </svg>
  );
}

const amenitiesList = [
  {
    title: "Infinity Swimming Pool",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    icon: SwimmerIcon,
    href: "#enquiry",
  },
  {
    title: "Mudra Spa & Wellness",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    icon: Flower2,
    href: "#enquiry",
  },
  {
    title: "Fine Dining Outlets",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    icon: Utensils,
    href: "#dining",
  },
  {
    title: "Open-Air Garden Showers",
    image: "/ananta-photos/Udaipur/Luxury Cottage/Luxury_Villa_Bed_Room_(Photo-2).webp",
    icon: BedDouble,
    href: "#enquiry",
  },
  {
    title: "Fitness Centre",
    image: "/images/amenities/fitness-centre.jpg",
    icon: Dumbbell,
    href: "#enquiry",
  },
  {
    title: "Grand Banquet Lawns",
    image: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
    icon: TennisIcon,
    href: "#enquiry",
  },
  {
    title: "Walking & Nature Trails",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Mountain,
    href: "#enquiry",
  },
  {
    title: "Scenic Aravalli Surroundings",
    image: "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
    icon: Mountain,
    href: "#enquiry",
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="mb-24 scroll-mt-28 relative">
      {/* Background Container */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              <span className="text-[#C5A059] font-serif">Amenities</span> at The Ananta Udaipur
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              Explore a wide range of world-class amenities and leisure facilities available at The Ananta Udaipur.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {amenitiesList.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#C5A059]/60 h-52 sm:h-56 lg:h-60 flex flex-col justify-end transition-all duration-300 shadow-md hover:shadow-xl bg-gray-100"
                >
                  {/* Background Image */}
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

                  {/* Card Bottom Row */}
                  <div className="p-4 sm:p-5 flex items-center gap-3 relative z-10 w-full">
                    {/* Circular Gold Outline Badge */}
                    <div className="w-10 h-10 rounded-full border border-[#C5A059] bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#C5A059] shadow-md group-hover:bg-[#C5A059]/20 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Title */}
                    <h3 className="text-[14px] sm:text-[15px] font-semibold text-white group-hover:text-[#E8D19F] transition-colors leading-tight truncate">
                      {amenity.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="mt-8 pt-4 border-t border-gray-200 text-[12px] sm:text-[13px] text-[#6B7280] text-center">
            * Amenities shown are for reference only. Availability, access, timings and inclusions may vary.
          </div>
        </div>
      </div>
    </section>
  );
}
