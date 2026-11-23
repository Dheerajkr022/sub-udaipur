"use client";

import React from "react";
import Image from "next/image";
import { FileEdit, Search, Info } from "lucide-react";

const processSteps = [
  {
    number: "1",
    icon: FileEdit,
    title: "Send Enquiry",
    description: "Fill in your travel details and submit your enquiry.",
    image: "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
    href: "#enquiry",
  },
  {
    number: "2",
    icon: Search,
    title: "We Review Your Request",
    description: "Our team will check availability and share relevant information.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
    href: "#enquiry",
  },
  {
    number: "3",
    icon: Info,
    title: "Get Information & Next Steps",
    description: "Receive stay options, amenities, rates and details to help you plan your visit.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
    href: "#enquiry",
  },
];

export function EnquiryProcess() {
  return (
    <section id="process" className="mb-24 scroll-mt-28 relative">
      {/* Background Container */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow & Header */}
          <div className="mb-8 md:mb-10 text-left">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                HOW OUR ENQUIRY PROCESS WORKS
              </span>
              <span className="w-8 h-[1px] bg-[#C5A059]/60"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              Get Your Stay Information{" "}
              <span className="text-[#C5A059] italic font-serif">in Simple Steps</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              We make it easy for you to get the information you need for your stay at The Ananta Udaipur.
            </p>
          </div>

          {/* Steps Flow with Connecting Line */}
          <div className="space-y-4 sm:space-y-5">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex items-center gap-3 sm:gap-5">
                  {/* Step Number Circle */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C5A059] text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-md shrink-0">
                      {step.number}
                    </div>
                    {/* Vertical connecting line */}
                    {idx < processSteps.length - 1 && (
                      <div className="w-[1px] h-6 sm:h-8 border-l border-dashed border-[#C5A059]/50 my-1" />
                    )}
                  </div>

                  {/* Step Card */}
                  <div
                    className="flex-1 bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#C5A059]/60 rounded-2xl p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    {/* Icon & Texts */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#C5A059]/40 bg-white flex items-center justify-center text-[#C5A059] shrink-0 shadow-sm group-hover:bg-[#C5A059]/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#111827] group-hover:text-[#C5A059] transition-colors truncate">
                          {step.title}
                        </h3>
                        <p className="text-[11px] sm:text-[13px] text-[#4B5563] leading-snug mt-0.5 line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Thumbnail */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="relative w-16 sm:w-28 h-12 sm:h-16 rounded-xl overflow-hidden border border-gray-200 shadow-sm hidden xs:block">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 64px, 112px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
