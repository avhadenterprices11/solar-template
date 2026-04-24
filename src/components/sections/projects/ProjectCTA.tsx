import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ProjectCTA() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10 p-12 md:p-24 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-black/5">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Next Step</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Let&apos;s Build Your <br/><span className="italic">Next Project</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg max-w-xl mx-auto">
              Partner with us for reliable execution and future-ready power solutions across any scale or sector.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black hover:bg-amber-400 transition-all hover:scale-105 shadow-xl shadow-amber-500/20 group"
            >
              Get a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all border border-transparent dark:border-slate-800 group"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
