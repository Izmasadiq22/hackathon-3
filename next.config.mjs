/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        domains:["cdn.sanity.io"]

    },

    experimental: {
        middlewarePrefetch: "strict", // Helps with middleware execution
    },
};

export default nextConfig;
