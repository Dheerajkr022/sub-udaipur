import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F3F5F7] text-[#1F2937] pt-10 pb-24 lg:py-14 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-md group">
            <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0 border border-gray-200 group-hover:border-[#C5A059] transition-colors bg-[#0A3626]">
              <Image src="/logo.png" alt="Udaipur Gateway Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider font-serif text-[#111827] leading-none mb-1 group-hover:text-[#C5A059] transition-colors">UDAIPUR GATEWAY</span>
              <span className="text-xs text-[#6B7280] font-medium tracking-wide">Independent travel network partners</span>
            </div>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-[#4B5563]">
            <Link href="/about" className="hover:text-[#C5A059] transition-colors">About Us</Link>
            <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-[#C5A059] transition-colors">Disclaimer</Link>
            <Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-4 text-xs text-[#6B7280] text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm font-medium text-[#111827] mb-2">
            <a href="tel:+917042754628" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C5A059]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91 70427 54628
            </a>
            <span className="hidden md:inline text-gray-300">•</span>
            <a href="mailto:info@udaipurgateway.com" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C5A059]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              info@udaipurgateway.com
            </a>
          </div>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Village Bujhda, Tehsil Girwa, Kodiyat Road, Udaipur, Rajasthan 313031
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full border-t border-gray-200 pt-4 text-[10px] md:text-xs">
            <p>© {currentYear} Udaipur Gateway. All Rights Reserved.</p>
            <p className="text-[#6B7280]">This website is for travel information and enquiry discovery assistance only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
