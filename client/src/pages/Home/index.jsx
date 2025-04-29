import React from "react";
import { Link } from "react-router-dom";

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
        <button className="relative group overflow-hidden bg-white text-pink-600 px-8 py-3 my-6 rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:scale-105 select-none">
          <Link to="/add-shake" className="relative z-10">
            Vytvoř si svůj shake
          </Link>

          {/* Vlnková poleva */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-pink-500 rounded-b-full opacity-70 transform scale-y-0 group-hover:scale-y-150 group-hover:translate-y-16 transition-all duration-700 ease-out blur-md"></div>
        </button>
      </main>

      {/* Výhody služby */}
      <section className="py-16 px-6 text-center bg-pink-50/50 mt-12 rounded-3xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-pink-500 drop-shadow-lg">
          Proč si vytvořit vlastní shake?
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Vlastní styl",
              desc: "Nekonečné možnosti kombinací podle chuti.",
              icon: <Palette size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-pink-400 to-red-400",
              hover: "hover:brightness-90",
            },
            {
              title: "Zábava",
              desc: "Hravé a jednoduché pro všechny věkové kategorie.",
              icon: (
                <HeartPulse size={36} className="text-white mb-4 mx-auto" />
              ),
              bg: "bg-gradient-to-tr from-pink-300 to-sky-300",
              hover: "hover:brightness-90",
            },
            {
              title: "Rychlost",
              desc: "Vytvoř shake během pár kliknutí.",
              icon: <Zap size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-yellow-300 to-orange-400",
              hover: "hover:brightness-90",
            },
            {
              title: "Mobilní",
              desc: "Plně responsivní i pro telefon a tablet.",
              icon: (
                <Smartphone size={36} className="text-white mb-4 mx-auto" />
              ),
              bg: "bg-gradient-to-tr from-purple-200 to-pink-300",
              hover: "hover:brightness-90",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${item.bg} ${item.hover} backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
            >
              {/* Ikona */}
              {item.icon}
              {/* Titulek */}
              <p className="text-2xl font-bold mb-3 text-white drop-shadow-md">
                {item.title}
              </p>
              {/* Popis */}
              <p className="text-sm text-white font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ukázky oblíbených kombinací */}
      <section className="py-10 px-6 text-center bg-white/20 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg text-pink-500">
          Oblíbené kombinace
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Čoko bomb", ingredients: "Čokoláda, karamel, šlehačka" },
            { name: "Berry Fresh", ingredients: "Jahoda, borůvka, banán" },
            { name: "Tropická exploze", ingredients: "Mango, ananas, kokos" },
          ].map((shake, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-lg ${shake.color} backdrop-blur-lg text-white hover:scale-105 transition-transform duration-300 ease-in-out`}
            >
              <h3 className="text-xl font-bold mb-2">{shake.name}</h3>
              <p className="text-sm">{shake.ingredients}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="py-10 px-6 text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow">
          Jak to funguje?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="text-4xl mb-2">1️⃣</div>
            <img
              src="/postup/1.png"
              alt="Vyber si typ"
              className="w-full h-40 object-contain mx-auto mb-2"
            />
            <p>Vyber si - Smoothie nebo Milkšejk</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">2️⃣</div>
            <img
              src="/postup/2.png"
              alt="Nakombinuj své přísady"
              className="w-full h-40 object-contain mx-auto mb-2"
            />
            <p>Nakombinuj své oblíbené ingredience</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">3️⃣</div>
            <img
              src="/postup/3.png"
              alt="Vychutnej si shake"
              className="w-full h-40 object-contain mx-auto mb-2"
            />
            <p>A vychutnej si svůj šejk!</p>
          </div>
        </div>
      </section>

      {/* Recenze zákazníků */}
      <section className="py-10 px-6 text-center mt-10 bg-gradient-to-r bg-white/20 rounded-3xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-500 drop-shadow-lg">
          Co říkají naši zákazníci?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
            <p className="italic text-white">
              „Tak dobrý milkšejk jsem si ještě nikdy nesložil!“
            </p>
            <p className="mt-2 font-bold text-pink-700">– Honza z Prahy</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
            <p className="italic text-white">
              „Miluju ten design a jednoduchost! 💕”
            </p>
            <p className="mt-2 font-bold text-pink-700">– Eliška z Brna</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
            <p className="italic text-white">
              „Děti si tvoří svoje shakey samy a moc je to baví.“
            </p>
            <p className="mt-2 font-bold text-pink-700">– Petra z Ostravy</p>
            {/*TEST*/}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-4 text-pink-600 text-sm pointer-events-none select-none">
        &copy; 2025 Šejkyho Milkšejky
      </footer>
    </div>
  );
}
