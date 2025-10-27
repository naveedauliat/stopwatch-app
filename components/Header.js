'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center px-2 text-white font-bold text-xl hover:text-purple-400 transition">
              Stopwatch.lol
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link href="/blog" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition">
              Blog
            </Link>
            <Link href="/games" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition">
              Games
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}