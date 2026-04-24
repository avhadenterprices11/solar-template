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
    color: "bg-blue-500",
    slug: "electrical-contracting-epc",
    featured: true
  },
  {
    title: "Solar EPC Solutions",
    description: "Design and execution of utility-scale solar plants, rooftop systems, and hybrid energy solutions.",
    icon: Sun,
    color: "bg-amber-500",
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
    <section className="relative min-h-screen flex items-center py-24 bg-white selection:bg-amber-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-slate-50/50 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* Header Content - Left Side for Desktop */}
          <div className="lg:w-1/3 flex flex-col justify-center space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 text-[10px] font-black uppercase tracking-wider">
                Our Capabilities
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 leading-[1.05] italic tracking-tighter">
                Engineering <br/> The <span className="text-amber-500 underline decoration-slate-200 underline-offset-8">Future.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed">
                Comprehensive engineering, procurement, and construction solutions for the modern power sector.
              </p>
            </div>

            <div className="hidden lg:block space-y-6 pt-8 border-t border-slate-100">
               <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 transition-transform group-hover:scale-150" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ISO 9001:2015 Certified</p>
               </div>
               <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 transition-transform group-hover:scale-150" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">33kV / 11kV Specialists</p>
               </div>
            </div>
          </div>

          {/* Grid Layout - Right Side */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group relative p-8 rounded-[2rem] transition-all duration-500 border overflow-hidden flex flex-col justify-between",
                    service.featured 
                      ? "lg:col-span-2 lg:row-span-1 bg-slate-950 border-slate-800 text-white shadow-2xl shadow-slate-950/20" 
                      : "bg-white border-slate-100 hover:border-amber-500/50 hover:shadow-xl hover:shadow-black/5"
                  )}
                >
                  {/* Glass Accent for featured */}
                  {service.featured && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] -z-0" />
                  )}

                  <div className="relative z-10">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                      service.featured ? "bg-white/10 text-amber-500 ring-1 ring-white/20" : `${service.color} text-white shadow-lg`
                    )}>
                      <Icon size={24} />
                    </div>

                    <div className="space-y-2">
                      <h3 className={cn(
                        "text-xl font-black italic tracking-tighter transition-colors",
                        service.featured ? "text-white group-hover:text-amber-500" : "text-slate-950 group-hover:text-amber-500"
                      )}>
                        {service.title}
                      </h3>
                      <p className={cn(
                        "text-xs font-medium leading-relaxed transition-colors line-clamp-3",
                        service.featured ? "text-slate-400 group-hover:text-slate-300" : "text-slate-500 group-hover:text-slate-600"
                      )}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 flex items-center justify-between">
                    <div className={cn(
                      "text-[9px] font-black uppercase tracking-widest flex items-center gap-2",
                      service.featured ? "text-white/50 group-hover:text-white" : "text-slate-400 group-hover:text-slate-950"
                    )}>
                      Learn More
                      <div className={cn(
                        "w-4 h-px transition-all duration-500",
                        service.featured ? "bg-white/20 group-hover:w-8 group-hover:bg-amber-500" : "bg-slate-200 group-hover:w-8 group-hover:bg-amber-500"
                      )} />
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                      service.featured ? "bg-white/10 text-white group-hover:bg-amber-500 group-hover:text-slate-950" : "bg-slate-50 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600"
                    )}>
                      <ArrowUpRight size={16} />
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
