"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

const galleryImages = [
  "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
  "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
  "/ananta-photos/Udaipur/Executive Suites/Executive_Suite_Bedroom_(Photo-2).jpg",
  "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
  "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
  "/ananta-photos/Udaipur/Grand Suites/Grand_Suite_Bedroom_(Photo-4).jpg",
  "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
  "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
];

const sliderImages = [
  {
    url: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    caption: "The Ananta Panoramic Hillside Sanctuary",
    tag: "Resort Grounds",
  },
  {
    url: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
    caption: "Verdant Aravalli Valleys & Balinese Architecture",
    tag: "Hillside Vistas",
  },
  {
    url: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    caption: "Refined Dining & Sunset Terrace",
    tag: "Dining Terraces",
  },
  {
    url: "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
    caption: "Signature Presidential Villa with Private Pool",
    tag: "Private Pool Villa",
  },
  {
    url: "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
    caption: "Balinese Luxury Cottage with Open-Air Shower",
    tag: "Luxury Cottage",
  },
  {
    url: "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
    caption: "Ananta Villa Private Residence & Pool Deck",
    tag: "Estate Villa",
  },
  {
    url: "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
    caption: "Chairman Villa Grand Pavilion & Gardens",
    tag: "Chairman Estate",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section id="gallery" className="mb-6 scroll-mt-28 relative">
      {/* Editorial Photo Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 h-[380px] sm:h-[460px] md:h-[540px]">
        {/* Main Cinematic Frame */}
        <div className="lg:col-span-8 bg-[#0D2E24] rounded-sm relative overflow-hidden h-full group border border-[#E8E2D8] shadow-sm">
          {sliderImages.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.url}
                alt={slide.caption}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-20 text-white z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0D2E24]/80 backdrop-blur-md border border-[#B8934E]/40 text-[#D4AF67] text-[10px] uppercase font-mono tracking-widest rounded-xs mb-2">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{slide.tag}</span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-serif text-white/95 font-medium leading-snug drop-shadow-sm">
                  {slide.caption}
                </h3>
              </div>
            </div>
          ))}

          {/* Slider Navigation Arrows */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-sm bg-black/40 hover:bg-[#0D2E24] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-sm bg-black/40 hover:bg-[#0D2E24] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Index Counter */}
          <div className="absolute bottom-5 right-5 z-20 font-mono text-xs text-white/80 bg-black/50 px-3 py-1 rounded-sm border border-white/10 backdrop-blur-xs">
            <span className="text-[#D4AF67] font-bold">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="mx-1 text-white/40">/</span>
            <span>{String(sliderImages.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Secondary Editorial Diptych (Desktop) */}
        <div className="hidden lg:grid grid-rows-2 gap-3 md:gap-4 lg:col-span-4 h-full">
          <div className="bg-[#FAF8F5] rounded-sm relative overflow-hidden group border border-[#E8E2D8] shadow-xs">
            <Image
              src={galleryImages[1]}
              alt="Premium Wooden Cottage with Bathtub"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF67] block">
                Verified Category
              </span>
              <span className="text-sm font-serif font-medium">Premium Wooden Cottages</span>
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-sm relative overflow-hidden group border border-[#E8E2D8] shadow-xs">
            <Image
              src={galleryImages[4]}
              alt="Presidential Villa Swimming Pool"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF67] block">
                Verified Category
              </span>
              <span className="text-sm font-serif font-medium">Presidential Pool Villas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Informational Action Strip */}
      <div className="mt-3.5 bg-white border border-[#E8E2D8] rounded-xs p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2.5 text-xs text-[#52525B]">
          <span className="w-2 h-2 rounded-full bg-[#B8934E]" />
          <span>Independent Property Information • General Enquiries Only</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="#enquiry"
            className="flex-1 sm:flex-initial px-4 py-2 bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF67]" />
            <span>Ask a Question</span>
          </a>
          <a
            href="https://www.anantahotels.com/ananta-hotels-udaipur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2 border border-[#B8934E] text-[#8F6E2E] hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Official Hotel Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
