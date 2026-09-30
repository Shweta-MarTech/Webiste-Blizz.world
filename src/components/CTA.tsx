import { ArrowRight, Shield, Clock, CreditCard } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to level up your sales?
        </h2>
        <p className="mt-4 text-lg text-orange-100">
          Join hundreds of Indian businesses managing their leads, follow-ups,
          and deals in one WhatsApp-native CRM.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/30 text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white backdrop-blur"
            required
          />
          <button
            type="submit"
            className="h-12 px-6 rounded-lg bg-white text-orange-600 font-semibold text-sm hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Get a Demo
            <ArrowRight size={16} />
          </button>
        </form>

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
