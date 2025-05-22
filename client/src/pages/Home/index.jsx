import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Palette, Zap, Smartphone } from "lucide-react";
import Header from "../Header/index";
import Footer from "../Footer/index";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] font-sans text-white">
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
        <Link to="/add-shake" className="relative z-10">
          <button className="relative cursor-pointer group overflow-hidden bg-white text-pink-600 px-8 py-3 my-6 rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:scale-105 select-none">
            Vytvoř si svůj shake
          </button>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-pink-500 rounded-b-full opacity-70 transform scale-y-0 group-hover:scale-y-150 group-hover:translate-y-16 transition-all duration-700 ease-out blur-md"></div>
        </Link>
      </main>

{/* Výhody služby – nový layout s obrázkem a textem střídavě */}
<section className="py-16 px-6 mt-12 space-y-16 ">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pink-500 drop-shadow-lg mb-8">
    Proč si vytvořit vlastní shake?
  </h2>

  {/* 1. Blok: obrázek vpravo */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2 text-left">
      <h3 className="text-3xl font-bold text-white mb-2">Vlastní styl</h3>
      <p className="text-lg text-white/90">Nekonečné možnosti kombinací podle chuti.</p>
    </div>
    <div className="md:w-1/2">
      <img src="/atributy/shake.png" alt="Vlastní styl" className="rounded-xl w-full max-w-[180px] md:max-w-[220px] h-auto mx-auto"

 />
    </div>
  </div>

  {/* 2. Blok: obrázek vlevo */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    <div className="md:w-1/2 text-left">
      <h3 className="text-3xl font-bold text-white mb-2">Zábava</h3>
      <p className="text-lg text-white/90">Hravé a jednoduché pro všechny věkové kategorie.</p>
    </div>
    <div className="md:w-1/2">
      <img src="/atributy/hravost.png" alt="Zábava" className="rounded-xl w-full max-w-[180px] md:max-w-[220px] h-auto mx-auto"

 />
    </div>
  </div>

  {/* 3. Blok: obrázek vpravo */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2 text-left">
      <h3 className="text-3xl font-bold text-white mb-2">Rychlost</h3>
      <p className="text-lg text-white/90">Vytvoř shake během pár kliknutí.</p>
    </div>
    <div className="md:w-1/2">
      <img src="/atributy/rychlost.png" alt="Rychlost" className="rounded-xl w-full max-w-[180px] md:max-w-[220px] h-auto mx-auto"

 />
    </div>
  </div>

  {/* 4. Blok: obrázek vlevo */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    <div className="md:w-1/2 text-left">
      <h3 className="text-3xl font-bold text-white mb-2">Mobilní</h3>
      <p className="text-lg text-white/90">Plně responsivní i pro telefon a tablet.</p>
    </div>
    <div className="md:w-1/2">
      <img src="/atributy/mobil.png" alt="Mobilní" className="rounded-xl w-full max-w-[180px] md:max-w-[220px] h-auto mx-auto"

 />
    </div>
  </div>
</section>


      {/* Ukázky oblíbených kombinací */}
      <section className="py-10 px-6 text-center bg-white/20 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg text-pink-500">
          Oblíbené kombinace
        </h2>
        <div className="grid md:grid-cols-3 gap-6 cursor-pointer select-none">
          {[{ name: "Čoko bomb", ingredients: "Čokoláda, lotus, bueno", image: "/kombinace/cokolada.png" }, { name: "Berry Fresh", ingredients: "Jahoda, borůvka, malina", image: "/kombinace/lesnismes.png" }, { name: "Tropická exploze", ingredients: "Kiwi, med, banan", image: "/kombinace/banan.png" }].map((shake, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl overflow-hidden shadow-lg text-white hover:scale-105 transition-transform duration-300 ease-in-out h-64 flex flex-col justify-end text-left bg-black/40 backdrop-blur-sm"
              style={{ backgroundImage: `url(${shake.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{shake.name}</h3>
                <p className="text-sm mb-3">{shake.ingredients}</p>
                <button className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-pink-100 transition-all">
                  Objednat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="py-10 px-6 text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow text-pink-500">
          Jak to funguje?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((step, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl mb-2">{step}️⃣</div>
              <img
                src={`/postup/${step}.png`}
                alt={`Krok ${step}`}
                className="w-full h-40 object-contain mx-auto mb-2"
              />
              <p>{["Vyber si - Smoothie nebo Milkšejk", "Nakombinuj své oblíbené ingredience", "A vychutnej si svůj šejk!"][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recenze zákazníků */}
      <section className="py-10 px-6 text-center mt-10 bg-gradient-to-r bg-white/20 rounded-3xl shadow-lg select-none">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-500 drop-shadow-lg">
          Co říkají naši zákazníci?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
        <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
             <p className="italic text-[#7B3F00]">
               „Tak dobrý milkšejk jsem si ještě nikdy nesložil!“
             </p>
             <p className="mt-2 font-bold text-pink-700">– Honza z Prahy</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
             <p className="italic text-[#7B3F00]">
               „Miluju ten design a jednoduchost! 💕”
             </p>
             <p className="mt-2 font-bold text-pink-700">– Eliška z Brna</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out">
             <p className="italic text-[#7B3F00]">
               „Děti si tvoří svoje shakey samy a moc je to baví.“
             </p>
             <p className="mt-2 font-bold text-pink-700">– Petra z Ostravy</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
