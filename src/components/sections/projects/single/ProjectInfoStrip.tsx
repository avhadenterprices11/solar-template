import React from "react";

interface ProjectInfoStripProps {
  details: { label: string; value: string }[];
}

export function ProjectInfoStrip({ details }: ProjectInfoStripProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-xl shadow-black/5">
      <div className="grid grid-cols-1 gap-8">
        {details.map((detail, index) => (
          <div key={index} className="space-y-1">
             <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest leading-none">
               {detail.label}
             </p>
             <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
               {detail.value}
             </p>
             <div className="h-px w-full bg-slate-50 dark:bg-slate-800 mt-4" />
          </div>
        ))}
        
        {/* Verification Badge */}
        <div className="pt-4">
           <div className="p-4 bg-slate-950 text-white rounded-2xl border border-white/10 text-center">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-500 mb-1">Status</p>
              <p className="text-xs font-bold">Project Fully Commisioned & Verified</p>
           </div>
        </div>
      </div>
    </div>
  );
}
