import {
  MessageCircle,
  BarChart3,
  Users,
  Zap,
  FileText,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Send and receive WhatsApp messages directly from the CRM. Every conversation logged to the lead timeline automatically.",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Visual Sales Pipeline",
    description:
      "Drag-and-drop pipeline with custom stages for your business. See exactly where every deal stands at a glance.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Automated Follow-ups",
    description:
      "Set it and forget it. Auto-send WhatsApp reminders, email sequences, and task assignments based on lead activity.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Assign leads, track agent performance, and manage team hierarchies. Leaderboards keep everyone motivated.",
    highlight: false,
  },
  {
    icon: FileText,
    title: "GST Invoicing",
    description:
      "Generate GST-compliant quotations and invoices. Auto-numbered, branded, shareable via WhatsApp in one click.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Control who sees what. Agents see their leads, team leaders see their team, admins see everything. No data leaks.",
    highlight: false,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Everything you need to sell more, built in
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            No plugins to install, no consultants to hire. Blizz works out
            of the box for Indian and GCC sales teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-xl p-6 transition-all ${
                f.highlight
                  ? "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg glow-orange-sm"
                  : "bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  f.highlight ? "bg-white/20" : "bg-orange-100"
                }`}
              >
                <f.icon
                  size={20}
                  className={f.highlight ? "text-white" : "text-orange-600"}
                />
              </div>
              <h3 className={`font-semibold mb-2 ${f.highlight ? "text-white" : "text-slate-900"}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${f.highlight ? "text-orange-100" : "text-slate-500"}`}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
