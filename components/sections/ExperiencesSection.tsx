"use client";

import React from "react";
import Image from "next/image";
import { Waves, Users, Flower2, MapPin, Compass, ArrowRight } from "lucide-react";

function TrailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19L10 5l4 8 6-10" />
      <circle cx="10" cy="5" r="1.5" />
      <circle cx="14" cy="13" r="1.5" />
    </svg>
  );
}

const activities = [
  {
    title: "Mudra Spa Retreat",
    category: "Holistic Wellness",
    description: "Traditional therapies, essential oil massages and Ayurvedic treatments amidst peaceful surroundings.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    icon: Flower2,
    href: "#enquiry",
  },
  {
    title: "Infinity Pool",
    category: "Mountain Aquatics",
    description: "Sunbathe and swim with sweeping panoramic views of the Aravalli peaks and sunset horizons.",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    icon: Waves,
    href: "#enquiry",
  },
  {
    title: "Hillside Trails",
    category: "Nature Walks",
    description: "Curated walking tracks and guided nature exploration around the resort’s lush acres.",
    image: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    icon: TrailIcon,
    href: "#enquiry",
  },
  {
    title: "Kids Activity Zone",
    category: "Family Recreation",
    description: "Engaging games, indoor play spaces and tailored activities designed for young travellers.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Users,
    href: "#enquiry",
  },
  {
    title: "Lake Pichola Cruise",
    category: "Heritage Voyage",
    description: "Sunset boat journeys offering majestic perspectives of Jag Mandir, Lake Palace and the City Palace.",
    image: "/destinations/lake-pichola.jpg",
    icon: Waves,
    href: "#nearby",
  },
  {
    title: "Udaipur Heritage",
    category: "City Exploration",
    description: "Immerse in royal Mewar history across City Palace, Saheliyon Ki Bari and historic bazaars.",
    image: "/destinations/city-palace.jpg",
    icon: MapPin,
    href: "#nearby",
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
              EXPERIENCES & PURSUITS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Curated <span className="text-[#B8934E] italic font-serif font-normal">Activities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Immerse yourself in wellness, leisure and curated activities at the resort and across scenic Udaipur.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Request Activity Details</span>
          <span>→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {activities.map((activity, idx) => {
          const Icon = activity.icon;
          return (
            <a
              key={idx}
              href={activity.href}
              className="group relative bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-xs bg-[#0D2E24]/85 text-[#D4AF67] text-[10px] font-mono uppercase tracking-wider backdrop-blur-xs">
                    {activity.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-xs bg-white/90 backdrop-blur-xs text-[#0D2E24] flex items-center justify-center shadow-xs">
                  <Icon className="w-4 h-4 text-[#B8934E]" />
                </div>
              </div>

              {/* Text */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-[#52525B] leading-relaxed mt-2 line-clamp-2">
                    {activity.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#E8E2D8]/60 flex items-center justify-between text-xs text-[#8F6E2E] font-medium">
                  <span>Explore Activity</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
