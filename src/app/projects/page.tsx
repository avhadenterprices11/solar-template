import { Metadata } from "next";
import { ProjectHero } from "@/components/sections/projects/ProjectHero";
import { ProjectIntro } from "@/components/sections/projects/ProjectIntro";
import { ProjectExplorer } from "@/components/sections/projects/ProjectExplorer";
import { ProjectStrengths } from "@/components/sections/projects/ProjectStrengths";
import { ProjectExpertiseStrip } from "@/components/sections/projects/ProjectExpertiseStrip";
import { ProjectCTA } from "@/components/sections/projects/ProjectCTA";

export const metadata: Metadata = {
  title: "Our Projects | G&D Brothers",
  description: "Explore G&D Brothers' portfolio of government and private sector projects in Solar EPC and Electrical Infrastructure.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <ProjectHero />
      <ProjectIntro />
      <ProjectExplorer />
      <ProjectStrengths />
      <ProjectExpertiseStrip />
      <ProjectCTA />
    </div>
  );
}
