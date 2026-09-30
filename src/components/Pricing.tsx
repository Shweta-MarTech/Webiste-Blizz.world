import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For small teams getting started",
    cta: "Start Free",
    featured: false,
    features: [
      "Up to 2 users",
      "500 contacts",
      "Lead management & pipeline",
      "Basic dashboard",
      "WhatsApp chat logging (manual)",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/user/month",
    description: "For growing teams that sell on WhatsApp",
    cta: "Start 14-Day Trial",
    featured: true,
    features: [
      "Unlimited users & contacts",
      "WhatsApp Business API integration",
      "Automated follow-ups & workflows",
      "GST quotations & invoices",
      "Team hierarchy & permissions",
      "Reports & analytics",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "Business",
    price: "₹999",
    period: "/user/month",
    description: "For agencies that need customization",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Visual automation builder",
      "Custom fields & pipeline stages",
      "API access",
      "Vertical pack customization",
      "Dedicated account manager",
      "Data migration assistance",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Start free, upgrade when you&apos;re ready. No mandatory onboarding
            fees. No annual lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 ${
                plan.featured
                  ? "bg-gradient-to-b from-orange-500 to-red-500 text-white shadow-xl glow-orange scale-[1.02]"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              {plan.featured && (
                <span className="inline-block text-xs font-medium bg-white/20 text-white px-2.5 py-0.5 rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? "text-orange-100" : "text-slate-400"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-orange-100" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <a
                href="#cta"
                className={`mt-6 block text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                    : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 glow-orange-sm"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.featured ? "text-orange-200" : "text-orange-500"
                      }`}
                    />
                    <span className={`text-sm ${plan.featured ? "text-orange-50" : "text-slate-500"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-400">
          All prices in INR. 20% discount on annual billing. No setup fees, ever.
        </p>
      </div>
    </section>
  );
}
