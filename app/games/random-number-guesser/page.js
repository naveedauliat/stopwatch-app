import NumberGuesser from "./random-number-guesser";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Number Guesser Game, Play Online for Free!",
  description: "Play the fun Number Guesser game online for free! Guess numbers between 0 to 100 with hints and animations. The best number guessing. Have a good time!",
  keywords: ["number guesser game", "guess the number", "number guessing online", "fun guessing game"],
  alternates: {
    canonical: "https://stopwatch.lol/games/random-number-guesser",
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
