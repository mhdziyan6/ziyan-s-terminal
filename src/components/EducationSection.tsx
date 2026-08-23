import React from 'react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="md:w-2/3">
            <div className="group relative">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">Amal Jyothi College of Engineering (Autonomous)</h3>
                <span className="text-muted-foreground text-sm font-medium mt-1 md:mt-0">July 2022 – May 2026</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h4 className="text-lg text-muted-foreground">Bachelor of Technology in Information Technology</h4>
                <span className="text-muted-foreground text-sm mt-1 md:mt-0">Kottayam, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
