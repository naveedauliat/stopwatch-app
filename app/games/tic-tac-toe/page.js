import TicTacToe from "./tic-tac-toe";
import NavLinks from "/components/NavLinks";

export const metadata = {
  title: "Play Tic Tac Toe Online | Stopwatch.lol",
  description: "Enjoy a fun, free Tic Tac Toe game online. Play anytime at Stopwatch.lol.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-900 text-white p-6">
      <NavLinks />
      <TicTacToe />
    </div>
  );
}
