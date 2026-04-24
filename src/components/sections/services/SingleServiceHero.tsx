import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface SingleServiceHeroProps {
  title: string;
  subtext: string;
  image: string;
}

export function SingleServiceHero({ title, subtext, image }: SingleServiceHeroProps) {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-700">
            Specialized Service
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-in fade-in zoom-in-95 duration-700 delay-300">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded-2xl font-black hover:bg-amber-400 transition-all hover:scale-105 shadow-xl shadow-amber-500/20 group"
            >
              Get a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all group"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
