/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['coad.ai'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig

