import React from "react";

export function ContactMap() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center">
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">Global HQ</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">Our Location</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-black/5">
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest leading-none mb-3">Headquarters</p>
                <p className="text-slate-900 dark:text-white font-black leading-snug">
                  02, Krishna Appt.,<br/>
                  Motwani Road,<br/>
                  Nashik Road, Nashik – 422101
                </p>
              </div>
              
              <div className="p-6 border-l-4 border-amber-500 bg-slate-100 dark:bg-slate-900/50 rounded-r-3xl">
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "Perfectly positioned to serve Industrial clients across Maharashtra and National Solar initiatives."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl relative">
            {/* Google Map Inframe */}
            <iframe 
               title="G&D Brothers Headquarters"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.957545625445!2d73.8153!3d19.9231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzIzLjIiTiA3M8KwNDgnNTUuMSJF!5e0!3m2!1sen!2sin!4v1713958956873!5m2!1sen!2sin" 
               className="absolute inset-0 w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-[180deg]"
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Aesthetic Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white dark:border-slate-950/20 rounded-[3.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
