import React from "react";
import { ShieldCheck, Award, FileText, CheckCircle } from "lucide-react";

export function AboutTrust() {
  const points = [
    "Affiliated with MNRE (Ministry of New and Renewable Energy)",
    "Licensed electrical contracting capabilities",
    "Compliance with IE standards and regulations",
    "Strong focus on safety, sustainability, and operational excellence"
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Quality Assurance</h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Our Commitment to Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 border-b border-slate-100 dark:border-slate-800">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl group hover:bg-amber-500/5 transition-colors">
                <div className="mt-1 p-1 bg-amber-500 text-slate-950 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle size={16} />
                </div>
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12 pt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Dynamic trust symbols */}
             <div className="flex flex-col items-center gap-2">
                <Award size={48} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">MNRE India</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={48} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">IE Compliant</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <FileText size={48} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Class A License</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
