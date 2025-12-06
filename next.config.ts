// next.config.ts
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

/**
 * Extend NextConfig so we can safely add turbopack (and keep types).
 */
type NextConfigWithExtras = NextConfig & {
  turbopack?: Record<string, unknown>;
  typescript?: { ignoreBuildErrors?: boolean };
};

const nextConfig: NextConfigWithExtras = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // Keep TypeScript build relaxation if you still need it
  typescript: { ignoreBuildErrors: true },

  // Use the webpack hook to add a loader rule (compatible with Vercel)
  webpack: (config, { isServer }) => {
    config.module = config.module ?? { rules: [] };
    config.module.rules.push({
      test: /\.[jt]sx?$/,
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

  // empty turbopack config silences the Turbopack vs webpack check
  turbopack: {},
};

export default nextConfig;
