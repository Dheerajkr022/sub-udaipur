import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Udaipur Gateway",
  description:
    "Contact Udaipur Gateway for general property information and enquiry assistance regarding The Ananta Udaipur.",
  openGraph: {
    title: "Contact Us | Udaipur Gateway",
    description:
      "Contact Udaipur Gateway for general property information and enquiry assistance regarding The Ananta Udaipur.",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl min-h-[60vh]">
      <SectionHeading title="Contact Udaipur Gateway" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#111827] mb-4">
            CONTACT UDAIPUR GATEWAY
          </h2>
          <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-5 rounded-xs mb-8 text-[#4B5563] text-sm leading-relaxed">
            <p>
              Have a question about the general property information on this page? Contact Udaipur Gateway. We are an independent information website and cannot check live room availability, provide official hotel rates or make reservations. For bookings and current property details, please contact The Ananta Udaipur through its official channels.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <Phone className="w-5 h-5 animate-phone-ring" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Phone</h4>
                <a href="tel:+919279022649" className="text-[#8F6E2E] hover:underline transition-colors block mt-1 font-semibold text-sm">
                  +91 92790 22649
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Email</h4>
                <a href="mailto:info@udaipurgateway.com" className="text-[#8F6E2E] hover:underline transition-colors block mt-1 text-sm font-medium">
                  info@udaipurgateway.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Company Details</h4>
                <div className="text-[#52525B] mt-1 leading-relaxed text-sm font-light space-y-1">
                  <p>
                    <strong className="text-[#111827] font-medium">Legal Operator:</strong> Nothing Like Travel LLP
                  </p>
                  <p>
                    <strong className="text-[#111827] font-medium">GSTIN:</strong> 09AAZFN6228N1Z7
                  </p>
                  <p>
                    <strong className="text-[#111827] font-medium">Registered Office:</strong> 331 CATANIA, Sector 78, Mahagun Moderne, Noida, Gautambuddha Nagar, Uttar Pradesh 201301
                  </p>
                  <p>
                    <strong className="text-[#111827] font-medium">Service Area:</strong> Udaipur, Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-6 text-center">
            Ask a Question
          </h3>
          <EnquiryForm sourcePage="/contact" />
        </div>
      </div>
    </div>
  );
}
