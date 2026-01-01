import { CRTMonitor } from './CRTMonitor';
import { ChevronDown, FileDown, FolderOpen } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mohammed_Ziyan_Resume.pdf';
    link.download = 'Mohammed_Ziyan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, hsl(173 80% 45% / 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Greeting text */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-muted-foreground font-mono text-sm mb-2">
            $ whoami
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Mohammed <span className="text-primary">Ziyan</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Full-Stack Developer | Cybersecurity Aspirant
          </p>
        </div>

        {/* CRT Monitor */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CRTMonitor />
        </div>

        {/* Action buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={scrollToProjects}
            className="btn-terminal flex items-center gap-2 rounded-md"
          >
            <FolderOpen size={18} />
            View Projects
          </button>
          <button
            onClick={downloadResume}
            className="btn-terminal-solid flex items-center gap-2 rounded-md"
          >
            <FileDown size={18} />
            Download Resume
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};
