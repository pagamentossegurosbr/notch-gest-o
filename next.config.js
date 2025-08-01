/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { 
    unoptimized: true,
    loader: 'default',
    disableStaticImages: true
  },
  experimental: {
    esmExternals: false
  }
};

module.exports = nextConfig;
