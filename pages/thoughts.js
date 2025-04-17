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
            Here you&apos;ll find short-form reflections, notes, and ramblings by Justin — thoughts about
            life, creativity, spirituality, coding breakthroughs, and inner evolution.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
            <li>&ldquo;Today I realized the best code is the one that reflects my story.&rdquo;</li>
            <li>&ldquo;AI isn&apos;t replacing me — it&apos;s extending my imagination.&rdquo;</li>
            <li>&ldquo;Reminder: drink water, touch grass, deploy dApps.&rdquo;</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
