import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-4 mb-6">
      <Link
        href="/games"
        className="text-sm font-medium px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
      >
        ⬅ Back to Games
      </Link>
      <Link
        href="/"
        className="text-sm font-medium px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
      >
        🏠 Back to Stopwatch
      </Link>
    </div>
  );
}
