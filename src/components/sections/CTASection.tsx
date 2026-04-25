import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-brand-green)_0%,_transparent_40%)] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--color-brand-blue)_0%,_transparent_30%)] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-brand-green rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden relative group">
          {/* Decorative Ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 border-[32px] border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] tracking-tight">
                  Let’s Power Your <br/>Next <span className="text-white">Project.</span>
                </h2>
                <p className="text-slate-900/70 text-lg font-medium max-w-md">
                  Partner with the energy experts. Whether it&apos;s a 33kV substation or a MW-scale solar plant, we deliver precision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:gap-3 group shadow-xl"
                >
                  Contact Us Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-green bg-slate-200" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-brand-navy/80">Join 50+ <br/>Industrial Partners</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 space-y-3">
                <Phone className="text-brand-navy" size={24} />
                <p className="text-xs font-black text-brand-navy/50 uppercase tracking-widest">Call Expert</p>
                <p className="text-lg font-bold text-brand-navy">0253 4518455</p>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 space-y-3">
                <Mail className="text-brand-navy" size={24} />
                <p className="text-xs font-black text-brand-navy/50 uppercase tracking-widest">Email Us</p>
                <p className="text-lg font-bold text-brand-navy">info@gdbros.com</p>
              </div>
              <div className="sm:col-span-2 p-6 bg-brand-navy/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-brand-navy" size={24} />
                  <span className="font-bold text-brand-navy">Instant Support on WhatsApp</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <MessageSquare size={20} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
