// app/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const choices = ["rock", "paper", "scissors"];

export default function Home() {
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
      <h1 className="text-4xl font-bold mb-6">✊✋✌️ Rock Paper Scissors</h1>

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

       <a
        href="/"
        className="mt-8 text-blue-200 hover:text-white underline"
      >
        ← Back to Stopwatch
      </a>
    </main>
  );
}
