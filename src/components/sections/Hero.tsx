import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden py-12 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Solar and Industrial Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8 md:space-y-10 pt-24 md:pt-40">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] animate-in fade-in slide-in-from-left-4 duration-1000">
            <Zap size={14} className="fill-brand-green" />
            Leading India&apos;s Energy Transformation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] md:leading-[0.85] italic tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Powering <br/>
            <span className="text-brand-green">Infrastructure.</span> <br/>
            Enabling a <br/>
            <span className="text-brand-green">Renewable</span> Future.
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
            <p className="text-base md:text-xl text-brand-gray/80 font-bold leading-tight italic max-w-xl">
              End-to-end Electrical EPC, Solar Solutions, and Power Consulting delivered with precision, safety, and engineering excellence.
            </p>
            
            </div>

          {/* Trust Line */}
          <div className="flex items-center gap-3 text-slate-400 animate-in fade-in duration-700 delay-500">
            <ShieldCheck className="text-brand-green shrink-0" size={18} />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">Working with Government & Industrial Clients across India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-brand-green text-brand-navy px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-brand-green/20 group"
            >
              Get a Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-black text-xs uppercase tracking-[0.4em] hover:text-brand-green transition-colors py-5"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block opacity-20">
        <div className="relative w-64 h-64 border-r-2 border-b-2 border-brand-green/30 rounded-br-3xl" />
      </div>
    </section>
  );
}
