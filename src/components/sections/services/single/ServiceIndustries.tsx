import React from "react";
import { Building2, Landmark, Zap, Factory } from "lucide-react";

interface ServiceIndustriesProps {
  heading: string;
  points: string[];
}

export function ServiceIndustries({ heading, points }: ServiceIndustriesProps) {
  const icons = [Building2, Landmark, Zap, Factory];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
             <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Sectors</h2>
             <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
               {heading}
             </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {points.map((point, index) => {
              const Icon = icons[index % icons.length];
              return (
                 <div key={index} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center text-amber-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                       <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{point}</h4>
                 </div>
              );
           })}
        </div>
      </div>
    </section>
  );
}
