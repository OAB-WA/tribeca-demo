/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Performance Optimization: Enable modern image formats (AVIF/WebP) for better compression
    formats: ['image/avif', 'image/webp'],
    // Performance Optimization: Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Performance Optimization: Set minimum cache TTL for better caching
    minimumCacheTTL: 60,
    unoptimized: false,
    domains: [],
  },
  // Performance Optimization: Enable compression
  compress: true,
  // Performance Optimization: Enable static page generation
  output: 'standalone',
  // Performance Optimization: Reduce JavaScript bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance Optimization: Disable source maps in production for smaller builds
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
