import Link from "next/link";
import { presets } from "./presets";

const BASE = "https://stopwatch.lol";

export const metadata = {
  title: "Online Timers - Preset Countdown Timers with Alarm",
  description:
    "Free preset online timers with a sound alarm: 1, 5, 10, 15, 20, 30, 45 minute and 1 hour countdowns, plus Pomodoro, study, egg, and meditation timers. No signup.",
  alternates: { canonical: `${BASE}/timer` },
  openGraph: {
    title: "Online Timers - Preset Countdown Timers with Alarm",
    description:
      "Free preset countdown timers with sound: minute timers, Pomodoro, study, egg, and meditation timers.",
    type: "website",
    url: `${BASE}/timer`,
    siteName: "Stopwatch.lol",
    images: [{ url: `${BASE}/og_image.png`, width: 1200, height: 630, alt: "Online Timers at Stopwatch.lol" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Timers - Preset Countdown Timers with Alarm",
    description: "Free preset countdown timers with a sound alarm. No signup.",
    images: [`${BASE}/og_image.png`],
  },
};

const DURATION_SLUGS = [
  "1-minute-timer", "2-minute-timer", "3-minute-timer", "5-minute-timer",
  "10-minute-timer", "15-minute-timer", "20-minute-timer", "30-minute-timer",
  "45-minute-timer", "1-hour-timer", "90-minute-timer",
];
const USECASE_SLUGS = ["pomodoro-timer", "study-timer", "egg-timer", "meditation-timer"];

function pick(slugs) {
  return slugs.map((s) => presets.find((p) => p.slug === s)).filter(Boolean);
}

export default function TimerHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE}/timer/#collection`,
    name: "Online Timers",
    description:
      "Preset online countdown timers with a sound alarm — minute timers plus Pomodoro, study, egg, and meditation timers.",
    url: `${BASE}/timer`,
    isPartOf: { "@id": `${BASE}/#website` },
    hasPart: presets.map((p) => ({
      "@type": "WebPage",
      name: p.label,
      url: `${BASE}/timer/${p.slug}`,
    })),
  };

  const Group = ({ title, items }) => (
    <section className="max-w-4xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/timer/${p.slug}`}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:border-white/30 transition group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition">
              {p.label}
            </h3>
            <p className="text-white/70 text-sm mt-1 line-clamp-2">{p.intro}</p>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Online Timers</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Preset countdown timers with a sound alarm — pick a duration and it&apos;s ready in one click.
            Need a custom time? Use the{" "}
            <Link href="/countdown" className="underline hover:text-white">countdown timer</Link>.
          </p>
        </div>

        <Group title="Minute & Hour Timers" items={pick(DURATION_SLUGS)} />
        <Group title="Focus & Everyday Timers" items={pick(USECASE_SLUGS)} />

        <div className="text-center mt-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Stopwatch
          </Link>
        </div>
      </div>
    </>
  );
}
