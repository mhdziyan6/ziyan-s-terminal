import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import secureThreadImg from '../assets/Securethread.png';

const allProjects = [
  {
    title: "SecureThreadOPS",
    role: "Full-Stack & Security Engineer",
    date: "July 2025 – Present",
    tech: "Python, FastAPI, React",
    description: "Co-built an AI-powered DevSecOps platform and fine-tuned a custom LLM to 84% detection accuracy.",
    link: "#",
    year: "2025",
    image: secureThreadImg
  },
  {
    title: "CareerWise",
    role: "Full-Stack AI Developer",
    date: "May 2025 – Present",
    tech: "Python, FastAPI, React",
    description: "Designed an AI career guidance platform spanning 6+ tracks, validated by 100+ users.",
    link: "#",
    year: "2025"
  },
  {
    title: "Rental Management System",
    role: "Frontend & Systems Architect",
    date: "March 2026 – July 2026",
    tech: "React, Supabase",
    description: "Engineered real-time inventory sync and automated financial ledger, cutting errors by 90%+.",
    link: "#",
    year: "2026"
  },
  {
    title: "E&S Decorations",
    role: "Full-Stack Developer",
    date: "January 2025 – June 2025",
    tech: "Python, FastAPI, React",
    description: "Built a responsive, SEO-optimized website and no-code dashboard, boosting inquiries by 80%.",
    link: "#",
    year: "2025"
  },
  {
    title: "Lead Management System",
    role: "Full-Stack Developer",
    date: "April 2025 – June 2025",
    tech: "Python, FastAPI, React",
    description: "Engineered a full-stack application to streamline lead management and sales tracking, reducing manual effort by 60%.",
    link: "#",
    year: "2025"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>All Projects | Mohammed Ziyan</title>
        <meta name="description" content="A comprehensive list of projects built by Mohammed Ziyan." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        
        <main className="flex-grow pt-32 pb-24">
          <section className="section-container">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                All Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A complete archive of things I've designed, built, and deployed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {allProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col group cursor-pointer"
                  onClick={() => window.location.href = project.link}
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[3/2] bg-surface-2 rounded-2xl overflow-hidden relative border border-border/30 mb-5">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-2xl tracking-widest uppercase p-8 text-center bg-gradient-to-br from-white/5 to-transparent">
                        {project.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.role}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 whitespace-nowrap">
                      {project.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;
