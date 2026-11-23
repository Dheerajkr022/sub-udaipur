import React from "react";
import { Phone } from "lucide-react";
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
    <div className="container mx-auto px-4 lg:px-8 py-4" id="home">
      <GlobalButtonHandler />
      <HeroText />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        {/* Left Column: Hero & Content */}
        <div className="w-full lg:flex-1 min-w-0">
          <HeroSection />



          <QuickFacts />
        </div>

        {/* Right Column: Sticky Enquiry Form for Desktop */}
        <div className="hidden lg:block lg:w-[420px] xl:w-[480px] shrink-0">
          <div className="sticky top-24" id="enquiry-desktop">
            <EnquiryForm />
          </div>
        </div>
      </div>

      <div className="mt-16 w-full">
        <AccommodationSection />

        {/* Enquiry form appears below Accommodation on smaller screens */}
        <div className="block lg:hidden mb-16 mt-12" id="enquiry">
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

      {/* Mobile Sticky Contact Buttons (Call Only) */}
      <div className="lg:hidden fixed top-1/2 right-0 -translate-y-1/2 z-40 flex flex-col gap-4">

        {/* Call Button */}
        <a
          href={`tel:${"+91 92790 22649".replace(/\s+/g, "")}`}
          className="flex flex-col bg-[#C5A059] text-white shadow-[-4px_0_20px_0_rgba(0,0,0,0.15)] rounded-l-2xl overflow-hidden border border-[#B38F48] border-r-0 hover:-translate-x-1 transition-all group"
          aria-label="Call Us"
        >
          <div
            className="flex items-center justify-center py-4 px-[11px] bg-[#C5A059] text-white font-bold text-[13px] tracking-wider"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            CALL NOW
          </div>
          <div className="flex justify-center py-3 px-2 bg-[#B38F48]">
            <div className="w-9 h-9 bg-white text-[#C5A059] rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="h-4 w-4 animate-phone-ring text-[#C5A059]" />
            </div>
          </div>
        </a>
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919279022649?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.%0A%0A%F0%9F%93%85%20Check-in%3A%20%0A%F0%9F%93%85%20Check-out%3A%20%0A%F0%9F%91%A5%20Guests%3A%20%0A%F0%9F%8F%A0%20Rooms%3A%20%0A%0ARoom%20Type%3A%20%0A%0APlease%20share%20the%20best%20available%20stay%20options%2C%20pricing%20and%20details%20for%20my%20dates."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
