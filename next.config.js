/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // This is not needed for server-side rewrites
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/mentorships',
        destination: '/',
      },
      {
        source: '/sierra-chart',
        destination: '/',
      },
      {
        source: '/atas',
        destination: '/',
      },
      {
        source: '/mt5',
        destination: '/',
      },
      {
        source: '/trading-view',
        destination: '/',
      },
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
