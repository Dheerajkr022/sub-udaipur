"use client";

import React, { useState } from "react";
import { Landmark, IndianRupee, Utensils, Calendar, Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    icon: Landmark,
    question: "Is Udaipur Gateways the official Ananta Udaipur website?",
    answer:
      "No. Udaipur Gateways is an independent travel discovery and enquiry support platform. We assist travellers in finding accommodation options, villas, cottages, dining, and wellness retreats at The Ananta Udaipur and exploring the Udaipur region, but we are not the official website or direct representative of the property.",
  },
  {
    icon: IndianRupee,
    question: "How will I receive availability and rates?",
    answer:
      "Once you share your dates and preferences through our enquiry form or call us, our dedicated team will check current availability and share customized stay details, room categories, and applicable inclusions via WhatsApp or email.",
  },
  {
    icon: Utensils,
    question: "Can you help with dining, spa, and Udaipur sightseeing information?",
    answer:
      "Yes! We provide helpful guidance on fine dining outlets (Oasis, Float, Ananta Tara), Mudra Spa wellness therapies, and iconic Udaipur sightseeing including Lake Pichola, City Palace, Fateh Sagar Lake, and Sajjangarh Monsoon Palace.",
  },
  {
    icon: Calendar,
    question: "Is the information on this website always up to date?",
    answer:
      "We strive to keep all resort details, room categories, and amenities updated. However, seasonal rates, operational timings, and venue availability are subject to change at the resort management's discretion.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-20 sm:mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              QUESTIONS & INFORMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Frequently Asked <span className="text-[#B8934E] italic font-serif font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Find answers to common questions about The Ananta Udaipur and our enquiry assistance service.
          </p>
        </div>

        <a
          href="tel:+919279022649"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Ask Concierge Directly</span>
          <span>→</span>
        </a>
      </div>

      {/* Editorial Accordion */}
      <div className="max-w-4xl mx-auto bg-white border border-[#E8E2D8] rounded-xs divide-y divide-[#E8E2D8] shadow-xs">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#E8E2D8] group-hover:border-[#B8934E] flex items-center justify-center text-[#B8934E] shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#B8934E] transition-colors leading-snug">
                    {faq.question}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-xs bg-[#FAF8F5] border border-[#E8E2D8] group-hover:bg-[#0D2E24] group-hover:text-white flex items-center justify-center text-[#111827] shrink-0 transition-all">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#52525B] leading-relaxed border-t border-[#E8E2D8]/60 ml-12 sm:ml-14 font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
