/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuration pour Netlify Hybrid Compute
  experimental: {
    testProxy: true,
  },
}

export default nextConfig
