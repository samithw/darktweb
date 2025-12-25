import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

// 👇 uncomment for darktweb2 or origin - comment for prod
const repoName = 'darktweb'

const nextConfig: NextConfig = {
  output: 'export', // <-- enables static export
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // <-- required for static export (no image optimization server)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // 👇 uncomment for darktweb2 or origin - comment for prod
  basePath: isProd ? `/${repoName}` : '', // <-- ensures GitHub Pages paths work
  assetPrefix: isProd ? `/${repoName}/` : '', // <-- fixes static assets path 2
}

export default nextConfig
