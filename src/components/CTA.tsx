import { Shield, Clock, CreditCard } from "lucide-react";
import { DemoForm } from "./DemoForm";

export function CTA() {
  return (
    <section id="cta" className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to stop losing leads?
        </h2>
        <p className="mt-4 text-lg text-orange-100">
          Book a free 15-minute demo. We&apos;ll show you how Blizz keeps your
          leads, WhatsApp follow-ups and deals in one place, and help set it
          up for your team.
        </p>

        <DemoForm />

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-orange-100">
          <span className="flex items-center gap-1.5">
            <CreditCard size={14} />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            Setup in 5 minutes
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={14} />
            Free for 2 users, forever
          </span>
        </div>
      </div>
    </section>
  );
}
