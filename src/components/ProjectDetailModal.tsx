import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, ShieldAlert, Activity, Wand2, Users, Map, Target, Trophy, Database, Calculator, Search, LayoutDashboard } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

// Helper to render icons dynamically based on name
const getIcon = (iconName?: string) => {
  const IconProps = { className: "w-5 h-5 text-zinc-400" };
  switch (iconName) {
    case 'ShieldAlert': return <ShieldAlert {...IconProps} />;
    case 'Activity': return <Activity {...IconProps} />;
    case 'Wand2': return <Wand2 {...IconProps} />;
    case 'Users': return <Users {...IconProps} />;
    case 'Map': return <Map {...IconProps} />;
    case 'Target': return <Target {...IconProps} />;
    case 'Trophy': return <Trophy {...IconProps} />;
    case 'Database': return <Database {...IconProps} />;
    case 'Calculator': return <Calculator {...IconProps} />;
    case 'Search': return <Search {...IconProps} />;
    case 'LayoutDashboard': return <LayoutDashboard {...IconProps} />;
    default: return <Activity {...IconProps} />;
  }
};

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Use the provided gallery or fallback to duplicating the main image 4 times for the layout demonstration
  const galleryImages = project.gallery?.length === 4 
    ? project.gallery 
    : Array(4).fill(project.image);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-12 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full md:h-auto md:max-h-full max-w-[1400px] bg-[#0a0a0a] md:rounded-3xl border border-white/5 overflow-y-auto flex flex-col custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-12 lg:p-16 flex flex-col gap-12 md:gap-16">
          
          {/* Header & Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div>
                <p className="text-zinc-500 text-sm font-medium mb-3">Featured Project</p>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                  {project.title}
                </h2>
                <h3 className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
                  {project.longDescription || project.description}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-zinc-200 transition-colors">
                    Visit Website <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-transparent text-white text-sm font-medium rounded-xl hover:bg-zinc-900 border border-white/10 transition-colors">
                    View on GitHub <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-8 w-full aspect-[16/10] bg-[#111] rounded-2xl border border-white/5 overflow-hidden relative">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-bold text-2xl tracking-widest uppercase">
                  {project.title}
                </div>
              )}
            </div>
          </div>

          {/* 4 Gallery Images Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="w-full aspect-video bg-[#111] rounded-xl border border-white/5 overflow-hidden relative">
                 {img ? (
                    <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                 ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm uppercase">Detail</div>
                 )}
              </div>
            ))}
          </div>

          {/* Problem / Solution Section */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-8">
              {project.problem && (
                <div className="flex flex-col gap-4">
                  <p className="text-zinc-500 text-sm font-medium">The Problem</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                    {project.problem.split('.')[0]}.
                  </h3>
                  <p className="text-[17px] text-zinc-400 leading-relaxed">
                    {project.problem.split('.').slice(1).join('.').trim()}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="flex flex-col gap-4 bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5">
                  <h4 className="text-zinc-500 text-sm font-medium mb-1">The Solution</h4>
                  <p className="text-[17px] text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Features Bento Grid */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-6 mt-8">
              <h3 className="text-xl font-medium text-white">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col gap-6 hover:bg-[#151515] transition-colors">
                    <div className="p-3 bg-black border border-white/10 rounded-xl w-fit">
                      {getIcon(feature.icon)}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-medium text-white mb-2">{feature.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack & Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
            {project.techStack && (
              <div className="lg:col-span-4 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-sm font-medium text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#0a0a0a] border border-white/5 rounded-lg text-xs text-zinc-300 font-medium tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {(project.architecture || project.techStack) && (
              <div className="lg:col-span-8 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-sm font-medium text-white">Architecture Overview</h3>
                <div className="flex-1 min-h-[200px] bg-[#0a0a0a] border border-white/5 rounded-xl flex items-center justify-center p-6">
                  <p className="text-zinc-600 text-xs font-medium tracking-widest uppercase text-center">
                    {project.architecture || "Visual Diagram / Architecture Graphic Display"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Impact & What's Next */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-12 mt-8">
            {project.metrics && project.metrics.length > 0 && (
              <div className="lg:col-span-7 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-8">
                <h3 className="text-sm font-medium text-white">Impact</h3>
                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-4xl md:text-5xl font-medium text-white">{metric.value}</span>
                      <span className="text-xs text-zinc-400 font-medium leading-relaxed max-w-[200px]">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.nextSteps && (
              <div className="lg:col-span-5 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-sm font-medium text-white mb-4">What's Next?</h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                    {project.nextSteps}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
