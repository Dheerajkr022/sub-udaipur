"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const homeNavLinks = [
  { label: "ABOUT HOTEL", href: "/#about" },
  { label: "ROOMS & SUITES", href: "/#rooms" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "OVERVIEW", href: "/#overview" },
  { label: "AMENITIES", href: "/#amenities" },
  { label: "DINING", href: "/#dining" },
  { label: "EXPERIENCES", href: "/#things-to-do" },
  { label: "NEARBY", href: "/#nearby" },
  { label: "LOCATION", href: "/#location" },
];

const secondaryNavLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CANCELLATION POLICY", href: "/cancellation-policy" },
  { label: "REFUND POLICY", href: "/refund-policy" },
  { label: "PRIVACY POLICY", href: "/privacy" },
  { label: "TERMS & CONDITIONS", href: "/terms" },
  { label: "DISCLAIMER", href: "/disclaimer" },
  { label: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const navLinks = isMainPage ? homeNavLinks : secondaryNavLinks;
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] text-[#18181B] sticky top-0 z-40 hidden md:block shadow-xs">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          {/* Centered Editorial Navigation Links */}
          <ul className="flex items-center justify-center flex-1 space-x-6 lg:space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
            {navLinks.map((link) => {
              const linkHash = link.href.includes("#") ? `#${link.href.split("#")[1]}` : "";
              const isActive = linkHash && activeHash === linkHash;

              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={`text-xs font-mono tracking-[0.16em] uppercase transition-all relative py-1.5 ${
                      isActive
                        ? "text-[#B8934E] font-bold after:w-full"
                        : "text-[#52525B] hover:text-[#B8934E] font-medium after:w-0 hover:after:w-full"
                    } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#B8934E] after:transition-all`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Compact Sticky Enquire Trigger */}
          <div className="hidden xl:flex items-center pl-4 shrink-0 border-l border-[#E8E2D8]/80">
            <a
              href="#enquiry"
              className="px-3.5 py-1.5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white text-[11px] font-mono uppercase tracking-[0.15em] flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3 h-3 text-[#D4AF67]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Ensure smooth scrolling doesn't hide content behind the sticky header
export const scrollMarginClass = "scroll-mt-32 md:scroll-mt-40";
