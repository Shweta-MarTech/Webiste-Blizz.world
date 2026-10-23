import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CHECKED_ON, competitors } from "@/data/competitors";
import { socialMeta } from "@/lib/seo";

const description =
  "Honest comparisons of Blizz with Zoho CRM, HubSpot and Freshsales for small teams in India and the GCC: prices for 10 users, WhatsApp and setup.";

export const metadata: Metadata = {
  title: "Compare Blizz with Zoho, HubSpot & Freshsales | Blizz CRM",
  description,
  alternates: { canonical: "/compare" },
  ...socialMeta({ title: "Compare Blizz with other CRMs", description, path: "/compare" }),
};

export default function CompareIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Compare Blizz with other CRMs</h1>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Side-by-side comparisons for small sales teams in India and the GCC. We list where each CRM is stronger
            than Blizz as well as where Blizz fits better, and every price links to the vendor&apos;s own pricing page.
            Last checked {CHECKED_ON}.
          </p>
          <ul className="mt-10 space-y-4">
            {competitors.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/compare/${c.slug}`}
                  className="group block rounded-xl border border-slate-100 p-6 hover:border-orange-200 hover:shadow-md transition-all"
                >
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 flex items-center gap-2">
                    Blizz vs {c.name}
                    <ArrowRight size={18} className="text-orange-500" />
                  </h2>
                  <p className="mt-2 text-slate-500 leading-relaxed">{c.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
