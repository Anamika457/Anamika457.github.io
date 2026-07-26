/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

module.exports = nextConfig;