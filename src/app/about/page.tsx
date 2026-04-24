import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { GroupCompanies } from "@/components/sections/about/GroupCompanies";
import { Leadership } from "@/components/sections/about/Leadership";
import { OurTeam } from "@/components/sections/about/OurTeam";
import { AboutTrust } from "@/components/sections/about/AboutTrust";
import { AboutClosing } from "@/components/sections/about/AboutClosing";

export const metadata: Metadata = {
  title: "About Us | G&D Brothers",
  description: "Learn about G&D Brothers, our background in Electrical EPC, Renewable Energy, and our commitment to powering the future.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <GroupCompanies />
      <Leadership />
      <OurTeam />
      <AboutTrust />
      <AboutClosing />
    </div>
  );
}
