"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "./Analytics";

// Google Apps Script web app URL (see scripts/lead-capture.gs for setup).
// Each submission adds a row to the Blizz Leads sheet and emails the team.
const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx6dEXMBfXPsOvr7aLcdtDuSB_X_2MuiP7nIze3nNAqfGWBY5Q60X4wm9ezlw40I_y6Kg/exec";

const BUSINESS_TYPES = [
  "Travel agency",
  "Real estate",
  "Education consultancy",
  "Wedding & events",
  "Insurance / financial advisory",
  "Other",
];

const ATTRIBUTION_KEY = "blizz-attribution";
const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

type Attribution = Record<string, string>;

// First-touch attribution: remember where the visitor first came from this session
function readAttribution(): Attribution {
  try {
    const saved = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // Storage blocked — fall through and use the current URL
  }
  const params = new URLSearchParams(location.search);
  const attribution: Attribution = { landing_page: location.pathname, referrer: document.referrer };
  UTM_FIELDS.forEach((key) => {
    const value = params.get(key);
    if (value) attribution[key] = value;
  });
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {}
  return attribution;
}

const inputClass =
  "w-full h-12 px-4 rounded-lg bg-white/10 border border-white/30 text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white backdrop-blur";

export function DemoForm() {
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

    if (!LEADS_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const body = new URLSearchParams();
    ["name", "email", "whatsapp", "business_type"].forEach((key) =>
      body.append(key, String(data.get(key) ?? "").trim()),
    );
    Object.entries(readAttribution()).forEach(([key, value]) => body.append(key, value));
    body.append("page", location.pathname);

    try {
      // Apps Script doesn't send CORS headers, so the response is opaque;
      // a network error is the only failure we can detect.
      await fetch(LEADS_ENDPOINT, { method: "POST", mode: "no-cors", body });
      trackEvent("generate_lead", {
        form: "demo",
        business_type: body.get("business_type"),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 max-w-md mx-auto rounded-xl bg-white/15 border border-white/30 p-6 text-white backdrop-blur">
        <CheckCircle2 size={32} className="mx-auto" />
        <p className="mt-3 text-lg font-semibold">Thanks! We&apos;ll be in touch soon.</p>
        <p className="mt-1 text-sm text-orange-100">
          Expect a WhatsApp message from our team within one working day to
          set up your 15-minute demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 max-w-xl mx-auto grid sm:grid-cols-2 gap-3 text-left"
    >
      <label className="sr-only" htmlFor="demo-name">Your name</label>
      <input id="demo-name" name="name" type="text" placeholder="Your name" autoComplete="name" required className={inputClass} />

      <label className="sr-only" htmlFor="demo-email">Work email</label>
      <input id="demo-email" name="email" type="email" placeholder="Work email" autoComplete="email" required className={inputClass} />

      <label className="sr-only" htmlFor="demo-whatsapp">WhatsApp number</label>
      <input
        id="demo-whatsapp"
        name="whatsapp"
        type="tel"
        placeholder="WhatsApp number"
        autoComplete="tel"
        inputMode="tel"
        pattern="[+0-9 ()-]{10,16}"
        title="Enter a 10-digit mobile number, with or without +91"
        required
        className={inputClass}
      />

      <label className="sr-only" htmlFor="demo-business">Business type</label>
      <select
        id="demo-business"
        name="business_type"
        required
        defaultValue=""
        className={`${inputClass} [&>option]:text-slate-900`}
      >
        <option value="" disabled>Business type</option>
        {BUSINESS_TYPES.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      {/* Honeypot field, hidden from people */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="sm:col-span-2 h-12 px-6 rounded-lg bg-white text-orange-600 font-semibold text-sm hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Get a Demo
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 text-sm text-white text-center">
          Sorry, something went wrong. Please email us at{" "}
          <a href="mailto:hello@blizz.world" className="underline font-semibold">hello@blizz.world</a>.
        </p>
      )}

      <p className="sm:col-span-2 text-xs text-orange-100 text-center">
        By submitting, you agree to be contacted about Blizz and to our{" "}
        <Link href="/terms" className="underline">Terms</Link> and{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
