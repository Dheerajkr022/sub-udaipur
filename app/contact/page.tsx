import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Lonavala Gateway",
  description: "Get in touch with Lonavala Gateway by Vidhi Tour & Travel and enquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl min-h-[60vh]">
      <SectionHeading title="Contact Us" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#111827] mb-6">Get in Touch</h2>
          <p className="text-[#4B5563] mb-10 leading-relaxed text-lg">
            Ready to plan your Lonavala getaway? Reach out to us for the best deals on hotels, resorts, villas, and local experiences. Our team is here to assist you 24/7.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#E5E7EB] text-[#C5A059]">
                <Phone className="w-6 h-6 animate-phone-ring" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-lg">Phone</h4>
                <a href="tel:+917042754628" className="text-[#C5A059] hover:text-[#B38F48] transition-colors block mt-1 font-semibold">+91 70427 54628</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#E5E7EB] text-[#C5A059]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-lg">Email</h4>
                <p className="text-[#4B5563] mt-1">info@lonavalagateway.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#E5E7EB] text-[#C5A059]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold font-serif text-[#111827] text-lg">Office Address</h4>
                <p className="text-[#4B5563] mt-1 leading-relaxed">
                  Blue Tulip CHS Ltd,<br />
                  Shop No - 17, Blue Empire Complex, Off Link Road,<br />
                  Mahavir Nagar, Kandiwali W, Mumbai,<br />
                  Mumbai Suburban, Maharashtra 400067
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
