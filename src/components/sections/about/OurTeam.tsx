import React from "react";
import { UserCheck, Shield, Zap, Settings, HardHat, Pickaxe } from "lucide-react";

export function OurTeam() {
  const roles = [
    {
      title: "Project & Plant Managers",
      desc: "Planning, execution, and dedicated client coordination.",
      icon: UserCheck
    },
    {
      title: "Quality Engineers",
      desc: "Civil, Mechanical & Electrical quality assurance professionals.",
      icon: Shield
    },
    {
      title: "O&M Specialists",
      desc: "Experts in testing, commissioning, and long-term maintenance.",
      icon: Settings
    },
    {
      title: "Safety Supervisors",
      desc: "Ensuring zero-harm on-site through rigorous compliance.",
      icon: HardHat
    },
    {
      title: "Skilled Workforce",
      desc: "Certified electricians, fitters, welders, and technical staff.",
      icon: Pickaxe
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Workforce</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              The Engine of <span className="text-amber-500">Excellence.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Our strength lies in a well-structured team of experienced professionals and a skilled workforce dedicated to delivering high-quality results across every project site.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-xl group"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <role.icon size={28} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {role.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Dynamic Join Block */}
          <div className="p-8 rounded-3xl bg-amber-500 flex flex-col justify-center items-center text-center space-y-4">
            <p className="text-slate-950 font-black text-2xl">Join the <br/>Energy Revolution</p>
            <button className="px-6 py-2 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
              Careers at G&D
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
