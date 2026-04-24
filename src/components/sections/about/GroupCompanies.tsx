import React from "react";
import { Factory, Zap, ShieldCheck, Cpu } from "lucide-react";

export function GroupCompanies() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Our Group Companies
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Synergizing specialized expertise across electrical contracting and renewable energy manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company 1 */}
          <div className="group bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Factory size={200} />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-500 border border-white/10">
                <ShieldCheck size={32} />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
                  Rajlaxmi Electricals <br/>& Engineers
                </h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  A licensed electrical contracting firm specializing in HT & LT projects, substations, and transmission infrastructure. The company ensures statutory compliance and high-quality execution across all projects.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HT & LT Projects", "Substations", "Transmission", "Compliant"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company 2 */}
          <div className="group bg-amber-500 rounded-[3rem] p-12 text-slate-950 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-15 group-hover:scale-110 transition-transform duration-700">
              <Zap size={200} />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 bg-slate-950/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-950 border border-slate-900/10">
                <Cpu size={32} />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold tracking-tight text-slate-950">
                  Sarvadnya Engineers <br/>& Electricals
                </h4>
                <p className="text-slate-950/70 leading-relaxed font-semibold">
                  Focused on renewable energy and manufacturing, this entity specializes in solar EPC projects, rooftop installations, and the production of control panels and transmission line components.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Solar EPC", "Rooftop Systems", "Manufacturing", "Control Panels"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-slate-950/10 border border-slate-950/10 rounded-full text-xs font-black text-slate-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
