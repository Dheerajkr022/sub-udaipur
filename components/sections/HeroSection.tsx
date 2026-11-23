"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar,
  BedDouble,
  User,
  Baby,
  Search,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { accommodations } from "@/components/sections/AccommodationSection";

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "Select date";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return dateStr;
  }
}

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
  const [isAvailabilityPopupOpen, setIsAvailabilityPopupOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleEnquiryNavigation = (e: React.MouseEvent, selectedRoom?: string) => {
    e.preventDefault();
    setIsAvailabilityPopupOpen(false);

    const params = new URLSearchParams(window.location.search);
    if (checkInDate) params.set("checkInDate", checkInDate);
    if (checkOutDate) params.set("checkOutDate", checkOutDate);
    if (selectedRoom) params.set("room", selectedRoom);

    params.set("adults", adults.toString());
    params.set("children", kids.toString());
    params.set("rooms", rooms.toString());

    router.push(`${pathname}?${params.toString()}#enquiry`, { scroll: false });

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-stay", {
          detail: {
            room: selectedRoom,
            checkInDate,
            checkOutDate,
            adults,
            children: kids,
            rooms,
          },
        })
      );
    }

    setTimeout(() => {
      const isDesktop = window.innerWidth >= 1024;
      const targetId = isDesktop ? "enquiry-desktop" : "enquiry";
      const target = document.getElementById(targetId) || document.getElementById("enquiry");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <section id="gallery" className="mb-12 scroll-mt-28 relative">
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
                alt="Premium Wooden Cottage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF67] block">
                  Timber Architecture
                </span>
                <span className="text-sm font-serif font-medium">Wooden Chalet Cottages</span>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-sm relative overflow-hidden group border border-[#E8E2D8] shadow-xs">
              <Image
                src={galleryImages[4]}
                alt="Presidential Suite Pool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF67] block">
                  Private Oasis
                </span>
                <span className="text-sm font-serif font-medium">Presidential Pool Villas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Concierge Dates & Stay Selection Bar */}
        <div className="mt-4 sm:mt-6 w-full bg-white border border-[#E8E2D8] rounded-sm p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8E2D8]/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8934E]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#18181B]">
                Stay Enquiry & Rates Consultation
              </span>
            </div>
            <span className="text-[11px] text-[#71717A] hidden sm:inline">
              Instant assistance via team concierge
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2">
            {/* Check In */}
            <div
              onClick={(e) => {
                try {
                  (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                } catch {}
              }}
              className="relative p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs flex items-center justify-between hover:border-[#B8934E]/60 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0 pointer-events-none">
                <Calendar className="w-4 h-4 text-[#B8934E] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#71717A]">
                    Check-in Date
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#111827] truncate mt-0.5">
                    {formatDisplayDate(checkInDate)}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              <input
                id="widget-checkin"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Check Out */}
            <div
              onClick={(e) => {
                try {
                  (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                } catch {}
              }}
              className="relative p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs flex items-center justify-between hover:border-[#B8934E]/60 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0 pointer-events-none">
                <Calendar className="w-4 h-4 text-[#B8934E] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#71717A]">
                    Check-out Date
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#111827] truncate mt-0.5">
                    {formatDisplayDate(checkOutDate)}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              <input
                id="widget-checkout"
                type="date"
                min={checkInDate || new Date().toISOString().split("T")[0]}
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Guests & Rooms */}
            <div className="relative p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <User className="w-4 h-4 text-[#B8934E] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#71717A]">
                    Rooms & Guests
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#111827] truncate mt-0.5">
                    {rooms} Room, {adults + kids} Guests
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
                <select
                  value={rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value))}
                  className="bg-transparent border border-[#E8E2D8] rounded-xs px-1 text-xs text-[#111827] focus:outline-none"
                  aria-label="Select Rooms"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}R
                    </option>
                  ))}
                </select>
                <select
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="bg-transparent border border-[#E8E2D8] rounded-xs px-1 text-xs text-[#111827] focus:outline-none"
                  aria-label="Select Adults"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}A
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="button"
              onClick={() => setIsAvailabilityPopupOpen(true)}
              className="py-3 px-5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white font-medium text-xs sm:text-[13px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer group"
            >
              <Search className="w-3.5 h-3.5 text-[#D4AF67]" />
              <span>Check Stay Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF67] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-[#71717A] pt-2 border-t border-[#E8E2D8]/40">
            <span>
              Direct Consultation • Instant guidance on villas, seasonal rates & amenities
            </span>
            <a
              href="tel:+919279022649"
              className="text-[#B8934E] hover:underline font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 animate-phone-ring" />
              Call +91 92790 22649
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Suite Availability Selection Modal */}
      {isAvailabilityPopupOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/60 flex items-center justify-center backdrop-blur-xs p-4 sm:p-6"
          onClick={() => setIsAvailabilityPopupOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-sm shadow-2xl p-0 max-w-3xl w-full relative overflow-hidden flex flex-col max-h-[85vh] border border-[#E8E2D8] text-[#18181B]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#E8E2D8] flex items-center justify-between bg-[#0D2E24] text-white">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF67] block mb-1">
                  Availability & Stay Options
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Available Residences at The Ananta Udaipur
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  Found {accommodations.length} luxury accommodation categories for your preferences.
                </p>
              </div>
              <button
                className="p-2 text-white/70 hover:text-white rounded-xs transition-colors"
                onClick={() => setIsAvailabilityPopupOpen(false)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal List */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAF8F5]">
              {accommodations.map((acc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-sm p-4 flex flex-col sm:flex-row gap-4 border border-[#E8E2D8] hover:border-[#B8934E]/60 transition-colors shadow-xs"
                >
                  <div className="relative w-full sm:w-40 h-32 rounded-xs overflow-hidden shrink-0 border border-[#E8E2D8]">
                    <Image
                      src={acc.images[0]}
                      alt={acc.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8934E]">
                          {acc.badge}
                        </span>
                        <span className="text-xs text-[#71717A]">{acc.guests}</span>
                      </div>
                      <h4 className="font-serif font-bold text-[#111827] text-base sm:text-lg">
                        {acc.name}
                      </h4>
                      <p className="text-xs text-[#52525B] mt-1 leading-relaxed">
                        {acc.features}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-3 mt-2 border-t border-[#E8E2D8]/60">
                      <span className="text-xs text-[#71717A] font-medium">{acc.view}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => handleEnquiryNavigation(e, acc.name)}
                          className="px-3.5 py-1.5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Enquire Now
                        </button>
                        <a
                          href="tel:+919279022649"
                          className="px-3 py-1.5 rounded-xs border border-[#B8934E] text-[#8F6E2E] hover:bg-[#B8934E] hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <Phone className="w-3 h-3 animate-phone-ring" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Sticky Bottom */}
            <div className="p-4 sm:p-5 border-t border-[#E8E2D8] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#71717A]">
                Submitting an enquiry connects you with a dedicated travel concierge.
              </span>
              <a
                href="tel:+919279022649"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#B8934E] hover:bg-[#917032] text-white text-xs uppercase tracking-widest font-bold rounded-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 animate-phone-ring" />
                <span>Call +91 92790 22649</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
