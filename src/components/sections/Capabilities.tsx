import React from "react";
import { CheckCircle, Activity, Zap, Shield, Cpu, Gauge } from "lucide-react";

const capabilities = [
  {
    title: "33kV & 11kV Power Systems",
    icon: Zap,
    description: "Expert execution of high-voltage internal and external power systems."
  },
  {
    title: "Substation Development",
    icon: Activity,
    description: "Turnkey development of 33/11kV substations with precision engineering."
  },
  {
    title: "Transmission Lines",
    icon: Cpu,
    description: "Robust transmission and distribution network infrastructure projects."
  },
  {
    title: "Solar Power Plants",
    icon: CheckCircle,
    description: "Utility-scale and rooftop solar plant execution from concept to grid."
  },
  {
    title: "Control Panel Manufacturing",
    icon: Shield,
    description: "Custom production of HT & LT control panels for industrial needs."
  },
  {
    title: "Transformer Augmentation",
    icon: Gauge,
    description: "Capacity enhancement and maintenance up to 15 MVA transformers."
  }
];

export function Capabilities() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Header Area */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Capabilities</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Engineering Excellence Across the <span className="text-amber-500">Power Value Chain.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We leverage specialized technical expertise and state-of-the-art equipment to deliver high-performance energy infrastructure that stands the test of time.
            </p>
            <div className="pt-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Standard</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">ISO 9001:2015 Certified Engineering Processes</p>
              </div>
            </div>
          </div>

          {/* Grid Area */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div 
                key={cap.title} 
                className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <cap.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cap.description}
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
