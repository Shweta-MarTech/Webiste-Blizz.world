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
    a: "Yes. Blizz is designed around WhatsApp selling: every WhatsApp enquiry becomes a lead with an owner and a follow-up date. Two-way messaging through the official WhatsApp Business API, automated follow-ups and GST invoices are rolling out in October 2026.",
  },
  {
    q: "How much does Blizz cost?",
    a: "Blizz is free for up to 2 users and 500 contacts. The Pro plan is ₹499 per user per month and Business is ₹999, plus GST. A team of 10 on Pro pays ₹59,880 a year, compared with about ₹1,40,000 for Zoho CRM Standard. There is no setup fee and no annual lock-in.",
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
