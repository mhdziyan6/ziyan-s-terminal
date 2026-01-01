import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'CareerWise',
    description: 'AI-powered career guidance platform leveraging LLMs to deliver personalized career insights and recommendations.',
    problem: 'Users struggle to find relevant, tailored career advice in a saturated job market.',
    stack: ['Python', 'FastAPI', 'React', 'OpenAI API'],
    role: 'Full-Stack Developer',
    outcome: 'Serving 100+ users with 90%+ positive feedback on usefulness. Personalized content for 3+ distinct user groups.',
    period: 'May 2025 – Present',
    github: 'https://github.com/ziyandaniel',
  },
  {
    title: 'Lead Management System',
    description: 'Full-stack application to streamline lead management, sales tracking, and team collaboration with role-based access.',
    problem: 'Sales teams waste hours on manual lead tracking and follow-up coordination.',
    stack: ['Python', 'FastAPI', 'React', 'MongoDB'],
    role: 'Full-Stack Developer',
    outcome: 'Reduced manual effort by 60%. Features include role-based access, lead allocation, and automated follow-up tracking.',
    period: 'April – June 2025',
    github: 'https://github.com/ziyandaniel',
  },
  {
    title: 'E&S Decorations Website',
    description: 'SEO-optimized business website with a no-code dashboard for content management and performance tracking.',
    problem: 'Client needed a professional web presence without ongoing developer dependency.',
    stack: ['Python', 'FastAPI', 'React', 'SEO Tools'],
    role: 'Lead Developer',
    outcome: 'Boosted client inquiries by 80%. No-code dashboard saves 10+ dev hours monthly. Won Best University Design Project award.',
    period: 'January – June 2025',
    github: 'https://github.com/ziyandaniel',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-subtitle mb-2">// projects</p>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article key={index} className="card-elevated group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left: Project info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Folder className="text-primary" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{project.period}</p>
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Problem & Role */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-terminal-prompt font-mono mb-1">PROBLEM</p>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-terminal-prompt font-mono mb-1">MY ROLE</p>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-3 bg-surface-2 rounded-lg mb-4">
                    <p className="text-xs text-terminal-text font-mono mb-1">OUTCOME</p>
                    <p className="text-sm text-foreground">{project.outcome}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

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
    </section>
  );
};
