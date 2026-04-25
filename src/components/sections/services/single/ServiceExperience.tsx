import React from "react";
import { FolderCheck, ArrowUpRight } from "lucide-react";

interface ServiceExperienceProps {
  heading: string;
  content?: string;
  list?: string[];
}

export function ServiceExperience({ heading, content, list }: ServiceExperienceProps) {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-20 items-start">
              
              <div className="lg:w-5/12 space-y-10">
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-1 bg-brand-green rounded-full" />
                      <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Validation</h2>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                       {heading}
                    </h3>
                 </div>
                 {content && (
                    <p className="text-xl text-brand-gray0 font-bold leading-tight italic">
                       &quot;{content}&quot;
                    </p>
                 )}
                 <div className="pt-8">
                    <div className="inline-flex items-center gap-4 p-4 bg-brand-gray rounded-2xl border border-brand-gray">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-navy shadow-xl shadow-black/5">
                          <FolderCheck size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Portfolio Scale</p>
                          <p className="text-sm font-black text-brand-navy italic">Active Government Projects</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                 {list?.map((item, index) => (
                    <div key={index} className="group p-10 bg-brand-gray rounded-[3rem] border border-brand-gray flex flex-col justify-between hover:bg-white hover:border-brand-green/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 min-h-[220px]">
                       <div className="flex justify-between items-start">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-300 group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500">
                             <span className="text-xs font-black italic">0{index + 1}</span>
                          </div>
                          <ArrowUpRight size={24} className="text-brand-gray group-hover:text-brand-green transition-colors" />
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-2xl font-black text-brand-navy italic tracking-tighter leading-tight group-hover:text-brand-green transition-colors">
                            {item}
                          </h4>
                          <div className="w-8 h-1 bg-slate-200 group-hover:w-16 group-hover:bg-brand-green transition-all duration-700" />
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
