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
    <main className="flex flex-col min-h-screen bg-white overflow-hidden">
      <ContactHero />
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <ContactOptions />
      </div>
      
      {/* Form & Actions Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3 animate-in fade-in slide-in-from-left-8 duration-1000 delay-400">
                 <ContactForm />
              </div>
              
              <div className="lg:col-span-2 space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                 <div className="space-y-4 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-brand-green" />
                      <h3 className="text-sm font-black text-brand-green uppercase tracking-[0.3em] leading-none">Consultation</h3>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-black text-brand-navy italic tracking-tighter leading-tight">Ready for Your Next <br/> Infrastructure Scale?</h4>
                    <p className="text-brand-gray0 font-bold leading-tight italic text-base">
                      &quot;Whether you are scaling a government solar initiative or modernizing an industrial distribution grid, our lead engineers are available to discuss technical feasibility.&quot;
                    </p>
                 </div>
                 
                 <QuickActions />
              </div>
           </div>
        </div>
      </section>

      <div className="animate-in fade-in duration-1000 delay-600">
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
