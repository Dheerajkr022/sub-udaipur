import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mb-20 scroll-mt-32 md:scroll-mt-40 bg-white border border-[#E5E7EB] rounded-3xl p-6 md:p-10 shadow-lg">
      <SectionHeading title="Property Information" />
      <div className="max-w-4xl text-[#4B5563] space-y-6 text-base md:text-lg leading-relaxed">
        <div>
          <p className="mb-4">
            Aamby Valley City is a hill city destination located in the Lonavala region of Maharashtra, surrounded by scenic Sahyadri landscapes. The destination includes different accommodation options, dining experiences and leisure facilities.
          </p>
          <p className="mb-4">
            This page is intended to provide general property information and enquiry assistance to travellers looking for accommodation options and related information in the area.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-3 mt-8">
            Independent Information & Enquiry Service
          </h3>
          <p className="mb-4">
            Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency. We provide general property information, travel guidance and enquiry assistance. We are not the owner, operator or official representative of Aamby Valley City unless specifically stated.
          </p>
          <p className="hidden md:block mb-4 text-sm font-medium text-[#374151] p-5 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#C5A059] border-y border-r border-[#E5E7EB] shadow-sm">
            <strong className="text-[#A38038]">Enquiry Notice:</strong> Submitting an enquiry does not confirm a booking. Availability, pricing, accommodation options and inclusions are subject to confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
