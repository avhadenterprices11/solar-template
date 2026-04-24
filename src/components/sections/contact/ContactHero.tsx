import React from "react";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500 rounded-xl text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-amber-500/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Reach Out
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Get in <span className="text-amber-500">Touch.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Connect with us for reliable electrical, solar, and power solutions tailored to your project needs. We're here to power your vision.
          </p>
        </div>
      </div>

      {/* Industrial Grid Deco */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
}
