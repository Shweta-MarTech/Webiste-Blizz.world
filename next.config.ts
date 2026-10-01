import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export served from /Webiste-Blizz.world
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/Webiste-Blizz.world",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
