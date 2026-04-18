const baseUrl = 'https://stopwatch.lol';

const today = () => new Date().toISOString().split('T')[0];

export default function sitemap() {
  const now = today();
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/countdown`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/full-screen-stopwatch`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/stopwatch-evolution`,
      lastModified: '2025-11-07',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/stopwatch-human-life`,
      lastModified: '2025-11-07',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/productivity-tips`,
      lastModified: '2025-11-06',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sports-timing`,
      lastModified: '2025-11-05',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/premier-league`,
      lastModified: '2025-11-10',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/government-shutdown`,
      lastModified: '2025-11-10',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fifa-international-break`,
      lastModified: '2024-11-08',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/lionsvscommanders`,
      lastModified: '2024-11-10',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/games/tic-tac-toe`,
      lastModified: '2025-11-07',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/rock-paper-scissors`,
      lastModified: '2025-11-07',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/random-number-guesser`,
      lastModified: '2025-11-07',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2024-11-08',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2024-11-08',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2024-11-08',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2024-11-08',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
