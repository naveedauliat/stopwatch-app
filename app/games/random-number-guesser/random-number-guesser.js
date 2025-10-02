'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

export default function NumberGuesser() {
    const [target, setTarget] = useState(Math.floor(Math.random() * 101)); // 0-100
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("Enter a number between 0 and 100");
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const num = parseInt(guess, 10);
        if (isNaN(num) || num < 0 || num > 100) {
            setMessage("⚠️ Please enter a number between 0 and 100");
            return;
        }

        setAttempts(attempts + 1);

        if (num === target) {
            setMessage(`🎉 Correct! You guessed it in ${attempts + 1} tries!`);
        } else if (num < target) {
            setMessage("⬆️ Too Low! Try a higher number.");
        } else {
            setMessage("⬇️ Too High! Try a lower number.");
        }
    };

    const resetGame = () => {
        setTarget(Math.floor(Math.random() * 101));
        setGuess("");
        setMessage("Enter a number between 0 and 100");
        setAttempts(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-400 
      bg-gradient-to-br from-black-50 via-white to-black-100 p-6 rounded-2xl shadow-lg">

            <h1 className="text-3xl font-extrabold text-orange-700 mb-6">
                🔢 Number Guesser
            </h1>

            <motion.input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess..."
                whileFocus={{ scale: 1.05 }}
                className="w-64 px-4 py-2 border-2 border-orange-400 rounded-lg 
             text-center text-lg focus:outline-none shadow-sm 
             text-gray-800 placeholder-gray-400 bg-white"
            />

            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleGuess}
                className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition"
            >
                Guess
            </motion.button>

            <motion.div
                key={message} // re-animate on change
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 text-lg font-semibold text-gray-700"
            >
                {message}
            </motion.div>

            {message.includes("Correct") && (
                <motion.button
                    onClick={resetGame}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
                >
                    Play Again
                </motion.button>
            )}



            
            <div className="mt-8 flex flex-col items-center gap-3">

                {/* Back Links */}
                <div className="flex gap-4">
                    <Link
                        href="/games"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        ⬅ Play More Online Games
                    </Link>

                    <Link
                        href="/"
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
                    >
                        ⏱ Stopwatch Online Timer
                    </Link>
                </div>

                {/* Cross Game Links */}
                <div className="flex gap-4 mt-4">
                    <Link
                        href="/games/tic-tac-toe"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Tic Tac Toe
                    </Link>

                    <Link
                        href="/games/rock-paper-scissors"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                    >
                        Rock Paper Scissors
                    </Link>
                </div>
            </div>
             <div className="mt-6">
                <ShareButtons
                    url="https://stopwatch.lol/games/random-number-guesser"
                    title="Play Tic Tac Toe Online — Stopwatch.lol 🎮"
                />
            </div>
        </div>
    );
}
