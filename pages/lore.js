import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LorePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <Header />
        <div className="max-w-4xl mx-auto space-y-6 p-10">
          <h1 className="text-4xl font-bold text-indigo-400">Lore Archive</h1>
          <p className="text-gray-300">
            Dive into the mythos behind Justin’s creations. Explore timelines, spiritual themes,
            alien conspiracies, character arcs, and more.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-semibold text-indigo-300">The Annunaki Theory</h2>
              <p className="text-sm text-gray-400">
                A collection of thoughts and re-imagined narratives where alien beings play a role
                in ancient human development, reinterpreted through the lens of Web3.
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-semibold text-indigo-300">Eye of Horus</h2>
              <p className="text-sm text-gray-400">
                Symbolism, meaning, and character influence tied to Justin’s tattoos and spiritual
                beliefs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
