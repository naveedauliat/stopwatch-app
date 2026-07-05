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
          },
          {
            // Content-Security-Policy. 'unsafe-inline' is required for the
            // inline JSON-LD and Next.js bootstrap scripts (the site is
            // statically generated, so nonces aren't practical); the allow-lists
            // below scope external scripts/connections to the analytics vendors
            // actually in use (GTM, GA, Ahrefs, Vercel Speed Insights).
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.ahrefs.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.ahrefs.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-src 'self' https://www.googletagmanager.com",
              "manifest-src 'self'",
              "upgrade-insecure-requests",
            ].join('; ')
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
        source: '/stopwatch',
        destination: '/',
        permanent: true,
      },
      // Relocated games: legacy top-level URLs -> /games/*. These ranked on
      // page 1 (GSC: /rock-paper-scissors pos ~5, /tic-tac-toe pos ~5.7) but
      // began 404ing after the move under /games/, dropping the traffic.
      {
        source: '/rock-paper-scissors',
        destination: '/games/rock-paper-scissors',
        permanent: true,
      },
      {
        source: '/tic-tac-toe',
        destination: '/games/tic-tac-toe',
        permanent: true,
      },
      {
        source: '/random-number-guesser',
        destination: '/games/random-number-guesser',
        permanent: true,
      },
      // Relocated dated news posts: /blog/* -> /news/*
      {
        source: '/blog/premier-league',
        destination: '/news/premier-league',
        permanent: true,
      },
      {
        source: '/blog/government-shutdown',
        destination: '/news/government-shutdown',
        permanent: true,
      },
      {
        source: '/blog/lionsvscommanders',
        destination: '/news/lionsvscommanders',
        permanent: true,
      },
      {
        source: '/blog/fifa-international-break',
        destination: '/news/fifa-international-break',
        permanent: true,
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig