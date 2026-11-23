"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const nearbyDestinations = [
  {
    name: "City Palace Udaipur",
    image: "/destinations/city-palace.jpg",
  },
  {
    name: "Lake Pichola",
    image: "/destinations/lake-pichola.jpg",
  },
  {
    name: "Fateh Sagar Lake",
    image: "/destinations/fateh-sagar.jpg",
  },
  {
    name: "Sajjangarh Palace",
    image: "/destinations/sajjangarh.jpg",
  },
  {
    name: "Kumbhalgarh Fort",
    image: "/destinations/kumbhalgarh.jpg",
  },
  {
    name: "Ranakpur Temple",
    image: "/destinations/ranakpur.jpg",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="mb-24 scroll-mt-28 relative">
      {/* Background Container */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
              LOCATION & NEARBY ATTRACTIONS
            </span>
            <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
          </div>

          {/* Heading & Subtitle */}
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              Explore <span className="text-[#C5A059] italic font-serif">Nearby Destinations</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              Discover iconic heritage palaces, tranquil lakes and cultural landmarks across Udaipur.
            </p>
          </div>

          {/* Grid: Google Map on Left, 6 Attractions on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Google Map Card */}
            <div className="lg:col-span-5 bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl overflow-hidden flex flex-col shadow-sm">
              {/* Map Iframe */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 bg-gray-100 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=The+Ananta+Udaipur,+Bujhda,+Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Ananta Udaipur Location Map"
                  className="w-full h-full"
                />
              </div>

              {/* Map Card Footer */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border-t border-gray-200">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#111827] truncate">
                      The Ananta, Bujhda, Udaipur
                    </h4>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=The+Ananta+Udaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-[#111827] text-[12px] font-medium flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-sm"
                >
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              </div>
            </div>

            {/* Right: 6 Attractions (3x2 Grid) */}
            <div id="nearby" className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 scroll-mt-28 md:scroll-mt-40">
              {nearbyDestinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col bg-white border border-[#E5E7EB] hover:border-[#C5A059]/60 rounded-2xl p-2.5 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#111827] group-hover:text-[#C5A059] transition-colors text-center mt-2.5 truncate block px-1">
                    {dest.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
