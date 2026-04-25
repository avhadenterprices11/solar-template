import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.png"
          alt="G&D Brothers Engineering Excellence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-700">
            About the Company
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
            Building Reliable Power Infrastructure for a <span className="text-brand-green text-glow">Sustainable Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            Engineering excellence across Electrical EPC, Renewable Energy, and Power Systems with a commitment to precision, safety, and long-term impact.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 opacity-50">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover Our Story</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-green to-transparent" />
      </div>
    </section>
  );
}
