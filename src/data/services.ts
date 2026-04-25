export interface Offering {
  title: string;
  detail: string;
  iconName: string;
}

export interface ServiceData {
  slug: string;
  hero: {
    title: string;
    subtext: string;
    image: string;
  };
  intro: {
    heading: string;
    content: string;
  };
  offerings: {
    heading: string;
    items: Offering[];
  };
  capabilities: {
    heading: string;
    points: string[];
  };
  process: {
    heading: string;
    steps: string[];
  };
  industries: {
    heading: string;
    points: string[];
  };
  experience: {
    heading: string;
    content?: string;
    list?: string[];
  };
  whyUs: {
    heading: string;
    points: string[];
  };
  cta: {
    headline: string;
    subtext: string;
  };
}

export const services: ServiceData[] = [
  {
    slug: "electrical-contracting-epc",
    hero: {
      title: "Electrical Contracting & EPC Solutions",
      subtext: "End-to-end electrical infrastructure solutions delivered with precision, safety, and compliance.",
      image: "/images/services-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "G&D Brothers provides complete electrical EPC solutions, covering engineering, procurement, and commissioning for high-voltage power projects with uncompromised safety."
    },
    offerings: {
      heading: "Scope of Services",
      items: [
        { title: "33kV & 11kV Bay Feeders", iconName: "Zap", detail: "High-voltage distribution infrastructure." },
        { title: "Substation Development", iconName: "Activity", detail: "Turnkey PSS design & execution." },
        { title: "HT & LT Line Execution", iconName: "Cpu", detail: "Transmission network engineering." },
        { title: "Switchgear Control", iconName: "ShieldCheck", detail: "Precision wiring & automation." },
        { title: "Transformer Augmentation", iconName: "Gauge", detail: "Capacity upgrades up to 15 MVA." }
      ]
    },
    capabilities: {
      heading: "Our Capabilities",
      points: [
        "High Voltage System Expertise",
        "Substation Engineering & Execution",
        "Transmission & Distribution Network Setup",
        "Precision Installation & Testing",
        "Regulatory Compliance & Safety Standards"
      ]
    },
    process: {
      heading: "Our Execution Approach",
      steps: [
        "Site Assessment & Requirement Analysis",
        "Engineering Design & Planning",
        "Procurement & Material Management",
        "Installation & Project Execution",
        "Testing & Commissioning",
        "Final Handover & Documentation"
      ]
    },
    industries: {
      heading: "Industries We Serve",
      points: [
        "Power & Utilities",
        "Government Infrastructure Projects",
        "Industrial & Manufacturing Units",
        "Renewable Energy Projects"
      ]
    },
    experience: {
      heading: "Relevant Project Experience",
      content: "We have executed and are actively involved in major government and infrastructure projects, including:",
      list: ["RDSS Projects", "MSKVY Projects", "Private Industrial Electrical Projects"]
    },
    whyUs: {
      heading: "Why G&D Brothers",
      points: [
        "End-to-End EPC Execution",
        "Strong Government Project Experience",
        "Skilled Engineering & Technical Team",
        "Focus on Safety, Quality & Compliance",
        "Timely and Efficient Project Delivery"
      ]
    },
    cta: {
      headline: "Need Reliable Electrical Infrastructure?",
      subtext: "Partner with us for efficient, compliant, and future-ready electrical EPC solutions."
    }
  },
  {
    slug: "solar-epc-solutions",
    hero: {
      title: "Solar EPC Solutions",
      subtext: "End-to-end solar power solutions executed for maximum efficiency and long-term performance.",
      image: "/images/hero.png"
    },
    intro: {
      heading: "Overview",
      content: "We deliver complete Solar EPC solutions for utility-scale and commercial projects, ensuring seamless execution that maximizes energy output and operational reliability."
    },
    offerings: {
      heading: "Scope of Services",
      items: [
        { title: "Utility-Scale Solar", iconName: "LayoutGrid", detail: "Large plants with full transmission & grid integration." },
        { title: "Rooftop Solar", iconName: "Sun", detail: "Optimized installations for industrial & commercial use." },
        { title: "Hybrid Systems", iconName: "Battery", detail: "Seamless Solar + Grid + DG synchronized setups." },
        { title: "Site Assessment", iconName: "Search", detail: "Comprehensive feasibility and technical mapping." },
        { title: "Grid Synchronization", iconName: "Activity", detail: "Precision testing and grid connectivity." }
      ]
    },
    capabilities: {
      heading: "Our Capabilities",
      points: [
        "End-to-End Solar Project Execution",
        "Structural & Electrical System Integration",
        "High-Efficiency System Design",
        "Grid Connectivity & Synchronization",
        "Compliance with Renewable Energy Standards"
      ]
    },
    process: {
      heading: "Our Execution Approach",
      steps: [
        "Site Analysis & Feasibility Study",
        "System Design & Engineering",
        "Procurement of Solar Components",
        "Installation & Structural Setup",
        "Testing & Grid Synchronization",
        "Commissioning & Performance Validation"
      ]
    },
    industries: {
      heading: "Industries We Serve",
      points: [
        "Government Renewable Energy Projects",
        "Industrial & Manufacturing Units",
        "Commercial Establishments",
        "Agricultural & Rural Solar Projects"
      ]
    },
    experience: {
      heading: "Relevant Project Experience",
      content: "We are actively involved in solar energy projects across government and private sectors, contributing to India’s renewable energy growth.",
      list: ["MSKVY Solar Projects", "Rooftop Solar Installations", "Private Solar EPC Projects"]
    },
    whyUs: {
      heading: "Why G&D Brothers",
      points: [
        "Strong Experience in Government Solar Projects",
        "Integrated EPC Execution Capability",
        "Focus on Efficiency & Long-Term Performance",
        "Skilled Engineering & Technical Team",
        "Compliance with MNRE & Industry Standards"
      ]
    },
    cta: {
      headline: "Ready to Switch to Solar?",
      subtext: "Partner with us to build efficient, reliable, and future-ready solar energy solutions."
    }
  },
  {
    slug: "manufacturing",
    hero: {
      title: "Engineering & Manufacturing Solutions",
      subtext: "Precision-built electrical and structural components designed for durability and performance.",
      image: "/images/about-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "Our manufacturing solutions support critical power infrastructure with precision engineering and strict quality control for transmission networks and solar installations."
    },
    offerings: {
      heading: "What We Manufacture",
      items: [
        { title: "HT & LT Control Panels", iconName: "Zap", detail: "Engineered for safe and efficient power distribution." },
        { title: "Solar Mounting Structures", iconName: "Layout", detail: "Robust and corrosion-resistant mounting solutions." },
        { title: "Transmission Accessories", iconName: "Settings2", detail: "Precision components built for strength and durability." },
        { title: "Custom Fabrication", iconName: "PenTool", detail: "Tailored engineering for specific project needs." }
      ]
    },
    capabilities: {
      heading: "Our Capabilities",
      points: [
        "Precision Engineering & Fabrication",
        "Quality-Controlled Manufacturing Processes",
        "Custom Design & Specifications",
        "Durable Materials & Long Service Life",
        "Compliance with Industry Standards"
      ]
    },
    process: {
      heading: "Our Manufacturing Approach",
      steps: [
        "Design & Engineering",
        "Material Selection & Procurement",
        "Fabrication & Assembly",
        "Quality Inspection & Testing",
        "Finishing & Dispatch"
      ]
    },
    industries: {
      heading: "Applications",
      points: [
        "Electrical Substations",
        "Transmission & Distribution Systems",
        "Solar Power Projects",
        "Industrial Electrical Infrastructure"
      ]
    },
    experience: {
      heading: "Quality & Compliance",
      content: "We follow strict quality control measures at every stage of manufacturing to ensure reliability, safety, and performance.",
      list: ["Adherence to IE Standards", "Tested and Verified Components", "Focus on Safety & Durability", "Consistent Quality Assurance"]
    },
    whyUs: {
      heading: "Why G&D Brothers",
      points: [
        "Strong Integration with EPC & Solar Projects",
        "Engineering-Driven Manufacturing",
        "Reliable and Durable Products",
        "Skilled Workforce & Technical Expertise",
        "Focus on Precision & Quality"
      ]
    },
    cta: {
      headline: "Looking for Reliable Manufacturing Solutions?",
      subtext: "Get high-quality, precision-engineered components built to perform in demanding environments."
    }
  },
  {
    slug: "power-consulting",
    hero: {
      title: "Power Consulting Services",
      subtext: "Expert system design and analysis to optimize your power infrastructure efficiency.",
      image: "/images/services-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "We provide specialized power consulting to help organizations design efficient systems and optimize energy usage through technical expertise and practical execution."
    },
    offerings: {
      heading: "Scope of Services",
      items: [
        { title: "Load Studies & Design", iconName: "LineChart", detail: "Comprehensive system design and load analysis." },
        { title: "Energy Optimization", iconName: "PenTool", detail: "Feasibility analysis to improve system efficiency." },
        { title: "Regulatory Guidance", iconName: "Landmark", detail: "Expert support for government approvals and compliance." },
        { title: "Technical Evaluation", iconName: "Search", detail: "In-depth auditing and performance assessments." }
      ]
    },
    capabilities: {
      heading: "Our Capabilities",
      points: [
        "Data-Driven System Analysis",
        "Efficient Power System Planning",
        "Technical Evaluation & Optimization",
        "Compliance with Regulatory Standards",
        "Integration with EPC & Solar Solutions"
      ]
    },
    process: {
      heading: "Our Approach",
      steps: [
        "Requirement Understanding & Data Collection",
        "System Analysis & Load Assessment",
        "Design Recommendations & Planning",
        "Feasibility & Cost Evaluation",
        "Regulatory Guidance & Documentation",
        "Implementation Support"
      ]
    },
    industries: {
      heading: "Industries We Serve",
      points: [
        "Power & Utility Sector",
        "Industrial & Manufacturing Units",
        "Commercial Infrastructure",
        "Renewable Energy Projects"
      ]
    },
    experience: {
      heading: "Where Our Consulting Adds Value",
      list: [
        "New Power Infrastructure Planning",
        "System Upgrades & Expansion",
        "Energy Cost Reduction Initiatives",
        "Compliance & Regulatory Approvals",
        "Solar Integration Planning"
      ]
    },
    whyUs: {
      heading: "Why G&D Brothers",
      points: [
        "Strong Technical & Engineering Expertise",
        "Practical, Execution-Oriented Consulting",
        "Integrated EPC & Renewable Energy Knowledge",
        "Focus on Efficiency, Compliance & Cost Optimization",
        "Experience with Government & Industrial Projects"
      ]
    },
    cta: {
      headline: "Need Expert Guidance for Your Power Systems?",
      subtext: "Work with our team to design efficient, reliable, and future-ready power infrastructure."
    }
  },
  {
    slug: "operation-maintenance",
    hero: {
      title: "Operation & Maintenance Services",
      subtext: "Ensuring long-term performance, reliability, and efficiency of your power and solar infrastructure.",
      image: "/images/about-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "Our O&M services focus on performance optimization and preventive maintenance to maximize system uptime and long-term returns for your infrastructure."
    },
    offerings: {
      heading: "Scope of Services",
      items: [
        { title: "System Monitoring", iconName: "Activity", detail: "24/7 performance tracking and monitoring." },
        { title: "Scheduled Checks", iconName: "Search", detail: "Periodic preventive maintenance and audits." },
        { title: "Rapid Repair", iconName: "Settings", detail: "Fast fault detection and resolution protocols." },
        { title: "Asset Management", iconName: "ShieldCheck", detail: "Long-term reliability and project ROI focus." }
      ]
    },
    capabilities: {
      heading: "Our Capabilities",
      points: [
        "Continuous System Monitoring",
        "Performance Optimization",
        "Rapid Response & Issue Resolution",
        "Skilled Technical Workforce",
        "Long-Term Asset Management"
      ]
    },
    process: {
      heading: "Our Approach",
      steps: [
        "System Assessment & Baseline Analysis",
        "Scheduled Maintenance Planning",
        "Continuous Monitoring & Reporting",
        "Fault Detection & Immediate Action",
        "Performance Optimization",
        "Periodic Review & Reporting"
      ]
    },
    industries: {
      heading: "Where We Operate",
      points: [
        "Solar Power Plants",
        "Electrical Infrastructure Systems",
        "Industrial Power Systems",
        "Renewable Energy Projects"
      ]
    },
    experience: {
      heading: "Our Focus",
      list: [
        "Maximizing System Efficiency",
        "Reducing Downtime",
        "Ensuring Safety & Compliance",
        "Extending Equipment Lifespan",
        "Improving Energy Output"
      ]
    },
    whyUs: {
      heading: "Why G&D Brothers",
      points: [
        "Strong EPC & Solar Execution Background",
        "Experienced O&M Technical Team",
        "Proactive Maintenance Approach",
        "Focus on Reliability & Performance",
        "Long-Term Client Support"
      ]
    },
    cta: {
      headline: "Ensure Maximum Performance from Your Systems",
      subtext: "Partner with us for reliable operation, proactive maintenance, and long-term efficiency."
    }
  }
];

