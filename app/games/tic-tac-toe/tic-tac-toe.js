'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState([]);
    const [gameMode, setGameMode] = useState(null); // null, '2player', 'computer'
    const [difficulty, setDifficulty] = useState(null); // 'easy', 'medium', 'hard'

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

    const checkWinner = (squares) => {
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: [a, b, c] };
            }
        }
        return null;
    };

    const calculateWinner = (squares) => {
        const result = checkWinner(squares);
        if (result) {
            setWinningLine(result.line);
            return result.winner;
        }
        return null;
    };

    // Get available moves
    const getAvailableMoves = (squares) => {
        return squares.map((cell, index) => cell === null ? index : null).filter(i => i !== null);
    };

    // Minimax algorithm for hard difficulty
    const minimax = (squares, isMaximizing) => {
        const result = checkWinner(squares);
        if (result) {
            return result.winner === 'O' ? 10 : -10;
        }
        if (!squares.includes(null)) {
            return 0;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'O';
                    const score = minimax(squares, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = 'X';
                    const score = minimax(squares, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    // Get computer move based on difficulty
    const getComputerMove = (squares) => {
        const available = getAvailableMoves(squares);
        if (available.length === 0) return null;

        if (difficulty === 'easy') {
            // Random move
            return available[Math.floor(Math.random() * available.length)];
        }

        if (difficulty === 'medium') {
            // 50% chance of best move, 50% random
            if (Math.random() < 0.5) {
                return available[Math.floor(Math.random() * available.length)];
            }
            // Try to win or block
            for (let move of available) {
                const testBoard = [...squares];
                testBoard[move] = 'O';
                if (checkWinner(testBoard)) return move;
            }
            for (let move of available) {
                const testBoard = [...squares];
                testBoard[move] = 'X';
                if (checkWinner(testBoard)) return move;
            }
            // Take center if available
            if (available.includes(4)) return 4;
            // Take a corner
            const corners = [0, 2, 6, 8].filter(c => available.includes(c));
            if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
            // Random
            return available[Math.floor(Math.random() * available.length)];
        }

        if (difficulty === 'hard') {
            // Minimax - always best move
            let bestScore = -Infinity;
            let bestMove = available[0];
            for (let move of available) {
                const testBoard = [...squares];
                testBoard[move] = 'O';
                const score = minimax(testBoard, false);
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = move;
                }
            }
            return bestMove;
        }

        return available[0];
    };

    // Computer makes a move
    useEffect(() => {
        if (gameMode === 'computer' && !isXNext && !winner) {
            const timer = setTimeout(() => {
                const move = getComputerMove(board);
                if (move !== null) {
                    const newBoard = [...board];
                    newBoard[move] = 'O';
                    setBoard(newBoard);
                    setIsXNext(true);

                    const gameWinner = calculateWinner(newBoard);
                    if (gameWinner) {
                        setWinner(gameWinner);
                    } else if (!newBoard.includes(null)) {
                        setWinner("Draw");
                    }
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isXNext, gameMode, winner, board]);

    const handleClick = (index) => {
        if (board[index] || winner) return;
        if (gameMode === 'computer' && !isXNext) return; // Prevent clicking during computer's turn
        
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

    const backToMenu = () => {
        resetGame();
        setGameMode(null);
        setDifficulty(null);
    };

    const selectMode = (mode) => {
        setGameMode(mode);
        if (mode === '2player') {
            setDifficulty(null);
        }
    };

    const selectDifficulty = (level) => {
        setDifficulty(level);
    };

    // Mode selection screen
    if (!gameMode) {
        return (
            <div className="flex flex-col items-center justify-center min-h-400 
                bg-gradient-to-br from-purple-100 via-green to-white-100 
                p-6 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
                    🎮 Tic Tac Toe
                </h1>
                <h2 className="text-xl font-bold text-gray-700 mb-4">Select Game Mode</h2>
                <div className="flex flex-col gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectMode('2player')}
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg font-bold text-lg"
                    >
                        👥 2 Players
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectMode('computer')}
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg font-bold text-lg"
                    >
                        🤖 vs Computer
                    </motion.button>
                </div>
            </div>
        );
    }

    // Difficulty selection screen (only for computer mode)
    if (gameMode === 'computer' && !difficulty) {
        return (
            <div className="flex flex-col items-center justify-center min-h-400 
                bg-gradient-to-br from-purple-100 via-green to-white-100 
                p-6 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
                    🎮 Tic Tac Toe
                </h1>
                <h2 className="text-xl font-bold text-gray-700 mb-4">Select Difficulty</h2>
                <div className="flex flex-col gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectDifficulty('easy')}
                        className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl shadow-lg font-bold text-lg"
                    >
                        😊 Easy
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectDifficulty('medium')}
                        className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-lg font-bold text-lg"
                    >
                        🤔 Medium
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => selectDifficulty('hard')}
                        className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg font-bold text-lg"
                    >
                        😈 Hard
                    </motion.button>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setGameMode(null)}
                    className="mt-6 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
                >
                    ← Back
                </motion.button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-400 
  bg-gradient-to-br from-purple-100 via-green to-white-100 
  p-6 rounded-2xl shadow-lg">

            <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
                🎮 Tic Tac Toe
            </h1>
            
            <p className="text-sm text-gray-600 mb-4">
                {gameMode === '2player' ? '👥 2 Players' : `🤖 vs Computer (${difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)})`}
            </p>

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
                        : gameMode === 'computer' && winner === 'O'
                            ? "🤖 Computer Wins!"
                            : gameMode === 'computer' && winner === 'X'
                                ? "🎉 You Win!"
                                : `🏆 Winner: ${winner}`
                    : gameMode === 'computer' && !isXNext
                        ? "🤖 Computer thinking..."
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
            
            <motion.button
                onClick={backToMenu}
                whileHover={{ scale: 1.05 }}
                className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
            >
                ← Change Mode
            </motion.button>
           
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
