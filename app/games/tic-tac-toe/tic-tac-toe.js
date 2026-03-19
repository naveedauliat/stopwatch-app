'use client';

import { useState, useEffect } from "react";
import ShareButtons from "/components/ShareButtons";
import Link from "next/link";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [gameMode, setGameMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState({ x: 0, o: 0, draws: 0 });

  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
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
    if (result) { setWinningLine(result.line); return result.winner; }
    return null;
  };

  const getAvailableMoves = (squares) =>
    squares.map((c, i) => c === null ? i : null).filter(i => i !== null);

  const minimax = (squares, isMaximizing) => {
    const result = checkWinner(squares);
    if (result) return result.winner === "O" ? 10 : -10;
    if (!squares.includes(null)) return 0;
    if (isMaximizing) {
      let best = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) { squares[i] = "O"; best = Math.max(best, minimax(squares, false)); squares[i] = null; }
      }
      return best;
    } else {
      let best = Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) { squares[i] = "X"; best = Math.min(best, minimax(squares, true)); squares[i] = null; }
      }
      return best;
    }
  };

  const getComputerMove = (squares) => {
    const available = getAvailableMoves(squares);
    if (!available.length) return null;
    if (difficulty === "easy") return available[Math.floor(Math.random() * available.length)];
    if (difficulty === "medium") {
      if (Math.random() < 0.5) return available[Math.floor(Math.random() * available.length)];
      for (let m of available) { const t = [...squares]; t[m] = "O"; if (checkWinner(t)) return m; }
      for (let m of available) { const t = [...squares]; t[m] = "X"; if (checkWinner(t)) return m; }
      if (available.includes(4)) return 4;
      const corners = [0,2,6,8].filter(c => available.includes(c));
      if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
      return available[Math.floor(Math.random() * available.length)];
    }
    let bestScore = -Infinity, bestMove = available[0];
    for (let m of available) {
      const t = [...squares]; t[m] = "O";
      const s = minimax(t, false);
      if (s > bestScore) { bestScore = s; bestMove = m; }
    }
    return bestMove;
  };

  useEffect(() => {
    if (gameMode === "computer" && !isXNext && !winner) {
      const timer = setTimeout(() => {
        const move = getComputerMove(board);
        if (move !== null) {
          const newBoard = [...board]; newBoard[move] = "O";
          setBoard(newBoard); setIsXNext(true);
          const w = calculateWinner(newBoard);
          if (w) { setWinner(w); setScore(s => ({ ...s, o: s.o + 1 })); }
          else if (!newBoard.includes(null)) { setWinner("Draw"); setScore(s => ({ ...s, draws: s.draws + 1 })); }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, gameMode, winner, board]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    if (gameMode === "computer" && !isXNext) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const w = calculateWinner(newBoard);
    if (w) {
      setWinner(w);
      if (w === "X") setScore(s => ({ ...s, x: s.x + 1 }));
      else setScore(s => ({ ...s, o: s.o + 1 }));
    } else if (!newBoard.includes(null)) {
      setWinner("Draw"); setScore(s => ({ ...s, draws: s.draws + 1 }));
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); setIsXNext(true); setWinner(null); setWinningLine([]);
  };

  const backToMenu = () => {
    resetGame(); setGameMode(null); setDifficulty(null); setScore({ x: 0, o: 0, draws: 0 });
  };

  // ─── Mode selection ───────────────────────────────────────────────────────
  if (!gameMode) {
    return (
      <div className="w-full max-w-md mx-auto space-y-5">
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/25 shadow-2xl text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-white mb-2">Choose Game Mode</h2>
          <p className="text-white/70 text-sm mb-8">Play against the computer or challenge a friend</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setGameMode("2player")}
              className="w-full py-4 bg-purple-600/60 hover:bg-purple-600/80 border border-purple-400/60 hover:border-purple-300/80 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              👥 2 Players
            </button>
            <button
              onClick={() => setGameMode("computer")}
              className="w-full py-4 bg-blue-600/60 hover:bg-blue-600/80 border border-blue-400/60 hover:border-blue-300/80 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              🤖 vs Computer
            </button>
          </div>
        </div>
        <NavFooter />
      </div>
    );
  }

  // ─── Difficulty selection ─────────────────────────────────────────────────
  if (gameMode === "computer" && !difficulty) {
    return (
      <div className="w-full max-w-md mx-auto space-y-5">
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/25 shadow-2xl text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-white mb-2">Select Difficulty</h2>
          <p className="text-white/70 text-sm mb-8">How smart should the computer be?</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setDifficulty("easy")}
              className="w-full py-4 bg-green-600/60 hover:bg-green-600/80 border border-green-400/60 hover:border-green-300/80 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              😊 Easy
            </button>
            <button
              onClick={() => setDifficulty("medium")}
              className="w-full py-4 bg-yellow-600/60 hover:bg-yellow-600/80 border border-yellow-400/60 hover:border-yellow-300/80 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              🤔 Medium
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              className="w-full py-4 bg-red-600/60 hover:bg-red-600/80 border border-red-400/60 hover:border-red-300/80 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              😈 Hard (Unbeatable)
            </button>
          </div>
          <button
            onClick={() => setGameMode(null)}
            className="mt-6 text-white/60 hover:text-white text-sm transition font-medium"
          >
            ← Back to modes
          </button>
        </div>
        <NavFooter />
      </div>
    );
  }

  const xLabel = gameMode === "computer" ? "You (X)" : "Player X";
  const oLabel = gameMode === "computer" ? "Computer (O)" : "Player O";

  const statusText = winner
    ? winner === "Draw" ? "🤝 It's a Draw!"
      : gameMode === "computer" && winner === "O" ? "🤖 Computer Wins!"
      : gameMode === "computer" && winner === "X" ? "🎉 You Win!"
      : `🏆 Player ${winner} Wins!`
    : gameMode === "computer" && !isXNext ? "🤖 Computer thinking..."
    : `Next: ${isXNext ? "❌ X" : "⭕ O"}`;

  const statusColor = winner
    ? winner === "Draw" ? "text-yellow-300"
    : winner === "X" ? "text-green-300"
    : gameMode === "computer" ? "text-red-300"
    : "text-blue-300"
    : "text-white";

  return (
    <div className="w-full max-w-md mx-auto space-y-5">
      {/* Score board */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-600/30 border border-blue-400/50 rounded-2xl p-3 text-center">
          <div className="text-2xl font-bold text-blue-200">{score.x}</div>
          <div className="text-blue-200 text-xs uppercase tracking-widest mt-0.5 font-semibold">{xLabel}</div>
        </div>
        <div className="bg-yellow-600/30 border border-yellow-400/50 rounded-2xl p-3 text-center">
          <div className="text-2xl font-bold text-yellow-200">{score.draws}</div>
          <div className="text-yellow-200 text-xs uppercase tracking-widest mt-0.5 font-semibold">Draws</div>
        </div>
        <div className="bg-red-600/30 border border-red-400/50 rounded-2xl p-3 text-center">
          <div className="text-2xl font-bold text-red-200">{score.o}</div>
          <div className="text-red-200 text-xs uppercase tracking-widest mt-0.5 font-semibold">{oLabel}</div>
        </div>
      </div>

      {/* Game board */}
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/25 shadow-2xl">
        {/* Mode badge */}
        <div className="text-center mb-5">
          <span className="inline-block text-xs text-white/80 font-semibold uppercase tracking-widest bg-white/15 border border-white/25 px-4 py-1.5 rounded-full">
            {gameMode === "2player" ? "👥 2 Players" : `🤖 vs Computer · ${difficulty}`}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-full aspect-square flex items-center justify-center rounded-2xl text-4xl font-bold transition-all duration-200 border-2 ${
                winningLine.includes(index)
                  ? "bg-green-500/40 border-green-400/80 animate-pulse"
                  : cell === "X"
                  ? "bg-blue-500/35 border-blue-400/60 text-blue-200 cursor-default"
                  : cell === "O"
                  ? "bg-red-500/35 border-red-400/60 text-red-200 cursor-default"
                  : winner
                  ? "bg-white/10 border-white/20 cursor-default"
                  : "bg-white/15 border-white/30 hover:bg-white/30 hover:border-white/50 cursor-pointer hover:scale-105 active:scale-95"
              }`}
            >
              {cell === "X" && "❌"}
              {cell === "O" && "⭕"}
            </button>
          ))}
        </div>

        {/* Status */}
        <div className={`text-center text-xl font-bold mb-5 ${statusColor}`}>
          {statusText}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          {winner && (
            <button
              onClick={resetGame}
              className="px-6 py-2.5 bg-white/25 hover:bg-white/40 border border-white/40 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Play Again
            </button>
          )}
          <button
            onClick={backToMenu}
            className="px-6 py-2.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white/80 hover:text-white font-medium rounded-xl transition-all duration-200"
          >
            ← Change Mode
          </button>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/games" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/35 text-white font-medium rounded-xl text-sm transition">
          ⬅ All Games
        </Link>
        <Link href="/games/rock-paper-scissors" className="px-4 py-2 bg-orange-500/35 hover:bg-orange-500/50 border border-orange-400/50 text-orange-100 rounded-xl text-sm font-medium transition">
          ✊ Rock Paper Scissors
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
          url="https://stopwatch.lol/games/tic-tac-toe"
          title="Play Tic Tac Toe Online Free — Stopwatch.lol 🎮"
        />
      </div>
    </div>
  );
}

function NavFooter() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Link href="/games" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/35 text-white font-medium rounded-xl text-sm transition">
        ⬅ All Games
      </Link>
      <Link href="/games/rock-paper-scissors" className="px-4 py-2 bg-orange-500/35 hover:bg-orange-500/50 border border-orange-400/50 text-orange-100 rounded-xl text-sm font-medium transition">
        ✊ Rock Paper Scissors
      </Link>
      <Link href="/" className="px-4 py-2 bg-blue-500/35 hover:bg-blue-500/50 border border-blue-400/50 text-blue-100 rounded-xl text-sm font-medium transition">
        ⏱ Stopwatch
      </Link>
    </div>
  );
}
