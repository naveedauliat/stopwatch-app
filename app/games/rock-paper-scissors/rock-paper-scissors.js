"use client";
import { useState } from "react";

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
    <div className="flex flex-col items-center">
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
    </div>
  );
}
