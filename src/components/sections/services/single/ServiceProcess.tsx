import React from "react";

interface ServiceProcessProps {
  heading: string;
  steps: string[];
}

export function ServiceProcess({ heading, steps }: ServiceProcessProps) {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-1 bg-brand-green rounded-full" />
               <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Lifecycle</h2>
             </div>
             <h3 className="text-5xl md:text-7xl font-black text-brand-navy italic tracking-tighter leading-none">{heading}</h3>
          </div>
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] pb-2">Execution Protocol</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 relative">
           {steps.map((step, index) => (
              <div key={index} className="relative group">
                 {/* Step Number Background */}
                 <div className="absolute -top-16 -left-8 text-[12rem] font-black text-brand-gray select-none leading-none pointer-events-none group-hover:text-brand-green/5 transition-colors duration-700">
                    {index + 1}
                 </div>
                 
                 <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                       <span className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-xs font-black text-white group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-xl shadow-black/10">
                          0{index + 1}
                       </span>
                       <div className="h-px bg-brand-gray flex-1 group-hover:bg-brand-green/30 transition-colors duration-700" />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-2xl font-black text-brand-navy italic tracking-tighter leading-tight group-hover:text-brand-green transition-colors duration-500">
                          {step}
                       </h4>

                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
