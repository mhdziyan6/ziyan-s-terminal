import { Code2, Server, Database, Wrench, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Flutter'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    skills: ['Python', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Java', 'PHP'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-terminal-info',
    bgColor: 'bg-terminal-info/10',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'NeonDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Postman', 'Figma', 'Vercel', 'Render', 'n8n'],
  },
];

const learningSkills = [
  'Penetration Testing',
  'Security Analysis',
  'Vulnerability Assessment',
  'Network Security',
  'OWASP Principles',
  'Dynamic Analysis',
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-subtitle mb-2">// skills</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Core Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${category.bgColor} rounded-lg`}>
                    <Icon className={category.color} size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Section */}
        <div className="card-elevated border-terminal-warn/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-terminal-warn/10 rounded-lg">
              <Shield className="text-terminal-warn" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Learning & Growing</h3>
              <p className="text-xs text-terminal-warn font-mono">IN PROGRESS</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Actively building cybersecurity foundations through coursework and hands-on exploration.
          </p>

          <div className="flex flex-wrap gap-2">
            {learningSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm rounded-md font-medium bg-terminal-warn/10 border border-terminal-warn/30 text-terminal-warn"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
