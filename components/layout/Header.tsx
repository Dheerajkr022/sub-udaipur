"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "919279022649";
const PHONE_NUMBER = "+91 92790 22649";

const homeNavLinks = [
  { label: "About Hotel", href: "/#about" },
  { label: "Residences & Suites", href: "/#rooms" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Overview", href: "/#overview" },
  { label: "Amenities", href: "/#amenities" },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const navLinks = isMainPage ? homeNavLinks : secondaryNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Luxury Concierge Bar */}
      <div className="bg-[#0D2E24] text-[#E8E2D8] text-[11px] sm:text-xs tracking-wider uppercase py-2 px-4 lg:px-8 border-b border-[#185241]/40 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8934E]" />
            <span className="font-medium text-[#D4AF67] tracking-widest">
              The Ananta Udaipur
            </span>
            <span className="text-[#E8E2D8]/40">/</span>
            <span className="text-[#E8E2D8]/80 lowercase first-letter:uppercase">
              Independent luxury travel & discovery guide
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#E8E2D8]/70">Concierge Desk:</span>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-[#D4AF67] transition-colors font-medium tracking-normal"
            >
              <Phone className="w-3 h-3 text-[#B8934E] animate-phone-ring" />
              {PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.%0A%0A%F0%9F%93%85%20Check-in%3A%20%0A%F0%9F%93%85%20Check-out%3A%20%0A%F0%9F%91%A5%20Guests%3A%20%0A%F0%9F%8F%A0%20Rooms%3A%20%0A%0ARoom%20Type%3A%20%0A%0APlease%20share%20the%20best%20available%20stay%20options%2C%20pricing%20and%20details%20for%20my%20dates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D4AF67] hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              WhatsApp Assistance
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D8]"
            : "bg-[#FAF8F5] border-b border-[#E8E2D8]"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-3.5 lg:py-4 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8934E]"
          >
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-sm overflow-hidden shrink-0 border border-[#B8934E]/30 group-hover:border-[#B8934E] transition-colors bg-[#0D2E24] shadow-xs">
              <Image
                src="/logo.png"
                alt="Udaipur Gateways Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-[0.12em] font-serif text-[#111827] leading-none mb-1 group-hover:text-[#B8934E] transition-colors">
                UDAIPUR GATEWAYS
              </span>
              <span className="text-[10px] uppercase text-[#71717A] font-medium tracking-[0.2em]">
                Luxury Travel Discovery
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-wide text-[#3F3F46]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#B8934E] transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B8934E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Callouts */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#enquiry"
              className="px-5 py-2.5 rounded-sm bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-xs flex items-center gap-2 group"
            >
              <span>Enquire Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF67] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0D2E24] hover:bg-[#E8E2D8]/40 rounded-sm focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-50 bg-[#FAF8F5] overflow-y-auto border-t border-[#E8E2D8] flex flex-col justify-between p-6">
          <div className="space-y-6">
            <div className="pb-3 border-b border-[#E8E2D8]">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#B8934E] uppercase">
                Explore Destinations
              </span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-base font-serif text-[#18181B] hover:text-[#B8934E] border-b border-[#E8E2D8]/50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B8934E]">→</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8E2D8] space-y-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-white border border-[#E8E2D8] rounded-sm text-sm font-semibold text-[#111827] shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#B8934E] animate-phone-ring" />
              <span>Call Concierge: {PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%E2%80%99d%20like%20to%20explore%20stay%20options%20at%20The%20Ananta%20Udaipur.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#0D2E24] text-white rounded-sm text-sm font-semibold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
