import RockPaperScissors from "./rock-paper-scissors";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Play Rock Paper Scissors Online | Stopwatch.lol",
  description: "Challenge the computer in Rock Paper Scissors! Free online fun at Stopwatch.lol.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-black-700 text-white p-6">
      <NavLinks />
      <RockPaperScissors />
    </div>
  );
}
