import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export function RoleSection() {
  return (
    <section className="mb-20 sm:mb-28">
      {/* Section Frame */}
      <div className="bg-white border border-[#E8E2D8] rounded-xs p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#B8934E]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#B8934E] uppercase">
              TRANSPARENCY & NON-AFFILIATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111827] tracking-tight mb-4">
            OUR ROLE & INDEPENDENCE
          </h2>
          <div className="text-sm text-[#52525B] space-y-3 leading-relaxed font-light">
            <p>
              Udaipur Gateway is operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), an independent travel information and enquiry service.
            </p>
            <p className="text-[#8F6E2E] font-medium">
              We are not the owner, operator, or official representative of The Ananta Udaipur or any other property unless specifically stated.
            </p>
          </div>
        </div>

        {/* 2 Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What this website provides */}
          <div className="border border-[#E8E2D8] bg-[#FAF8F5] rounded-xs p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E8E2D8]">
              <span className="w-6 h-6 rounded-xs bg-[#0D2E24] text-[#D4AF67] flex items-center justify-center">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                What this website provides:
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <CheckCircle2 className="h-4 w-4 text-[#B8934E] shrink-0 mt-0.5" />
                <span>General property information based on publicly available sources.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <CheckCircle2 className="h-4 w-4 text-[#B8934E] shrink-0 mt-0.5" />
                <span>General information about accommodation categories, facilities, dining and nearby attractions.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <CheckCircle2 className="h-4 w-4 text-[#B8934E] shrink-0 mt-0.5" />
                <span>A contact form for questions about the information shown on this website.</span>
              </li>
            </ul>
          </div>

          {/* What this website does not provide */}
          <div className="border border-[#E8E2D8] bg-[#FAF8F5] rounded-xs p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#E8E2D8]">
              <span className="w-6 h-6 rounded-xs bg-red-100 text-red-700 flex items-center justify-center">
                <XCircle className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827]">
                What this website does not provide:
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Official hotel representation or an authorised partnership.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Live inventory searches or live rate quotations.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Hotel bookings, reservation confirmation or room holds.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Hotel payment collection, cancellation processing or refunds.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Guaranteed availability, prices, facilities or inclusions.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
