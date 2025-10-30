// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Static Export
  // This tells Next.js to output static HTML/CSS/JS to the 'out' folder, 
  // which is required for platforms like GitHub Pages.
  output: 'export',

  // 2. Configure the Base Path
  // This prefixes all internal Next.js links and routing with the subdirectory path.
  // The path must match your repository name: `/darktweb2`.
  basePath: '/darktweb2',

  // 3. Configure the Asset Prefix
  // This prefixes the path for all static assets (like JS/CSS bundles and /public files).
  // It should generally match the basePath and often includes a trailing slash.
  assetPrefix: '/darktweb2/',

  // 4. Handle Next.js Image Optimization (Important for Static Export)
  // Since GitHub Pages cannot run the Next.js image optimization server, you 
  // must typically disable it.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
