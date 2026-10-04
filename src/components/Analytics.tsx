"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "./CookieConsent";

// GA4 Measurement ID from analytics.google.com → Admin → Data streams.
// Leave empty to disable GA4.
const GA_ID = "G-J3EWK0CWDX";

// Microsoft Clarity Project ID from clarity.microsoft.com → Settings → Overview.
// Leave empty to disable Clarity.
const CLARITY_ID = "ysfkeznmda";

// Production only, so local testing doesn't pollute the reports
const ACTIVE = Boolean(GA_ID || CLARITY_ID) && process.env.NODE_ENV === "production";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

// Safe to call anywhere: does nothing until the visitor accepts analytics.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
}

function setGaDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = disabled;
}

// Visitor withdrew consent: stop sending and remove GA cookies
function revokeAnalytics() {
  setGaDisabled(true);
  // Tells Clarity to stop and erase its cookies
  window.clarity?.("consent", false);
  const domain = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    }
  });
}

function subscribe(callback: () => void) {
  return onConsentChange((value) => {
    if (value === "denied") revokeAnalytics();
    else {
      setGaDisabled(false);
      window.clarity?.("consent");
    }
    callback();
  });
}

export function Analytics() {
  const granted = useSyncExternalStore(
    subscribe,
    () => ACTIVE && getConsent() === "granted",
    () => false,
  );

  useEffect(() => {
    if (!granted) return;
    // Elements marked data-track="event_name" send that event when clicked
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>("[data-track]");
      if (!el?.dataset.track) return;
      trackEvent(el.dataset.track, {
        label: el.dataset.trackLabel ?? el.textContent?.trim(),
        page: location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [granted]);

  if (!granted) return null;

  return (
    <>
      {GA_ID && <GoogleAnalytics />}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");
window.clarity("consent");`}
        </Script>
      )}
    </>
  );
}

function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
