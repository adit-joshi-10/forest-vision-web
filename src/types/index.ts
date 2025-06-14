
// Global type definitions for the project
export interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
  color: string;
  bgColor: string;
  delay: string;
}

export interface Initiative {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  impact: string;
  color: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  achievements?: string[];
  gradient: string;
  delay: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}
