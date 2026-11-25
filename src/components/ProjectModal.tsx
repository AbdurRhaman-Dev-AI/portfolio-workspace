'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close modal (standard accessibility requirement)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with light-dismiss on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl"
            style={{ overscrollBehavior: 'contain' }}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalContentRef}
            initial={{ opacity: 0, scale: 0.94, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.94, y: 24, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto crystal-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 dark:border-white/15 z-10 space-y-6"
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Specular glare */}
            <div className="crystal-glare" />

            {/* Header: Title, Category Badge, and Close Button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.08] relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] border border-blue-500/20">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium crystal-glass text-[#6E6E73] dark:text-[#A1A1A6]">
                      {project.badge}
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6E6E73] dark:text-[#86868B] mt-0.5 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button with accessible name */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal dialog"
                className="w-9 h-9 rounded-full flex items-center justify-center crystal-glass text-[#1D1D1F] dark:text-white hover:bg-black/10 dark:hover:bg-white/15 transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl crystal-glass border border-white/60 dark:border-white/10">
                    <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B]">{stat.label}</div>
                    <div className="text-sm sm:text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="space-y-2 relative z-10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] font-mono">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#E5E5EA] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3 relative z-10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] font-mono">
                Key Capabilities &amp; Features
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feat, idx) => {
                  const parts = feat.split(':');
                  return (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F] dark:text-[#D1D1D6] p-2.5 rounded-xl crystal-glass border border-white/40 dark:border-white/05">
                      <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] mt-0.5 shrink-0" />
                      <div>
                        {parts.length > 1 ? (
                          <>
                            <strong className="text-[#1D1D1F] dark:text-white font-semibold">{parts[0]}:</strong>
                            <span>{parts.slice(1).join(':')}</span>
                          </>
                        ) : (
                          <span>{feat}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] font-mono">
                  {project.architecture.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                {project.architecture.description}
              </p>

              <div className="space-y-2 pt-1">
                {project.architecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl crystal-glass border border-white/50 dark:border-white/05 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-semibold text-[#0071E3] dark:text-[#2997FF]">{layer.name}</span>
                      <span className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">{layer.tech}</span>
                    </div>
                    <p className="text-[#1D1D1F] dark:text-[#D1D1D6]">{layer.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 relative z-10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#86868B] font-mono">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.flatMap((cat) => cat.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono crystal-glass text-[#1D1D1F] dark:text-white border border-white/40 dark:border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F] text-xs font-medium hover:bg-[#333336] dark:hover:bg-zinc-200 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full crystal-glass text-[#1D1D1F] dark:text-white text-xs font-medium hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
