"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const tocItems = [
  { id: "introduction", label: "01 Introduction" },
  { id: "use-of-website", label: "02 Web Use" },
  { id: "services-disclaimer", label: "03 Disclaimer" },
  { id: "intellectual-property", label: "04 Prop. Rights" },
  { id: "limitation", label: "05 Liability" },
  { id: "third-party", label: "06 Outsourcing" },
  { id: "privacy-link", label: "07 Privacy" },
  { id: "changes", label: "08 Updates" },
  { id: "governing-law", label: "09 Legal Code" },
  { id: "contact-info", label: "10 Direct Line" },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 overflow-hidden">
       {/* Legal SEO Metadata */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions - G&D Brothers",
            "description": "Professional terms of service and governance guidelines for G&D Brothers Solar & Electrical solutions.",
            "datePublished": "2026-04-24",
            "publisher": {
              "@type": "Organization",
              "name": "G&D Brothers"
            }
          })
        }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Legal Header */}
          <header className="mb-20 space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Service Governance
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-none">
                Terms <span className="text-amber-500">& Conditions.</span>
             </h1>
             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                <span className="flex items-center gap-2 italic text-amber-500/80">Governing Law: India</span>
                <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                <span>Effective Date: 24/04/2026</span>
                <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                <span>Version 1.0</span>
             </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
            {/* Sticky Sidebar Navigation - Hidden on Print */}
            <aside className="lg:col-span-1 sticky top-32 hidden lg:block print:hidden animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              <nav className="space-y-1">
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-6 ml-1">Archive Navigation</p>
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                      activeSection === item.id 
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xl shadow-black/5 scale-[1.02]" 
                        : "text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Legal Content Layout */}
            <article className="lg:col-span-3 prose prose-slate dark:prose-invert max-w-none 
              prose-h2:text-2xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-amber-500 prose-h2:mt-16 prose-h2:mb-6 first:prose-h2:mt-0
              prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium prose-p:text-slate-600 dark:prose-p:text-slate-400
              prose-li:text-lg prose-li:font-medium prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-ul:list-disc prose-ul:pl-6
              animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400
              print:lg:col-span-4">
              
              <section id="introduction" className="scroll-mt-32">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to G&D Brothers (“we”, “our”, or “us”). By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. These terms govern our professional relationship regarding your use of this digital platform. If you do not agree with any part of these terms, please refrain from using this website.
                </p>
              </section>

              <section id="use-of-website" className="scroll-mt-32">
                <h2>2. Use of Website</h2>
                <p>
                  The content on this website is provided for general information about our industrial and solar engineering services, including Electrical EPC, Solar Solutions, Manufacturing, and Power Consulting. You agree to:
                </p>
                <ul>
                  <li>Use the website only for lawful purposes and professional inquiry</li>
                  <li>Not misuse or attempt to disrupt the website’s technical functionality</li>
                  <li>Not copy, reproduce, or distribute the proprietary content without explicit written permission</li>
                </ul>
              </section>

              {/* Highlighted Services Disclaimer */}
              <section id="services-disclaimer" className="scroll-mt-32 not-prose my-16 p-8 md:p-12 bg-amber-500 rounded-[3rem] text-slate-950 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="relative z-10">
                    <h2 className="text-sm font-black uppercase tracking-widest leading-none mb-4 opacity-70">Major Notice</h2>
                    <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6">3. Services Disclaimer</h3>
                    <p className="text-lg font-bold leading-relaxed mb-8">
                      All information provided on this website is for general understanding of our engineering capabilities and project history.
                    </p>
                    <ul className="space-y-4 font-bold text-sm uppercase tracking-wider">
                      <li className="flex gap-3">
                        <span className="w-1 h-1 bg-slate-950 rounded-full mt-2" />
                        Project scope, pricing, and technical timelines are subject to individual discussion and formal agreement.
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1 h-1 bg-slate-950 rounded-full mt-2" />
                        Submission of a digital inquiry form does not create a binding contractual lead or relationship.
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1 h-1 bg-slate-950 rounded-full mt-2" />
                        Final engagement terms will be defined exclusively through formal written project agreements.
                      </li>
                    </ul>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-32">
                <h2>4. Intellectual Property</h2>
                <p>
                  All content on this website, including but not limited to technical text, project graphics, logos, and industrial design language, is the property of G&D Brothers unless stated otherwise. Unauthorized use, reproduction, or distribution of these assets is strictly prohibited and protected under Indian intellectual property laws.
                </p>
              </section>

              <section id="limitation" className="scroll-mt-32">
                <h2>5. Limitation of Liability</h2>
                <p>
                  G&D Brothers shall not be held liable for:
                </p>
                <ul>
                  <li>Any direct, indirect, or incidental damages arising from the use or inability to use this website</li>
                  <li>Minor technical errors or technical omissions in the website's digital content</li>
                  <li>Temporary unavailability of the platform due to maintenance or third-party infrastructure failures</li>
                </ul>
              </section>

              <section id="third-party" className="scroll-mt-32">
                <h2>6. Third-Party Links</h2>
                <p>
                  This website may contain links to external regulatory bodies, project partners, or material suppliers. We are not responsible for the content, data accuracy, or privacy practices of these third-party entities.
                </p>
              </section>

              <section id="privacy-link" className="scroll-mt-32">
                <h2>7. Privacy</h2>
                <p>
                  Your use of this website is also governed by our <a href="/privacy" className="text-amber-500 font-bold hover:underline">Privacy Policy</a>, which outlines our data protection and collection standards.
                </p>
              </section>

              <section id="changes" className="scroll-mt-32">
                <h2>8. Changes to Terms</h2>
                <p>
                  As our infrastructure services expand, we may update these Terms & Conditions at any time. Changes will be posted on this page with an updated "Effective Date" marker.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-32">
                <h2>9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and interpreted in accordance with the laws of India. Any legal proceedings related to these terms shall be subject to the jurisdiction of the courts in Nashik, Maharashtra.
                </p>
              </section>

              <section id="contact-info" className="scroll-mt-32">
                <h2>10. Contact Information</h2>
                <p>
                  For any questions regarding these Terms & Conditions, please contact our legal and administrative team:
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 not-prose space-y-4">
                    <p className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-2xl italic">G&D Brothers</p>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      02, Krishna Appt., Motwani Road,<br/>
                      Nashik Road, Nashik – 422101
                    </p>
                    <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm font-black text-amber-500 uppercase tracking-widest">Phone: 0253 4518455</p>
                        <p className="text-sm font-black text-amber-500 uppercase tracking-widest">Email: info@gdbros.com</p>
                    </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
