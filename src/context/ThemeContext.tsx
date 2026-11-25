'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
  isMounted: boolean;
}

function applyThemeToDocument(targetTheme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const metaTheme = document.querySelector('meta[name="color-scheme"]');

  if (targetTheme === 'dark') {
    root.classList.add('dark');
    if (metaTheme) metaTheme.setAttribute('content', 'dark');
  } else {
    root.classList.remove('dark');
    if (metaTheme) metaTheme.setAttribute('content', 'light');
  }
}

const emptySubscribe = () => () => {};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  isMounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('color-scheme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
      applyThemeToDocument(initialTheme);
      // Synchronize initial value from storage if differs
      if (initialTheme !== 'light') {
        const timer = setTimeout(() => {
          setThemeState(initialTheme);
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'color-scheme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setThemeState(e.newValue);
        applyThemeToDocument(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('color-scheme', newTheme);
    } catch {}
    applyThemeToDocument(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
