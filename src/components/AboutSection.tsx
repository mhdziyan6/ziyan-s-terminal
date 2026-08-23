import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight sticky top-32">
              About
            </h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                I am a full-stack developer and security-minded builder, focused on creating scalable web applications and AI-driven platforms.
              </p>
              
              <div className="space-y-6">
                <p>
                  With a foundation in both frontend and backend development, I build systems that solve real problems. My work ranges from engineering real-time inventory systems that cut reconciliation errors by 90%, to designing AI career guidance platforms validated by hundreds of users.
                </p>
                <p>
                  Currently, I am deeply focused on the intersection of AI and application security. At SecureThreadOPS, I co-built a DevSecOps platform, fine-tuning custom LLMs to drastically reduce false-positive detection rates and catch vulnerabilities before they merge.
                </p>
                <p>
                  Beyond code, I have represented product teams across investor meetings and driven survey-based UX iterations. I bring clarity to ambiguity and build solutions that deliver measurable impact.
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-surface-2 border border-border/50 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-foreground font-medium text-lg mb-1">Based in</h4>
                  <p className="text-muted-foreground flex items-center gap-2">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
