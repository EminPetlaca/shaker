import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Palette, Zap, Smartphone } from "lucide-react";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { createShake } from "../../models/Shake";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [selectedShake, setSelectedShake] = useState(null);
  const [customerName, setCustomerName] = useState("");

  const handleOrder = async () => {
    if (!customerName.trim()) {
      toast.error("Zadej prosím své jméno.");
      return;
    }

    // Použijeme typ z vybrané kombinace
    const shakeData = {
      type: selectedShake.type,
      ingredients: selectedShake.ingredients,
      customerName: customerName.trim(),
    };

    try {
      const res = await createShake(shakeData);
      if (res.status === 201) {
        toast.success("Objednávka úspěšně vytvořena!");
      } else {
        toast.error("Chyba: " + res.message);
      }
    } catch (err) {
      toast.error("Nepodařilo se odeslat objednávku.");
    }

    setSelectedShake(null);
    setCustomerName("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] font-sans text-white relative">
      <ToastContainer />
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

      {/* Výhody služby */}
      <section className="py-16 px-6 text-center bg-white/20 mt-12 rounded-3xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-pink-500 drop-shadow-lg">
          Proč si vytvořit vlastní shake?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 cursor-pointer select-none">
          {[
            {
              title: "Vlastní styl",
              desc: "Nekonečné možnosti kombinací podle chuti.",
              icon: <Palette size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-pink-400 to-red-400",
            },
            {
              title: "Zábava",
              desc: "Hravé a jednoduché pro všechny věkové kategorie.",
              icon: <HeartPulse size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-pink-300 to-sky-300",
            },
            {
              title: "Rychlost",
              desc: "Vytvoř shake během pár kliknutí.",
              icon: <Zap size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-yellow-300 to-orange-400",
            },
            {
              title: "Mobilní",
              desc: "Plně responsivní i pro telefon a tablet.",
              icon: <Smartphone size={36} className="text-white mb-4 mx-auto" />,
              bg: "bg-gradient-to-tr from-purple-200 to-pink-300",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${item.bg} hover:brightness-90 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
            >
              {item.icon}
              <p className="text-2xl font-bold mb-3 text-white drop-shadow-md">{item.title}</p>
              <p className="text-sm text-white font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oblíbené kombinace */}
      <section className="py-10 px-6 text-center bg-white/20 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg text-pink-500">
          Oblíbené kombinace
        </h2>
        <div className="grid md:grid-cols-3 gap-6 cursor-pointer select-none">
          {[
            // Smoothie
            {
              type: "Smoothie",
              name: "Berry Fresh",
              ingredients: ["Jahoda", "Borůvka", "Malina"],
              image: "/kombinace/lesnismes.png",
            },
            {
              type: "Smoothie",
              name: "Tropická exploze",
              ingredients: ["Kiwi", "Med", "Banán"],
              image: "/kombinace/banan.png",
            },
            {
              type: "Smoothie",
              name: "Jablko Meruňka",
              ingredients: ["Jablko", "Meruňka", "Med"],
              image: "/kombinace/jablko_merunka.png",
            },

            // Milkshake
            {
              type: "Milkshake",
              name: "Čoko Lotus",
              ingredients: ["Čokoláda", "Lotus", "Zmrzlina"],
              image: "/kombinace/cokolada.png",
            },
            {
              type: "Milkshake",
              name: "Oreo Malina",
              ingredients: ["Oreo", "Malina", "Zmrzlina"],
              image: "/kombinace/oreo.png",
            },
            {
              type: "Milkshake",
              name: "Bílá Jahoda",
              ingredients: ["Bílá Čokoláda", "Jahoda", "Zmrzlina"],
              image: "/kombinace/bila_cokolada.png",
            },
          ].map((shake, i) => (
            <div
              key={i}
              onClick={() => setSelectedShake(shake)}
              className="relative p-6 rounded-xl overflow-hidden shadow-lg text-white hover:scale-105 transition-transform duration-300 ease-in-out h-64 flex flex-col justify-end text-left bg-black/40 backdrop-blur-sm"
              style={{
                backgroundImage: `url(${shake.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{shake.name}</h3>
                <p className="text-sm mb-3">{shake.ingredients.join(", ")}</p>
                <button className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-pink-100 transition-all">
                  Objednat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modální okno */}
      {selectedShake && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-11/12 max-w-md shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">
              Objednat: {selectedShake.name}
            </h2>
            <input
              type="text"
              placeholder="Zadej své jméno"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedShake(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Zrušit
              </button>
              <button
                onClick={handleOrder}
                className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600"
              >
                Objednat
              </button>
            </div>
          </div>
        </div>
      )}

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
              <p>
                {
                  [
                    "Vyber si - Smoothie nebo Milkšejk",
                    "Nakombinuj své oblíbené ingredience",
                    "A vychutnej si svůj šejk!",
                  ][index]
                }
              </p>
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
          {[
            ["„Tak dobrý milkšejk jsem si ještě nikdy nesložil!“", "Honza z Prahy"],
            ["„Miluju ten design a jednoduchost! 💕”", "Eliška z Brna"],
            ["„Děti si tvoří svoje shakey samy a moc je to baví.“", "Petra z Ostravy"],
          ].map(([text, name], i) => (
            <div
              key={i}
              className="p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-pink-400 transition-all duration-300 ease-in-out"
            >
              <p className="italic text-[#7B3F00]">{text}</p>
              <p className="mt-2 font-bold text-pink-700">– {name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
