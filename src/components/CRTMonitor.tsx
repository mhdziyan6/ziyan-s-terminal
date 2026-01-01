import { Terminal } from './Terminal';

export const CRTMonitor = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Monitor outer casing */}
      <div 
        className="relative rounded-[2rem] p-6 md:p-8"
        style={{
          background: 'linear-gradient(145deg, hsl(30 8% 28%) 0%, hsl(30 6% 20%) 50%, hsl(30 8% 14%) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255,255,255,0.1)',
        }}
      >
        {/* Monitor inner bezel */}
        <div 
          className="relative rounded-lg p-3 md:p-4"
          style={{
            background: 'linear-gradient(180deg, hsl(220 12% 10%) 0%, hsl(220 15% 6%) 100%)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          {/* Screen area */}
          <div className="relative rounded-sm overflow-hidden">
            <Terminal />
            
            {/* Screen reflection overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>

        {/* Monitor base indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-terminal-text/60 animate-pulse-glow" />
            <span className="text-xs text-muted-foreground font-mono tracking-wider">ZIYAN</span>
          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="flex justify-center">
        <div 
          className="w-24 h-8 -mt-2"
          style={{
            background: 'linear-gradient(180deg, hsl(30 6% 18%) 0%, hsl(30 8% 12%) 100%)',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          }}
        />
      </div>
      <div className="flex justify-center -mt-1">
        <div 
          className="w-40 h-3 rounded-b-lg"
          style={{
            background: 'linear-gradient(180deg, hsl(30 6% 16%) 0%, hsl(30 8% 10%) 100%)',
          }}
        />
      </div>
    </div>
  );
};
