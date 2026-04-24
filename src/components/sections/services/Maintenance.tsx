import React from "react";
import Link from "next/link";
import { Settings, ShieldCheck, Activity, Search, ArrowRight } from "lucide-react";

export function Maintenance() {
  const steps = [
    { title: "System Monitoring", desc: "24/7 performance tracking.", icon: Activity },
    { title: "Scheduled Checks", desc: "Periodic preventive maintenance.", icon: Search },
    { title: "Rapid Repair", desc: "Fast fault detection & resolution.", icon: Settings }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Stability Pillar</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Operation & <br/>Maintenance (O&M)
              </h3>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We ensure the long-term reliability and efficiency of your power infrastructure through proactive maintenance and rapid support systems.
            </p>

            <div className="pt-4 flex flex-col gap-6">
              <Link 
                href="/services/operation-maintenance"
                className="inline-flex items-center gap-2 text-amber-500 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Secure Your Infrastructure <ArrowRight size={18} />
              </Link>
              
              <div className="flex items-center gap-4 p-4 border border-white/10 rounded-2xl bg-white/5">
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <p className="font-bold text-sm leading-snug text-slate-300">
                  Asset longevity focused approach <br/>
                  <span className="text-white">Maximizing uptime & project ROI</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
             <div className="relative grid grid-cols-1 gap-4">
                {steps.map((step, idx) => (
                   <div key={idx} className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:bg-white/10 transition-all">
                      <div className="flex gap-8 items-center">
                         <div className="text-amber-500 group-hover:scale-110 transition-transform">
                            <step.icon size={32} />
                         </div>
                         <div>
                            <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                            <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
