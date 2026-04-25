import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Electrical EPC", href: "/services#electrical" },
    { name: "Solar EPC", href: "/services#solar" },
    { name: "Manufacturing", href: "/services#manufacturing" },
    { name: "Power Consultancy", href: "/services#consultancy" },
  ];

  return (
    <footer className="bg-white border-t border-brand-gray pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column - 4 cols */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-48 h-16 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/G&D Brothers Logo.png"
                  alt="G&D Brothers Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="text-xl text-brand-gray0 font-bold leading-tight italic max-w-sm">
              &quot;Powering industrial progress through specialized electrical infrastructure and renewable energy integration.&quot;
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-green" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-brand-green" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pan-India Presence</span>
              </div>
            </div>
          </div>

          {/* Links Grid - 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Specializations</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className="text-sm font-black text-slate-400 hover:text-brand-navy transition-all flex items-center justify-between group"
                    >
                      {service.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Headquarters</h4>
              <ul className="space-y-6">
                <li className="space-y-2">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Address</p>
                  <p className="text-sm font-bold text-brand-gray0 leading-relaxed italic">
                    02, Krishna Appt., Motwani Road<br />
                    Nashik Road, Nashik - 422101
                  </p>
                </li>
                <li className="space-y-2">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Direct</p>
                  <p className="text-sm font-bold text-brand-navy italic">0253 4518455</p>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Quick Connect</h4>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/contact#form"
                  className="inline-flex items-center justify-between px-6 py-4 bg-brand-navy text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-green hover:text-brand-navy transition-all duration-500 group"
                >
                  Request Callback
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://wa.me/9102534518455" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-6 py-4 bg-brand-gray text-brand-navy border border-brand-gray rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-500 group"
                >
                  WhatsApp Support
                  <MessageSquare size={14} className="text-emerald-500 group-hover:text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-gray flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              © {currentYear} G&D Brothers Solar & Electrical.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-navy transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-navy transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
             <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">Engineering The Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
