"use client";

import React from "react";
import { Search, PenTool, ShoppingCart, Activity, Zap, Headphones } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ExecutionApproach() {
  const steps = [
    { title: "Requirement Analysis", desc: "Detailed site study and scope definition.", icon: Search },
    { title: "Engineering & Design", desc: "Technical blueprints and system architecture.", icon: PenTool },
    { title: "Procurement", desc: "Manufacturing and vendor coordination.", icon: ShoppingCart },
    { title: "Installation", desc: "On-site execution and system deployment.", icon: Zap },
    { title: "Testing", desc: "Rigorous commissioning and safety checks.", icon: Activity },
    { title: "Ongoing Support", desc: "Post-execution O&M and monitoring.", icon: Headphones }
  ];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-brand-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-3">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em]">The Lifecycle</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Our Execution Approach
          </h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            From the first site visit to long-term maintenance, we follow a rigorous 6-step path to project excellence.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View (lg and above) */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-[40px] left-0 w-full h-px bg-brand-gray dark:bg-slate-800 z-0" />
            
            <div className="grid grid-cols-6 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <StepCard key={idx} step={step} idx={idx} />
              ))}
            </div>
          </div>

          {/* Mobile & Tablet View (below lg) */}
          <div className="lg:hidden px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {steps.map((step, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-full md:basis-1/2">
                    <div className="pt-4 pb-8">
                      <StepCard step={step} idx={idx} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, idx }: { step: any, idx: number }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="w-20 h-20 bg-brand-gray dark:bg-slate-900 rounded-[2rem] flex items-center justify-center text-brand-green border border-brand-gray dark:border-slate-800 group-hover:bg-brand-green group-hover:text-brand-navy group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(103,191,71,0.4)] transition-all duration-700 relative">
        <div className="absolute -top-3 -right-3 w-9 h-9 bg-white dark:bg-brand-navy rounded-full flex items-center justify-center text-[11px] font-black border-2 border-brand-gray dark:border-slate-800 text-brand-navy/40 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-brand-navy group-hover:border-brand-navy transition-all duration-500 z-20 shadow-lg">
          {idx + 1}
        </div>
        <Icon size={32} className="transition-transform duration-700 group-hover:rotate-[15deg] group-hover:scale-110" />
      </div>
      <div className="space-y-1.5 px-2">
        <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-brand-green transition-colors duration-500">
          {step.title}
        </h4>
        <p className="text-xs text-brand-gray0 dark:text-slate-400 font-medium leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-500">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

