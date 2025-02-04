import { createClient } from "next-sanity";

// Sanity client setup
const client = createClient({
  projectId: 'j1efm4vy', // Your Sanity project ID
  dataset: 'production', // Your Sanity dataset
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN || 'your_sanity_api_token', // Using environment variable for the token
});

// Define types for your query parameters
interface SanityFetchParams {
  [key: string]: string | number | boolean; // Example type for query params
}

// Fetch function definition
export async function sanityFetch({ query, params = {} }: { query: string, params?: SanityFetchParams }) {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
