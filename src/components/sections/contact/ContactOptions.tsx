import React from "react";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

const options = [
  {
    title: "Primary Direct",
    value: "0253 4518455",
    label: "Call Support",
    description: "Available Mon-Sat, 9AM-6PM",
    icon: Phone,
    color: "bg-brand-green",
    href: "tel:02534518455"
  },
  {
    title: "Official Channel",
    value: "info@gdbros.com",
    label: "Email Inquiry",
    description: "24-hour response guarantee",
    icon: Mail,
    color: "bg-brand-navy",
    href: "mailto:info@gdbros.com"
  },
  {
    title: "Engineering HQ",
    value: "Nashik, Maharashtra",
    label: "Visit Office",
    description: "02, Krishna Appt., Nashik Road",
    icon: MapPin,
    color: "bg-brand-green",
    href: "https://goo.gl/maps/placeholder"
  }
];

export function ContactOptions() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, idx) => (
            <a
              key={idx}
              href={option.href}
              className="group relative p-8 bg-white rounded-[2rem] border border-brand-gray hover:border-brand-green/50 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden"
            >
              {/* Subtle accent blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[60px] group-hover:bg-brand-green/10 transition-colors" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${option.color} text-white dark:text-brand-navy rounded-xl flex items-center justify-center shadow-2xl shadow-black/5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <option.icon size={24} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-brand-gray flex items-center justify-center text-slate-300 group-hover:text-brand-green group-hover:border-brand-green transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em]">
                      {option.title}
                    </p>
                    <h4 className="text-xl lg:text-2xl font-black text-brand-navy italic tracking-tighter">
                      {option.value}
                    </h4>
                  </div>
                  <div className="pt-4 border-t border-brand-gray">
                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">
                      {option.label}
                    </p>
                    <p className="text-sm font-medium text-brand-gray0 italic">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
