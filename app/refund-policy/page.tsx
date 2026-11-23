import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Refund Policy | Udaipur Gateway",
  description:
    "Refund Policy for Udaipur Gateway, operated by Nothing Like Travel LLP. Independent travel information and enquiry assistance service.",
  openGraph: {
    title: "Refund Policy | Udaipur Gateway",
    description:
      "Review the Refund Policy for Udaipur Gateway, operated by Nothing Like Travel LLP.",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Refund Policy" />

      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="text-base text-[#111827] font-medium leading-relaxed">
          Udaipur Gateway is operated by Nothing Like Travel LLP and provides independent travel information, itinerary suggestions, sightseeing guidance and enquiry assistance.
        </p>

        <div className="space-y-6 pt-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              1. Website Enquiries
            </h3>
            <p>
              Submitting a general enquiry through our website does not constitute a booking, purchase or payment transaction. No online payment is collected through the website for submitting an enquiry.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              2. Third-Party Services
            </h3>
            <p>
              Accommodation, transport, sightseeing and other travel services are independently provided by their respective service providers. Any payment, refund, cancellation or rescheduling relating to services purchased directly from a third-party provider is governed by that provider&apos;s terms and conditions. Customers should contact the respective provider directly regarding payment and refund requests.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              3. Courier Information
            </h3>
            <p>
              Courier and parcel services are subject to the terms, charges and refund policies of the respective logistics provider.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              4. Contact
            </h3>
            <div className="p-4 sm:p-5 bg-white border border-[#E8E2D8] rounded-xs space-y-2 text-sm text-[#111827] shadow-xs">
              <p className="m-0 font-medium">Nothing Like Travel LLP (Brand: Udaipur Gateway)</p>
              <p className="m-0">
                Email:{" "}
                <a href="mailto:info@udaipurgateway.com" className="text-[#8F6E2E] hover:underline font-medium">
                  info@udaipurgateway.com
                </a>
              </p>
              <p className="m-0">
                Phone:{" "}
                <a href="tel:+919279022649" className="text-[#8F6E2E] hover:underline font-medium">
                  +91 92790 22649
                </a>
              </p>
              <p className="m-0 text-xs text-[#71717A]">
                Address: Lake Palace Road, Near City Palace Circle, Old City, Udaipur, Rajasthan 313001, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8E2D8] flex flex-wrap gap-4 text-xs font-mono">
          <Link href="/cancellation-policy" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Cancellation Policy →
          </Link>
          <Link href="/terms" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Terms & Conditions →
          </Link>
          <Link href="/privacy" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
