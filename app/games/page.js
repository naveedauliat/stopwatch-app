'use client';

import { Gamepad2, Hand, Dice6 } from 'lucide-react';
import Link from 'next/link';

export default function GamesHub() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
      <h1 className="text-4xl font-bold mb-10">🎮 Play Our Games</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Tic Tac Toe */}
        <Link
          href="/games/tic-tac-toe"
          className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-2xl shadow-lg transition"
        >
          <Gamepad2 className="w-12 h-12 mb-3 text-yellow-300" />
          <span className="text-lg font-semibold">Tic Tac Toe</span>
        </Link>

        {/* Rock Paper Scissors */}
        <Link
          href="/games/rock-paper-scissors"
          className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-2xl shadow-lg transition"
        >
          <Hand className="w-12 h-12 mb-3 text-green-300" />
          <span className="text-lg font-semibold">Rock Paper Scissors</span>
        </Link>

        {/* Random Number Guesser */}
        <Link
          href="/games/random-number-guesser"
          className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-6 rounded-2xl shadow-lg transition"
        >
          <Dice6 className="w-12 h-12 mb-3 text-pink-300" />
          <span className="text-lg font-semibold">Number Guesser</span>
        </Link>
      </div>
              <a
                href="/"
                className="mt-8 text-blue-200 hover:text-white underline"
              >
                ← Back to Stopwatch
              </a>
    </main>

    
  );
}
