import React from "react";
import { ShieldCheck, Award, FileText, CheckCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutTrust() {
  const points = [
    {
      title: "MNRE Affiliation",
      desc: "Recognized by the Ministry of New and Renewable Energy.",
      icon: Award
    },
    {
      title: "Licensed Capabilities",
      desc: "Class A electrical contracting with multi-state licenses.",
      icon: FileText
    },
    {
      title: "IE Compliance",
      desc: "Strict adherence to Indian Electricity standards & regulations.",
      icon: ShieldCheck
    },
    {
      title: "Operational Excellence",
      desc: "Zero-harm safety focus with sustainable project execution.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 lg:py-40 bg-white selection:bg-brand-gray overflow-hidden relative">
      {/* Background Architectural Accent */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-32 mb-20 lg:mb-32">
          <div className="max-w-2xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-brand-green rounded-full" />
              <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Quality Assurance</h2>
            </div>
            <h3 className="text-6xl md:text-8xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
              Built on <br/> <span className="text-brand-green [16px]">Integrity.</span>
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-xl text-brand-gray0 font-bold leading-tight italic border-l-4 border-brand-green pl-8 py-2">
              &quot;Commitment to the highest engineering standards and regulatory excellence.&quot;
            </p>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index}
              className="group relative p-8 lg:p-12 rounded-[3rem] bg-brand-navy border border-white/5 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Background Ornament */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-green border border-white/10 group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-2xl group-hover:rotate-12 shrink-0">
                  <point.icon size={28} />
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.4em]">Certification Block 0{index + 1}</p>
                    <h4 className="text-2xl lg:text-3xl font-black text-white italic tracking-tighter leading-none group-hover:text-brand-green transition-colors">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-bold italic text-sm group-hover:text-slate-300 transition-colors">
                    &quot;{point.desc}&quot;
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-10 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700">
                 <ArrowUpRight size={80} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-24 lg:mt-32 pt-16 border-t border-brand-gray/30 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
           <div className="flex flex-col items-center gap-3">
              <Award size={48} className="text-brand-navy" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy">MNRE India</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={48} className="text-brand-navy" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy">IE Compliant</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <FileText size={48} className="text-brand-navy" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy">Class A License</span>
           </div>
        </div>
      </div>
    </section>
  );
}
