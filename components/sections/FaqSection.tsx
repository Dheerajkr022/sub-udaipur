"use client";

import React, { useState } from "react";
import { Landmark, IndianRupee, Utensils, Calendar, Plus, Minus } from "lucide-react";

const faqs = [
  {
    icon: Landmark,
    question: "Is Lonavala Gateway the official Aamby Valley website?",
    answer:
      "No. Lonavala Gateway is an independent travel assistance and enquiry support service operated by Vidhi Tour & Travel. We assist travellers in finding the best accommodation options, villas, dining, and recreational activities at Aamby Valley City, but we are not the official website or direct representative of the property.",
  },
  {
    icon: IndianRupee,
    question: "How will I receive availability and rates?",
    answer:
      "Once you share your dates and preferences through our enquiry form or call us, our dedicated team will check real-time availability and share customized stay packages, room rates, and applicable inclusions via WhatsApp or email.",
  },
  {
    icon: Utensils,
    question: "Can you help with dining, activities and other information?",
    answer:
      "Absolutely! We provide complete concierge guidance on world-class dining outlets, water sports, 18-hole golf sessions, spa treatments, adventure park rides, and surrounding Lonavala sightseeing.",
  },
  {
    icon: Calendar,
    question: "Is the information on this website always up to date?",
    answer:
      "We strive to keep all resort details, room categories, and amenities updated. However, seasonal rates, operational timings, and venue availability are subject to change at the resort management's discretion.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-24 scroll-mt-28">
      {/* Light Luxury Card */}
      <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden text-[#111827]">
        {/* Subtle Watermark */}
        <div className="absolute top-4 right-6 sm:top-6 sm:right-10 text-7xl sm:text-9xl font-serif font-black text-[#C5A059]/[0.05] select-none pointer-events-none">
          FAQ
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
              Frequently Asked Questions <span className="text-[#C5A059] font-serif">──</span>
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#6B7280] leading-relaxed mt-2.5 max-w-xl">
              Find answers to common questions about Aamby Valley City and our enquiry assistance service.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const Icon = faq.icon;
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#C5A059]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Icon Badge */}
                      <div className="w-10 h-10 rounded-full bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 group-hover:bg-[#C5A059]/10 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[14px] sm:text-[16px] font-semibold text-[#111827] group-hover:text-[#C5A059] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#C5A059] shrink-0 group-hover:bg-[#C5A059] group-hover:text-white transition-all shadow-sm">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed border-t border-gray-200 ml-13 sm:ml-14">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
