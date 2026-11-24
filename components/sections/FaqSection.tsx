"use client";

import React, { useState } from "react";
import { Landmark, HelpCircle, FileText, ExternalLink, Calendar, ChevronDown } from "lucide-react";

const faqs = [
  {
    icon: Landmark,
    question: "Is this the official website of The Ananta Udaipur?",
    answer:
      "No. This is an independent information page operated by Udaipur Gateway / Nothing Like Travel LLP. It is not owned, operated, sponsored or endorsed by The Ananta Udaipur.",
  },
  {
    icon: HelpCircle,
    question: "Can Udaipur Gateway check current room availability or rates?",
    answer:
      "No. We do not access live room inventory or provide live property quotes. Please contact The Ananta Udaipur directly for current information.",
  },
  {
    icon: FileText,
    question: "Does submitting this form reserve a room?",
    answer:
      "No. The form only sends a general information question to Udaipur Gateway. It does not create or confirm a booking.",
  },
  {
    icon: ExternalLink,
    question: "How can I make a reservation?",
    answer:
      "Contact The Ananta Udaipur through its official website or official contact channels.",
  },
  {
    icon: Calendar,
    question: "Are property facilities, restaurant timings and inclusions guaranteed?",
    answer:
      "No. Information may change. Please confirm current facilities, access, timings, charges and inclusions directly with the property.",
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
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111827] tracking-tight">
            Frequently Asked <span className="text-[#B8934E] italic font-serif font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mt-2.5 max-w-xl font-light">
            Answers to common questions regarding this independent information page and our enquiry service.
          </p>
        </div>

        <a
          href="#enquiry"
          className="text-xs font-mono uppercase tracking-widest text-[#B8934E] hover:text-[#0D2E24] font-semibold flex items-center gap-1.5 self-start md:self-end"
        >
          <span>Contact Udaipur Gateway</span>
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

                <div className="w-6 h-6 rounded-xs bg-[#FAF8F5] flex items-center justify-center text-[#71717A] group-hover:text-[#111827] shrink-0 transition-transform">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#B8934E]" : ""
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-[#52525B] leading-relaxed font-light border-t border-[#E8E2D8]/40 bg-[#FAF8F5]/50">
                  <p className="mt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
