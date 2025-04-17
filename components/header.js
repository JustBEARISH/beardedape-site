import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-zinc-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-purple-500">
        <Link href="/">BEARDEDAPE.ETH</Link>
      </h1>
      <nav className="space-x-4 text-sm">
        <Link href="/bio" className="hover:text-purple-400 transition">Bio</Link>
        <Link href="/thoughts" className="hover:text-purple-400 transition">Thoughts</Link>
        <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
        <Link href="/lore" className="hover:text-purple-400 transition">Lore</Link>
      </nav>
    </header>
  );
}
