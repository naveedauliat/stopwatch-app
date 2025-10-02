'use client';

import { useState } from "react";
import { motion } from "framer-motion";

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
      bg-gradient-to-br from-yellow-50 via-white to-orange-100 p-6 rounded-2xl shadow-lg">

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
        </div>
    );
}
