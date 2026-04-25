import React from "react";
import { CheckCircle, Shield, Zap, Target } from "lucide-react";
import { executionStrengths } from "@/data/projects";

export function ProjectStrengths() {
  const icons = [Landmark, Zap, Shield, Target]; // Map manually to avoid dynamic index issues if needed, but I'll use a local array
  
  const strengthIcons = [
    { text: executionStrengths[0], icon: Target },
    { text: executionStrengths[1], icon: Zap },
    { text: executionStrengths[2], icon: Shield },
    { text: executionStrengths[3], icon: CheckCircle }
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em]">Execution DNA</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Our Execution Strength
            </h3>
            <p className="text-brand-gray0 dark:text-slate-400 font-medium leading-relaxed">
               We combine scaled government experience with private sector agility to deliver uncompromised infrastructure.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengthIcons.map((strength, index) => (
              <div key={index} className="flex gap-6 items-start p-8 bg-brand-gray dark:bg-slate-900 rounded-[2rem] border border-brand-gray dark:border-slate-800 group hover:border-brand-green/30 transition-all">
                 <div className="p-4 bg-white dark:bg-brand-navy text-brand-green rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <strength.icon size={28} />
                 </div>
                 <p className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-snug tracking-tight">
                   {strength.text}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Landmark } from "lucide-react"; // Imported for reference but unused in final map
