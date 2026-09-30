import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LevelUpCRM — The CRM Indian Businesses Actually Finish Setting Up",
  description:
    "WhatsApp-native CRM built for Indian small businesses. Manage leads, automate follow-ups, close deals faster. Free for 2 users.",
  keywords: [
    "CRM for small business India",
    "WhatsApp CRM",
    "travel agency CRM",
    "real estate CRM India",
    "lead management software",
    "LevelUpCRM",
  ],
  openGraph: {
    title: "LevelUpCRM — WhatsApp-Native CRM for Indian Businesses",
    description:
      "Manage leads, automate follow-ups, close deals faster. Built for how Indian teams actually sell.",
    url: "https://levelupcrm.io",
    siteName: "LevelUpCRM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
