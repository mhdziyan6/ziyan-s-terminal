import { Gamepad2, Book, Globe, Coffee } from 'lucide-react';

const hobbies = [
  {
    icon: Book,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, security concepts, and development practices through courses and hands-on experimentation.',
  },
  {
    icon: Globe,
    title: 'Languages',
    description: 'Fluent in English and Malayalam. Conversational in Arabic, Hindi, and Tamil — communication across cultures matters.',
  },
  {
    icon: Gamepad2,
    title: 'Problem Solving',
    description: 'Whether it\'s debugging code, solving CTF challenges, or planning system architecture — puzzles keep me engaged.',
  },
  {
    icon: Coffee,
    title: 'Building Things',
    description: 'From side projects to automation scripts, I enjoy creating tools that solve real problems and improve workflows.',
  },
];

export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 md:py-28 bg-surface-1">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-subtitle mb-2">// beyond_code</p>
          <h2 className="section-title">Interests & Hobbies</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div key={index} className="card-elevated">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{hobby.title}</h3>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
