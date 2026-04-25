import React from "react";
import { Check, Star, ArrowUpRight } from "lucide-react";

interface ServiceWhyUsProps {
  heading: string;
  points: string[];
}

export function ServiceWhyUs({ heading, points }: ServiceWhyUsProps) {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-navy rounded-[4rem] p-12 md:p-32 overflow-hidden relative">
          {/* Architectural Background */}
          <div className="absolute top-0 right-0 p-24 text-white/[0.02] font-black text-[20rem] pointer-events-none select-none leading-none tracking-tighter">
             G&D
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
             <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-1 bg-brand-green rounded-full" />
                     <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Differentiation</h2>
                   </div>
                   <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[0.9]">
                     {heading}
                   </h3>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                         <div key={i} className="w-14 h-14 rounded-full border-4 border-brand-navy bg-slate-800 flex items-center justify-center text-brand-green shadow-xl">
                            <Star size={18} fill="currentColor" />
                         </div>
                      ))}
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Elite Rating</p>
                     <p className="text-sm font-black text-white italic">Unmatched Quality Scale</p>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                   <p className="text-slate-400 text-lg font-bold leading-tight italic">
                      Setting the benchmark for electrical infrastructure with a focus on safety and precision.
                   </p>
                </div>
             </div>

             <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {points.slice(0, 4).map((point, index) => (
                   <div key={index} className="flex flex-col justify-between p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-green/30 transition-all duration-700 group min-h-[250px]">
                      <div className="flex justify-between items-start">
                         <div className="w-12 h-12 bg-brand-green text-brand-navy rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-brand-green/20">
                            <Check size={24} />
                         </div>
                         <ArrowUpRight size={20} className="text-white/10 group-hover:text-brand-green transition-colors" />
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-2xl font-black text-white italic tracking-tighter leading-tight group-hover:text-brand-green transition-colors">
                           {point}
                         </h4>
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Quality Pillar 0{index + 1}</p>
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
