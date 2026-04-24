import React from "react";
import { CheckCircle, Zap } from "lucide-react";

interface ProjectTechnicalDetailsProps {
  scope: string[];
  approach: string[];
}

export function ProjectTechnicalDetails({ scope, approach }: ProjectTechnicalDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Scope Block */}
      <div className="space-y-8">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Scope of Work</h3>
        <div className="space-y-4">
          {scope.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-amber-500/30 transition-all">
               <div className="p-2 bg-white dark:bg-slate-950 text-amber-500 rounded-lg shadow-sm">
                  <CheckCircle size={18} />
               </div>
               <span className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Block */}
      <div className="space-y-8">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Execution Approach</h3>
        <div className="relative space-y-8 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
           {approach.map((step, idx) => (
             <div key={idx} className="relative pl-12 group">
                <div className="absolute left-0 top-0 w-10 h-10 bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-xs font-black text-slate-400 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors z-10">
                   {idx + 1}
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-bold leading-snug pt-2">
                  {step}
                </p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
