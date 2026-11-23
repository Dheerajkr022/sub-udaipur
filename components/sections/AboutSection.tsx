import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mb-20 scroll-mt-32 md:scroll-mt-40 bg-white border border-[#E5E7EB] rounded-3xl p-6 md:p-10 shadow-lg">
      <SectionHeading title="Property Information" />
      <div className="max-w-4xl text-[#4B5563] space-y-6 text-base md:text-lg leading-relaxed">
        <div>
          <p className="mb-4">
            The Ananta Udaipur is a sprawling hillside sanctuary nestled against the scenic backdrop of the Aravalli Hills in Rajasthan&apos;s historic City of Lakes. Designed to harmonize with nature, the retreat features standalone and clustered contemporary villas with expansive balconies, signature open-to-sky showers, and lush landscaped surroundings.
          </p>
          <p className="mb-4">
            This platform is dedicated to providing comprehensive property discovery, room category overviews, resort amenities information, and travel enquiry assistance for independent travellers exploring Udaipur.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-3 mt-8">
            Independent Information & Enquiry Service
          </h3>
          <p className="mb-4">
            Udaipur Gateway is an independent travel discovery and enquiry platform. We provide curated hotel overviews, accommodation details, and local destination insights. We are not the owner, operator, or official representative of The Ananta Udaipur unless specifically stated.
          </p>
          <p className="hidden md:block mb-4 text-sm font-medium text-[#374151] p-5 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#C5A059] border-y border-r border-[#E5E7EB] shadow-sm">
            <strong className="text-[#A38038]">Enquiry Notice:</strong> Submitting an enquiry does not confirm a booking. Availability, seasonal rates, stay inclusions, and final reservations must be confirmed directly with the property.
          </p>
        </div>
      </div>
    </section>
  );
}
