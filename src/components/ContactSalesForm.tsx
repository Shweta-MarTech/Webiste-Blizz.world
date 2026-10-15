"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "./Analytics";
import { BUSINESS_TYPES, LEADS_ENDPOINT, readAttribution } from "./DemoForm";

const COUNTRIES = ["India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Other"];
const TEAM_SIZES = ["1–2", "3–5", "6–15", "16–30", "More than 30"];
const FIELDS = ["name", "email", "whatsapp", "country", "company", "team_size", "business_type", "message"];

const inputClass =
  "w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export function ContactSalesForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    readAttribution();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, people don't
    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const body = new URLSearchParams();
    FIELDS.forEach((key) => body.append(key, String(data.get(key) ?? "").trim()));
    body.append("form", "Contact sales");
    Object.entries(readAttribution()).forEach(([key, value]) => body.append(key, value));
    body.append("page", location.pathname);

    try {
      // Apps Script doesn't send CORS headers, so the response is opaque;
      // a network error is the only failure we can detect.
      await fetch(LEADS_ENDPOINT, { method: "POST", mode: "no-cors", body });
      trackEvent("generate_lead", {
        form: "contact_sales",
        business_type: body.get("business_type"),
        team_size: body.get("team_size"),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-8 text-center">
        <CheckCircle2 size={36} className="mx-auto text-green-500" />
        <p className="mt-3 text-lg font-semibold text-slate-900">Thanks! We&apos;ve got your message.</p>
        <p className="mt-1 text-sm text-slate-500">
          Someone from our team will reply on WhatsApp or email within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8 grid sm:grid-cols-2 gap-4"
    >
      <h2 className="sm:col-span-2 text-xl font-bold text-slate-900">Contact sales about Blizz</h2>

      <div>
        <label className={labelClass} htmlFor="cs-name">Name *</label>
        <input id="cs-name" name="name" type="text" autoComplete="name" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="cs-email">Work email *</label>
        <input id="cs-email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="cs-whatsapp">WhatsApp number *</label>
        <input
          id="cs-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 98765 43210"
          pattern="[+0-9 ()-]{8,18}"
          title="Enter your number with country code, e.g. +91 or +971"
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="cs-country">Country *</label>
        <select id="cs-country" name="country" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select country</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="cs-company">Company name *</label>
        <input id="cs-company" name="company" type="text" autoComplete="organization" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="cs-team">Team size *</label>
        <select id="cs-team" name="team_size" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select team size</option>
          {TEAM_SIZES.map((t) => (
            <option key={t} value={t}>{t} people</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="cs-business">Business type *</label>
        <select id="cs-business" name="business_type" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select business type</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="cs-message">How can we help?</label>
        <textarea
          id="cs-message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="E.g. we're 8 agents moving from Excel and want WhatsApp follow-ups"
          className={`${inputClass} h-auto py-2.5`}
        />
      </div>

      {/* Honeypot field, hidden from people */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="sm:col-span-2 h-12 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Contact Sales
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-600 text-center">
          Sorry, something went wrong. Please email us at{" "}
          <a href="mailto:hello@blizz.world" className="underline font-semibold">hello@blizz.world</a>.
        </p>
      )}

      <p className="sm:col-span-2 text-xs text-slate-400 text-center">
        By submitting, you agree to be contacted about Blizz and to our{" "}
        <Link href="/terms" className="underline">Terms</Link> and{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
