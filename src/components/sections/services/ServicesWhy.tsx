import React from "react";
import { CheckCircle, Shield, Users, Briefcase, Zap } from "lucide-react";

export function ServicesWhy() {
  const points = [
    { title: "Integrated End-to-End Solutions", icon: Zap },
    { title: "Govt. & Industrial Experience", icon: Briefcase },
    { title: "Skilled Engineering Team", icon: Users },
    { title: "Industry Standard Compliance", icon: Shield },
    { title: "Safety, Quality & Timely Delivery", icon: CheckCircle }
  ];

  return (
    <section className="py-24 bg-brand-gray dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          {/* Background Decorative Accent */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em]">The Advantage</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  Why Choose Our <br/>Services
                </h3>
              </div>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                We bridge the gap between engineering theory and on-site reality with a focus on uncompromised reliability.
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              {points.map((point, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all hover:border-brand-green/30 group"
                >
                  <div className="p-3 bg-white/5 text-brand-green rounded-xl group-hover:scale-110 transition-transform">
                    <point.icon size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
