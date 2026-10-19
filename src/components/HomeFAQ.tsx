const faqs = [
  {
    q: "What is Blizz?",
    a: "Blizz is a simple CRM for small businesses in India and the GCC that sell on WhatsApp and phone. It puts every lead in one pipeline, gives it an owner and a follow-up date, and shows the owner what the whole team is doing. It's built for teams of about 3 to 30 people.",
  },
  {
    q: "Who is Blizz for?",
    a: "Small sales teams that get enquiries on WhatsApp and calls: travel agencies, pharma and wellness companies, real estate brokers, education consultants, event planners and insurance advisors. Blizz is used today by ReadyMyTrip, a travel agency, and Hebe Wellness, a CBD and hemp wellness brand.",
  },
  {
    q: "Does Blizz work with WhatsApp?",
    a: "Yes. Blizz is designed around WhatsApp selling: every WhatsApp enquiry becomes a lead with an owner and a follow-up date. On the Pro and Business plans you send and receive WhatsApp messages from inside Blizz through the official WhatsApp Business API, and follow-ups go out automatically (WhatsApp message charges extra). GST invoices are coming soon. The free plan lets you log WhatsApp enquiries by hand.",
  },
  {
    q: "How much does Blizz cost?",
    a: "Blizz is free for up to 3 users and 1,000 contacts. The Pro plan is $4 per user per month billed yearly ($5 monthly) and Business is $8 ($10 monthly), plus applicable taxes. Teams of up to 15 never pay more than $39 a month on Pro or $79 on Business. A team of 10 on Pro pays $468 a year, compared with $1,680 for Zoho CRM Standard on yearly billing (Zoho's US-dollar price). There is no setup fee and no annual lock-in.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The Pro plan comes with a 14-day free trial, no credit card required, and you won't be charged unless you choose to continue. You can also stay on the free Starter plan for up to 3 users and 1,000 contacts with no time limit. There's no long-term contract and you can cancel anytime.",
  },
  {
    q: "How is Blizz different from Zoho or HubSpot?",
    a: "Blizz is smaller and simpler on purpose. It comes set up for your industry, puts WhatsApp at the centre of selling, and costs a fraction of HubSpot, which also charges a mandatory onboarding fee. Teams that gave up on a big CRM usually find Blizz quicker to adopt.",
  },
  {
    q: "Can I import my leads from Excel?",
    a: "Yes. Send your spreadsheet and we import it during setup. ReadyMyTrip moved over 1,200 leads into Blizz this way.",
  },
  {
    q: "Is my data safe in Blizz?",
    a: "Agents see only their own leads, team leaders see their team and owners see everything. Your data stays in your account, you can export it at any time, and we handle it under India's DPDP Act as described in our Privacy Policy.",
  },
  {
    q: "Does Blizz offer support if I get stuck?",
    a: "Yes. We set Blizz up with you on a call and import your leads, so you start with a working CRM. After that, every plan gets email support at hello@blizz.world, Pro adds priority support on WhatsApp, and Business adds a dedicated account manager.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function HomeFAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Questions about Blizz CRM
          </h2>
        </div>
        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {f.q}
                <span className="text-orange-500 text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
