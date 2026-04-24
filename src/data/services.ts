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
    points: string[];
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
      subtext: "End-to-end electrical infrastructure solutions designed, executed, and delivered with precision, safety, and compliance.",
      image: "/images/services-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "G&D Brothers provides complete electrical EPC solutions, covering design, engineering, procurement, installation, and commissioning of power infrastructure projects. With proven expertise in high and medium voltage systems, we ensure reliable, efficient, and compliant execution across industrial and government projects."
    },
    offerings: {
      heading: "Scope of Services",
      points: [
        "33kV & 11kV Bay Feeders",
        "Substation Development (33/11kV PSS)",
        "HT & LT Line Execution (Single & Double Circuit)",
        "Switchgear Control Wiring",
        "Transformer Augmentation (up to 15 MVA)"
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
      list: ["RDSS Projects", "MSKVY Projects", "KUSUM Yojana", "Private Industrial Electrical Projects"]
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
      subtext: "End-to-end solar power solutions designed and executed for efficiency, scalability, and long-term performance.",
      image: "/images/hero.png"
    },
    intro: {
      heading: "Overview",
      content: "G&D Brothers delivers complete Solar EPC (Engineering, Procurement, and Construction) solutions for utility-scale, commercial, and rooftop projects. From system design and engineering to installation and commissioning, we ensure seamless execution of solar power systems that maximize energy output and operational efficiency."
    },
    offerings: {
      heading: "Scope of Services",
      points: [
        "Utility-Scale Solar Power Plants",
        "Rooftop Solar Installations (Industrial & Commercial)",
        "Hybrid Energy Systems (Solar + Grid + DG)",
        "Site Assessment & System Design",
        "Complete Project Execution & Commissioning"
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
      list: ["MSKVY Solar Projects", "KUSUM Yojana Projects", "Rooftop Solar Installations", "Private Solar EPC Projects"]
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
      subtext: "Precision-built electrical and structural components designed for durability, performance, and industry compliance.",
      image: "/images/about-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "G&D Brothers offers advanced manufacturing solutions supporting power infrastructure and renewable energy projects. Our focus on precision engineering, quality control, and material reliability ensures products that meet demanding operational standards. We manufacture critical components used across electrical systems, transmission networks, and solar installations."
    },
    offerings: {
      heading: "What We Manufacture",
      points: [
        "HT & LT Control Panels: Engineered for safe and efficient power distribution.",
        "Solar Module Mounting Structures: Robust and corrosion-resistant.",
        "Transmission Line Accessories: Precision components built for strength and durability."
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
      subtext: "Expert analysis, system design, and strategic guidance to optimize performance, efficiency, and compliance across power infrastructure.",
      image: "/images/services-hero.png"
    },
    intro: {
      heading: "Overview",
      content: "G&D Brothers provides specialized power consulting services to help organizations design efficient electrical systems, optimize energy usage, and ensure regulatory compliance. Our consulting approach is rooted in technical expertise and practical execution, enabling clients to make informed decisions for reliable and cost-effective power infrastructure."
    },
    offerings: {
      heading: "Scope of Services",
      points: [
        "Load Studies & Power System Analysis",
        "Power System Design & Engineering",
        "Energy Optimization & Efficiency Planning",
        "Feasibility Studies & Technical Reports",
        "Regulatory Guidance & Liaisoning Support"
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
      content: "G&D Brothers provides comprehensive Operation & Maintenance (O&M) services to ensure the smooth and efficient functioning of power and solar systems. Our proactive approach focuses on performance optimization, preventive maintenance, and quick issue resolution, helping clients maximize system uptime and long-term returns."
    },
    offerings: {
      heading: "Scope of Services",
      points: [
        "Solar Plant Operation & Maintenance",
        "System Monitoring & Performance Tracking",
        "Preventive Maintenance & Scheduled Inspections",
        "Fault Detection & Troubleshooting",
        "Corrective Maintenance & Repairs"
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
