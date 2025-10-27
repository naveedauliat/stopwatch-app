export const metadata = {
  title: "Stopwatch Blog - Time Management & Productivity Tips",
  description: "Explore articles about time management, productivity techniques, and the science of precise timing. Learn how to make the most of your time.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Evolution of Digital Stopwatches: From Manual to AI-Enhanced",
      excerpt: "Explore how stopwatches have evolved from simple mechanical devices to sophisticated AI-powered timing tools.",
      date: "October 25, 2023",
      author: "Time Expert",
      slug: "stopwatch-evolution"
    },
    {
      title: "10 Ways to Use a Stopwatch for Better Productivity",
      excerpt: "Discover how a simple stopwatch can revolutionize your work and study habits.",
      date: "October 20, 2023",
      author: "Productivity Coach",
      slug: "productivity-tips"
    },
    {
      title: "The Science Behind Precise Timing in Sports",
      excerpt: "Understanding how accurate stopwatches impact athletic performance and training.",
      date: "October 15, 2023",
      author: "Sports Scientist",
      slug: "sports-timing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Stopwatch Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
              <p className="text-white/80 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <a href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-300 hover:text-blue-200">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}