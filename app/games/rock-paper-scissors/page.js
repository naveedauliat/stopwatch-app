import RockPaperScissors from "./rock-paper-scissors";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Rock Paper Scissors Online – Stopwatch.lol",
  description: "Play Rock Paper Scissors online with smooth animations. Fun, quick, and easy to play anytime!",
  keywords: ["rock paper scissors online", "play rock paper scissors", "rps game", "rock paper scissors free"],
  alternates: {
    canonical: "https://stopwatch.lol/games/rock-paper-scissors",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-black-700 text-white p-6">
      <NavLinks />
      <RockPaperScissors />
    </div>
  );
}
