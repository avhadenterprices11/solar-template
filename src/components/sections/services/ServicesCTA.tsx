import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10 p-12 md:p-20 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-black/[0.02]">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Next Step</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Looking for Reliable <br/>Power Solutions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg max-w-xl mx-auto">
              Get in touch with our team to discuss your project requirements and technical specifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
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
