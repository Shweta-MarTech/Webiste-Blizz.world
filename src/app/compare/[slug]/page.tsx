import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Scale } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DemoForm } from "@/components/DemoForm";
import { CHECKED_ON, CHECKED_ON_ISO, competitors, getCompetitor } from "@/data/competitors";
import { socialMeta } from "@/lib/seo";

const SITE = "https://www.blizz.world";

// Only competitors in src/data/competitors.ts get a page; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return {
    title: `${c.seoTitle} | Blizz CRM`,
    description: c.description,
    alternates: { canonical: `/compare/${c.slug}` },
    ...socialMeta({ title: `Blizz vs ${c.name}`, description: c.description, path: `/compare/${c.slug}` }),
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  const url = `${SITE}/compare/${c.slug}`;
  const others = competitors.filter((o) => o.slug !== c.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `Blizz vs ${c.name}`,
        description: c.description,
        dateModified: CHECKED_ON_ISO,
        isPartOf: { "@id": `${SITE}/#website` },
        about: [{ "@id": `${SITE}/#software` }, { "@type": "SoftwareApplication", name: c.name }],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blizz", item: SITE },
          { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE}/compare` },
          { "@type": "ListItem", position: 3, name: `Blizz vs ${c.name}`, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* Hero + TL;DR */}
        <section className="relative pt-28 pb-14 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="relative max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
              <Link href="/compare" className="hover:text-orange-600">Compare</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-slate-600">Blizz vs {c.name}</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-medium mb-6">
              <Scale size={14} />
              Prices and features checked on {CHECKED_ON}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Blizz vs {c.name}
            </h1>
            <div className="mt-8 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">The short answer</p>
              <p className="mt-3 text-lg text-slate-700 leading-relaxed">{c.tldr}</p>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">At a glance</h2>
            <div className="overflow-x-auto rounded-xl bg-white border border-slate-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th scope="col" className="text-left py-3 px-4 font-medium text-slate-400 w-[28%]"><span className="sr-only">Feature</span></th>
                    <th scope="col" className="text-left py-3 px-4 font-semibold text-orange-600">Blizz</th>
                    <th scope="col" className="text-left py-3 px-4 font-semibold text-slate-600">{c.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "" : "bg-orange-50/30"}>
                      <th scope="row" className="text-left py-3 px-4 font-medium text-slate-700 align-top">{row.label}</th>
                      <td className="py-3 px-4 text-slate-900 align-top">{row.blizz}</td>
                      <td className="py-3 px-4 text-slate-600 align-top">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 bg-orange-50/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{c.pricing.title}</h2>
            <div className="overflow-x-auto rounded-xl bg-white border border-slate-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500">
                    <th scope="col" className="text-left py-3 px-4 font-medium">Plan (10 users)</th>
                    <th scope="col" className="text-right py-3 px-4 font-medium">Billed yearly</th>
                    <th scope="col" className="text-right py-3 px-4 font-medium">Billed monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {c.pricing.rows.map((row, i) => (
                    <tr key={row.plan} className={i === 0 ? "bg-orange-50 font-semibold text-slate-900" : "text-slate-600"}>
                      <th scope="row" className="text-left py-3 px-4 font-medium">
                        {row.plan}
                        {row.note && <span className="block text-xs font-normal text-slate-400">{row.note}</span>}
                      </th>
                      <td className="text-right py-3 px-4">{row.yearly}</td>
                      <td className="text-right py-3 px-4">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500">{c.pricing.footnote}</p>
            <p className="mt-2 text-sm text-slate-500">
              Sources, checked {CHECKED_ON}:{" "}
              {c.pricing.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a href={s.url} target="_blank" rel="noopener" className="inline-flex items-center gap-0.5 text-orange-600 hover:underline">
                    {s.label}
                    <ArrowUpRight size={12} />
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Detailed comparison */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {c.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold text-slate-900">{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Who should choose which */}
        <section className="py-16 px-4 sm:px-6 bg-slate-50/60">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Which one should you choose?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: `Choose ${c.short} if`, items: c.chooseThem, featured: false },
                { title: "Choose Blizz if", items: c.chooseBlizz, featured: true },
              ].map((col) => (
                <div
                  key={col.title}
                  className={`rounded-xl p-6 bg-white shadow-sm border ${col.featured ? "border-orange-200" : "border-slate-100"}`}
                >
                  <h3 className={`font-semibold text-lg ${col.featured ? "text-orange-600" : "text-slate-900"}`}>{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-2 text-slate-600">
                        <Check size={18} className={`shrink-0 mt-0.5 ${col.featured ? "text-orange-500" : "text-slate-400"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof + migration */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">Moving from {c.short} to Blizz</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{c.migration}</p>
            <blockquote className="mt-8 rounded-xl bg-slate-900 text-white p-6 sm:p-8">
              <p className="text-lg leading-relaxed">
                &ldquo;We were managing 1,200+ leads across WhatsApp and spreadsheets. Blizz brought everything into one
                dashboard. Our follow-up response time dropped from 2 days to 4 hours.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-slate-400">
                Kashish Sethi, Founder,{" "}
                <a href="https://readymytrip.com/" target="_blank" rel="noopener" className="text-slate-300 hover:text-orange-400">
                  ReadyMyTrip
                </a>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 bg-slate-50/60">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Blizz vs {c.name}: common questions</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {c.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    {f.q}
                    <span className="text-orange-500 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">More comparisons</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/compare/${o.slug}`}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-orange-300 hover:text-orange-600"
                    >
                      Blizz vs {o.name}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/travel-agency-crm"
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-orange-300 hover:text-orange-600"
                  >
                    CRM for travel agencies
                    <ArrowRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="scroll-mt-16 relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">See Blizz with your own leads</h2>
            <p className="mt-4 text-lg text-orange-100">
              Book a 15-minute demo. Send us a few rows from your {c.short} export and we&apos;ll show them in Blizz.
            </p>
            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
