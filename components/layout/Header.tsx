"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const WHATSAPP_NUMBER = "917042754628";
const PHONE_NUMBER = "+91 70427 54628";

const homeNavLinks = [
  { label: "About hotel", href: "/#about" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Overview", href: "/#overview" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Nearby", href: "/#nearby" },
  { label: "Location", href: "/#location" },
];

const secondaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Condition", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const mobileNavLinks = isMainPage ? homeNavLinks : secondaryNavLinks;

  return (
    <>
      <header className="hidden md:block bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-[60] md:static">
        <div className="container mx-auto px-4 lg:px-8 py-3.5 md:py-4 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-md">
            <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0 border border-gray-200 group-hover:border-[#C5A059] transition-colors bg-[#0A3626]">
              <Image src="/logo.png" alt="Udaipur Gateway Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider font-serif text-[#111827] leading-none mb-1 group-hover:text-[#C5A059] transition-colors">
                UDAIPUR GATEWAY
              </span>
              <span className="text-xs text-[#6B7280] font-medium tracking-wide">
                Independent travel network partners
              </span>
            </div>
          </Link>

          {/* Desktop Contact Area */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-[#A38038] uppercase tracking-wider mb-1">
                Need Travel Assistance?
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-[#111827] font-semibold hover:text-[#C5A059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-md text-sm"
                >
                  <Phone className="h-4 w-4 text-[#C5A059] animate-phone-ring" />
                  {PHONE_NUMBER}
                </a>
                <Button asChild className="gap-2 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B88A3B] text-white font-bold shadow-md shadow-[#C5A059]/20 border border-[#C5A059]/40">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.%0A%0A%F0%9F%93%85%20Check-in%3A%20%0A%F0%9F%93%85%20Check-out%3A%20%0A%F0%9F%91%A5%20Guests%3A%20%0A%F0%9F%8F%A0%20Rooms%3A%20%0A%0ARoom%20Type%3A%20%0A%0APlease%20share%20the%20best%20available%20stay%20options%2C%20pricing%20and%20details%20for%20my%20dates.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#A38038] hover:bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-[55] bg-white overflow-y-auto border-t border-gray-200">
          <div className="flex flex-col p-5">
            <nav className="flex flex-col space-y-1 mb-8">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[#1F2937] rounded-xl hover:bg-gray-100 hover:text-[#C5A059] border border-transparent transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 p-5 bg-[#FAF8F5] border border-gray-200 rounded-2xl mt-auto shadow-md">
              <span className="text-xs font-bold text-[#A38038] uppercase tracking-wider">
                Need Travel Assistance?
              </span>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-[#111827] font-semibold p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-[#C5A059] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#C5A059]">
                  <Phone className="h-4 w-4 animate-phone-ring" />
                </div>
                {PHONE_NUMBER}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.%0A%0A%F0%9F%93%85%20Check-in%3A%20%0A%F0%9F%93%85%20Check-out%3A%20%0A%F0%9F%91%A5%20Guests%3A%20%0A%F0%9F%8F%A0%20Rooms%3A%20%0A%0ARoom%20Type%3A%20%0A%0APlease%20share%20the%20best%20available%20stay%20options%2C%20pricing%20and%20details%20for%20my%20dates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gradient-to-r from-[#C5A059] to-[#D4AF37] font-bold p-3 rounded-xl shadow-lg hover:from-[#D4AF37] hover:to-[#B88A3B] transition-all justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
