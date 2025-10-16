<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - Stopwatch.lol</title>
        <style>
          body { font-family: -apple-system, system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
          h1 { color: #1a1a1a; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { padding: 0.5rem; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f5f5f5; }
          tr:hover { background: #f9f9f9; }
          .priority-high { color: #2563eb; }
          .priority-med { color: #059669; }
          .priority-low { color: #6b7280; }
        </style>
      </head>
      <body>
        <h1>Sitemap - Stopwatch.lol</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td>
                <xsl:attribute name="class">
                  <xsl:choose>
                    <xsl:when test="sitemap:priority &gt;= 0.8">priority-high</xsl:when>
                    <xsl:when test="sitemap:priority &gt;= 0.5">priority-med</xsl:when>
                    <xsl:otherwise>priority-low</xsl:otherwise>
                  </xsl:choose>
                </xsl:attribute>
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>