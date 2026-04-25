import React from "react";
import { Building2, Landmark, Zap, Factory, ArrowUpRight } from "lucide-react";

interface ServiceIndustriesProps {
  heading: string;
  points: string[];
}

export function ServiceIndustries({ heading, points }: ServiceIndustriesProps) {
  const icons = [Building2, Landmark, Zap, Factory];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none opacity-[0.02] transform translate-y-1/4">
        <span className="text-[25rem] font-black text-brand-navy leading-none tracking-tighter">SECTORS</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left side - Header */}
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-1 bg-brand-green rounded-full" />
                   <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Strategic Reach</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                   {heading}
                 </h3>
              </div>
              <p className="text-xl text-slate-500 font-bold leading-tight italic max-w-md">
                 Engineering robust power infrastructure across diverse industry verticals and critical government sectors.
              </p>
              <div className="flex items-center gap-6 pt-6">
                <div className="h-px bg-brand-gray flex-1" />
                <span className="text-[10px] font-black text-brand-gray0 uppercase tracking-widest whitespace-nowrap">Market Integration</span>
              </div>
            </div>

            {/* Right side - 2x2 Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
               {points.slice(0, 4).map((point, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                     <div key={index} className="group relative p-10 rounded-[3rem] bg-white border border-brand-gray hover:border-brand-green/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 min-h-[280px] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-navy shadow-xl shadow-black/5 group-hover:bg-brand-green transition-all duration-500">
                              <Icon size={28} />
                           </div>
                           <ArrowUpRight size={24} className="text-brand-gray group-hover:text-brand-green transition-colors" />
                        </div>
                        
                        <div className="space-y-4">
                           <h4 className="text-2xl font-black text-brand-navy italic tracking-tighter leading-tight group-hover:text-brand-green transition-colors">
                             {point}
                           </h4>
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-green scale-0 group-hover:scale-100 transition-transform" />
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industry Segment 0{index + 1}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
