'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Box, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'python' | '3d' | 'fullstack'>('python');

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] pt-24 pb-16 sm:pt-32 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Liquid Crystal Chromatic Gradient Aurora Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-purple-500/10 dark:from-blue-600/25 dark:via-cyan-500/20 dark:to-purple-600/15 rounded-full blur-[110px] pointer-events-none animate-liquid-orb-1 -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[380px] bg-gradient-to-bl from-purple-500/15 via-pink-400/10 to-teal-400/15 dark:from-purple-600/20 dark:via-indigo-500/15 dark:to-cyan-400/10 rounded-full blur-[120px] pointer-events-none animate-liquid-orb-2 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071E3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071E3] dark:bg-[#2997FF]"></span>
              </span>
              <span className="font-medium">{personalInfo.role}</span>
            </motion.div>

            {/* Staggered Display Headline with Prismatic Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#1D1D1F] dark:text-white leading-[1.08] mb-4">
              <span className="gradient-text-primary">{personalInfo.name}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#6E6E73] dark:text-[#86868B] mt-2">
                Building intelligent Python systems, full-stack web apps, and interactive 3D tools.
              </span>
            </h1>

            {/* Concise Intro */}
            <p className="text-base sm:text-lg text-[#555558] dark:text-[#A1A1A6] font-normal leading-relaxed max-w-xl mb-8">
              {personalInfo.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Primary solid pill with crystal glow */}
              <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0077ED] text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              {/* Secondary glass pill */}
              <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full crystal-glass text-[#1D1D1F] dark:text-white hover:bg-white/80 dark:hover:bg-white/10 font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </motion.a>
            </div>

            {/* Micro credibility indicator with crystal glass pill */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6E6E73] dark:text-[#86868B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                <span>Next.js App Router</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                <span>Python &amp; trimesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                <span>Blender 3D Modeling</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Apple Liquid-Glass Visual Stack */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient subtle float container */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Main Liquid Crystal Glass Card */}
              <div className="crystal-glass-card rounded-3xl p-5 sm:p-6 relative overflow-hidden shadow-2xl">
                {/* Specular glare sheen */}
                <div className="crystal-glare" />

                {/* Header bar of the card */}
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08] mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                    <span className="ml-2 text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B]">
                      stack-inspector.sh
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF] crystal-glass px-2.5 py-0.5 rounded-full border border-blue-500/20">
                    <Sparkles className="w-3 h-3" />
                    <span>Active 2026</span>
                  </div>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 crystal-glass rounded-xl mb-4 text-xs font-medium relative z-10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('python')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'python'
                        ? 'bg-white dark:bg-white/20 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                        : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Python</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('3d')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === '3d'
                        ? 'bg-white dark:bg-white/20 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                        : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Mesh</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('fullstack')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'fullstack'
                        ? 'bg-white dark:bg-white/20 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                        : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Next.js</span>
                  </button>
                </div>

                {/* Dynamic Content View based on activeTab */}
                <div className="min-h-[190px] font-mono text-[12px] p-3.5 rounded-xl bg-black/[0.04] dark:bg-black/50 border border-black/[0.04] dark:border-white/[0.08] flex flex-col justify-between relative z-10">
                  {activeTab === 'python' && (
                    <motion.div
                      key="python"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5 text-left text-xs"
                    >
                      <div className="text-[#6E6E73] dark:text-[#86868B]"># Systems &amp; Agentic Orchestration</div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        <span className="text-purple-600 dark:text-purple-400">import</span> trimesh, asyncio, google.genai
                      </div>
                      <div className="text-[#1D1D1F] dark:text-[#F5F5F7]">
                        <span className="text-blue-600 dark:text-blue-400">async def</span> orchestrate_3d_pipeline(prompt):
                      </div>
                      <div className="pl-4 text-[#6E6E73] dark:text-zinc-400">
                        mesh = <span className="text-amber-600 dark:text-amber-300">load_mesh</span>(&quot;asset.obj&quot;)
                      </div>
                      <div className="pl-4 text-[#6E6E73] dark:text-zinc-400">
                        watertight = mesh.is_watertight  <span className="text-emerald-500 font-semibold"># True (0 non-manifold)</span>
                      </div>
                      <div className="pl-4 text-purple-600 dark:text-purple-400 font-medium">
                        return await export_glb(mesh, optimize=True)
                      </div>
                    </motion.div>
                  )}

                  {activeTab === '3d' && (
                    <motion.div
                      key="3d"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center justify-center py-2 space-y-3"
                    >
                      {/* Geometric Wireframe SVG visualization */}
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0071E3] dark:stroke-[#2997FF] fill-none stroke-[1.5]">
                          <polygon points="50,15 85,35 50,55 15,35" className="fill-blue-500/20" />
                          <polygon points="15,35 50,55 50,85 15,65" className="fill-indigo-500/20" />
                          <polygon points="85,35 50,55 50,85 85,65" className="fill-cyan-500/20" />
                          <line x1="50" y1="15" x2="50" y2="55" strokeDasharray="2 2" className="opacity-60" />
                          <line x1="15" y1="35" x2="85" y2="35" strokeDasharray="2 2" className="opacity-60" />
                          <circle cx="50" cy="55" r="2.5" className="fill-[#0071E3] dark:fill-[#2997FF]" />
                        </svg>
                      </div>
                      <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#86868B] text-center">
                        Watertight Topology • 24,192 Tris • Sliced Planes
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'fullstack' && (
                    <motion.div
                      key="fullstack"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 text-left text-xs"
                    >
                      <div className="flex items-center justify-between text-[11px] text-[#6E6E73] dark:text-[#86868B] pb-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                        <span>Daily Flow Architecture</span>
                        <span className="text-emerald-500 font-semibold">Ready</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm" />
                        <span className="text-[#1D1D1F] dark:text-zinc-200">Next.js App Router (React 19)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow-sm" />
                        <span className="text-[#1D1D1F] dark:text-zinc-200">Tailwind CSS Liquid-Glass Styling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shadow-sm" />
                        <span className="text-[#1D1D1F] dark:text-zinc-200">Firebase Firestore Per-User Isolation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500 shadow-sm" />
                        <span className="text-[#1D1D1F] dark:text-zinc-200">Framer Motion Spring Physics</span>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-[10px] text-[#6E6E73] dark:text-[#86868B]">
                    <span>Status: Production Verified</span>
                    <span className="font-mono text-[#0071E3] dark:text-[#2997FF]">Latency &lt; 100ms</span>
                  </div>
                </div>

                {/* 3 Metric Pills below with crystal glass */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] relative z-10">
                  <div className="text-center p-2 rounded-xl crystal-glass">
                    <div className="text-sm font-semibold text-[#1D1D1F] dark:text-white">2+ Yrs</div>
                    <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">Python Dev</div>
                  </div>
                  <div className="text-center p-2 rounded-xl crystal-glass">
                    <div className="text-sm font-semibold text-[#1D1D1F] dark:text-white">3D Mesh</div>
                    <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">AI &amp; trimesh</div>
                  </div>
                  <div className="text-center p-2 rounded-xl crystal-glass">
                    <div className="text-sm font-semibold text-[#1D1D1F] dark:text-white">Next.js</div>
                    <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">Firebase Cloud</div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
