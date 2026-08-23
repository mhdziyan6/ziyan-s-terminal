import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mohammed Ziyan
        </p>
        <div className="flex gap-6 items-center">
          <a href="https://linkedin.com/in/ziyandaniel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/ziyandaniel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            GitHub
          </a>
          <button onClick={scrollToTop} className="text-muted-foreground hover:text-foreground text-sm transition-colors ml-4">
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
