const API = import.meta.env.VITE_CMS_URL;
const TOKEN = import.meta.env.VITE_CMS_TOKEN;

/**
 * Fetch data from the Strapi CMS API
 * @param path - API path (e.g., '/api/services')
 * @returns Promise with the JSON response
 */
export async function cmsFetch<T>(path: string) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  
  if (!res.ok) {
    throw new Error(`CMS error: ${res.status} ${res.statusText}`);
  }
  
  return res.json() as Promise<T>;
}

/**
 * Fetch data using GraphQL
 * @param query - GraphQL query
 * @param variables - Query variables
 * @returns Promise with the JSON response
 */
export async function cmsGraphQL<T>(query: string, variables?: Record<string, any>) {
  const res = await fetch(`${API}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  
  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.status} ${res.statusText}`);
  }
  
  const json = await res.json();
  
  if (json.errors) {
    throw new Error(`GraphQL error: ${json.errors[0].message}`);
  }
  
  return json.data as T;
}