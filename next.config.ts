import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
console.log(isProd)
// 👇 replace 'myapp-static' with your actual repo name
const repoName = 'darktweb2'

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
  basePath: isProd ? `/${repoName}` : '', // <-- ensures GitHub Pages paths work
  assetPrefix: isProd ? `/${repoName}/` : '', // <-- fixes static assets path
}

export default nextConfig
