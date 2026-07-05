"use client";

import Link from "next/link";

export default function Footer() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Stopwatch.lol - AI-Enhanced Online Timer',
        text: 'Check out this amazing free online stopwatch!',
        url: 'https://stopwatch.lol'
      });
    } else {
      navigator.clipboard.writeText('https://stopwatch.lol');
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⏱️</span>
              </div>
              <span className="text-white font-bold text-xl">Stopwatch.lol</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              AI-enhanced precision timing for sports, productivity, and everyday use. 
              Free, accurate, and works everywhere.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/stopwatch.lol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-pink-400 transition-colors p-1"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Online Stopwatch
                </Link>
              </li>
              <li>
                <Link href="/countdown" className="text-white/70 hover:text-white transition-colors text-sm">
                  Countdown Timer
                </Link>
              </li>
              <li>
                <Link href="/timer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Preset Timers
                </Link>
              </li>
              <li>
                <Link href="/full-screen-stopwatch" className="text-white/70 hover:text-white transition-colors text-sm">
                  Full Screen Stopwatch
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                  Blog & Tips
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-white transition-colors text-sm">
                  News Archive
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/70 hover:text-white transition-colors text-sm">
                  Timing Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/productivity-tips" className="text-white/70 hover:text-white transition-colors text-sm">
                  Productivity Tips
                </Link>
              </li>
              <li>
                <Link href="/blog/sports-timing" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sports Timing
                </Link>
              </li>
              <li>
                <Link href="/blog/stopwatch-evolution" className="text-white/70 hover:text-white transition-colors text-sm">
                  Stopwatch History
                </Link>
              </li>
              <li>
                <Link href="/blog/stopwatch-human-life" className="text-white/70 hover:text-white transition-colors text-sm">
                  Impact on Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@stopwatch.lol" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2026 Stopwatch.lol. All rights reserved. Made with ⏱️ for precise timing.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-white/60 text-sm">Share:</span>
            <button
              onClick={handleShare}
              className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}