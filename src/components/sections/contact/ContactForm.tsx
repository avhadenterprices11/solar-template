"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Electrical EPC",
  "Solar EPC",
  "Manufacturing",
  "Power Consulting",
  "O&M"
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-900 rounded-[3rem] border border-white/10 p-12 text-center space-y-8 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/20">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-white italic">Inquiry Received!</h3>
          <p className="text-slate-400 text-lg max-w-sm mx-auto">
            Our engineering team will review your requirements and get back to you within 24 hours.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-amber-500 font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div id="form" className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-2xl shadow-black/5 relative overflow-hidden">
      {/* Form Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px]" />
      
      <div className="relative z-10 space-y-10">
        <div className="space-y-4">
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">Inquiry Form</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">Send Us a Message</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full h-16 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors text-slate-900 dark:text-white font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="+91 00000 00000"
                className="w-full h-16 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors text-slate-900 dark:text-white font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full h-16 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors text-slate-900 dark:text-white font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Service Required</label>
              <select 
                required
                className="w-full h-16 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors text-slate-900 dark:text-white font-bold appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Select a Service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Project Requirement</label>
            <textarea 
              required
              placeholder="Tell us about your project infrastructure needs..."
              rows={4}
              className="w-full p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors text-slate-900 dark:text-white font-bold resize-none"
            />
          </div>

          <button 
            disabled={isSubmitting}
            className={cn(
              "w-full h-18 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none shadow-xl shadow-black/5",
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Submit Inquiry
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
            We typically respond within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
