/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://stopwatch.lol', // your main domain
  generateRobotsTxt: true,           // (optional) also generates robots.txt
  sitemapSize: 7000,                 // split if you ever exceed 7000 pages
  changefreq: 'daily',               // how often pages change
  priority: 0.7,                     // default priority
  generateIndexSitemap: true,
  output: 'standalone',
  outDir: './public',

}
