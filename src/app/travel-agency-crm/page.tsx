import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Check,
  FileSpreadsheet,
  FileText,
  KanbanSquare,
  Map,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Users,
  UserX,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DemoForm } from "@/components/DemoForm";

const PAGE_URL = "https://www.blizz.world/travel-agency-crm";

export const metadata: Metadata = {
  title: "Travel Agency CRM for India — Never Miss a Follow-up | Blizz",
  description:
    "Blizz is a CRM built with a real Indian travel agency. Put every trip enquiry in one pipeline, assign it to an agent and get alerts for overdue follow-ups. Free for 2 users.",
  alternates: { canonical: "/travel-agency-crm" },
  openGraph: {
    title: "Blizz — The travel agency CRM built with a real travel agency",
    description:
      "Every trip enquiry in one pipeline, assigned and followed up on time. Free for 2 users.",
    url: "/travel-agency-crm",
  },
};

const pains = [
  {
    icon: MessageCircle,
    title: "Enquiries live in personal WhatsApp",
    text: "A family asks about a Kerala package on one agent's phone, a corporate group on another's. When an agent is on leave or quits, those enquiries go with them.",
  },
  {
    icon: AlarmClock,
    title: "Follow-ups depend on memory",
    text: "The customer said “call me after Diwali”. Nobody wrote it down. By the time someone remembers, they've booked with another agency.",
  },
  {
    icon: UserX,
    title: "You hear about lost bookings too late",
    text: "How many enquiries came in this week? Who quoted, who didn't? Without one view of the pipeline, you find out at month end.",
  },
];

const features = [
  {
    icon: KanbanSquare,
    title: "A pipeline shaped like a travel sale",
    text: "Every enquiry moves through stages your agents already use, from new enquiry to quoted to confirmed, so you see where each trip stands.",
  },
  {
    icon: CalendarClock,
    title: "Follow-up dates and overdue alerts",
    text: "Each lead gets a next follow-up date. When one is missed, it shows up as overdue for the agent and their team leader.",
  },
  {
    icon: BarChart3,
    title: "A morning dashboard for the owner",
    text: "New leads, hot leads, overdue follow-ups, booking revenue and the agent leaderboard, all on one screen with the live IST time.",
  },
  {
    icon: Users,
    title: "Agents, teams and team leaders",
    text: "Assign enquiries to agents, group them into teams and see each agent's numbers. Team leaders manage their own team.",
  },
  {
    icon: ShieldCheck,
    title: "Each agent sees only their own leads",
    text: "Agents see their leads, team leaders see their team, owners see everything. Customer lists stay with the agency when someone leaves.",
  },
  {
    icon: FileSpreadsheet,
    title: "Bring your Excel sheet with you",
    text: "Import your existing enquiries in one go. ReadyMyTrip moved 1,200+ leads from spreadsheets on day one.",
  },
];

const comingSoon = [
  { icon: MessageCircle, title: "WhatsApp Business API", text: "Send and receive WhatsApp messages from the lead screen, with every chat saved to the lead." },
  { icon: FileText, title: "Quotations", text: "Build a package quote and share it on WhatsApp." },
  { icon: Map, title: "Itineraries", text: "Day-by-day itineraries linked to the booking." },
  { icon: Receipt, title: "GST invoices", text: "Auto-numbered, GST-compliant invoices from the booking." },
];

const stages = [
  { name: "New enquiry", leads: ["Goa · family of 4", "Dubai · honeymoon"] },
  { name: "Quote sent", leads: ["Kerala · 6 nights", "Bali · group of 12"] },
  { name: "Confirmed", leads: ["Manali · corporate"] },
];

const faqs = [
  {
    q: "Does Blizz work with WhatsApp?",
    a: "Blizz is built for agencies whose enquiries arrive on WhatsApp. Today you log each WhatsApp enquiry as a lead with an owner and a follow-up date. Two-way WhatsApp messaging from inside Blizz, through the official WhatsApp Business API, is coming soon, and early customers get it first.",
  },
  {
    q: "Can I import my existing leads from Excel?",
    a: "Yes. Send us your spreadsheet and we'll import it during setup. ReadyMyTrip brought over 1,200+ leads this way.",
  },
  {
    q: "Will my agents see each other's leads?",
    a: "Only if you want them to. Agents see their own leads, team leaders see their team's, and owners and admins see everything.",
  },
  {
    q: "How long does setup take?",
    a: "You can be running in an afternoon. We do the first setup with you on a call: import your leads, add your agents and set your pipeline stages.",
  },
  {
    q: "How much does Blizz cost for a travel agency?",
    a: "Free for up to 2 users and 500 contacts. The Pro plan is ₹499 per user per month plus GST, so a 10-agent agency pays ₹4,990 a month. There's no setup fee and no annual lock-in.",
  },
  {
    q: "Can Blizz make quotations, itineraries and invoices?",
    a: "These are on our roadmap for travel agencies and coming soon. Tell us how you build quotes today on the demo call, and we'll show you what's planned.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blizz", item: "https://www.blizz.world" },
        { "@type": "ListItem", position: 2, name: "Travel Agency CRM", item: PAGE_URL },
      ],
    },
  ],
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

