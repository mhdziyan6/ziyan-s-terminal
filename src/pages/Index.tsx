import { useState, useCallback } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

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

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <HeroSection />
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
