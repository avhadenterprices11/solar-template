import React from "react";
import { Phone, MessageCircle, Clock } from "lucide-react";

export function QuickActions() {
  return (
    <div className="bg-slate-950 rounded-3xl border border-white/10 p-8 space-y-8 relative overflow-hidden group">
      {/* Visual Accent */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full group-hover:bg-amber-500/20 transition-colors" />
      
      <div className="relative z-10 space-y-4">
        <h3 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">Immediate Assistance</h3>
        <h4 className="text-2xl font-black text-white italic tracking-tighter">Need a Fast Response?</h4>
      </div>

      <div className="grid grid-cols-1 gap-4 relative z-10">
        <a 
          href="tel:02534518455"
          className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-amber-500 hover:text-slate-950 transition-all group"
        >
          <div className="p-3 bg-white/5 rounded-xl group-hover:bg-slate-950/20">
            <Phone size={20} />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black uppercase tracking-widest leading-none opacity-60">Call Now</p>
             <p className="font-black italic">0253 4518455</p>
          </div>
        </a>

        <a 
          href="https://wa.me/910000000000" // Placeholder WhatsApp
          className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all group"
        >
          <div className="p-3 bg-white/5 rounded-xl group-hover:bg-slate-950/20">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black uppercase tracking-widest leading-none opacity-60">WhatsApp Chat</p>
             <p className="font-black italic">Text Our Team</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl">
          <div className="p-3 bg-white/5 rounded-xl">
            <Clock size={20} className="text-amber-500" />
          </div>
          <div className="flex-1">
             <p className="text-[10px] font-black uppercase tracking-widest leading-none opacity-60">Callback Request</p>
             <p className="font-black italic">Within 30 Mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
