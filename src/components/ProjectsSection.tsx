import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "SecureThreadOPS",
    role: "Full-Stack & Security Engineer",
    date: "July 2025 – Present",
    tech: "Python, FastAPI, React, PostgreSQL",
    description: "Co-built an AI-powered DevSecOps platform and fine-tuned a custom LLM to 84% detection accuracy. Built a multi-language SAST engine scanning 1,900+ vulnerabilities across 5 repositories. Cut false-positive detection rate to 3.5% via AI-driven contextual risk analysis.",
    link: "#"
  },
  {
    title: "CareerWise",
    role: "Full-Stack AI Developer",
    date: "May 2025 – Present",
    tech: "Python, FastAPI, React, Neo4j",
    description: "Designed an AI career guidance platform spanning 6+ tracks, validated by 100+ users. Drove 90%+ positive feedback across 3+ user segments via survey-driven UX iteration. Integrated live LLM capabilities for dynamic, context-aware career guidance.",
    link: "#"
  },
  {
    title: "Rental Management System",
    role: "Frontend & Systems Architect",
    date: "March 2026 – July 2026",
    tech: "React, Python, Supabase",
    description: "Engineered real-time, cross-branch inventory sync with barcode scanning for rental businesses. Built an automated financial ledger, cutting reconciliation errors by 90%+. Architected the system to scale to 5,000+ SKUs across multiple branches.",
    link: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface-1">
      <div className="section-container">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A mix of AI-driven platforms, security tools, and scalable business systems. 
            All designed with structure, clarity, and intention.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 group"
            >
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface-2 rounded-xl overflow-hidden relative border border-border/50">
                {/* Placeholder for project images. The reference portfolio had large imagery. */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl tracking-widest uppercase">
                  {project.title}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-4">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{project.tech}</span>
                  <a href={project.link} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mt-2">
                    View Project <span className="text-lg leading-none">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
