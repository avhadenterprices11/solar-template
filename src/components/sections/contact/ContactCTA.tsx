import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-1 bg-brand-green rounded-full" />
            <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Final Step</span>
            <div className="w-12 h-1 bg-brand-green rounded-full" />
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
            Let&apos;s Discuss Your <br/> <span className="text-brand-green [16px]">Project.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brand-gray0 font-bold max-w-2xl mx-auto leading-tight italic">
            Share your requirements and our team will get back with the right engineering solution for your infrastructure needs.
          </p>
          
          <div className="pt-10">
            <Link 
              href="/contact#form" 
              className="inline-flex items-center gap-4 px-16 py-6 bg-brand-navy text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-green hover:text-brand-navy transition-all duration-500 shadow-2xl shadow-black/10 group"
            >
              Get a Quote
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
