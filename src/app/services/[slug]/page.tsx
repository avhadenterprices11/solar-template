import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SingleServiceHero } from "@/components/sections/services/SingleServiceHero";
import { ServiceOverview } from "@/components/sections/services/single/ServiceOverview";
import { ServiceScope } from "@/components/sections/services/single/ServiceScope";
import { ServiceCapabilities } from "@/components/sections/services/single/ServiceCapabilities";
import { ServiceProcess } from "@/components/sections/services/single/ServiceProcess";
import { ServiceIndustries } from "@/components/sections/services/single/ServiceIndustries";
import { ServiceExperience } from "@/components/sections/services/single/ServiceExperience";
import { ServiceWhyUs } from "@/components/sections/services/single/ServiceWhyUs";
import { ServicesCTA } from "@/components/sections/services/ServicesCTA";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static routes for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.hero.title} | G&D Brothers`,
    description: service.hero.subtext,
  };
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <SingleServiceHero 
        title={service.hero.title}
        subtext={service.hero.subtext}
        image={service.hero.image}
      />
      <ServiceOverview 
        heading={service.intro.heading}
        content={service.intro.content}
      />
      <ServiceScope 
        heading={service.offerings.heading}
        points={service.offerings.points}
      />
      <ServiceCapabilities 
        heading={service.capabilities.heading}
        points={service.capabilities.points}
      />
      <ServiceProcess 
        heading={service.process.heading}
        steps={service.process.steps}
      />
      <ServiceIndustries 
        heading={service.industries.heading}
        points={service.industries.points}
      />
      <ServiceExperience 
        heading={service.experience.heading}
        content={service.experience.content}
        list={service.experience.list}
      />
      <ServiceWhyUs 
        heading={service.whyUs.heading}
        points={service.whyUs.points}
      />
      <ServicesCTA />
    </div>
  );
}
