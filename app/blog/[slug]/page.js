import { notFound } from 'next/navigation';

const blogPosts = {
  'stopwatch-evolution': {
    title: "The Evolution of Digital Stopwatches",
    date: "October 25, 2023",
    author: "Time Expert",
    content: `
      <h2>The Journey of Timekeeping Innovation</h2>
      <p>The evolution of stopwatches represents a fascinating journey through technological advancement. From the earliest mechanical stopwatches to today's AI-enhanced digital solutions, we've witnessed remarkable progress in precision timing.</p>

      <h3>The Mechanical Era</h3>
      <p>In the early days, stopwatches relied on intricate mechanical movements. These devices, while revolutionary for their time, were subject to wear and tear and required regular maintenance to maintain accuracy.</p>

      <h3>Digital Revolution</h3>
      <p>The introduction of digital stopwatches in the 1970s marked a significant leap forward. These electronic devices offered improved accuracy and additional features like lap timing and split-second precision.</p>

      <h3>Smart Integration</h3>
      <p>Modern stopwatches have evolved beyond simple timing devices. With AI integration, they can now:</p>
      <ul>
        <li>Analyze patterns in timing data</li>
        <li>Provide intelligent feedback</li>
        <li>Adapt to user behavior</li>
        <li>Sync across multiple devices</li>
      </ul>
    `
  },
  'productivity-tips': {
    title: "10 Ways to Use a Stopwatch for Productivity",
    date: "October 20, 2023",
    author: "Productivity Coach",
    content: `
      <h2>Maximizing Efficiency with Timed Work Sessions</h2>
      <p>A stopwatch can be your secret weapon for enhanced productivity. Here are ten proven techniques to leverage precise timing for better results.</p>

      <h3>1. The Pomodoro Technique</h3>
      <p>Use your stopwatch to implement 25-minute focused work sessions, followed by short breaks. This method helps maintain high concentration levels throughout the day.</p>

      <h3>2. Time Boxing</h3>
      <p>Allocate specific time blocks for tasks and use your stopwatch to stay within these boundaries. This prevents perfectionism and encourages efficient work habits.</p>

      <h3>3. Progressive Training</h3>
      <p>Gradually increase your focused work periods using precise timing. Start with 15 minutes and work your way up to longer sessions.</p>

      <h3>Additional Tips</h3>
      <ul>
        <li>Track and analyze your most productive periods</li>
        <li>Use lap times for complex project management</li>
        <li>Set realistic time goals for tasks</li>
        <li>Maintain consistent break schedules</li>
      </ul>
    `
  },
  'sports-timing': {
    title: "The Science Behind Precise Timing in Sports",
    date: "October 15, 2023",
    author: "Sports Scientist",
    content: `
      <h2>Precision Timing in Athletic Performance</h2>
      <p>In the world of competitive sports, milliseconds can make the difference between victory and defeat. Understanding the science behind precise timing is crucial for athletes and coaches alike.</p>

      <h3>Reaction Time Analysis</h3>
      <p>Modern stopwatches help athletes measure and improve their reaction times through detailed analysis and consistent training data.</p>

      <h3>Training Optimization</h3>
      <p>Precise timing enables coaches to:</p>
      <ul>
        <li>Track progress accurately</li>
        <li>Optimize training intervals</li>
        <li>Monitor recovery periods</li>
        <li>Analyze performance trends</li>
      </ul>

      <h3>Competition Preparation</h3>
      <p>Athletes use advanced timing techniques to prepare for competition conditions and simulate race scenarios with exact precision.</p>
    `
  }
};

export function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, '') + '...',
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 p-8">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-white/60 mb-8">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <a href="/blog" className="mt-8 inline-block text-blue-300 hover:text-blue-200">
            ← Back to Blog
          </a>
        </article>
      </div>
    </div>
  );
}