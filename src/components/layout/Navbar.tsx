"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4",
        isScrolled ? "pt-4" : "pt-0"
      )}
    >
      <div
        className={cn(
          "w-full transition-all duration-500 ease-out flex items-center justify-between px-6 py-3",
          isScrolled 
            ? "max-w-4xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
            : "max-w-7xl bg-transparent py-6 border-transparent rounded-none"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={cn(
            "relative transition-all duration-500 group-hover:scale-105",
            isScrolled ? "w-32 h-10" : "w-40 h-14"
          )}>
            <Image
              src="/images/G&D Brothers Logo.png"
              alt="G&D Brothers Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden md:flex items-center gap-1 transition-all duration-500",
          isScrolled ? "bg-brand-gray/50 dark:bg-slate-800/50 p-1 rounded-full px-2" : "gap-8"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-widest font-black transition-all duration-300 px-4 py-2 rounded-full",
                isScrolled 
                  ? "text-brand-gray0 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white hover:bg-white dark:hover:bg-slate-900 shadow-sm shadow-transparent hover:shadow-black/5" 
                  : "text-slate-700 dark:text-slate-200 hover:text-brand-green"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-2 font-black uppercase tracking-widest transition-all duration-500 group",
              isScrolled 
                ? "bg-brand-green text-brand-navy px-4 py-2 rounded-full text-[10px]" 
                : "bg-brand-navy dark:bg-brand-green text-white dark:text-brand-navy px-6 py-3 rounded-2xl text-xs hover:gap-3 shadow-xl"
            )}
          >
            Get a Quote
            <ArrowRight size={isScrolled ? 14 : 18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors rounded-full p-2",
            isScrolled ? "bg-brand-gray dark:bg-slate-800 text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white dark:bg-brand-navy transition-all duration-500 ease-in-out px-6 pt-24",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-4xl font-black italic tracking-tighter text-slate-900 dark:text-white flex items-center justify-between group",
                mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '500ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
          
          <div className={cn(
            "pt-12 border-t border-brand-gray dark:border-slate-800 space-y-6 transition-all duration-700",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Quick Contact</p>
            <div className="space-y-4">
              <p className="text-2xl font-black text-brand-navy dark:text-white tracking-tighter">info@gdbros.com</p>
              <p className="text-2xl font-black text-brand-green tracking-tighter">+91 0253 4518455</p>
            </div>
            
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-brand-navy text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Callback
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
