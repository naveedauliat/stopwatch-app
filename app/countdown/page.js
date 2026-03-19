import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

export const metadata = {
  title: "Free Online Countdown Timer",
  description: "Free online countdown timer with sound alert. Set hours, minutes, and seconds. Perfect for cooking, workouts, exams, presentations, and productivity.",
  keywords: [
    "countdown timer online",
    "free countdown timer",
    "online timer with sound",
    "timer online",
    "exam timer",
    "cooking timer online",
    "presentation timer",
    "interval timer",
  ],
  openGraph: {
    title: "Free Online Countdown Timer with Sound",
    description: "Set a countdown timer for any duration. Sound alert when done. Free, no signup, works offline.",
    type: "website",
    url: "https://stopwatch.lol/countdown",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Countdown Timer",
    description: "Set a countdown timer with sound alert. Free and works everywhere.",
  },
  alternates: {
    canonical: "https://stopwatch.lol/countdown",
  },
};

export default function CountdownPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/countdown#webpage",
    url: "https://stopwatch.lol/countdown",
    name: "Free Online Countdown Timer",
    description: "Free online countdown timer with sound alert. Set hours, minutes, and seconds.",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stopwatch.lol" },
        { "@type": "ListItem", position: 2, name: "Countdown Timer", item: "https://stopwatch.lol/countdown" },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Free Countdown Timer
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Set any duration in hours, minutes, and seconds. Plays a sound when the timer finishes.
            Free, accurate, and works offline.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">Sound Alert</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Hours, Minutes & Seconds</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Works Offline</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">No Signup</span>
          </div>
        </div>

        <CountdownTimer />

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            When to Use a Countdown Timer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🍳", title: "Cooking & Kitchen", desc: "Never overcook again. Set precise timers for every dish." },
              { icon: "💪", title: "Workouts & HIIT", desc: "Time your sets, rest periods, and interval training sessions." },
              { icon: "📝", title: "Exams & Tests", desc: "Track time remaining during practice exams and timed assessments." },
              { icon: "🎤", title: "Presentations", desc: "Stay on time during speeches, demos, and class presentations." },
              { icon: "🎯", title: "Productivity", desc: "Use the Pomodoro technique — 25 minutes of focus, then a break." },
              { icon: "🧘", title: "Meditation", desc: "Time your meditation or breathing exercises without watching the clock." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Switch to Stopwatch
          </Link>
        </div>
      </div>
    </>
  );
}
