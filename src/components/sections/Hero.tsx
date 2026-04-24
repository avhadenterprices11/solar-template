import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Solar and Industrial Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-left-4 duration-700">
            <Zap size={14} />
            Leading India&apos;s Energy Transformation
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
              Powering <span className="text-amber-500">Infrastructure.</span><br />
              Enabling a <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">Renewable Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
              End-to-end Electrical EPC, Solar Energy Solutions, and Power Consulting delivered with precision, safety, and engineering excellence.
            </p>
          </div>

          {/* Trust Line */}
          <div className="flex items-center gap-3 text-slate-400 animate-in fade-in duration-700 delay-300">
            <ShieldCheck className="text-amber-500" size={20} />
            <span className="text-sm font-medium tracking-wide">Working with Government & Industrial Clients across India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all hover:gap-3 group shadow-xl shadow-amber-500/20"
            >
              Get a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Industrial Accents */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block opacity-20">
        <div className="relative w-64 h-64 border-r-2 border-b-2 border-amber-500/30 rounded-br-3xl" />
      </div>
    </section>
  );
}
