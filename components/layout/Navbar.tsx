"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { label: "Privacy", href: "/privacy" },
  { label: "Condition", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const navLinks = isMainPage ? homeNavLinks : secondaryNavLinks;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 text-[#1F2937] sticky top-0 z-40 hidden md:block shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="flex items-center justify-center space-x-6 lg:space-x-10 py-3.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-semibold tracking-wider uppercase text-[#4B5563] transition-all hover:text-[#C5A059] focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Ensure smooth scrolling doesn't hide content behind the sticky header
export const scrollMarginClass = "scroll-mt-32 md:scroll-mt-40";
