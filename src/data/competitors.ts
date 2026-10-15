// Single source of truth for /compare pages. Every competitor fact here was read on the
// competitor's own site on CHECKED_ON (full notes: CRM SaaS/Competitors/<slug>.md, kept
// outside this repo). Re-check prices before changing CHECKED_ON, and never mark a feature
// as missing unless their docs or a trial confirm it.

export const CHECKED_ON = "14 October 2026";
export const CHECKED_ON_ISO = "2026-10-14";

export type CompareRow = { label: string; blizz: string; them: string };
export type PriceRow = { plan: string; yearly: string; monthly: string; note?: string };

export type Competitor = {
  slug: string;
  name: string;
  /** Short name used in sentences, e.g. "Zoho" */
  short: string;
  seoTitle: string;
  description: string;
  /** One-line summary for the /compare hub */
  summary: string;
  tldr: string;
  rows: CompareRow[];
  pricing: { title: string; rows: PriceRow[]; footnote: string; sources: { label: string; url: string }[] };
  sections: { title: string; paragraphs: string[] }[];
  chooseThem: string[];
  chooseBlizz: string[];
  migration: string;
  faqs: { q: string; a: string }[];
};

// Blizz Pro: $7/user/month billed monthly; 20% off billed yearly ($5.60)
const BLIZZ_PRICE_ROWS: PriceRow[] = [
  { plan: "Blizz Pro", yearly: "$672", monthly: "$840", note: "No setup fee, no lock-in" },
];

