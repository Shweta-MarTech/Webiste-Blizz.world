import type { Metadata } from "next";
import {
  AlarmClock,
  BarChart3,
  CalendarClock,
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
import { IndustryPage, type IndustryPageContent } from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "Travel Agency CRM for India & GCC | Blizz",
  description:
    "A travel agency CRM for India and the GCC, built with a real travel agency. Every trip enquiry in one pipeline, with owners and overdue follow-up alerts.",
  alternates: { canonical: "/travel-agency-crm" },
  openGraph: {
    title: "Blizz — The travel agency CRM built with a real travel agency",
    description:
      "Every trip enquiry in one pipeline, assigned and followed up on time. Free for 2 users.",
    url: "/travel-agency-crm",
  },
};

const content: IndustryPageContent = {
  slug: "travel-agency-crm",
  breadcrumb: "Travel Agency CRM",
  trackLabel: "Travel",
  businessType: "Travel agency",
  hero: {
    badgeIcon: Map,
    badge: "CRM for travel agencies in India & the GCC",
    titleLead: "The travel agency CRM that makes sure",
    titleHighlight: "every enquiry gets a follow-up",
    text: "Trip enquiries arrive on WhatsApp and calls, then sit in your agents' personal chats. Blizz puts every enquiry in one pipeline, gives it an owner and a follow-up date, and flags it the moment a follow-up is missed.",
    note: "Built with ReadyMyTrip, a travel agency managing 1,200+ leads. Free for 2 users.",
  },
  pipeline: {
    title: "Trip enquiries",
    stages: [
      { name: "New enquiry", leads: ["Goa · family of 4", "Dubai · honeymoon"] },
      { name: "Quote sent", leads: ["Kerala · 6 nights", "Bali · group of 12"] },
      { name: "Confirmed", leads: ["Manali · corporate"] },
    ],
    doneLabel: "Booked",
    nextLabel: "Follow up Fri",
  },
  pains: {
    title: "Where travel agencies lose bookings",
    items: [
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
    ],
  },
  features: {
    title: "Every trip enquiry, owned and followed up",
    text: "These features are live and running at ReadyMyTrip right now.",
    items: [
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
    ],
  },
  comingSoon: {
    title: "Coming soon for travel agencies",
    items: [
      { icon: MessageCircle, title: "WhatsApp Business API", text: "Send and receive WhatsApp messages from the lead screen, with every chat saved to the lead." },
      { icon: FileText, title: "Quotations", text: "Build a package quote and share it on WhatsApp." },
      { icon: Map, title: "Itineraries", text: "Day-by-day itineraries linked to the booking." },
      { icon: Receipt, title: "GST invoices", text: "Auto-numbered, GST-compliant invoices from the booking." },
    ],
  },
  steps: {
    title: "Running by this afternoon",
    text: "We set up your first account with you, so your agents start on a CRM that already has your leads in it.",
    items: [
      ["Book a 15-minute demo", "See Blizz with travel enquiries like yours and ask anything."],
      ["We import your leads", "Send your Excel sheet. We add your agents and teams and set your pipeline stages."],
      ["Your agents start the same day", "Each agent logs in to their own leads and follow-ups. You watch the dashboard."],
    ],
  },
  story: {
    quote:
      "We were managing 1,200+ leads across WhatsApp and spreadsheets. Blizz brought everything into one dashboard. Our follow-up response time dropped from 2 days to 4 hours.",
    name: "Kashish Sethi",
    role: "Founder",
    company: "ReadyMyTrip",
    url: "https://readymytrip.com/",
    facts: [
      { label: "Leads managed in Blizz", value: "1,200+" },
      { label: "Follow-up reply time", value: "2 days → 4 hrs" },
    ],
  },
  pricingTitle: "What a 10-agent agency pays in a year",
  faq: {
    title: "Questions travel agencies ask us",
    items: [
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
    ],
  },
  demo: {
    title: "See Blizz with enquiries like yours",
    text: "Book a free 15-minute demo. Bring your questions and your Excel sheet, and we'll show you how your agency would run on Blizz.",
  },
};

export default function TravelAgencyCrmPage() {
  return <IndustryPage content={content} />;
}
