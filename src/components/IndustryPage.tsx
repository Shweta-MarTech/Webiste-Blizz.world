import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoForm } from "./DemoForm";

type IconCard = { icon: LucideIcon; title: string; text: string };

export type IndustryPageContent = {
  slug: string;
  breadcrumb: string;
  /** Short label used in GA4 cta_click events, e.g. "Travel" */
  trackLabel: string;
  businessType: string;
  hero: {
    badgeIcon: LucideIcon;
    badge: string;
    titleLead: string;
    titleHighlight: string;
    text: string;
    note: string;
  };
  pipeline: {
    title: string;
    stages: { name: string; leads: string[] }[];
    /** Label shown under leads in the last stage, e.g. "Booked" */
    doneLabel: string;
    nextLabel: string;
  };
  pains: { title: string; items: IconCard[] };
  features: { title: string; text: string; items: IconCard[] };
  comingSoon: { title: string; items: IconCard[] };
  steps: { title: string; text: string; items: [string, string][] };
  story: {
    /** Optional short paragraph explaining how the customer uses Blizz */
    useCase?: string;
    quote: string;
    name: string;
    role: string;
    company: string;
    url: string;
    facts: { label: string; value: string }[];
  };
  pricingTitle?: string;
  faq: { title: string; items: { q: string; a: string }[] };
  demo: { title: string; text: string };
};

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {text && <p className="mt-4 text-slate-500 text-lg">{text}</p>}
    </div>
  );
}

export function IndustryPage({ content: c }: { content: IndustryPageContent }) {
  const pageUrl = `https://www.blizz.world/${c.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: c.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blizz", item: "https://www.blizz.world" },
          { "@type": "ListItem", position: 2, name: c.breadcrumb, item: pageUrl },
        ],
      },
    ],
  };
  const lastStage = c.pipeline.stages.length - 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-[120px]" />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-medium mb-6">
                <c.hero.badgeIcon size={14} />
                {c.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                {c.hero.titleLead}{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  {c.hero.titleHighlight}
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">{c.hero.text}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  data-track="cta_click"
                  data-track-label={`${c.trackLabel}: hero demo`}
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all gap-2 glow-orange"
                >
                  Book a 15-minute demo
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-orange-300 hover:text-orange-600 transition-all"
                >
                  See how setup works
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-400">{c.hero.note}</p>
            </div>

            {/* Example pipeline */}
            <div
              aria-label={`Example ${c.pipeline.title.toLowerCase()} pipeline in Blizz`}
              className="rounded-2xl bg-white border border-slate-100 shadow-xl shadow-orange-500/5 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-slate-900">{c.pipeline.title}</p>
                <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                  2 follow-ups overdue
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {c.pipeline.stages.map((stage, s) => (
                  <div key={stage.name} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold text-slate-500 mb-3">{stage.name}</p>
                    <div className="space-y-2">
                      {stage.leads.map((lead, i) => {
                        const overdue = s === 0 && i === 0;
                        return (
                          <div
                            key={lead}
                            className={`rounded-lg bg-white border p-2.5 text-xs text-slate-700 ${
                              overdue ? "border-red-200" : "border-slate-100"
                            }`}
                          >
                            {lead}
                            <p className="mt-1 text-[10px] text-slate-400">
                              {overdue
                                ? "Follow-up overdue"
                                : s === lastStage
                                  ? c.pipeline.doneLabel
                                  : c.pipeline.nextLabel}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-slate-400 text-center">
                Example pipeline with sample data
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="Sound familiar?" title={c.pains.title} />
            <div className="grid md:grid-cols-3 gap-6">
              {c.pains.items.map((p) => (
                <div key={p.title} className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="What you get today" title={c.features.title} text={c.features.text} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.features.items.map((f) => (
                <div key={f.title} className="rounded-xl border border-slate-100 p-6 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                    <f.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-dashed border-orange-200 bg-orange-50/40 p-6 sm:p-8">
              <p className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                {c.comingSoon.title}
              </p>
              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {c.comingSoon.items.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                      <item.icon size={16} className="text-orange-500" />
                      {item.title}
                    </div>
                    <p className="mt-1.5 text-sm text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Early customers get these first and help shape how they work.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 py-20 px-4 sm:px-6 bg-slate-50/60">
          <div className="max-w-5xl mx-auto">
            <SectionHeading eyebrow="How setup works" title={c.steps.title} text={c.steps.text} />
            <ol className="grid md:grid-cols-3 gap-6">
              {c.steps.items.map(([title, text], i) => (
                <li key={title} className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm">
                  <span className="inline-flex w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white text-sm font-bold items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Customer story */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900 text-white p-8 sm:p-12 grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm font-medium text-orange-400 tracking-widest uppercase">
                Customer story
              </p>
              {c.story.useCase && (
                <p className="mt-4 text-slate-300 leading-relaxed">{c.story.useCase}</p>
              )}
              <blockquote className="mt-4 text-xl sm:text-2xl leading-relaxed font-medium">
                &ldquo;{c.story.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold">{c.story.name}</p>
              <p className="text-sm text-slate-400">
                {c.story.role},{" "}
                <a
                  href={c.story.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-0.5 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  {c.story.company}
                  <ArrowUpRight size={12} />
                </a>
              </p>
            </div>
            <dl className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-6">
              {c.story.facts.map((f) => (
                <div key={f.label} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <dt className="text-sm text-slate-400">{f.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-orange-400">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 bg-orange-50/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Pricing"
              title={c.pricingTitle ?? "What a 10-person team pays in a year"}
              text="Pro plan, 10 users, billed monthly. Prices exclude GST."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Blizz Pro", price: "₹59,880", note: "No setup fee", featured: true },
                { name: "Zoho CRM Standard", price: "₹96,000", note: "₹800/user/month, billed yearly", featured: false },
                { name: "HubSpot Professional", price: "₹10,25,000", note: "+ ₹1,25,000 onboarding", featured: false },
              ].map((p) => (
                <div
                  key={p.name}
                  className={`rounded-xl p-6 text-center ${
                    p.featured
                      ? "bg-gradient-to-b from-orange-500 to-red-500 text-white shadow-xl glow-orange"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  <p className={`text-sm font-medium ${p.featured ? "text-orange-100" : "text-slate-500"}`}>{p.name}</p>
                  <p className="mt-2 text-3xl font-bold">{p.price}</p>
                  <p className={`mt-2 text-xs ${p.featured ? "text-orange-100" : "text-slate-400"}`}>{p.note}</p>
                </div>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
              {["Free for up to 2 users", "₹499 per user per month on Pro", "Cancel anytime"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-sm">
              <Link href="/#pricing" className="text-orange-600 font-medium hover:underline">
                See all plans
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading eyebrow="FAQ" title={c.faq.title} />
            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {c.faq.items.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    {f.q}
                    <span className="text-orange-500 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Demo form */}
        <section id="demo" className="scroll-mt-16 relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{c.demo.title}</h2>
            <p className="mt-4 text-lg text-orange-100">{c.demo.text}</p>
            <DemoForm defaultBusinessType={c.businessType} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
