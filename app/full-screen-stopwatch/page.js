import Stopwatch from "../components/stopwatch";
import Link from "next/link";
import FullscreenButton from "./FullscreenButton";

export const metadata = {
  title: "Full Screen Stopwatch",
  description: "Full screen online stopwatch with millisecond precision and lap counter. Perfect for classrooms, presentations, sports coaching, and projector display.",
  keywords: [
    "full screen stopwatch",
    "fullscreen stopwatch",
    "fullscreen timer",
    "classroom stopwatch",
    "projector stopwatch",
    "large stopwatch display",
  ],
  openGraph: {
    title: "Full Screen Stopwatch - Free Online Timer",
    description: "Full screen stopwatch with lap counter and millisecond precision. Perfect for classrooms and presentations.",
    type: "website",
    url: "https://stopwatch.lol/full-screen-stopwatch",
  },
  alternates: {
    canonical: "https://stopwatch.lol/full-screen-stopwatch",
  },
};

export default function FullScreenStopwatchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/full-screen-stopwatch#webpage",
    url: "https://stopwatch.lol/full-screen-stopwatch",
    name: "Full Screen Stopwatch",
    description: "Full screen online stopwatch with millisecond precision. Perfect for classrooms, coaching, and presentations.",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stopwatch.lol" },
        { "@type": "ListItem", position: 2, name: "Full Screen Stopwatch", item: "https://stopwatch.lol/full-screen-stopwatch" },
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
            Full Screen Stopwatch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Large-display stopwatch with millisecond precision and lap counter.
            Click the button below to expand to full screen.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">Classroom Ready</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Projector Friendly</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Lap Counter</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Keyboard Shortcuts</span>
          </div>

          {/* Fullscreen Button */}
          <div className="mt-6">
            <FullscreenButton />
          </div>
        </div>

        <Stopwatch />

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏫", title: "Classrooms & Teachers", desc: "Project onto the whiteboard for timed activities, exams, and class exercises. Full screen fills the display for easy reading from any seat." },
              { icon: "🏃", title: "Sports Coaching", desc: "Time athletes, record laps, and track split times. The large display is easy to read from the field or track." },
              { icon: "🎤", title: "Presentations & Events", desc: "Keep speakers and presenters on schedule. A clean, high-contrast display that works on any projector." },
              { icon: "🔬", title: "Labs & Research", desc: "Millisecond precision for scientific timing. Keyboard shortcuts (Space, L, R) let you time without touching the mouse." },
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
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

