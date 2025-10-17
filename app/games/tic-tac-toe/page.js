// app/games/tictactoe/page.js
export const metadata = {
  title: "Play Tic Tac Toe Online, two players required!",
  description: "Enjoy a smooth and animated Tic Tac Toe game online. Challenge your friends. Simple and fun! No signup needed. Play and share now! at Stopwatch",
  keywords: ["tic tac toe online", "play tic tac toe", "tic tac toe game", "tic tac toe free", "tic tac toe vs computer"],
  alternates: {
    canonical: "https://stopwatch.lol/games/tic-tac-toe",
  },
  openGraph: {
    title: "Play Tic Tac Toe Online – Stopwatch.lol",
    description: "Enjoy a smooth and animated Tic Tac Toe game online. Challenge friends or test your strategy against the computer.",
    url: "https://stopwatch.lol/games/tic-tac-toe",
    siteName: "Stopwatch.lol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Tic Tac Toe Online – Stopwatch.lol",
    description: "Enjoy a smooth and animated Tic Tac Toe game online. Challenge friends or test your strategy against the computer.",
  },
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