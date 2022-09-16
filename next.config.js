/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['*', '632466.sgp1.digitaloceanspaces.com'],
  },
  experimental: {
    scrollRestoration: false,
  },
}

module.exports = nextConfig
