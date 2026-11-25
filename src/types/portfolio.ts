export type ProjectCategory = 'all' | 'fullstack' | '3d-ai' | 'python';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | '3d-ai' | 'python';
  categoryLabel: string;
  featured?: boolean;
  summary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  overview: string;
  keyFeatures: string[];
  architecture: {
    title: string;
    description: string;
    layers: { name: string; tech: string; role: string }[];
  };
  techStack: {
    category: string;
    skills: string[];
  }[];
}

export interface HighlightSlide {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  gradient: string;
  accentColor: string;
  bullets: string[];
  previewType: 'calendar' | 'mesh-viewport' | 'terminal' | 'pipeline';
}

export interface ExpertiseArea {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  highlightStat: string;
  skills: { name: string; level: string; experience?: string; tag?: string }[];
  capabilities: string[];
}

export interface RoadmapItem {
  id: string;
  status: 'completed' | 'current' | 'upcoming';
  timeframe: string;
  title: string;
  badge: string;
  role: string;
  description: string;
  milestones: string[];
  focusAreas: string[];
}
