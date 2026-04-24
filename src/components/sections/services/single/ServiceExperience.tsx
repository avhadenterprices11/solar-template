import React from "react";
import { FolderCheck } from "lucide-react";

interface ServiceExperienceProps {
  heading: string;
  content?: string;
  list?: string[];
}

export function ServiceExperience({ heading, content, list }: ServiceExperienceProps) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-950 rounded-[3rem] p-12 md:p-20 shadow-xl shadow-black/[0.02] border border-slate-100 dark:border-slate-800">
           <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-4">
                 <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-950 mb-6">
                    <FolderCheck size={32} />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {heading}
                 </h3>
                 {content && (
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                       {content}
                    </p>
                 )}
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {list?.map((item, index) => (
                    <div key={index} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-amber-500/50 transition-colors">
                       <span className="font-bold text-slate-800 dark:text-slate-200">{item}</span>
                       <div className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
