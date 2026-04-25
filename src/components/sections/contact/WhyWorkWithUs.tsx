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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-brand-green rounded-full" />
              <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">The G&D Advantage</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-brand-navy italic tracking-tighter leading-none">A Partnership Built <br/> On <span className="text-brand-green">Certainty.</span></h3>
          </div>
          <p className="text-brand-gray0 font-bold text-lg max-w-sm italic leading-tight pb-2">
            Scaling infrastructure requires more than just labor—it requires a legacy of technical precision and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="group relative p-10 bg-brand-gray rounded-[3rem] border border-brand-gray hover:border-brand-green/30 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
               <div className="w-14 h-14 bg-white text-brand-green rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-black/5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <point.icon size={28} />
               </div>
               <h4 className="text-2xl font-black text-brand-navy mb-4 italic tracking-tighter">{point.title}</h4>
               <p className="text-brand-gray0 font-medium leading-relaxed text-sm">
                 {point.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
