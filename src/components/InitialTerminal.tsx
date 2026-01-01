import { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';

interface InitialTerminalProps {
  onRun: () => void;
}

export const InitialTerminal = ({ onRun }: InitialTerminalProps) => {
  const [isReady, setIsReady] = useState(false);

  // Small delay before showing the Run button
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleRun = useCallback(() => {
    onRun();
  }, [onRun]);

  // Handle Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isReady) {
        handleRun();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun, isReady]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Terminal prompt */}
        <div className="terminal-font text-lg md:text-xl flex items-center justify-center gap-3">
          <span className="text-terminal-prompt">$</span>
          <span className="text-foreground">python3 ziyan.py --scan</span>
          
          {isReady && (
            <button
              onClick={handleRun}
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded text-primary text-sm hover:bg-primary/30 transition-all hover:scale-105"
              aria-label="Run command"
            >
              <Play size={14} />
              Run
            </button>
          )}
        </div>
        
        {/* Blinking cursor */}
        {!isReady && (
          <div className="flex justify-center mt-4">
            <span className="w-2 h-5 bg-terminal-text animate-cursor-blink" />
          </div>
        )}
        
        {/* Hint text */}
        {isReady && (
          <p className="text-muted-foreground text-sm mt-6 animate-fade-in">
            Press Enter or click Run to start
          </p>
        )}
      </div>
    </div>
  );
};
