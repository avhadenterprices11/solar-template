import React from "react";
import { Factory, Zap, ShieldCheck, Cpu } from "lucide-react";

export function GroupCompanies() {
  return (
    <section className="relative py-12 md:py-16 bg-white selection:bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-10 md:mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-brand-green rounded-full" />
            <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Our Ecosystem</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-brand-navy italic tracking-tighter leading-[0.95]">
            The Group <br/> <span className="text-brand-green [8px]">Structure.</span>
          </h3>
          <p className="text-lg text-slate-500 font-bold leading-tight italic max-w-xl pt-2">
            Synergizing specialized expertise across electrical contracting and high-performance renewable energy manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Company 1 */}
          <div className="group relative bg-brand-navy rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-10 text-white overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-brand-navy/20">
            {/* Background Architectural Watermark */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12">
              <Factory size={400} />
            </div>
            
            <div className="relative z-10 space-y-8 lg:space-y-10">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-green border border-white/10 group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-2xl group-hover:rotate-6">
                <ShieldCheck size={28} />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl lg:text-3xl font-black tracking-tighter text-white italic leading-[1] group-hover:text-brand-green transition-colors">
                  Rajlaxmi Electricals <br/>& Engineers
                </h4>
                <p className="text-slate-400 leading-relaxed font-bold italic text-base max-w-md">
                  &quot;Licensed electrical contracting for HT & LT projects and substations.&quot;
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:gap-3">
                {["HT & LT Projects", "Substations", "Transmission", "Compliant"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:border-brand-green/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company 2 */}
          <div className="group relative bg-brand-green rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-10 text-brand-navy overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-brand-green/20">
            {/* Background Architectural Watermark */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:opacity-[0.12] transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12">
              <Zap size={400} />
            </div>

            <div className="relative z-10 space-y-8 lg:space-y-10">
              <div className="w-12 h-12 bg-brand-navy/10 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-navy border border-brand-navy/10 group-hover:bg-brand-navy group-hover:text-brand-green transition-all duration-500 shadow-2xl group-hover:rotate-6">
                <Cpu size={28} />
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl lg:text-3xl font-black tracking-tighter text-brand-navy italic leading-[1]">
                  Sarvadnya Engineers <br/>& Electricals
                </h4>
                <p className="text-brand-navy/60 leading-relaxed font-bold italic text-base max-w-md">
                  &quot;Renewable energy and manufacturing, specializing in solar EPC.&quot;
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:gap-3">
                {["Solar EPC", "Rooftop Systems", "Manufacturing", "Control Panels"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-green transition-all">
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
