export default function Footer() {
    return (
      <footer className="w-full bg-black border-t border-zinc-800 text-gray-400 text-sm py-6 px-6 flex flex-col md:flex-row items-center justify-between mt-10">
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} BEARDEDAPE.ETH — Built by Justin Botha</p>
        <div className="space-x-4">
          <a
            href="https://x.com/BeardedApe_eth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            X (Twitter)
          </a>
          <a
            href="mailto:justin@beardedape.eth"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>
        </div>
      </footer>
    );
  }
  