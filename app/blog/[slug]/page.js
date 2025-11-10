import { notFound } from 'next/navigation';

const blogPosts = {
  'premier-league': {
    title: "Premier League Fixtures November 23, 2025: Complete Match Preview & Expert Predictions",
    date: "November 10, 2025",
    author: "Football Insights Team",
    excerpt: "Expert analysis and predictions for all Premier League fixtures on November 23, 2025. Liverpool vs Manchester City headline a crucial matchday.",
    content: `
      <h2>⚽ Premier League Matchday Overview</h2>
      <p>November 23, 2025, presents one of the most exciting Premier League matchdays of the season, with six compelling fixtures scheduled across the day...</p>
      
      <h3>Featured Match: Liverpool vs Manchester City</h3>
      <p>The headline fixture sees Liverpool host Manchester City at Anfield in what could be a pivotal encounter for the championship race. Both teams enter in exceptional form...</p>
      
      <h3>Complete Fixtures Breakdown</h3>
      <ul>
        <li><strong>12:30 PM:</strong> Manchester United vs Chelsea - Old Trafford</li>
        <li><strong>3:00 PM:</strong> Arsenal vs Nottingham Forest - Emirates Stadium</li>
        <li><strong>3:00 PM:</strong> Everton vs Brentford - Goodison Park</li>
        <li><strong>3:00 PM:</strong> Fulham vs Wolverhampton - Craven Cottage</li>
        <li><strong>3:00 PM:</strong> Leicester City vs Brighton - King Power Stadium</li>
        <li><strong>5:30 PM:</strong> Liverpool vs Manchester City - Anfield</li>
      </ul>
      
      <h3>Title Race Implications</h3>
      <p>This matchday could significantly impact the title race dynamics. With Liverpool and Manchester City facing off directly, Arsenal will be watching closely...</p>
      
      <h3>How to Watch</h3>
      <p>UK viewers can watch on Sky Sports Premier League and Sky Sports Main Event. International viewers should check local listings...</p>
      
      <p>Track all match times perfectly with our <a href="/" class="text-blue-300 hover:text-blue-200">free online stopwatch</a>. Perfect for following multiple fixtures!</p>
      
      <p>For more football content, check out our <a href="/blog/fifa-international-break" class="text-blue-300 hover:text-blue-200">FIFA International Break guide</a>.</p>
    `
  },
  'government-shutdown': {
    title: "41 Days of Deadlock: The Full Story of the Longest U.S. Government Shutdown",
    date: "November 10, 2025",
    author: "AI News Editor",
    excerpt: "A bipartisan Senate coalition, spearheaded by eight centrist Democrats, cracked the political stalemate, but not before the crisis inflicted permanent economic damage.",
    content: `
      <h2>The Political Crucible: ACA Subsidies vs. Government Funding</h2>
      <p>The government shutdown 2025, which began on October 1st after Congress failed to pass funding bills for the new fiscal year, became a titanic battle over health care...</p>
      
      <h3>The Core Dispute: The Subsidy Cliff</h3>
      <p>At the heart of the deadlock was the looming "subsidy cliff." The enhanced ACA subsidies, initially authorized during the COVID-19 pandemic, significantly lowered health insurance premiums for millions of Americans...</p>
      
      <h2>The Compromise: How Eight Democrats Broke the Gridlock</h2>
      <p>The resolution came not from leadership, but from the center. After 14 previous Senate votes failed to reach the necessary 60-vote threshold, a group of moderate and centrist senators hammered out a critical compromise...</p>
      
      <h3>The 60-40 Breakthrough Vote</h3>
      <p>On Sunday night, the Senate voted 60-40 to invoke cloture on a funding measure. This required at least eight members of the Democratic caucus to defect from their leadership's position...</p>
      
      <h2>The Staggering Economic and Human Cost</h2>
      <p>The prolonged deadlock severely hindered economic growth, inflicted financial pain on hundreds of thousands of families, and undermined key government functions.</p>
      
      <h3>The Macroeconomic Blow: $7 Billion to $16 Billion Weekly</h3>
      <p>According to the Congressional Budget Office (CBO), the economic damage from the shutdown is monumental. The CBO estimates that between $7 billion and $14 billion of economic output will be permanently lost...</p>
      
      <p>For more insights on time management during crisis situations, check out our <a href="/blog/productivity-tips" class="text-blue-300 hover:text-blue-200">productivity tips guide</a>.</p>
    `
  },
  'lionsvscommanders': {
    title: "Lions vs Commanders",
    date: "November 10, 2024",
    author: "stopwatch.lol",
    content: `
      <h2>Your Content Here</h2>
      <p>Your blog content in HTML format...</p>
    `
  },


  'fifa-international-break': {
    title: "FIFA International Break 2024: Complete Guide to Upcoming Fixtures & Qualifiers",
    date: "November 10, 2024",
    author: "Football Insights Team",
    excerpt: "Everything you need to know about the next FIFA International break: World Cup qualifiers, UEFA Nations League matches, key fixtures, and how to watch.",
    content: `
      <h2>Understanding the FIFA International Break</h2>
      <p>The FIFA International break is a designated period when domestic league football pauses to allow national teams to compete in official FIFA-sanctioned matches. These breaks occur throughout the football calendar and are crucial for international competitions.</p>

      <h3>Why International Breaks Matter</h3>
      <ul>
        <li><strong>World Cup Qualification:</strong> Teams compete for spots in the 2026 FIFA World Cup</li>
        <li><strong>Continental Competitions:</strong> UEFA Nations League, Copa América qualifiers</li>
        <li><strong>FIFA Rankings:</strong> Results impact official world rankings</li>
        <li><strong>National Pride:</strong> Representing your country on the international stage</li>
      </ul>

      <h2>Must-Watch Fixtures This International Break</h2>

      <h3>UEFA Nations League Showdowns</h3>
      <p><strong>France vs Italy</strong> - A classic European rivalry renewed. With stars like Kylian Mbappé for France and Federico Chiesa for Italy, this match promises tactical brilliance and world-class talent.</p>

      <p><strong>Spain vs Germany</strong> - Two footballing powerhouses collide. Spain's possession-based style featuring Pedri and Gavi will test Germany's high-pressing system led by Jamal Musiala and Kai Havertz.</p>

      <p><strong>England vs Brazil</strong> - A prestigious friendly between two storied nations. England's young stars including Jude Bellingham and Phil Foden face Brazil's samba magic with Vinícius Jr. and Rodrygo.</p>

      <h3>World Cup 2026 Qualifiers</h3>
      
      <h4>CONMEBOL Qualifiers</h4>
      <p><strong>Argentina vs Uruguay</strong> - Lionel Messi's Argentina seeks to maintain their qualifying dominance against a resilient Uruguayan side featuring Darwin Núñez and Federico Valverde.</p>

      <p><strong>Brazil vs Colombia</strong> - Brazil looks to solidify their qualification position against Luis Díaz's Colombia in what promises to be a high-octane South American derby.</p>

      <h4>AFC Asian Qualifiers</h4>
      <ul>
        <li><strong>Japan vs Australia:</strong> Two Asian giants battle for automatic qualification spots</li>
        <li><strong>South Korea vs Saudi Arabia:</strong> Son Heung-min leads Korea's charge</li>
        <li><strong>Iran vs Iraq:</strong> Middle Eastern rivalry in crucial qualifier</li>
      </ul>

      <h2>Players to Watch</h2>

      <h3>Kylian Mbappé (France)</h3>
      <p>The Real Madrid superstar continues to shine for Les Bleus. His pace, finishing, and big-game mentality make him the most dangerous attacker in international football. 42 international goals in 73 appearances showcase his incredible impact.</p>

      <h3>Lionel Messi (Argentina)</h3>
      <p>The World Cup champion continues to defy age with magical performances. Leading Argentina's qualifying campaign, Messi remains the heartbeat of the Albiceleste attack with over 100 international goals.</p>

      <h3>Jude Bellingham (England)</h3>
      <p>Real Madrid's midfield maestro has become England's most influential player. His maturity, vision, and goal-scoring ability make him a complete midfielder dominating at just 21 years old.</p>

      <h3>Vinícius Jr. (Brazil)</h3>
      <p>Brazil's electric winger brings Brazilian flair to every match. His dribbling wizardry, speed, and improving end product make him one of the most exciting talents in world football.</p>

      <h2>How to Watch International Break Fixtures</h2>

      <h3>Broadcasting Options</h3>
      <p><strong>Traditional TV:</strong></p>
      <ul>
        <li>ESPN/ESPN+ - UEFA Nations League, qualifiers</li>
        <li>FOX Sports - Select international matches</li>
        <li>BeIN Sports - South American qualifiers</li>
        <li>CBS Sports - UEFA Nations League coverage</li>
      </ul>

      <p><strong>Streaming Services:</strong></p>
      <ul>
        <li>Paramount+ (UEFA matches)</li>
        <li>FuboTV (comprehensive coverage)</li>
        <li>YouTube TV (multiple channels)</li>
        <li>ESPN+ (exclusive qualifiers)</li>
      </ul>

      <h2>Track Match Times Perfectly</h2>
      <p>With matches spanning multiple time zones, use our free online stopwatch to track kickoff times, half-time intervals, and never miss a moment of international football action! Perfect for planning your viewing schedule across different competitions.</p>

      <h2>Conclusion</h2>
      <p>The upcoming FIFA International break promises thrilling football across continents. From World Cup qualifiers determining 2026 participants to UEFA Nations League battles between Europe's elite, every match carries significance.</p>

      <p>Whether you're supporting your national team or simply enjoying world-class football, this international break delivers drama, passion, and unforgettable moments. Mark your calendars, set your alarms, and prepare for international football at its finest!</p>
    `
  },


  'stopwatch-evolution': {
    title: "The Evolution of Digital Stopwatches",
    date: "October 25, 2023",
    author: "Time Expert",
    content: `
      <h2>The Journey of Timekeeping Innovation</h2>
      <p>The evolution of stopwatches represents a fascinating journey through technological advancement. From the earliest mechanical stopwatches to today's AI-enhanced digital solutions, we've witnessed remarkable progress in precision timing. Learn more about <a href="/blog/productivity-tips" class="text-blue-300 hover:text-blue-200">improving productivity with modern stopwatches</a>.</p>

      <h3>The Mechanical Era</h3>
      <p>In the early days, stopwatches relied on intricate mechanical movements. These devices, while revolutionary for their time, were subject to wear and tear and required regular maintenance to maintain accuracy. Today's digital solutions, as used in <a href="/blog/sports-timing" class="text-blue-300 hover:text-blue-200">competitive sports timing</a>, offer far greater precision.</p>

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
      <p>Modern applications of stopwatch technology extend far beyond basic timing. Learn more about <a href="/blog/stopwatch-human-life" class="text-blue-300 hover:text-blue-200">how stopwatches impact various aspects of human life</a>.</p>
    `
  },
  'productivity-tips': {
    title: "10 Ways to Use a Stopwatch for Productivity",
    date: "October 20, 2023",
    author: "Productivity Coach",
    content: `
      <h2>Maximizing Efficiency with Timed Work Sessions</h2>
      <p>A stopwatch can be your secret weapon for enhanced productivity. Here are ten proven techniques to leverage precise timing for better results. Discover how <a href="/blog/stopwatch-evolution" class="text-blue-300 hover:text-blue-200">modern stopwatch technology</a> makes this easier than ever.</p>

      <h3>1. The Pomodoro Technique</h3>
      <p>Use your stopwatch to implement 25-minute focused work sessions, followed by short breaks. This method helps maintain high concentration levels throughout the day.</p>

      <h3>2. Time Boxing</h3>
      <p>Allocate specific time blocks for tasks and use your stopwatch to stay within these boundaries. This prevents perfectionism and encourages efficient work habits.</p>

      <h3>3. Progressive Training</h3>
      <p>Gradually increase your focused work periods using precise timing. Start with 15 minutes and work your way up to longer sessions.</p>

      <h3>Athletic Applications</h3>
      <p>These productivity principles are also valuable in sports training. Learn more about <a href="/blog/sports-timing" class="text-blue-300 hover:text-blue-200">timing techniques in athletics</a>.</p>

      <h3>Additional Tips</h3>
      <ul>
        <li>Track and analyze your most productive periods</li>
        <li>Use lap times for complex project management</li>
        <li>Set realistic time goals for tasks</li>
        <li>Maintain consistent break schedules</li>
      </ul>
      <p>The influence of precise timing on productivity is just one aspect of stopwatch applications. Explore <a href="/blog/stopwatch-human-life" class="text-blue-300 hover:text-blue-200">the broader impact of stopwatches on human activities</a>.</p>
    `
  },
  'sports-timing': {
    title: "The Science Behind Precise Timing in Sports",
    date: "October 15, 2023",
    author: "Sports Scientist",
    content: `
      <h2>Precision Timing in Athletic Performance</h2>
      <p>In the world of competitive sports, milliseconds can make the difference between victory and defeat. Understanding the science behind precise timing is crucial for athletes and coaches alike. See how <a href="/blog/stopwatch-evolution" class="text-blue-300 hover:text-blue-200">stopwatch technology has evolved</a> to meet these demands.</p>

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

      <h3>Productivity Lessons</h3>
      <p>Many timing techniques used in sports can be applied to improve work efficiency. Check out our guide on <a href="/blog/productivity-tips" class="text-blue-300 hover:text-blue-200">productivity optimization</a>.</p>
    `
  },
  'stopwatch-human-life': {
    title: "The Impact of Stopwatches on Human Life: From Sports to Mindfulness",
    date: "November 7, 2023",
    author: "Time Management Expert",
    content: `
      <h1>The Impact of Stopwatches on Human Life: From Sports to Mindfulness</h1>

      <p class="lead">In our fast-paced world, the humble stopwatch has evolved from a simple timing device to an essential tool that influences various aspects of human life. From professional athletes to meditation practitioners, this precision instrument helps shape how we understand and utilize time.</p>

      <h2>1. Sports and Athletic Performance</h2>
      <p>The relationship between stopwatches and sports is fundamental to human achievement. Athletes rely on precise timing to:</p>
      <ul>
        <li>Track personal bests and improvements</li>
        <li>Measure interval training sessions</li>
        <li>Monitor recovery periods between sets</li>
        <li>Time race segments and splits</li>
      </ul>
      <p>In professional sports, milliseconds can mean the difference between victory and defeat. Swimming coaches use stopwatches to track lap times, while sprint trainers rely on them to perfect starting techniques. The psychological impact of timing in sports cannot be understated – athletes develop an internal clock through repeated exposure to timed intervals.</p>

      <h2>2. Educational Applications</h2>
      <p>In educational settings, stopwatches serve multiple purposes:</p>
      <h3>Study Techniques</h3>
      <ul>
        <li>Pomodoro Technique implementation</li>
        <li>Timed practice tests</li>
        <li>Reading speed measurement</li>
        <li>Attention span monitoring</li>
      </ul>
      <p>Teachers use stopwatches to manage classroom activities effectively, while students learn time management skills that will benefit them throughout their lives. The structured approach to timing helps develop discipline and efficiency in learning.</p>

      <h2>3. Professional and Workplace Efficiency</h2>
      <p>In professional environments, stopwatches contribute to:</p>
      <ul>
        <li>Meeting management</li>
        <li>Project time tracking</li>
        <li>Productivity measurement</li>
        <li>Work-break balance</li>
      </ul>
      <p>Time blocking, a popular productivity technique, relies heavily on precise timing. Professionals use stopwatches to maintain focus during designated work periods and ensure adequate breaks for optimal performance.</p>

      <h2>4. Health and Fitness</h2>
      <p>The fitness industry has embraced stopwatch functionality for:</p>
      <h3>Workout Optimization</h3>
      <ul>
        <li>High-Intensity Interval Training (HIIT)</li>
        <li>Circuit training timing</li>
        <li>Rest period management</li>
        <li>Heart rate recovery monitoring</li>
      </ul>
      <p>Personal trainers and fitness enthusiasts use stopwatches to structure workouts effectively, ensuring maximum benefit from exercise routines while preventing overexertion.</p>

      <h2>5. Mindfulness and Mental Health</h2>
      <p>In the realm of mental wellness, stopwatches play a crucial role in:</p>
      <ul>
        <li>Meditation timing</li>
        <li>Breathing exercises</li>
        <li>Stress management techniques</li>
        <li>Sleep routine development</li>
      </ul>
      <p>The structured approach to timing helps practitioners maintain consistent mindfulness practices and develop healthy mental habits.</p>

      <h2>6. Culinary Arts and Food Preparation</h2>
      <p>In cooking and baking, precise timing is essential for:</p>
      <ul>
        <li>Recipe execution</li>
        <li>Cooking temperature management</li>
        <li>Food safety compliance</li>
        <li>Restaurant service efficiency</li>
      </ul>
      <p>Professional chefs and home cooks alike rely on accurate timing to achieve consistent results and maintain food quality standards.</p>

      <h2>7. Scientific Research and Development</h2>
      <p>In scientific settings, stopwatches are crucial for:</p>
      <ul>
        <li>Experiment timing</li>
        <li>Reaction rate measurement</li>
        <li>Process documentation</li>
        <li>Quality control procedures</li>
      </ul>
      <p>Researchers depend on precise timing to ensure experimental validity and reproducibility of results.</p>

      <h2>8. Performance Arts and Entertainment</h2>
      <p>The entertainment industry uses stopwatches for:</p>
      <ul>
        <li>Performance timing</li>
        <li>Rehearsal management</li>
        <li>Production scheduling</li>
        <li>Broadcasting coordination</li>
      </ul>
      <p>From stage productions to live broadcasts, timing precision ensures smooth execution of complex entertainment events.</p>

      <h2>9. Personal Development and Habit Formation</h2>
      <p>Individual growth often relies on timed activities:</p>
      <ul>
        <li>Goal setting and tracking</li>
        <li>Habit development</li>
        <li>Skill acquisition timing</li>
        <li>Personal challenge management</li>
      </ul>
      <p>The structure provided by regular timing helps individuals develop and maintain positive habits.</p>

      <h2>10. Digital Age Applications</h2>
      <p>Modern stopwatch applications extend to:</p>
      <ul>
        <li>Mobile app development</li>
        <li>User experience testing</li>
        <li>Website performance optimization</li>
        <li>Digital content creation</li>
      </ul>
      <p>In our connected world, precise timing remains crucial for both technical and creative pursuits.</p>

      <h2>The Psychology of Time Management</h2>
      <p>Understanding how humans interact with time reveals interesting patterns:</p>
      <ul>
        <li>Time perception variations</li>
        <li>Focus and concentration impacts</li>
        <li>Productivity correlations</li>
        <li>Stress management relationships</li>
      </ul>
      <p>The psychological aspects of timing influence how we structure our days and achieve our goals.</p>

      <h2>Future Trends and Innovations</h2>
      <p>The evolution of stopwatch technology continues with:</p>
      <ul>
        <li>AI-enhanced timing systems</li>
        <li>Integrated health monitoring</li>
        <li>Smart device synchronization</li>
        <li>Predictive timing capabilities</li>
      </ul>
      <p>These advancements promise to further enhance how we interact with time in our daily lives.</p>

      <h2>Practical Applications for Everyone</h2>
      <p>Everyday uses of stopwatches include:</p>
      <ul>
        <li>Time management improvement</li>
        <li>Task optimization</li>
        <li>Performance tracking</li>
        <li>Goal achievement monitoring</li>
      </ul>

      <h3>Tips for Effective Stopwatch Use</h3>
      <ol>
        <li>Start with clear objectives</li>
        <li>Maintain consistency in timing</li>
        <li>Record and analyze results</li>
        <li>Adjust strategies based on data</li>
        <li>Use appropriate timing intervals</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The stopwatch, while simple in concept, has profound implications for human activity and achievement. Its influence extends across multiple domains of life, from professional excellence to personal development. As we continue to evolve in our relationship with time, the importance of precise timing tools remains constant.</p>

      <p>Whether you're an athlete striving for peak performance, a student mastering new concepts, or a professional optimizing workflow, understanding and effectively using stopwatch functionality can significantly impact your success.</p>

      <div class="author-bio">
        <p><em>About the Author: Our Time Management Expert brings over a decade of experience in productivity optimization and performance enhancement across various industries.</em></p>
      </div>
    `
  }
};

