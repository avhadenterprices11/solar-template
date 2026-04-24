import React from "react";

interface ServiceProcessProps {
  heading: string;
  steps: string[];
}

export function ServiceProcess({ heading, steps }: ServiceProcessProps) {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
           <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">The Lifecycle</h2>
           <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">{heading}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
           {steps.map((step, index) => (
              <div key={index} className="relative group">
                 {/* Step Number Background */}
                 <div className="absolute -top-10 -left-6 text-[10rem] font-black text-white/[0.03] select-none leading-none pointer-events-none group-hover:text-amber-500/[0.05] transition-colors">
                    {index + 1}
                 </div>
                 
                 <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-4">
                       <span className="w-8 h-8 rounded-full border border-amber-500 flex items-center justify-center text-[10px] font-black text-amber-500">
                          0{index + 1}
                       </span>
                       <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
                       {step}
                    </h4>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
