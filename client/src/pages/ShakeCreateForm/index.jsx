import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createShake } from "../../models/Shake";
import React from "react";

export default function ShakeCreateForm() {
  const [formData, setFormData] = useState({ type: "", ingredients: [], customerName: "" });
  const [info, setInfo] = useState();
  const [step, setStep] = useState("type"); // "type", "ingredients", "name"
  const navigate = useNavigate();

  const ingredientOptions = {
    Smoothie: ["Banana", "Strawberry", "Mango", "Spinach"],
    Milkshake: ["Chocolate", "Vanilla", "Strawberry Syrup", "Caramel"]
  };

  const handleTypeChange = (type) => {
    setFormData({ type, ingredients: [], customerName: "" });
    setStep("ingredients");
  };

  const handleIngredientChange = (e) => {
    const selected = [...formData.ingredients];
    const value = e.target.value;

    if (e.target.checked) {
      selected.push(value);
    } else {
      const index = selected.indexOf(value);
      if (index > -1) selected.splice(index, 1);
    }

    setFormData({ ...formData, ingredients: selected });
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, customerName: e.target.value });
  };

  const postForm = async () => {
    const shake = await createShake(formData);
    if (shake.status === 201) {
      return navigate("/");
    }
    setInfo(shake.message);
  };

  const handleSubmitIngredients = (e) => {
    e.preventDefault();
    if (formData.ingredients.length === 0) {
      setInfo("Vyber alespoň jednu ingredienci.");
      return;
    }
    setStep("name");
    setInfo(null);
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] flex flex-col items-center justify-center px-4 py-10 text-white font-sans">
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-white drop-shadow">Vytvoř si svůj shake</h1>

        {/* Vyber typ */}
        {step === "type" && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="cursor-pointer rounded-lg p-4 text-center transition hover:scale-105 bg-white/30 backdrop-blur-md shadow"
              onClick={() => handleTypeChange("Milkshake")}
            >
              <img src="produkty/Shake.png" alt="Milkshake" className="w-full h-32 object-contain mb-2" />
              <span className="font-semibold">Milkshake</span>
            </div>
            <div
              className="cursor-pointer rounded-lg p-4 text-center transition hover:scale-105 bg-white/30 backdrop-blur-md shadow"
              onClick={() => handleTypeChange("Smoothie")}
            >
              <img src="produkty/Smoothie.png" alt="Smoothie" className="w-full h-32 object-contain mb-2" />
              <span className="font-semibold">Smoothie</span>
            </div>
          </div>
        )}

        {/* Vyber ingredience */}
        {step === "ingredients" && (
          <form onSubmit={handleSubmitIngredients} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {ingredientOptions[formData.type].map((ingredient) => (
                <label
                  key={ingredient}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-white/30 backdrop-blur-md shadow hover:scale-105 transition cursor-pointer"
                >
                  <img
                    src={`/produkty/${ingredient.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={ingredient}
                    className="h-20 object-contain mb-2"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="ingredients"
                      value={ingredient}
                      checked={formData.ingredients.includes(ingredient)}
                      onChange={handleIngredientChange}
                      className="accent-pink-600"
                    />
                    <span>{ingredient}</span>
                  </div>
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-pink-100 transition"
            >
              Pokračovat
            </button>

            <button
              type="button"
              onClick={() => setStep("type")}
              className="w-full text-sm text-white underline mt-2"
            >
              Zpět na výběr typu
            </button>
          </form>
        )}

        {/* Zadání jména */}
        {step === "name" && (
          <form onSubmit={handlePost} className="space-y-4">
            <div className="space-y-2 mb-6">
              <label className="block text-white font-semibold">Objednávka je pro:</label>
              <input
                type="text"
                value={formData.customerName}
                onChange={handleNameChange}
                placeholder="Zadej své jméno"
                required
                className="w-full p-2 rounded bg-white/70 text-pink-700 placeholder-pink-400 font-semibold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-pink-100 transition"
            >
              Přidat shake
            </button>

            <button
              type="button"
              onClick={() => setStep("ingredients")}
              className="w-full text-sm text-white underline mt-2"
            >
              Zpět na ingredience
            </button>
          </form>
        )}

        {info && <p className="text-sm text-center mt-4 text-red-100">{info}</p>}

        <Link to="/" className="block text-center mt-6 text-white hover:underline">
          ← Zpět domů
        </Link>
      </div>
    </div>
  );
}
