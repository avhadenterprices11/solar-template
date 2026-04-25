import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { SingleProjectHero } from "@/components/sections/projects/single/SingleProjectHero";
import { ProjectInfoStrip } from "@/components/sections/projects/single/ProjectInfoStrip";
import { ProjectTechnicalDetails } from "@/components/sections/projects/single/ProjectTechnicalDetails";
import { ProjectImpact } from "@/components/sections/projects/single/ProjectImpact";
import { RelatedProjects } from "@/components/sections/projects/single/RelatedProjects";
import { ProjectAnalysis } from "@/components/sections/projects/single/ProjectAnalysis";
import { ProjectCTA } from "@/components/sections/projects/ProjectCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | G&D Brothers Project`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-navy">
      <SingleProjectHero 
        title={project.title} 
        type={project.type} 
        image={project.image}
        category={project.category}
      />
      
      {/* Overview & Info Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
               <div className="space-y-6">
                  <h2 className="text-sm font-black text-brand-green uppercase tracking-widest leading-none">Overview</h2>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">Project Mission</h3>
                  <p className="text-2xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic border-l-4 border-brand-gray dark:border-slate-800 pl-8">
                    {project.overview}
                  </p>
               </div>
               
               <ProjectTechnicalDetails 
                 scope={project.scopeOfWork}
                 approach={project.executionApproach}
               />
            </div>
            
            <div className="lg:col-span-1 sticky top-32 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
               <ProjectInfoStrip details={project.details} />
            </div>
          </div>
        </div>
      </section>

      {/* New Technical Analysis Sections */}
      <ProjectAnalysis 
        siteConstraints={project.siteConstraints}
        technicalChallenges={project.technicalChallenges}
        scaleAndComplexity={project.scaleAndComplexity}
        compliance={project.compliance}
      />

      <div className="container mx-auto px-6 py-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
         <div className="mb-12">
            <h2 className="text-sm font-black text-brand-green uppercase tracking-widest leading-none mb-4">Execution Results</h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">Impact & Delivery</h3>
         </div>
         <ProjectImpact impact={project.impact} />
      </div>

      <div className="animate-in fade-in duration-1000 delay-500">
        <RelatedProjects 
          currentProjectId={project.id} 
          category={project.category} 
        />
        <ProjectCTA />
      </div>
    </div>
  );
}
