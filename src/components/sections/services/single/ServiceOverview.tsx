import React from "react";

interface ServiceOverviewProps {
  heading: string;
  content: string;
}

export function ServiceOverview({ heading, content }: ServiceOverviewProps) {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="lg:w-5/12 space-y-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-1 bg-brand-green rounded-full" />
               <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Perspective</h2>
             </div>
             <h3 className="text-5xl md:text-6xl font-black text-brand-navy italic tracking-tighter leading-none">{heading}</h3>
          </div>
          <div className="lg:w-7/12">
             <p className="text-2xl md:text-3xl text-brand-gray0 font-bold leading-tight italic border-l-8 border-brand-gray pl-10">
               &quot;{content}&quot;
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
