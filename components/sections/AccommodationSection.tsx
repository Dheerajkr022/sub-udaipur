"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Leaf,
  Waves,
  Mountain,
  User,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone
} from "lucide-react";

export const accommodations = [
  {
    name: "Luxury Cottage",
    badge: "Balinese Style",
    images: [
      "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
      "/ananta-photos/Udaipur/Luxury Cottage/Luxury_Villa_Bed_Room_(Photo-2).webp",
      "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    ],
    features: "650 sq.ft • Signature open-to-sky shower • Private balcony",
    view: "Mountain view",
    viewIcon: "mountain",
    guests: "2-3 Guests",
    floor: "Hillside Cottage",
  },
  {
    name: "Premium Wooden Cottage with Bathtub",
    badge: "Wooden Chalet",
    images: [
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room_9_1cb899d2.webp",
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Washroom_with_bathtub_9_2de0a58b.webp",
    ],
    features: "520 sq.ft • Deep soaking bathtub • Vaulted timber architecture",
    view: "Hillside greenery",
    viewIcon: "leaf",
    guests: "Up to 3 Guests",
    floor: "Wooden Chalet",
  },
  {
    name: "Executive Suite",
    badge: "Luxury Suite",
    images: [
      "/ananta-photos/Udaipur/Executive Suites/Executive_Suite_Bedroom_(Photo-2).jpg",
      "/ananta-photos/Udaipur/Executive Suites/Executive_suite4_qolqtm.jpg",
      "/ananta-photos/Udaipur/Executive Suites/Executive_suite2_gqmguo.jpg",
    ],
    features: "1,080 sq.ft • Independent living salon • Open-air cubicle shower",
    view: "Aravalli Hills",
    viewIcon: "mountain",
    guests: "Up to 4 Guests",
    floor: "Private Balcony",
  },
  {
    name: "Grand Suites",
    badge: "Family Suite",
    images: [
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Bedroom_(Photo-4).jpg",
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Bedroom_(Photo-2)_2.jpg",
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Living_Room_ijapym.webp",
    ],
    features: "1,500 sq.ft • 2 Separate bedrooms • Expansive central living room",
    view: "Valley & grounds",
    viewIcon: "mountain",
    guests: "Up to 5 Guests",
    floor: "Dual Balconies",
  },
  {
    name: "Presidential Villa",
    badge: "Private Pool",
    images: [
      "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
      "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_bedroom_at_ananta_udaipur_suites_in_Udaipur_1_rclkoa_nkzn4b.jpg",
      "/ananta-photos/Udaipur/Presidential Villa/DSC00327-Enhanced-NR_doced6.jpg",
    ],
    features: "4,500 sq.ft • Private outdoor pool • 3 Master bedrooms & sun deck",
    view: "360° Mountain",
    viewIcon: "waves",
    guests: "Up to 8 Guests",
    floor: "Private Villa",
  },
  {
    name: "Ananta Villa",
    badge: "Signature Estate",
    images: [
      "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
      "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0345-HDR_dngzyn.jpg",
      "/ananta-photos/Udaipur/Ananta Villa/C589_2022_304F_naeeed.jpg",
    ],
    features: "4,500 sq.ft • Private pool • Internal courtyard & 3 bedrooms",
    view: "Aravalli Ridge",
    viewIcon: "waves",
    guests: "Up to 8 Guests",
    floor: "Private Estate",
  },
  {
    name: "Chairman Villa",
    badge: "Pinnacle Estate",
    images: [
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    ],
    features: "4,500 sq.ft • Premier private pool • 3 Palatial suites & bar",
    view: "Valley Horizon",
    viewIcon: "mountain",
    guests: "Up to 8 Guests",
    floor: "Private Estate",
  },
];


function PropertyCard({ acc }: { acc: (typeof accommodations)[number] }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (acc.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === acc.images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [acc.images.length]);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? acc.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev === acc.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white border border-[#E5E7EB] hover:border-[#C5A059]/60 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group">
      {/* Top Image Slider */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 group/slider">
        <Image
          src={acc.images[currentImg]}
          alt={`${acc.name} - Photo ${currentImg + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/95 border border-[#C5A059]/50 text-[#A38038] text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-sm shadow-sm">
            {acc.badge}
          </span>
        </div>

        {/* Slider Navigation Arrows (visible on mobile, hover on desktop) */}
        {acc.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-[#C5A059] text-[#111827] hover:text-white flex items-center justify-center backdrop-blur-sm transition-all absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-90 sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer shadow-md active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-[#C5A059] text-[#111827] hover:text-white flex items-center justify-center backdrop-blur-sm transition-all absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-90 sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {acc.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImg(i);
                  }}
                  aria-label={`Photo ${i + 1}`}
                  className="p-1 cursor-pointer flex items-center justify-center"
                >
                  <span
                    className={`block transition-all duration-300 rounded-full ${
                      i === currentImg
                        ? "w-3.5 h-1.5 bg-[#C5A059]"
                        : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Photo count indicator */}
            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-medium z-10">
              {currentImg + 1}/{acc.images.length}
            </div>
          </>
        )}
      </div>

      {/* Card Content Details */}
      <div className="pt-3 sm:pt-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#111827] group-hover:text-[#C5A059] transition-colors leading-tight">
            {acc.name}
          </h3>

          {/* Description Bullets */}
          <p className="text-[12px] sm:text-[13px] text-[#4B5563] leading-snug mt-1.5 mb-3 line-clamp-2">
            {acc.features}
          </p>

          {/* 3 Key Spec Chips Row */}
          <div className="grid grid-cols-3 gap-1.5 py-2.5 my-3 border-y border-gray-200">
            {/* View */}
            <div className="flex items-center gap-1.5 min-w-0">
              {acc.viewIcon === "waves" && <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />}
              {acc.viewIcon === "mountain" && <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />}
              {acc.viewIcon !== "waves" && acc.viewIcon !== "mountain" && <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />}
              <span className="text-[11px] text-[#374151] font-medium truncate">
                {acc.view}
              </span>
            </div>

            {/* Occupancy */}
            <div className="flex items-center gap-1.5 min-w-0">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
              <span className="text-[11px] text-[#374151] font-medium truncate">
                {acc.guests}
              </span>
            </div>

            {/* Floor / Structure */}
            <div className="flex items-center gap-1.5 min-w-0">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
              <span className="text-[11px] text-[#374151] font-medium truncate">
                {acc.floor}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <a
            href="tel:+917042754628"
            className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-full border border-[#C5A059] bg-[#FAF8F5] hover:bg-[#C5A059] text-[#A38038] hover:text-white font-semibold text-[12px] sm:text-[13px] flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group/btn cursor-pointer active:scale-[0.98]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:text-white animate-phone-ring shrink-0" />
            <span>Request Stay Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function AccommodationSection() {
  return (
    <section id="rooms" className="mb-24 scroll-mt-28">
      {/* Header */}
      <div className="mb-8 md:mb-12 text-left">
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
            EXPLORE & DISCOVER
          </span>
          <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
          Accommodation <span className="text-[#C5A059] italic font-serif">Options</span>
        </h2>
        <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
          Explore a range of exquisite stay options at The Ananta Udaipur designed for comfort, privacy and a luxurious hillside retreat.
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {accommodations.map((acc, index) => (
          <PropertyCard key={index} acc={acc} />
        ))}
      </div>
    </section>
  );
}
