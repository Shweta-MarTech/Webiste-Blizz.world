import Link from "next/link";
import { CookieSettingsButton } from "./CookieConsent";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
              <span className="font-semibold text-white">
                Blizz
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              The CRM small businesses finish setting up fast. WhatsApp-native, simple, affordable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="hover:text-orange-400 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-orange-400 transition-colors">Pricing</Link></li>
              <li><Link href="/#compare" className="hover:text-orange-400 transition-colors">Compare</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/travel-agency-crm" className="hover:text-orange-400 transition-colors">Travel Agencies</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Event Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-4">
            <p>&copy; 2026 Blizz. All rights reserved.</p>
            <CookieSettingsButton />
          </div>
          <p>Made with ❤️ in India for Indian businesses</p>
        </div>
      </div>
    </footer>
  );
}
