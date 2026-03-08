export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/temp/',
          '/private/'
        ],
      },
    ],
    sitemap: 'https://stopwatch.lol/sitemap.xml',
    host: 'https://stopwatch.lol',
  };
}