import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Activity, Cpu, Gauge, ArrowRight } from "lucide-react";

export function ElectricalEPC() {
  const points = [
    { title: "33kV & 11kV Bay Feeders", icon: Zap },
    { title: "Substation Development (PSS)", icon: Activity },
    { title: "HT & LT Line Execution", icon: Cpu },
    { title: "Switchgear Control Wiring", icon: ShieldCheck },
    { title: "Transformer Augmentation (15 MVA)", icon: Gauge }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual/Icon Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {points.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-black/[0.02] group hover:border-blue-500/50 transition-all ${idx % 2 !== 0 ? 'md:translate-y-6' : ''}`}
                >
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em]">Infrastructure Pillar</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                Electrical EPC Solutions
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              We deliver complete electrical infrastructure solutions, managing everything from design and engineering to installation and commissioning.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-blue-500 text-white rounded-2xl shadow-xl shadow-blue-500/20">
                <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">The G&D Standard</p>
                <p className="font-bold text-lg leading-snug">
                  End-to-end execution with strict adherence to safety and regulatory standards.
                </p>
              </div>
              
              <Link 
                href="/services/electrical-contracting-epc"
                className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Deep-Dive into Electrical EPC <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
