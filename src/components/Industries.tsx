import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Map, PartyPopper, Pill } from "lucide-react";

const industries = [
  {
    icon: Map,
    name: "Travel agencies",
    text: "Every trip enquiry owned and followed up, from new enquiry to confirmed booking.",
    href: "/travel-agency-crm",
    customer: "Used by ReadyMyTrip",
  },
  {
    icon: Pill,
    name: "Pharma & wellness",
    text: "Track enquiries from doctors, chemists, distributors and customers, plus samples and reorders.",
    href: "/pharma-crm",
    customer: "Used by Hebe Wellness",
  },
  { icon: Building2, name: "Real estate", text: "Site visits, buyer follow-ups and broker teams." },
  { icon: GraduationCap, name: "Education consultants", text: "Student enquiries through to admission." },
  { icon: PartyPopper, name: "Wedding & events", text: "Client enquiries, quotes and event dates." },
];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">
            Industries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            A CRM set up for your kind of business
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Blizz comes with pipeline stages and wording for your industry, so
            your team starts on day one instead of configuring for weeks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((i) => {
            const card = (
              <>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <i.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900">{i.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{i.text}</p>
                {i.href ? (
                  <p className="mt-4 text-sm font-medium text-orange-600 flex items-center gap-1">
                    {i.customer}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </p>
                ) : (
                  <p className="mt-4 text-xs font-medium text-slate-400">Industry pack coming soon</p>
                )}
              </>
            );
            return i.href ? (
              <Link
                key={i.name}
                href={i.href}
                className="group rounded-xl border border-orange-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col"
              >
                {card}
              </Link>
            ) : (
              <div key={i.name} className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 flex flex-col">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
