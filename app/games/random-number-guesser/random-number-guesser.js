"use client";
import { useState } from "react";

export default function NumberGuesser() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function handleGuess() {
    const num = parseInt(guess);
    if (num === target) setMessage("🎉 Correct! You guessed it!");
    else setMessage("❌ Wrong guess, try again!");
  }

  function resetGame() {
    setTarget(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Number Guesser</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="px-4 py-2 text-black rounded-lg mb-4 w-40 text-center shadow-md"
        placeholder="Enter 1–10"
      />
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleGuess}
          className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 shadow-md"
        >
          Guess
        </button>
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 shadow-md"
        >
          Reset
        </button>
      </div>
      <p className="mt-2 text-lg">{message}</p>
    </div>
  );
}
