'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Compass, Sparkles } from 'lucide-react';
import { roadmapItems } from '@/data/portfolioData';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span className="gradient-text-aurora">Growth &amp; Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] dark:text-white">
            Academic &amp; Career Roadmap.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#86868B] font-normal mt-2">
            A clear timeline of foundational qualifications, active production deliveries, and forward-looking software engineering ambitions.
          </p>
        </div>

        {/* Vertical Timeline with Connected Flow Line */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#0071E3] before:via-[#06B6D4] before:to-purple-500/30">
          {roadmapItems.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isCurrent = item.status === 'current';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Node Indicator Icon */}
                <div
                  className={`absolute -left-[30px] sm:-left-[39px] top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : isCurrent
                      ? 'bg-gradient-to-r from-[#0071E3] to-[#06B6D4] text-white shadow-[0_0_16px_rgba(0,113,227,0.6)] ring-4 ring-blue-500/20'
                      : 'crystal-glass text-[#6E6E73] dark:text-zinc-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : isCurrent ? (
                    <Clock className="w-3.5 h-3.5 animate-pulse stroke-[2.5]" />
                  ) : (
                    <Compass className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Timeline Content Card with Crystal Glass */}
                <div className="crystal-glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-white/60 dark:border-white/10 relative overflow-hidden">
                  <div className="crystal-glare" />

                  <div className="relative z-10">
                    {/* Top Bar: Timeframe & Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">
                        {item.timeframe}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-medium ${
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : isCurrent
                            ? 'bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] ring-1 ring-blue-500/30'
                            : 'crystal-glass text-[#6E6E73] dark:text-[#A1A1A6]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#86868B] mb-4">
                      {item.role}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#48484A] dark:text-[#A1A1A6] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Milestones */}
                    <div className="space-y-2 mb-6">
                      {item.milestones.map((milestone, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F] dark:text-[#D1D1D6]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] mt-1.5 shrink-0" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>

                    {/* Focus Areas Chips */}
                    <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap gap-1.5">
                      {item.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono crystal-glass text-[#48484A] dark:text-[#C7C7CC] border border-white/50 dark:border-white/05"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
