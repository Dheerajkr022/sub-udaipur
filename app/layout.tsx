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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://udaipurgateways.com"),
  title: {
    default: "Udaipur Gateways | The Ananta Udaipur - Luxury Resort & Travel Discovery",
    template: "%s | Udaipur Gateways",
  },
  description:
    "Discover The Ananta Udaipur, luxury hillside villas, cottages, amenities, and independent travel guidance for Udaipur, Rajasthan with Udaipur Gateways.",
  keywords: [
    "Udaipur Gateways",
    "The Ananta Udaipur",
    "Udaipur resorts",
    "Udaipur luxury cottages",
    "Udaipur villas",
    "Lake Pichola",
    "Udaipur travel guide",
    "Rajasthan hospitality",
  ],
  authors: [{ name: "Nothing Like Travel LLP" }],
  creator: "Nothing Like Travel LLP",
  publisher: "Nothing Like Travel LLP",
  openGraph: {
    title: "Udaipur Gateways | The Ananta Udaipur - Luxury Resort & Travel Discovery",
    description:
      "Discover The Ananta Udaipur, luxury hillside villas, cottages, amenities, and independent travel guidance for Udaipur, Rajasthan with Udaipur Gateways.",
    url: "https://udaipurgateways.com",
    siteName: "Udaipur Gateways",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaipur Gateways | The Ananta Udaipur - Luxury Resort & Travel Discovery",
    description:
      "Discover The Ananta Udaipur, luxury hillside villas, cottages, amenities, and independent travel guidance for Udaipur, Rajasthan with Udaipur Gateways.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
