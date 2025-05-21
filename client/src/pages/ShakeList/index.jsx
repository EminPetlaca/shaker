import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShakes, deleteShake } from "../../models/Shake";
import { X, User, ChefHat, ScrollText, CupSoda,  CheckCircle  } from 'lucide-react';
import toast from 'react-hot-toast';

// Mapa barev pro ingredience
const ingredientColors = {
    Banán: "bg-yellow-300",
    "Bílá Čokoláda": "bg-stone-200",
    Borůvka: "bg-blue-400",
    Čokoláda: "bg-amber-900 text-white",
    Cukr: "bg-gray-200 text-gray-800",
    Jablko: "bg-red-400",
    Jahoda: "bg-pink-400",
    Kiwi: "bg-lime-400",
    Malina: "bg-rose-400",
    Med: "bg-yellow-500",
    Meruňka: "bg-orange-400",
    Lotus: "bg-amber-500",
    Oreo: "bg-neutral-500 text-white",
    Zmrzlina: "bg-pink-200",
    Milkshake: "bg-pink-300",
    Smoothie: "bg-pink-500",
};

export default function Home() {
  const [shakes, setShakes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const loadShakes = async () => {
    const data = await getAllShakes();
    if (data.status === 200) {
      setShakes(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };

  useEffect(() => {
    loadShakes();
  }, []);

  const handleDelete = async (id) => {
    const result = await deleteShake(id);
    if (result.status === 200) {
      setShakes((prev) => prev.filter((shake) => shake._id !== id));

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } bg-white text-pink-600 rounded-lg shadow-lg px-5 py-4 flex items-center gap-3 max-w-sm w-full border-l-4 border-pink-500`}
        >
          <CheckCircle className="text-pink-500" size={24} />
          <div className="text-sm font-medium">
            Shake byl úspěšně <span className="font-bold">odstraněn</span>.
          </div>
        </div>
      ));
    } else {
      toast.error("Nepodařilo se smazat shake.");
    }
  };

  if (isLoaded === null) {
    return <p className="text-center text-red-500 mt-10">Žádné shakey nenalezeny</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-gray-500 mt-10">Načítám objednávky...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] py-10 px-4 font-['Poppins']">
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-12 drop-shadow-md flex justify-center items-center gap-3">
        <ScrollText size={32} /> Objednávky Šejků
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {shakes.map((shake) => (
          <div
            key={shake._id}
            className="relative bg-white border-4 border-dashed border-pink-400 rounded-xl p-6 shadow-xl text-gray-800 transition-transform hover:scale-105"
          >
            <button
              onClick={() => handleDelete(shake._id)}
              className="absolute top-2 right-2 text-pink-500 hover:text-red-600 transition cursor-pointer"
              title="Smazat objednávku"
            >
              <X size={20} />
            </button>

            <Link to={`/shakes/${shake._id}`} className="block space-y-4">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-pink-600 border-b pb-2">
                <CupSoda size={20} /> {shake.type}
              </h2>

              <p className="flex items-center gap-2 text-base">
                <User size={18} /> {shake.customerName}
              </p>

              <div className="flex gap-2 flex-wrap items-center text-base">
                <ChefHat size={18} />
                {shake.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      ingredientColors[ingredient] || "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/add-shake"
          className="inline-block bg-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-600 transition shadow-md"
        >
           Přidat nový shake
        </Link>
      </div>
    </div>
  );
}
