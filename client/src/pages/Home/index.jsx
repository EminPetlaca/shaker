import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] font-sans text-white">

      {/* Header */}
      <Header />

      {/* Hlavní sekce */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <img
          src="/kluk-s-shakem.png"
          alt="Kluk s Milkšejkem"
          className="max-w-sm w-full mb-6 rounded-lg pointer-events-none select-none hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Dej si úžasný milkšejk!
        </h1>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-pink-100 transition select-none hover:scale-105">
          <Link to="/add-shake">
            Vytvoř si svůj shake
          </Link>
        </button>
      </main>

      {/* Výhody služby */}
      <section className="py-10 px-6 text-center bg-white/20 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow">Proč si vytvořit vlastní shake?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg bg-white/30 backdrop-blur-md shadow hover:scale-105 transition">
            <p className="text-xl font-bold mb-2">Vlastní styl 🎨</p>
            <p className="text-sm">Nekonečné možnosti kombinací podle chuti.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/30 backdrop-blur-md shadow hover:scale-105 transition">
            <p className="text-xl font-bold mb-2">Zábava💖</p>
            <p className="text-sm">Hravé a jednoduché pro všechny věkové kategorie.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/30 backdrop-blur-md shadow hover:scale-105 transition">
            <p className="text-xl font-bold mb-2">Rychlost⚡</p>
            <p className="text-sm">Vytvoř shake během pár kliknutí.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/30 backdrop-blur-md shadow hover:scale-105 transition">
            <p className="text-xl font-bold mb-2">Mobilní 📱</p>
            <p className="text-sm">Plně responsivní i pro telefon a tablet.</p>
          </div>
        </div>
      </section>

      {/* Ukázky oblíbených kombinací */}
      <section className="py-10 px-6 text-center bg-white/20 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow">Oblíbené kombinace</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{ name: "Čoko bomb", ingredients: "Čokoláda, karamel, šlehačka" },
            { name: "Berry Fresh", ingredients: "Jahoda, borůvka, banán" },
            { name: "Tropická exploze", ingredients: "Mango, ananas, kokos" },
          ].map((shake, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">{shake.name}</h3>
              <p className="text-sm">{shake.ingredients}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="py-10 px-6 text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow">Jak to funguje?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="text-4xl mb-2">1️⃣</div>
            <img src="/postup/1.png" alt="Vyber si typ" className="w-full h-40 object-contain mx-auto mb-2" />
            <p>Vyber si - Smoothie nebo Milkšejk</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">2️⃣</div>
            <img src="/postup/2.png" alt="Nakombinuj své přísady" className="w-full h-40 object-contain mx-auto mb-2" />
            <p>Nakombinuj své oblíbené ingredience</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">3️⃣</div>
            <img src="/postup/3.png" alt="Vychutnej si shake" className="w-full h-40 object-contain mx-auto mb-2" />
            <p>A vychutnej si svůj šejk!</p>
          </div>
        </div>
      </section>

      {/* Recenze zákazníků */}
      <section className="py-10 px-6 text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow">Co říkají naši zákazníci?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-lg shadow hover:scale-105 transition">
            <p className="italic">„Tak dobrý milkšejk jsem si ještě nikdy nesložil!“</p>
            <p className="mt-2 font-bold">– Honza z Prahy</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-lg shadow hover:scale-105 transition">
            <p className="italic">„Miluju ten design a jednoduchost! 💕“</p>
            <p className="mt-2 font-bold">– Eliška z Brna</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-lg shadow hover:scale-105 transition">
            <p className="italic">„Děti si tvoří svoje shakey samy a moc je to baví.“</p>
            <p className="mt-2 font-bold">– Petra z Ostravy</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-4 text-white text-sm pointer-events-none select-none">
        &copy; 2025 Šejkyho Milkšejky
      </footer>
    </div>
  );
}
