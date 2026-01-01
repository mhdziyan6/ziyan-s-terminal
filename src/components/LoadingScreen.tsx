import { useState, useEffect } from 'react';

const loadingLines = [
  'Initializing interface...',
  'Loading modules...',
  'Starting runtime...',
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show each line with a slight delay
    const lineTimer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < loadingLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);

    // Complete loading after ~1.2 seconds
    const completeTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 200);
    }, 1200);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!visible) {
    return (
      <div className="loading-screen animate-fade-out" style={{ animationDuration: '200ms' }}>
        <div className="terminal-font text-center">
          {loadingLines.map((line, index) => (
            <div
              key={index}
              className="loading-text mb-1"
              style={{ opacity: index <= currentLine ? 1 : 0.3 }}
            >
              <span className="text-terminal-prompt">$</span> {line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="loading-screen">
      <div className="terminal-font text-center">
        {loadingLines.map((line, index) => (
          <div
            key={index}
            className="loading-text mb-1 transition-opacity duration-200"
            style={{ opacity: index <= currentLine ? 1 : 0.3 }}
          >
            <span className="text-terminal-prompt">$</span> {line}
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-terminal-text animate-cursor-blink ml-1" />
      </div>
    </div>
  );
};
