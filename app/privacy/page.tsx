import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Udaipur Gateways",
  description:
    "Review the Privacy Policy for Udaipur Gateways, operated by Nothing Like Travel LLP. Learn how we handle your data and safeguard your privacy.",
  openGraph: {
    title: "Privacy Policy | Udaipur Gateways",
    description:
      "Review the Privacy Policy for Udaipur Gateways, operated by Nothing Like Travel LLP.",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Privacy Policy" />
      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: {new Date().toLocaleDateString()}</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">1. Introduction</h3>
        <p>Welcome to Udaipur Gateways, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7). We respect your privacy and are committed to protecting your personal data.</p>
        <div className="bg-[#FAF8F5] border-l-2 border-[#B8934E] border-y border-r border-[#E8E2D8] p-4 mt-4 text-[#111827] rounded-xs">
          <p className="font-medium m-0 text-xs sm:text-sm">Disclaimer: We are an independent travel discovery platform and not the owner, operator, or official representative of The Ananta Udaipur or any other property unless specifically stated.</p>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">2. Information We Collect</h3>
        <p>We collect information you provide directly to us when you fill out an enquiry form, including your name, email address, phone number, and travel preferences.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. How We Use Your Information</h3>
        <p>We use the information we collect to communicate with you, process your enquiries, provide travel assistance, and improve our services.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">4. Data Sharing</h3>
        <p>We do not sell your personal information. We may share your information with service providers (such as hotels and transport operators) solely for the purpose of fulfilling your travel requests.</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">5. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@udaipurgateways.com" className="text-[#C5A059] font-medium hover:underline">info@udaipurgateways.com</a>.</p>
      </div>
    </div>
  );
}
