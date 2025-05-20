

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-[#ec5f74] flex flex-col items-center justify-center px-4 py-10 text-white font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 drop-shadow text-white">Admin Panel</h1>
      <div className="grid gap-6 w-full max-w-md">
        <a
          href="/view-shakes"
          className="block w-full text-center py-4 px-6 rounded-xl bg-white/30 hover:bg-white/50 text-white font-semibold text-lg shadow-md transition"
        >
          Objednávky
        </a>
        <a
          href="/support"
          className="block w-full text-center py-4 px-6 rounded-xl bg-white/30 hover:bg-white/50 text-white font-semibold text-lg shadow-md transition"
        >
          Podpora
        </a>
        <a
          href="/add-shake"
          className="block w-full text-center py-4 px-6 rounded-xl bg-white/30 hover:bg-white/50 text-white font-semibold text-lg shadow-md transition"
        >
          Vytvoření shaku
        </a>
      </div>
    </div>
  );
}
