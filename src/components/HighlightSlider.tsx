'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Calendar,
  Box,
  Terminal,
  Layers,
  Sparkles,
  Lock,
  Scissors,
  Clock,
} from 'lucide-react';
import { highlightSlides } from '@/data/portfolioData';

// Slide chromatic themes
const slideThemes = [
  {
    bgGlow: 'from-blue-600/25 via-cyan-500/15 to-transparent',
    accentText: 'text-[#0071E3] dark:text-[#2997FF]',
    accentBg: 'bg-[#0071E3] dark:bg-[#2997FF]',
    borderGlow: 'hover:border-blue-500/40',
    pillGradient: 'from-blue-500 to-cyan-500',
  },
  {
    bgGlow: 'from-purple-600/25 via-pink-500/15 to-cyan-500/10',
    accentText: 'text-purple-600 dark:text-purple-400',
    accentBg: 'bg-purple-600 dark:bg-purple-400',
    borderGlow: 'hover:border-purple-500/40',
    pillGradient: 'from-purple-500 to-pink-500',
  },
  {
    bgGlow: 'from-emerald-600/25 via-teal-500/15 to-transparent',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    accentBg: 'bg-emerald-600 dark:bg-emerald-400',
    borderGlow: 'hover:border-emerald-500/40',
    pillGradient: 'from-emerald-500 to-teal-500',
  },
  {
    bgGlow: 'from-amber-600/25 via-rose-500/15 to-orange-500/10',
    accentText: 'text-amber-600 dark:text-amber-400',
    accentBg: 'bg-amber-600 dark:bg-amber-400',
    borderGlow: 'hover:border-amber-500/40',
    pillGradient: 'from-amber-500 to-rose-500',
  },
];

