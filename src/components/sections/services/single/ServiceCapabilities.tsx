import React from "react";
import { ShieldCheck, Zap, Activity, Target, Settings, Layers } from "lucide-react";

interface ServiceCapabilitiesProps {
  heading: string;
  points: string[];
}

export function ServiceCapabilities({ heading, points }: ServiceCapabilitiesProps) {
  const icons = [ShieldCheck, Zap, Target, Activity, Settings, Layers];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Header Side */}
          <div className="lg:w-5/12 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-brand-green rounded-full" />
                <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Advanced Engineering</h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                {heading}
              </h3>
            </div>
            <p className="text-xl text-brand-gray0 font-bold leading-tight italic">
               Leveraging deep domain expertise to deliver robust, high-performance infrastructure across India.
            </p>
          </div>

          {/* Grid Side */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
             {points.map((point, index) => {
                const Icon = icons[index % icons.length];
                return (
                   <div key={index} className="space-y-6 group">
                      <div className="w-14 h-14 bg-brand-gray text-brand-green rounded-2xl flex items-center justify-center border border-brand-gray group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-xl shadow-black/5">
                         <Icon size={28} />
                      </div>
                      <div className="space-y-3">
                         <h4 className="text-2xl font-black text-brand-navy italic tracking-tighter leading-none group-hover:text-brand-green transition-colors">
                           {point}
                         </h4>
                         <div className="w-12 h-1 bg-brand-gray group-hover:w-20 group-hover:bg-brand-green transition-all duration-700" />
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
