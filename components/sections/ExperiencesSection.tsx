import React from "react";
import Image from "next/image";
import { Waves, Users, Flower2, MapPin } from "lucide-react";

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

function AtvIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M6 14.5l3.5-3.5h5l3.5 3.5" />
      <path d="M11 7h2" />
      <path d="M12 7v4" />
      <path d="M8.5 11l-2.5 3.5" />
      <path d="M15.5 11l2.5 3.5" />
    </svg>
  );
}

const activities = [
  {
    title: "Mudra Spa Retreat",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    icon: Flower2,
    href: "#enquiry",
  },
  {
    title: "Infinity Pool",
    image: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    icon: Waves,
    href: "#enquiry",
  },
  {
    title: "Hillside Trails",
    image: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    icon: AtvIcon,
    href: "#enquiry",
  },
  {
    title: "Kids Activity Zone",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    icon: Users,
    href: "#enquiry",
  },
  {
    title: "Lake Pichola Cruise",
    image: "/destinations/lake-pichola.jpg",
    icon: Waves,
    href: "#nearby",
  },
  {
    title: "Udaipur Heritage",
    image: "/destinations/city-palace.jpg",
    icon: MapPin,
    href: "#nearby",
  },
];

export function ExperiencesSection() {
  return (
    <section id="things-to-do" className="mb-24 scroll-mt-28 relative">
      {/* Background Container */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-4">
            <BinocularsIcon className="w-5 h-5 text-[#C5A059]" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
              EXPERIENCES & UDAIPUR SIGHTSEEING
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
          </div>

          {/* Heading & Subtitle */}
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              Activities for <span className="text-[#C5A059] italic font-serif">Every Traveller</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              Immerse yourself in tranquil hillside rejuvenation, wellness therapies, and iconic Udaipur cultural excursions.
            </p>
          </div>

          {/* 6 Vertical Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#C5A059]/60 h-64 sm:h-72 lg:h-80 flex flex-col justify-end p-4 transition-all duration-300 shadow-md hover:shadow-xl bg-gray-100"
                >
                  {/* Card Background Image */}
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

                  {/* Card Footer Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Circular Gold Icon Badge */}
                    <div className="w-10 h-10 rounded-full border border-[#C5A059] bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#C5A059] mb-2.5 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-white group-hover:text-[#E8D19F] transition-colors leading-tight">
                      {act.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
