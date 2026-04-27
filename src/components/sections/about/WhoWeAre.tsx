import React from "react";
import Image from "next/image";
import { Shield, Zap, Target, Settings } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="py-24 bg-white dark:bg-brand-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image/Visual Side */}
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.png"
                  alt="Industrial Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-slate-900 rounded-3xl space-y-2">
                  <p className="text-3xl font-black text-brand-green">33kV</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Specialization</p>
                </div>
                <div className="p-8 bg-brand-green rounded-3xl space-y-2">
                  <p className="text-3xl font-black text-brand-navy">EPC</p>
                  <p className="text-[10px] font-bold text-brand-navy/60 uppercase tracking-widest">Full-Cycle Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em]">The Identity</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tightdecoration-brand-green/30 underline-offset-8">
                Who We Are
              </h3>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
              <p>
                G&D Brothers is a trusted name in Electrical Contracting, Manufacturing, Power Consulting, and Renewable Energy EPC solutions. We specialize in delivering end-to-end turnkey projects with a strong focus on quality, safety, and timely execution.
              </p>
              <p>
                With deep expertise in 33kV & 11kV systems, substations, transmission infrastructure, and solar power solutions, we enable industries and government bodies to build efficient, scalable, and future-ready power systems.
              </p>
              <p className="text-base">
                Our approach combines engineering precision with practical execution, ensuring every project meets the highest standards of performance and compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { icon: Shield, text: "Quality Driven" },
                { icon: Zap, text: "Future Ready" },
                { icon: Target, text: "Precision First" },
                { icon: Settings, text: "Expert Systems" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-brand-gray dark:bg-slate-900 text-brand-green rounded-lg border border-brand-gray dark:border-slate-800">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
