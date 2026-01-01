import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer Intern',
    organization: 'PeopleMaketh',
    location: 'Bengaluru, India',
    period: 'July 2025 – Present',
    highlights: [
      'Engineered an AI-assisted code analysis tool, achieving 60% improvement in code quality checks',
      'Developed scalable backend APIs and databases managing 5K+ daily requests',
      'Spearheaded planning of penetration testing tools and dynamic analysis features',
      'Streamlined CI/CD pipelines using GitHub Actions, improving deployment efficiency by 40%',
    ],
  },
  {
    type: 'work',
    title: 'Software Solutions Intern',
    organization: 'Lylux Lighting Equipment Trading LLC',
    location: 'Dubai, UAE (Remote)',
    period: 'July 2025 – Present',
    highlights: [
      'Built client-facing software for product customization, reducing manual work by 60%',
      'Managed databases and optimized backend services for improved performance',
      'Tackled real-world problems as a remote intern handling full development lifecycle',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Technology',
    organization: 'Amal Jyothi College of Engineering',
    location: 'Kottayam, India',
    period: 'July 2022 – June 2026',
    highlights: [
      'Information Technology major with focus on software engineering',
      'Smart India Hackathon Runner-Up',
      'YIP District Winner',
      'Best University Design Project Award for "E&S Decorations"',
    ],
  },
];

const certifications = [
  'Google: Foundations of Cybersecurity',
  'IIT Kanpur: Self Driving Electric Vehicle',
  'NIT: Cryptocurrency and Blockchain',
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface-1">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-subtitle mb-2">// experience</p>
          <h2 className="section-title">Education & Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div 
                  className="absolute left-4 md:left-6 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2"
                  style={{ boxShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}
                />

                <div className="card-elevated">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {exp.type === 'work' ? (
                        <Briefcase className="text-primary" size={18} />
                      ) : (
                        <GraduationCap className="text-secondary" size={18} />
                      )}
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-surface-2 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-primary mb-1">{exp.organization}</p>
                  <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-terminal-text mt-1">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-terminal-warn" size={20} />
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/40 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
