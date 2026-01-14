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
  webpack: (config) => {
    // Exclude src/pages directory from webpack compilation (it's for React Router, not Next.js)
    config.module.rules.push({
      test: /src\/pages\/.*\.(tsx|ts|jsx|js)$/,
      use: 'ignore-loader',
    });
    return config;
  },
}

module.exports = nextConfig

