import React from "react";
import { UserCheck, Shield, Settings, HardHat, Pickaxe, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function OurTeam() {
  const roles = [
    {
      title: "Project & Plant Managers",
      desc: "Strategic planning and dedicated client coordination for multi-site project delivery.",
      icon: UserCheck
    },
    {
      title: "Quality Engineers",
      desc: "Civil, Mechanical & Electrical QA professionals maintaining Tier-1 standards.",
      icon: Shield
    },
    {
      title: "O&M Specialists",
      desc: "Experts in system testing, commissioning, and long-term asset optimization.",
      icon: Settings
    },
    {
      title: "Safety Supervisors",
      desc: "Ensuring zero-harm on-site through rigorous compliance and EHS protocols.",
      icon: HardHat
    },
    {
      title: "Skilled Workforce",
      desc: "Certified electricians, fitters, and welders executing precision engineering.",
      icon: Pickaxe
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white selection:bg-brand-gray overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-24 mb-10 md:mb-12">
          <div className="max-w-2xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-brand-green rounded-full" />
              <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Our Workforce</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navy italic tracking-tighter leading-[0.95]">
              The Engine of <br/> <span className="text-brand-green [12px]">Excellence.</span>
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-brand-gray0 font-bold leading-tight italic border-l-4 border-brand-green pl-6 py-1">
              &quot;Our strength lies in a well-structured team of professionals dedicated to high-quality results.&quot;
            </p>
          </div>
        </div>

        {/* Workforce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2.5rem] bg-brand-navy border border-white/5 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Background Glass Ornament */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-green border border-white/10 group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-2xl group-hover:-rotate-6">
                    <role.icon size={24} />
                  </div>
                  <ArrowUpRight size={24} className="text-white/10 group-hover:text-brand-green transition-all" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.4em]">Unit Division 0{index + 1}</p>
                    <h4 className="text-xl lg:text-2xl font-black text-white italic tracking-tighter leading-none group-hover:text-brand-green transition-colors">
                      {role.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-bold italic text-sm group-hover:text-slate-300 transition-colors">
                    &quot;{role.desc}&quot;
                  </p>
                </div>
              </div>

              {/* Decorative Watermark */}
              <div className="absolute -bottom-6 -right-6 text-white opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700">
                <role.icon size={120} />
              </div>
            </div>
          ))}
          
          {/* Dynamic Careers Card */}
          <div className="relative p-8 rounded-[2.5rem] bg-brand-green flex flex-col justify-between items-start overflow-hidden group transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(103,191,71,0.3)]">
            <div className="relative z-10 space-y-4">
               <div className="w-12 h-1 bg-brand-navy/20 rounded-full" />
                <p className="text-brand-navy font-black text-2xl lg:text-3xl italic tracking-tighter leading-none">
                  Join the <br/>Energy <br/>Revolution.
                </p>
            </div>
            
            <div className="relative z-10 w-full pt-8">
              <button className="w-full flex items-center justify-between px-6 py-4 bg-brand-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:gap-8 transition-all duration-500 group">
                Careers at G&D
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </button>
            </div>

            {/* Decorative Pulse */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-navy opacity-[0.05] rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
