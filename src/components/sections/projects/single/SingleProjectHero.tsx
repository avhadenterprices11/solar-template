import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SingleProjectHeroProps {
  title: string;
  type: string;
  image: string;
  category: "government" | "private";
}

export function SingleProjectHero({ title, type, image, category }: SingleProjectHeroProps) {
  return (
    <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden">
      {/* Background with Adaptive Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dynamic gradient based on category */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent",
          category === "government" ? "opacity-90" : "opacity-80"
        )} />
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500 rounded-xl text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-amber-500/20">
            {type}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight italic tracking-tighter animate-in fade-in slide-in-from-top-4 duration-700">
            {title}
          </h1>

          <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-widest text-xs">
             <span className="w-12 h-px bg-slate-700" />
             <span>G&D Brothers Portfolio</span>
             <span className="w-12 h-px bg-slate-700" />
          </div>
        </div>
      </div>

      {/* Industrial Accent Grid */}
      <div className="absolute bottom-0 right-0 p-8 opacity-10 hidden lg:block">
         <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
         </div>
      </div>
    </section>
  );
}
