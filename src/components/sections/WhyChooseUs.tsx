import React from "react";
import { Check, Shield, Users, Clock, Zap } from "lucide-react";

const reasons = [
  {
    title: "End-to-End Turnkey Execution",
    description: "Full-cycle delivery from initial feasibility and design to final grid connectivity.",
    icon: Zap
  },
  {
    title: "Strong Govt. Project Experience",
    description: "Decades of successful collaboration with major state utilities and central schemes.",
    icon: Shield
  },
  {
    title: "Skilled Technical Team",
    description: "Dedicated bench of certified engineers and safety-trained field technicians.",
    icon: Users
  },
  {
    title: "Timely Project Delivery",
    description: "Rigorous project management ensuring milestones are hit without technical debt.",
    icon: Clock
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em]">The G&D Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Why Industry Leaders <span className="text-brand-green">Choose Us.</span>
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              We combine deep engineering roots with modern renewable agility to provide a partnership that is technical, transparent, and results-driven.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-brand-navy rounded-2xl shadow-xl shadow-black/[0.02] border border-brand-gray dark:border-slate-800">
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Safety, Quality & Compliance</h4>
                  <p className="text-sm text-brand-gray0 dark:text-slate-400">Strict adherence to national and international safety regulations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Decoy Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />
            
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className={`p-8 rounded-3xl bg-white dark:bg-brand-navy border border-brand-gray dark:border-slate-800 hover:border-brand-green/30 transition-all group ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-brand-gray dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-brand-green group-hover:text-brand-navy transition-colors">
                    <reason.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-brand-green transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-brand-gray0 dark:text-slate-400 leading-relaxed uppercase tracking-wide font-medium">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
