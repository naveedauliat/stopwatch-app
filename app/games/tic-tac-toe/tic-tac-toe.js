'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState([]);

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const calculateWinner = (squares) => {
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinningLine([a, b, c]);
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else if (!newBoard.includes(null)) {
            setWinner("Draw");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setWinningLine([]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-400 
  bg-gradient-to-br from-purple-100 via-green to-white-100 
  p-6 rounded-2xl shadow-lg">

            <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
                🎮 Tic Tac Toe
            </h1>

            <div className="grid grid-cols-3 gap-3">
                {board.map((cell, index) => (
                    <motion.div
                        key={index}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleClick(index)}
                        className={`w-20 h-20 flex items-center justify-center rounded-xl text-3xl font-bold cursor-pointer transition-colors duration-300 shadow-md ${winningLine.includes(index)
                                ? "bg-green-400 text-white animate-pulse"
                                : "bg-white text-purple-700 hover:bg-purple-100"
                            }`}
                    >
                        {cell && (
                            <motion.span
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.4, type: "spring" }}
                            >
                                {cell}
                            </motion.span>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 text-lg font-semibold text-gray-700">
                {winner
                    ? winner === "Draw"
                        ? "🤝 It's a Draw!"
                        : `🏆 Winner: ${winner}`
                    : `Next Turn: ${isXNext ? "❌ X" : "⭕ O"}`}
            </div>

            {winner && (
                <motion.button
                    onClick={resetGame}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
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
                        href="/games/rock-paper-scissors"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    >
                        ✊ Try Rock Paper Scissors
                    </Link>

                    <Link
                        href="/games/random-number-guesser"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                    >
                        🔢 Play Number Guesser
                    </Link>
                </div>
            </div>
             <div className="mt-6">
                <ShareButtons
                    url="https://stopwatch.lol/games/tic-tac-toe"
                    title="Play Tic Tac Toe Online — Stopwatch.lol 🎮"
                />
            </div>
        </div>

    );
}