export default function HighlightSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Slide 1 state: selected day in calendar
  const [selectedDay, setSelectedDay] = useState<number>(14);

  // Slide 2 state: 3D render mode
  const [renderMode, setRenderMode] = useState<'shaded' | 'wireframe' | 'sliced'>('shaded');

  // Slide 3 state: terminal step
  const [terminalStep, setTerminalStep] = useState<number>(2);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % highlightSlides.length);
    }, 7500);

    return () => clearInterval(timer);
  }, [isPaused, isHovered]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = highlightSlides.length - 1;
      if (nextIndex >= highlightSlides.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentSlide = highlightSlides[currentIndex];
  const currentTheme = slideThemes[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.97,
      filter: 'blur(8px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.97,
      filter: 'blur(8px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <section id="showcase" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic Liquid Aurora Atmosphere behind the carousel */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr ${currentTheme.bgGlow} rounded-full blur-[100px] opacity-70 transition-all duration-700 pointer-events-none -z-10`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
              <span className="gradient-text-aurora">Interactive Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] dark:text-white">
              A Closer Look.
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#86868B] font-normal mt-2 max-w-xl">
              Clean liquid crystal architecture. Drag or swipe through real interactive previews of full-stack apps, 3D engines, and agentic systems.
            </p>
          </div>

          {/* Quick Slider Controls */}
          <div className="flex items-center gap-2.5 mt-6 md:mt-0">
            {/* Auto-play pause toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              className="w-10 h-10 rounded-full crystal-glass flex items-center justify-center text-[#1D1D1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
            </motion.button>

            {/* Circular Frosted Glass Prev Arrow */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full crystal-glass flex items-center justify-center text-[#1D1D1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Circular Frosted Glass Next Arrow */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full crystal-glass flex items-center justify-center text-[#1D1D1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Liquid Crystal Horizontal Tab Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-6 p-1.5 crystal-glass rounded-2xl max-w-2xl mx-auto">
          {highlightSlides.map((slide, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`relative px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'text-[#1D1D1F] dark:text-white font-semibold'
                    : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="crystal-slider-tab"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 bg-white/90 dark:bg-white/15 rounded-xl shadow-sm border border-black/5 dark:border-white/20 -z-10"
                  />
                )}
                <span className="font-mono text-[10px] opacity-60">0{idx + 1}</span>
                <span>{slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Transparent Liquid Crystal Showcase Viewport */}
        <div
          className="relative min-h-[580px] sm:min-h-[520px] rounded-3xl overflow-hidden crystal-glass p-6 sm:p-10 border border-white/60 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Specular glare overlay */}
          <div className="crystal-glare" />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -8000 || offset.x < -60) {
                  paginate(1);
                } else if (swipe > 8000 || offset.x > 60) {
                  paginate(-1);
                }
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-grab active:cursor-grabbing relative z-10"
            >
              {/* Left Column: Narrative & Technical Specifications */}
              <div className="lg:col-span-5 flex flex-col text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.08] text-xs font-mono font-medium w-fit border border-black/[0.04] dark:border-white/[0.08]">
                  <span className={currentTheme.accentText}>{currentSlide.tag}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
                    {currentSlide.title}
                  </h3>
                  <p className={`text-sm sm:text-base font-medium ${currentTheme.accentText} mt-1.5`}>
                    {currentSlide.headline}
                  </p>
                </div>

                <p className="text-sm text-[#48484A] dark:text-[#A1A1A6] leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Key innovation bullet list with gradient glow dots */}
                <div className="space-y-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                  {currentSlide.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F] dark:text-[#E5E5EA]">
                      <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.accentBg} mt-1.5 shrink-0 shadow-sm`} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Custom Liquid Crystal Interactive Demos */}
              <div className="lg:col-span-7 w-full">
                {/* 1. Daily Flow — Liquid Crystal Journaling & Calendar */}
                {currentSlide.previewType === 'calendar' && (
                  <div className="rounded-2xl p-5 sm:p-6 crystal-glass border border-white/60 dark:border-white/10 space-y-4 shadow-xl">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white">
                          Daily Flow • November 2026
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] border border-blue-500/20">
                        <Lock className="w-3 h-3" />
                        <span>Firebase Per-User Auth</span>
                      </div>
                    </div>

                    {/* Interactive Calendar Matrix with Liquid Glass Cells */}
                    <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-mono">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-[#6E6E73] dark:text-[#86868B] font-semibold py-1">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 30 }).map((_, index) => {
                        const dayNum = index + 1;
                        const isSelected = selectedDay === dayNum;
                        const hasEntry = [3, 6, 8, 12, 14, 18, 22, 25, 27].includes(dayNum);
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedDay(dayNum)}
                            className={`h-9 rounded-xl flex flex-col items-center justify-center relative transition-all duration-200 ${
                              isSelected
                                ? 'bg-[#0071E3] text-white font-bold shadow-[0_4px_16px_rgba(0,113,227,0.4)] scale-105'
                                : 'hover:bg-black/5 dark:hover:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7]'
                            }`}
                          >
                            <span>{dayNum}</span>
                            {hasEntry && (
                              <span
                                className={`w-1 h-1 rounded-full absolute bottom-1 ${
                                  isSelected ? 'bg-white' : 'bg-[#0071E3] dark:bg-[#2997FF]'
                                }`}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Day Entry Card with Liquid Glass Backing */}
                    <div className="p-3.5 rounded-xl bg-white/70 dark:bg-black/40 border border-white/60 dark:border-white/10 text-xs space-y-1.5 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] text-[#6E6E73] dark:text-[#86868B]">
                        <div className="flex items-center gap-1.5 font-mono">
                          <Clock className="w-3 h-3 text-[#0071E3] dark:text-[#2997FF]" />
                          <span>2026-11-{selectedDay < 10 ? `0${selectedDay}` : selectedDay} • 18:42:10 UTC</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium font-mono">
                          Encrypted &amp; Synced
                        </span>
                      </div>
                      <p className="text-[#1D1D1F] dark:text-zinc-200 leading-relaxed">
                        &quot;Refined the liquid-glass layout components for Daily Flow today. Per-user Firebase rules maintain complete privacy isolation.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. AI-Assisted 3D Asset Studio — Interactive Crystal Mesh Viewport */}
                {currentSlide.previewType === 'mesh-viewport' && (
                  <div className="rounded-2xl p-5 sm:p-6 crystal-glass border border-white/60 dark:border-white/10 space-y-4 shadow-xl">
                    {/* Viewport Control Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Box className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white">
                          Three.js WebGL • OrbitControls Active
                        </span>
                      </div>

                      {/* Mode switcher pills */}
                      <div className="flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] p-0.5 rounded-xl text-[11px]">
                        <button
                          type="button"
                          onClick={() => setRenderMode('shaded')}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            renderMode === 'shaded'
                              ? 'bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                              : 'text-[#6E6E73] dark:text-[#86868B]'
                          }`}
                        >
                          Shaded
                        </button>
                        <button
                          type="button"
                          onClick={() => setRenderMode('wireframe')}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            renderMode === 'wireframe'
                              ? 'bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                              : 'text-[#6E6E73] dark:text-[#86868B]'
                          }`}
                        >
                          Wireframe
                        </button>
                        <button
                          type="button"
                          onClick={() => setRenderMode('sliced')}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            renderMode === 'sliced'
                              ? 'bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                              : 'text-[#6E6E73] dark:text-[#86868B]'
                          }`}
                        >
                          Sliced
                        </button>
                      </div>
                    </div>

                    {/* Interactive 3D Canvas Mockup */}
                    <div className="h-44 sm:h-52 w-full rounded-2xl bg-gradient-to-b from-purple-500/10 via-black/5 to-cyan-500/10 dark:from-purple-950/40 dark:via-black/60 dark:to-cyan-950/30 flex flex-col items-center justify-center relative overflow-hidden border border-white/40 dark:border-white/10 shadow-inner">
                      {/* Radial light */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18)_0,transparent_70%)]" />

                      <svg viewBox="0 0 200 120" className="w-56 h-36 relative z-10">
                        {renderMode === 'shaded' && (
                          <g>
                            <polygon points="100,20 150,50 100,80 50,50" className="fill-purple-500/40 stroke-purple-400 stroke-1" />
                            <polygon points="50,50 100,80 100,110 50,80" className="fill-purple-600/50 stroke-purple-400 stroke-1" />
                            <polygon points="150,50 100,80 100,110 150,80" className="fill-cyan-500/50 stroke-cyan-400 stroke-1" />
                          </g>
                        )}
                        {renderMode === 'wireframe' && (
                          <g className="stroke-cyan-400 stroke-[1.2] fill-none">
                            <polygon points="100,20 150,50 100,80 50,50" />
                            <polygon points="50,50 100,80 100,110 50,80" />
                            <polygon points="150,50 100,80 100,110 150,80" />
                            <line x1="100" y1="20" x2="100" y2="80" strokeDasharray="3 3" />
                            <line x1="50" y1="50" x2="150" y2="50" strokeDasharray="3 3" />
                            <line x1="75" y1="35" x2="75" y2="95" strokeDasharray="2 2" className="opacity-60" />
                            <line x1="125" y1="35" x2="125" y2="95" strokeDasharray="2 2" className="opacity-60" />
                          </g>
                        )}
                        {renderMode === 'sliced' && (
                          <g>
                            <polygon points="100,20 150,50 100,80 50,50" className="fill-amber-500/25 stroke-amber-400 stroke-1" />
                            <line x1="20" y1="65" x2="180" y2="65" className="stroke-rose-500 stroke-2" strokeDasharray="4 2" />
                            <polygon points="50,65 100,80 100,110 50,80" className="fill-rose-600/40 stroke-rose-400 stroke-1" />
                            <polygon points="150,65 100,80 100,110 150,80" className="fill-rose-700/50 stroke-rose-400 stroke-1" />
                            <text x="135" y="60" className="text-[9px] fill-rose-400 font-mono font-semibold">Slice Z=0.0</text>
                          </g>
                        )}
                      </svg>

                      {/* Viewport indicators */}
                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#6E6E73] dark:text-[#86868B] flex items-center gap-2">
                        <span>FPS: 60.0</span>
                        <span>•</span>
                        <span>Watertight: 100%</span>
                      </div>
                      <div className="absolute bottom-2 right-3 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono crystal-glass text-purple-600 dark:text-purple-300 font-semibold">
                          .GLB
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono crystal-glass text-blue-600 dark:text-blue-300 font-semibold">
                          .FBX
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono crystal-glass text-amber-600 dark:text-amber-300 font-semibold">
                          .OBJ
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Python Automation & Agentic AI — Transparent Glass Terminal */}
                {currentSlide.previewType === 'terminal' && (
                  <div className="rounded-2xl p-5 sm:p-6 crystal-glass border border-white/60 dark:border-white/10 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white font-mono">
                          python -m agentic_suite.orchestrator
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTerminalStep((prev) => (prev % 3) + 1)}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-all font-semibold"
                      >
                        Run Next ({(terminalStep % 3) + 1}/3)
                      </button>
                    </div>

                    {/* Simulated High-Resolution Crystal Terminal */}
                    <div className="h-44 sm:h-52 rounded-xl p-4 bg-black/80 dark:bg-black/90 text-zinc-100 font-mono text-[11px] leading-relaxed flex flex-col justify-between overflow-y-auto border border-emerald-500/20 shadow-inner">
                      <div className="space-y-1.5">
                        <div className="text-zinc-500">[*] Initializing Agentic AI Context (Claude &amp; Gemini)...</div>
                        <div className="text-emerald-400">
                          [✓] Loaded model weights: gemini-2.5-flash &amp; claude-3-7-sonnet
                        </div>
                        {terminalStep >= 2 && (
                          <div className="text-cyan-400">
                            [→] Executing filesystem tool: scanning workspace directory...
                            <span className="block pl-4 text-zinc-400">Found 4 modules, 18 automated test suites passing.</span>
                          </div>
                        )}
                        {terminalStep >= 3 && (
                          <div className="text-amber-400">
                            [✓] Agentic workflow complete: 0 errors, time elapsed: 142ms.
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-zinc-500 text-[10px]">
                        <span>Python 3.11+ • AsyncIO Reactor</span>
                        <span className="text-emerald-400 font-semibold">Active &amp; Ready</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. 3D Modeling & Mesh Pipelines — Watertight Geometry Inspection */}
                {currentSlide.previewType === 'pipeline' && (
                  <div className="rounded-2xl p-5 sm:p-6 crystal-glass border border-white/60 dark:border-white/10 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white">
                          trimesh Topology &amp; Manifold Inspector
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                        Watertight Verified
                      </span>
                    </div>

                    {/* Stats Matrix Grid with Crystal Glass Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-2xl crystal-glass border border-white/60 dark:border-white/10">
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B] font-mono">Non-Manifold Edges</div>
                        <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">0</div>
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">100% Solid Shell</div>
                      </div>
                      <div className="p-3 rounded-2xl crystal-glass border border-white/60 dark:border-white/10">
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B] font-mono">Triangles / Polys</div>
                        <div className="text-lg font-semibold text-[#1D1D1F] dark:text-white">48,256</div>
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">Quad-Loop Retopo</div>
                      </div>
                      <div className="p-3 rounded-2xl crystal-glass border border-white/60 dark:border-white/10 col-span-2 sm:col-span-1">
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B] font-mono">Wall Thickness</div>
                        <div className="text-lg font-semibold text-[#0071E3] dark:text-[#2997FF]">≥ 1.8mm</div>
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#86868B]">3D Print Safe</div>
                      </div>
                    </div>

                    {/* Keying joint illustration card */}
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-black/40 border border-white/50 dark:border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Scissors className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-[#1D1D1F] dark:text-zinc-200 font-medium">Modular Keyed Assembly (Male/Female Pegs)</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#6E6E73] dark:text-[#86868B]">Tolerance: ±0.15mm</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Liquid Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {highlightSlides.map((slide, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className="focus:outline-none py-2"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? `w-9 ${currentTheme.accentBg} shadow-sm shadow-blue-500/30`
                      : 'w-2 bg-black/15 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