const articleStyles = {
  'premier-league': {
    gradient: 'from-purple-600 to-pink-700',
    accent: 'text-purple-300',
    hover: 'hover:text-purple-200',
    border: 'border-purple-400/20'
  },
  'government-shutdown': {
    gradient: 'from-red-600 to-orange-700',
    accent: 'text-red-300',
    hover: 'hover:text-red-200',
    border: 'border-red-400/20'
  },
  'stopwatch-evolution': {
    gradient: 'from-blue-600 to-purple-700',
    accent: 'text-blue-300',
    hover: 'hover:text-blue-200',
    border: 'border-blue-400/20'
  },
  'productivity-tips': {
    gradient: 'from-green-600 to-teal-700',
    accent: 'text-emerald-300',
    hover: 'hover:text-emerald-200',
    border: 'border-emerald-400/20'
  },
  'sports-timing': {
    gradient: 'from-orange-600 to-red-700',
    accent: 'text-orange-300',
    hover: 'hover:text-orange-200',
    border: 'border-orange-400/20'
  },
  'stopwatch-human-life': {
    gradient: 'from-purple-600 to-indigo-700',
    accent: 'text-violet-300',
    hover: 'hover:text-violet-200',
    border: 'border-violet-400/20'
  }
};

export function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: 'Post Not Found | Stopwatch.lol',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | Stopwatch.lol Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://stopwatch.lol/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];
  const styles = articleStyles[params.slug] || articleStyles['stopwatch-evolution'];
  
  if (!post) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${styles.gradient} p-8`}>
      <div className="max-w-4xl mx-auto">
        <article className={`bg-black/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border ${styles.border}`}>
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-white/60 mb-8">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              {post.author}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
              {post.date}
            </span>
          </div>
          <div 
            className={`prose prose-invert max-w-none prose-headings:${styles.accent} 
              prose-a:${styles.accent} prose-a:${styles.hover} prose-strong:${styles.accent}
              prose-li:marker:${styles.accent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <a 
            href="/blog" 
            className={`mt-8 inline-flex items-center ${styles.accent} ${styles.hover} transition-colors`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </a>
        </article>
      </div>
    </div>
  );
}
