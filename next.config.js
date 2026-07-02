/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['stopwatch.lol'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      // Canonicalize www -> apex. NOTE: also add "www.stopwatch.lol" as a
      // redirecting domain in the Vercel dashboard — until the www host is
      // attached to the project, DNS won't resolve and this rule can't fire.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.stopwatch.lol' }],
        destination: 'https://stopwatch.lol/:path*',
        permanent: true,
      },
      {
        source: '/timer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/stopwatch',
        destination: '/',
        permanent: true,
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig