// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
    const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("Guess a number between 1 and 100!");
    const [attempts, setAttempts] = useState(0);

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
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
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
                    className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                >
                    Guess
                </button>
            </div>

            <button
                onClick={resetGame}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
                🔄 Reset
            </button>

            <a
                href="/"
                className="mt-8 text-blue-200 hover:text-white underline"
            >
                ← Back to Stopwatch
            </a>

        </main>

    );
}
