import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blizz.world"),
  alternates: { canonical: "/" },
  title: "Blizz — The CRM Small Businesses Finish Setting Up Fast",
  description:
    "WhatsApp-native CRM built for Indian small businesses. Manage leads, automate follow-ups, close deals faster. Free for 2 users.",
  keywords: [
    "CRM for small business India",
    "WhatsApp CRM",
    "travel agency CRM",
    "real estate CRM India",
    "lead management software",
    "Blizz",
  ],
  openGraph: {
    title: "Blizz — WhatsApp-Native CRM for Indian Businesses",
    description:
      "Manage leads, automate follow-ups, close deals faster. Built for how Indian teams actually sell.",
    url: "/",
    siteName: "Blizz",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blizz — WhatsApp-Native CRM for Indian Businesses",
    description:
      "Manage leads, automate follow-ups, close deals faster. Free for 2 users.",
  },
};

// Structured data so Google understands Blizz is a software product with plans
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.blizz.world/#organization",
      name: "Blizz",
      url: "https://www.blizz.world",
      email: "hello@blizz.world",
      areaServed: "IN",
    },
    {
      "@type": "SoftwareApplication",
      name: "Blizz CRM",
      url: "https://www.blizz.world",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "CRM",
      operatingSystem: "Web",
      description:
        "WhatsApp-native CRM for Indian small businesses. Manage leads, automate follow-ups and close deals faster.",
      publisher: { "@id": "https://www.blizz.world/#organization" },
      offers: [
        { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "INR" },
        { "@type": "Offer", name: "Pro", price: "499", priceCurrency: "INR", description: "Per user per month" },
        { "@type": "Offer", name: "Business", price: "999", priceCurrency: "INR", description: "Per user per month" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
