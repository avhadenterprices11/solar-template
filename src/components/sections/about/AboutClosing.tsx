import React from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export function AboutClosing() {
  return (
    <section className="bg-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Statement Side */}
          <div className="py-24 px-6 lg:px-20 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Final Statement</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Driving Progress Through <span className="text-amber-500 italic">Power & Innovation</span>
              </h3>
            </div>
            <div className="space-y-6 text-slate-400 font-medium text-lg leading-relaxed">
              <p>
                At G&D Brothers, we are committed to building infrastructure that supports growth, sustainability, and reliability.
              </p>
              <p>
                Every project we undertake reflects our dedication to engineering excellence and our vision to contribute meaningfully to the nation’s energy future.
              </p>
            </div>
          </div>

          {/* CTA Side */}
          <div className="bg-amber-500 p-12 md:p-24 flex flex-col justify-center space-y-10 relative">
            {/* Decoy Pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <Globe size={400} className="text-slate-950" />
            </div>

            <div className="relative z-10 space-y-6">
              <h4 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
                Partner <br/>With Us
              </h4>
              <p className="text-slate-950 font-bold max-w-sm">
                Let’s build efficient, reliable, and future-ready power solutions together.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all hover:gap-4 shadow-2xl group"
                >
                  Contact Us
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
