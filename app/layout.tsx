import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Lonavala Gateway | Hotels, Villas, Tours & Travel Assistance in Lonavala",
  description:
    "Explore hotels, resorts, villas, local tours, camping, cabs and things to do in Lonavala. Get travel information and enquiry assistance from Lonavala Gateway.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#1A202C] selection:bg-[#C5A059]/20 selection:text-[#1A202C]">
        {children}
      </body>
    </html>
  );
}
