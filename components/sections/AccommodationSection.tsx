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
  Phone,
  Sparkles,
  Info,
  ExternalLink,
} from "lucide-react";

export const accommodations = [
  {
    name: "Luxury Cottages",
    badge: "Balinese Style",
    category: "cottages",
    images: [
      "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
      "/ananta-photos/Udaipur/Luxury Cottage/Luxury_Villa_Bed_Room_(Photo-2).webp",
      "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    ],
    features: "650 sq.ft • Signature open-to-sky shower • Private balcony",
    view: "Mountain view",
    viewIcon: "mountain",
    guests: "Verified: 650 sq.ft",
    floor: "Hillside Cottage",
  },
  {
    name: "Premium Wooden Cottages with Bathtub",
    badge: "Wooden Chalet",
    category: "cottages",
    images: [
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room_9_1cb899d2.webp",
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Washroom_with_bathtub_9_2de0a58b.webp",
    ],
    features: "520 sq.ft • 12 Cottages • Deep soaking bathtub • Vaulted timber architecture",
    view: "Hillside greenery",
    viewIcon: "leaf",
    guests: "Verified: 520 sq.ft",
    floor: "Wooden Chalet",
  },
  {
    name: "Jungle Wooden Cottages",
    badge: "Rustic Timber",
    category: "cottages",
    images: [
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room_9_1cb899d2.webp",
      "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
    ],
    features: "455 sq.ft • Nature-facing cottage with timber interiors and private sit-out",
    view: "Forest foliage",
    viewIcon: "leaf",
    guests: "Verified: 455 sq.ft",
    floor: "Jungle Chalet",
  },
  {
    name: "Executive Suites",
    badge: "Luxury Suite",
    category: "suites",
    images: [
      "/ananta-photos/Udaipur/Executive Suites/Executive_Suite_Bedroom_(Photo-2).jpg",
      "/ananta-photos/Udaipur/Executive Suites/Executive_suite4_qolqtm.jpg",
      "/ananta-photos/Udaipur/Executive Suites/Executive_suite2_gqmguo.jpg",
    ],
    features: "1,080 sq.ft • Independent living salon • Open-air cubicle shower",
    view: "Aravalli Hills",
    viewIcon: "mountain",
    guests: "Verified: 1,080 sq.ft",
    floor: "Private Balcony",
  },
  {
    name: "Grand Suites",
    badge: "Family Suite",
    category: "suites",
    images: [
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Bedroom_(Photo-4).jpg",
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Bedroom_(Photo-2)_2.jpg",
      "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Living_Room_ijapym.webp",
    ],
    features: "1,500 sq.ft • 2 Separate bedrooms • Expansive central living room",
    view: "Valley & grounds",
    viewIcon: "mountain",
    guests: "Verified: 1,500 sq.ft",
    floor: "Dual Balconies",
  },
  {
    name: "Presidential Villas",
    badge: "Private Pool",
    category: "villas",
    images: [
      "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
      "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_bedroom_at_ananta_udaipur_suites_in_Udaipur_1_rclkoa_nkzn4b.jpg",
      "/ananta-photos/Udaipur/Presidential Villa/DSC00327-Enhanced-NR_doced6.jpg",
    ],
    features: "4,500 sq.ft • Private swimming pool • 3 Bedrooms & sun deck",
    view: "360° Mountain",
    viewIcon: "waves",
    guests: "Verified: 4,500 sq.ft",
    floor: "Private Villa",
  },
  {
    name: "Ananta Villa",
    badge: "Signature Estate",
    category: "villas",
    images: [
      "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
      "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0345-HDR_dngzyn.jpg",
      "/ananta-photos/Udaipur/Ananta Villa/C589_2022_304F_naeeed.jpg",
    ],
    features: "4,500 sq.ft • Private swimming pool • 3 Bedrooms & landscaped grounds",
    view: "Aravalli Ridge",
    viewIcon: "waves",
    guests: "Verified: 4,500 sq.ft",
    floor: "Private Estate",
  },
  {
    name: "Chairman Villa",
    badge: "Pinnacle Estate",
    category: "villas",
    images: [
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
      "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    ],
    features: "4,500 sq.ft • Up to 10 guests • Private swimming pool • Luxury suites",
    view: "Valley Horizon",
    viewIcon: "mountain",
    guests: "Up to 10 Guests",
    floor: "Private Estate",
  },
];

function PropertyCard({ acc }: { acc: (typeof accommodations)[number] }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (acc.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === acc.images.length - 1 ? 0 : prev + 1));
    }, 4500);
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

  const handleAskQuestion = (e: React.MouseEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("topic", "Room categories");
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}#enquiry`);

    const isDesktop = window.innerWidth >= 1024;
    const targetId = isDesktop ? "enquiry-desktop" : "enquiry";
    const target = document.getElementById(targetId) || document.getElementById("enquiry");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md group">
      {/* Top Image Slider */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5] group/slider">
        <Image
          src={acc.images[currentImg]}
          alt={`${acc.name} - Photo ${currentImg + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Navigation Arrows */}
        {acc.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="w-7 h-7 rounded-xs bg-black/40 hover:bg-[#0D2E24] text-white flex items-center justify-center backdrop-blur-xs transition-all absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="w-7 h-7 rounded-xs bg-black/40 hover:bg-[#0D2E24] text-white flex items-center justify-center backdrop-blur-xs transition-all absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1">
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
                  className="p-1 cursor-pointer"
                >
                  <span
                    className={`block transition-all duration-300 rounded-full ${
                      i === currentImg ? "w-3 h-1 bg-[#D4AF67]" : "w-1 h-1 bg-white/60 hover:bg-white"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Photo Counter */}
            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-xs bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90 z-10">
              {currentImg + 1}/{acc.images.length}
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
              {acc.floor}
            </span>
            <span className="text-xs text-[#8F6E2E] font-medium font-mono">{acc.guests}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
            {acc.name}
          </h3>

          <p className="text-xs text-[#52525B] leading-relaxed mt-2 line-clamp-2">
            {acc.features}
          </p>

          {/* 3 Key Spec Chips Row */}
          <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-[#E8E2D8] text-[11px] text-[#3F3F46]">
            {/* View */}
            <div className="flex items-center gap-1.5 min-w-0">
              {acc.viewIcon === "waves" ? (
                <Waves className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              ) : acc.viewIcon === "mountain" ? (
                <Mountain className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              ) : (
                <Leaf className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              )}
              <span className="truncate font-medium">{acc.view}</span>
            </div>

            {/* Category / Detail */}
            <div className="flex items-center gap-1.5 min-w-0">
              <User className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <span className="truncate font-medium">{acc.badge}</span>
            </div>

            {/* Floor / Category */}
            <div className="flex items-center gap-1.5 min-w-0">
              <Layers className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <span className="truncate font-medium">{acc.floor}</span>
            </div>
          </div>
        </div>

        {/* Actions Row */}
        <div className="pt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={handleAskQuestion}
            className="flex-1 py-2.5 px-3 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group/btn"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3 h-3 text-[#D4AF67] group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="tel:+919279022649"
            className="py-2.5 px-3 rounded-xs border border-[#B8934E] bg-[#FAF8F5] hover:bg-[#B8934E] text-[#8F6E2E] hover:text-white transition-colors flex items-center justify-center text-xs font-semibold"
            aria-label={`Call regarding ${acc.name}`}
          >
            <Phone className="w-3.5 h-3.5 animate-phone-ring" />
          </a>
        </div>

        {/* Card Disclaimer Notice */}
        <p className="text-[10px] text-center text-[#71717A] pt-1.5 font-light m-0">
          Submitting an enquiry does not confirm a booking
        </p>
      </div>
    </div>
  );
}

export function AccommodationSection() {
  const [activeTab, setActiveTab] = useState<"all" | "cottages" | "suites" | "villas">("all");

  const filteredAccommodations =
    activeTab === "all"
      ? accommodations
      : accommodations.filter((a) => a.category === activeTab);

  return (
    <section id="rooms" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              ACCOMMODATION OVERVIEW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Residences, <span className="text-[#B8934E] italic font-serif font-normal">Cottages & Villas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-2xl font-light">
            Explore verified room categories at The Ananta Udaipur, from hillside timber chalets to expansive private pool estates.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xs border border-[#E8E2D8] self-start md:self-end">
          {(
            [
              { id: "all", label: "All Categories" },
              { id: "cottages", label: "Cottages" },
              { id: "suites", label: "Suites" },
              { id: "villas", label: "Villas" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0D2E24] text-white font-semibold"
                  : "text-[#71717A] hover:text-[#111827] hover:bg-[#FAF8F5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Information Notice Bar */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs p-3.5 sm:p-4 mb-8 text-xs text-[#52525B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-start sm:items-center gap-2">
          <Info className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            Room categories, dimensions and features are based on publicly available information and are for reference only. Current availability, rates and inclusions must be confirmed directly with The Ananta Udaipur. (Last reviewed: November 2026).
          </span>
        </div>
        <a
          href="https://www.anantahotels.com/ananta-hotels-udaipur/rooms.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8F6E2E] hover:underline font-semibold shrink-0 inline-flex items-center gap-1 text-[11px]"
        >
          <span>Official Room Page</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Grid of Accommodation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredAccommodations.map((acc, idx) => (
          <PropertyCard key={idx} acc={acc} />
        ))}
      </div>
    </section>
  );
}
