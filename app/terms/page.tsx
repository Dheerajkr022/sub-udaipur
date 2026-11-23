import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Terms & Conditions | Lonavala Gateway",
  description: "Terms and Conditions for Lonavala Gateway by Vidhi Tour & Travel.",
};

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Terms & Conditions" />
      <div className="max-w-none text-[#4B5563] space-y-6 mt-8 leading-relaxed">
        <p className="italic text-[#6B7280]">Last updated: {new Date().toLocaleDateString()}</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">1. Acceptance of Terms</h3>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">2. Services</h3>
        <p>Lonavala Gateway acts as an independent travel agency providing information and booking assistance for hotels, resorts, and activities in Lonavala. We do not own or operate the properties listed on this site.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. Bookings Assistance and Payments</h3>
        <p>All Stays are subject to availability. Payment terms, cancellation policies, and refund policies are dictated by the respective service providers (hotels, resorts, etc.) and will be communicated to you during the enquiry and booking process.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">4. Limitation of Liability</h3>
        <p>Vidhi Tour &amp; Travel shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or the services of our partners.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">5. Contact</h3>
        <p>For any queries regarding these terms, please contact us at <a href="mailto:info@lonavalagateway.com" className="text-[#C5A059] font-medium hover:underline">info@lonavalagateway.com</a>.</p>
      </div>
    </div>
  );
}