export const competitors: Competitor[] = [
  {
    slug: "blizz-vs-zoho",
    name: "Zoho CRM",
    short: "Zoho",
    seoTitle: "Blizz vs Zoho CRM: Price, WhatsApp & Setup (2026)",
    description:
      "Blizz vs Zoho CRM for small teams in India and the GCC: prices for 10 users, WhatsApp, free plans and setup, checked on Zoho's pricing page in October 2026.",
    summary:
      "Zoho does far more. Blizz costs less than Zoho CRM Standard and is set up with you in an afternoon. Zoho's Bigin is the closer match on price.",
    tldr:
      "Zoho CRM is a mature, very configurable CRM that fits growing companies who want one vendor for CRM, accounting and support. Blizz is a smaller, ready-made CRM for teams of 3 to 30 who sell on WhatsApp and want to be running the same day. For 10 users, Blizz Pro costs $672 a year on yearly billing against $1,680 for Zoho CRM Standard. Zoho's simpler CRM, Bigin, costs about the same as Blizz.",
    rows: [
      { label: "Best for", blizz: "Teams of 3–30 that sell on WhatsApp and phone", them: "Growing companies that want deep customisation and the Zoho suite" },
      { label: "Free plan", blizz: "2 users, 500 contacts", them: "3 users" },
      { label: "Paid plan most small teams pick", blizz: "Pro: $7/user/month", them: "Standard: $14/user/month billed yearly, $20 billed monthly" },
      { label: "10 users for a year", blizz: "$672 yearly · $840 monthly", them: "$1,680 yearly · $2,400 monthly (Standard)" },
      { label: "Setup fee", blizz: "None", them: "None (Zoho advertises free onboarding)" },
      { label: "WhatsApp", blizz: "WhatsApp enquiries logged as leads today; two-way WhatsApp Business API rolling out October 2026", them: "WhatsApp Business integration in paid editions; conversations you start use Meta-approved templates; messages paid with credits" },
      { label: "Setup", blizz: "Done with you on a call; we import your Excel sheet", them: "Self-serve, with free onboarding help from Zoho" },
      { label: "Team access", blizz: "Agent / team leader / owner views built in", them: "Roles and profiles; manager-only reporting hierarchy listed under Enterprise" },
      { label: "Currency", blizz: "One US-dollar price for India and the GCC", them: "Local prices, including INR, AED and SAR" },
      { label: "Other apps from the same vendor", blizz: "No", them: "Yes: Books, Desk, Campaigns and 40+ more" },
    ],
    pricing: {
      title: "What 10 users cost for a year",
      rows: [
        ...BLIZZ_PRICE_ROWS,
        { plan: "Zoho Bigin", yearly: "$840", monthly: "$1,080", note: "Zoho's simpler pipeline CRM" },
        { plan: "Zoho CRM Standard", yearly: "$1,680", monthly: "$2,400" },
        { plan: "Zoho CRM Professional", yearly: "$2,760", monthly: "$4,200" },
      ],
      footnote:
        "Prices per user per month × 10 users × 12 months, in US dollars, excluding taxes. Zoho prices are its US-dollar list prices from Zoho's pricing page; Zoho charges less in some countries (in India, Standard is ₹800 per user per month billed yearly). WhatsApp message credits are extra on both.",
      sources: [{ label: "Zoho CRM pricing", url: "https://www.zoho.com/crm/zohocrm-pricing.html" }],
    },
    sections: [
      {
        title: "Price",
        paragraphs: [
          "Zoho CRM Standard costs $14 per user per month if you pay for the year upfront and $20 if you pay monthly. For a 10-person team that is $1,680 or $2,400 a year. Blizz Pro is $7 per user per month billed monthly, or 20% less billed yearly: $840 or $672 for the same team. Zoho charges less in some countries, so check the price Zoho shows you.",
          "If price is your main reason to look past Zoho CRM, look at Zoho Bigin too. Bigin is $7 per user per month billed yearly, the same as Blizz billed monthly. The difference then comes down to fit: Bigin is a general pipeline tool, Blizz comes set up for how WhatsApp-first sales teams work.",
        ],
      },
      {
        title: "WhatsApp",
        paragraphs: [
          "Both treat WhatsApp as a sales channel. Zoho connects a WhatsApp Business account to the CRM in its paid editions. Conversations your business starts go out as Meta-approved templates, and messages are paid for with credits.",
          "In Blizz today, every WhatsApp enquiry becomes a lead with an owner and a follow-up date, and overdue follow-ups are flagged. Two-way messaging through the official WhatsApp Business API is rolling out in October 2026. If you need two-way WhatsApp inside the CRM this week, Zoho has it now.",
        ],
      },
      {
        title: "Setup and adoption",
        paragraphs: [
          "Zoho gives you a blank, very flexible CRM plus free onboarding help. That flexibility is its strength for companies with someone who will own the configuration. For a 5-person team without that person, it often means weeks of decisions about modules, fields and layouts before anyone logs a lead.",
          "Blizz arrives with pipeline stages, fields and dashboards already shaped for your kind of business. We set it up with you on a call and import your spreadsheet, so the team can start the same day. ReadyMyTrip, a travel agency, moved 1,200+ leads into Blizz and cut its follow-up time from 2 days to 4 hours.",
        ],
      },
      {
        title: "Where Zoho is clearly ahead",
        paragraphs: [
          "Zoho has been building CRM software for years and it shows: native mobile apps, a large integrations marketplace, workflow automation, AI features, and a family of other Zoho apps for accounting, support and email marketing. It also prices in AED and SAR for the GCC. Blizz is a young product with a narrower feature set, and automations and GST invoices are still rolling out.",
        ],
      },
    ],
    chooseThem: [
      "You want CRM, accounting, helpdesk and email marketing from one vendor",
      "Someone on your team will own CRM configuration and wants full control",
      "You need native mobile apps, automation and integrations today",
      "You want billing in AED or SAR",
    ],
    chooseBlizz: [
      "You're a team of 3–30 whose enquiries arrive on WhatsApp and phone",
      "You tried a big CRM before and the team stopped using it",
      "You want it running this week, set up with you, not by you",
      "You want agents, team leaders and the owner to each see the right leads out of the box",
    ],
    migration:
      "Export your leads and contacts from Zoho as CSV files using Zoho's data export tool. Send us the file and we'll map the fields and import it during your setup call. Open deals come across with their stage, owner and next follow-up date.",
    faqs: [
      {
        q: "Is Blizz cheaper than Zoho CRM?",
        a: "Yes, against Zoho CRM Standard and above. For 10 users, Blizz Pro costs $672 a year billed yearly versus $1,680 for Zoho CRM Standard at Zoho's US-dollar price (checked October 2026, excluding taxes). Zoho Bigin costs about the same as Blizz.",
      },
      {
        q: "Does Zoho CRM have WhatsApp?",
        a: "Yes. Zoho CRM's paid editions connect to a WhatsApp Business account. Conversations your business starts must use Meta-approved templates, and messages are paid for with credits.",
      },
      {
        q: "Can I move from Zoho to Blizz without losing data?",
        a: "Yes. Export your leads and contacts from Zoho as a CSV and we import them during your setup call, keeping each lead's stage, owner and follow-up date.",
      },
      {
        q: "Which has the bigger free plan?",
        a: "Zoho CRM's free plan allows 3 users; Blizz's free plan allows 2 users and 500 contacts.",
      },
    ],
  },
  {
    slug: "blizz-vs-hubspot",
    name: "HubSpot",
    short: "HubSpot",
    seoTitle: "Blizz vs HubSpot: Price & WhatsApp for Small Teams",
    description:
      "Blizz vs HubSpot Sales Hub for small teams in India and the GCC: what 10 users cost, the $1,500 onboarding fee, and where WhatsApp is included. Checked October 2026.",
    summary:
      "HubSpot is a polished all-in-one platform priced in US dollars. For 10 users on Sales Hub Professional, Blizz costs under a tenth as much.",
    tldr:
      "HubSpot is one of the best-known CRM and marketing platforms in the world, built for companies that run marketing, sales and service together. Blizz is a simple CRM for small WhatsApp-first sales teams in India and the GCC. For 10 users, HubSpot Sales Hub Professional is $10,800 a year plus a required $1,500 onboarding fee. Blizz Pro is $672 to $840, with no setup fee.",
    rows: [
      { label: "Best for", blizz: "Teams of 3–30 that sell on WhatsApp and phone", them: "Companies running marketing, sales and service on one platform" },
      { label: "Free plan", blizz: "2 users, 500 contacts", them: "Free tools, up to 2 users" },
      { label: "Plan compared", blizz: "Pro: $7/user/month", them: "Sales Hub Professional: $90/seat/month" },
      { label: "10 users for a year", blizz: "$672 yearly · $840 monthly", them: "$10,800" },
      { label: "Setup fee", blizz: "None", them: "Required onboarding: $1,500" },
      { label: "WhatsApp", blizz: "WhatsApp enquiries logged as leads today; two-way WhatsApp Business API rolling out October 2026", them: "Available with Marketing Hub or Service Hub Professional/Enterprise, not with Sales Hub alone" },
      { label: "Setup", blizz: "Done with you on a call; we import your Excel sheet", them: "Guided onboarding (paid on Professional)" },
      { label: "Integrations and add-ons", blizz: "Few today", them: "Very large app marketplace" },
    ],
    pricing: {
      title: "What 10 users cost in year one",
      rows: [
        ...BLIZZ_PRICE_ROWS,
        { plan: "HubSpot Sales Hub Professional", yearly: "$12,300", monthly: "—", note: "$10,800 seats + $1,500 onboarding" },
      ],
      footnote:
        "HubSpot's Starter tier costs much less than Professional, but the Starter price on its pricing page and in its product catalog didn't match when we checked, so confirm it on HubSpot's site.",
      sources: [
        { label: "HubSpot Sales Hub pricing", url: "https://www.hubspot.com/pricing/sales" },
        { label: "HubSpot product & services catalog", url: "https://legal.hubspot.com/hubspot-product-and-services-catalog" },
      ],
    },
    sections: [
      {
        title: "Price",
        paragraphs: [
          "HubSpot Sales Hub Professional is $90 per seat per month, and HubSpot requires a one-time $1,500 onboarding package on Professional. For 10 users that is $12,300 in year one. Blizz Pro for the same team is $840 billed monthly or $672 billed yearly, with no setup fee.",
          "HubSpot also has a free tier and a much cheaper Starter tier. If you only need basic contact and deal tracking, Starter is worth a look.",
        ],
      },
      {
        title: "WhatsApp",
        paragraphs: [
          "HubSpot does support WhatsApp, but only with Marketing Hub or Service Hub on the Professional or Enterprise tier. Sales Hub on its own doesn't include it, so a sales team that wants WhatsApp in HubSpot pays for a second hub.",
          "Blizz is built for teams whose enquiries arrive on WhatsApp. Today each WhatsApp enquiry becomes a lead with an owner and a follow-up date. Two-way messaging through the official WhatsApp Business API is rolling out in October 2026.",
        ],
      },
      {
        title: "Setup and adoption",
        paragraphs: [
          "HubSpot is easy to use for a platform of its size, and its onboarding is thorough. It's also built for US and European mid-market teams: dollar billing, email-first sequences and marketing automation at its core.",
          "Blizz is narrower on purpose. It comes set up for small teams in India and the GCC, with agent, team leader and owner views, and we import your spreadsheet with you on a call.",
        ],
      },
      {
        title: "Where HubSpot is clearly ahead",
        paragraphs: [
          "Marketing automation, email sequences, a huge integrations marketplace, native mobile apps, detailed reporting and a large library of training material. If your growth comes from inbound marketing and you have the budget, HubSpot does far more than Blizz.",
        ],
      },
    ],
    chooseThem: [
      "Marketing automation and email campaigns matter as much as sales",
      "You need a large integrations marketplace today",
      "You have the budget for enterprise pricing and paid onboarding",
      "Your team sells mostly by email, not WhatsApp",
    ],
    chooseBlizz: [
      "You're a team of 3–30 whose enquiries arrive on WhatsApp and phone",
      "You want a low per-user price with no setup fee",
      "You need the team logging leads this week",
      "You want simple owner, team leader and agent views without configuring them",
    ],
    migration:
      "Export contacts and deals from HubSpot as CSV files from its Import & Export settings. Send them to us and we'll import them during your setup call, keeping each deal's stage and owner.",
    faqs: [
      {
        q: "How much does HubSpot cost for 10 users?",
        a: "HubSpot Sales Hub Professional is $90 per seat per month, plus a required $1,500 onboarding fee: $12,300 in year one for 10 users (checked October 2026). Blizz Pro for 10 users is $672 to $840 a year.",
      },
      {
        q: "Does HubSpot have WhatsApp?",
        a: "Yes, with Marketing Hub or Service Hub Professional or Enterprise. Sales Hub on its own doesn't include WhatsApp.",
      },
      {
        q: "Is HubSpot free?",
        a: "HubSpot has free tools for up to 2 users. Paid Sales Hub tiers start with Starter; Professional adds a required onboarding fee.",
      },
      {
        q: "Can I import my HubSpot data into Blizz?",
        a: "Yes. Export contacts and deals from HubSpot as CSV files and we'll import them during your setup call.",
      },
    ],
  },
  {
    slug: "blizz-vs-freshsales",
    name: "Freshsales",
    short: "Freshsales",
    seoTitle: "Blizz vs Freshsales: Price, WhatsApp & Free Plan",
    description:
      "Blizz vs Freshsales (Freshworks CRM) for small teams in India and the GCC: 10-user pricing, WhatsApp on each plan and free plans. Checked on Freshworks' pricing page, October 2026.",
    summary:
      "Freshsales is a capable, AI-assisted sales CRM with built-in phone and email. Blizz costs less and is set up for WhatsApp-first selling.",
    tldr:
      "Freshsales by Freshworks is a well-reviewed sales CRM with built-in phone, email and AI assistance. Blizz is a simpler CRM for small teams in India and the GCC whose enquiries arrive on WhatsApp. For 10 users, Freshsales Growth costs $1,080 a year billed yearly; Blizz Pro costs $672. Freshsales' free plan covers 3 users but doesn't include WhatsApp.",
    rows: [
      { label: "Best for", blizz: "Teams of 3–30 that sell on WhatsApp and phone", them: "Sales teams that work by phone and email and want AI help" },
      { label: "Free plan", blizz: "2 users, 500 contacts", them: "Up to 3 users (no WhatsApp)" },
      { label: "Plan compared", blizz: "Pro: $7/user/month", them: "Growth: $9/user/month billed yearly" },
      { label: "10 users for a year", blizz: "$672 yearly · $840 monthly", them: "$1,080 yearly (Growth)" },
      { label: "WhatsApp", blizz: "WhatsApp enquiries logged as leads today; two-way WhatsApp Business API rolling out October 2026", them: "On Growth and above" },
      { label: "Free trial", blizz: "Free plan; demo with your own data", them: "21 days" },
      { label: "Setup", blizz: "Done with you on a call; we import your Excel sheet", them: "Self-serve" },
      { label: "Built-in phone and email", blizz: "Not yet", them: "Yes" },
    ],
    pricing: {
      title: "What 10 users cost for a year",
      rows: [
        ...BLIZZ_PRICE_ROWS,
        { plan: "Freshsales Growth", yearly: "$1,080", monthly: "—" },
        { plan: "Freshsales Pro", yearly: "$4,680", monthly: "—" },
      ],
      footnote:
        "Prices per user per month × 10 users × 12 months, in US dollars, excluding taxes, from Freshworks' pricing page (billed annually; Freshworks says annual billing saves 20%). WhatsApp message charges are extra on both.",
      sources: [{ label: "Freshsales pricing", url: "https://www.freshworks.com/crm/pricing/" }],
    },
    sections: [
      {
        title: "Price",
        paragraphs: [
          "Freshsales Growth is $9 per user per month billed yearly. For 10 users that's $1,080 a year. Blizz Pro costs $672 billed yearly or $840 billed monthly for the same team. Freshsales Pro, which adds sales sequences and deal insights, is $39 per user per month billed yearly.",
        ],
      },
      {
        title: "WhatsApp",
        paragraphs: [
          "Freshsales includes WhatsApp from the Growth plan upwards; the free plan doesn't. In Blizz today, each WhatsApp enquiry becomes a lead with an owner and a follow-up date, and two-way messaging through the official WhatsApp Business API is rolling out in October 2026.",
        ],
      },
      {
        title: "Where Freshsales is clearly ahead",
        paragraphs: [
          "Built-in phone and email, AI assistance, sales sequences on Pro, native mobile apps and a 21-day trial of the full product. Its free plan also covers one more user than Blizz's. If your team sells mainly by phone and email and wants those tools in the CRM now, Freshsales is the stronger product.",
        ],
      },
      {
        title: "Where Blizz fits better",
        paragraphs: [
          "Blizz is for small teams whose sales start on WhatsApp and who want a CRM shaped around that, at a lower price per user. It comes set up for your kind of business, with agent, team leader and owner views, and we set it up with you so the team starts the same day.",
        ],
      },
    ],
    chooseThem: [
      "Your team sells mostly by phone and email and wants calling built in",
      "You want AI assistance and email sequences",
      "You prefer to set up a CRM yourself during a 21-day trial",
    ],
    chooseBlizz: [
      "You're a team of 3–30 whose enquiries arrive on WhatsApp",
      "You want the lower per-user price",
      "You want it set up with you and running the same day",
    ],
    migration:
      "Export your contacts and deals from Freshsales as CSV files and send them to us. We'll import them during your setup call, keeping stages, owners and follow-up dates.",
    faqs: [
      {
        q: "Is Blizz cheaper than Freshsales?",
        a: "Yes. For 10 users, Blizz Pro costs $672 a year billed yearly; Freshsales Growth costs $1,080 billed yearly (prices checked October 2026, excluding taxes).",
      },
      {
        q: "Does Freshsales include WhatsApp?",
        a: "Yes, on the Growth plan and above. The Freshsales free plan doesn't include WhatsApp.",
      },
      {
        q: "Which has the bigger free plan?",
        a: "Freshsales' free plan covers up to 3 users; Blizz's covers 2 users and 500 contacts.",
      },
    ],
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug) ?? null;
}
