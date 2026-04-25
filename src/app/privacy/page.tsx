"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const tocItems = [
  { id: "introduction", label: "01 Introduction" },
  { id: "information-collect", label: "02 Information" },
  { id: "how-we-use", label: "03 Usage" },
  { id: "sharing", label: "04 Sharing" },
  { id: "security", label: "05 Security" },
  { id: "cookies", label: "06 Cookies" },
  { id: "third-party", label: "07 Third-Party" },
  { id: "rights", label: "08 Your Rights" },
  { id: "updates", label: "09 Updates" },
  { id: "contact", label: "10 Contact" },
];

export default function PrivacyPage() {
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
    <main className="flex flex-col min-h-screen bg-white dark:bg-brand-navy pt-32 pb-24 overflow-hidden">
      {/* Legal SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - G&D Brothers",
            "description": "Privacy policy and data protection standards for G&D Brothers Solar & Electrical Solutions.",
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
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-gray dark:bg-slate-900 rounded-xl text-brand-gray0 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Compliance & Legal
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-none">
                Privacy <span className="text-brand-green">Policy.</span>
             </h1>
             <div className="flex items-center gap-4 text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                <span>Effective Date: 24/04/2026</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>Version 1.0</span>
             </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
            {/* Sticky Sidebar Navigation - Hidden on Print */}
            <aside className="lg:col-span-1 sticky top-32 hidden lg:block print:hidden animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              <nav className="space-y-1">
                <p className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-6 ml-1">Archive Navigation</p>
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                      activeSection === item.id 
                        ? "bg-slate-900 text-white dark:bg-white dark:text-brand-navy shadow-xl shadow-black/5 scale-[1.02]" 
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
              prose-h2:text-2xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-brand-green prose-h2:mt-16 prose-h2:mb-6 first:prose-h2:mt-0
              prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium prose-p:text-slate-600 dark:prose-p:text-slate-400
              prose-li:text-lg prose-li:font-medium prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-ul:list-disc prose-ul:pl-6
              animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400
              print:lg:col-span-4">
              
              <section id="introduction" className="scroll-mt-32">
                <h2>1. Introduction</h2>
                <p>
                  G&D Brothers (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us. By interacting with our platform, you agree to the terms outlined in this document.
                </p>
              </section>

              <section id="information-collect" className="scroll-mt-32">
                <h2>2. Information We Collect</h2>
                <p>
                  We collect only the information that you voluntarily provide to us through our contact form or direct communication. This includes:
                </p>
                <ul>
                  <li>Full Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Project requirements or detailed inquiry parameters</li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-32">
                <h2>3. How We Use Your Information</h2>
                <p>
                  The information we collect is used strictly for technical and business coordination:
                </p>
                <ul>
                  <li>To respond accurately to your project inquiries</li>
                  <li>To communicate regarding engineering requirements or site logistics</li>
                  <li>To provide relevant service information or technical feasibility studies</li>
                  <li>To maintain internal records for long-term project support</li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-32">
                <h2>4. Information Sharing</h2>
                <p>
                  We maintain a strict zero-sale policy. We do not sell, trade, or rent your personal information to third parties. We may share information only:
                </p>
                <ul>
                  <li>When required by law or regulatory authorities (e.g., government audits)</li>
                  <li>With trusted service providers, solely when necessary for critical business operations or project execution.</li>
                </ul>
              </section>

              <section id="security" className="scroll-mt-32">
                <h2>5. Data Security</h2>
                <p>
                  We take appropriate industrial-grade measures to protect your personal information from unauthorized access, misuse, or disclosure. Our internal systems are monitored to ensure data integrity during project coordination.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-32">
                <h2>6. Cookies</h2>
                <p>
                  Our website does not actively collect personal data through advanced tracking cookies. Basic website functionality may use standard browser cookies to ensure a seamless technical experience.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-32">
                <h2>7. Third-Party Links</h2>
                <p>
                  Our website may contain links to external project partners or regulatory websites. We are not responsible for the privacy practices of those external entities.
                </p>
              </section>

              <section id="rights" className="scroll-mt-32">
                <h2>8. Your Rights</h2>
                <p>
                  Ensuring your control over your data is paramount. You have the right to:
                </p>
                <ul>
                  <li>Request access to the personal information we hold</li>
                  <li>Request correction or deletion of your information from our project databases</li>
                </ul>
                <p>
                  To exercise these rights, please contact our administrative team using the details in Section 10.
                </p>
              </section>

              <section id="updates" className="scroll-mt-32">
                <h2>9. Updates to This Policy</h2>
                <p>
                  As our engineering services evolve, we may update this Privacy Policy. Any changes will be posted on this page with a revised “Effective Date.”
                </p>
              </section>

              <section id="contact" className="scroll-mt-32">
                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy or G&D Brothers data practices, please reach out:
                </p>
                <div className="bg-brand-gray dark:bg-slate-900 p-8 rounded-3xl border border-brand-gray dark:border-slate-800 not-prose space-y-4">
                  <p className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-2xl italic">G&D Brothers</p>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    02, Krishna Appt., Motwani Road,<br/>
                    Nashik Road, Nashik – 422101
                  </p>
                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <p className="text-sm font-black text-brand-green uppercase tracking-widest">Phone: 0253 4518455</p>
                      <p className="text-sm font-black text-brand-green uppercase tracking-widest">Email: info@gdbros.com</p>
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
