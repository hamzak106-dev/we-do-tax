import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // important for Netlify static
  images: {
    unoptimized: true, // ✅ this disables image optimization that breaks static export
    domains: ["pixabay.com", "randomuser.me", "cdn.prod.website-files.com"],
  },
};

export default nextConfig;
