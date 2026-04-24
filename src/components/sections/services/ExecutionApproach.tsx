import React from "react";
import { Search, PenTool, ShoppingCart, Activity, Zap, Headphones } from "lucide-react";

export function ExecutionApproach() {
  const steps = [
    { title: "Requirement Analysis", desc: "Detailed site study and scope definition.", icon: Search },
    { title: "Engineering & Design", desc: "Technical blueprints and system architecture.", icon: PenTool },
    { title: "Procurement", desc: "Manufacturing and vendor coordination.", icon: ShoppingCart },
    { title: "Installation", desc: "On-site execution and system deployment.", icon: Zap },
    { title: "Testing", desc: "Rigorous commissioning and safety checks.", icon: Activity },
    { title: "Ongoing Support", desc: "Post-execution O&M and monitoring.", icon: Headphones }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">The Lifecycle</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Our Execution Approach
          </h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            From the first site visit to long-term maintenance, we follow a rigorous 6-step path to project excellence.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-px bg-slate-100 dark:bg-slate-800 -translate-y-[50%] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-[2rem] flex items-center justify-center text-amber-500 border border-slate-100 dark:border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-500 shadow-sm relative">
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center text-[10px] font-black border border-slate-100 dark:border-slate-800 text-slate-400">
                      0{idx + 1}
                   </div>
                   <step.icon size={32} />
                </div>
                <div className="space-y-2 px-2">
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-amber-500 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
