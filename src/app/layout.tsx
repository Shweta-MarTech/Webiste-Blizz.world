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
  title: "WhatsApp CRM for Small Businesses in India & GCC | Blizz",
  description:
    "Blizz is a WhatsApp CRM for small businesses in India and the GCC. Capture every lead, automate follow-ups and track your pipeline. Free for 2 users.",
  keywords: [
    "CRM for small business India",
    "CRM for small business UAE",
    "WhatsApp CRM GCC",
    "WhatsApp CRM",
    "travel agency CRM",
    "real estate CRM India",
    "lead management software",
    "Blizz",
  ],
  openGraph: {
    title: "Blizz — WhatsApp CRM for Small Businesses in India & GCC",
    description:
      "Capture every lead, automate follow-ups and track your sales pipeline in one place. Free for 2 users.",
    url: "/",
    siteName: "Blizz",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blizz — WhatsApp CRM for Small Businesses in India & GCC",
    description:
      "Capture every lead, automate follow-ups and track your sales pipeline in one place. Free for 2 users.",
  },
};

function perUserOffer(name: string, price: string) {
  return {
    "@type": "Offer",
    name,
    price,
    priceCurrency: "USD",
    description: "Per user per month",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "USD",
      unitText: "per user per month",
      billingDuration: "P1M",
    },
  };
}

// Structured data so Google understands Blizz is a software product with plans
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.blizz.world/#organization",
      name: "Blizz",
      url: "https://www.blizz.world",
      logo: "https://www.blizz.world/logo.png",
      email: "hello@blizz.world",
      founder: { "@type": "Person", name: "Shweta Bakshi", jobTitle: "Founder" },
      areaServed: ["IN", "AE", "SA", "QA", "KW", "BH", "OM"],
      // Add sameAs: [LinkedIn, YouTube, ...] once the company profiles exist
    },
    {
      "@type": "WebSite",
      "@id": "https://www.blizz.world/#website",
      name: "Blizz",
      url: "https://www.blizz.world",
      inLanguage: "en-IN",
      publisher: { "@id": "https://www.blizz.world/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.blizz.world/#software",
      name: "Blizz CRM",
      url: "https://www.blizz.world",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "CRM",
      operatingSystem: "Web",
      description:
        "WhatsApp CRM for small businesses in India and the GCC. Capture every lead, automate follow-ups and track your sales pipeline in one place.",
      // Built features only; add WhatsApp API, automations and GST invoices when they ship
      featureList: [
        "Lead management with pipeline stages",
        "Follow-up scheduling with overdue alerts",
        "Lost-lead tracking",
        "Owner dashboard with hot leads and team leaderboard",
        "Teams with role-based access (agent, team leader, admin)",
        "Bulk import of leads from Excel or CSV",
      ],
      publisher: { "@id": "https://www.blizz.world/#organization" },
      offers: [
        { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "USD", description: "Free for 2 users and 500 contacts" },
        perUserOffer("Pro", "7"),
        perUserOffer("Business", "14"),
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
