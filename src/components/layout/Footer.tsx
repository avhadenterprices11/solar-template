import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <span className="font-bold text-xl tracking-tighter text-slate-900 dark:text-white">
                G&D <span className="text-amber-500">Brothers</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Powering Infrastructure. Enabling a Renewable Future. Leading Electrical EPC and Solar Energy solutions provider across India.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">About Us</Link>
              <Link href="/services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Services</Link>
              <Link href="/projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Projects</Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Electrical EPC", href: "/services#electrical" },
                { name: "Solar EPC", href: "/services#solar" },
                { name: "Manufacturing", href: "/services#manufacturing" },
                { name: "Power Consultancy", href: "/services#consultancy" },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    {service.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  02, Krishna Appt., Motwani Road<br />
                  Nashik Road, Nashik - 422101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-400">0253 4518455</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-400">info@gdbros.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Quick Action</h4>
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors">
                Request Callback
              </button>
              <button className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                <MessageSquare size={18} className="text-green-500" />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-500">
              © {currentYear} G&D Brothers. All rights reserved.
            </p>
            <span className="text-xs text-amber-500 font-medium italic">Fueling Future</span>
          </div>
          <div className="flex items-center gap-8 text-xs text-slate-500 dark:text-slate-500">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
