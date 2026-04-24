import React from "react";
import { MoveDown, Zap, Sun, Shield, Settings } from "lucide-react";

export function WhatWeDo() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Header Area */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Mandate</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              What <span className="text-amber-500">We Do</span>
            </h3>
            <div className="hidden lg:block pt-8 text-slate-300 dark:text-slate-800">
                <MoveDown size={64} className="animate-bounce" />
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 space-y-12">
            <div className="prose prose-xl prose-slate dark:prose-invert max-w-none">
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                G&D Brothers provides a complete range of services across electrical EPC, renewable energy, manufacturing, and power consultancy.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pt-6">
                Our integrated approach ensures seamless execution from design to commissioning and beyond. We combine engineering precision with practical on-ground experience to build future-ready energy systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { icon: Zap, title: "EPC Execution", desc: "End-to-end turnkey delivery of infrastructure." },
                { icon: Sun, title: "Renewable Focus", desc: "Scaling solar and sustainable energy plants." },
                { icon: Shield, title: "Manufacturing", desc: "Precision-engineered HT/LT control systems." },
                { icon: Settings, title: "O&M Support", desc: "Long-term reliability and monitoring." }
              ].map((pill, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:border-amber-500/50 transition-all">
                  <div className="p-3 bg-white dark:bg-slate-950 text-amber-500 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <pill.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">{pill.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug">{pill.desc}</p>
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
