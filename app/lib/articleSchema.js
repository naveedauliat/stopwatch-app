// Shared builder for Article / BlogPosting / NewsArticle JSON-LD.
// Keeps per-post structured data consistent and DRY across the blog routes.

const BASE = "https://stopwatch.lol";

export function buildArticleJsonLd({
  type = "BlogPosting",
  path,                       // e.g. "/blog/productivity-tips"
  headline,
  description,
  datePublished,             // ISO 8601 or a Date-parseable string
  dateModified,
  author = "Stopwatch.lol Editorial Team",
  image = `${BASE}/og_image.png`,
}) {
  const url = `${BASE}${path}`;
  const published = new Date(datePublished).toISOString();
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline,
    description,
    image,
    datePublished: published,
    dateModified: dateModified ? new Date(dateModified).toISOString() : published,
    author: { "@type": "Organization", name: author, url: BASE },
    publisher: { "@id": `${BASE}/#organization` },
    url,
    inLanguage: "en-US",
  };
}

// Convenience component: <ArticleJsonLd ...props /> renders the script tag.
export function ArticleJsonLd(props) {
  const data = buildArticleJsonLd(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
