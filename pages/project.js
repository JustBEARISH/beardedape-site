import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <Header />
        <div className="max-w-4xl mx-auto space-y-6 p-10">
          <h1 className="text-4xl font-bold text-indigo-400">Creative Projects</h1>
          <p className="text-gray-300">
            A showcase of Justin's Web3 and AI experiments, including NFT character collections,
            games, and tools built on Abstract Chain, Ethereum, and more.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-semibold text-indigo-300">Grind Guard</h2>
              <p className="text-sm text-gray-400">
                A Web3 security simulation built for the GRIND Hackathon. Features a fake phishing
                scanner, smart contract warnings, and decentralized threat reports.
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-semibold text-indigo-300">Lil Bape</h2>
              <p className="text-sm text-gray-400">
                A cartoon-based ape character representing Justin's Web3 identity. Lives across
                stories, games, and on-chain collectibles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
