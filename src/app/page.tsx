import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Capabilities } from "@/components/sections/Capabilities";
import { Accreditations } from "@/components/sections/Accreditations";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "G&D Brothers | Solar EPC & Electrical Infrastructure Excellence",
  description: "G&D Brothers provides end-to-end Electrical EPC, Solar Energy Solutions, and Power Consulting across India. Certified experts in 33kV/11kV systems and utility-scale solar.",
  keywords: ["Solar EPC", "Electrical EPC India", "Renewable Energy", "Power Consulting Nashik", "G&D Brothers"],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ClientStrip />
      <AboutSnapshot />
      <ServicesGrid />
      <Capabilities />
      <Accreditations />
      <Projects />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
