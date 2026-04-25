import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Zap, ShieldCheck, Activity, Cpu, Gauge, ArrowRight, ArrowUpRight } from "lucide-react";

export function ElectricalEPC() {
  const points = [
    { title: "33kV & 11kV Bay Feeders", icon: Zap, detail: "High-voltage distribution infrastructure." },
    { title: "Substation Development", icon: Activity, detail: "Turnkey PSS design & execution." },
    { title: "HT & LT Line Execution", icon: Cpu, detail: "Transmission network engineering." },
    { title: "Switchgear Control", icon: ShieldCheck, detail: "Precision wiring & automation." },
    { title: "Transformer Augmentation", icon: Gauge, detail: "Capacity upgrades up to 15 MVA." }
  ];

  return (
    <section id="electrical" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Header & Content Column */}
          <div className="lg:w-5/12 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-brand-green rounded-full" />
                <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Core Engineering</h2>
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                Electrical <br/> <span className="text-brand-green underline decoration-brand-gray underline-offset-[16px]">EPC.</span>
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-brand-gray0 font-bold leading-tight italic">
                &quot;Delivering end-to-end power infrastructure solutions, from strategic engineering design to final project commissioning.&quot;
              </p>
              
              <div className="p-8 bg-brand-gray rounded-[2.5rem] border border-brand-gray space-y-4">
                <p className="text-[10px] font-black text-brand-green uppercase tracking-widest">The G&D Standard</p>
                <p className="text-brand-navy font-bold leading-relaxed italic text-lg">
                  We maintain a perfect safety record across utility-scale projects, adhering to strict international grid standards and regulatory compliance.
                </p>
              </div>

              <Link 
                href="/services/electrical-contracting-epc"
                className="inline-flex items-center gap-4 text-brand-navy font-black uppercase tracking-[0.3em] text-xs hover:gap-6 transition-all group"
              >
                Explore Specifications <ArrowRight size={24} className="text-brand-green group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* Points Grid Column */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {points.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "group relative p-12 bg-brand-navy rounded-[4rem] overflow-hidden border border-white/5 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]",
                  idx % 2 !== 0 ? 'md:mt-20' : ''
                )}
              >
                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(103,191,71,0.05),transparent_50%)]" />

                <div className="relative z-10 space-y-16">
                   <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-white/5 text-brand-green rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-2xl shadow-black/20 group-hover:-rotate-6">
                         <item.icon size={32} />
                      </div>
                      <ArrowUpRight size={24} className="text-white/10 group-hover:text-brand-green transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                   </div>
                   
                   <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="w-8 h-1 bg-brand-green rounded-full group-hover:w-16 transition-all duration-700" />
                        <h4 className="text-3xl font-black text-white leading-[1.1] italic tracking-tighter group-hover:text-brand-green transition-colors duration-500">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-slate-400 font-bold leading-relaxed italic text-sm group-hover:text-slate-300 transition-colors">
                        &quot;{item.detail}&quot;
                      </p>
                   </div>
                   
                   <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-brand-green transition-colors">Technical Pillar 0{idx + 1}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
