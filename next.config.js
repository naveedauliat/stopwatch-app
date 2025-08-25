/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Uncomment the following lines if you want to export as static files
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig