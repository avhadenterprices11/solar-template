import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";

export function QuickActions() {
  return (
    <div className="bg-brand-gray rounded-[3rem] border border-brand-gray p-10 space-y-10 relative overflow-hidden group">
      {/* Subtle Visual Accent */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full group-hover:bg-brand-green/10 transition-colors" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 bg-brand-green rounded-full" />
          <h3 className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] leading-none">Response Speed</h3>
        </div>
        <h4 className="text-3xl font-black text-brand-navy italic tracking-tighter leading-tight">Need a <br/> Fast Response?</h4>
      </div>

      <div className="grid grid-cols-1 gap-6 relative z-10">
        <a 
          href="tel:02534518455"
          className="flex items-center gap-6 p-6 bg-white border border-brand-gray rounded-2xl hover:border-brand-green/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group/item"
        >
          <div className="p-4 bg-brand-green text-brand-navy rounded-xl group-hover/item:scale-110 transition-transform">
            <Phone size={24} />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Line</p>
             <p className="text-lg font-black text-brand-navy italic">Call Now</p>
          </div>
          <ArrowRight size={20} className="text-slate-200 group-hover/item:text-brand-green group-hover/item:translate-x-1 transition-all" />
        </a>

        <a 
          href="https://wa.me/910000000000"
          className="flex items-center gap-6 p-6 bg-white border border-brand-gray rounded-2xl hover:border-emerald-500/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group/item"
        >
          <div className="p-4 bg-emerald-500 text-white rounded-xl group-hover/item:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Instant Support</p>
             <p className="text-lg font-black text-brand-navy italic">WhatsApp</p>
          </div>
          <ArrowRight size={20} className="text-slate-200 group-hover/item:text-emerald-500 group-hover/item:translate-x-1 transition-all" />
        </a>

        <Link 
          href="#form"
          className="flex items-center gap-6 p-6 bg-white/50 border border-brand-gray rounded-2xl hover:bg-white hover:shadow-xl transition-all group/item"
        >
          <div className="p-4 bg-brand-navy text-white rounded-xl group-hover/item:scale-110 transition-transform">
            <Clock size={24} />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Availability</p>
             <p className="text-lg font-black text-brand-navy italic tracking-tight">Callback In 30m</p>
          </div>
          <ArrowRight size={20} className="text-slate-200 group-hover/item:text-brand-navy group-hover/item:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
