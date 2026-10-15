import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSalesForm } from "@/components/ContactSalesForm";
import { socialMeta } from "@/lib/seo";

const description =
  "Talk to the Blizz team about pricing, moving from Excel or another CRM, and setting up WhatsApp-first selling for your team in India or the GCC.";

export const metadata: Metadata = {
  title: "Contact Sales | Blizz",
  description,
  alternates: { canonical: "/contact-sales" },
  ...socialMeta({ title: "Contact the Blizz sales team", description, path: "/contact-sales" }),
};

const points = [
  "Pricing for your team size, including yearly billing",
  "Moving your leads from Excel, Zoho or another CRM",
  "How Blizz fits your industry and the way your team sells on WhatsApp",
  "A free setup call once you decide to go ahead",
];

export default function ContactSalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 bg-orange-50/30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-8">
            <p className="text-sm font-medium text-orange-600 mb-2 tracking-widest uppercase">Contact sales</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Get in touch with our sales team
            </h1>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Tell us a little about your business and we&apos;ll reply within one working day, on WhatsApp or
              email. You&apos;ll talk to the people who build Blizz, not a call centre.
            </p>
            <p className="mt-8 text-sm font-semibold text-slate-900">We can help with:</p>
            <ul className="mt-3 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-600">
                  <Check size={18} className="mt-0.5 text-green-500 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Prefer email? Write to{" "}
              <a href="mailto:hello@blizz.world" className="text-orange-600 font-medium hover:underline">
                hello@blizz.world
              </a>
              .
            </p>
          </div>
          <ContactSalesForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
