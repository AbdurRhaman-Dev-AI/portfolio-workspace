'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Send, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setMessageOpen(false);
      setFormState({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <footer id="contact" className="pt-28 pb-14 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Centered Apple-Style Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-glass text-xs font-semibold uppercase tracking-wider mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span className="gradient-text-aurora">Open for Opportunities &amp; Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-[#1D1D1F] dark:text-white max-w-2xl mx-auto leading-tight">
            Let&apos;s build something clean and meaningful.
          </h2>

          <p className="text-base text-[#6E6E73] dark:text-[#86868B] max-w-lg mx-auto font-normal">
            Whether you are looking for a dedicated software engineer, full-stack Next.js developer, or computational 3D specialist, my inbox is always open.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            {/* One-Click Copy Email Pill */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0071E3] to-[#0077ED] text-white font-medium text-sm transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
            </motion.button>

            {/* Quick Message Drawer Trigger */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              type="button"
              onClick={() => setMessageOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full crystal-glass text-[#1D1D1F] dark:text-white hover:bg-white/80 dark:hover:bg-white/10 font-medium text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
              <span>Quick Message</span>
            </motion.button>

            {/* Direct GitHub Link */}
            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full crystal-glass text-[#1D1D1F] dark:text-white hover:bg-white/80 dark:hover:bg-white/10 font-medium text-sm transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Message Modal Drawer with Crystal Glass */}
        <AnimatePresence>
          {messageOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quick-message-title"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMessageOpen(false)}
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl"
                style={{ overscrollBehavior: 'contain' }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.94, y: 24, filter: 'blur(8px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md crystal-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 dark:border-white/15 z-10 text-left"
                style={{ overscrollBehavior: 'contain' }}
              >
                <div className="crystal-glare" />

                <div className="relative z-10">
                  <h3 id="quick-message-title" className="text-xl font-semibold text-[#1D1D1F] dark:text-white mb-1">
                    Send a Note to Abdur Rahman
                  </h3>
                  <p className="text-xs text-[#6E6E73] dark:text-[#86868B] mb-6">
                    Direct message delivery via web client.
                  </p>

                  {messageSent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8 text-center space-y-2"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20 shadow-sm">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs text-[#6E6E73] dark:text-[#86868B]">
                        Thank you for reaching out. I will respond to your email promptly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSendMessage} className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-[#1D1D1F] dark:text-zinc-200 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Smith"
                          className="w-full px-3.5 py-2.5 rounded-xl crystal-glass border border-white/60 dark:border-white/10 text-xs text-[#1D1D1F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-[#1D1D1F] dark:text-zinc-200 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl crystal-glass border border-white/60 dark:border-white/10 text-xs text-[#1D1D1F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-[#1D1D1F] dark:text-zinc-200 mb-1">
                          Message
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell me about your project or opportunity..."
                          className="w-full px-3.5 py-2.5 rounded-xl crystal-glass border border-white/60 dark:border-white/10 text-xs text-[#1D1D1F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0071E3] resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setMessageOpen(false)}
                          className="px-4 py-2 rounded-xl text-xs font-medium text-[#6E6E73] dark:text-[#86868B] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#0071E3] text-white text-xs font-medium hover:bg-[#0077ED] transition-colors shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Note</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Minimal Copyright Footer */}
        <div className="mt-20 pt-8 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E6E73] dark:text-[#86868B] gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Abdur Rahman</span>
            <span>•</span>
            <span className="font-mono">AbdurRhaman-Dev-AI</span>
          </div>

          <div className="font-mono text-[11px]">
            &copy; 2026 Abdur Rahman. Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
}
