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
    name: "Supreme Cottage",
    badge: "Premium",
    images: [
      "/property/supreme-cottage/1.jpg",
      "/property/supreme-cottage/2.jpg",
      "/property/supreme-cottage/3.jpg",
    ],
    features: "Refined interiors • Nature view • Verdant surroundings",
    view: "Nature view",
    viewIcon: "leaf",
    guests: "2 Adults",
    floor: "Ground Floor",
  },
  {
    name: "Spanish Cottage",
    badge: "Forest Retreat",
    images: [
      "/property/spanish-cottage/1.jpg",
      "/property/spanish-cottage/2.jpg",
      "/property/spanish-cottage/3.jpg",
      "/property/spanish-cottage/4.jpg",
    ],
    features: "Elegant design • Garden view • Peaceful stay",
    view: "Garden view",
    viewIcon: "leaf",
    guests: "2 Adults",
    floor: "Ground Floor",
  },
  {
    name: "Aussie Room",
    badge: "Signature Stay",
    images: [
      "/property/aussie-wooden-room/1.jpg",
      "/property/aussie-wooden-room/2.jpg",
      "/property/aussie-wooden-room/3.jpg",
      "/property/aussie-wooden-room/4.jpg",
      "/property/aussie-wooden-room/5.jpg",
      "/property/aussie-wooden-room/6.jpg",
    ],
    features: "Nature view • Elegant interiors • Comfortable stay",
    view: "Nature view",
    viewIcon: "leaf",
    guests: "2 Adults",
    floor: "Ground Floor",
  },
  {
    name: "Burmese Chalet",
    badge: "Mountain Solitude",
    images: [
      "/property/burmese-chalet/1.jpg",
      "/property/burmese-chalet/2.jpg",
      "/property/burmese-chalet/3.jpg",
      "/property/burmese-chalet/4.jpg",
      "/property/burmese-chalet/5.jpg",
    ],
    features: "Traditional charm • Spacious rooms • Scenic views",
    view: "Hill view",
    viewIcon: "mountain",
    guests: "2 Adults",
    floor: "Ground Floor",
  },
  {
    name: "Aveda Suite",
    badge: "Private Jacuzzi",
    images: [
      "/property/aveda-suite/1.png",
      "/property/aveda-suite/2.png",
      "/property/aveda-suite/3.png",
      "/property/aveda-suite/4.png",
      "/property/aveda-suite/5.png",
    ],
    features: "Private outdoor Jacuzzi • Panoramic valley view • Luxury suite",
    view: "Valley view",
    viewIcon: "mountain",
    guests: "2 Adults",
    floor: "Balcony / Deck",
  },
  {
    name: "Aussie Suite Villa",
    badge: "Most Luxurious",
    images: [
      "/property/aussie-suite/1.jpg",
      "/property/aussie-suite/2.jpg",
      "/property/aussie-suite/3.jpg",
      "/property/aussie-suite/4.jpg",
      "/property/aussie-suite/5.jpg",
    ],
    features: "Private Jacuzzi • Spacious living • Premium amenities",
    view: "Nature view",
    viewIcon: "leaf",
    guests: "2 Adults",
    floor: "Ground Floor",
  },
  {
    name: "Cabana",
    badge: "Waterfront",
    images: [
      "/property/cabana-room/1.jpg",
      "/property/cabana-room/2.jpg",
      "/property/cabana-room/3.jpg",
      "/property/cabana-room/4.jpg",
      "/property/cabana-room/5.jpg",
    ],
    features: "Lake adjacent • Private deck • Relaxing ambiance",
    view: "Lake view",
    viewIcon: "waves",
    guests: "2 Adults",
    floor: "Balcony / Terrace",
  },
  {
    name: "Hermitage",
    badge: "Forest Exclusive",
    images: [
      "/property/hermitage/1.jpg",
      "/property/hermitage/2.jpg",
    ],
    features: "Timber & glass design • Hilltop view • Rustic elegance",
    view: "Hill view",
    viewIcon: "mountain",
    guests: "2 Adults",
    floor: "Ground Floor",
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
          Explore a range of exquisite stay options designed for comfort, privacy and a luxurious hill-stay experience.
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
