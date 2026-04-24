import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ServiceScopeProps {
  heading: string;
  points: string[];
}

export function ServiceScope({ heading, points }: ServiceScopeProps) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
             <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Mandate</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{heading}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {points.map((point, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                   <div className="mt-1 text-amber-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                   </div>
                   <p className="font-bold text-slate-800 dark:text-slate-200">{point}</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
