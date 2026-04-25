"use client";

import React from "react";
import { ShieldCheck, Award, FileText, Lock, CheckCircle, Verified } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  {
    title: "MNRE Affiliated",
    subtitle: "Govt. of India",
    icon: Award,
    description: "Official affiliation with the Ministry of New and Renewable Energy."
  },
  {
    title: "Licensed Contractor",
    subtitle: "Class A Licensed",
    icon: FileText,
    description: "Authorized for large-scale electrical infrastructure execution."
  },
  {
    title: "IE Standards",
    subtitle: "Full Compliance",
    icon: ShieldCheck,
    description: "Strict adherence to Indian Electricity Rules & Regulations."
  },
  {
    title: "Safety First",
    subtitle: "Zero-Harm Focus",
    icon: Lock,
    description: "Rigorous safety protocols for high-voltage environments."
  }
];

export function Accreditations() {
  return (
    <section className="relative h-fit pb-10 flex items-center bg-white selection:bg-amber-100 overflow-hidden">
      {/* Structural Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Narrative Column */}
          <div className="lg:w-1/3 space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <Verified className="text-brand-green" size={18} />
                <span className="text-sm font-black text-brand-green uppercase tracking-[0.3em]">Compliance & Safety</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black text-brand-navy leading-[1.05] italic tracking-tighter">
                  A Foundation <br/> Of <span className="text-brand-green underline decoration-brand-gray underline-offset-8">Trust.</span>
                </h2>
                <p className="text-brand-gray0 font-medium text-lg leading-relaxed max-w-sm">
                  G&D Brothers operates within a rigorous framework of national certifications and safety protocols.
                </p>
              </div>
            </div>

            <div className="bg-brand-gray p-8 rounded-[2rem] border border-brand-gray space-y-4">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle size={14} className="text-brand-green" />
                 Operational Guarantee
               </p>
               <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                 &quot;We don&apos;t just build projects; we maintain the highest standards of safety and compliance to ensure long-term operational excellence.&quot;
               </p>
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={badge.title} 
                  className="group relative p-10 bg-white border border-brand-gray rounded-[2.5rem] transition-all duration-500 hover:border-brand-green/50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[50px] group-hover:bg-brand-green/10 transition-colors" />

                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-brand-navy text-white dark:text-brand-navy dark:bg-white rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-brand-navy shadow-xl shadow-brand-navy/20">
                        <Icon size={28} />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="text-[10px] font-black text-brand-green bg-amber-50 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                           <Verified size={10} />
                           Verified
                         </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-1">{badge.subtitle}</p>
                        <h4 className="text-2xl font-black text-brand-navy italic tracking-tighter group-hover:text-brand-green transition-colors">{badge.title}</h4>
                      </div>
                      <p className="text-sm text-brand-gray0 font-medium leading-relaxed group-hover:text-slate-600">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
