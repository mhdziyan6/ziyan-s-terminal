import { useState, useCallback, useEffect } from 'react';
import { Play } from 'lucide-react';

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

export const Terminal = () => {
  const [hasRun, setHasRun] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<typeof terminalOutput>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const runCommand = useCallback(() => {
    if (hasRun || isTyping) return;
    
    setIsTyping(true);
    setDisplayedLines([]);
    
    // Fast typing animation
    let lineIndex = 0;
    const typeLines = () => {
      if (skipAnimation) {
        setDisplayedLines(terminalOutput);
        setIsTyping(false);
        setHasRun(true);
        return;
      }
      
      if (lineIndex < terminalOutput.length) {
        setDisplayedLines(prev => [...prev, terminalOutput[lineIndex]]);
        lineIndex++;
        setTimeout(typeLines, 80);
      } else {
        setIsTyping(false);
        setHasRun(true);
      }
    };
    
    setTimeout(typeLines, 200);
  }, [hasRun, isTyping, skipAnimation]);

  const handleSkip = useCallback(() => {
    if (isTyping) {
      setSkipAnimation(true);
      setDisplayedLines(terminalOutput);
      setIsTyping(false);
      setHasRun(true);
    }
  }, [isTyping]);

  // Handle Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (isTyping) {
          handleSkip();
        } else if (!hasRun) {
          runCommand();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [runCommand, handleSkip, hasRun, isTyping]);

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
    <div className="terminal-container terminal-glow crt-scanlines p-4 md:p-6 h-full min-h-[280px] md:min-h-[320px] flex flex-col">
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
      <div className="flex-1 terminal-font text-sm md:text-base">
        {/* Initial command */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-terminal-prompt">$</span>
          <span className="text-foreground">python3 ziyan.py --scan</span>
          
          {!hasRun && !isTyping && (
            <button
              onClick={runCommand}
              className="ml-4 flex items-center gap-1.5 px-3 py-1 bg-primary/20 border border-primary/40 rounded text-primary text-xs hover:bg-primary/30 transition-colors"
              aria-label="Run command"
            >
              <Play size={12} />
              Run
            </button>
          )}
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
          {hasRun && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-terminal-prompt">$</span>
              <span className="w-2 h-4 bg-terminal-text animate-cursor-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
