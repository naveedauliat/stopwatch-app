import NumberGuesser from "./random-number-guesser";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Number Guesser Game – Play Free Online",
  description: "Guess the secret number between 1 and 100 in this free online number guessing game. Get hot/cold hints with every guess. No signup needed.",
  keywords: ["number guesser game", "guess the number", "number guessing online", "fun guessing game"],
  alternates: {
    canonical: "https://stopwatch.lol/games/random-number-guesser",
  },
  openGraph: {
    title: "Number Guesser Game – Play Free Online",
    description: "Guess the secret number between 1 and 100. Free online number guessing game with hot/cold hints.",
    type: "website",
    url: "https://stopwatch.lol/games/random-number-guesser",
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Guesser Game – Play Free Online",
    description: "Guess the secret number between 1 and 100. Free online game with hints.",
  },
};



export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-teal-700 text-white p-6">
      <NavLinks />
      <NumberGuesser />
    </div>
  );
}
