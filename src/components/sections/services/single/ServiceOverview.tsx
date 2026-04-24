import React from "react";

interface ServiceOverviewProps {
  heading: string;
  content: string;
}

export function ServiceOverview({ heading, content }: ServiceOverviewProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 border-l-4 border-amber-500 pl-8 space-y-4">
             <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">Perspective</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{heading}</h3>
          </div>
          <div className="lg:w-2/3">
             <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
               &quot;{content}&quot;
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
