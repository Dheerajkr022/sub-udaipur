import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  return (
    <nav className="flex items-center text-xs text-[#6B7280] mt-6 mb-4 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
      <ChevronRight className="h-3 w-3 mx-1.5 text-[#C5A059]/50 flex-shrink-0" />
      <Link href="#hotels" className="hover:text-[#C5A059] transition-colors">Hotels & Resorts</Link>
      <ChevronRight className="h-3 w-3 mx-1.5 text-[#C5A059]/50 flex-shrink-0" />
      <span className="text-[#111827] font-medium">Aamby Valley City</span>
    </nav>
  );
}
