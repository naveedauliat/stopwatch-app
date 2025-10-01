import NumberGuesser from "./random-number-guesser";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Play Number Guesser Online | Stopwatch.lol",
  description: "Try your luck with Number Guesser! Pick a number and see if you can guess it correctly. Play free on Stopwatch.lol.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-teal-700 text-white p-6">
      <NavLinks />
      <NumberGuesser />
    </div>
  );
}
