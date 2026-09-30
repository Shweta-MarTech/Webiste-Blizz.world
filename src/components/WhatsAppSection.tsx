import { Check } from "lucide-react";

export function WhatsAppSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-orange-50/30 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-green-600 mb-2 tracking-widest uppercase">
              WhatsApp-Native
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Your sales happen on WhatsApp.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Your CRM should too.
              </span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              85% of Indian businesses close deals on WhatsApp. LevelUpCRM is
              the only CRM where WhatsApp isn&apos;t an add-on — it&apos;s the
              core.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Send template messages to leads directly from CRM",
                "Auto-log every WhatsApp conversation to lead timeline",
                "Automated follow-up reminders via WhatsApp",
                "Broadcast updates to segmented lead lists",
                "Track read receipts and response times",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-xl shadow-orange-500/10">
            <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Rahul Sharma
                  </p>
                  <p className="text-green-100 text-xs">
                    Lead · ₹2.1L Trip to Europe
                  </p>
                </div>
                <span className="ml-auto text-xs text-green-100">
                  2 min ago
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-green-600/60 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Hi, I&apos;m interested in the Europe package. Can you share
                    the itinerary?
                  </p>
                </div>
                <div className="bg-white rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-slate-800 text-sm">
                    Hi Rahul! Here&apos;s our 10-day Europe itinerary covering
                    Paris, Rome, and Switzerland. ✈️
                  </p>
                </div>
                <div className="bg-green-600/60 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Looks great! What about visa assistance?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-glow" />
              Auto-logged to lead timeline · Follow-up set for tomorrow 10 AM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
