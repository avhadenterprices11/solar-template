import React from "react";
import { TrendingUp, Users, ShieldCheck, Leaf } from "lucide-react";

interface ProjectImpactProps {
  impact: string[];
}

export function ProjectImpact({ impact }: ProjectImpactProps) {
  const icons = [TrendingUp, Leaf, ShieldCheck, Users];

  return (
    <section className="py-24 bg-slate-900 rounded-[3.5rem] border border-white/5 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-3xl space-y-6 mb-16">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] leading-none">Evidence of Success</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">Project Impact</h3>
          <p className="text-slate-400 font-medium text-lg leading-relaxed">
            Our execution methodology is designed to create measurable value for stakeholders, the community, and the national energy infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impact.map((text, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <p className="text-white font-bold leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
