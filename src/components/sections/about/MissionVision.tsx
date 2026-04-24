"use client";

import React from "react";
import { Target, Eye, CheckCircle2, TrendingUp, Sparkles, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export function MissionVision() {
  const missionPoints = [
    { text: "Deliver cost-effective, innovative, and energy-efficient solutions", icon: Sparkles },
    { text: "Execute projects on time, within budget, and with uncompromised quality", icon: Target },
    { text: "Contribute to the growth of renewable energy and sustainable infrastructure", icon: TrendingUp },
    { text: "Uphold a commitment to excellence that reflects national progress", icon: Map }
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-white selection:bg-amber-100 overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute left-0 top-0 w-1/2 h-screen bg-slate-50/50 -z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] hidden lg:block pointer-events-none">
        <span className="text-[20rem] font-black uppercase tracking-tighter select-none">
          VISION
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* Vision Narrative - 50% */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="p-2 bg-amber-500 rounded-xl text-slate-950 shadow-xl shadow-amber-500/20">
                  <Eye size={20} />
                </div>
                <span className="text-sm font-black text-amber-500 uppercase tracking-[0.3em]">The North Star</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Our Vision</h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] italic tracking-tighter">
                  To be recognized as <br/> A <span className="text-amber-500 underline decoration-slate-100 underline-offset-[12px]">Global Leader</span> <br/> In Power Systems.
                </p>
                <p className="text-xl md:text-2xl font-bold text-slate-500 leading-tight max-w-xl italic">
                  Known for uncompromised reliability, innovation, and long-term client trust across the energy sector.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 w-fit">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-amber-500 rounded-full" />
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Excellence Reimagined</p>
               </div>
            </div>
          </div>

          {/* Mission Strategy - 50% */}
          <div className="lg:w-1/2 flex flex-col justify-center animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
             <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] space-y-12 relative overflow-hidden group">
                {/* Subtle internal gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-0" />
                
                <div className="space-y-2 relative z-10">
                   <h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em]">Our Mission</h3>
                   <h4 className="text-3xl font-black text-slate-950 italic tracking-tighter uppercase">Key Directives</h4>
                </div>

                <div className="space-y-8 relative z-10">
                  {missionPoints.map((point, index) => {
                    const MIcon = point.icon;
                    return (
                      <div key={index} className="flex items-start gap-6 group/item">
                        <div className="mt-1 w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-amber-500 group-hover/item:text-white group-hover/item:border-amber-500 transition-all duration-300">
                          <MIcon size={18} />
                        </div>
                        <div className="space-y-1 flex-1 pb-6 border-b border-slate-50 group-last:border-0 group-last:pb-0">
                          <p className="text-slate-700 font-bold leading-relaxed text-lg transition-colors group-hover/item:text-slate-950">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target size={120} strokeWidth={1} />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
