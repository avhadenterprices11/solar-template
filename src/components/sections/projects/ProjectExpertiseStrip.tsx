import React from "react";
import { projectExpertise } from "@/data/projects";

export function ProjectExpertiseStrip() {
  return (
    <section className="py-24 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Core Domains</h2>
          <h3 className="text-4xl font-black text-white italic">Project Expertise</h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
           {projectExpertise.map((item, index) => (
             <div 
               key={index} 
               className="px-10 py-6 bg-white/[0.03] border border-white/10 rounded-full text-white text-lg lg:text-xl font-black uppercase tracking-tighter whitespace-nowrap hover:bg-brand-green hover:text-brand-navy transition-all cursor-default"
             >
               {item}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
