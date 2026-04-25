import React from "react";
import { cn } from "@/lib/utils";

export function ContactHero() {
  return (
    <section className="relative pt-24 pb-12 bg-white overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gray rounded-full translate-x-1/3 -translate-y-1/3 -z-0" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-green/5 blur-[100px] rounded-full -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="w-12 h-1 bg-brand-green rounded-full" />
            <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Connect With Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy italic tracking-tighter leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Get in <br/> <span className="text-brand-green underline decoration-brand-gray underline-offset-[12px]">Touch.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <p className="text-lg md:text-xl text-brand-gray0 font-bold leading-tight max-w-xl italic">
              Connect with us for reliable electrical, solar, and power solutions tailored to your project needs. We&apos;re here to power your vision.
            </p>
            
            <div className="hidden md:block pt-4">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] writing-vertical-rl rotate-180">
                G&D BROTHERS EST. 2014
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-t from-brand-green to-transparent hidden lg:block" />
    </section>
  );
}
