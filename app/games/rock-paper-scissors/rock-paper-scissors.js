"use client";
import { useState } from "react";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

export default function RockPaperScissors() {
    const choices = ["Rock", "Paper", "Scissors"];
    const [player, setPlayer] = useState(null);
    const [computer, setComputer] = useState(null);
    const [result, setResult] = useState("");

    function play(choice) {
        const compChoice = choices[Math.floor(Math.random() * 3)];
        setPlayer(choice);
        setComputer(compChoice);

        if (choice === compChoice) setResult("🤝 It's a draw!");
        else if (
            (choice === "Rock" && compChoice === "Scissors") ||
            (choice === "Paper" && compChoice === "Rock") ||
            (choice === "Scissors" && compChoice === "Paper")
        )
            setResult("🎉 You win!");
        else setResult("❌ You lose!");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-400 
      bg-gradient-to-br from-blue-50 via-black to-blue-100 p-6 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
            <div className="flex gap-4 mb-6">
                {choices.map((choice) => (
                    <button
                        key={choice}
                        onClick={() => play(choice)}
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 shadow-md"
                    >
                        {choice}
                    </button>
                ))}
            </div>
            <div className="text-lg">
                <p>You: {player || "-"}</p>
                <p>Computer: {computer || "-"}</p>
                <p className="mt-4 font-semibold">{result}</p>
            </div>

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
                        href="/games/random-number-guesser"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                    >
                        🔢 Play Number Guesser
                    </Link>
                </div>
            </div>
             <div className="mt-6">
                <ShareButtons
                    url="https://stopwatch.lol/games/rock-paper-scissors"
                    title="Play Tic Tac Toe Online — Stopwatch.lol 🎮"
                />
            </div>
        </div>
    );
}
