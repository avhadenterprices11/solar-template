import React from "react";
import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-hero.png"
          alt="G&D Brothers Services Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] animate-in fade-in slide-in-from-top-4 duration-700">
            Comprehensive <br/>
            <span className="text-amber-500">Power & Energy</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            From electrical infrastructure to renewable energy systems, we deliver end-to-end solutions engineered for performance, reliability, and long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}
