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
    { id: "private", label: "Private Sector", icon: Building2 },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
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
                  ? "bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-black/5"
            >
              {/* Image Header */}
              <div className="relative h-64 w-full overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-amber-500 shadow-sm">
                  {project.type}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-10 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight italic tracking-tighter">
                    {project.title}
                  </h4>
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-amber-500 transition-colors rounded-lg shrink-0">
                     <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        project.category === 'government' ? 'bg-blue-500' : 'bg-emerald-500'
                      )} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {project.category === 'government' ? 'Public Initiative' : 'Direct Contract'}
                      </span>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
