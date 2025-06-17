import { 
  DetailedService, 
  BlogPost, 
  CaseStudy 
} from '../types';

import {
  StrapiService,
  StrapiInsight,
  StrapiCaseStudy,
  StrapiTextItem,
  StrapiMedia
} from './cmsTypes';

/**
 * Get the URL for a Strapi media item
 */
export function getMediaUrl(media: StrapiMedia | null): string {
  if (!media || !media.data) return '';
  
  const baseUrl = import.meta.env.VITE_CMS_URL || '';
  const url = media.data.attributes.url;
  
  // If URL is already absolute, return it as is
  if (url.startsWith('http')) return url;
  
  // Otherwise, prepend the CMS URL
  return `${baseUrl}${url}`;
}

/**
 * Extract text from an array of StrapiTextItems
 */
export function getTextItems(items: StrapiTextItem[]): string[] {
  return items.map(item => item.text);
}

/**
 * Map a Strapi service to a DetailedService
 */
export function mapStrapiServiceToDetailedService(strapiService: StrapiService): DetailedService {
  const { attributes } = strapiService;
  
  return {
    id: attributes.slug,
    title: attributes.title,
    heroImage: getMediaUrl(attributes.heroImage),
    description: attributes.summary,
    problemsSolved: getTextItems(attributes.problemsSolved),
    keyFeatures: getTextItems(attributes.keyFeatures),
    targetAudience: attributes.targetAudience,
    ogImageUrl: getMediaUrl(attributes.heroImage)
  };
}

/**
 * Map a Strapi insight to a BlogPost
 */
export function mapStrapiInsightToBlogPost(strapiInsight: StrapiInsight): BlogPost {
  const { attributes } = strapiInsight;
  
  return {
    id: strapiInsight.id.toString(),
    title: attributes.title,
    summary: attributes.excerpt,
    date: attributes.publishDate,
    imageUrl: getMediaUrl(attributes.coverImage),
    author: attributes.author.data.attributes.name,
    link: `/blog/${attributes.slug}`,
    tags: getTextItems(attributes.tags),
    ogImageUrl: getMediaUrl(attributes.coverImage)
  };
}

/**
 * Map a Strapi case study to a CaseStudy
 */
export function mapStrapiCaseStudyToCaseStudy(strapiCaseStudy: StrapiCaseStudy): CaseStudy {
  const { attributes } = strapiCaseStudy;
  
  return {
    id: `case-study-${strapiCaseStudy.id}`,
    title: attributes.clientName,
    clientName: attributes.clientName,
    industry: attributes.industry,
    problem: attributes.problem,
    solution: attributes.solution,
    outcome: attributes.impact,
    imageUrl: getMediaUrl(attributes.imageUrl),
    technologiesUsed: getTextItems(attributes.technologiesUsed),
    link: `/work#case-study-${strapiCaseStudy.id}`,
    ogImageUrl: getMediaUrl(attributes.imageUrl)
  };
}