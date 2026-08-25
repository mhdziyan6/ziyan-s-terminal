import { Project } from '../types/project';
import secureThreadImg from '../assets/Securethread.png';
import careeristImg from '../assets/Careerist.png';

export const projects: Project[] = [
  {
    title: "SecureThreadOPS",
    role: "Full-Stack & Security Engineer",
    date: "July 2025 – Present",
    tech: "Python, FastAPI, React",
    description: "Co-built an AI-powered DevSecOps platform and fine-tuned a custom LLM to 84% detection accuracy.",
    longDescription: "SecureThreadOPS is an intelligent security platform that automates vulnerability detection, analysis, and remediation. It helps security teams discover threats early and ship secure code, faster.",
    link: "#",
    github: "#",
    year: "2025",
    image: secureThreadImg,
    problem: "Modern applications move fast, but security often gets left behind. Manual code reviews and periodic scans can't keep up with today's deployment speed, leaving vulnerabilities undetected and businesses exposed.",
    solution: "We built SecureThread to make security continuous, intelligent, and easy to act on. By integrating AI models directly into the CI/CD pipeline, it identifies vulnerabilities in real-time and provides actionable, context-aware remediation steps.",
    features: [
      {
        title: "AI-Powered Scanning",
        description: "Deep code analysis using AI models to find complex vulnerabilities.",
        icon: "ShieldAlert"
      },
      {
        title: "Real-time Monitoring",
        description: "Continuous scanning on every push and pull request.",
        icon: "Activity"
      },
      {
        title: "Smart Remediation",
        description: "AI-powered recommendations with one-click fixes where possible.",
        icon: "Wand2"
      },
      {
        title: "Team Collaboration",
        description: "Unified dashboard for security teams and developers.",
        icon: "Users"
      }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "OpenAI API"],
    metrics: [
      { value: "90%", label: "Faster vulnerability detection" },
      { value: "70%", label: "Reduction in manual security reviews" },
      { value: "5K+", label: "Vulnerabilities detected across projects" },
      { value: "99.9%", label: "Uptime & reliable monitoring" }
    ],
    nextSteps: "We're working on advanced AI threat prediction, cross-repo analysis, and automated security patching."
  },
  {
    title: "CareerWise",
    role: "Full-Stack AI Developer",
    date: "May 2025 – Present",
    tech: "Python, FastAPI, React",
    description: "Designed an AI career guidance platform spanning 6+ tracks, validated by 100+ users.",
    longDescription: "CareerWise provides personalized, AI-driven career roadmaps for professionals and students, dynamically adapting to market trends and individual skills.",
    link: "#",
    year: "2025",
    image: careeristImg,
    problem: "Navigating a career path in tech is overwhelming due to constantly changing requirements, leading to decision paralysis and wasted learning hours.",
    solution: "CareerWise aggregates industry demands and cross-references them with user profiles to generate highly specific, actionable learning and career tracks.",
    features: [
      {
        title: "Dynamic Roadmaps",
        description: "AI generates personalized step-by-step guides based on current market data.",
        icon: "Map"
      },
      {
        title: "Skill Gap Analysis",
        description: "Identifies missing skills and recommends targeted resources.",
        icon: "Target"
      },
      {
        title: "Progress Tracking",
        description: "Gamified tracking to maintain momentum and motivation.",
        icon: "Trophy"
      }
    ],
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "OpenAI"],
    metrics: [
      { value: "100+", label: "Validated users in beta" },
      { value: "6+", label: "Comprehensive career tracks" },
      { value: "85%", label: "User satisfaction rate" }
    ],
    nextSteps: "Expanding tracks to include non-technical roles and integrating direct job-board matching."
  },
  {
    title: "Rental Management System",
    role: "Frontend & Systems Architect",
    date: "March 2026 – July 2026",
    tech: "React, Supabase",
    description: "Engineered real-time inventory sync and automated financial ledger, cutting errors by 90%+.",
    longDescription: "A comprehensive internal tool designed for equipment rental businesses to manage inventory, track logistics, and handle automated billing.",
    link: "#",
    year: "2026",
    problem: "Manual inventory tracking across multiple spreadsheets resulted in frequent double-bookings and massive billing discrepancies.",
    solution: "A centralized dashboard with real-time Supabase sync, providing a single source of truth for all equipment locations and financial ledgers.",
    features: [
      {
        title: "Real-time Inventory",
        description: "Live availability tracking with conflict prevention.",
        icon: "Database"
      },
      {
        title: "Automated Ledger",
        description: "Seamless financial calculations and invoice generation.",
        icon: "Calculator"
      }
    ],
    techStack: ["React", "Supabase", "Tailwind CSS", "Zustand"],
    metrics: [
      { value: "90%+", label: "Reduction in booking errors" },
      { value: "10h", label: "Saved per week on admin tasks" }
    ]
  },
  {
    title: "E&S Decorations",
    role: "Full-Stack Developer",
    date: "January 2025 – June 2025",
    tech: "Python, FastAPI, React",
    description: "Built a responsive, SEO-optimized website and no-code dashboard, boosting inquiries by 80%.",
    longDescription: "A fully custom digital storefront and CMS for a premium decoration service, designed to showcase high-quality visual portfolios.",
    link: "#",
    year: "2025",
    problem: "The client relied on social media for inquiries, lacking a professional portfolio and centralized lead management system.",
    solution: "Developed a stunning, image-heavy website optimized for speed, paired with a custom no-code dashboard allowing the owners to easily update their portfolio.",
    features: [
      {
        title: "SEO Optimized",
        description: "Server-side rendering and optimized image delivery.",
        icon: "Search"
      },
      {
        title: "Custom CMS",
        description: "Tailored dashboard for non-technical users to manage content.",
        icon: "LayoutDashboard"
      }
    ],
    techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
    metrics: [
      { value: "80%", label: "Increase in customer inquiries" },
      { value: "3x", label: "Faster page load speeds" }
    ]
  }
];
