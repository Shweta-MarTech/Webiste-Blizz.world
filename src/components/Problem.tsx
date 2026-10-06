import { AlertTriangle, Clock, Frown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Leads slip through WhatsApp",
    description:
      "Your sales team manages 100+ conversations across personal WhatsApp. Leads get forgotten, follow-ups get missed, and nobody knows who's handling what.",
  },
  {
    icon: Frown,
    title: "Zoho & HubSpot are overkill",
    description:
      "You tried a big CRM once. It took weeks to configure, your team never adopted it, and you went back to spreadsheets. Sound familiar?",
  },
  {
    icon: Clock,
    title: "No visibility into your pipeline",
    description:
      "How many leads came in this week? What's your conversion rate? Which agent is closing the most? Without a system, you're guessing.",
  },
];

export function Problem() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-orange-50/30">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Indian and GCC businesses deserve better than spreadsheets
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            90% of Indian SMBs quit their CRM in the first week. Not because
            they don&apos;t need one — because existing CRMs weren&apos;t built
            for how they work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl bg-white border border-orange-100 p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
