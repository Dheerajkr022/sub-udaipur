"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { X, ChevronLeft, ChevronRight, ChevronDown, Calendar, BedDouble, User, Baby, Search, ArrowRight, Phone } from "lucide-react";
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
  "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
  "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0189-HDR-Edit_kbubnr.webp",
  "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
  "/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg",
  "/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp",
  "/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg",
  "/ananta-photos/Udaipur/Chairman Villa/Ananta_Udaipur_Fotowalah-36_ucdcjn.webp",
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
    }, 4000);
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
      <section id="gallery" className="mb-12 scroll-mt-32 md:scroll-mt-40">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 h-[400px] md:h-[500px]">
          <div
            className="md:col-span-2 bg-gray-100 rounded-2xl md:rounded-l-3xl md:rounded-r-none relative overflow-hidden h-full group border border-gray-200 shadow-md"
          >
            <Image src={sliderImages[currentSlide] || sliderImages[0]} alt="The Ananta Udaipur" fill className="object-cover transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 66vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Slider Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 p-2 md:p-3 rounded-full text-[#111827] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm shadow-md">
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 p-2 md:p-3 rounded-full text-[#111827] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm shadow-md">
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#C5A059]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2 md:gap-3 md:col-span-1 h-full">
            <div
              className="bg-gray-100 rounded-tr-3xl relative overflow-hidden group border border-gray-200 shadow-sm"
            >
              <Image src={galleryImages[1]} alt="Gallery Image" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 0vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div
              className="bg-gray-100 rounded-br-3xl relative overflow-hidden group border border-gray-200 shadow-sm"
            >
              <Image src={galleryImages[2]} alt="View All Photos" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 0vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Booking Widget Overlay */}
        <div className="relative -mt-8 sm:-mt-12 md:-mt-16 z-20 mx-auto w-full max-w-xl bg-white/95 backdrop-blur-xl rounded-3xl p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E5E7EB] space-y-3">
          {/* Row 1: Check-in & Check-out */}
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl grid grid-cols-2 divide-x divide-[#E5E7EB] overflow-hidden">
            {/* Check In */}
            <div
              onClick={(e) => {
                try {
                  (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                } catch {}
              }}
              className="relative p-3 sm:p-3.5 flex items-center justify-between hover:bg-gray-100/70 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0 pointer-events-none">
                <Calendar className="w-5 h-5 text-[#C5A059] shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 leading-tight">Check-in</div>
                  <div className="text-[13px] sm:text-[14px] font-medium text-[#111827] truncate mt-0.5">
                    {formatDisplayDate(checkInDate)}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 pointer-events-none ml-1" />
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
              className="relative p-3 sm:p-3.5 flex items-center justify-between hover:bg-gray-100/70 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0 pointer-events-none">
                <Calendar className="w-5 h-5 text-[#C5A059] shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 leading-tight">Check-out</div>
                  <div className="text-[13px] sm:text-[14px] font-medium text-[#111827] truncate mt-0.5">
                    {formatDisplayDate(checkOutDate)}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 pointer-events-none ml-1" />
              <input
                id="widget-checkout"
                type="date"
                min={checkInDate || new Date().toISOString().split("T")[0]}
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Row 2: Rooms, Adults, Kids */}
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl grid grid-cols-3 divide-x divide-[#E5E7EB] overflow-hidden">
            {/* Rooms */}
            <div className="relative p-2.5 sm:p-3 flex items-center justify-between hover:bg-gray-100/70 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                <BedDouble className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 leading-tight">Rooms</div>
                  <div className="text-[13px] sm:text-[14px] font-medium text-[#111827] truncate mt-0.5">{rooms}</div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              <select
                id="widget-rooms"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white text-[#111827]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n} className="bg-white text-[#111827]">{n}</option>
                ))}
              </select>
            </div>

            {/* Adults */}
            <div className="relative p-2.5 sm:p-3 flex items-center justify-between hover:bg-gray-100/70 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 leading-tight">Adults</div>
                  <div className="text-[13px] sm:text-[14px] font-medium text-[#111827] truncate mt-0.5">{adults}</div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              <select
                id="widget-adults"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white text-[#111827]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n} className="bg-white text-[#111827]">{n}</option>
                ))}
              </select>
            </div>

            {/* Kids */}
            <div className="relative p-2.5 sm:p-3 flex items-center justify-between hover:bg-gray-100/70 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                <Baby className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 transition-colors" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 leading-tight">Kids</div>
                  <div className="text-[13px] sm:text-[14px] font-medium text-[#111827] truncate mt-0.5">{kids}</div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              <select
                id="widget-kids"
                value={kids}
                onChange={(e) => setKids(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white text-[#111827]"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n} className="bg-white text-[#111827]">{n}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Action Button */}
          <button
            type="button"
            className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] hover:from-[#D4AF37] hover:to-[#B88A3B] text-white font-bold text-[14px] sm:text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/25 transition-all cursor-pointer group"
            onClick={() => setIsAvailabilityPopupOpen(true)}
          >
            <Search className="w-4 h-4 text-white" />
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Row 4: Footnote Disclaimer */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-[12px] text-gray-500 pt-1 text-center">
            <span className="w-4 h-4 rounded-full bg-[#C5A059] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
              i
            </span>
            <span>Request only. Our team will share availability, pricing and stay details.</span>
          </div>
        </div>
      </section>

      {/* Availability Popup */}
      {isAvailabilityPopupOpen && (
        <div className="fixed inset-0 z-[110] bg-black/50 flex items-center justify-center backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200" onClick={() => setIsAvailabilityPopupOpen(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl p-0 max-w-2xl w-full relative animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh] border border-[#E5E7EB] text-[#1A202C]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between sticky top-0 bg-[#F8F9FA] z-10 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-[#C5A059]/40 rounded-full flex items-center justify-center text-[#C5A059]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#111827]">Great news!</h3>
                  <p className="text-sm text-gray-500">We found <strong className="text-[#A38038]">{accommodations.length} properties</strong> for your dates.</p>
                </div>
              </div>
              <button
                className="p-2 text-gray-400 hover:text-[#111827] hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsAvailabilityPopupOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 md:p-6 bg-white flex-grow">
              <div className="grid gap-4">
                {accommodations.map((acc, idx) => (
                  <div key={idx} className="bg-[#F8F9FA] rounded-xl p-3 flex gap-4 border border-[#E5E7EB] shadow-sm hover:border-[#C5A059]/50 transition-colors">
                    <div className="relative w-24 h-24 md:w-32 md:h-28 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                      <Image src={acc.images[0]} alt={acc.name} fill className="object-cover" sizes="(max-width: 768px) 96px, 128px" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow py-1">
                      <div>
                        <h4 className="font-bold font-serif text-[#111827] text-sm md:text-base">{acc.name}</h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2 md:line-clamp-none">{acc.features.split(" • ").slice(0, 3).join(" • ")}</p>
                      </div>
                      <div className="flex items-end justify-end mt-2">
                        <a
                          href="tel:+919279022649"
                          className="bg-[#C5A059] hover:bg-[#B88A3B] text-white font-bold h-8 px-3 md:px-4 text-xs shadow-sm cursor-pointer rounded-full flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 animate-phone-ring shrink-0" />
                          <span>Request Stay Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-6 border-t border-[#E5E7EB] bg-[#F8F9FA] sticky bottom-0 z-10">
              <a
                href="tel:+919279022649"
                className="w-full h-12 text-base font-bold bg-[#C5A059] hover:bg-[#B88A3B] text-white shadow-lg shadow-[#C5A059]/20 tracking-wider flex items-center justify-center gap-2 rounded-full transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 animate-phone-ring shrink-0" />
                <span>Call to Request Stay Details</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox / Gallery Modal Removed */}
    </>
  );
}
