import React from "react";
import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react";

const trustPoints = [
  {
    title: "Project Legacy",
    description: "Decades of experience in Major Government (MSKVY, RDSS) & Industrial Power projects.",
    icon: ShieldCheck
  },
  {
    title: "End-to-End Delivery",
    description: "From Power Consulting to EPC Execution and O&M—we handle the entire lifecycle.",
    icon: Zap
  },
  {
    title: "Engineering Excellence",
    description: "A highly skilled technical team focused on precision, safety, and modern grid standards.",
    icon: Users
  },
  {
    title: "Execution Speed",
    description: "Proven track record of timely delivery for large-scale solar and electrical infrastructure.",
    icon: BarChart3
  }
];

export function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">The G&D Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white italic tracking-tighter">Why Work With Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all">
               <div className="w-12 h-12 bg-white dark:bg-slate-950 text-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <point.icon size={24} />
               </div>
               <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 italic tracking-tight">{point.title}</h4>
               <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                 {point.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
