import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Udaipur Gateway",
  description:
    "Review the legal disclaimer and non-affiliation notice for Udaipur Gateway, operated by Nothing Like Travel LLP.",
  openGraph: {
    title: "Disclaimer | Udaipur Gateway",
    description:
      "Review the legal disclaimer and non-affiliation notice for Udaipur Gateway, operated by Nothing Like Travel LLP.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl min-h-[60vh]">
      <SectionHeading title="Disclaimer" />
      <div className="max-w-none text-[#52525B] space-y-6 mt-8 leading-relaxed font-light">
        <p className="italic text-[#71717A]">Last updated: November 2026</p>

        <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-6 rounded-xs shadow-xs space-y-4 text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-[#111827]">
            INDEPENDENT WEBSITE / NON-AFFILIATION
          </h3>
          <p>
            Udaipur Gateway is an independently operated information website run by Nothing Like Travel LLP. This website is not owned, operated, sponsored, authorised, endorsed or officially associated with The Ananta Udaipur, its owner, management company or any hotel group.
          </p>
          <p>
            The Ananta Udaipur name is used only to identify the property being described. All property names, logos, trademarks, photographs and other intellectual property belong to their respective owners.
          </p>
          <p>
            Nothing Like Travel LLP does not act as the hotel’s agent or representative. It does not control room inventory, rates, facilities, restaurant operations, service quality or property policies. Property information is for general reference and may change. Visitors must verify current information directly with the property.
          </p>
        </div>

        <h3 className="text-xl font-bold font-serif text-[#111827] mt-8 mb-3">
          Accuracy of Public Information
        </h3>
        <p>
          Property specifications, dimensions, amenities and outlet operations are compiled from publicly available sources and are subject to change without notice by the resort. For verified rates, bookings and reservations, visitors should connect with The Ananta Udaipur directly.
        </p>

        <div className="pt-4">
          <a
            href="https://www.anantahotels.com/ananta-hotels-udaipur/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F6E2E] hover:underline inline-flex items-center gap-1.5 font-medium text-sm"
          >
            <span>Visit The Ananta Udaipur official website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
