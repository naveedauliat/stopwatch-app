import NumberGuesser from "./random-number-guesser";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Number Guesser Game – Guess the Number Free Online",
  description:
    "Guess the secret number between 0 and 100 in 10 attempts. Get hot/cold hints with every guess. Free online number guessing game — no signup needed.",
  keywords: [
    "number guesser game",
    "guess the number",
    "number guessing game online",
    "guess the number game",
    "higher or lower game",
    "hot cold number game",
    "fun guessing game online",
  ],
  alternates: {
    canonical: "https://stopwatch.lol/games/random-number-guesser",
  },
  openGraph: {
    title: "Number Guesser Game – Guess the Number Free Online",
    description:
      "Guess the secret number between 0 and 100 in 10 attempts. Hot/cold hints with every guess. Free online game.",
    type: "website",
    url: "https://stopwatch.lol/games/random-number-guesser",
    siteName: "Stopwatch.lol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Guesser Game – Guess the Number Free Online",
    description: "Guess the secret number in 10 attempts. Hot/cold hints. Free online game.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/games/random-number-guesser#webpage",
    url: "https://stopwatch.lol/games/random-number-guesser",
    name: "Number Guesser Game – Guess the Number Free Online",
    description:
      "Guess the secret number between 0 and 100 in 10 attempts with hot/cold hints.",
    isPartOf: { "@id": "https://stopwatch.lol/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stopwatch.lol" },
        { "@type": "ListItem", position: 2, name: "Games", item: "https://stopwatch.lol/games" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Number Guesser",
          item: "https://stopwatch.lol/games/random-number-guesser",
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
            🔢 Number Guesser
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Guess the secret number between 0 and 100 in 10 attempts. Hot and cold hints guide
            you to the answer — no signup needed.
          </p>
        </div>
        <NavLinks />
        <NumberGuesser />
      </div>
    </>
  );
}
