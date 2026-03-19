"use client";
import { useState, useEffect } from "react";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

const CHOICES = [
  { id: "Rock",     emoji: "✊", label: "Rock",     beats: "Scissors" },
  { id: "Paper",    emoji: "📄", label: "Paper",    beats: "Rock"     },
  { id: "Scissors", emoji: "✂️", label: "Scissors", beats: "Paper"    },
];

export default function RockPaperScissors() {
  const [player, setPlayer]     = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult]     = useState(null);
  const [score, setScore]       = useState({ wins: 0, draws: 0, losses: 0 });
  const [streak, setStreak]     = useState(0);
  const [history, setHistory]   = useState([]);
  const [revealing, setRevealing] = useState(false);

  const play = (choice) => {
    if (revealing) return;
    setRevealing(true);
    setPlayer(choice);
    setComputer(null);
    setResult(null);

    setTimeout(() => {
      const comp = CHOICES[Math.floor(Math.random() * 3)];
      setComputer(comp);
      let r;
      if (choice.id === comp.id) {
        r = "draw";
        setScore(s => ({ ...s, draws: s.draws + 1 }));
        setStreak(0);
      } else if (choice.beats === comp.id) {
        r = "win";
        setScore(s => ({ ...s, wins: s.wins + 1 }));
        setStreak(st => st + 1);
      } else {
        r = "lose";
        setScore(s => ({ ...s, losses: s.losses + 1 }));
        setStreak(0);
      }
      setResult(r);
      setHistory(h => [{ player: choice, computer: comp, result: r }, ...h].slice(0, 5));
      setRevealing(false);
    }, 600);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "r" || e.key === "R") play(CHOICES[0]);
      if (e.key === "p" || e.key === "P") play(CHOICES[1]);
      if (e.key === "s" || e.key === "S") play(CHOICES[2]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealing]);

  const reset = () => {
    setPlayer(null); setComputer(null); setResult(null);
    setScore({ wins: 0, draws: 0, losses: 0 });
    setStreak(0); setHistory([]);
  };

  const resultConfig = {
    win:  { label: "You Win! 🎉",      color: "text-green-300",  bg: "bg-green-500/30 border-green-400/60" },
    lose: { label: "You Lose! 😔",     color: "text-red-300",    bg: "bg-red-500/30 border-red-400/60"   },
    draw: { label: "It's a Draw! 🤝",  color: "text-yellow-300", bg: "bg-yellow-500/30 border-yellow-400/60" },
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5">

      {/* Score Board */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500/25 border border-green-400/50 rounded-2xl p-4 text-center">
          <div className="text-3xl font-bold text-green-300">{score.wins}</div>
          <div className="text-green-300 text-xs uppercase tracking-widest mt-1 font-semibold">Wins</div>
        </div>
        <div className="bg-yellow-500/25 border border-yellow-400/50 rounded-2xl p-4 text-center">
          <div className="text-3xl font-bold text-yellow-300">{score.draws}</div>
          <div className="text-yellow-300 text-xs uppercase tracking-widest mt-1 font-semibold">Draws</div>
        </div>
        <div className="bg-red-500/25 border border-red-400/50 rounded-2xl p-4 text-center">
          <div className="text-3xl font-bold text-red-300">{score.losses}</div>
          <div className="text-red-300 text-xs uppercase tracking-widest mt-1 font-semibold">Losses</div>
        </div>
      </div>

      {/* Streak */}
      {streak >= 2 && (
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/40 border border-orange-400/60 text-orange-200 text-sm font-bold px-5 py-2 rounded-full shadow-lg">
            🔥 {streak} win streak!
          </span>
        </div>
      )}

      {/* Battle Display */}
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/25 shadow-2xl">
        <div className="flex items-center justify-around mb-6">

          {/* Player Side */}
          <div className="text-center flex-1">
            <div className="text-white/80 text-xs uppercase tracking-widest mb-3 font-semibold">You</div>
            <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center text-5xl border-2 transition-all duration-300 ${
              player
                ? result === "win"  ? "bg-green-500/35 border-green-400/70"
                : result === "lose" ? "bg-red-500/35 border-red-400/70"
                : result === "draw" ? "bg-yellow-500/35 border-yellow-400/70"
                : "bg-white/20 border-white/40"
                : "bg-white/10 border-white/25"
            }`}>
              {player ? player.emoji : "❓"}
            </div>
            {player && <div className="text-white/90 text-sm mt-2 font-medium">{player.label}</div>}
          </div>

          {/* VS */}
          <div className="text-white/60 font-bold text-2xl px-4">VS</div>

          {/* Computer Side */}
          <div className="text-center flex-1">
            <div className="text-white/80 text-xs uppercase tracking-widest mb-3 font-semibold">Computer</div>
            <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center text-5xl border-2 transition-all duration-300 ${
              revealing ? "animate-pulse bg-white/20 border-white/40" :
              computer
                ? result === "lose" ? "bg-red-500/35 border-red-400/70"
                : result === "win"  ? "bg-green-500/35 border-green-400/70"
                : "bg-yellow-500/35 border-yellow-400/70"
                : "bg-white/10 border-white/25"
            }`}>
              {revealing ? "🤔" : computer ? computer.emoji : "❓"}
            </div>
            {computer && !revealing && <div className="text-white/90 text-sm mt-2 font-medium">{computer.label}</div>}
          </div>
        </div>

        {/* Result Banner */}
        {result && (
          <div className={`text-center py-3 px-6 rounded-2xl border ${resultConfig[result].bg} mb-5`}>
            <span className={`text-xl font-bold ${resultConfig[result].color}`}>
              {resultConfig[result].label}
            </span>
            {result === "win" && (
              <p className="text-white/80 text-xs mt-1">{player.label} beats {computer.label}</p>
            )}
            {result === "lose" && (
              <p className="text-white/80 text-xs mt-1">{computer.label} beats {player.label}</p>
            )}
          </div>
        )}

        {/* Choice Buttons */}
        <div className="flex justify-center gap-4">
          {CHOICES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => play(c)}
              disabled={revealing}
              className="group flex flex-col items-center gap-2 bg-white/20 hover:bg-white/35 disabled:opacity-40 disabled:cursor-not-allowed border border-white/35 hover:border-white/60 rounded-2xl p-4 transition-all duration-200 hover:scale-105 active:scale-95 min-w-[80px] shadow-lg"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{c.emoji}</span>
              <span className="text-white text-xs font-semibold">{c.label}</span>
              <span className="text-white/60 text-xs font-mono">{["R","P","S"][i]}</span>
            </button>
          ))}
        </div>

        {/* Keyboard hint */}
        <div className="flex justify-center gap-6 mt-4 text-white/60 text-xs">
          <span><kbd className="bg-white/20 border border-white/30 px-2 py-0.5 rounded font-mono text-white/80">R</kbd> Rock</span>
          <span><kbd className="bg-white/20 border border-white/30 px-2 py-0.5 rounded font-mono text-white/80">P</kbd> Paper</span>
          <span><kbd className="bg-white/20 border border-white/30 px-2 py-0.5 rounded font-mono text-white/80">S</kbd> Scissors</span>
        </div>
      </div>

      {/* Match History */}
      {history.length > 0 && (
        <div className="bg-black/25 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-widest">Recent Rounds</h3>
            <button onClick={reset} className="text-white/60 hover:text-white text-xs transition font-medium">Reset Score</button>
          </div>
          <div className="space-y-2">
            {history.map((h, i) => (
              <div key={i} className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm ${
                h.result === "win"  ? "bg-green-500/25 border border-green-400/40" :
                h.result === "lose" ? "bg-red-500/25 border border-red-400/40" :
                                      "bg-yellow-500/25 border border-yellow-400/40"
              }`}>
                <span className="text-white/90 font-medium">{h.player.emoji} {h.player.label}</span>
                <span className={`font-bold text-xs uppercase tracking-wide ${
                  h.result === "win" ? "text-green-300" : h.result === "lose" ? "text-red-300" : "text-yellow-300"
                }`}>{h.result}</span>
                <span className="text-white/90 font-medium">{h.computer.label} {h.computer.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How to Play */}
      <div className="bg-black/25 rounded-2xl p-5 border border-white/20 text-sm">
        <h3 className="text-white font-bold mb-3">How to Play</h3>
        <ul className="space-y-1.5 text-white/80">
          <li>✊ <strong className="text-white">Rock</strong> beats Scissors</li>
          <li>📄 <strong className="text-white">Paper</strong> beats Rock</li>
          <li>✂️ <strong className="text-white">Scissors</strong> beat Paper</li>
        </ul>
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/games" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/35 text-white hover:text-white rounded-xl text-sm font-medium transition">
          ⬅ All Games
        </Link>
        <Link href="/games/tic-tac-toe" className="px-4 py-2 bg-purple-500/35 hover:bg-purple-500/50 border border-purple-400/50 text-purple-100 rounded-xl text-sm font-medium transition">
          🎮 Tic Tac Toe
        </Link>
        <Link href="/games/random-number-guesser" className="px-4 py-2 bg-green-500/35 hover:bg-green-500/50 border border-green-400/50 text-green-100 rounded-xl text-sm font-medium transition">
          🔢 Number Guesser
        </Link>
        <Link href="/" className="px-4 py-2 bg-blue-500/35 hover:bg-blue-500/50 border border-blue-400/50 text-blue-100 rounded-xl text-sm font-medium transition">
          ⏱ Stopwatch
        </Link>
      </div>

      <div className="flex justify-center">
        <ShareButtons
          url="https://stopwatch.lol/games/rock-paper-scissors"
          title="Play Rock Paper Scissors Online Free — Stopwatch.lol 🎮"
        />
      </div>
    </div>
  );
}
