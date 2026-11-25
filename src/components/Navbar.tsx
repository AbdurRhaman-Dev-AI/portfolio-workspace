'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/portfolioData';

const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, isMounted } = useTheme();
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 28,
    restDelta: 0.001,
  });

  // Track scroll position to update active section & shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Prismatic Apple 2.5px scroll progress bar pinned at top edge */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0071E3] via-[#06B6D4] to-[#8B5CF6] dark:from-[#2997FF] dark:via-[#22D3EE] dark:to-[#A78BFA] origin-left z-50 shadow-[0_0_12px_rgba(0,113,227,0.7)]"
          style={{ scaleX }}
        />

        {/* 54px Frosted Liquid Crystal Navbar */}
        <div
          className={`h-[54px] w-full transition-all duration-300 ${
            isScrolled
              ? 'liquid-glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
              : 'bg-white/50 dark:bg-black/40 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.06]'
          }`}
        >
          <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
            {/* Brand Logo / Monogram */}
            <a
              href="#overview"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Abdur Rahman - Home"
            >
              <div className="w-8 h-8 rounded-full crystal-glass flex items-center justify-center border border-white/60 dark:border-white/15 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <span className="text-xs font-semibold tracking-wider text-black dark:text-white">AR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] text-[#6E6E73] dark:text-[#86868B] hidden sm:inline -mt-0.5 font-mono">
                  Dev-AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full focus:outline-none ${
                      isActive
                        ? 'text-[#0071E3] dark:text-[#2997FF] font-semibold'
                        : 'text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute inset-0 crystal-glass rounded-full -z-10 shadow-sm border border-white/50 dark:border-white/10"
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Theme Toggle & GitHub Pill CTA */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle Button with Crystal Glass */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E6E73] dark:text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white crystal-glass hover:bg-white/80 dark:hover:bg-white/15 transition-all focus:outline-none shadow-sm"
              >
                {isMounted ? (
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-zinc-700" />
                    )}
                  </motion.div>
                ) : (
                  <div className="w-4 h-4" />
                )}
              </button>

              {/* GitHub Pill CTA */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-medium px-3.5 py-1.5 rounded-full bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F] hover:bg-[#333336] dark:hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] crystal-glass focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[54px] z-40 p-4 md:hidden"
          >
            <div className="crystal-glass rounded-2xl p-4 shadow-2xl border border-white/60 dark:border-white/15 space-y-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-[#6E6E73] dark:text-[#86868B] font-mono">→</span>
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-black/5 dark:border-white/10">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
