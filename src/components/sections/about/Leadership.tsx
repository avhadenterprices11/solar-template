import React from "react";
import { Award, BookOpen, Calculator, Landmark, ShieldCheck, User } from "lucide-react";

export function Leadership() {
  const leaders = [
    {
      name: "Mr. Suprrabhat Shivaji Daware",
      role: "Director",
      credentials: "B.E. Electrical | Chartered Engineer",
      expertise: [
        "Control Systems",
        "Power Systems",
        "Transmission Installations",
        "Energy Calculations",
        "System Design"
      ],
      icon: <Award className="text-amber-500" size={40} />
    },
    {
      name: "Mr. Ketan Namdeo Godse",
      role: "Director",
      credentials: "B.E. Electrical",
      expertise: [
        "Liaisoning",
        "Regulatory Processes",
        "Execution Management",
        "Govt. Approvals",
        "Vendor Coordination"
      ],
      icon: <Landmark className="text-amber-500" size={40} />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em]">Our Visionaries</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Leadership Team
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Guided by technical brilliance and regulatory mastery to build India&apos;s energy future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-2xl group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 bg-white dark:bg-slate-950 rounded-3xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform">
                  {leader.icon}
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white">{leader.name}</h4>
                    <p className="text-amber-500 font-bold text-sm tracking-wide">{leader.role}</p>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{leader.credentials}</p>
                  </div>
                  
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />
                  
                  <div className="space-y-3">
                    <p className="text-xs font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest">Key Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((exp) => (
                        <span key={exp} className="px-3 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-400">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
