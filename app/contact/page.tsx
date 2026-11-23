import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Udaipur Gateways - Travel Guidance & Stay Enquiries",
  description:
    "Get in touch with Udaipur Gateways for stay enquiries, room details, and independent travel guidance for The Ananta Udaipur and Udaipur attractions. Call +91 92790 22649 or email info@udaipurgateways.com.",
  openGraph: {
    title: "Contact Us | Udaipur Gateways",
    description:
      "Get in touch with Udaipur Gateways for stay enquiries and independent travel guidance in Udaipur.",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl min-h-[60vh]">
      <SectionHeading title="Contact Us" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#111827] mb-6">Get in Touch</h2>
          <p className="text-[#4B5563] mb-10 leading-relaxed text-lg">
            Ready to plan your Udaipur getaway? Reach out to us for stay information on villas, cottages, amenities, and local experiences. Our team is here to assist you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <Phone className="w-5 h-5 animate-phone-ring" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Phone</h4>
                <a href="tel:+919279022649" className="text-[#8F6E2E] hover:underline transition-colors block mt-1 font-semibold text-sm">+91 92790 22649</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Email</h4>
                <p className="text-[#52525B] mt-1 text-sm font-light">info@udaipurgateways.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xs bg-white border border-[#E8E2D8] shadow-xs">
              <div className="bg-[#FAF8F5] p-3 rounded-xs border border-[#E8E2D8] text-[#B8934E]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-base">Company Details</h4>
                <p className="text-[#52525B] mt-1 leading-relaxed text-sm font-light">
                  Nothing Like Travel LLP<br />
                  <span className="font-mono text-[#8F6E2E] font-medium">GSTIN: 09AAZFN6228N1Z7</span><br />
                  Village Bujhda, Tehsil Girwa,<br />
                  Kodiyat Road, Udaipur,<br />
                  Rajasthan 313031
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-[#111827] mb-6 text-center">Send an Enquiry</h3>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
