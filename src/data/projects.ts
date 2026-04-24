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
    description: "Large-scale solar integration and transmission line execution under a government-led renewable energy initiative.",
    image: "/images/solar-project-site.png",
    overview: "The MSKVY 1.0 & 2.0 project (Mukhyamantri Saur Krushi Vahini Yojna) focused on enabling large-scale solar power integration through the development of transmission infrastructure and substation connectivity. G&D Brothers played a dual role as a Transmission Line Contractor and Liaisoning Consultant, ensuring seamless execution, regulatory coordination, and system integration across Nashik, Sinnar, Malegaon, and Dindori.",
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
    description: "Strengthening regional power distribution through transmission line execution and substation connectivity.",
    image: "/images/about-hero.png",
    overview: "The Revamped Distribution Sector Scheme 1.0 focused on strengthening power distribution infrastructure. G&D Brothers executed transmission line works and supported substation connectivity in the Nashik – Trambakeshwar and Igatpuri regions, ensuring efficient system integration and improved grid reliability.",
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
      "Logistical challenges for material and workforce movement"
    ],
    technicalChallenges: [
      "Electrical system complexity and integration",
      "Grid connectivity and synchronization",
      "Execution under strict timeline constraints",
      "Material and supply chain coordination",
      "Environmental and weather-related challenges",
      "System performance optimization"
    ],
    scaleAndComplexity: [
      "Alignment with structured government program guidelines",
      "Coordination across contractors, authorities, and vendors",
      "Handling 33kV / 11kV systems",
      "Integration with existing infrastructure",
      "Parallel execution across multiple work fronts",
      "Time-sensitive deployment within 18-week schedule"
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
    description: "Large-scale multi-location power infrastructure execution including transmission lines, substations and transformers.",
    image: "/images/services-hero.png",
    overview: "RDSS 2.0 (Konkan Project) represents a massive strengthening of power distribution infrastructure. We executed critical components including a 45+ km transmission network, 10 MVA transformers, and new 33/11kV Power Substations across Nashik, Ahilyanagar, Sangamner, and Shree Gonda.",
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
      "Execution across multiple locations, requiring coordinated deployment",
      "Hilly and uneven terrain, impacting alignment and installation",
      "Low mobility areas, limiting access for equipment and transportation",
      "Right of Way (ROW) challenges across roads, private land, and utility corridors",
      "Presence of existing infrastructure, requiring careful integration",
      "Parallel work fronts across geographically distributed sites",
      "Weather-related constraints affecting execution timelines"
    ],
    technicalChallenges: [
      "Managing multi-location execution with synchronized workflows",
      "Ensuring accurate alignment of 45+ km transmission line network",
      "Integration of 33kV / 11kV systems across transmission, substations, and feeders",
      "Achieving stable grid connectivity and synchronization",
      "Installation of multiple transformers (up to 10 MVA) with precision",
      "Maintaining system compatibility and load distribution efficiency",
      "Coordinating parallel execution across substations and line networks",
      "Managing execution sequencing in distributed and low-access locations",
      "Minimizing transmission losses and optimizing system performance",
      "Maintaining quality under strict 40-week timeline"
    ],
    scaleAndComplexity: [
      "Large-scale execution across 45+ km transmission network",
      "Integration of transformers, substations, and feeder systems within a unified network",
      "Multi-location deployment across four major regions",
      "Coordination across multiple technical workstreams simultaneously",
      "Handling high-voltage 33kV / 11kV infrastructure integration",
      "Managing parallel execution across distributed sites",
      "Delivering within a defined 40-week timeline while maintaining quality"
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
    description: "High-volume replacement and deployment of smart meters across multiple locations in the Nashik region.",
    image: "/images/hero.png",
    overview: "The Nashik Smart Meter Replacement Project modernized energy metering for 5000+ consumers. We executed distributed installations across individual premises in Nashik, Ozar, and Pimpalgaon, ensuring accurate metering and seamless integration with the modern energy monitoring grid.",
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
      "Dependency on consumer availability for site access",
      "Presence of non-standard and legacy wiring setups",
      "High-density areas causing logistical and scheduling challenges",
      "Execution in live power supply environments",
      "Weather and local conditions affecting field operations"
    ],
    technicalChallenges: [
      "Ensuring accurate installation across varied consumer setups",
      "Handling non-standard and legacy wiring conditions",
      "Maintaining correct phase alignment and load connections",
      "Seamless integration with existing power supply systems",
      "Installation in live electrical environments with safety control",
      "Maintaining consistent quality across 5000+ distributed units",
      "Device configuration and basic communication setup",
      "Fault detection and rectification during installation",
      "Ensuring data accuracy and reliability post-installation"
    ],
    scaleAndComplexity: [
      "Execution of 5000+ smart meter installations",
      "Multi-location deployment across Nashik, Ozar, and Pimpalgaon",
      "Distributed execution at individual consumer premises",
      "Handling varied environments (residential, commercial, industrial)",
      "Managing non-uniform electrical configurations across sites",
      "Coordinating parallel field teams for large-scale execution",
      "Maintaining installation consistency across all units",
      "Execution in live power environments with safety control"
    ],
    compliance: [
      "Adherence to safety standards during live installations",
      "Compliance with utility and project guidelines",
      "Ensuring structured and safe execution practices",
      "Maintaining documentation for audit and verification"
    ]
  },
  {
    id: "kusum-yojana",
    slug: "kusum-yojana-solar",
    title: "KUSUM Yojana",
    category: "government",
    type: "Solar & Agricultural Projects",
    description: "Solar pump installations and renewable energy solutions focused on agricultural and rural development.",
    image: "/images/hero.png",
    overview: "KUSUM Yojana aims to provide energy security to farmers. G&D Brothers executes solar water pump installations and solarization of existing grid-connected pumps to empower the agricultural sector.",
    details: [
      { label: "Project Type", value: "Solar Pumping Systems" },
      { label: "Target Sector", value: "Agriculture & Rural" },
      { label: "Impact Area", value: "Energy Security for Farmers" },
      { label: "Execution Role", value: "End-to-End Implementation" }
    ],
    scopeOfWork: [
      "Installation of off-grid solar water pumps",
      "Solarization of agricultural feeders",
      "Maintenance and user training",
      "Feasibility studies for rural terrains"
    ],
    executionApproach: [
      "Community-centric planning",
      "Terrain-specific system design",
      "Rapid site mobilization",
      "Post-installation support network"
    ],
    impact: [
      "Empowered rural farming communities",
      "Reduced dependence on diesel pumps",
      "Optimized water usage through solar efficiency",
      "Sustainable agricultural growth"
    ]
  },
  // Private Projects
  {
    id: "industrial-electrical",
    slug: "industrial-electrical-epc",
    title: "Industrial Electrical Projects",
    category: "private",
    type: "Electrical EPC",
    description: "Execution of electrical infrastructure for industrial facilities including substations, transmission lines, and system upgrades.",
    image: "/images/services-hero.png",
    overview: "We deliver full-cycle electrical infrastructure for the industrial sector, ensuring that manufacturing plants and facilities operate with optimal power reliability and safety.",
    details: [
      { label: "Client Category", value: "Industrial & Manufacturing" },
      { label: "Project Focus", value: "Medium & High Voltage" },
      { label: "Standards", value: "IEC & BIS Standards" },
      { label: "Execution Role", value: "Principal Electrical EPC" }
    ],
    scopeOfWork: [
      "Substation design and construction (up to 33kV)",
      "Internal and external cabling systems",
      "Switchyard and control room setup",
      "Regulatory liaisoning and approvals"
    ],
    executionApproach: [
      "Load analysis and demand mapping",
      "Modular infrastructure design",
      "Strict safety and quality checks",
      "Efficiency-driven commissioning"
    ],
    impact: [
      "Uninterrupted industrial power supply",
      "Enhanced plant operational safety",
      "Reduced electrical downtime",
      "Compliant and future-ready grid"
    ]
  },
  {
    id: "solar-installations",
    slug: "private-solar-installations",
    title: "Solar Installations",
    category: "private",
    type: "Solar EPC",
    description: "Rooftop and ground-mounted solar solutions for commercial and industrial clients.",
    image: "/images/solar-industrial-hero.png",
    overview: "Our private sector solar projects focus on maximizing ROI for commercial clients through high-efficiency rooftop and ground-mounted solar plants designed for 25-year lifespans.",
    details: [
      { label: "Solution Type", value: "Commercial & Industrial Solar" },
      { label: "Format", value: "Rooftop / Ground Mount" },
      { label: "Tech Focus", value: "High-Efficiency Photovoltaics" },
      { label: "Financial Goal", value: "OpEx Reduction" }
    ],
    scopeOfWork: [
      "Structural engineering for rooftop solar",
      "High-precision module mounting",
      "Net-metering implementation",
      "Real-time ROI dashboard setup"
    ],
    executionApproach: [
      "Site shadow analysis and layout optimization",
      "Rapid non-intrusive installation",
      "Seamless grid synchronization",
      "Proactive performance maintenance"
    ],
    impact: [
      "Drastic reduction in energy costs",
      "Carbon footprint minimization",
      "Corporate sustainability leadership",
      "Energy price hike protection"
    ]
  },
  {
    id: "custom-engineering",
    slug: "custom-engineering-solutions",
    title: "Custom Engineering Projects",
    category: "private",
    type: "Mixed Services",
    description: "Tailored solutions combining electrical EPC, manufacturing, and consulting based on client-specific requirements.",
    image: "/images/about-industrial-engineering.png",
    overview: "For unique technical challenges, we provide custom-built solutions that integrate our consulting, manufacturing, and EPC capabilities into a single cohesive project delivery.",
    details: [
      { label: "Project Format", value: "Custom Tailored Solution" },
      { label: "Components", value: "Consulting + Mfg + EPC" },
      { label: "Challenge Type", value: "Specialized Power Needs" },
      { label: "Execution Role", value: "Integration Lead" }
    ],
    scopeOfWork: [
      "Bespoke control panel design",
      "System architecture consulting",
      "Turnkey specialized installation",
      "Unique terrain/condition adaptations"
    ],
    executionApproach: [
      "First-principles engineering design",
      "Prototyping and material testing",
      "Collaborative client workshops",
      "Rigorous stress-testing of systems"
    ],
    impact: [
      "Solved critical powering bottlenecks",
      "Client-specific operational efficiency",
      "Innovative engineering benchmarks",
      "Reduced system complexity/redundancy"
    ]
  }
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
