import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl min-h-[60vh]">
      <SectionHeading title="About Us" />

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-16 h-[500px] md:h-[600px] mt-8">
        <div className="md:col-span-2 md:row-span-2 relative rounded-xl md:rounded-l-2xl md:rounded-r-none overflow-hidden h-full">
          <Image src="/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z.webp" alt="The Ananta Udaipur Hillside Sanctuary" fill className="object-cover hover:scale-105 transition-transform duration-500" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <Image src="/ananta-photos/Udaipur/Luxury Cottage/Ananta_Udaipur_Fotowalah-25_ulgb9q.webp" alt="Balinese Luxury Cottage" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-tr-2xl overflow-hidden">
          <Image src="/ananta-photos-2/Udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0249-HDR_rudspd.webp" alt="Resort Dining and Ambience" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <Image src="/ananta-photos/Udaipur/Presidential Villa/Presidential_suite_pool_at_ananta_udaipur_suites_in_Udaipur_i2ocjh_dvi4lj.jpg" alt="Infinity Pool" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-br-2xl overflow-hidden">
          <Image src="/ananta-photos/Udaipur/Ananta Villa/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0315-HDR-Edit_hi2yh2.jpg" alt="Ananta Villa Grounds" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
          <p>
            Welcome to <strong className="text-[#C5A059]">Udaipur Gateway</strong>, operated by <strong className="text-[#111827]">Nothing Like Travel LLP</strong> (GSTIN: 09AAZFN6228N1Z7). We are an independent travel discovery and enquiry support platform dedicated to showcasing premier hospitality options across Udaipur, Rajasthan.
          </p>
          <p>
            Our mission is to help independent travellers discover the ideal hillside retreat, contemporary villa, or luxury cottage nestled in the picturesque Aravalli range. We provide transparent information on accommodation categories, property facilities, dining outlets, and scenic Udaipur attractions.
          </p>
          <p>
            Through our platform, you can explore various options, view detailed amenities, and easily submit an enquiry. Our dedicated team will review your travel preferences and share personalized stay recommendations and availability details.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] mt-8 shadow-sm">
            <h3 className="font-bold font-serif text-[#111827] text-xl mb-2">Our Commitment</h3>
            <p className="text-base text-[#6B7280] m-0">
              We strive to provide accurate information and quick responses to all your travel queries. Please note that we are an independent travel discovery platform and not the owner, operator, or official representative of The Ananta Udaipur unless specifically stated.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-6 text-center">Plan Your Trip With Us</h3>
          <EnquiryForm sourcePage="/about" />
        </div>
      </div>
    </div>
  );
}
