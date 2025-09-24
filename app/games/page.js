'use client';

import Head from 'next/head';
import { Gamepad2, Hand, Dice6 } from 'lucide-react';
import Link from 'next/link';

export default function GamesHub() {
  const url = "https://yourdomain.com/games"; // 🔗 replace with your domain

  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>Free Online Games | Tic Tac Toe, Rock Paper Scissors, Number Guesser</title>
        <meta
          name="description"
          content="Play free online games in your browser — Tic Tac Toe, Rock Paper Scissors, and Random Number Guesser. Fun, simple, and mobile-friendly!"
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Free Online Games" />
        <meta
          property="og:description"
          content="Enjoy free online games — Tic Tac Toe, Rock Paper Scissors, and Random Number Guesser."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/preview.png`} />
      </Head>

      {/* ✅ Page Content */}
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
      </main>
    </>
  );
}
