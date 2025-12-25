/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // This is not needed for server-side rewrites
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
