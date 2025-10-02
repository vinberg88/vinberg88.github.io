/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig