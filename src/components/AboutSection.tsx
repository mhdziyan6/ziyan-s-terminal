import { User, Target, Code } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-subtitle mb-2">// about_me</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Background */}
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground">Background</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm a B.Tech Information Technology student at Amal Jyothi College of Engineering, 
              graduating in 2026. My path into tech wasn't conventional — I've always been drawn 
              to understanding how systems work beneath the surface, from debugging code to 
              dissecting network packets.
            </p>
          </div>

          {/* What I Do */}
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Code className="text-secondary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground">What I Build</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I specialize in building full-stack applications that solve real problems. 
              From AI-assisted code analysis tools to lead management systems, I focus on 
              creating scalable solutions that handle thousands of daily requests while 
              maintaining clean, maintainable codebases.
            </p>
          </div>

          {/* Future Goals */}
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-terminal-warn/20 rounded-lg">
                <Target className="text-terminal-warn" size={20} />
              </div>
              <h3 className="font-semibold text-foreground">Where I'm Headed</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              While I continue to build production-grade applications, I'm actively 
              transitioning toward cybersecurity. Completing Google's Cybersecurity 
              Foundations course was just the start — I'm exploring penetration testing, 
              dynamic analysis, and security tooling as my next frontier.
            </p>
          </div>
        </div>

        {/* Quote/Philosophy */}
        <div className="mt-12 p-6 bg-surface-1 border border-border rounded-lg">
          <p className="text-center text-muted-foreground font-mono text-sm">
            <span className="text-terminal-prompt">$</span> echo "Building secure, scalable systems is not just about code — it's about understanding what could go wrong."
          </p>
        </div>
      </div>
    </section>
  );
};
