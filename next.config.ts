import type { NextConfig } from "next";

const isGithubPagesExport = process.env.GITHUB_PAGES === "true";
const repoName = "chok-site";

const nextConfig: NextConfig = {
  ...(isGithubPagesExport
    ? {
        output: "export",
        images: { loader: "custom", loaderFile: "./image-loader.ts" },
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {
        images: { formats: ["image/avif", "image/webp"] },
      }),
};

export default nextConfig;
