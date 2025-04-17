import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mode, setMode] = useState(null);
  const router = useRouter();

  const routeTo = (path) => router.push(path);

  if (!mode) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 p-6 transition-opacity duration-700 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-bold">Who do you want to meet?</h1>
        <div className="flex space-x-6">
          <button onClick={() => setMode("justin")} className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded-full">
            JUSTIN
          </button>
          <button onClick={() => setMode("beardedape")} className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-lg rounded-full">
            BEARDEDAPE
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-800 text-white p-6 flex flex-col items-center justify-center space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          {mode === "justin" ? "Welcome to Justin" : "Welcome to BEARDEDAPE.ETH"}
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300">
          {mode === "justin"
            ? "Explore the life and thoughts of Justin Botha — creator, father, and spiritual explorer."
            : "Step into the creations, characters, and mythos of BEARDEDAPE.ETH — where Web3 and lore collide."}
        </p>
      </div>
      <div className="flex space-x-4">
        {mode === "justin" ? (
          <>
            <button onClick={() => routeTo('/bio')} className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-white">
              Bio
            </button>
            <button onClick={() => routeTo('/thoughts')} className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-white">
              Thoughts
            </button>
          </>
        ) : (
          <>
            <button onClick={() => routeTo('/projects')} className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full text-white">
              Projects
            </button>
            <button onClick={() => routeTo('/lore')} className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full text-white">
              Lore
            </button>
          </>
        )}
      </div>
    </main>
  );
}
