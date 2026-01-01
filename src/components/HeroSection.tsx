import { useState, useCallback, useEffect } from 'react';
import { ChevronDown, FileDown, FolderOpen, Play } from 'lucide-react';
import retroDeskSetup from '@/assets/retro-desk-setup.png';

const terminalOutput = [
  { type: 'info', text: '[INFO] Initializing profile scan...' },
  { type: 'ok', text: '[OK] Web Development        : VERIFIED' },
  { type: 'ok', text: '[OK] Backend Systems        : VERIFIED' },
  { type: 'warn', text: '[WARN] Cybersecurity Skills : IN PROGRESS' },
  { type: 'info', text: '[INFO] Learning Path        : ACTIVE' },
  { type: 'blank', text: '' },
  { type: 'result', text: 'Profile integrity: STABLE' },
  { type: 'result', text: 'Risk appetite: HIGH (learning-focused)' },
];

interface HeroSectionProps {
  transitionComplete: boolean;
  onTransitionEnd: () => void;
}

export const HeroSection = ({ transitionComplete, onTransitionEnd }: HeroSectionProps) => {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalOutput>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Start typing animation after transition
  useEffect(() => {
    if (transitionComplete && !isTyping && displayedLines.length === 0) {
      setIsTyping(true);
      let lineIndex = 0;
      
      const typeLines = () => {
        if (lineIndex < terminalOutput.length) {
          setDisplayedLines(prev => [...prev, terminalOutput[lineIndex]]);
          lineIndex++;
          setTimeout(typeLines, 80);
        } else {
          setIsTyping(false);
          setTypingComplete(true);
        }
      };
      
      setTimeout(typeLines, 400);
    }
  }, [transitionComplete, isTyping, displayedLines.length]);

  const handleSkip = useCallback(() => {
    if (isTyping) {
      setDisplayedLines(terminalOutput);
      setIsTyping(false);
      setTypingComplete(true);
    }
  }, [isTyping]);

  // Handle Enter to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isTyping) {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip, isTyping]);

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

  const getLineColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-terminal-info';
      case 'ok': return 'text-terminal-text';
      case 'warn': return 'text-terminal-warn';
      case 'result': return 'text-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background desk setup image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${transitionComplete ? 'opacity-100' : 'opacity-0'}`}
        onTransitionEnd={onTransitionEnd}
      >
        <img 
          src={retroDeskSetup} 
          alt="Retro computer desk setup"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content overlay positioned over the monitor in the image */}
      <div 
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 transition-all duration-700 ${
          transitionComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Greeting text */}
        <div className="text-center mb-6">
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

        {/* Terminal window overlay - styled to look like it's on the CRT */}
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <div 
            className="terminal-container terminal-glow crt-scanlines p-4 md:p-6 min-h-[280px] md:min-h-[320px] backdrop-blur-sm"
            style={{
              background: 'hsl(var(--terminal-bg) / 0.95)',
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-warn/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-text/80" />
              </div>
              <span className="text-xs text-muted-foreground terminal-font ml-2">ziyan@portfolio:~</span>
            </div>

            {/* Terminal content */}
            <div className="terminal-font text-sm md:text-base">
              {/* Command */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-terminal-prompt">$</span>
                <span className="text-foreground">python3 ziyan.py --scan</span>
              </div>

              {/* Output */}
              <div className="space-y-1">
                {displayedLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${getLineColor(line.type)} ${line.type === 'blank' ? 'h-4' : ''}`}
                  >
                    {line.text}
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-4 bg-terminal-text animate-cursor-blink" />
                    <button
                      onClick={handleSkip}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Press Enter to skip
                    </button>
                  </div>
                )}

                {/* Cursor after completion */}
                {typingComplete && (
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-terminal-prompt">$</span>
                    <span className="w-2 h-4 bg-terminal-text animate-cursor-blink" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${
            typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={scrollToProjects}
            className="btn-terminal flex items-center gap-2 rounded-md backdrop-blur-sm"
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
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          typingComplete ? 'opacity-100 animate-bounce' : 'opacity-0'
        }`}
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};
