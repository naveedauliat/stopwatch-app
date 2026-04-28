import TicTacToe from "./tic-tac-toe";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Tic Tac Toe Online – Play vs Computer or Friend Free",
  description:
    "Play Tic Tac Toe online free vs computer (Easy, Medium, Hard AI) or a friend. No signup needed. Instant play with smooth animations.",
  keywords: [
    "tic tac toe online",
    "play tic tac toe",
    "tic tac toe vs computer",
    "tic tac toe game",
    "tic tac toe free",
    "tic tac toe two players",
    "noughts and crosses online",
    "xs and os game",
  ],
  alternates: {
    canonical: "https://stopwatch.lol/games/tic-tac-toe",
  },
  openGraph: {
    title: "Tic Tac Toe Online – Play vs Computer or Friend Free",
    description:
      "Play Tic Tac Toe online free. Challenge the computer (3 difficulty levels) or a friend. No signup needed.",
    url: "https://stopwatch.lol/games/tic-tac-toe",
    siteName: "Stopwatch.lol",
    type: "website",
    images: [{ url: "https://stopwatch.lol/og_image.png", width: 1200, height: 630, alt: "Tic Tac Toe Online at Stopwatch.lol" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tic Tac Toe Online – Play vs Computer or Friend Free",
    description:
      "Play Tic Tac Toe online free vs computer or a friend. No signup needed.",
    images: ["https://stopwatch.lol/og_image.png"],
  },
};

export default function TicTacToePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/games/tic-tac-toe#webpage",
    url: "https://stopwatch.lol/games/tic-tac-toe",
    name: "Tic Tac Toe Online – Play vs Computer or Friend Free",
    description:
      "Play Tic Tac Toe online free vs computer (3 difficulty levels) or a friend.",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stopwatch.lol" },
        { "@type": "ListItem", position: 2, name: "Games", item: "https://stopwatch.lol/games" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tic Tac Toe",
          item: "https://stopwatch.lol/games/tic-tac-toe",
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
            🎮 Tic Tac Toe Online
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Play vs the computer (Easy, Medium, or Hard AI) or challenge a friend. Free, no
            signup needed.
          </p>
        </div>
        <NavLinks />
        <TicTacToe />
      </div>
    </>
  );
}
