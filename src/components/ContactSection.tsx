import { Mail, Github, Linkedin, FileDown, ArrowUp } from 'lucide-react';

export const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <p className="section-subtitle mb-2">// contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Looking for a developer who builds secure, scalable applications? 
            Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:ziyandaniel0@gmail.com"
            className="btn-terminal flex items-center gap-2 rounded-md"
          >
            <Mail size={18} />
            ziyandaniel0@gmail.com
          </a>

          <a
            href="https://github.com/ziyandaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal flex items-center gap-2 rounded-md"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ziyandaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal flex items-center gap-2 rounded-md"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Resume download */}
        <div className="text-center mb-16">
          <button
            onClick={downloadResume}
            className="btn-terminal-solid flex items-center gap-2 rounded-md mx-auto"
          >
            <FileDown size={18} />
            Download Resume
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-terminal-prompt">$</span> Built with React + Tailwind
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohammed Ziyan
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
