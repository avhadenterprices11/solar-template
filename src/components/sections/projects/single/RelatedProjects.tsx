import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface RelatedProjectsProps {
  currentProjectId: string;
  category: "government" | "private";
}

export function RelatedProjects({ currentProjectId, category }: RelatedProjectsProps) {
  // Find projects in the same category, excluding the current one
  const related = projects
    .filter((p) => p.category === category && p.id !== currentProjectId)
    .slice(0, 3);

  // If not enough in same category, top up with others
  if (related.length < 3) {
    const others = projects
      .filter((p) => p.id !== currentProjectId && !related.find(r => r.id === p.id))
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  return (
    <section className="py-24 border-t border-brand-gray dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
           <div className="space-y-4">
              <h2 className="text-sm font-black text-brand-green uppercase tracking-widest leading-none">Discovery</h2>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">Related Projects</h3>
           </div>
           <Link 
             href="/projects" 
             className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-green transition-colors"
           >
             View All Portfolio
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {related.map((project) => (
             <Link 
               key={project.id} 
               href={`/projects/${project.slug}`}
               className="group flex flex-col gap-6"
             >
                <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden border border-brand-gray dark:border-slate-800">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/0 transition-colors" />
                   <div className="absolute top-6 right-6 p-3 bg-white dark:bg-slate-900 rounded-2xl opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all text-brand-green">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
                <div className="px-2 space-y-2">
                   <p className="text-[10px] font-black text-brand-green uppercase tracking-widest leading-none">
                     {project.type}
                   </p>
                   <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-brand-green transition-colors tracking-tight italic">
                     {project.title}
                   </h4>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </section>
  );
}
