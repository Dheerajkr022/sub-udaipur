"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Compass, Phone } from "lucide-react";

const nearbyDestinations = [
  {
    name: "City Palace Udaipur",
    distance: "12 km from resort",
    description: "Centuries-old royal Mewar complex overlooking Lake Pichola with ornate courtyards and museums.",
    image: "/destinations/city-palace.jpg",
  },
  {
    name: "Lake Pichola",
    distance: "11 km from resort",
    description: "Historic freshwater lake featuring iconic boat rides, Jag Mandir island palace and sunset reflections.",
    image: "/destinations/lake-pichola.jpg",
  },
  {
    name: "Fateh Sagar Lake",
    distance: "13 km from resort",
    description: "Scenic artificial lake framed by hills, offering lakeside promenades, boating and Nehru Park island.",
    image: "/destinations/fateh-sagar.jpg",
  },
  {
    name: "Sajjangarh Palace",
    distance: "9 km from resort",
    description: "Monsoon palace perched atop Bansdara peak providing breathtaking 360-degree sunset panoramas.",
    image: "/destinations/sajjangarh.jpg",
  },
  {
    name: "Kumbhalgarh Fort",
    distance: "Day excursion",
    description: "Legendary Mewar stronghold renowned for the second longest continuous wall in the world.",
    image: "/destinations/kumbhalgarh.jpg",
  },
  {
    name: "Ranakpur Temple",
    distance: "Scenic drive",
    description: "Architectural masterpiece with 1,444 uniquely carved marble pillars nestled in the Aravalli woods.",
    image: "/destinations/ranakpur.jpg",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              LOCATION & NEARBY ATTRACTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Explore <span className="text-[#B8934E] italic font-serif font-normal">Nearby Destinations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Discover iconic heritage palaces, tranquil lakes and cultural landmarks across Udaipur.
          </p>
        </div>

        <a
          href="tel:+919279022649"
          className="px-4 py-2 rounded-xs border border-[#B8934E] text-[#8F6E2E] hover:bg-[#0D2E24] hover:text-white hover:border-[#0D2E24] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all self-start md:self-end"
        >
          <Phone className="w-3.5 h-3.5 animate-phone-ring" />
          <span>Sightseeing Guidance</span>
        </a>
      </div>

      {/* Grid: Map & Attractions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Map Dossier */}
        <div className="lg:col-span-5 bg-white border border-[#E8E2D8] rounded-xs overflow-hidden shadow-xs">
          <div className="relative w-full h-64 sm:h-80 bg-[#FAF8F5]">
            <iframe
              src="https://maps.google.com/maps?q=The+Ananta+Udaipur,+Bujhda,+Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Ananta Udaipur Location Map"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />
          </div>

          <div className="p-5 border-t border-[#E8E2D8]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#B8934E]/30 flex items-center justify-center text-[#B8934E] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#111827]">
                  The Ananta, Bujhda, Udaipur
                </h4>
                <p className="text-xs text-[#52525B] mt-1 leading-relaxed">
                  Village Bujhda, Tehsil Girwa, Kodiyat Road, Udaipur, Rajasthan 313031
                </p>
                <div className="mt-3 pt-3 border-t border-[#E8E2D8]/60 flex items-center justify-between text-[11px] text-[#71717A]">
                  <span>Approx. 30 km from Maharana Pratap Airport</span>
                  <a
                    href="https://maps.google.com/?q=The+Ananta+Udaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8934E] font-medium hover:underline flex items-center gap-1"
                  >
                    <span>View Full Map</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 6 Nearby Destinations */}
        <div id="nearby" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nearbyDestinations.map((dest, idx) => (
            <div
              key={idx}
              className="group bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF67] block">
                    {dest.distance}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base leading-snug">
                    {dest.name}
                  </h4>
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-grow">
                <p className="text-xs text-[#52525B] leading-relaxed line-clamp-2">
                  {dest.description}
                </p>
                <div className="mt-2 pt-2 border-t border-[#E8E2D8]/60 flex items-center justify-between text-[11px] text-[#8F6E2E] font-medium">
                  <span>Explore Heritage</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
