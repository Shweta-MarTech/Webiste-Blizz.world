import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kashish Sethi",
    role: "Founder, ReadyMyTrip",
    text: "We were managing 1,200+ leads across WhatsApp and spreadsheets. LevelUpCRM brought everything into one dashboard. Our follow-up response time dropped from 2 days to 4 hours.",
    metric: "25% faster lead response",
  },
  {
    name: "Priya Mehta",
    role: "Sales Head, TravelWings",
    text: "We tried Zoho — my team gave up in 3 days. LevelUpCRM was set up in one afternoon. The WhatsApp integration alone is worth it. Our agents actually use it every day.",
    metric: "100% team adoption",
  },
  {
    name: "Ajay Tanwar",
    role: "Owner, Horizon Holidays",
    text: "The GST invoicing feature saved us hours every week. We used to create invoices manually in Excel. Now it's one click from the booking screen and shared via WhatsApp.",
    metric: "8 hours saved per week",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by travel agencies across India
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
