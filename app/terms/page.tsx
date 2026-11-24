import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions | Udaipur Gateway",
  description:
    "Read the Terms and Conditions for using Udaipur Gateway, an independent property information website operated by Nothing Like Travel LLP.",
  openGraph: {
    title: "Terms & Conditions | Udaipur Gateway",
    description:
      "Read the Terms and Conditions for using Udaipur Gateway, operated by Nothing Like Travel LLP.",
  },
};

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Terms & Conditions" />
      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: November 2026</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">1. Acceptance of Terms</h3>
        <p>
          By accessing and browsing this website, you agree to be bound by these Terms and Conditions and our Privacy Policy.
        </p>

        <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-6 rounded-xs shadow-xs space-y-4">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827]">
            NATURE OF THIS WEBSITE
          </h3>
          <p>
            This website is an independent property information page operated by Nothing Like Travel LLP under the Udaipur Gateway brand. It provides general information and a way to submit questions about the information displayed.
          </p>
          <p>
            The website does not provide hotel booking, reservation, room availability checking, live rate quotation, payment collection or cancellation/refund processing. Submitting a form does not create a reservation or service contract with The Ananta Udaipur.
          </p>
          <p>
            Property information may change and is provided for general reference. Visitors should verify current room details, facilities, operating hours, rates, availability and terms directly with the property. Any booking or other arrangement is made directly with the property under its own terms.
          </p>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">2. Intellectual Property</h3>
        <p>
          Property names, trademarks, and associated brand identifiers belong to their respective owners. Reference to The Ananta Udaipur is for descriptive and informational identification purposes only.
        </p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. Limitation of Liability</h3>
        <p>
          Nothing Like Travel LLP shall not be liable for any direct, indirect, incidental, or consequential damages resulting from reliance on the informational content provided on this website.
        </p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">4. Contact</h3>
        <p>
          For queries regarding these terms, contact us at{" "}
          <a href="mailto:info@udaipurgateway.com" className="text-[#8F6E2E] font-medium hover:underline">
            info@udaipurgateway.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
