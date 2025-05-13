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

  // Debug the value of `data.type`
  console.log('Order Type:', data.type);

  // Convert to lowercase to handle case mismatch
  const imagePath = data.type.toLowerCase() === "milkshake" ? "/milkshake.png" : "/smoothie.png";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-[#7B3F00] p-6">
      {/* Font Awesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Dynamically selected drink image */}
      <img
        src={imagePath}
        alt={data.type}
        className="w-32 h-auto mb-4 drop-shadow-xl"
      />

      {/* Card */}
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6">Děkujeme za objednávku!</h1>

        <div className="text-left space-y-2 mb-6">
          <p>
            <i className="fas fa-basket-shopping" style={{ marginRight: '5px' }} title="Ingredience"></i>
            {data.ingredients.join(", ")}
          </p>
          <p>
            <i className="fas fa-user" style={{ marginRight: '5px' }} title="Zákazník"></i>
            {data.customerName}
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-[#7B3F00] text-white py-2 px-6 rounded hover:bg-[#692f00] transition"
        >
          Zpět na domů
        </Link>
      </div>
    </div>
  );
}
