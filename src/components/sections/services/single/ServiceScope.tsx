import React from "react";
import { ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Offering } from "@/data/services";

interface ServiceScopeProps {
  heading: string;
  items: Offering[];
}

export function ServiceScope({ heading, items }: ServiceScopeProps) {
  return (
    <section className="py-24 md:py-32 bg-brand-gray dark:bg-slate-900/50 relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-1 bg-brand-green rounded-full" />
                 <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Strategic Range</h2>
               </div>
               <h3 className="text-5xl md:text-6xl font-black text-brand-navy dark:text-white italic tracking-tighter leading-none">{heading}</h3>
            </div>
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] pb-2">Technical Delivery Map</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {items.map((item, index) => {
                const IconComponent = (Icons as any)[item.iconName] || ChevronRight;
                return (
                  <div key={index} className="flex flex-col gap-6 p-8 bg-white dark:bg-brand-navy rounded-[2.5rem] border border-brand-gray dark:border-slate-800 hover:border-brand-green/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-brand-gray dark:bg-slate-900 text-brand-green rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500">
                        <IconComponent size={28} />
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">0{index + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-black text-brand-navy dark:text-white italic tracking-tight leading-none group-hover:text-brand-green transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
             })}
          </div>
        </div>
      </div>
    </section>
  );
}
