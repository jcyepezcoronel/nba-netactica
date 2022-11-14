/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  env: {
    NBA_API_KEY: process.env.NBA_API_KEY
  }
}

module.exports = nextConfig
