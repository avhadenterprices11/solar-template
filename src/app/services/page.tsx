import { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { WhatWeDo } from "@/components/sections/services/WhatWeDo";
import { ElectricalEPC } from "@/components/sections/services/ElectricalEPC";
import { SolarSolutions } from "@/components/sections/services/SolarSolutions";
import { Manufacturing } from "@/components/sections/services/Manufacturing";
import { Consultancy } from "@/components/sections/services/Consultancy";
import { Maintenance } from "@/components/sections/services/Maintenance";
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
      <ElectricalEPC />
      <SolarSolutions />
      <Manufacturing />
      <Consultancy />
      <Maintenance />
      <ExecutionApproach />
      <ServicesWhy />
      <ServicesCTA />
    </div>
  );
}
