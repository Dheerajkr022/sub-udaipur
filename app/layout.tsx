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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ananta.udaipurgateway.com"),
  title: {
    default: "The Ananta Udaipur: Independent Property Information | Udaipur Gateway",
    template: "%s | Udaipur Gateway",
  },
  description:
    "Explore independent information about accommodation categories, facilities, dining and nearby attractions at The Ananta Udaipur. For current rates, availability and reservations, contact the property directly.",
  keywords: [
    "The Ananta Udaipur",
    "Udaipur Gateway",
    "Udaipur resort information",
    "Ananta Udaipur villas",
    "Ananta cottages",
    "Udaipur property guide",
    "Nothing Like Travel LLP",
  ],
  authors: [{ name: "Nothing Like Travel LLP" }],
  creator: "Nothing Like Travel LLP",
  publisher: "Nothing Like Travel LLP",
  openGraph: {
    title: "The Ananta Udaipur: Independent Property Information | Udaipur Gateway",
    description:
      "Explore independent information about accommodation categories, facilities, dining and nearby attractions at The Ananta Udaipur. For current rates, availability and reservations, contact the property directly.",
    url: "https://ananta.udaipurgateway.com",
    siteName: "Udaipur Gateway",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ananta Udaipur: Independent Property Information | Udaipur Gateway",
    description:
      "Explore independent information about accommodation categories, facilities, dining and nearby attractions at The Ananta Udaipur. For current rates, availability and reservations, contact the property directly.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ananta.udaipurgateway.com/#organization",
        name: "Udaipur Gateway",
        legalName: "Nothing Like Travel LLP",
        url: "https://ananta.udaipurgateway.com",
        telephone: "+91-92790-22649",
        email: "info@udaipurgateway.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "331 CATANIA, Sector 78, Mahagun Moderne",
          addressLocality: "Noida, Gautambuddha Nagar",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN",
        },
        description: "Independent travel information and enquiry service operated by Nothing Like Travel LLP.",
      },
      {
        "@type": "WebSite",
        "@id": "https://ananta.udaipurgateway.com/#website",
        url: "https://ananta.udaipurgateway.com",
        name: "Udaipur Gateway",
        description: "Independent property information and general enquiries for The Ananta Udaipur.",
        publisher: {
          "@id": "https://ananta.udaipurgateway.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://ananta.udaipurgateway.com/#webpage",
        url: "https://ananta.udaipurgateway.com",
        name: "The Ananta Udaipur: Independent Property Information | Udaipur Gateway",
        isPartOf: {
          "@id": "https://ananta.udaipurgateway.com/#website",
        },
        about: {
          "@type": "Thing",
          name: "The Ananta Udaipur",
          description: "Hillside resort destination located in the Udaipur region of Rajasthan.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#1A202C] selection:bg-[#C5A059]/20 selection:text-[#1A202C]">
        {children}
      </body>
    </html>
  );
}
