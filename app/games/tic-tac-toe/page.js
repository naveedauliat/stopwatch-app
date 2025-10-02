// app/games/tictactoe/page.js
export const metadata = {
  title: "Play Tic Tac Toe Online | Stopwatch.lol",
  description: "Free online Tic Tac Toe game. Play against friends or practice solo with smooth animations and fun gameplay at Stopwatch.lol."
};

export default function TicTacToePage() {
  return (
    <main>
      {<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-900 text-white p-6">
      <NavLinks />
      <TicTacToe />
    </div>}
    </main>
  );
}
import TicTacToe from "./tic-tac-toe";
import NavLinks from "/components/NavLinks";