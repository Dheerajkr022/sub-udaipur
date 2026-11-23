import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071B15] text-[#E8E2D8] pt-14 pb-24 lg:pb-16 border-t border-[#185241]/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#185241]/40">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-3.5 group focus-visible:outline-none rounded-xs"
              >
                <div className="relative w-11 h-11 rounded-xs overflow-hidden shrink-0 border border-[#B8934E]/40 group-hover:border-[#B8934E] transition-colors bg-[#0D2E24]">
                  <Image
                    src="/logo.png"
                    alt="Udaipur Gateways Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-[0.12em] font-serif text-white leading-none mb-1 group-hover:text-[#D4AF67] transition-colors">
                    UDAIPUR GATEWAYS
                  </span>
                  <span className="text-[10px] text-[#D4AF67] font-mono uppercase tracking-[0.2em]">
                    Independent Travel Information & Enquiry Assistance
                  </span>
                </div>
              </Link>

              <p className="text-xs text-[#E8E2D8]/70 leading-relaxed mt-4 max-w-sm font-light">
                An independent travel discovery and enquiry assistance service offering curated insights, accommodation options, and local guides for The Ananta Udaipur and Rajasthan’s lake city.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#185241]/40 text-xs text-[#E8E2D8]/60 space-y-1">
              <p>
                Business: <strong className="text-white">Nothing Like Travel LLP</strong>
              </p>
              <p>
                Brand: <strong className="text-white">Udaipur Gateway</strong>
              </p>
              <p>
                <span className="font-mono text-[#D4AF67]">GSTIN: 09AAZFN6228N1Z7</span>
              </p>
              <p className="text-[#E8E2D8]/50 text-[11px]">
                Service Location: Udaipur, Rajasthan, India
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF67] block mb-4">
              Explore Platform
            </span>
            <ul className="space-y-2 text-xs text-[#E8E2D8]/80">
              <li>
                <Link href="/" className="hover:text-[#D4AF67] transition-colors">
                  Home / Residences
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF67] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-[#D4AF67] transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#D4AF67] transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#D4AF67] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D4AF67] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#D4AF67] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF67] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF67] block mb-4">
              Concierge Contact
            </span>
            <div className="space-y-3.5 text-xs text-[#E8E2D8]/80">
              <a
                href="tel:+919279022649"
                className="flex items-center gap-2.5 hover:text-[#D4AF67] transition-colors"
              >
                <div className="w-7 h-7 rounded-xs bg-[#0D2E24] border border-[#185241] flex items-center justify-center text-[#D4AF67] shrink-0">
                  <Phone className="w-3.5 h-3.5 animate-phone-ring" />
                </div>
                <span>+91 92790 22649</span>
              </a>

              <a
                href="mailto:info@udaipurgateways.com"
                className="flex items-center gap-2.5 hover:text-[#D4AF67] transition-colors"
              >
                <div className="w-7 h-7 rounded-xs bg-[#0D2E24] border border-[#185241] flex items-center justify-center text-[#D4AF67] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>info@udaipurgateways.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-[#E8E2D8]/70 pt-1">
                <div className="w-7 h-7 rounded-xs bg-[#0D2E24] border border-[#185241] flex items-center justify-center text-[#D4AF67] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-relaxed">
                  <span className="text-white block font-medium">Service Destination:</span>
                  <span>Udaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Business Information: Footer Disclosure (Google Ads Compliance) */}
        <div className="py-8 text-xs text-[#E8E2D8]/70 leading-relaxed space-y-2.5 font-light border-b border-[#185241]/40">
          <p className="font-semibold text-[#D4AF67] font-serif text-sm">
            Important Business Information: Footer Disclosure
          </p>
          <p>
            Udaipur Gateway is an independent travel information and enquiry assistance service operated by Nothing Like Travel LLP.
          </p>
          <p>
            We provide general information about Udaipur destinations, sightseeing attractions, holiday itinerary ideas, accommodation options and local travel services.
          </p>
          <p>
            Udaipur Gateway is not owned, operated, sponsored or officially affiliated with any hotel, resort, palace property, transport provider or government tourism authority mentioned on this website.
          </p>
          <p>
            We do not operate an online booking engine or payment checkout facility. Submitting an enquiry does not constitute a confirmed booking or reservation.
          </p>
          <p>
            All accommodation, transport and other travel services are independently provided by their respective service providers. Prices, availability, reservations and applicable terms must be confirmed directly with the relevant provider.
          </p>
          <p>
            All third-party trademarks, logos and property names belong to their respective owners.
          </p>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-[#E8E2D8]/60">
          <p>© {currentYear} Nothing Like Travel LLP. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Independent informational travel and stay discovery platform. Not the official property website.
          </p>
        </div>
      </div>
    </footer>
  );
}
