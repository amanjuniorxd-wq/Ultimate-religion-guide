import Link from "next/link";
import { THEMES } from "../data/themes";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 text-center border-b bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Parallel Themes</h1>
        <p className="text-gray-600">Bible • Qur’an • Gita — side by side</p>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl mb-4 font-semibold">Browse by Theme</h2>
        <div className="flex flex-wrap gap-3">
          {THEMES.map((t) => (
            <Link key={t} href={`/theme/${t.toLowerCase().replace(" ", "-")}`}>
              <span className="yinyang-btn cursor-pointer">{t}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
