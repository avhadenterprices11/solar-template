import React from "react";
import Image from "next/image";

export function ProjectHero() {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Background with Dark Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-hero.png"
          alt="G&D Projects Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-700">
            Portfolio of Excellence
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight animate-in fade-in slide-in-from-top-4 duration-700 delay-100 italic">
            Our Projects
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-medium">
            Delivering reliable power infrastructure and renewable energy solutions across government and private sectors.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
         <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
}
