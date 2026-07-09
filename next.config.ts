import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (silences the multiple-lockfiles warning).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
