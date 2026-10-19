import type { Metadata } from "next";
import {
  BarChart3,
  BellRing,
  CalendarClock,
  FileSpreadsheet,
  FileText,
  KanbanSquare,
  MessageCircle,
  PackageX,
  Pill,
  Receipt,
  ShieldCheck,
  TestTube,
  Users,
} from "lucide-react";
import { socialMeta } from "@/lib/seo";
import { IndustryPage, type IndustryPageContent } from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "CRM for Pharma & Wellness Companies in India & GCC | Blizz",
  description:
    "CRM for pharma, Ayurvedic and wellness teams in India and the GCC. Track enquiries from doctors, chemists and distributors, with follow-up and reorder dates.",
  alternates: { canonical: "/pharma-crm" },
  ...socialMeta({
    title: "Blizz — CRM for pharma and wellness sales teams",
    description:
      "Every enquiry, sample and reorder followed up on time. Used by Hebe Wellness. Free for 3 users.",
    path: "/pharma-crm",
  }),
};

const content: IndustryPageContent = {
  slug: "pharma-crm",
  breadcrumb: "Pharma & Wellness CRM",
  trackLabel: "Pharma",
  businessType: "Pharma & wellness",
  hero: {
    badgeIcon: Pill,
    badge: "CRM for pharma & wellness companies in India & the GCC",
    titleLead: "The CRM for pharma and wellness teams that",
    titleHighlight: "follows up on every enquiry and reorder",
    text: "Enquiries from doctors, chemists, distributors and customers arrive on WhatsApp, calls and your website, then sit in your reps' phones. Blizz puts each one in a single pipeline with an owner and a next follow-up date, so samples get chased and repeat orders don't slip.",
    note: "Used by Hebe Wellness, a CBD and hemp wellness brand. Free for 3 users.",
  },
  pipeline: {
    title: "Enquiries & orders",
    stages: [
      { name: "New enquiry", leads: ["Chemist · Pune", "Distributor · Jaipur"] },
      { name: "Sample sent", leads: ["Clinic · Bengaluru", "Customer · CBD oil"] },
      { name: "Ordered", leads: ["Wellness store · Delhi"] },
    ],
    doneLabel: "Reorder due in 30 days",
    nextLabel: "Follow up Mon",
  },
  pains: {
    title: "Where pharma and wellness teams lose sales",
    items: [
      {
        icon: MessageCircle,
        title: "Enquiries live in reps' phones",
        text: "A chemist in Pune asks about stock on one rep's WhatsApp, a distributor in Jaipur calls another. When a rep moves on, those contacts and conversations go with them.",
      },
      {
        icon: TestTube,
        title: "Samples go out and nobody follows up",
        text: "You send samples or product details to a clinic or a store. Without a reminder, the follow-up call happens weeks later, or never.",
      },
      {
        icon: PackageX,
        title: "Repeat orders slip quietly",
        text: "A retailer or customer who ordered last month should be reordering now. Nobody notices until the month's sales look thin.",
      },
    ],
  },
  features: {
    title: "Every enquiry, sample and reorder, owned and followed up",
    text: "These features are live today.",
    items: [
      {
        icon: MessageCircle,
        title: "WhatsApp inside the CRM",
        text: "Send and receive WhatsApp messages from the lead screen through the official WhatsApp Business API, with every chat saved to the account and follow-ups sent automatically.",
      },
      {
        icon: KanbanSquare,
        title: "A pipeline shaped like your sale",
        text: "Track each account from first enquiry to sample, order and repeat order, so you see where every doctor, chemist and distributor stands.",
      },
      {
        icon: CalendarClock,
        title: "Follow-up and reorder dates",
        text: "Set the next call, sample follow-up or reorder date on every lead. Missed ones show as overdue for the rep and their manager.",
      },
      {
        icon: BarChart3,
        title: "A morning dashboard for the owner",
        text: "New enquiries, hot leads, overdue follow-ups and the rep leaderboard, all on one screen.",
      },
      {
        icon: Users,
        title: "Reps, teams and area managers",
        text: "Group reps into teams by city or region. Area managers run their own team, and you see the whole company.",
      },
      {
        icon: ShieldCheck,
        title: "Each rep sees only their own accounts",
        text: "Reps see their leads, managers see their team, owners see everything. Doctor, chemist and distributor contacts stay with the company when a rep leaves.",
      },
      {
        icon: FileSpreadsheet,
        title: "Bring your Excel sheet with you",
        text: "Import your existing doctor, chemist, distributor and customer lists in one go during setup.",
      },
    ],
  },
  comingSoon: {
    title: "Coming soon for pharma & wellness teams",
    items: [
      { icon: BellRing, title: "Automatic reorder reminders", text: "A WhatsApp reminder goes out on its own when a reorder is due." },
      { icon: FileText, title: "Quotations", text: "Price quotes for distributors and retailers, shared on WhatsApp." },
      { icon: Receipt, title: "GST invoices", text: "Auto-numbered, GST-compliant invoices from the order." },
    ],
  },
  steps: {
    title: "Running by this afternoon",
    text: "We set up your first account with you, so your reps start on a CRM that already has your contacts in it.",
    items: [
      ["Book a 15-minute demo", "See Blizz set up for enquiries, samples and reorders like yours."],
      ["We import your contacts", "Send your Excel sheet. We add your reps and teams and set your pipeline stages."],
      ["Your reps start the same day", "Each rep logs in to their own accounts and follow-ups. You watch the dashboard."],
    ],
  },
  story: {
    useCase:
      "Hebe Wellness makes full-spectrum CBD oils from organically farmed hemp, with GMP-certified, third-party lab-tested products. Most of their customer enquiries arrive on WhatsApp. In Blizz, each enquiry becomes a lead with an owner and a follow-up date, so the team gets back to every customer.",
    quote:
      "Most of our customer enquiries for our CBD oils come in on WhatsApp. With Blizz, every enquiry becomes a lead with a follow-up date, so nothing slips through the cracks. My team was using it from day one.",
    name: "Arun Bakshi",
    role: "Founder",
    company: "Hebe Wellness",
    url: "https://hebe-wellness.com/",
    facts: [
      { label: "Where enquiries arrive", value: "WhatsApp" },
      { label: "With Blizz", value: "Every enquiry has a follow-up date" },
    ],
  },
  faq: {
    title: "Questions pharma and wellness companies ask us",
    items: [
      {
        q: "Who is Blizz for in pharma and wellness?",
        a: "Small pharma, Ayurvedic, nutraceutical and wellness companies with a sales team of around 3 to 30 people, who sell to doctors, clinics, chemists, distributors, retailers or directly to customers. Blizz tracks enquiries, follow-ups and orders. It is a sales CRM and does not manage inventory, prescriptions or patient records.",
      },
      {
        q: "Can our reps use Blizz in the field?",
        a: "Blizz runs in the browser on any laptop or phone. A version designed for phones is being built now, so reps can update leads between visits more easily.",
      },
      {
        q: "Is our customer data safe?",
        a: "Each rep sees only their own accounts, managers see their team and owners see everything. Your data stays in your account, you can export it anytime, and we process it only to run the service, as described in our Privacy Policy. Keep medical records in your clinical systems and use Blizz for sales contacts and enquiries.",
      },
      {
        q: "Does Blizz work with WhatsApp?",
        a: "Every WhatsApp enquiry becomes a lead with an owner and a follow-up date, the way Hebe Wellness works. Your reps can also send and receive WhatsApp messages from inside Blizz through the official WhatsApp Business API, with automated follow-ups on the Pro plan. WhatsApp message charges set by Meta are extra.",
      },
      {
        q: "Can I import our existing contact lists?",
        a: "Yes. Send us your Excel sheets of doctors, chemists, distributors or customers and we'll import them during setup.",
      },
      {
        q: "How much does Blizz cost?",
        a: "Free for up to 3 users and 1,000 contacts. The Pro plan is $4 per user per month billed yearly ($5 billed monthly) plus applicable taxes, and teams of 10 to 15 never pay more than $39 a month, so a team of 10 pays $39 a month. There's no setup fee and no annual lock-in.",
      },
    ],
  },
  demo: {
    title: "See Blizz set up for your sales team",
    text: "Book a free 15-minute demo. Tell us who you sell to and how enquiries reach you, and we'll show you how your team would run on Blizz.",
  },
};

export default function PharmaCrmPage() {
  return <IndustryPage content={content} />;
}
