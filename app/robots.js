export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/temp/',
          '/*.json$',
          '/private/'
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      }
    ],
    sitemap: 'https://stopwatch.lol/sitemap.xml',
    host: 'https://stopwatch.lol',
  };
}