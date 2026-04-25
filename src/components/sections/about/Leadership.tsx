import React from "react";
import { Award, Landmark, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Leadership() {
  const leaders = [
    {
      name: "Mr. Suprrabhat Shivaji Daware",
      role: "Director",
      credentials: "B.E. Electrical | Chartered Engineer",
      description: "Driving technical excellence through precision engineering and advanced power system design.",
      expertise: [
        "Control Systems",
        "Power Systems",
        "Transmission",
        "Energy Analytics",
        "System Design"
      ],
      icon: <Award className="text-brand-green" size={32} />
    },
    {
      name: "Mr. Ketan Namdeo Godse",
      role: "Director",
      credentials: "B.E. Electrical",
      description: "Mastering regulatory complexity and large-scale project execution with strategic foresight.",
      expertise: [
        "Liaisoning",
        "Regulatory Compliance",
        "Execution Management",
        "Govt. Approvals",
        "Strategic Sourcing"
      ],
      icon: <Landmark className="text-brand-green" size={32} />
    }
  ];

  return (
    <section className="relative h-auto lg:h-screen lg:min-h-[800px] flex items-center py-20 lg:py-0 bg-white selection:bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Header Column */}
          <div className="lg:w-2/5 space-y-6 lg:space-y-10 w-full">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-brand-green rounded-full" />
                <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Our Visionaries</h2>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-navy italic tracking-tighter leading-[0.9]">
                The <br/> <span className="text-brand-green underline decoration-brand-gray underline-offset-[12px]">Leadership.</span>
              </h3>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-brand-gray0 font-bold leading-tight italic max-w-sm border-l-4 border-brand-green pl-6 py-2">
              &quot;Guided by technical brilliance and regulatory mastery to build India&apos;s energy future with integrity.&quot;
            </p>
          </div>

          {/* Leaders Grid - Compact */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full">
            {leaders.map((leader, index) => (
              <div 
                key={index}
                className="group relative bg-brand-navy rounded-[2.5rem] lg:rounded-[3rem] p-6 lg:p-12 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
              >
                {/* Background Glass Ornament */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 space-y-8 lg:space-y-10">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-green group-hover:text-brand-navy transition-all duration-500 shadow-2xl group-hover:rotate-12">
                      {leader.icon}
                    </div>
                    <ArrowUpRight size={24} className="text-white/20 group-hover:text-brand-green transition-all" />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-brand-green uppercase tracking-[0.4em]">Executive Board</p>
                      <h4 className="text-xl lg:text-3xl font-black text-white italic tracking-tighter leading-none group-hover:text-brand-green transition-colors">
                        {leader.name}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs lg:text-sm font-bold text-slate-400 italic">{leader.role}</p>
                      <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">{leader.credentials}</p>
                    </div>

                    <p className="text-slate-400 font-medium leading-relaxed italic text-xs lg:text-sm group-hover:text-slate-300 transition-colors">
                      &quot;{leader.description}&quot;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((exp) => (
                        <span key={exp} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:border-brand-green/30 group-hover:text-white transition-all">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Number */}
                <div className="absolute bottom-0 right-0 p-8 pointer-events-none select-none opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                  <span className="text-7xl lg:text-9xl font-black text-white italic leading-none tracking-tighter">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
