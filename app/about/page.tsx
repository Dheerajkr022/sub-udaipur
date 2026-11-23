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
          <Image src="/images/about/media_1786862587093.jpg" alt="Aamby Valley Gateway" fill className="object-cover hover:scale-105 transition-transform duration-500" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <Image src="/images/about/media_1786862592696.jpg" alt="Reception Area" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-tr-2xl overflow-hidden">
          <Image src="/images/about/media_1786862598370.jpg" alt="Outdoor View" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <Image src="/images/about/media_1786862605939.jpg" alt="Night View" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
        <div className="hidden md:block relative rounded-br-2xl overflow-hidden">
          <Image src="/images/about/media_1786862611755.jpg" alt="Wooden Cabins" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
          <p>
            Welcome to <strong className="text-[#C5A059]">Lonavala Gateway</strong>, operated by Vidhi Tour & Travel. We are a dedicated travel assistance service specializing in providing seamless experiences for travelers looking to visit the beautiful Lonavala region.
          </p>
          <p>
            Our mission is to help you find the perfect accommodation, whether it&apos;s a cozy room, a luxury suite, or a private cottage surrounded by nature. We provide up-to-date information, pricing, and personalized recommendations to ensure your stay is comfortable and memorable.
          </p>
          <p>
            Through our platform, you can explore various options, view detailed amenities, and easily submit an enquiry. Our experienced travel agents will personally review your requirements and get back to you with the best available options tailored specifically to your needs.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] mt-8 shadow-sm">
            <h3 className="font-bold font-serif text-[#111827] text-xl mb-2">Our Commitment</h3>
            <p className="text-base text-[#6B7280] m-0">
              We strive to provide accurate information and quick responses to all your travel queries. Please note that we are an independent travel agency and not the official representative of the properties listed unless specifically stated.
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
