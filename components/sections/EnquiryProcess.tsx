"use client";

import React from "react";
import Image from "next/image";
import { Compass, HelpCircle, ExternalLink, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Explore Property Information",
    description: "Review general information about accommodation categories, facilities, dining and the Udaipur area.",
    image: "/ananta-photos/Udaipur/Premium Wooden Cottage with Bathtub/Room1_9_51c23ea1.webp",
  },
  {
    number: "02",
    icon: HelpCircle,
    title: "Ask Udaipur Gateway a General Question",
    description: "Send a question about the information shown on this website. Your enquiry is received by Udaipur Gateway only.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp",
  },
  {
    number: "03",
    icon: ExternalLink,
    title: "Contact the Property Directly for Current Details",
    description: "For live availability, rates, reservations, payment, cancellation terms and property services, use The Ananta Udaipur's official website or official contact details.",
    image: "/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp",
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
              USER GUIDANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            HOW TO USE THIS <span className="text-[#B8934E] italic font-serif font-normal">INFORMATION PAGE</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Follow these simple steps to explore property details, send general questions, or contact the property directly.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Ask a Question</span>
          <span>→</span>
        </a>
      </div>

      {/* 3 Step Timeline Cards */}
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

                {/* Step Number Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xs bg-[#0D2E24]/90 backdrop-blur-xs text-[#D4AF67] text-xs font-mono font-bold border border-[#B8934E]/40">
                  {step.number}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#B8934E]">
                    <Icon className="w-4 h-4" />
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-2.5 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
