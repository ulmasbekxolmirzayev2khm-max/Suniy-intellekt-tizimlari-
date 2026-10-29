export type Language = 'uz' | 'ru' | 'en';

export type Theme = 'dark' | 'light';

export type Category = 'all' | 'llm' | 'search' | 'image' | 'open';

export interface UseCaseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PromptItem {
  id: number;
  title: string;
  category: string;
  prompt: string;
}

export interface RequirementsData {
  technical: string[];
  registration: string[];
  restrictions: string[];
  pricingTiers: string[];
  security: string[];
  ethics: string[];
}

export interface LocalizedAIContent {
  shortDesc: string;
  fullDescription: string[];
  capabilities: string[];
  strengths: string[];
  limitations: string[];
  pricing: {
    freeTier: string;
    paidTier: string;
    note: string;
  };
  useCases: UseCaseItem[];
  requirements: RequirementsData;
  prompts: PromptItem[];
}

export interface AIModel {
  id: string;
  name: string;
  company: string;
  category: 'llm' | 'search' | 'image' | 'open';
  accentColor: string;
  gradient: string;
  websiteUrl: string;
  year: number;
  platforms: string[];
  badge: Record<Language, string>;
  logoSvg: string; // Vector SVG path or full SVG string
  uz: LocalizedAIContent;
  ru: LocalizedAIContent;
  en: LocalizedAIContent;
}

export interface AuthorData {
  name: string;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  projectNote: Record<Language, string>;
  email: string;
  telegram: string;
  linkedin: string;
  github: string;
  copyrightYear: number;
}
