/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*', '632466.sgp1.digitaloceanspaces.com'],
  },
  experimental: {
    scrollRestoration: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
