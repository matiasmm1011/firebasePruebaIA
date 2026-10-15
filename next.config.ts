import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static export to `out/` so Firebase Hosting can serve it
  output: "export",
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents / partialPrefetching (PPR) are not supported with `output: "export"`
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
