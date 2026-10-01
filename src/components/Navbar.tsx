"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-lg text-slate-900">
            Blizz
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all glow-orange-sm"
          >
            Get a Demo
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-orange-100/50 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-slate-600 hover:text-orange-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 block text-center py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Get a Demo
          </a>
        </div>
      )}
    </header>
  );
}
