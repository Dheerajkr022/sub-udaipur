"use client";

import React from "react";
import Image from "next/image";
import { BedDouble, Utensils, Flower2, Dumbbell, Mountain, Smile, Info } from "lucide-react";

function SwimmerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="6" r="2" />
      <path d="M4 14.5c1.5-.7 3-.7 4.5 0s3 .7 4.5 0 3-.7 4.5 0" />
      <path d="M4 18.5c1.5-.7 3-.7 4.5 0s3 .7 4.5 0 3-.7 4.5 0" />
      <path d="M9 8.5l3 2 4-2" />
    </svg>
  );
}

function LawnIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

const amenitiesList = [
  {
    title: "Infinity Swimming Pool",
    category: "Aquatics & Leisure",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    icon: SwimmerIcon,
  },
  {
    title: "Mudra Spa & Wellness",
    category: "Ayurveda & Healing",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    icon: Flower2,
  },
  {
    title: "Fine Dining Outlets",
    category: "Gastronomy",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    icon: Utensils,
  },
  {
    title: "Open-Air Garden Showers",
    category: "Signature Architecture",
    image: "/ananta-photos/Udaipur/Luxury Cottage/Luxury_Villa_Bed_Room_(Photo-2).webp",
    icon: BedDouble,
  },
  {
    title: "Fitness Centre",
    category: "Health & Vitality",
    image: "/images/amenities/fitness-centre.jpg",
    icon: Dumbbell,
  },
  {
    title: "Grand Banquet Lawns",
    category: "Events & Celebrations",
    image: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
    icon: LawnIcon,
  },
  {
    title: "Walking & Nature Trails",
    category: "Hillside Exploration",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Mountain,
  },
  {
    title: "Kids Activity Zone",
    category: "Family Recreation",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Smile,
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              PROPERTY FACILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Property <span className="text-[#B8934E] italic font-serif font-normal">Facilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Overview of recreational and wellness facilities available across the resort estate.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Ask About Facilities</span>
          <span>→</span>
        </a>
      </div>

      {/* Facilities Information Notice Box */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs p-4 sm:p-5 mb-8 text-xs sm:text-sm text-[#4B5563] leading-relaxed flex items-start gap-3">
        <Info className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5" />
        <p className="m-0">
          The facilities shown are based on publicly available property information and are provided for general reference. Access, operating hours, availability, eligibility and additional charges may change. Please confirm current details directly with The Ananta Udaipur.
        </p>
      </div>

      {/* Grid of 8 Amenity Dossier Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {amenitiesList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={item.image}
                  alt={item.title}
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
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#111827] group-hover:text-[#B8934E] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-[#71717A] uppercase">
                  Facility
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
