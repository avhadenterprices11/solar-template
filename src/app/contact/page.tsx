import { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOptions } from "@/components/sections/contact/ContactOptions";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { QuickActions } from "@/components/sections/contact/QuickActions";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { WhyWorkWithUs } from "@/components/sections/contact/WhyWorkWithUs";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | G&D Brothers Solar & Electrical Solutions",
  description: "Get in touch with G&D Brothers for reliable electrical, solar, and power solutions in Nashik and across India.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      <ContactHero />
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <ContactOptions />
      </div>
      
      {/* Form & Actions Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-3 animate-in fade-in slide-in-from-left-8 duration-700 delay-400">
                 <ContactForm />
              </div>
              
              <div className="lg:col-span-2 space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 delay-500">
                 <div className="space-y-6 pt-12">
                    <h3 className="text-sm font-black text-amber-500 uppercase tracking-widest leading-none">Consultation</h3>
                    <h4 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">Ready for Your Next Infrastructure Scale?</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Whether you are scaling a government solar initiative or modernizing an industrial distribution grid, our lead engineers are available to discuss technical feasibility and execution roadmaps.
                    </p>
                 </div>
                 
                 <QuickActions />
              </div>
           </div>
        </div>
      </section>

      <div className="border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-1000 delay-600">
        <WhyWorkWithUs />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
        <ContactMap />
      </div>

      <div className="animate-in fade-in duration-1000 delay-800">
        <ContactCTA />
      </div>
    </main>
  );
}
