import { useState, useCallback, useEffect } from 'react';
import { InitialTerminal } from '@/components/InitialTerminal';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { GitHubActivity } from '@/components/GitHubActivity';
import { ProjectsSection } from '@/components/ProjectsSection';
import { HobbiesSection } from '@/components/HobbiesSection';
import { ContactSection } from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

type AppState = 'initial' | 'transitioning' | 'ready';

const Index = () => {
  const [appState, setAppState] = useState<AppState>(() => {
    // Check if user has already seen the intro this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    return hasSeenIntro ? 'ready' : 'initial';
  });

  const handleRun = useCallback(() => {
    setAppState('transitioning');
    sessionStorage.setItem('hasSeenIntro', 'true');
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setAppState('ready');
  }, []);

  return (
    <>
      <Helmet>
        <title>Mohammed Ziyan | Full-Stack Developer & Cybersecurity Aspirant</title>
        <meta
          name="description"
          content="Portfolio of Mohammed Ziyan - Full-Stack Developer building scalable web applications with React, Python, and FastAPI. Currently expanding into cybersecurity."
        />
        <meta
          name="keywords"
          content="Mohammed Ziyan, Full-Stack Developer, Web Developer, React, Python, FastAPI, Cybersecurity, Portfolio"
        />
        <meta name="author" content="Mohammed Ziyan" />
        <meta property="og:title" content="Mohammed Ziyan | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Building secure, scalable systems with modern web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mohammedziyan.dev" />
      </Helmet>

      {/* Initial terminal screen */}
      {appState === 'initial' && (
        <InitialTerminal onRun={handleRun} />
      )}

      {/* Main content */}
      <div 
        className={`min-h-screen bg-background transition-opacity duration-300 ${
          appState === 'initial' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navigation />
        
        <main>
          <HeroSection 
            transitionComplete={appState === 'transitioning' || appState === 'ready'} 
            onTransitionEnd={handleTransitionEnd}
          />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <GitHubActivity />
          <ProjectsSection />
          <HobbiesSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
