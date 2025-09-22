// app/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Twitter, Facebook, Linkedin, MessageCircle } from "lucide-react";

const choices = ["rock", "paper", "scissors"];

export default function Home() {
  const url = "https://stopwatch.lol/rock-paper-scissors";
  const text = "🎮 Play Rock Paper Scissors online for free!";
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const comp = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("🤝 It's a draw!");
    } else if (
      (choice === "rock" && comp === "scissors") ||
      (choice === "paper" && comp === "rock") ||
      (choice === "scissors" && comp === "paper")
    ) {
      setResult("🎉 You win!");
    } else {
      setResult("💀 You lose!");
    }
  };

  return (

           <>
      <Head>
        {/* Basic SEO */}
        <title>Rock Paper Scissors Game | Play Online</title>
        <meta
          name="description"
          content="Play Rock Paper Scissors online for free. Fun, simple, and mobile-friendly game with animations!"
        />
        <meta
          name="keywords"
          content="rock paper scissors, online game, free game, play game"
        />
        <link rel="canonical" href="https://stopwatch.lol/rock-peper-scissors" />

        <title>Rock Paper Scissors Game | Play Online</title>
        <meta
          name="description"
          content="Play Rock Paper Scissors online for free. Fun, simple, and mobile-friendly game with animations!"
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Rock Paper Scissors Game" />
        <meta property="og:description" content={text} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}preview.png`} />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Rock Paper Scissors Game" />
        <meta
          property="og:description"
          content="Play Rock Paper Scissors online for free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stopwatch.lol/rock-peper-scissors" />
        <meta
          property="og:image"
          content="https://stopwatch.lol/rock-peper-scissors/preview.png"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rock Paper Scissors Game" />
        <meta
          name="twitter:description"
          content="Play Rock Paper Scissors online for free."
        />
        <meta
          name="twitter:image"
          content="https://stopwatch.lol/rock-peper-scissors/preview.png"
        />
        </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
        <h1 className="text-4xl font-bold mb-6">
          ✊✋✌️ Rock Paper Scissors Game
        </h1>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            {choices.map((c) => (
              <motion.button
                key={c}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => playGame(c)}
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Animate results */}
          <AnimatePresence mode="wait">
            {playerChoice && (
              <motion.div
                key={result} // re-animate every new result
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="mb-2">🧑 You chose: <b>{playerChoice}</b></p>
                <p className="mb-2">🤖 Computer chose: <b>{computerChoice}</b></p>
                <h2 className="text-2xl font-bold mt-4">{result}</h2>
              </motion.div>
            )}
          </AnimatePresence>

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

          <a
            href="/"
            className="mt-8 text-blue-200 hover:text-white underline"
          >
            ← Back to Stopwatch
          </a>
        </main>
    </>
        
      );
}
