import Link from "next/link";

export const metadata = {
  title: "News Archive - Sports & Current Events",
  description:
    "Dated news coverage and event previews from Stopwatch.lol — Premier League fixtures, NFL analysis, FIFA international breaks, and major current events. Time-stamped archive.",
  alternates: {
    canonical: "https://stopwatch.lol/news",
  },
  openGraph: {
    title: "News Archive - Stopwatch.lol",
    description:
      "Dated news coverage and event previews: sports fixtures, match analysis, and major current events.",
    type: "website",
    url: "https://stopwatch.lol/news",
    siteName: "Stopwatch.lol",
    images: [
      { url: "https://stopwatch.lol/og_image.png", width: 1200, height: 630, alt: "Stopwatch.lol News Archive" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News Archive - Stopwatch.lol",
    description: "Dated news coverage and event previews from Stopwatch.lol.",
    images: ["https://stopwatch.lol/og_image.png"],
  },
};

const newsPosts = [
  {
    title: "Premier League Fixtures November 2025: Complete Match Preview",
    description:
      "Expert analysis and predictions for all Premier League fixtures on November 23, 2025. Liverpool vs Man City headline fixture, team news, and viewing information.",
    slug: "premier-league",
    image: "/images/premier-league.webp",
    readTime: "15 min read",
    tags: ["Football", "Premier League", "Sports"],
    date: "November 10, 2025",
  },
  {
    title: "41 Days of Deadlock: The Longest U.S. Government Shutdown",
    description:
      "A bipartisan Senate coalition cracked the political stalemate, but not before the crisis inflicted $14 billion in permanent economic damage.",
    slug: "government-shutdown",
    image: "/images/senate-vote.jpg",
    readTime: "12 min read",
    tags: ["Politics", "Economy", "US Government"],
    date: "November 10, 2025",
  },
  {
    title: "Lions vs Commanders: Game Analysis",
    description:
      "An in-depth analysis of the Lions vs Commanders game, highlighting key plays and strategies.",
    slug: "lionsvscommanders",
    image: "/images/lions-vs-commanders.jpg",
    readTime: "5 min read",
    tags: ["NFL", "Sports", "Analysis"],
    date: "November 10, 2024",
  },
  {
    title: "FIFA International Break 2024: Complete Fixtures Guide",
    description:
      "A guide to the FIFA International break featuring World Cup qualifiers, UEFA Nations League matches, and key national team fixtures.",
    slug: "fifa-international-break",
    image: "/images/fifa-international-break.svg",
    readTime: "10 min read",
    tags: ["Football", "International", "FIFA"],
    date: "November 8, 2024",
  },
];

export default function NewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://stopwatch.lol/news/#collection",
    name: "Stopwatch.lol News Archive",
    description:
      "Dated news coverage and event previews: sports fixtures, match analysis, and major current events.",
    url: "https://stopwatch.lol/news",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    publisher: { "@id": "https://stopwatch.lol/#organization" },
    hasPart: newsPosts.map((post) => ({
      "@type": "NewsArticle",
      headline: post.title,
      description: post.description,
      url: `https://stopwatch.lol/news/${post.slug}`,
      image: `https://stopwatch.lol${post.image}`,
      datePublished: new Date(post.date).toISOString(),
      author: { "@type": "Organization", name: "Stopwatch.lol" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              News Archive
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Dated coverage of sports fixtures, match analysis, and major
              current events. These are time-stamped archive pieces — see the{" "}
              <Link href="/blog" className="underline hover:text-white">
                Blog
              </Link>{" "}
              for evergreen timing and productivity guides.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-white/80 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Stopwatch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
