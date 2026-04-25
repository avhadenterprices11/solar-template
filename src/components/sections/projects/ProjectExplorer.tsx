"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { LayoutGrid, Landmark, Building2, ArrowUpRight } from "lucide-react";

export function ProjectExplorer() {
  const [filter, setFilter] = useState<"all" | "government" | "private">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  const tabs = [
    { id: "all", label: "All Projects", icon: LayoutGrid },
    { id: "government", label: "Government", icon: Landmark },
  ];

  return (
    <section className="py-24 bg-brand-gray dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all",
                filter === tab.id
                  ? "bg-brand-green text-brand-navy shadow-xl shadow-brand-green/20 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-400 border border-brand-gray dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col h-[550px] bg-brand-navy rounded-[3.5rem] overflow-hidden border border-brand-gray/10 hover:border-brand-green/30 transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
            >
              {/* Main Project Image */}
              <div className="absolute inset-0 z-0">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-80"
                  />
                )}
                {/* Dramatic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
              </div>

              {/* Card Header - Floating Badges */}
              <div className="relative z-10 p-10 flex justify-between items-start">
                 <div className="flex flex-col gap-2">
                    <span className="px-4 py-2 bg-brand-green/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-xl shadow-black/20">
                      {project.type}
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                      Phase 0{index + 1}
                    </span>
                 </div>
                 <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-xl group-hover:rotate-12">
                    <ArrowUpRight size={24} />
                 </div>
              </div>

              {/* Card Footer - Title & Description */}
              <div className="relative z-10 mt-auto p-10 space-y-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-green rounded-full group-hover:w-16 transition-all duration-700" />
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Infrastructure</p>
                  </div>
                  <h4 className="text-4xl font-black text-white leading-[0.9] italic tracking-tighter group-hover:text-brand-green transition-colors duration-500">
                    {project.title}
                  </h4>
                </div>
                
                <p className="text-slate-300 font-bold leading-tight italic line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  &quot;{project.description}&quot;
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full animate-pulse",
                        project.category === 'government' ? 'bg-brand-blue' : 'bg-emerald-500'
                      )} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {project.category === 'government' ? 'Government Mandate' : 'Industrial Power'}
                      </span>
                   </div>
                   <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">2024</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
