"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Offering } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceScopeProps {
  heading: string;
  items: Offering[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  },
};

export function ServiceScope({ heading, items }: ServiceScopeProps) {
  return (
    <section className="relative py-32 md:py-48 bg-[#F8F9FA] dark:bg-brand-navy overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-gray/50 to-transparent dark:via-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-gray/50 to-transparent dark:via-white/5" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gray/50 to-transparent dark:via-white/5" />
      </div>

      {/* Dynamic Ambient Glow */}
      <div className="absolute -top-[10%] -right-[5%] w-[40%] aspect-square bg-brand-green/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[40%] aspect-square bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section: Editorial Layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 md:mb-32 gap-12">
            <div className="max-w-3xl space-y-8">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="w-12 h-px bg-brand-green" />
                <span className="text-[11px] font-black text-brand-green uppercase tracking-[0.5em]">Capabilities Map</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-6xl md:text-8xl font-black text-brand-navy dark:text-white italic tracking-tighter leading-[0.85]">
                  {heading.split(' ').map((word, i) => (
                    <span key={i} className={cn(i % 2 === 1 ? "text-brand-green" : "")}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                <div className="flex items-center gap-6 pt-4">
                   <div className="h-px bg-brand-gray flex-1 dark:bg-white/10" />
                   <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic">Precision Infrastructure Solutions</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="lg:w-1/3 text-right hidden lg:block">
              <p className="text-5xl font-black text-brand-gray/20 dark:text-white/5 select-none italic leading-none">
                {items.length.toString().padStart(2, '0')} <br/>
                <span className="text-sm tracking-[0.3em] uppercase not-italic opacity-50">Operational Domains</span>
              </p>
            </motion.div>
          </div>
          
          {/* Main Grid: Premium Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
             {items.map((item, index) => {
                const IconComponent = (Icons as any)[item.iconName] || ChevronRight;
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
                    className="group relative flex flex-col p-12 bg-white dark:bg-white/5 rounded-[3.5rem] border border-brand-gray/50 dark:border-white/10 transition-all duration-700 hover:border-brand-green/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
                  >
                    {/* Card Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-transparent to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Background Index Number */}
                    <div className="absolute -top-4 -right-4 text-[10rem] font-black text-brand-gray/10 dark:text-white/5 leading-none select-none italic tracking-tighter group-hover:text-brand-green/5 transition-colors duration-700">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    <div className="relative z-10 space-y-12 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <div className="w-20 h-20 bg-[#F8F9FA] dark:bg-white/5 text-brand-green rounded-3xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-navy group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/[0.02]">
                          <IconComponent size={36} strokeWidth={1.5} />
                        </div>
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="w-12 h-12 rounded-full border border-brand-green flex items-center justify-center text-brand-green"
                        >
                          <ChevronRight size={20} />
                        </motion.div>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-3xl font-black text-brand-navy dark:text-white italic tracking-tighter leading-none group-hover:text-brand-green transition-colors duration-500">
                            {item.title}
                          </h4>
                          <div className="w-12 h-1 bg-brand-green group-hover:w-full transition-all duration-700 origin-left" />
                        </div>
                        <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed pr-4">
                          {item.detail}
                        </p>
                      </div>

                      <div className="pt-8 border-t border-brand-gray/50 dark:border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Global Protocol</span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map((dot) => (
                            <div key={dot} className={cn("w-1 h-1 rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-brand-green transition-colors", `delay-${dot*100}`)} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
             })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
