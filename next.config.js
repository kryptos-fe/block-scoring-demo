/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'blocknomy.net'],
  },
  experimental: {
    scrollRestoration: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
