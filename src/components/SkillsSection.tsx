import React from 'react';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "SQL", "PHP", "JavaScript", "TypeScript", "R"]
  },
  {
    category: "Frameworks",
    skills: ["React", "React Native", "Node.js", "Next.js", "Express.js", "FastAPI", "Tailwind", "Flutter"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase", "Redis"]
  },
  {
    category: "Design & Tools",
    skills: ["Git", "GitHub Actions", "Postman", "n8n", "Canva", "Docker", "Vercel", "Render", "Notion", "IoT", "VMware"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills</h2>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {skillCategories.map((group, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
