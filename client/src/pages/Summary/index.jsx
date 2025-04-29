import { useLocation, Link } from "react-router-dom";
import React from "react";

export default function OrderSummary() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100">
        <p className="text-2xl text-pink-600 font-bold">Žádná objednávka k zobrazení.</p>
        <Link to="/" className="block mt-4 text-pink-700 underline">← Zpět domů</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-[#7B3F00] p-6">
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6">Děkujeme za objednávku!</h1>

        <div className="text-left space-y-2 mb-6">
          <p><strong>Typ shakeu:</strong> {data.type}</p>
          <p><strong>Ingredience:</strong> {data.ingredients.join(", ")}</p>
          <p><strong>Pro zákazníka:</strong> {data.customerName}</p>
        </div>

        <Link to="/" className="inline-block bg-[#7B3F00] text-white py-2 px-6 rounded hover:bg-[#692f00] transition">
          Zpět na domů
        </Link>
      </div>
    </div>
  );
}
