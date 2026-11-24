import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Udaipur Gateway",
  description:
    "Learn about Udaipur Gateway, an independent travel information and enquiry service operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7).",
  openGraph: {
    title: "About Us | Udaipur Gateway",
    description:
      "Learn about Udaipur Gateway, operated by Nothing Like Travel LLP. Independent information and enquiry assistance for The Ananta Udaipur.",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl min-h-[60vh]">
      <SectionHeading title="About Udaipur Gateway" />

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 mb-16 h-[500px] md:h-[600px] mt-8">
        <div className="md:col-span-2 md:row-span-2 relative rounded-xs overflow-hidden h-full border border-[#E8E2D8]">
          <Image src="/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp" alt="The Ananta Udaipur Hillside Sanctuary" fill className="object-cover hover:scale-105 transition-transform duration-700" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="hidden md:block relative overflow-hidden rounded-xs border border-[#E8E2D8]">
          <Image src="/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp" alt="Balinese Luxury Cottage" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-xs overflow-hidden border border-[#E8E2D8]">
          <Image src="/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp" alt="Resort Dining and Ambience" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-xs overflow-hidden border border-[#E8E2D8]">
          <Image src="/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg" alt="Infinity Pool" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-xs overflow-hidden border border-[#E8E2D8]">
          <Image src="/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg" alt="Ananta Villa Grounds" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 text-[#52525B] text-base leading-relaxed font-light">
          <div className="bg-[#FAF8F5] p-6 rounded-xs border border-[#E8E2D8] shadow-xs space-y-4">
            <h3 className="font-bold font-serif text-[#111827] text-xl mb-2">
              ABOUT UDAIPUR GATEWAY
            </h3>
            <p>
              Udaipur Gateway is an independent travel information and enquiry service operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7).
            </p>
            <p>
              This page provides general information about The Ananta Udaipur, including publicly available accommodation categories, property facilities, dining information and nearby attractions. Visitors may contact Udaipur Gateway with general questions about the information displayed on this page.
            </p>
            <p>
              Udaipur Gateway is not owned, operated, sponsored, authorised or endorsed by The Ananta Udaipur or its owner/operator. We do not act as the property’s agent or representative.
            </p>
            <p>
              We do not check live room availability, obtain live rates, take bookings, confirm reservations, collect accommodation payments or process cancellations. For current property information and all reservations or payments, visitors should contact The Ananta Udaipur directly through its official website or official contact channels.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.anantahotels.com/ananta-hotels-udaipur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8F6E2E] hover:underline inline-flex items-center gap-1.5 font-medium text-sm"
            >
              <span>Visit The Ananta Udaipur official website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-6 text-center">
            Ask Udaipur Gateway a General Question
          </h3>
          <EnquiryForm sourcePage="/about" />
        </div>
      </div>
    </div>
  );
}
