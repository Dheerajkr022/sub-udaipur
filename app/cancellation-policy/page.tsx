import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy | Udaipur Gateway",
  description:
    "Cancellation Policy for Udaipur Gateway, operated by Nothing Like Travel LLP. Independent travel information and enquiry assistance service.",
  openGraph: {
    title: "Cancellation Policy | Udaipur Gateway",
    description:
      "Review the Cancellation Policy for Udaipur Gateway, operated by Nothing Like Travel LLP.",
  },
};

export default function CancellationPolicyPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Cancellation Policy" />

      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="text-base text-[#111827] font-medium leading-relaxed">
          Udaipur Gateway is operated by Nothing Like Travel LLP and provides independent travel information, sightseeing guidance, itinerary suggestions and enquiry assistance.
        </p>

        <div className="space-y-6 pt-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              1. General Enquiries
            </h3>
            <p>
              Submitting an enquiry through our website or contacting our team does not create a confirmed booking, reservation or purchase. General travel information and enquiry submissions do not require a booking cancellation.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              2. Third-Party Services
            </h3>
            <p>
              Udaipur Gateway does not process hotel reservations, transport bookings or payments through its website. Customers who independently arrange accommodation, transport, sightseeing activities or other services directly with third-party providers must follow the cancellation and rescheduling policies of those providers.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827] mb-2">
              3. Courier Information
            </h3>
            <p>
              For courier-related enquiries, customers should confirm the applicable service conditions and cancellation terms directly with the selected logistics provider.
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
                Service Location: Udaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8E2D8] flex flex-wrap gap-4 text-xs font-mono">
          <Link href="/terms" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Terms & Conditions →
          </Link>
          <Link href="/refund-policy" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Refund Policy →
          </Link>
          <Link href="/privacy" className="text-[#8F6E2E] hover:underline uppercase tracking-wider">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
