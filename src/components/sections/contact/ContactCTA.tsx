import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-tight">
            Let’s Discuss Your <span className="text-amber-500">Project.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Share your requirements and our team will get back with the right engineering solution for your infrastructure needs.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact#form" 
              className="inline-flex items-center gap-3 px-12 py-5 bg-amber-500 text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 group"
            >
              Get a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
