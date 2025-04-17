import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BioPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <Header />
        <div className="max-w-3xl mx-auto space-y-6 p-10">
          <h1 className="text-4xl font-bold text-purple-400">About Justin</h1>
          <p className="text-lg text-gray-300">
            Justin Botha, born August 30, 1993 in Johannesburg, South Africa, is a father, husband,
            developer, creator, and spiritual explorer based in Vietnam. With a background in Sports
            Science, IT, software development, and graphic design, he blends logic and imagination to
            build beautiful digital stories.
          </p>
          <p className="text-gray-400">
            Passionate about Web3 since 2019, Justin explores identity, mythos, and meaning through
            NFT storytelling and lore-based projects under his ENS name, <strong>BeardedApe.ETH</strong>. He also
            uses AI to expand his ideas into code, characters, and platforms that feel like extensions
            of the soul.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
