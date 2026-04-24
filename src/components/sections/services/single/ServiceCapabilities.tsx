import React from "react";
import { ShieldCheck, Zap, Activity, Target, Settings, Layers } from "lucide-react";

interface ServiceCapabilitiesProps {
  heading: string;
  points: string[];
}

export function ServiceCapabilities({ heading, points }: ServiceCapabilitiesProps) {
  const icons = [ShieldCheck, Zap, Target, Activity, Settings, Layers];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Header Side */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Excellence Defined</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {heading}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
               Leveraging deep domain expertise to deliver robust, high-performance infrastructure.
            </p>
          </div>

          {/* Grid Side */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
             {points.map((point, index) => {
                const Icon = icons[index % icons.length];
                return (
                   <div key={index} className="flex gap-6 items-start">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900 text-amber-500 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                         <Icon size={24} />
                      </div>
                      <div className="space-y-1">
                         <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{point}</h4>
                         <div className="w-8 h-1 bg-amber-500/20" />
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
