import { createClient } from "next-sanity";

// Sanity client setup
const client = createClient({
  projectId: 'j1efm4vy', // Your Sanity project ID
  dataset: 'production', // Your Sanity dataset
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN || 'skiAtRblg3mK3mtUqGWVhZt0yxgLbdi78FS3WdccxVlYPbprXplFb99LaDk5FGxIWQ5zivj21rVpqXMd5yWktZUfNFG8kYftOCUjEfjuwOKftconHfy7oZ1fFToybGabfsaeb5umpoXu1BscgGNd6DXpcOBBUmE62WBGcfVpUsjfv2FpFwk2', // Using environment variable for the token
});

// Fetch function definition
export async function sanityFetch({ query, params = {} }: { query: string, params?: any }) {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
