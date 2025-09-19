// app/page.js
"use client";

import { useState } from "react";

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

      <div className="flex gap-4 mb-6">
        {choices.map((c) => (
          <button
            key={c}
            onClick={() => playGame(c)}
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {playerChoice && (
        <div className="text-center">
          <p className="mb-2">🧑 You chose: <b>{playerChoice}</b></p>
          <p className="mb-2">🤖 Computer chose: <b>{computerChoice}</b></p>
          <h2 className="text-2xl font-bold mt-4">{result}</h2>
        </div>
      )}

       <a
        href="/"
        className="mt-8 text-blue-200 hover:text-white underline"
      >
        ← Back to Stopwatch
      </a>
    </main>
  );
}
