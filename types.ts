import React from 'react';

export interface NavLinkItem {
  path: string;
  label: string;
}

export interface ServiceHighlight {
  id: string;
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  learnMoreLink: string; // Could link to a specific section ID on services page
}

export interface DetailedService {
  id:string;
  title: string;
  heroImage: string; // URL for a relevant image
  description: string;
  problemsSolved: string[];
  keyFeatures: string[];
  targetAudience: string;
  ogImageUrl?: string; // Optional: for specific OG image on service detail page
}

export interface ValuePillar {
  id: string;
  icon: React.ReactElement<{ className?: string }>;
  name: string;
  description: string;
}

export interface ProcessPhase {
  id: string;
  phaseNumber: string;
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
}

export interface FounderProfile {
  name: string;
  title: string;
  imageUrl: string;
  bio: string[];
  university: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  author: string;
  link: string; // Typically a slug for a full blog post page
  tags?: string[];
  ogImageUrl?: string; // Specific OG image for blog posts
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  imageUrl: string;
  technologiesUsed?: string[];
  link?: string; // Optional link to a more detailed page
  ogImageUrl?: string;
}

// Chatbot types
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean; // For bot messages while waiting for API response
}

// Structured Data Types
export type SchemaType =
  | 'Organization'
  | 'WebSite'
  | 'Service'
  | 'Product' // Can be used for services too
  | 'Article'
  | 'BlogPosting'
  | 'BreadcrumbList'
  | 'Person'
  | 'Blog'; // Added Blog type

export interface JsonLdProps {
  type: SchemaType;
  data: Record<string, any>;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  socialLinks?: SocialLink[];
}
