import { Metadata } from "next";
import { services } from "@/data/services";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { WhatWeDo } from "@/components/sections/services/WhatWeDo";
import { ServiceSection } from "@/components/sections/services/ServiceSection";
import { ExecutionApproach } from "@/components/sections/services/ExecutionApproach";
import { ServicesWhy } from "@/components/sections/services/ServicesWhy";
import { ServicesCTA } from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "All Services | G&D Brothers",
  description: "Explore our comprehensive range of services in Electrical EPC, Solar Power, Manufacturing, and Power Consulting.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <WhatWeDo />
      
      {/* Unified Dynamic Service Sections */}
      <div className="flex flex-col">
        {services.map((service, idx) => (
          <ServiceSection 
            key={service.slug} 
            data={service} 
            index={idx} 
          />
        ))}
      </div>

      <ExecutionApproach />
      <ServicesWhy />
      <ServicesCTA />
    </div>
  );
}
