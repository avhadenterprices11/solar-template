"use client";

import React from "react";
import Link from "next/link";
import { FolderRoot, Globe, User, LayoutGrid, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projectCategories = [
  {
    title: "MSKVY 1.0 & 2.0",
    subtitle: "Solar Power Projects",
    status: "Active Implementation",
    description: "Large-scale solar power plant development under the Mukhyamantri Saur Krushi Vahini Yojana.",
    icon: Globe,
    color: "bg-amber-500"
  },
  {
    title: "RDSS 1.0 & 2.0",
    subtitle: "Distribution Infrastructure",
    status: "Strategic Infrastructure",
    description: "Revamped Distribution Sector Scheme focused on improving operational efficiency and financial sustainability.",
    icon: LayoutGrid,
    color: "bg-blue-600"
  },
  {
    title: "KUSUM Yojana",
    subtitle: "Solar & Farmer-Centric",
    status: "Social Impact",
    description: "Empowering farmers through solar-powered irrigation and grid-connected renewable energy plants.",
    icon: User,
    color: "bg-emerald-600"
  },
  {
    title: "Industrial Projects",
    subtitle: "Private Sector Portfolio",
    status: "Tailored Solutions",
    description: "Turnkey electrical and solar solutions for private manufacturing units and industrial complexes.",
    icon: FolderRoot,
    color: "bg-slate-900"
  }
];

export function Projects() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center bg-white selection:bg-amber-100 overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute right-0 top-0 w-1/4 h-screen bg-slate-50/50 -z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* Header Column - 1/3 */}
          <div className="lg:w-1/3 flex flex-col justify-between py-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-px bg-amber-500" />
                  <span className="text-sm font-black text-amber-500 uppercase tracking-[0.3em]">Our Portfolio</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] italic tracking-tighter">
                  A Legacy <br/> Of <span className="text-amber-500 underline decoration-slate-100 underline-offset-8">Impact.</span>
                </h2>
              </div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                Actively involved in large-scale government and private sector projects across power distribution and renewable energy.
              </p>
            </div>

            <div className="pt-12">
              <Link 
                href="/projects"
                className="inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black hover:bg-amber-500 hover:text-slate-950 transition-all hover:gap-5 shadow-2xl shadow-slate-950/10 group"
              >
                View Full Portfolio
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Projects Grid - 2/3 */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {projectCategories.map((project, index) => {
              const Icon = project.icon;
              return (
                <Link 
                  key={project.title} 
                  href="/projects"
                  className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                  {/* Subtle Background Icon */}
                  <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <Icon size={200} />
                  </div>

                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-between">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110",
                        project.color
                      )}>
                        <Icon size={28} />
                      </div>
                      <span className="px-4 py-1.5 bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-[0.15em] rounded-full group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-2xl font-black text-slate-950 italic tracking-tighter leading-none mb-2 group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs font-black text-amber-500/60 uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-600">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-950 transition-colors">
                       <span>Explore Scale</span>
                       <div className="w-6 h-px bg-slate-200 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 transition-all duration-500">
                       <ArrowUpRight size={20} />
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
