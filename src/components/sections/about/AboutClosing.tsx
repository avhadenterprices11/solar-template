import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

export function AboutClosing() {
  return (
    <section className="relative h-auto lg:h-[70vh] flex items-center bg-white selection:bg-brand-gray overflow-hidden border-t border-brand-gray/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Statement Side */}
          <div className="py-20 lg:py-24 px-6 lg:px-20 space-y-10 lg:space-y-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-gray/30">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-brand-green rounded-full" />
                <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Final Statement</h2>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                Powering <br/> <span className="text-brand-green underline decoration-brand-gray underline-offset-[12px]">Innovation.</span>
              </h3>
            </div>
            <div className="space-y-6 lg:space-y-8 text-brand-gray0 font-bold text-lg lg:text-xl leading-tight italic max-w-lg border-l-4 border-brand-green pl-6 lg:pl-8 py-2">
              <p>
                &quot;At G&D Brothers, we are committed to building infrastructure that supports growth, sustainability, and technical reliability.&quot;
              </p>
              <p className="text-slate-400 text-base lg:text-lg">
                Every project reflects our dedication to engineering excellence and our vision for the nation’s energy future.
              </p>
            </div>
          </div>

          {/* CTA Side */}
          <div className="bg-brand-navy p-10 lg:p-24 flex flex-col justify-center space-y-10 lg:space-y-12 relative group overflow-hidden">
            {/* Background Architectural Ornament */}
            <div className="absolute -bottom-10 -right-10 lg:-bottom-20 lg:-right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12">
              <Globe className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] text-white" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Project Inquiry</p>
                <h4 className="text-4xl sm:text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none">
                  Partner <br/>With Us.
                </h4>
              </div>
              
              <p className="text-slate-400 font-bold italic text-base lg:text-lg max-w-sm">
                Let’s build efficient, reliable, and future-ready power solutions together.
              </p>

              <div className="pt-6 lg:pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full lg:w-auto lg:min-w-[300px] bg-brand-green text-brand-navy px-8 lg:px-10 py-5 lg:py-6 rounded-[2rem] lg:rounded-3xl font-black text-xs lg:text-sm uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-2xl group/btn"
                >
                  Contact Us
                  <ArrowUpRight size={24} className="group-hover/btn:rotate-45 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[120px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
