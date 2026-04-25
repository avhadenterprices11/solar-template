import React from "react";
import Link from "next/link";
import { Settings2, Zap, Layout, ArrowUpRight, ArrowRight } from "lucide-react";

export function Manufacturing() {
  const products = [
    { title: "HT & LT Control Panels", icon: Zap },
    { title: "Solar Mounting Structures", icon: Layout },
    { title: "Transmission Accessories", icon: Settings2 }
  ];

  return (
    <section className="py-24 bg-brand-gray dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white dark:bg-brand-navy rounded-[3rem] p-12 md:p-20 shadow-xl shadow-black/[0.02] border border-brand-gray dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Product Ecosystem</h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                  Engineering & <br/>Manufacturing
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                Our in-house manufacturing capabilities ensure that every critical component meets G&D&apos;s rigorous precision standards.
              </p>
              
              <div className="pt-4">
                <Link 
                  href="/services/manufacturing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all group"
                >
                  Explore Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {products.map((product, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-brand-gray dark:bg-slate-900 rounded-2xl group hover:bg-slate-900 dark:hover:bg-white transition-all cursor-default">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white dark:bg-brand-navy text-slate-900 dark:text-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <product.icon size={24} />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-white dark:group-hover:text-slate-900 transition-colors">{product.title}</span>
                  </div>
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-brand-green transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-brand-navy text-center rounded-[2rem] border border-white/5">
             <p className="text-brand-gray0 font-bold uppercase tracking-widest text-xs mb-2">The Precision Standard</p>
             <p className="text-white text-xl font-bold tracking-tight">
               Built for heavy industrial operations and high-load utility environments.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
