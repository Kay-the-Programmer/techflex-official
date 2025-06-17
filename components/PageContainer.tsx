import React, { useEffect } from 'react';
import { COMPANY_NAME, WEBSITE_URL, DEFAULT_OG_IMAGE_URL } from '../constants.tsx';

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  ogType?: 'website' | 'article' | 'profile' | 'product';
  // ogUrl is typically window.location.href, so we'll derive it
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  title, 
  description,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogType = 'website',
}) => {
  useEffect(() => {
    // Set Document Title
    const defaultSuffix = `${COMPANY_NAME}`;
    document.title = title ? `${title} | ${defaultSuffix}` : `${defaultSuffix} - Progress Through Innovation`;

    // Helper function to set or create meta tags
    const setMetaTag = (nameOrProperty: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Set Meta Description
    setMetaTag('description', description);

    // Set Open Graph Meta Tags
    const currentUrl = typeof window !== 'undefined' ? window.location.href : WEBSITE_URL;
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', currentUrl, true); // Use current URL or fallback
    setMetaTag('og:image', ogImageUrl || DEFAULT_OG_IMAGE_URL, true); // Use specific or default OG image
    setMetaTag('og:site_name', COMPANY_NAME, true);

    // Set Twitter Card Meta Tags (often mirror OG tags)
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', ogImageUrl || DEFAULT_OG_IMAGE_URL);
    // Add twitter:site or twitter:creator if available

  }, [title, description, ogTitle, ogDescription, ogImageUrl, ogType]);

  return <>{children}</>;
};

export default PageContainer;