/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://stopwatch.lol',
  generateRobotsTxt: false,          // Don't regenerate - we have app/robots.js
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  generateIndexSitemap: true,
  outDir: './public',
  exclude: [
    '/robots.txt',
    '/sitemap.xml',
    '/sitemap-0.xml',
    '/manifest.json',
    '/site.webmanifest',
    '/*.xml',
    '/*.txt',
    '/*.json',
  ],
}
