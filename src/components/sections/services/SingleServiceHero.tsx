import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Compass } from "lucide-react";

interface SingleServiceHeroProps {
  title: string;
  subtext: string;
  image: string;
}

export function SingleServiceHero({ title, subtext, image }: SingleServiceHeroProps) {
  return (
    <section className="relative min-h-[auto] flex items-center bg-white pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="w-12 h-1 bg-brand-green rounded-full" />
                <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Service Vertical</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-[0.9] italic tracking-tighter animate-in fade-in slide-in-from-top-8 duration-1000 delay-200">
                {title.split(' & ').map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-brand-green">&</span>}
                    {part}
                    {i === 0 && <br/>}
                  </React.Fragment>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-brand-gray0 font-bold leading-tight italic max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                &quot;{subtext}&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 animate-in fade-in zoom-in-95 duration-1000 delay-600">
              <Link
                href="/contact#form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-brand-navy text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-green hover:text-brand-navy transition-all duration-500 shadow-2xl shadow-brand-navy/10 group"
              >
                Inquire Now
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-gray text-slate-400 rounded-full flex items-center justify-center">
                    <Compass size={20} className="animate-spin-slow" />
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                    Engineering <br/> Excellence
                 </p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            <div className="relative aspect-video md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-white border border-brand-gray rounded-[2rem] shadow-2xl shadow-black/5 hidden md:block animate-bounce-subtle">
               <div className="space-y-4">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500" />
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Scale</span>
                  </div>
                  <p className="text-xl font-black text-brand-navy italic tracking-tighter leading-none">
                    Certified <br/> Compliance.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
