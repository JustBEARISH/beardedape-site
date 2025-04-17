import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <Header />
        <div className="max-w-3xl mx-auto space-y-6 p-10">
          <h1 className="text-4xl font-bold text-purple-400">Daily Thoughts</h1>
          <p className="text-gray-300">
            Here you'll find short-form reflections, notes, and ramblings by Justin — thoughts about
            life, creativity, spirituality, coding breakthroughs, and inner evolution.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
            <li>"Today I realized the best code is the one that reflects my story."</li>
            <li>"AI isn't replacing me — it's extending my imagination."</li>
            <li>"Reminder: drink water, touch grass, deploy dApps."</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
