export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "government" | "private";
  type: string;
  description: string;
  image: string;
  // Detail Fields
  overview: string;
  details: { label: string; value: string }[];
  scopeOfWork: string[];
  executionApproach: string[];
  impact: string[];
  // Missing sections from docs
  siteConstraints?: string[];
  technicalChallenges?: string[];
  scaleAndComplexity?: string[];
  compliance?: string[];
}

export const projects: Project[] = [
  // Government Projects
  {
    id: "mskvy-1-2",
    slug: "mskvy-1-2-solar",
    title: "MSKVY 1.0 & 2.0",
    category: "government",
    type: "Solar & Transmission Infrastructure",
    description: "Large-scale solar integration and transmission infrastructure under a government renewable energy initiative.",
    image: "/images/solar-project-site.png",
    overview: "The MSKVY project focused on large-scale solar integration through advanced transmission infrastructure. G&D Brothers served as a Transmission Contractor and Liaisoning Consultant, ensuring seamless execution across Nashik, Sinnar, and Dindori.",
    details: [
      { label: "Developer", value: "Torrent Power" },
      { label: "Location", value: "Nashik, Sinnar, Malegaon, Dindori" },
      { label: "Capacity", value: "42 MW" },
      { label: "Scope", value: "Transmission & Liaisoning" },
      { label: "Timeline", value: "24 Weeks" }
    ],
    scopeOfWork: [
      "42 MW solar project liaisoning and execution coordination",
      "Development of 50+ km transmission line network with ROW clearances",
      "Substation bay feeder erection and integration",
      "Complete execution of pole erection, conductor stringing, and line integration",
      "Testing, commissioning, and system synchronization support",
      "Coordination with authorities for approvals and compliance"
    ],
    executionApproach: [
      "Site survey & route finalization",
      "Design & engineering (Transmission)",
      "Foundation & pole erection",
      "Hardware installation & conductor stringing",
      "Statutory approvals & electricity board coordination",
      "Energization approval & handover"
    ],
    impact: [
      "Successfully supported 42 MW solar project liaisoning",
      "Facilitated 50+ km transmission line network",
      "Achieved compliance with NHAI, BPCL, Forest, PWD, and HAL",
      "Delivered execution within a 24-week timeline despite hilly terrain"
    ],
    siteConstraints: [
      "Major Right of Way (ROW) challenges across social and infrastructure corridors",
      "Multiple government approvals (NHAI, BPCL, HPCL, Forest, PWD, HAL, MES)",
      "Execution across hilly terrain and low-mobility areas",
      "Limited accessibility for material and equipment movement"
    ],
    technicalChallenges: [
      "Electrical system complexity and integration",
      "Grid connectivity and synchronization requirements",
      "Execution under tight project timelines",
      "Material and supply chain coordination",
      "Environmental and weather-related challenges",
      "Performance optimization across transmission network"
    ],
    scaleAndComplexity: [
      "Alignment with structured government program guidelines",
      "Coordination across contractors, authorities, and multiple teams",
      "Handling 33kV / 11kV electrical systems",
      "Integration with existing infrastructure",
      "Parallel execution across multiple sites",
      "Time-sensitive deployment within defined schedule"
    ],
    compliance: [
      "Regulatory approvals and statutory clearances",
      "Compliance with electrical standards and safety norms",
      "Inspection and certification processes",
      "Documentation and reporting requirements",
      "Grid and utility compliance for system integration"
    ]
  },
  {
    id: "rdss-1",
    slug: "rdss-1-infrastructure",
    title: "RDSS 1.0",
    category: "government",
    type: "Transmission Line & Substation Infrastructure",
    description: "Strengthening regional power distribution through transmission line execution.",
    image: "/images/about-hero.png",
    overview: "The RDSS 1.0 project strengthened regional power distribution. G&D Brothers executed transmission line works and substation connectivity in the Nashik – Trambakeshwar and Igatpuri regions.",
    details: [
      { label: "Developer", value: "Ashoka Buildcon" },
      { label: "Location", value: "Nashik – Trambakeshwar & Igatpuri" },
      { label: "Capacity", value: "20+ km Transmission Network" },
      { label: "Scope", value: "Transmission & Bay Feeder" },
      { label: "Timeline", value: "18 Weeks" }
    ],
    scopeOfWork: [
      "Execution of 20+ km transmission line network",
      "Substation bay feeder erection and integration",
      "Pole erection, conductor stringing, and line alignment",
      "Installation of insulators, cross arms, and electrical hardware",
      "Testing, commissioning, and system integration support"
    ],
    executionApproach: [
      "Project initiation & site survey",
      "Route finalization & alignment planning",
      "Foundation work & pole erection",
      "Hardware installation & conductor stringing",
      "Grid connectivity & synchronization testing"
    ],
    impact: [
      "Successfully executed 20+ km transmission network",
      "Improved regional power distribution reliability",
      "Completed execution within tight 18-week schedule",
      "Managed successful deployment across hilly terrain"
    ],
    siteConstraints: [
      "Execution across hilly terrain conditions",
      "Limited accessibility in low mobility areas",
      "Logistical challenges for material movement"
    ],
    technicalChallenges: [
      "Electrical system complexity and integration",
      "Grid connectivity and synchronization",
      "Execution under strict timeline constraints",
      "Environmental and weather-related challenges"
    ],
    scaleAndComplexity: [
      "Alignment with government program guidelines",
      "Coordination across contractors and authorities",
      "Integration with existing infrastructure",
      "Parallel execution across multiple work fronts"
    ],
    compliance: [
      "Adherence to electrical safety standards and project specifications",
      "Compliance with utility and grid integration requirements",
      "Ensuring safe and structured execution practices"
    ]
  },
  {
    id: "rdss-2",
    slug: "rdss-2-infrastructure",
    title: "RDSS 2.0",
    category: "government",
    type: "Transmission, Substation & Power Development",
    description: "Large-scale multi-location infrastructure execution including transmission lines and substations.",
    image: "/images/services-hero.png",
    overview: "The RDSS 2.0 Konkan Project modernized regional distribution infrastructure. We executed a 45+ km transmission network, 10 MVA transformers, and new 33/11kV substations across multiple regions.",
    details: [
      { label: "Developer", value: "NCC" },
      { label: "Location", value: "Nashik, Ahilyanagar, Sangamner, Shree Gonda" },
      { label: "Infrastructure", value: "45km Line, 2 PSS Substations" },
      { label: "Transformers", value: "5+ Units (up to 10 MVA)" },
      { label: "Timeline", value: "40 Weeks" }
    ],
    scopeOfWork: [
      "Execution of 45+ km overhead transmission line",
      "Installation of 5+ transformers (up to 10 MVA)",
      "Erection of 4+ additional bay feeders (3+1 configuration)",
      "Development support for 2 new 33/11kV Power Substations",
      "Complete site foundation and system synchronization"
    ],
    executionApproach: [
      "Multi-location hardware deployment",
      "Parallel work fronts at substations and line routes",
      "High-precision 10 MVA transformer placement",
      "Isolator, breaker, and busbar configuration",
      "Real-time coordination across four major regions"
    ],
    impact: [
      "Significantly strengthened regional grid capacity",
      "Modernized power flow through new substation units",
      "Handled complex ROW challenges across private and public land",
      "Improved operational efficiency across Konkan region utility grid"
    ],
    siteConstraints: [
      "Multi-location deployment requiring synchronized workflows",
      "Hilly terrain impacting alignment and installation",
      "Major Right of Way (ROW) challenges across public corridors",
      "Parallel work fronts across distributed sites"
    ],
    technicalChallenges: [
      "Managing multi-location execution with synchronized workflows",
      "Accurate alignment of 45+ km transmission network",
      "Stable grid connectivity and synchronization",
      "Precision installation of 10 MVA transformers",
      "Maintaining quality under strict 40-week timeline"
    ],
    scaleAndComplexity: [
      "Large-scale execution across 45+ km transmission network",
      "Integration of transformers and substation units",
      "Multi-location deployment across four major regions",
      "Handling high-voltage 33kV / 11kV infrastructure"
    ],
    compliance: [
      "Adherence to electrical safety standards and project specifications",
      "Compliance with grid and utility integration requirements",
      "Ensuring structured execution aligned with project guidelines",
      "Maintaining safety protocols during all phases of execution"
    ]
  },
  {
    id: "smart-metering",
    slug: "smart-metering-infrastructure",
    title: "Smart Metering Project",
    category: "government",
    type: "Large-Scale Metering Infrastructure Upgrade",
    description: "High-volume smart meter deployment for modernized energy monitoring.",
    image: "/images/hero.png",
    overview: "The Nashik Smart Meter Project modernized energy monitoring for 5000+ consumers. We executed distributed installations across individual premises in Nashik, Ozar, and Pimpalgaon.",
    details: [
      { label: "Developer", value: "NCC" },
      { label: "Location", value: "Nashik, Ozar & Pimpalgaon" },
      { label: "Capacity", value: "5000+ Units" },
      { label: "Scope", value: "Installation & Replacement" },
      { label: "Timeline", value: "40 Weeks" }
    ],
    scopeOfWork: [
      "Replacement of 5000+ existing meters with smart meters",
      "Site survey and consumer mapping across 3 regions",
      "Safe removal and disposal of legacy metering equipment",
      "Electrical integration and phase alignment verification",
      "Testing and validation of digital monitoring communication"
    ],
    executionApproach: [
      "Field team deployment strategy",
      "Individual premise accessibility coordination",
      "Live power supply environment safety protocols",
      "Digital data recording and audit documentation",
      "Systematic load connection verification"
    ],
    impact: [
      "Enabled large-scale transition to smart energy monitoring",
      "Standardized installations across diverse consumer setups",
      "Successfully installed 5000+ units in live environments",
      "Improved grid measurement accuracy for the region"
    ],
    siteConstraints: [
      "Multi-location execution across Nashik region",
      "Distributed installations at individual consumer premises",
      "Limited space and accessibility at installation points",
      "Execution in live power supply environments"
    ],
    technicalChallenges: [
      "Accurate installation across varied consumer setups",
      "Correct phase alignment and load connections",
      "Seamless integration with existing systems",
      "Maintaining quality across 5000+ distributed units",
      "Ensuring data accuracy post-installation"
    ],
    scaleAndComplexity: [
      "Execution of 5000+ smart meter installations",
      "Multi-location deployment across three major regions",
      "Managing non-uniform configurations across sites",
      "Coordinating parallel field teams for large-scale delivery"
    ],
    compliance: [
      "Adherence to safety standards during live installations",
      "Compliance with utility and project guidelines",
      "Ensuring structured and safe execution practices",
      "Maintaining documentation for audit and verification"
    ]
  },
];

export const projectExpertise = [
  "Solar Power Plants",
  "Electrical Substations (33/11kV)",
  "Transmission & Distribution Lines",
  "Industrial Power Infrastructure",
  "Renewable Energy Systems"
];

export const executionStrengths = [
  "Experience across government-led infrastructure projects",
  "Capability to handle large-scale solar and electrical systems",
  "Strong technical and engineering support",
  "Focus on compliance, safety, and timely delivery"
];
