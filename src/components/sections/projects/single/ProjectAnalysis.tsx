import React from "react";
import { ShieldCheck, AlertTriangle, Scale, Construction } from "lucide-react";

interface ProjectAnalysisProps {
  siteConstraints?: string[];
  technicalChallenges?: string[];
  scaleAndComplexity?: string[];
  compliance?: string[];
}

export function ProjectAnalysis({ 
  siteConstraints, 
  technicalChallenges, 
  scaleAndComplexity, 
  compliance 
}: ProjectAnalysisProps) {
  if (!siteConstraints && !technicalChallenges && !scaleAndComplexity && !compliance) return null;

  const analysisItems = [
    {
      id: "constraints",
      title: "Site Constraints",
      icon: Construction,
      data: siteConstraints,
      color: "amber"
    },
    {
      id: "challenges",
      title: "Technical Challenges",
      icon: AlertTriangle,
      data: technicalChallenges,
      color: "slate"
    },
    {
      id: "complexity",
      title: "Scale & Complexity",
      icon: Scale,
      data: scaleAndComplexity,
      color: "slate"
    },
    {
      id: "compliance",
      title: "Compliance Considerations",
      icon: ShieldCheck,
      data: compliance,
      color: "amber"
    }
  ].filter(item => item.data && item.data.length > 0);

  return (
    <section className="py-24 bg-brand-gray dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-sm font-black text-brand-green uppercase tracking-widest leading-none">Engineering Deep-Dive</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">Technical Analysis</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {analysisItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-brand-navy p-8 rounded-[2.5rem] border border-brand-gray dark:border-slate-800 shadow-xl shadow-black/5 flex flex-col h-full group hover:border-brand-green/50 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                  item.color === 'amber' 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                    : 'bg-slate-900 text-white dark:bg-white dark:text-brand-navy'
                }`}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter transition-colors group-hover:text-brand-green">
                  {item.title}
                </h4>
              </div>

              <ul className="space-y-4 flex-grow">
                {item.data?.map((point, index) => (
                  <li key={index} className="flex gap-4 group/point">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0 transition-transform group-hover/point:scale-150" />
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
