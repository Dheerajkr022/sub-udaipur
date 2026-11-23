"use client";

import React from "react";
import Image from "next/image";
import { FileEdit, Search, Info, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: FileEdit,
    title: "Send Enquiry",
    description: "Fill in your travel details, guest count and accommodation preferences.",
    image: "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
    href: "#enquiry",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Request",
    description: "Our dedicated concierge team checks current property availability, villa options and seasonal rates.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    href: "#enquiry",
  },
  {
    number: "03",
    icon: Info,
    title: "Get Information & Next Steps",
    description: "Receive tailored stay proposals, inclusions, wellness details and itinerary support to plan your visit.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    href: "#enquiry",
  },
];

export function EnquiryProcess() {
  return (
    <section id="process" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              HOW OUR ENQUIRY PROCESS WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Get Your Stay Information{" "}
            <span className="text-[#B8934E] italic font-serif font-normal">in Simple Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            We make it easy for you to get the information you need for your stay at The Ananta Udaipur.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Begin Enquiry</span>
          <span>→</span>
        </a>
      </div>

      {/* 3 Step Editorial Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E8E2D8] hover:border-[#B8934E]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Step Monogram */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xs bg-[#0D2E24] text-[#D4AF67] font-mono font-bold text-xs flex items-center justify-center border border-[#B8934E]/40 shadow-xs">
                  {step.number}
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-xs bg-white/90 text-[#0D2E24] flex items-center justify-center shadow-xs">
                  <Icon className="w-4 h-4 text-[#B8934E]" />
                </div>
              </div>

              {/* Step Copy */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#52525B] leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E8E2D8]/60 flex items-center justify-between text-xs text-[#8F6E2E] font-medium">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
