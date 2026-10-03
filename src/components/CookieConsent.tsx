"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Cookie } from "lucide-react";

export type Consent = "granted" | "denied";

const STORAGE_KEY = "blizz-cookie-consent";
const CHANGE_EVENT = "blizz-consent-change";
const OPEN_EVENT = "blizz-open-cookie-settings";

// Analytics scripts (GA4, Clarity) must check this before loading,
// and listen for CHANGE_EVENT to start once a visitor accepts.
export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked (private mode etc.) — choice lasts for this page view only
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

export function onConsentChange(callback: (value: Consent) => void) {
  const handler = (e: Event) => callback((e as CustomEvent<Consent>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function CookieConsent() {
  // "pending" on the server so the banner never flashes before we read storage
  const consent = useSyncExternalStore(
    subscribe,
    () => getConsent() ?? "unset",
    () => "pending",
  );
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (consent === "pending" || (consent !== "unset" && !reopened)) return null;

  const choose = (value: Consent) => {
    saveConsent(value);
    setReopened(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white border border-orange-100 rounded-2xl shadow-2xl shadow-slate-900/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-9 h-9 shrink-0 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
            <Cookie size={18} />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            We use cookies to understand how visitors use Blizz and to improve
            our website. Analytics only run if you accept. You can change your
            choice anytime from <span className="font-medium text-slate-900">Cookie Settings</span> in the footer.{" "}
            <a href="/privacy" className="font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex gap-2 sm:shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 sm:flex-none h-10 px-5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 sm:flex-none h-10 px-5 rounded-lg bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="hover:text-orange-400 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
