"use client";

import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mb-20 relative">
      {/* Container with Light Card and Clean Accent */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 border border-[#E5E7EB] shadow-lg bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-3xl text-left">
          {/* Gold Accent Dash */}
          <div className="w-12 h-[2px] bg-[#C5A059] mb-4"></div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight leading-tight">
            Plan Your Lonavala Getaway?
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[16px] text-[#4B5563] leading-relaxed mt-3 max-w-xl">
            Get personalised information on stay options, dining, experiences and more. Our team is here to assist you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mt-8">
            {/* Send Enquiry Button */}
            <a
              href="#enquiry"
              className="px-7 py-3.5 sm:py-4 rounded-full bg-[#C5A059] hover:bg-[#B88A3B] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#C5A059]/25 transition-all hover:scale-[1.02] cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Call for Assistance Button */}
            <a
              href="tel:+917042754628"
              className="px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#C5A059] text-[#111827] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-all hover:scale-[1.02] cursor-pointer group"
            >
              <Phone className="w-4 h-4 text-[#C5A059] animate-phone-ring" />
              <span>Call for Assistance</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
