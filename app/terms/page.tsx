import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Terms & Conditions | Udaipur Gateway",
  description: "Terms and Conditions for Udaipur Gateway.",
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
        <p>Udaipur Gateway, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), acts as an independent travel discovery and enquiry assistance platform providing information on accommodations, resorts, and activities in Udaipur. We do not own or operate the properties listed on this site.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. Enquiries and Stay Details</h3>
        <p>All stays and options are subject to property availability. Final rates, cancellation terms, and booking confirmations must be completed directly with the respective property.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">4. Limitation of Liability</h3>
        <p>Nothing Like Travel LLP shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of information provided on this platform.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">5. Contact</h3>
        <p>For any queries regarding these terms, please contact us at <a href="mailto:info@udaipurgateway.com" className="text-[#C5A059] font-medium hover:underline">info@udaipurgateway.com</a>.</p>
      </div>
    </div>
  );
}
