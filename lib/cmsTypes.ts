// Strapi API response types

// Common Strapi types
export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: {
        thumbnail?: {
          url: string;
          width: number;
          height: number;
        };
        small?: {
          url: string;
          width: number;
          height: number;
        };
        medium?: {
          url: string;
          width: number;
          height: number;
        };
        large?: {
          url: string;
          width: number;
          height: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
}

export interface StrapiTextItem {
  id: number;
  text: string;
}

// Pagination metadata
export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination: StrapiPagination;
}

// Generic Strapi response
export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

// Service types
export interface StrapiServiceAttributes {
  title: string;
  slug: string;
  summary: string;
  icon: StrapiMedia;
  heroImage: StrapiMedia;
  body: string;
  featured: boolean;
  problemsSolved: StrapiTextItem[];
  keyFeatures: StrapiTextItem[];
  targetAudience: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiService {
  id: number;
  attributes: StrapiServiceAttributes;
}

export type StrapiServicesResponse = StrapiResponse<StrapiService[]>;
export type StrapiServiceResponse = StrapiResponse<StrapiService>;

// Author types
export interface StrapiAuthorAttributes {
  name: string;
  avatar: StrapiMedia;
  bio: string;
  twitter?: string;
  linkedin?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiAuthor {
  id: number;
  attributes: StrapiAuthorAttributes;
}

export type StrapiAuthorsResponse = StrapiResponse<StrapiAuthor[]>;
export type StrapiAuthorResponse = StrapiResponse<StrapiAuthor>;

// Insight (Blog) types
export interface StrapiInsightAttributes {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: StrapiMedia;
  body: string;
  tags: StrapiTextItem[];
  publishDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: {
    data: StrapiAuthor;
  };
}

export interface StrapiInsight {
  id: number;
  attributes: StrapiInsightAttributes;
}

export type StrapiInsightsResponse = StrapiResponse<StrapiInsight[]>;
export type StrapiInsightResponse = StrapiResponse<StrapiInsight>;

// Case Study types
export interface StrapiCaseStudyAttributes {
  clientName: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  gallery: {
    data: Array<{
      id: number;
      attributes: StrapiMedia['data']['attributes'];
    }>;
  };
  imageUrl: StrapiMedia;
  industry: string;
  technologiesUsed: StrapiTextItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  service: {
    data: StrapiService;
  };
}

export interface StrapiCaseStudy {
  id: number;
  attributes: StrapiCaseStudyAttributes;
}

export type StrapiCaseStudiesResponse = StrapiResponse<StrapiCaseStudy[]>;
export type StrapiCaseStudyResponse = StrapiResponse<StrapiCaseStudy>;