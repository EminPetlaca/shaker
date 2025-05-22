import { useLocation, Link } from "react-router-dom";
import React from "react";

export default function OrderSummary() {
  const location = useLocation();
  const data = location.state;

  const getIngredientColor = (ingredient) => {
  const colors = {
    Banán: "bg-yellow-300",
    "Bílá Čokoláda": "bg-stone-200",
    Borůvka: "bg-blue-400",
    Čokoláda: "bg-amber-900 text-white",
    Cukr: "bg-white text-gray-800",
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
  return colors[ingredient] || "bg-gray-200";
};


  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100">
        <p className="text-2xl text-pink-600 font-bold">Žádná objednávka k zobrazení.</p>
        <Link to="/" className="block mt-4 text-pink-700 underline">← Zpět domů</Link>
      </div>
    );
  }

  const imagePath = data.type.toLowerCase() === "milkshake" ? "/milkshake.png" : "/smoothie.png";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-[#7B3F00] p-6">
      {/* Font Awesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Nápoj */}
      <img
        src={imagePath}
        alt={data.type}
        className="w-32 h-auto drop-shadow-xl mb-[-3em] z-[6]"
      />

      {/* Shrnutí objednávky */}
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6">Děkujeme za objednávku!</h1>

        <div className="text-left space-y-4 mb-6 text-lg">
          <p>
<div className="flex flex-wrap items-center gap-2">
  <i className="fas fa-basket-shopping text-lg" title="Ingredience"></i>
  {data.ingredients.map((ingredient, index) => (
    <span
      key={index}
      className={`px-3 py-1 rounded-full text-sm font-semibold ${getIngredientColor(ingredient)}`}
    >
      {ingredient}
    </span>
  ))}
</div>


          </p>
          <p>
            <i className="fas fa-user mr-2" title="Zákazník"></i>
            <span className="ml-1">{data.customerName}</span>
          </p>
        </div>

        {/* Domeček ve spodní části karty */}
        <Link
          to="/"
          className="mt-4 inline-block text-[#7B3F00] hover:text-[#692f00] transition text-2xl"
          title="Zpět domů"
        >
          <i className="fas fa-home" />
        </Link>
      </div>
    </div>
  );
}
