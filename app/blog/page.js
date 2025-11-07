"use client";

import Link from "next/link";

const blogPosts = [
  {
    title: "The Evolution of Stopwatches",
    description: "A comprehensive history of stopwatches, from mechanical roots to AI-enhanced timing.",
    slug: "stopwatch-evolution",
    image: "/images/evolution.svg",
    readTime: "8 min read",
    tags: ["History", "Technology", "AI"],
    date: "November 7, 2024"
  },
  {
    title: "Top Productivity Tips Using a Stopwatch",
    description: "Concrete methods to use timing for better focus, habit formation and measurable progress.",
    slug: "productivity-tips",
    image: "/images/productivity.svg",
    readTime: "6 min read",
    tags: ["Productivity", "Tips", "Focus"],
    date: "November 6, 2024"
  },
  {
    title: "Sports Timing: The Role of Stopwatches",
    description: "Detailed practices coaches and athletes use to extract performance gains via timing.",
    slug: "sports-timing",
    image: "/images/sports-timing.svg",
    readTime: "7 min read",
    tags: ["Sports", "Performance", "Coaching"],
    date: "November 5, 2024"
  },
  {
    title: "The Impact of Stopwatches on Human Life",
    description: "A deep look at how precise timing tools shape sports, work, learning, health, and everyday habits.",
    slug: "stopwatch-human-life",
    image: "/images/human-life.svg",
    readTime: "10 min read",
    tags: ["Lifestyle", "Health", "Psychology"],
    date: "November 4, 2024"
  }
];

export default function BlogPage() {
  const handleShare = (platform = 'native') => {
    const url = 'https://stopwatch.lol/blog';
    const text = 'Check out these amazing timing and productivity tips!';
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else {
      if (navigator.share) {
        navigator.share({
          title: 'Stopwatch.lol Blog - Timing & Productivity Tips',
          text: 'Expert insights on timing, productivity, and sports performance',
          url: url
        });
      } else {
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    alert('Thanks for subscribing! (This is a demo)');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://stopwatch.lol/blog/#blog",
    name: "Stopwatch.lol Blog",
    description: "Expert insights on timing, productivity tips, sports performance, and the science behind precise timekeeping.",
    url: "https://stopwatch.lol/blog",
    publisher: {
      "@type": "Organization",
      name: "Stopwatch.lol",
      url: "https://stopwatch.lol"
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://stopwatch.lol/blog/${post.slug}`,
      image: `https://stopwatch.lol${post.image}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Organization",
        name: "Stopwatch.lol Team"
      }
    }))
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
            
            {/* Social Share */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-white/70">Share this blog:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                
                <button
                  onClick={() => handleShare('linkedin')}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                
                <button
                  onClick={() => handleShare('native')}
                  className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                  aria-label="Share link"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Timing Tips
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest productivity tips, sports timing insights, and stopwatch techniques 
              delivered to your inbox monthly.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/60 text-sm mt-3">
              No spam, unsubscribe anytime. Follow us on social media for daily tips!
            </p>
          </section>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Stopwatch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}