import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Disclaimer | Udaipur Gateways",
  description:
    "Review the legal disclaimer for Udaipur Gateways, an independent travel discovery platform operated by Nothing Like Travel LLP.",
  openGraph: {
    title: "Disclaimer | Udaipur Gateways",
    description:
      "Review the legal disclaimer for Udaipur Gateways, operated by Nothing Like Travel LLP.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Disclaimer" />
      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: {new Date().toLocaleDateString()}</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">1. Non-Affiliation</h3>
        <p>Udaipur Gateways, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), acts solely as an independent travel and enquiry discovery platform. <strong className="text-[#8F6E2E]">We are not the owner, operator, or official representative of The Ananta Udaipur or any other property listed on this website unless specifically stated.</strong></p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">2. Accuracy of Information</h3>
        <p>While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. Limitation of Liability</h3>
        <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
      </div>
    </div>
  );
}
