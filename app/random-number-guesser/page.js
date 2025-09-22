"use client";

import Head from "next/head";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, MessageCircle } from "lucide-react";

export default function Home() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);

  const url = "https://stopwatch.lol/number-guesser";
  const text = "🎮 Try this fun Number Guessing Game! Can you guess the secret number between 1 and 100?";

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage("❌ Please enter a valid number!");
      return;
    }
    setAttempts(attempts + 1);
    if (num === target) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} tries!`);
    } else if (num < target) {
      setMessage("⬆️ Too low! Try again.");
    } else {
      setMessage("⬇️ Too high! Try again.");
    }
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Guess a number between 1 and 100!");
    setAttempts(0);
  };

  return (
    <>
      <Head>
        <title>Number Guessing Game | Play Online</title>
        <meta
          name="description"
          content="Play a fun Number Guessing Game online! Guess the secret number between 1 and 100. Free, simple, and mobile-friendly."
        />
        <meta
          name="keywords"
          content="number guessing game, online game, play free, guessing game"
        />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content="Number Guessing Game" />
        <meta property="og:description" content={text} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/preview.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Number Guessing Game" />
        <meta name="twitter:description" content={text} />
        <meta name="twitter:image" content={`${url}/preview.png`} />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4">
        <h1 className="text-4xl font-bold mb-6">🎮 Number Guessing Game</h1>

        <p className="mb-4">{message}</p>

        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="px-3 py-2 rounded text-black"
            placeholder="Enter your guess"
          />
          <button
            onClick={handleGuess}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Guess
          </button>
        </div>

        <button
          onClick={resetGame}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
        >
          🔄 Reset
        </button>

        {/* 🔗 Share Buttons */}
        <div className="flex gap-4 mt-10">
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <Twitter className="w-6 h-6 text-white" />
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </div>
      </main>
    </>
  );
}
