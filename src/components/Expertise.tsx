'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Box, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { expertiseAreas } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF]" />,
  Box: <Box className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span className="gradient-text-aurora">Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] dark:text-white">
            Core Expertise &amp; Tools.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#86868B] font-normal mt-2">
            A grounded engineering discipline spanning 2+ years of Python systems, modern full-stack web platforms, and precision 3D spatial pipelines.
          </p>
        </div>

        {/* 3-Column Bento Grid with Crystal Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertiseAreas.map((area, index) => {
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="crystal-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                {/* Specular glare */}
                <div className="crystal-glare" />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08] mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl crystal-glass flex items-center justify-center border border-white/60 dark:border-white/10 shadow-sm">
                        {iconMap[area.icon]}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-medium text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider">
                          {area.eyebrow}
                        </span>
                        <h3 className="text-lg font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full crystal-glass text-[11px] font-mono font-medium text-[#1D1D1F] dark:text-zinc-200 border border-white/50 dark:border-white/10">
                      {area.highlightStat}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555558] dark:text-[#A1A1A6] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Skills List with Proficiency Chips */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B] uppercase tracking-wider font-semibold">
                      Primary Technologies
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {area.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl crystal-glass border border-white/50 dark:border-white/05 flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white">
                              {skill.name}
                            </span>
                            {skill.tag && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded crystal-glass text-[#6E6E73] dark:text-zinc-400">
                                {skill.tag}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-[#6E6E73] dark:text-[#86868B] mt-1">
                            {skill.experience || skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Capabilities Bullet Points */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2 relative z-10">
                  <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B] uppercase tracking-wider font-semibold mb-2">
                    Delivered Capabilities
                  </div>
                  {area.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-[#1D1D1F] dark:text-[#D1D1D6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF] mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
