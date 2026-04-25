"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, ArrowRight, User, Phone, Mail, FileText, MessageSquare } from "lucide-react";
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-gray rounded-[2.5rem] border border-brand-gray p-10 text-center space-y-8 animate-in zoom-in-95 duration-700">
        <div className="w-24 h-24 bg-brand-green text-brand-navy rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-brand-green/30">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-brand-navy italic tracking-tighter">Inquiry Received.</h3>
          <p className="text-brand-gray0 font-bold text-lg max-w-sm mx-auto leading-tight italic">
            Our engineering team will review your requirements and get back to you within 24 hours.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-brand-green font-black uppercase tracking-[0.3em] text-[10px] hover:text-brand-navy transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div id="form" className="bg-white rounded-[2.5rem] border border-brand-gray p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.04)] relative overflow-hidden group">
      {/* Refined decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[100px] group-hover:bg-brand-green/10 transition-colors" />
      
      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-brand-green rounded-full" />
            <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Strategic Inquiry</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">Send Us a <br/> <span className="text-brand-green">Message.</span></h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                <User size={12} className="text-brand-green" />
                Full Name
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex. Rahul Sharma"
                className="w-full h-12 px-0 bg-transparent border-b-2 border-brand-gray focus:border-brand-green transition-colors text-brand-navy font-bold text-base placeholder:text-slate-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                <Phone size={12} className="text-brand-green" />
                Phone Number
              </label>
              <input 
                required
                type="tel" 
                placeholder="+91 00000 00000"
                className="w-full h-12 px-0 bg-transparent border-b-2 border-brand-gray focus:border-brand-green transition-colors text-brand-navy font-bold text-base placeholder:text-slate-300 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                <Mail size={12} className="text-brand-green" />
                Email Address
              </label>
              <input 
                required
                type="email" 
                placeholder="name@company.com"
                className="w-full h-12 px-0 bg-transparent border-b-2 border-brand-gray focus:border-brand-green transition-colors text-brand-navy font-bold text-base placeholder:text-slate-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                <FileText size={12} className="text-brand-green" />
                Service Required
              </label>
              <div className="relative">
                <select 
                  required
                  className="w-full h-12 px-0 bg-transparent border-b-2 border-brand-gray focus:border-brand-green transition-colors text-brand-navy font-bold text-base appearance-none cursor-pointer focus:outline-none"
                >
                  <option value="" disabled selected>Select Specialization</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ArrowRight size={20} className="rotate-90 text-slate-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              <MessageSquare size={12} className="text-brand-green" />
              Project Requirement
            </label>
            <textarea 
              required
              placeholder="Tell us about your project infrastructure needs..."
              rows={2}
              className="w-full py-2 bg-transparent border-b-2 border-brand-gray focus:border-brand-green transition-colors text-brand-navy font-bold text-base placeholder:text-slate-300 focus:outline-none resize-none"
            />
          </div>

          <div className="pt-4">
            <button 
              disabled={isSubmitting}
              className={cn(
                "w-full h-16 bg-brand-navy text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-brand-green hover:text-brand-navy transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none shadow-2xl shadow-black/10",
                isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                </>
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
               Typical response time: Under 24 Hours
             </p>
          </div>
        </form>
      </div>
    </div>
  );
}
