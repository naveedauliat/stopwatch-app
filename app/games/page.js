import Link from "next/link";
import ShareButtons from "/components/ShareButtons";

export const metadata = {
  title: "Play Free Online Games with us, Just for Fun!",
  description: "Enjoy free online games like Tic Tac Toe, Number Guesser, and Rock Paper Scissors at Stopwatch. Fun, simple, and free! With single and multiplayer options.",
};

export default function GamesPage() {
  const games = [
    {
      name: "Tic Tac Toe",
      path: "/games/tic-tac-toe",
      color: "from-purple-600 to-pink-600",
      desc: "Classic X vs O strategy game.",
    },
    {
      name: "Number Guesser",
      path: "/games/random-number-guesser",
      color: "from-green-500 to-teal-600",
      desc: "Guess the secret number!",
    },
    {
      name: "Rock Paper Scissors",
      path: "/games/rock-paper-scissors",
      color: "from-orange-500 to-red-600",
      desc: "Battle against the computer.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-10">🎮 Free Online Games</h1>
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        {games.map((game) => (
          <Link
            key={game.path}
            href={game.path}
            className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${game.color} hover:scale-105 transition transform`}
          >
            <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
            <p className="text-sm opacity-80">{game.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-medium px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
        >
          🏠 Back to Stopwatch
        </Link>
      </div>
            <div>
      <games/>
      <ShareButtons
        url="https://stopwatch.lol/games"
        title="Play Tic Tac Toe Online — Stopwatch.lol 🎮"
      />
    </div>
    </div>
  );
}
