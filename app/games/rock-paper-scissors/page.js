import RockPaperScissors from "./rock-paper-scissors";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Rock Paper Scissors Online – Play Free vs Computer",
  description:
    "Play Rock Paper Scissors online free against the computer. Instant play with score tracking, win streaks, and match history. No download or signup needed.",
  keywords: [
    "rock paper scissors online",
    "rock paper scissors game",
    "play rock paper scissors",
    "rock paper scissors vs computer",
    "rps game online",
    "rock paper scissors free",
    "rock paper scissors no download",
    "online rps",
  ],
  alternates: {
    canonical: "https://stopwatch.lol/games/rock-paper-scissors",
  },
  openGraph: {
    title: "Rock Paper Scissors Online – Play Free vs Computer",
    description:
      "Play Rock Paper Scissors online free. Score tracking, win streaks, and match history. No signup needed.",
    type: "website",
    url: "https://stopwatch.lol/games/rock-paper-scissors",
    siteName: "Stopwatch.lol",
    images: [{ url: "https://stopwatch.lol/og_image.png", width: 1200, height: 630, alt: "Rock Paper Scissors Online at Stopwatch.lol" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Paper Scissors Online – Play Free vs Computer",
    description:
      "Play Rock Paper Scissors online free. Score tracking, win streaks. No signup needed.",
    images: ["https://stopwatch.lol/og_image.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/games/rock-paper-scissors#webpage",
    url: "https://stopwatch.lol/games/rock-paper-scissors",
    name: "Rock Paper Scissors Online – Play Free vs Computer",
    description:
      "Play Rock Paper Scissors online free against the computer. Instant play with score tracking and win streaks.",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stopwatch.lol" },
        { "@type": "ListItem", position: 2, name: "Games", item: "https://stopwatch.lol/games" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rock Paper Scissors",
          item: "https://stopwatch.lol/games/rock-paper-scissors",
        },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            ✊📄✂️ Rock Paper Scissors
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Play free online against the computer. Track your score, build win streaks, and see
            match history — no signup needed.
          </p>
          <a
            href="#rps-game"
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all border border-white/20"
            aria-label="Play Rock Paper Scissors now"
          >
            <span className="text-xl">▶</span> Play Now
          </a>
        </div>
        <NavLinks />
        <RockPaperScissors />
      </div>
    </>
  );
}
