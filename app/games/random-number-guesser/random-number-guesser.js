'use client';

import { useState, useRef } from "react";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

const MAX = 100;
const MAX_ATTEMPTS = 10;

function newTarget() {
  return Math.floor(Math.random() * (MAX + 1));
}

export default function NumberGuesser() {
  const [target, setTarget] = useState(newTarget);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef(null);

  const getHint = (num) => {
    const diff = Math.abs(num - target);
    if (num === target) return { text: "Correct!", color: "text-green-300", bg: "bg-green-500/30 border-green-400/50" };
    const direction = num < target ? "⬆️ Too Low" : "⬇️ Too High";
    const heat =
      diff <= 3  ? "🔥 Burning hot!" :
      diff <= 8  ? "♨️ Very warm"    :
      diff <= 15 ? "🌡️ Warm"        :
      diff <= 25 ? "❄️ Cool"         : "🧊 Ice cold";
    return {
      text: `${direction} · ${heat}`,
      color: diff <= 8 ? "text-orange-300" : diff <= 20 ? "text-yellow-300" : "text-cyan-300",
      bg:   diff <= 8 ? "bg-orange-500/25 border-orange-400/40" : diff <= 20 ? "bg-yellow-500/25 border-yellow-400/40" : "bg-cyan-500/20 border-cyan-400/35",
    };
  };

  const handleGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num) || num < 0 || num > MAX) return;
    const newAttempts = attempts + 1;
    const hint = getHint(num);
    setGuesses(g => [{ value: num, ...hint }, ...g]);
    setAttempts(newAttempts);
    setGuess("");
    inputRef.current?.focus();
    if (num === target) setGameOver("win");
    else if (newAttempts >= MAX_ATTEMPTS) setGameOver("lose");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleGuess();
  };

  const giveUp = () => setGameOver("quit");

  const reset = () => {
    setTarget(newTarget()); setGuess(""); setAttempts(0); setGuesses([]); setGameOver(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const attemptsLeft = MAX_ATTEMPTS - attempts;
  const progressPct = (attempts / MAX_ATTEMPTS) * 100;

  return (
    <div className="w-full max-w-md mx-auto space-y-5">

      {/* Header stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-black/30 border border-white/30 rounded-2xl p-3 text-center">
          <div className="text-2xl font-bold text-white">{attempts}</div>
          <div className="text-white/80 text-xs uppercase tracking-widest mt-0.5 font-semibold">Guesses</div>
        </div>
        <div className={`border rounded-2xl p-3 text-center ${
          attemptsLeft <= 2 ? "bg-red-600/40 border-red-400/60" :
          attemptsLeft <= 4 ? "bg-yellow-600/40 border-yellow-400/60" :
          "bg-green-600/35 border-green-400/55"
        }`}>
          <div className={`text-2xl font-bold ${
            attemptsLeft <= 2 ? "text-red-200" :
            attemptsLeft <= 4 ? "text-yellow-200" : "text-green-200"
          }`}>{attemptsLeft}</div>
          <div className="text-white/80 text-xs uppercase tracking-widest mt-0.5 font-semibold">Left</div>
        </div>
        <div className="bg-black/30 border border-white/30 rounded-2xl p-3 text-center">
          <div className="text-2xl font-bold text-white">0–{MAX}</div>
          <div className="text-white/80 text-xs uppercase tracking-widest mt-0.5 font-semibold">Range</div>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/25 shadow-2xl">

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-white/70 mb-1.5 font-medium">
            <span>Attempts used</span>
            <span>{attempts} / {MAX_ATTEMPTS}</span>
          </div>
          <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden border border-white/10">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                progressPct >= 80 ? "bg-red-400" :
                progressPct >= 60 ? "bg-yellow-400" : "bg-green-400"
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Win state */}
        {gameOver === "win" && (
          <div className="text-center mb-6 py-5 px-6 bg-green-600/35 border border-green-400/60 rounded-2xl">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-green-200 text-xl font-bold">You got it!</div>
            <div className="text-white/80 text-sm mt-1">
              The number was <strong className="text-white">{target}</strong> — guessed in{" "}
              <strong className="text-green-300">{attempts}</strong> attempt{attempts !== 1 ? "s" : ""}
            </div>
          </div>
        )}

        {/* Lose / quit state */}
        {(gameOver === "lose" || gameOver === "quit") && (
          <div className="text-center mb-6 py-5 px-6 bg-red-600/35 border border-red-400/60 rounded-2xl">
            <div className="text-4xl mb-2">{gameOver === "quit" ? "🏳️" : "😔"}</div>
            <div className="text-red-200 text-xl font-bold">
              {gameOver === "quit" ? "Better luck next time!" : "Out of guesses!"}
            </div>
            <div className="text-white/80 text-sm mt-1">
              The number was <strong className="text-white text-lg">{target}</strong>
            </div>
          </div>
        )}

        {/* Input area */}
        {!gameOver && (
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="number"
                min={0}
                max={MAX}
                value={guess}
                onChange={e => setGuess(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter 0–100"
                className="flex-1 bg-white/20 border border-white/40 focus:border-white/70 focus:bg-white/25 rounded-xl px-4 py-3 text-white text-center text-xl font-bold placeholder-white/50 outline-none transition-all"
              />
              <button
                onClick={handleGuess}
                disabled={guess === ""}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-white/15 disabled:text-white/40 disabled:cursor-not-allowed border border-blue-400/70 disabled:border-white/20 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                Guess
              </button>
            </div>
            <button
              onClick={giveUp}
              className="w-full py-2 text-white/60 hover:text-white/90 text-sm transition border border-transparent hover:border-white/20 hover:bg-white/10 rounded-xl font-medium"
            >
              🏳️ Give up (reveal answer)
            </button>
          </div>
        )}

        {/* Play again */}
        {gameOver && (
          <button
            onClick={reset}
            className="w-full py-3 bg-white/25 hover:bg-white/35 border border-white/40 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            🔄 Play Again
          </button>
        )}
      </div>

      {/* Guess history */}
      {guesses.length > 0 && (
        <div className="bg-black/25 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
            Guess History
          </h3>
          <div className="space-y-2">
            {guesses.map((g, i) => (
              <div key={i} className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm border ${g.bg}`}>
                <span className="text-white/70 text-xs font-mono w-6">#{attempts - i}</span>
                <span className="text-white font-bold text-lg">{g.value}</span>
                <span className={`text-xs font-semibold ${g.color}`}>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How to play */}
      <div className="bg-black/25 rounded-2xl p-5 border border-white/20 text-sm">
        <h3 className="text-white font-bold mb-3">How to Play</h3>
        <ul className="space-y-1.5 text-white/80">
          <li>🎯 Guess the secret number between 0 and {MAX}</li>
          <li>🌡️ Get hot/cold hints after each guess</li>
          <li>🔢 You have {MAX_ATTEMPTS} attempts to find it</li>
          <li>⌨️ Press Enter to submit your guess</li>
        </ul>
      </div>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/games" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/35 text-white font-medium rounded-xl text-sm transition">
          ⬅ All Games
        </Link>
        <Link href="/games/tic-tac-toe" className="px-4 py-2 bg-purple-500/35 hover:bg-purple-500/50 border border-purple-400/50 text-purple-100 rounded-xl text-sm font-medium transition">
          🎮 Tic Tac Toe
        </Link>
        <Link href="/games/rock-paper-scissors" className="px-4 py-2 bg-orange-500/35 hover:bg-orange-500/50 border border-orange-400/50 text-orange-100 rounded-xl text-sm font-medium transition">
          ✊ Rock Paper Scissors
        </Link>
        <Link href="/" className="px-4 py-2 bg-blue-500/35 hover:bg-blue-500/50 border border-blue-400/50 text-blue-100 rounded-xl text-sm font-medium transition">
          ⏱ Stopwatch
        </Link>
      </div>

      <div className="flex justify-center">
        <ShareButtons
          url="https://stopwatch.lol/games/random-number-guesser"
          title="Play Number Guesser Online Free — Stopwatch.lol 🔢"
        />
      </div>
    </div>
  );
}
