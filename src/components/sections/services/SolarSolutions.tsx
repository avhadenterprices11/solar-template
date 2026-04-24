import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Battery, LayoutGrid, CheckCircle, ArrowRight } from "lucide-react";

export function SolarSolutions() {
  const categories = [
    {
      title: "Utility-Scale Solar",
      desc: "Large plants with full transmission & grid integration.",
      icon: LayoutGrid
    },
    {
      title: "Rooftop Solar",
      desc: "Optimized installations for industrial & commercial use.",
      icon: Sun
    },
    {
      title: "Hybrid Systems",
      desc: "Seamless Solar + Grid + DG synchronized setups.",
      icon: Battery
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Renewable Pillar</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Solar Energy Solutions
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              We design and execute solar power projects that enable sustainable energy generation across industrial, commercial, and agricultural sectors.
            </p>

            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-transparent hover:border-amber-500/30 transition-all flex items-center gap-6">
                  <div className="p-4 bg-white dark:bg-slate-950 text-amber-500 rounded-2xl shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <cat.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{cat.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 p-1 rounded-full bg-amber-500/10 border border-amber-500/20 pr-6 w-fit">
                 <div className="p-2 bg-amber-500 text-slate-950 rounded-full">
                    <CheckCircle size={16} />
                 </div>
                 <span className="text-xs font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest">Efficient, Scalable, Future-Ready</span>
              </div>

              <Link 
                href="/services/solar-epc-solutions"
                className="inline-flex items-center gap-2 text-amber-500 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Deep-Dive into Solar EPC <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Visual/Decoration Side */}
          <div className="relative h-[600px] w-full bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 p-12">
               <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/about-hero.png" 
                    alt="Solar Energy Engineering" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
