import { useRouter } from "next/router";
import { DATA } from "../../data/themes";

export default function ThemePage() {
  const router = useRouter();
  const { name } = router.query;

  const themeKey = name
    ? name.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  const content = DATA[themeKey];

  if (!content) return <div className="p-6">Loading…</div>;

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 border-b bg-white shadow-sm flex justify-between">
        <h1 className="font-bold text-xl">{themeKey}</h1>
        <button className="yinyang-btn" onClick={() => router.push("/")}>
          ← Back
        </button>
      </header>

      <main className="grid md:grid-cols-3 gap-4 p-6 max-w-6xl mx-auto">
        {["Bible", "Quran", "Gita"].map((src) => (
          <div key={src} className="yinyang-card">
            <h2 className="font-semibold mb-3">{src}</h2>
            {content[src].map((v, i) => (
              <div key={i} className="mb-4 border-t pt-2">
                <p className="text-sm text-gray-500 mb-1">{v.ref}</p>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
