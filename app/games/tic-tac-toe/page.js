'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Gamepad2, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';

// Firework component
function Firework({ style }) {
  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        ...style,
        zIndex: 100,
      }}
    >
      <svg width="80" height="80">
        <g>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="40"
              y1="40"
              x2={40 + 30 * Math.cos((i * 2 * Math.PI) / 12)}
              y2={40 + 30 * Math.sin((i * 2 * Math.PI) / 12)}
              stroke={`hsl(${i * 30}, 90%, 60%)`}
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

const initialBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [blink, setBlink] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const url = "https://stopwatch.lol.com/tictactoe"; // 🔗 replace with your domain
  const text = "🎮 Play Tic Tac Toe online with animations and fireworks!";

  const winnerObj = calculateWinner(board);
  const winner = winnerObj?.winner;
  const winningLine = winnerObj?.line;

  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
      ? 'Draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  // Blinking effect when a player wins
  useEffect(() => {
    let blinkInterval;
    if (winner) {
      setShowFireworks(true);
      setBlink(true);
      blinkInterval = setInterval(() => setBlink(b => !b), 350);
      // Hide fireworks after 2.5s
      setTimeout(() => setShowFireworks(false), 2500);
    } else {
      setBlink(false);
      setShowFireworks(false);
    }
    return () => clearInterval(blinkInterval);
  }, [winner]);

  function handleClick(i) {
    if (board[i] || winner) return;
    const nextBoard = board.slice();
    nextBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setBoard(initialBoard);
    setXIsNext(true);
    setBlink(false);
    setShowFireworks(false);
  }

  // Firework positions (corners and center)
  const fireworkPositions = [
    { top: '10%', left: '10%' },
    { top: '10%', right: '10%' },
    { bottom: '10%', left: '10%' },
    { bottom: '10%', right: '10%' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  ];

  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>Tic Tac Toe Game | Play Online with Animations</title>
        <meta
          name="description"
          content="Play Tic Tac Toe online for free with animations, blinking effects, and fireworks. Fun, interactive, and mobile-friendly game!"
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Tic Tac Toe Game" />
        <meta property="og:description" content={text} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/preview.png`} />
      </Head>

      {/* ✅ Game UI */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-900 p-4">
        {/* Fireworks */}
        {showFireworks &&
          fireworkPositions.map((style, idx) => <Firework key={idx} style={style} />)}

        <div className="flex items-center gap-2 mb-6">
          <Gamepad2 size={32} className="text-white" />
          <h1 className="text-3xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {board.map((square, i) => {
              const isWinning = winner && winningLine?.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`w-16 h-16 text-2xl font-bold rounded-lg bg-white/80 hover:bg-white transition
                    ${isWinning && blink ? 'bg-yellow-300 animate-pulse' : ''}
                  `}
                  style={{
                    color: square === 'X' ? '#8b5cf6' : '#f59e42',
                    border: isWinning ? '3px solid #fbbf24' : 'none',
                    transition: 'background 0.2s, border 0.2s'
                  }}
                >
                  {square}
                </button>
              );
            })}
          </div>

          <div className="text-lg text-white mb-4">{status}</div>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition"
          >
            Reset Game
          </button>

          {/* ✅ Share Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            </div>
        </div>
      
            
              <a
                href="/games"
                className="mt-8 text-blue-200 hover:text-white underline"
              >
                ← Back to Games
              </a>
            
          </div>
    </>
  );
}