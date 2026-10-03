import {
  ArrowRight,
  MessageCircle,
  BarChart3,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-[120px]" />
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-red-300/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-medium mb-6">
            <MessageCircle size={14} />
            Specially designed for Small Scale Businesses
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="text-slate-900">Stop losing leads.</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Start closing deals.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl leading-relaxed">
            The CRM small businesses finish setting up fast. Manage leads,
            automate WhatsApp follow-ups, and track your sales pipeline — all in
            one place your team will love using.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              data-track="cta_click"
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all gap-2 glow-orange"
            >
              Start Free — No Card Needed
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-orange-300 hover:text-orange-600 transition-all"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Users size={16} className="text-orange-500" />
              Free for 2 users
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={16} className="text-green-500" />
              WhatsApp built-in
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 size={16} className="text-orange-500" />
              Setup in 5 minutes
            </span>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-orange-500/10 overflow-hidden animate-float">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-slate-400">
              blizz.world/dashboard
            </span>
          </div>
          <div className="p-6 sm:p-8 bg-gradient-to-br from-orange-50/30 to-white">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Total Leads", value: "1,203", change: "+12%" },
                { label: "Won Deals", value: "₹5.4L", change: "+25%" },
                { label: "Follow-ups Due", value: "23", change: "Today" },
                { label: "Conversion", value: "8.2%", change: "+1.4%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1 font-medium text-orange-500">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 rounded-lg border border-slate-100 bg-white p-4 h-32 flex items-end gap-1 shadow-sm">
                {[40, 55, 35, 65, 50, 75, 60, 85, 70, 90, 78, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-orange-500 to-orange-300"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
              <div className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400 mb-3">Hot Leads</p>
                {["Rahul — ₹2.1L trip", "Priya — ₹85K package", "Amit — ₹1.5L group"].map(
                  (lead) => (
                    <div
                      key={lead}
                      className="flex items-center gap-2 py-1.5 text-xs text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-glow" />
                      {lead}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
