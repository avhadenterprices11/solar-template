import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const options = [
  {
    title: "Call Us",
    value: "0253 4518455",
    description: "Mon-Sat, 9AM-6PM",
    icon: Phone,
    color: "bg-amber-500",
    href: "tel:02534518455"
  },
  {
    title: "Email Us",
    value: "info@gdbros.com",
    description: "For project inquiries",
    icon: Mail,
    color: "bg-blue-500",
    href: "mailto:info@gdbros.com"
  },
  {
    title: "Visit Us",
    value: "Nashik, MH",
    description: "Headquarters & Engineering",
    icon: MapPin,
    color: "bg-slate-900",
    href: "https://goo.gl/maps/placeholder"
  },
  {
    title: "Quick Response",
    value: "Consultations",
    description: "Project discussions ready",
    icon: MessageSquare,
    color: "bg-emerald-500",
    href: "#form"
  }
];

export function ContactOptions() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, idx) => (
            <a
              key={idx}
              href={option.href}
              className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 hover:bg-white dark:hover:bg-slate-950 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${option.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                <option.icon size={26} />
              </div>
              <div className="space-y-4">
                <div>
                   <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest leading-none mb-2">
                     {option.title}
                   </p>
                   <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight italic">
                     {option.value}
                   </p>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {option.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
