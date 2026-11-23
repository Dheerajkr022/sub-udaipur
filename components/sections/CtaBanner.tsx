"use client";

import React from "react";
import { Mail, Phone, ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mb-20 sm:mb-28 relative">
      <div className="relative rounded-xs overflow-hidden p-8 sm:p-14 md:p-16 bg-[#0D2E24] text-white border border-[#185241] shadow-lg">
        {/* Subtle Watermark Monogram */}
        <div className="absolute right-6 -bottom-8 text-8xl md:text-9xl font-serif font-black text-white/[0.03] select-none pointer-events-none">
          ANANTA
        </div>

        <div className="relative z-10 max-w-3xl text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF67]" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4AF67] flex items-center gap-1.5">
              <Sparkles className="w-2.5 h-2.5" />
              BESPOKE TRAVEL ASSISTANCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Plan Your <span className="text-[#D4AF67] italic font-serif font-normal">Udaipur Getaway?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-4 max-w-xl font-light">
            Get personalised information on stay options, dining, experiences and more. Our team is here to assist you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 pt-2">
            {/* Send Enquiry Button */}
            <a
              href="#enquiry"
              className="px-7 py-3.5 sm:py-4 rounded-xs bg-[#B8934E] hover:bg-[#917032] text-white font-medium text-xs sm:text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Call for Assistance Button */}
            <a
              href="tel:+919279022649"
              className="px-7 py-3.5 sm:py-4 rounded-xs bg-white/10 hover:bg-white hover:text-[#0D2E24] border border-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 transition-all cursor-pointer group backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-[#D4AF67] group-hover:text-[#0D2E24] animate-phone-ring" />
              <span>Call +91 92790 22649</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF67] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
