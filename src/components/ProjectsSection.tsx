'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { projectsData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types/portfolio';
import ProjectModal from './ProjectModal';

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack Web' },
  { id: '3d-ai', label: '3D & AI Tooling' },
  { id: 'python', label: 'Python Systems' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background soft chromatic glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span className="gradient-text-aurora">Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] dark:text-white">
            Engineered with Purpose.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#86868B] font-normal mt-2">
            Selected projects demonstrating full-stack engineering, computational 3D geometry, and resilient Python automation.
          </p>

          {/* Animated Category Filter Bar with Liquid Sliding Pill */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 crystal-glass rounded-full mt-8 max-w-md mx-auto shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? 'text-[#1D1D1F] dark:text-white font-semibold'
                      : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="project-filter-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-white dark:bg-white/15 rounded-full shadow-sm border border-black/5 dark:border-white/20 -z-10"
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Bento Project Grid with Liquid Crystal Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="crystal-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                >
                  {/* Crystal glare sheen */}
                  <div className="crystal-glare" />

                  {/* Subtle Corner Ambient Gradient */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/15 dark:from-blue-400/15 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />

                  {/* Top: Category Tag & Badges */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full crystal-glass text-[#0071E3] dark:text-[#2997FF] font-medium border border-blue-500/20">
                          {project.categoryLabel}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                            Featured
                          </span>
                        )}
                      </div>

                      {project.stats && (
                        <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B] hidden sm:block">
                          {project.stats[0]?.label}: <span className="text-[#1D1D1F] dark:text-white font-medium">{project.stats[0]?.value}</span>
                        </div>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#86868B] mt-1 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-sm text-[#48484A] dark:text-[#A1A1A6] leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom: Tags & Action Buttons */}
                  <div className="relative z-10">
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono crystal-glass text-[#48484A] dark:text-[#C7C7CC] border border-black/[0.04] dark:border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <motion.a
                            whileTap={{ scale: 0.96 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full crystal-glass text-[#1D1D1F] dark:text-white text-xs font-medium hover:bg-white/80 dark:hover:bg-white/15 transition-all shadow-sm"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub ↗</span>
                          </motion.a>
                        )}
                      </div>

                      {/* Details trigger button with crystal glow */}
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0077ED] text-white text-xs font-medium hover:opacity-95 transition-all shadow-md shadow-blue-500/20"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Case Study Details</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
