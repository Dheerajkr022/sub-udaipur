import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const whatWeDo = [
  "Property information & guidance",
  "Accommodation information",
  "General travel assistance",
  "Local sightseeing information",
  "Enquiry assistance",
  "Connecting travellers with relevant service providers where applicable",
];

const whatWeDontDo = [
  "We are not the property owner or operator.",
  "We do not represent the property officially unless stated.",
  "We do not guarantee room availability.",
  "We do not guarantee fixed prices.",
  "We do not claim the lowest or best price.",
  "We do not make misleading affiliation claims.",
  "We do not take online booking or payment through this information page.",
];

export function RoleSection() {
  return (
    <section className="mb-20 bg-white border border-[#E5E7EB] p-6 md:p-10 rounded-3xl shadow-lg">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-[#111827] mb-4">
          Our Role & Independence
        </h2>
        <div className="text-sm md:text-base text-[#4B5563] space-y-3 leading-relaxed">
          <p>
            Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency.
          </p>
          <p>
            We provide general property information, guidance and enquiry assistance.
          </p>
          <p>
            <strong className="text-[#A38038] font-semibold">We are not the owner, operator or official representative of Aamby Valley City or any other property unless specifically stated.</strong>
          </p>
          <p className="text-xs text-[#6B7280]">
            Property names, trademarks, images and other brand-related intellectual property belong to their respective owners.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border border-[#E5E7EB] bg-[#F8F9FA] shadow-sm h-full rounded-2xl">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg font-bold font-serif text-[#111827] mb-5 flex items-center gap-3">
              <span className="bg-white border border-[#C5A059]/40 p-1.5 rounded-full text-[#C5A059] shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              What We Do
            </h3>
            <ul className="space-y-3">
              {whatWeDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border border-[#E5E7EB] bg-[#F8F9FA] shadow-sm h-full rounded-2xl">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg font-bold font-serif text-[#111827] mb-5 flex items-center gap-3">
              <span className="bg-red-50 border border-red-200 p-1.5 rounded-full text-red-500 shadow-sm">
                <XCircle className="h-5 w-5" />
              </span>
              What We Don&apos;t Do
            </h3>
            <ul className="space-y-3">
              {whatWeDontDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
