import React from "react";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const whatWeDo = [
  "Property information & guidance",
  "Accommodation information",
  "General travel assistance",
  "Local sightseeing information",
  "Enquiry assistance",
  "Connecting travellers with relevant service providers where applicable",
];

const whatWeDontDo = [
  "We are not the property owner or operator.",
  "We do not represent the property officially unless stated.",
  "We do not guarantee room availability.",
  "We do not guarantee fixed prices.",
  "We do not claim the lowest or best price.",
  "We do not make misleading affiliation claims.",
  "We do not take online booking or payment through this information page.",
];

export function RoleSection() {
  return (
    <section className="mb-20 sm:mb-28">
      {/* Section Frame */}
      <div className="bg-white border border-[#E8E2D8] rounded-xs p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              GOVERNANCE & TRANSPARENCY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111827] tracking-tight mb-4">
            Our Role & Independence
          </h2>
          <div className="text-sm text-[#52525B] space-y-3 leading-relaxed font-light">
            <p>
              Udaipur Gateways is operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), an independent travel discovery and enquiry service.
            </p>
            <p>
              We provide general property information, guidance and enquiry assistance.
            </p>
            <p className="text-[#8F6E2E] font-medium">
              We are not the owner, operator, or official representative of The Ananta Udaipur or any other property unless specifically stated.
            </p>
            <p className="text-xs text-[#71717A]">
              Property names, trademarks, images and other brand-related intellectual property belong to their respective owners.
            </p>
          </div>
        </div>

        {/* 2 Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What We Do */}
          <div className="border border-[#E8E2D8] bg-[#FAF8F5] rounded-xs p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E8E2D8]">
              <span className="w-6 h-6 rounded-xs bg-[#0D2E24] text-[#D4AF67] flex items-center justify-center">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                What We Do
              </h3>
            </div>
            <ul className="space-y-3">
              {whatWeDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                  <CheckCircle2 className="h-4 w-4 text-[#B8934E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="border border-[#E8E2D8] bg-[#FAF8F5] rounded-xs p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E8E2D8]">
              <span className="w-6 h-6 rounded-xs bg-red-100 text-red-700 flex items-center justify-center">
                <XCircle className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                What We Don&apos;t Do
              </h3>
            </div>
            <ul className="space-y-3">
              {whatWeDontDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
