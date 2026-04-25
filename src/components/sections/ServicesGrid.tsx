"use client";

import React from "react";
import { Zap, Sun, Factory, PenTool, Settings, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Electrical EPC",
    description: "Execution of 33kV & 11kV systems, substations, transmission lines, and transformer installations with full compliance.",
    icon: Zap,
    color: "bg-brand-blue",
    slug: "electrical-contracting-epc",
    featured: true
  },
  {
    title: "Solar EPC Solutions",
    description: "Design and execution of utility-scale solar plants, rooftop systems, and hybrid energy solutions.",
    icon: Sun,
    color: "bg-brand-green",
    slug: "solar-epc-solutions"
  },
  {
    title: "Manufacturing",
    description: "Production of HT & LT control panels, solar mounting structures, and transmission line accessories.",
    icon: Factory,
    color: "bg-slate-700",
    slug: "manufacturing"
  },
  {
    title: "Power Consultancy",
    description: "Load analysis, system design, energy optimization, and regulatory support for efficient power infrastructure.",
    icon: PenTool,
    color: "bg-emerald-500",
    slug: "power-consulting"
  },
  {
    title: "Operation & Maintenance",
    description: "Comprehensive O&M services ensuring long-term performance and reliability of solar power systems.",
    icon: Settings,
    color: "bg-red-500",
    slug: "operation-maintenance"
  },
];

export function ServicesGrid() {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen flex items-center py-20 lg:py-32 bg-white selection:bg-brand-gray overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-brand-gray/50 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gray rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-stretch">
          
          {/* Header Content - Left Side for Desktop */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-[10px] font-black uppercase tracking-wider">
                Our Capabilities
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy leading-[1.05] italic tracking-tighter">
                Engineering <br/> The <span className="text-brand-green underline decoration-brand-gray underline-offset-8">Future.</span>
              </h2>
              <p className="text-brand-gray0 font-medium text-lg max-w-sm leading-relaxed">
                Comprehensive engineering, procurement, and construction solutions for the modern power sector.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6 pt-8 border-t border-brand-gray">
               <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green transition-transform group-hover:scale-150" />
                  <p className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">ISO 9001:2015 Certified</p>
               </div>
               <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy transition-transform group-hover:scale-150" />
                  <p className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">33kV / 11kV Specialists</p>
               </div>
            </div>
          </div>

          {/* Grid Layout - Right Side */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group relative p-8 lg:p-10 rounded-[2.5rem] transition-all duration-500 border overflow-hidden flex flex-col justify-between min-h-[320px] lg:min-h-0",
                    service.featured 
                      ? "sm:col-span-2 lg:row-span-1 bg-brand-navy border-white/5 text-white shadow-2xl shadow-brand-navy/20" 
                      : "bg-white border-brand-gray hover:border-brand-green/50 hover:shadow-xl hover:shadow-black/5"
                  )}
                >
                  {/* Glass Accent for featured */}
                  {service.featured && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] -z-0" />
                  )}

                  <div className="relative z-10">
                    <div className={cn(
                      "w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                      service.featured ? "bg-white/10 text-brand-green ring-1 ring-white/20" : `${service.color} text-white shadow-lg`
                    )}>
                      <Icon size={24} />
                    </div>

                    <div className="space-y-3 lg:space-y-4">
                      <h3 className={cn(
                        "text-xl lg:text-2xl font-black italic tracking-tighter transition-colors",
                        service.featured ? "text-white group-hover:text-brand-green" : "text-brand-navy group-hover:text-brand-green"
                      )}>
                        {service.title}
                      </h3>
                      <p className={cn(
                        "text-sm font-medium leading-relaxed transition-colors",
                        service.featured ? "text-slate-400 group-hover:text-slate-300" : "text-brand-gray0 group-hover:text-slate-600"
                      )}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 lg:pt-12 flex items-center justify-between">
                    <div className={cn(
                      "text-[9px] font-black uppercase tracking-widest flex items-center gap-2",
                      service.featured ? "text-white/50 group-hover:text-white" : "text-slate-400 group-hover:text-brand-navy"
                    )}>
                      Learn More
                      <div className={cn(
                        "w-4 h-px transition-all duration-500",
                        service.featured ? "bg-white/20 group-hover:w-8 group-hover:bg-brand-green" : "bg-slate-200 group-hover:w-8 group-hover:bg-brand-green"
                      )} />
                    </div>
                    <div className={cn(
                      "w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm",
                      service.featured ? "bg-white/10 text-white group-hover:bg-brand-green group-hover:text-brand-navy" : "bg-brand-gray text-slate-400 group-hover:bg-brand-green group-hover:text-brand-navy"
                    )}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