export default function TravelAgencyCrmPage() {
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
                <Map size={14} />
                CRM for travel agencies in India
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                The travel agency CRM that makes sure{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  every enquiry gets a follow-up
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Trip enquiries arrive on WhatsApp and calls, then sit in your
                agents&apos; personal chats. Blizz puts every enquiry in one
                pipeline, gives it an owner and a follow-up date, and flags it
                the moment a follow-up is missed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  data-track="cta_click"
                  data-track-label="Travel: hero demo"
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
              <p className="mt-6 text-sm text-slate-400">
                Built with ReadyMyTrip, a travel agency managing 1,200+ leads.
                Free for 2 users.
              </p>
            </div>

            {/* Example pipeline */}
            <div
              aria-label="Example travel pipeline in Blizz"
              className="rounded-2xl bg-white border border-slate-100 shadow-xl shadow-orange-500/5 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-slate-900">Trip enquiries</p>
                <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                  2 follow-ups overdue
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stages.map((stage) => (
                  <div key={stage.name} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold text-slate-500 mb-3">{stage.name}</p>
                    <div className="space-y-2">
                      {stage.leads.map((lead, i) => (
                        <div
                          key={lead}
                          className={`rounded-lg bg-white border p-2.5 text-xs text-slate-700 ${
                            stage.name === "New enquiry" && i === 0
                              ? "border-red-200"
                              : "border-slate-100"
                          }`}
                        >
                          {lead}
                          <p className="mt-1 text-[10px] text-slate-400">
                            {stage.name === "New enquiry" && i === 0
                              ? "Follow-up overdue"
                              : stage.name === "Confirmed"
                                ? "Booked"
                                : "Follow up Fri"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-slate-400 text-center">
                Example pipeline with sample enquiries
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Sound familiar?"
              title="Where travel agencies lose bookings"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {pains.map((p) => (
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
            <SectionHeading
              eyebrow="What you get today"
              title="Every trip enquiry, owned and followed up"
              text="These features are live and running at ReadyMyTrip right now."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
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
                Coming soon for travel agencies
              </p>
              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {comingSoon.map((c) => (
                  <div key={c.title}>
                    <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                      <c.icon size={16} className="text-orange-500" />
                      {c.title}
                    </div>
                    <p className="mt-1.5 text-sm text-slate-500">{c.text}</p>
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
            <SectionHeading
              eyebrow="How setup works"
              title="Running by this afternoon"
              text="We set up your first account with you, so your agents start on a CRM that already has your leads in it."
            />
            <ol className="grid md:grid-cols-3 gap-6">
              {[
                ["Book a 15-minute demo", "See Blizz with travel enquiries like yours and ask anything."],
                ["We import your leads", "Send your Excel sheet. We add your agents and teams and set your pipeline stages."],
                ["Your agents start the same day", "Each agent logs in to their own leads and follow-ups. You watch the dashboard."],
              ].map(([title, text], i) => (
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

        {/* Case study */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900 text-white p-8 sm:p-12 grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm font-medium text-orange-400 tracking-widest uppercase">
                Customer story
              </p>
              <blockquote className="mt-4 text-xl sm:text-2xl leading-relaxed font-medium">
                &ldquo;We were managing 1,200+ leads across WhatsApp and
                spreadsheets. Blizz brought everything into one dashboard. Our
                follow-up response time dropped from 2 days to 4 hours.&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold">Kashish Sethi</p>
              <p className="text-sm text-slate-400">
                Founder,{" "}
                <a
                  href="https://readymytrip.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-0.5 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  ReadyMyTrip
                  <ArrowUpRight size={12} />
                </a>
              </p>
            </div>
            <dl className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <dt className="text-sm text-slate-400">Leads managed in Blizz</dt>
                <dd className="mt-1 text-3xl font-bold text-orange-400">1,200+</dd>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <dt className="text-sm text-slate-400">Follow-up reply time</dt>
                <dd className="mt-1 text-3xl font-bold text-orange-400">2 days → 4 hrs</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Pricing for agencies */}
        <section className="py-20 px-4 sm:px-6 bg-orange-50/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Pricing"
              title="What a 10-agent agency pays in a year"
              text="Pro plan, 10 users, billed monthly. Prices exclude GST."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Blizz Pro", price: "₹59,880", note: "No setup fee", featured: true },
                { name: "Zoho CRM Standard", price: "₹1,40,000", note: "WhatsApp needs an add-on", featured: false },
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
            <SectionHeading eyebrow="FAQ" title="Questions travel agencies ask us" />
            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {faqs.map((f) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              See Blizz with enquiries like yours
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Book a free 15-minute demo. Bring your questions and your Excel
              sheet, and we&apos;ll show you how your agency would run on Blizz.
            </p>
            <DemoForm defaultBusinessType="Travel agency" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
