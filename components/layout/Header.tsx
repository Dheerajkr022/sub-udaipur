"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ArrowUpRight, HelpCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919279022649";
const PHONE_NUMBER = "+91 92790 22649";

const homeNavLinks = [
  { label: "About Hotel", href: "/#about" },
  { label: "Residences & Suites", href: "/#rooms" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Overview", href: "/#overview" },
  { label: "Facilities", href: "/#amenities" },
  { label: "Dining", href: "/#dining" },
  { label: "Experiences", href: "/#things-to-do" },
  { label: "Nearby", href: "/#nearby" },
  { label: "Location", href: "/#location" },
];

const secondaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const mobileNavLinks = isMainPage ? homeNavLinks : secondaryNavLinks;

  return (
    <>
      {/* Top Luxury Announcement Bar (Desktop) */}
      <div className="bg-[#0D2E24] text-[#E8E2D8] text-[11px] sm:text-xs tracking-wider uppercase py-2 px-4 lg:px-8 border-b border-[#185241]/40 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8934E]" />
            <span className="font-medium text-[#D4AF67] tracking-widest font-mono text-[11px]">
              The Ananta Udaipur
            </span>
            <span className="text-[#E8E2D8]/40">•</span>
            <span className="text-[#D4AF67] text-[11px] font-medium tracking-normal normal-case">
              INDEPENDENT PROPERTY INFORMATION &nbsp;|&nbsp; GENERAL ENQUIRIES ONLY &nbsp;|&nbsp; NO BOOKINGS OR PAYMENTS ON THIS WEBSITE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#E8E2D8]/60 text-[11px] font-mono">UDAIPUR GATEWAY ENQUIRY DESK:</span>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-[#D4AF67] transition-colors font-medium tracking-normal text-xs"
            >
              <Phone className="w-3 h-3 text-[#B8934E] animate-phone-ring" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <span className="text-[#E8E2D8]/30">|</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20a%20question%20about%20the%20general%20property%20information%20for%20The%20Ananta%20Udaipur%20displayed%20on%20Udaipur%20Gateway.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D4AF67] hover:text-white transition-colors font-medium text-xs normal-case tracking-normal"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Udaipur Gateway</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Announcement Strip (Mobile) */}
      <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] py-1.5 px-3 flex justify-center text-center">
        <span className="text-[10px] sm:text-[11px] font-medium text-[#8F6E2E] tracking-tight leading-snug">
          INDEPENDENT PROPERTY INFORMATION &nbsp;|&nbsp; GENERAL ENQUIRIES ONLY &nbsp;|&nbsp; NO BOOKINGS OR PAYMENTS ON THIS WEBSITE
        </span>
      </div>

      {/* Main Brand & Contact Bar */}
      <header className="bg-white border-b border-[#E8E2D8] relative z-50">
        <div className="container mx-auto px-4 lg:px-8 py-3.5 lg:py-4 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none"
          >
            <div className="relative w-11 h-11 rounded-xs overflow-hidden shrink-0 border border-[#B8934E]/30 group-hover:border-[#B8934E] transition-colors bg-[#0D2E24] shadow-xs">
              <Image
                src="/logo.png"
                alt="Udaipur Gateway Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold tracking-[0.14em] font-serif text-[#111827] leading-none mb-1 group-hover:text-[#B8934E] transition-colors">
                UDAIPUR GATEWAY
              </span>
              <span className="text-[10px] uppercase text-[#71717A] font-mono tracking-[0.2em]">
                Independent Travel Information & Enquiry Service
              </span>
            </div>
          </Link>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8F6E2E]">
                Need General Property Information?
              </span>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-[#111827] font-semibold hover:text-[#B8934E] transition-colors text-sm lg:text-base mt-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8934E] animate-phone-ring" />
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20a%20question%20about%20the%20general%20property%20information%20for%20The%20Ananta%20Udaipur%20displayed%20on%20Udaipur%20Gateway.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xs border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#15803D] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#enquiry"
              className="px-5 py-2.5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-xs flex items-center gap-2 group"
            >
              <span>Ask a Question</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF67] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0D2E24] hover:bg-[#FAF8F5] rounded-xs focus:outline-none transition-colors border border-[#E8E2D8]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-mono uppercase tracking-wider text-[#18181B] hover:text-[#B8934E] py-1.5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E8E2D8] space-y-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="w-full py-2.5 rounded-xs bg-white border border-[#E8E2D8] text-[#111827] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8934E]" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20a%20question%20about%20the%20general%20property%20information%20for%20The%20Ananta%20Udaipur%20displayed%20on%20Udaipur%20Gateway.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xs bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Udaipur Gateway</span>
              </a>

              <a
                href="#enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xs bg-[#0D2E24] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Ask a Question</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
