"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroText } from "@/components/sections/HeroText";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { AboutSection } from "@/components/sections/AboutSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { DiningSection } from "@/components/sections/DiningSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RoleSection } from "@/components/sections/RoleSection";
import { EnquiryProcess } from "@/components/sections/EnquiryProcess";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GlobalButtonHandler } from "@/components/common/GlobalButtonHandler";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B]" id="home">
      <GlobalButtonHandler />

      <main className="container mx-auto px-4 lg:px-8 py-4 sm:py-6 max-w-7xl">
        {/* Editorial Resort Headline & Category Navigation */}
        <HeroText />

        {/* Hero Section & Desktop Concierge Form Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start relative mb-12 sm:mb-16">
          {/* Left Column: Cinematic Visuals & Specifications */}
          <div className="w-full lg:flex-1 min-w-0">
            <HeroSection />
            <QuickFacts />
          </div>

          {/* Right Column: Sticky Concierge Enquiry Desk (Desktop) */}
          <aside className="hidden lg:block lg:w-[380px] xl:w-[420px] shrink-0">
            <div className="sticky top-28" id="enquiry-desktop">
              <EnquiryForm />
            </div>
          </aside>
        </div>

        {/* Luxury Accommodations & Residences Showcase */}
        <div className="w-full">
          <AccommodationSection />

          {/* Mobile & Tablet In-flow Enquiry Form */}
          <div className="block lg:hidden mb-16 mt-8" id="enquiry">
            <EnquiryForm />
          </div>

          <AmenitiesSection />
          <DiningSection />
          <ExperiencesSection />
          <EnquiryProcess />
          <FaqSection />
          <AboutSection />
          <LocationSection />
          <RoleSection />
          <CtaBanner />
        </div>
      </main>

      {/* Mobile Luxury Quick Call Button */}
      <div className="lg:hidden fixed top-1/2 right-0 -translate-y-1/2 z-40 flex flex-col">
        <a
          href={`tel:${"+91 92790 22649".replace(/\s+/g, "")}`}
          className="flex flex-col bg-[#0D2E24] text-white shadow-lg rounded-l-xs overflow-hidden border border-[#B8934E]/60 border-r-0 hover:-translate-x-1 transition-all group"
          aria-label="Call Concierge"
        >
          <div
            className="flex items-center justify-center py-3.5 px-2 bg-[#0D2E24] text-[#D4AF67] font-mono font-bold text-[11px] tracking-[0.2em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            CALL CONCIERGE
          </div>
          <div className="flex justify-center py-2 px-1.5 bg-[#B8934E] text-white">
            <Phone className="h-3.5 w-3.5 animate-phone-ring" />
          </div>
        </a>
      </div>

      {/* Floating WhatsApp Concierge Widget */}
      <a
        href="https://wa.me/919279022649?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.%0A%0A%F0%9F%93%85%20Check-in%3A%20%0A%F0%9F%93%85%20Check-out%3A%20%0A%F0%9F%91%A5%20Guests%3A%20%0A%F0%9F%8F%A0%20Rooms%3A%20%0A%0ARoom%20Type%3A%20%0A%0APlease%20share%20the%20best%20available%20stay%20options%2C%20pricing%20and%20details%20for%20my%20dates."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full bg-[#0D2E24] text-[#D4AF67] border border-[#B8934E]/60 flex items-center justify-center shadow-xl hover:scale-105 transition-all group"
        aria-label="Chat on WhatsApp with Concierge"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
