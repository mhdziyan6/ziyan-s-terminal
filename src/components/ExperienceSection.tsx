import React from 'react';

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "PeopleMaketh",
    location: "Bengaluru, India (Remote)",
    date: "July 2025 – July 2026",
    achievements: [
      "Authored 40+ pages of API documentation and internal wikis, streamlining client handoff and onboarding.",
      "Represented the product team across 6 investor meetings, driving 2 into ongoing follow-up engagement.",
      "Supported CI/CD pipeline setup via GitHub Actions, accelerating team deployment workflows by 40%."
    ]
  },
  {
    role: "Software Solutions Intern",
    company: "Lylux Lighting Equipment Trading LLC",
    location: "Dubai, UAE (Remote)",
    date: "July 2025 – Feb 2026",
    achievements: [
      "Developed a custom CRM spanning leads, procurement, and finance modules, cutting manual work by 60%.",
      "Implemented a live product configurator with instant PDF generation across 50+ variants.",
      "Optimized CRM database queries and backend services, improving response time by 35% across 1,000+ records."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Zayn Software Solutions",
    location: "Doha, Qatar",
    date: "April 2025 – June 2025",
    achievements: [
      "Engineered a CRM lead management module with role-based access across 3 user tiers, automating lead allocation for a 15-member sales team.",
      "Built follow-up tracking workflows, cutting manual lead-tracking effort by 60% and response time by 40%.",
      "Delivered a cross-device responsive interface supporting 500+ active leads across the sales pipeline."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experience</h2>
          </div>
          <div className="md:w-2/3 space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-muted-foreground text-sm font-medium mt-1 md:mt-0 whitespace-nowrap">{exp.date}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <h4 className="text-lg text-foreground/80 font-medium">{exp.company}</h4>
                  <span className="text-muted-foreground text-sm mt-1 md:mt-0">{exp.location}</span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-foreground/50 mt-1.5">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
