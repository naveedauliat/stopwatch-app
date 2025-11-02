import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-3">Stopwatch.lol</h3>
            <p className="text-gray-300">
              Professional timing solutions with AI-enhanced accuracy and smart features.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-300 hover:text-white transition">
                  Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Feed */}
          <div>
            <h3 className="text-white font-semibold mb-3">Latest Updates</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/stopwatch-evolution" className="text-gray-300 hover:text-white transition">
                  The Evolution of Stopwatches
                </Link>
              </li>
              <li>
                <Link href="/blog/productivity-tips" className="text-gray-300 hover:text-white transition">
                  Productivity Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar - Update this section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Stopwatch.lol. All rights reserved.
            </p>
            <p className="text-center text-gray-400">
              Powered by{' '}
              <a 
                href="https://asepticware.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition"
              >
                asepticware.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}