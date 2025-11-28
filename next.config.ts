// next.config.ts
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Use the webpack hook to add a loader rule (compatible with Vercel)
  webpack: (config, { isServer }) => {
    // Add rule for .jsx / .tsx files to use your loader
    config.module = config.module ?? { rules: [] };
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      // include only project src to avoid scanning node_modules
      include: [path.resolve(__dirname, "src")],
      use: [
        {
          loader: LOADER,
        },
      ],
      enforce: "pre",
    });

    return config;
  },

  // keep turbopack out while debugging — add back later if you need it
  // turbopack: { /* experimental */ }
};

export default nextConfig;
