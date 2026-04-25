"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { ServiceData } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  data: ServiceData;
  index: number;
}

export function ServiceSection({ data, index }: ServiceSectionProps) {
  const isReversed = index % 2 !== 0;

  return (
    <section 
      id={data.slug}
      className={cn(
        "py-24 md:py-32 overflow-hidden bg-white dark:bg-brand-navy"
      )}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex flex-col gap-16 md:gap-24 items-center",
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-brand-green rounded-full" />
                <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.3em]">
                  {data.slug.replace(/-/g, ' ')}
                </h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
                {data.hero.title}
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              {data.hero.subtext}
            </p>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {data.offerings.items.slice(0, 4).map((item, idx) => {
                const IconComponent = (Icons as any)[item.iconName] || ArrowRight;
                return (
                  <div 
                    key={idx} 
                    className="group p-6 bg-white dark:bg-brand-navy rounded-[2rem] border border-brand-gray dark:border-slate-800 hover:border-brand-green/30 transition-all shadow-sm hover:shadow-xl hover:shadow-black/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-gray dark:bg-slate-900 text-brand-green rounded-xl group-hover:bg-brand-green group-hover:text-brand-navy transition-colors">
                        <IconComponent size={20} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base leading-none group-hover:text-brand-green transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium line-clamp-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link 
                href={`/services/${data.slug}`}
                className="inline-flex items-center gap-4 px-8 py-4 bg-brand-navy dark:bg-white text-white dark:text-brand-navy rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-brand-navy/10 group"
              >
                Detailed Specifications 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 text-brand-green" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className={cn(
              "relative aspect-[4/5] md:aspect-square w-full rounded-[3rem] overflow-hidden group shadow-2xl",
              isReversed ? "lg:rounded-tr-none lg:rounded-br-none" : "lg:rounded-tl-none lg:rounded-bl-none"
            )}>
              <Image 
                src={data.hero.image} 
                alt={data.hero.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
              
              {/* Floating Badge */}
              <div className={cn(
                "absolute bottom-10 p-8 bg-white/90 dark:bg-brand-navy/90 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl max-w-[280px] hidden md:block",
                isReversed ? "left-10" : "right-10"
              )}>
                <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-2">Service Commitment</p>
                <p className="text-brand-navy dark:text-white font-bold leading-snug">
                  Engineered for excellence and operational reliability across every stage.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className={cn(
              "absolute -z-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/20 blur-[100px] rounded-full",
              isReversed ? "-left-32" : "-right-32"
            )} />
          </div>

        </div>
      </div>
    </section>
  );
}
