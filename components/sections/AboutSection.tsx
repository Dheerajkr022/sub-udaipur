import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="mb-20 sm:mb-28 scroll-mt-28 md:scroll-mt-32">
      <div className="bg-white border border-[#E5E7EB] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#111827] tracking-tight">
            Property Information
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] mt-2 mb-6 rounded-full" />

          <div className="text-[#4B5563] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The Ananta Udaipur is a hillside resort destination located in the Udaipur region of Rajasthan, surrounded by scenic Aravalli landscapes. The destination includes different accommodation options, dining experiences and leisure facilities.
            </p>
            <p>
              This page is intended to provide general property information and enquiry assistance to travellers looking for accommodation options and related information in the area.
            </p>

            <h3 className="font-serif font-bold text-base sm:text-lg text-[#111827] pt-2">
              Independent Information & Enquiry Service
            </h3>

            <p>
              Udaipur Gateways is operated by Nothing Like Travel LLP, an independent travel agency. We provide general property information, travel guidance and enquiry assistance. We are not the owner, operator or official representative of The Ananta Udaipur unless specifically stated.
            </p>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-[#FAF8F5] border border-[#E5E7EB] rounded-xl sm:rounded-2xl text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            <strong className="text-[#A38038] font-bold">Enquiry Notice:</strong> Submitting an enquiry does not confirm a booking. Availability, pricing, accommodation options and inclusions are subject to confirmation.
          </div>
        </div>
      </div>
    </section>
  );
}
