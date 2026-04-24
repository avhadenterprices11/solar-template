import React from "react";

export function ProjectIntro() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 border-l-4 border-amber-500 pl-8 space-y-4">
             <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">History</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">Project Experience</h3>
          </div>
          <div className="lg:w-2/3 space-y-8">
             <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
               &quot;G&D Brothers has been actively involved in executing and supporting large-scale power and renewable energy projects across various government initiatives and private sector developments.&quot;
             </p>
             <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
               Our work reflects strong execution capability, technical expertise, and a deep-rooted commitment to quality across diverse project environments—from rural solar pump installations to complex industrial substations.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
