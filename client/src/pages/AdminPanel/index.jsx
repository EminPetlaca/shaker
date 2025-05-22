import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminPanel() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const correctPassword = "123"; // 🔒 password

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setAuthenticated(true);
    } else {
      toast.error("Nesprávné heslo.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-200 px-4">
        <form
          onSubmit={handlePasswordSubmit}
          className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-xl text-white max-w-md w-full"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Zadejte heslo</h2>
          <input
            type="password"
            placeholder="Heslo"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-3 rounded bg-white/60 text-black placeholder-gray-600 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition"
          >
            Pokračovat
          </button>
        </form>
      </div>
    );
  }

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
