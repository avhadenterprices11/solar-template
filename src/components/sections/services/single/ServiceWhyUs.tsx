import React from "react";
import { Check } from "lucide-react";

interface ServiceWhyUsProps {
  heading: string;
  points: string[];
}

export function ServiceWhyUs({ heading, points }: ServiceWhyUsProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-9xl pointer-events-none select-none">
             G&D
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
             <div className="space-y-6">
                <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Differentiation</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  {heading}
                </h3>
             </div>

             <div className="space-y-4">
                {points.map((point, index) => (
                   <div key={index} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                      <div className="bg-amber-500 text-slate-950 rounded-full p-1 group-hover:scale-110 transition-transform">
                         <Check size={16} />
                      </div>
                      <span className="text-lg font-bold text-white tracking-tight">{point}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
