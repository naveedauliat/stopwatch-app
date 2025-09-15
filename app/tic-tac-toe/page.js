'use client';

import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

const initialBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let line of lines) {
    const [a,b,c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
      ? 'Draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

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
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-900 p-4">
      <div className="flex items-center gap-2 mb-6">
        <Gamepad2 size={32} className="text-white" />
        <h1 className="text-3xl font-bold text-white">Tic Tac Toe</h1>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {board.map((square, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="w-16 h-16 text-2xl font-bold rounded-lg bg-white/80 hover:bg-white transition"
              style={{ color: square === 'X' ? '#8b5cf6' : '#f59e42' }}
            >
              {square}
            </button>
          ))}
        </div>
        <div className="text-lg text-white mb-4">{status}</div>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition"
        >
          Reset Game
        </button>
      </div>
      <a
        href="/"
        className="mt-8 text-blue-200 hover:text-white underline"
      >
        ← Back to Stopwatch
      </a>
      </div>
  );
}