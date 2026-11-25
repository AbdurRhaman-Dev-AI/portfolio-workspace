import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abdur Rahman | Computer Science & Technology Diploma Engineer',
  description:
    'Personal portfolio of Abdur Rahman (AbdurRhaman-Dev-AI) — 2+ years of Python systems development, full-stack Next.js web applications, and interactive 3D tools.',
  keywords: [
    'Abdur Rahman',
    'AbdurRhaman-Dev-AI',
    'Python Developer',
    'Full-Stack Developer',
    '3D Modeling',
    'Next.js',
    'TypeScript',
    'Blender',
    'Three.js',
    'Agentic AI',
    'Daily Flow',
  ],
  authors: [{ name: 'Abdur Rahman', url: 'https://github.com/AbdurRhaman-Dev-AI' }],
  creator: 'Abdur Rahman',
  metadataBase: new URL('https://abdurrahman.dev'),
  openGraph: {
    title: 'Abdur Rahman | Computer Science Engineer & Software Developer',
    description:
      'Building intelligent Python systems, full-stack web apps, and interactive 3D tools with an Apple-inspired minimalist aesthetic.',
    url: 'https://github.com/AbdurRhaman-Dev-AI',
    siteName: 'Abdur Rahman Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('color-scheme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored ? stored : (prefersDark ? 'dark' : 'light');
                  const meta = document.querySelector('meta[name="color-scheme"]');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    if (meta) meta.content = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    if (meta) meta.content = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
