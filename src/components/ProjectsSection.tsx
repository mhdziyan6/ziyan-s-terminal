import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-black text-white relative">
      <div className="section-container">
        {/* Header exactly like screenshot */}
        <div className="mb-12 flex items-center gap-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white">
            Selected Works
          </h2>
          <span className="text-xs md:text-sm text-zinc-400 mt-1">
            2025-2026
          </span>
          <div className="w-5 h-5 rounded-full border border-zinc-700 ml-4 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container (No border, no rounded corners, 16:10 aspect ratio) */}
              <div className="w-full aspect-[16/10] bg-zinc-900 overflow-hidden relative mb-4">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold text-xl tracking-widest uppercase p-8 text-center bg-gradient-to-br from-white/5 to-transparent">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base md:text-lg font-normal text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {project.role}
                  </p>
                </div>
                <div className="text-base md:text-lg font-normal text-white">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-3 text-sm font-medium uppercase tracking-widest"
            onClick={() => navigate('/projects')}
          >
            <span>View all projects</span>
          </HoverBorderGradient>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
