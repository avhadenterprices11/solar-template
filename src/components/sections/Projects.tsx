"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FolderRoot, Globe, LayoutGrid, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projectCategories = [
  {
    title: "MSKVY 1.0 & 2.0",
    subtitle: "Solar Power Projects",
    status: "Active Implementation",
    description: "Large-scale solar power plant development under the Mukhyamantri Saur Krushi Vahini Yojana.",
    icon: Globe,
    image: "/images/project-mskvy.png",
    className: "md:col-span-8 md:row-span-2 min-h-[450px]"
  },
  {
    title: "RDSS 1.0 & 2.0",
    subtitle: "Distribution Infrastructure",
    status: "Strategic Infrastructure",
    description: "Revamped Distribution Sector Scheme focused on improving operational efficiency.",
    icon: LayoutGrid,
    image: "/images/project-rdss.png",
    className: "md:col-span-4 md:row-span-1 min-h-[300px]"
  },
  {
    title: "Industrial Portfolio",
    subtitle: "Private Sector",
    status: "Tailored Solutions",
    description: "Turnkey electrical and solar solutions for private manufacturing units.",
    icon: FolderRoot,
    image: "/images/project-industrial.png",
    className: "md:col-span-4 md:row-span-1 min-h-[300px]"
  }
];

export function Projects() {
  return (
    <section className="relative py-32 bg-[#F8F9FA] selection:bg-brand-green/20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-24 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[2px] bg-brand-green rounded-full" />
              <span className="text-xs font-bold text-brand-green uppercase tracking-[0.4em]">Project Excellence</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy leading-[0.9] tracking-tighter">
              A Legacy Of <br />
              <span className="text-brand-green italic">Infrastructural</span> Impact.
            </h2>
            <p className="text-brand-navy/60 font-medium text-lg leading-relaxed max-w-xl">
              From mega-scale government solar initiatives to high-precision industrial power systems, 
              we are architecting the future of energy distribution.
            </p>
          </div>

          <div className="pb-4">
            <Link 
              href="/projects"
              className="group inline-flex items-center gap-4 bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-brand-navy transition-all duration-500 shadow-xl shadow-brand-navy/10"
            >
              Explore Full Portfolio
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {projectCategories.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link 
                key={project.title} 
                href="/projects"
                className={cn(
                  "group relative rounded-[2.5rem] overflow-hidden border border-brand-navy/5 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(14,28,83,0.15)]",
                  project.className,
                  "animate-in fade-in slide-in-from-bottom-12 duration-1000",
                  index === 0 ? "delay-100" : index === 1 ? "delay-300" : "delay-500"
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-10 flex flex-col justify-between z-10 text-white">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-500 group-hover:-translate-y-1">
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full group-hover:bg-brand-green group-hover:text-brand-navy group-hover:border-brand-green transition-all duration-500">
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-3xl md:text-4xl font-black italic tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                      </h4>
                      <p className="text-sm font-bold text-brand-green uppercase tracking-[0.3em]">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-white/70 font-medium leading-relaxed max-w-sm group-hover:text-white transition-colors duration-500">
                      {project.description}
                    </p>

                    <div className="pt-4 flex items-center gap-4 group/btn">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green group-hover:text-white transition-colors">
                        <span>View Project</span>
                        <div className="w-8 h-px bg-brand-green group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-brand-green text-brand-navy flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

