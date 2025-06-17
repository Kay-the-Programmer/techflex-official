/**
 * Techflex CMS API Client Example
 * 
 * This file demonstrates how to integrate the React frontend with the Django CMS API.
 * Copy and adapt these functions to your frontend codebase.
 */

// Base URL for the API
const API_BASE_URL = process.env.VITE_CMS_API_URL || 'http://localhost:8000/api';

// API token for authenticated requests (if needed)
const API_TOKEN = process.env.VITE_CMS_TOKEN;

// Headers for authenticated requests
const getAuthHeaders = () => {
  return API_TOKEN ? {
    'Authorization': `Token ${API_TOKEN}`,
    'Content-Type': 'application/json',
  } : {
    'Content-Type': 'application/json',
  };
};

/**
 * Fetch all services
 * @param {boolean} featured - Filter by featured services
 * @returns {Promise<Array>} - List of services
 */
export const fetchServices = async (featured = false) => {
  try {
    const url = featured 
      ? `${API_BASE_URL}/services/?featured=true` 
      : `${API_BASE_URL}/services/`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching services: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch services:', error);
    throw error;
  }
};

/**
 * Fetch a specific service by slug
 * @param {string} slug - Service slug
 * @returns {Promise<Object>} - Service details
 */
export const fetchServiceBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${slug}/`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching service: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch service with slug ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch all insights/blog posts
 * @param {Array<string>} tags - Filter by tags
 * @returns {Promise<Array>} - List of insights
 */
export const fetchInsights = async (tags = []) => {
  try {
    let url = `${API_BASE_URL}/insights/`;
    
    // Add tags filter if provided
    if (tags.length > 0) {
      const tagsQuery = tags.map(tag => `tags=${encodeURIComponent(tag)}`).join('&');
      url = `${url}?${tagsQuery}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching insights: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch insights:', error);
    throw error;
  }
};

/**
 * Fetch a specific insight by slug
 * @param {string} slug - Insight slug
 * @returns {Promise<Object>} - Insight details
 */
export const fetchInsightBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/insights/${slug}/`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching insight: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch insight with slug ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch all case studies
 * @returns {Promise<Array>} - List of case studies
 */
export const fetchCaseStudies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/case-studies/`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching case studies: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
    throw error;
  }
};

/**
 * Fetch a specific case study by slug
 * @param {string} slug - Case study slug
 * @returns {Promise<Object>} - Case study details
 */
export const fetchCaseStudyBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/case-studies/${slug}/`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching case study: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch case study with slug ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch all authors
 * @returns {Promise<Array>} - List of authors
 */
export const fetchAuthors = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/authors/`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching authors: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch authors:', error);
    throw error;
  }
};

/**
 * Fetch draft content (preview mode)
 * @param {string} type - Content type (services, insights, case-studies)
 * @param {string} slug - Content slug
 * @param {string} token - Preview token
 * @returns {Promise<Object>} - Draft content
 */
export const fetchDraft = async (type, slug, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/${slug}/?token=${token}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching draft: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch draft ${type} with slug ${slug}:`, error);
    throw error;
  }
};