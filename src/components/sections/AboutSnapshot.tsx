"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSnapshot() {
  return (
    <section className="relative h-fit pb-24 flex items-center bg-white selection:bg-amber-100 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side - Left */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-brand-green" />
                <span className="text-sm font-black text-brand-green uppercase tracking-[0.3em]">Corporate Profile</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-black text-brand-navy leading-[1.05] italic tracking-tighter">
                  Engineering <br/> <span className="text-brand-green underline decoration-brand-gray underline-offset-8">Excellence</span> <br/> Since 2011.
                </h2>
                <h3 className="text-xl font-bold text-slate-400 italic tracking-tight">
                  Trusted Partner in Power & Energy Infrastructure.
                </h3>
              </div>
            </div>
            
            <div className="space-y-8 max-w-xl">
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  G&D Brothers is a leading name in <span className="text-brand-navy font-bold">Electrical Contracting, Manufacturing, and Renewable Energy.</span> We deliver end-to-end turnkey projects with a strong focus on precision, safety, and timely execution.
                </p>
                <p>
                  With expertise in 33kV & 11kV systems, substations, and solar infrastructure, we enable reliable and future-ready power solutions across India.
                </p>
              </div>

              {/* Precise Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-brand-gray">
                {[
                  "Electrical Contracting & EPC",
                  "Solar Power Solutions",
                  "Manufacturing & Engineering",
                  "Turnkey Project Delivery"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-brand-gray flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-brand-gray0 group-hover:text-brand-navy transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-2xl font-black hover:bg-brand-green hover:text-brand-navy transition-all hover:gap-5 shadow-2xl shadow-brand-navy/20 group"
              >
                Know More
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
            {/* Main Image Frame */}
            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <Image
                src="/images/about-snapshot.png"
                alt="Engineering Precision"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Glass Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Floating Stats Badge - Posh Style */}
            <div className="absolute -bottom-10 left-10 md:bottom-12 md:-left-12 bg-white p-10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-brand-gray space-y-3 animate-bounce-subtle">
               <div className="flex items-baseline gap-1">
                 <span className="text-6xl font-black text-brand-navy italic tracking-tighter">15</span>
                 <span className="text-3xl font-black text-brand-green tracking-tighter">+</span>
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none">Industry Status</p>
                 <p className="text-sm font-black text-brand-navy uppercase tracking-widest leading-tight">
                   Years of<br />Excellence
                 </p>
               </div>
               {/* Decorative dots */}
               <div className="flex gap-1 pt-2">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className="w-1 h-1 rounded-full bg-brand-green/30" />
                 ))}
               </div>
            </div>

            {/* Grid Pattern Behind */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
