import React from "react";

const clients = [
  "MSETCL",
  "MSEDCL",
  "MAHAGENCO",
  "MES",
  "NCC Ltd.",
  "Private Clients",
  "TATA Power",
  "Adani Green",
  "Azure Power",
];

export function ClientStrip() {
  return (
    <section className="bg-white dark:bg-brand-navy py-12 border-b border-brand-gray dark:border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Trusted By Leading Organizations
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {/* Duplicating for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-black text-slate-200 dark:text-slate-800 hover:text-brand-green/50 transition-colors cursor-default select-none tracking-tighter"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
