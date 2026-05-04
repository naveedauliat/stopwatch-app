import Link from "next/link";
import { ShareBar, NewsletterForm } from "./BlogInteractive";

export const metadata = {
  title: "Blog - Timing Tips, Productivity & Sports Performance",
  description:
    "Expert insights on stopwatch use, productivity tips, sports timing techniques, and the science behind precise timekeeping.",
  alternates: {
    canonical: "https://stopwatch.lol/blog",
  },
  openGraph: {
    title: "Stopwatch.lol Blog - Timing Tips & Productivity",
    description:
      "Expert insights on timing, productivity tips, sports performance, and the science behind precise timekeeping.",
    type: "website",
    url: "https://stopwatch.lol/blog",
    siteName: "Stopwatch.lol",
    images: [{ url: "https://stopwatch.lol/og_image.png", width: 1200, height: 630, alt: "Stopwatch.lol Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stopwatch.lol Blog - Timing Tips & Productivity",
    description:
      "Expert insights on timing, productivity, and sports performance.",
    images: ["https://stopwatch.lol/og_image.png"],
  },
};

const blogPosts = [
  {
    title: "Rock Paper Scissors Online: How to Play, Win, and Where to Play Free in 2026",
    description:
      "Play Rock Paper Scissors online free against the computer — the complete 2026 guide to rules, win probability, proven strategy, popular variants, and the best free no-signup sites.",
    slug: "rock-paper-scissors-online",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=640&auto=format&fit=crop&q=80",
    readTime: "11 min read",
    tags: ["Games", "RPS", "Online"],
    date: "May 4, 2026",
  },
  {
    title: "How to Watch the FIFA World Cup: Online, TV & Free Streaming Guide",
    description:
      "Every legitimate way to watch the FIFA World Cup — online, on TV, and for free. Covers the 2026 World Cup, the Club World Cup, USA broadcasters, DAZN, FIFA+, Netflix, and country-by-country options.",
    slug: "how-to-watch-fifa-world-cup-guide",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=640&auto=format&fit=crop&q=80",
    readTime: "14 min read",
    tags: ["FIFA", "World Cup 2026", "Streaming"],
    date: "April 29, 2026",
  },
  {
    title: "FIFA World Cup 2026 Fixtures & Schedule: Complete Match Calendar",
    description:
      "Your complete guide to the FIFA World Cup 2026 schedule across the USA, Canada, and Mexico — every group, knockout round, host city, and key date.",
    slug: "fifa-world-cup-2026-fixtures-schedule",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=640&auto=format&fit=crop&q=80",
    readTime: "12 min read",
    tags: ["Football", "FIFA", "World Cup 2026"],
    date: "April 28, 2026",
  },
  {
    title: "FIFA World Cup 2026 Tickets & Prices: Complete Buying Guide",
    description:
      "Everything you need to know about FIFA World Cup 2026 tickets — official prices, ticket categories, hospitality packages, application portal, and how to avoid scams.",
    slug: "fifa-world-cup-2026-tickets-prices-guide",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=640&auto=format&fit=crop&q=80",
    readTime: "11 min read",
    tags: ["FIFA", "World Cup 2026", "Tickets"],
    date: "April 27, 2026",
  },
  {
    title: "FIFA World Cup 2026 Watch Channels: Region-by-Region Broadcasting Guide",
    description:
      "Where to watch every FIFA World Cup 2026 match — official broadcasters in the USA, UK, Europe, Asia, Africa, Latin America, the Middle East, and Australia.",
    slug: "fifa-world-cup-2026-watch-channels-by-region",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=640&auto=format&fit=crop&q=80",
    readTime: "13 min read",
    tags: ["FIFA", "World Cup 2026", "Broadcasting"],
    date: "April 26, 2026",
  },
  {
    title: "Watch FIFA World Cup 2026 Online: Free Live Streaming Worldwide",
    description:
      "How to watch FIFA World Cup 2026 online for free — legal streaming options country by country, free trials, public broadcaster apps, and what to know about VPNs.",
    slug: "watch-fifa-world-cup-online-free-streaming",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=640&auto=format&fit=crop&q=80",
    readTime: "12 min read",
    tags: ["FIFA", "World Cup 2026", "Streaming"],
    date: "April 25, 2026",
  },
  {
    title: "FIFA World Cup 2026 Fan Travel Guide: Host Cities, Visas & Logistics",
    description:
      "Complete travel guide for FIFA World Cup 2026 — visa rules, flight planning, host city profiles, fan zones, accommodation tips, and getting around USA, Canada, and Mexico.",
    slug: "fifa-world-cup-2026-fan-travel-guide",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=640&auto=format&fit=crop&q=80",
    readTime: "13 min read",
    tags: ["Travel", "FIFA", "World Cup 2026"],
    date: "April 24, 2026",
  },
  {
    title: "Premier League Fixtures November, 2025: Complete Match Preview",
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
    title: "FIFA International Break 2024: Complete Fixtures Guide",
    description:
      "Your complete guide to the upcoming FIFA International break featuring World Cup qualifiers, UEFA Nations League matches, and key national team fixtures.",
    slug: "fifa-international-break",
    image: "/images/fifa-international-break.svg",
    readTime: "10 min read",
    tags: ["Football", "International", "FIFA"],
    date: "November 8, 2024",
  },
  {
    title: "Lions vs Commanders: Game Analysis",
    description:
      "An in-depth analysis of the Lions vs Commanders game, highlighting key plays and strategies.",
    slug: "lionsvscommanders",
    image: "/images/lions-vs-commanders.jpg",
    readTime: "5 min read",
    tags: ["NFL", "Sports", "Analysis"],
    date: "November 10, 2025",
  },
  {
    title: "The Evolution of Stopwatches",
    description:
      "A comprehensive history of stopwatches, from mechanical roots to modern digital timing.",
    slug: "stopwatch-evolution",
    image: "/images/evolution.svg",
    readTime: "8 min read",
    tags: ["History", "Technology", "Stopwatch"],
    date: "November 7, 2025",
  },
  {
    title: "Top Productivity Tips Using a Stopwatch",
    description:
      "Concrete methods to use timing for better focus, habit formation and measurable progress.",
    slug: "productivity-tips",
    image: "/images/productivity.svg",
    readTime: "6 min read",
    tags: ["Productivity", "Tips", "Focus"],
    date: "November 6, 2025",
  },
  {
    title: "Sports Timing: The Role of Stopwatches",
    description:
      "Detailed practices coaches and athletes use to extract performance gains via timing.",
    slug: "sports-timing",
    image: "/images/sports-timing.svg",
    readTime: "7 min read",
    tags: ["Sports", "Performance", "Coaching"],
    date: "November 5, 2025",
  },
  {
    title: "The Impact of Stopwatches on Human Life",
    description:
      "A deep look at how precise timing tools shape sports, work, learning, health, and everyday habits.",
    slug: "stopwatch-human-life",
    image: "/images/human-life.svg",
    readTime: "10 min read",
    tags: ["Lifestyle", "Health", "Psychology"],
    date: "November 4, 2025",
  },
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://stopwatch.lol/blog/#blog",
    name: "Stopwatch.lol Blog",
    description:
      "Expert insights on timing, productivity tips, sports performance, and the science behind precise timekeeping.",
    url: "https://stopwatch.lol/blog",
    publisher: {
      "@type": "Organization",
      name: "Stopwatch.lol",
      url: "https://stopwatch.lol",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://stopwatch.lol/blog/${post.slug}`,
      image: `https://stopwatch.lol${post.image}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Organization",
        name: "Stopwatch.lol Team",
      },
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
              Stopwatch Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert insights on timing, productivity tips, sports performance,
              and the science behind precise timekeeping.
            </p>
            <ShareBar url="https://stopwatch.lol/blog" />
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
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
                    <span className="text-white/60 text-sm">
                      {post.readTime}
                    </span>
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
                    href={`/blog/${post.slug}`}
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

          <NewsletterForm />

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
