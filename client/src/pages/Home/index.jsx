import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] font-sans text-white">
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
      <div className=" px-6 py-3 rounded-lg">
          <img
            src="/logo-main.png"
            alt="Šejkyho Milkšejky"
            className="h-16 pointer-events-none select-none"
          />
        </div>
        <nav>
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hlavní sekce */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <img
          src="/kluk-s-shakem.png"
          alt="Kluk s Milkšejkem"
          className="max-w-sm w-full mb-6 rounded-lg pointer-events-none select-none"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Dej si úžasný milkšejk!
        </h1>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-pink-100 transition select-none">
        <Link to="/add-shake">
          Vytvoř si svůj shake
          </Link>
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-auto text-center py-4 text-white text-sm pointer-events-none select-none">
        &copy; 2025 Šejkyho Milkšejky
      </footer>
    </div>
  );
}
