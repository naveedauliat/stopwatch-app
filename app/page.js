import Stopwatch from "./components/stopwatch";
import Link from "next/link";

export const metadata = {
  title: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
  description: "Free online stopwatch with millisecond precision and smart lap analysis — automatic fastest, slowest, and average splits. Works offline, no signup. Perfect for sports, workouts, and productivity.",
  openGraph: {
    title: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
    description: "Free online stopwatch with millisecond precision, lap counter, and split times. Works offline. Perfect for sports, workouts, and productivity.",
    type: "website",
    url: "https://stopwatch.lol",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Stopwatch.lol - Free Online Stopwatch with Lap Counter"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
    description: "Free online stopwatch with millisecond precision and lap counter. Works offline, no signup required."
  },
  alternates: {
    canonical: "https://stopwatch.lol"
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/#webpage",
    url: "https://stopwatch.lol/",
    name: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
    isPartOf: {
      "@id": "https://stopwatch.lol/#website"
    },
    about: {
      "@id": "https://stopwatch.lol/#webapp"
    },
    datePublished: "2023-01-01T00:00:00+00:00",
    dateModified: "2026-07-02T00:00:00+00:00",
    description: "Free online stopwatch with millisecond precision, lap counter, split times, and background operation. Works on all devices, no registration required.",
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://stopwatch.lol/"]
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this online stopwatch accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Stopwatch.lol uses the browser's high-resolution Performance API (performance.now()) which provides sub-millisecond precision, making it highly accurate for sports timing, workouts, and productivity."
        }
      },
      {
        "@type": "Question",
        name: "How precise is the stopwatch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The stopwatch displays time to millisecond precision. It continues running accurately in the background even when you switch tabs, using timestamp-based calculations rather than interval counting."
        }
      },
      {
        "@type": "Question",
        name: "Can I use this stopwatch on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the stopwatch is fully responsive and optimized for all devices including smartphones, tablets, and desktops with touch-friendly controls."
        }
      },
      {
        "@type": "Question",
        name: "Does the stopwatch work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, once loaded, the stopwatch works offline and maintains accuracy even without an internet connection."
        }
      },
      {
        "@type": "Question",
        name: "Can I record lap times and splits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can record unlimited lap times and view detailed split time analysis with our advanced timing features."
        }
      },
      {
        "@type": "Question",
        name: "Is the stopwatch free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Stopwatch.lol is completely free with no downloads, registration, or hidden fees required."
        }
      },
      {
        "@type": "Question",
        name: "What is an AI stopwatch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI stopwatch is a smart online stopwatch that goes beyond basic start and stop timing by automatically analyzing your results — calculating fastest, slowest, and average lap times, tracking split times, and turning raw numbers into insight without any manual math. Stopwatch.lol delivers this automatic lap and split analysis today, with AI-powered pacing insights in development."
        }
      },
      {
        "@type": "Question",
        name: "Is Stopwatch.lol a smart or AI stopwatch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Stopwatch.lol is a smart, high-precision online stopwatch. It automatically analyzes every session, showing your fastest, slowest, and average lap splits, and it lets you export lap data as CSV and auto-saves your session so it survives a refresh. Timing uses the browser's Performance API for millisecond accuracy. Deeper AI-powered features, such as automatic pacing suggestions, are on our roadmap. It is free, needs no signup, and works offline."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-8" itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" itemProp="name">
            Free Online Stopwatch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" itemProp="description">
            Professional stopwatch with millisecond precision, lap counter, and split times.
            Free, accurate, and works everywhere — no signup required.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">Millisecond Precision</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Lap Counter</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Split Times</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Works Offline</span>
          </div>
        </div>

        <Stopwatch />

        {/* Popular Timers */}
        <section className="mt-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Need a Countdown? Popular Timers</h2>
          <p className="text-white/80 text-sm mb-5">
            One-click preset timers with a sound alarm — or set any duration on the{" "}
            <Link href="/countdown" className="underline hover:text-white">countdown timer</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["/timer/1-minute-timer", "1 Min"],
              ["/timer/5-minute-timer", "5 Min"],
              ["/timer/10-minute-timer", "10 Min"],
              ["/timer/15-minute-timer", "15 Min"],
              ["/timer/20-minute-timer", "20 Min"],
              ["/timer/30-minute-timer", "30 Min"],
              ["/timer/1-hour-timer", "1 Hour"],
              ["/timer/pomodoro-timer", "Pomodoro"],
              ["/timer/egg-timer", "Egg Timer"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 hover:text-white transition"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/timer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 hover:text-white transition"
            >
              All Timers →
            </Link>
          </div>
        </section>

        {/* Games Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            🎮 Play Free Games
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/games/tic-tac-toe"
              className="rounded-xl shadow-lg p-5 bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-105 transition transform text-center"
            >
              <h3 className="text-xl font-bold text-white mb-1">Tic Tac Toe</h3>
              <p className="text-sm text-white/80">Classic X vs O strategy game.</p>
            </Link>
            <Link
              href="/games/random-number-guesser"
              className="rounded-xl shadow-lg p-5 bg-gradient-to-br from-green-500 to-teal-600 hover:scale-105 transition transform text-center"
            >
              <h3 className="text-xl font-bold text-white mb-1">Number Guesser</h3>
              <p className="text-sm text-white/80">Guess the secret number!</p>
            </Link>
            <Link
              href="/games/rock-paper-scissors"
              className="rounded-xl shadow-lg p-5 bg-gradient-to-br from-orange-500 to-red-600 hover:scale-105 transition transform text-center"
            >
              <h3 className="text-xl font-bold text-white mb-1">Rock Paper Scissors</h3>
              <p className="text-sm text-white/80">Battle against the computer.</p>
            </Link>
          </div>
          <div className="text-center mt-4">
            <Link
              href="/games"
              className="text-sm font-medium text-white/70 hover:text-white transition"
            >
              View all games →
            </Link>
          </div>
        </section>
        
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Use Stopwatch.lol?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Millisecond Precision</h3>
              <p className="text-white/90">
                Uses the browser&apos;s high-resolution Performance API for accurate millisecond timing every time.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Smart Lap Analysis</h3>
              <p className="text-white/90">
                Record unlimited laps and let the stopwatch automatically surface your fastest, slowest,
                and average splits — then export the data as CSV.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Background Operation</h3>
              <p className="text-white/90">
                Keeps running accurately even when you switch tabs or lock your screen.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">All Devices</h3>
              <p className="text-white/90">
                Fully responsive and touch-friendly — works on desktop, tablet, and mobile.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Free & Instant</h3>
              <p className="text-white/90">
                No downloads, no registration, no fees. Open and start timing immediately.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Works Offline</h3>
              <p className="text-white/90">
                Once loaded, the stopwatch works without an internet connection — no dropouts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — rendered from the same data as the FAQPage JSON-LD above */}
        <section className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((item, i) => (
              <details key={i} className="group bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-5">
                <summary className="cursor-pointer list-none font-semibold text-white flex justify-between items-center gap-4">
                  {item.name}
                  <span className="text-white/50 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-white/80">
            Curious what smart timing can do?{" "}
            <Link href="/blog/ai-stopwatch" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">
              Read our AI stopwatch guide
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
