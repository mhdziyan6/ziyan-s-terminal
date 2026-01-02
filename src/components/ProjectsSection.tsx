import { useState } from 'react';
import { ExternalLink, Github, Folder, Code2, Users, Target, Layers } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    title: 'CareerWise',
    description: 'AI-powered career guidance platform leveraging LLMs to deliver personalized career insights.',
    fullDescription: 'CareerWise is an AI-powered career guidance platform that leverages Large Language Models to deliver personalized career insights and recommendations. The platform analyzes user profiles, skills, and aspirations to provide tailored career paths and actionable advice.',
    problem: 'Users struggle to find relevant, tailored career advice in a saturated job market. Generic guidance fails to account for individual skills, interests, and market conditions.',
    solution: 'Built an intelligent system that uses OpenAI API to analyze user profiles and generate personalized career recommendations, learning paths, and job market insights.',
    stack: ['Python', 'FastAPI', 'React', 'OpenAI API', 'PostgreSQL'],
    role: 'Full-Stack Developer',
    responsibilities: [
      'Designed and implemented the FastAPI backend architecture',
      'Integrated OpenAI API for intelligent career recommendations',
      'Built responsive React frontend with real-time updates',
      'Implemented user authentication and profile management',
    ],
    outcome: 'Serving 100+ users with 90%+ positive feedback on usefulness. Personalized content for 3+ distinct user groups.',
    period: 'May 2025 – Present',
    github: 'https://github.com/ziyandaniel',
    className: 'md:col-span-2',
  },
  {
    title: 'Lead Management System',
    description: 'Full-stack application to streamline lead management and sales tracking.',
    fullDescription: 'A comprehensive lead management system designed to streamline sales operations, team collaboration, and customer relationship tracking with role-based access control.',
    problem: 'Sales teams waste hours on manual lead tracking and follow-up coordination. Lack of centralized system leads to missed opportunities and poor conversion rates.',
    solution: 'Developed a full-stack application with automated lead allocation, follow-up tracking, and analytics dashboard for sales performance monitoring.',
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'JWT Auth'],
    role: 'Full-Stack Developer',
    responsibilities: [
      'Architected MongoDB schema for efficient lead data storage',
      'Implemented role-based access control (Admin, Manager, Sales Rep)',
      'Built automated follow-up reminder system',
      'Created analytics dashboard with sales performance metrics',
    ],
    outcome: 'Reduced manual effort by 60%. Features include role-based access, lead allocation, and automated follow-up tracking.',
    period: 'April – June 2025',
    github: 'https://github.com/ziyandaniel',
    className: 'md:col-span-1',
  },
  {
    title: 'E&S Decorations',
    description: 'SEO-optimized business website with no-code dashboard for content management.',
    fullDescription: 'A professional business website for a decoration company, featuring SEO optimization, a custom no-code dashboard for content management, and performance tracking analytics.',
    problem: 'Client needed a professional web presence without ongoing developer dependency. Previous site had poor SEO and no way for the client to update content.',
    solution: 'Built a modern, SEO-optimized website with a custom no-code dashboard that allows the client to manage content, view analytics, and handle inquiries independently.',
    stack: ['Python', 'FastAPI', 'React', 'SEO Tools', 'Analytics'],
    role: 'Lead Developer',
    responsibilities: [
      'Designed and developed the entire website architecture',
      'Implemented comprehensive SEO strategy (meta tags, schema, sitemap)',
      'Built custom CMS dashboard for non-technical content management',
      'Set up analytics and inquiry tracking system',
    ],
    outcome: 'Boosted client inquiries by 80%. No-code dashboard saves 10+ dev hours monthly. Won Best University Design Project award.',
    period: 'January – June 2025',
    github: 'https://github.com/ziyandaniel',
    className: 'md:col-span-1',
  },
  {
    title: 'Portfolio Website',
    description: 'Terminal-inspired personal portfolio showcasing full-stack development skills.',
    fullDescription: 'A unique, terminal-inspired personal portfolio website that showcases my full-stack development skills and cybersecurity interests through an interactive, retro computing aesthetic.',
    problem: 'Needed a distinctive portfolio that stands out from generic templates while authentically representing my technical skills and personality.',
    solution: 'Created an interactive terminal experience with a retro CRT aesthetic, smooth animations, and comprehensive project showcases.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    role: 'Designer & Developer',
    responsibilities: [
      'Conceptualized and designed the retro terminal aesthetic',
      'Implemented smooth animations and transitions',
      'Ensured responsive design across all devices',
      'Optimized performance and accessibility',
    ],
    outcome: 'Unique portfolio that effectively communicates technical skills while providing an engaging user experience.',
    period: 'December 2024 – Present',
    github: 'https://github.com/ziyandaniel',
    className: 'md:col-span-2',
  },
];

const ProjectHeader = ({ project }: { project: typeof projects[0] }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 via-surface-2 to-terminal-bg border border-border/50 relative overflow-hidden group-hover/bento:border-primary/30 transition-colors">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-3 bg-primary/20 rounded-lg">
        <Folder className="text-primary w-8 h-8" />
      </div>
    </div>
    <div className="absolute bottom-2 right-2 flex gap-1">
      {project.stack.slice(0, 3).map((tech, i) => (
        <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono bg-primary/20 text-primary rounded">
          {tech}
        </span>
      ))}
      {project.stack.length > 3 && (
        <span className="px-1.5 py-0.5 text-[10px] font-mono bg-muted text-muted-foreground rounded">
          +{project.stack.length - 3}
        </span>
      )}
    </div>
    <div className="absolute top-2 right-2">
      <span className="text-[10px] font-mono text-muted-foreground">{project.period}</span>
    </div>
  </div>
);

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <p className="section-subtitle mb-2">// projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Click on any project to explore detailed case studies
          </p>
        </div>

        <BentoGrid className="max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              header={<ProjectHeader project={project} />}
              className={project.className}
              icon={<Code2 className="h-4 w-4 text-primary" />}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </BentoGrid>

        {/* View more on GitHub */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/ziyandaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View more on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Folder className="text-primary" size={20} />
                  </div>
                  <div>
                    <DialogTitle className="text-xl text-foreground">{selectedProject.title}</DialogTitle>
                    <p className="text-xs text-muted-foreground font-mono">{selectedProject.period}</p>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground text-left">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Problem & Solution */}
                <div className="grid gap-4">
                  <div className="p-4 bg-surface-2 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-terminal-error" size={16} />
                      <p className="text-xs text-terminal-error font-mono font-semibold">PROBLEM</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  
                  <div className="p-4 bg-surface-2 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="text-terminal-text" size={16} />
                      <p className="text-xs text-terminal-text font-mono font-semibold">SOLUTION</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Role & Responsibilities */}
                <div className="p-4 bg-surface-2 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-primary" size={16} />
                    <p className="text-xs text-primary font-mono font-semibold">MY ROLE: {selectedProject.role}</p>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">›</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-xs text-terminal-text font-mono font-semibold mb-2">OUTCOME</p>
                  <p className="text-sm text-foreground">{selectedProject.outcome}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
