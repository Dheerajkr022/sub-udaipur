import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Udaipur Gateway",
  description:
    "Review the Privacy Policy for Udaipur Gateway, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7).",
  openGraph: {
    title: "Privacy Policy | Udaipur Gateway",
    description:
      "Review the Privacy Policy for Udaipur Gateway, operated by Nothing Like Travel LLP.",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Privacy Policy" />
      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: November 2026</p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">1. Introduction</h3>
        <p>
          Welcome to Udaipur Gateway, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7). We respect your privacy and are committed to protecting your personal data.
        </p>
        <div className="bg-[#FAF8F5] border-l-2 border-[#B8934E] border-y border-r border-[#E8E2D8] p-4 mt-4 text-[#111827] rounded-xs">
          <p className="font-medium m-0 text-xs sm:text-sm">
            Independent Notice: Udaipur Gateway is an independent information website and not the owner, operator, or official representative of The Ananta Udaipur.
          </p>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">2. Information We Collect</h3>
        <p>
          When you submit a general question via our enquiry form, we collect the details you provide: your full name, email address, optional phone number, selected question topic, and your message.
        </p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">3. How We Use Your Information</h3>
        <p>
          Information submitted through this website is used solely by Nothing Like Travel LLP to review, manage, and respond to your general information enquiry.
        </p>

        <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-6 rounded-xs shadow-xs space-y-4">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827]">
            DATA SHARING
          </h3>
          <p>
            We do not sell your personal information. Information submitted through this website is used by Nothing Like Travel LLP to receive and respond to your general information enquiry. We may use website hosting, form processing and email service providers to securely receive and manage messages. Access to submitted information is limited to what is necessary to operate the website and respond to your enquiry.
          </p>
          <p>
            We do not routinely forward enquiry details to The Ananta Udaipur or other hotels, resorts or travel providers. If a future feature requires sharing information with a third party, we will explain the purpose and obtain your consent before sharing the information.
          </p>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">4. Data Retention & User Rights</h3>
        <p>
          Submitted enquiry records are retained only for the duration necessary to address your enquiry, typically for up to 180 days, after which they are securely deleted from our communications inbox.
        </p>
        <p>
          You have the right to request access to, rectification of, or deletion of your personal data at any time. To exercise these rights, please email us directly.
        </p>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">5. Contact Us</h3>
        <p>
          If you have questions regarding this Privacy Policy or wish to request data deletion, contact us at{" "}
          <a href="mailto:info@udaipurgateway.com" className="text-[#8F6E2E] font-medium hover:underline">
            info@udaipurgateway.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
