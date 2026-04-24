import React from "react";
import Link from "next/link";
import { PenTool, LineChart, Landmark, Info, ArrowRight } from "lucide-react";

export function Consultancy() {
  const items = [
    {
      title: "Load Studies & Design",
      desc: "Comprehensive power system design and initial load analysis for stability.",
      icon: LineChart
    },
    {
      title: "Energy Optimization",
      desc: "Feasibility analysis to improve system efficiency and reduce losses.",
      icon: PenTool
    },
    {
      title: "Regulatory Guidance",
      desc: "Expert liaisoning and support for government approvals and compliance.",
      icon: Landmark
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Strategic Pillar</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Power Consulting Services
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              We provide expert advisory services to optimize system performance, improve efficiency, and ensure regulatory compliance through every stage.
            </p>

            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 text-amber-500 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors border border-slate-100 dark:border-slate-800 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/services/power-consulting"
              className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
            >
              Consult with our Engineers <ArrowRight size={18} />
            </Link>
          </div>

          {/* Impact Side */}
          <div className="relative p-12 bg-slate-900 rounded-[3rem]">
            <div className="absolute top-0 right-0 p-8 text-amber-500/10">
                <Info size={160} />
            </div>
            <div className="relative z-10 space-y-8">
               <blockquote className="text-3xl font-black text-white leading-tight">
                  &quot;Strategic insights for <span className="text-amber-500">smarter</span> and more efficient power systems.&quot;
               </blockquote>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-amber-500" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Engineering Intelligence</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
