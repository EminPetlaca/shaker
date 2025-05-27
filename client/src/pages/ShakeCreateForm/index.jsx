import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createShake } from "../../models/Shake";
import React from "react";
import { Home, ArrowLeft } from "lucide-react";

// Slugify pomocná funkce
const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

export default function ShakeCreateForm() {
  const [formData, setFormData] = useState({ type: "", ingredients: [], customerName: "" });
  const [info, setInfo] = useState();
  const [step, setStep] = useState("type");
  const navigate = useNavigate();

  const ingredientOptions = {
    Smoothie: ["Banán", "Borůvka", "Jablko", "Cukr", "Jahoda", "Kiwi", "Malina", "Med", "Meruňka"],
    Milkshake: ["Banán", "Bílá Čokoláda", "Čokoláda", "Jahoda", "Lotus", "Cukr", "Malina", "Oreo", "Zmrzlina"],
  };

  const handleTypeChange = (type) => {
    setFormData({ type, ingredients: [], customerName: "" });
    setStep("ingredients");
    setInfo(null);
  };

  const handleIngredientChange = (e) => {
    const selected = [...formData.ingredients];
    const value = e.target.value;

    if (e.target.checked) {
      if (selected.length >= 4) {
        setInfo("Můžeš vybrat maximálně 4 ingredience.");
        return;
      }
      selected.push(value);
    } else {
      const index = selected.indexOf(value);
      if (index > -1) selected.splice(index, 1);
    }

    setFormData({ ...formData, ingredients: selected });
    setInfo(null);
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, customerName: e.target.value });
  };

  const postForm = async () => {
    const shake = await createShake(formData);
    if (shake.status === 201) {
      return navigate("/summary", { state: formData });
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
    if (!formData.customerName.trim()) {
      setInfo("Poprosili bychom tě zadat jméno, abychom věděli komu tento shake dát.");
      return;
    }
    postForm();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] flex flex-col items-center justify-center px-4 py-10 text-white font-sans">
      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md relative select-none">
{/* Navigace v horní části */}
{step !== "type" && (
  <div className="absolute top-4 left-4 cursor-pointer" onClick={() => setStep("type")}>
    <ArrowLeft />
  </div>
)}
<Link to="/" className="absolute top-4 right-4 text-white cursor-pointer">
  <Home />
</Link>


        <h1 className="text-3xl font-extrabold text-center mb-6 text-white drop-shadow">Vytvoř si svůj shake</h1>

        {step === "type" && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {["Milkshake", "Smoothie"].map((type) => (
              <div
                key={type}
                className="cursor-pointer rounded-lg p-4 text-center transition hover:scale-105 text-[#7B3F00] backdrop-blur-md shadow"
                onClick={() => handleTypeChange(type)}
              >
                <img
                  src={`produkty/${type}.png`}
                  alt={type}
                  className="w-full h-32 object-contain mb-2"
                  draggable={false}
                />
                <span className="font-semibold">{type}</span>
              </div>
            ))}
          </div>
        )}

        {step === "ingredients" && (
          <form onSubmit={handleSubmitIngredients} className="space-y-4">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {ingredientOptions[formData.type].map((ingredient) => {
                const isSelected = formData.ingredients.includes(ingredient);
                const isDisabled = !isSelected && formData.ingredients.length >= 3;

                return (
                  <label
                    key={ingredient}
                    className={`flex flex-col items-center justify-center text-center p-2 rounded-lg text-[#7B3F00] backdrop-blur-md shadow transition cursor-pointer border-2 ${
                      isSelected ? "border-white bg-white/60" : "border-transparent hover:border-white"
                    } ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                  >
                    <img
                      src={`/produkty/${slugify(ingredient)}.png`}
                      alt={ingredient}
                      className="h-16 object-contain mb-1"
                      draggable={false}
                    />
                    <input
                      type="checkbox"
                      name="ingredients"
                      value={ingredient}
                      checked={isSelected}
                      disabled={isDisabled}
                      onChange={handleIngredientChange}
                      className="hidden"
                    />
                    <span className="text-xs font-medium">{ingredient}</span>
                  </label>
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-pink-100 transition"
            >
              Pokračovat
            </button>
          </form>
        )}

        {step === "name" && (
          <form onSubmit={handlePost} className="space-y-4">
            <div className="space-y-2 mb-6">
              <label className="block text-white font-semibold">Objednávka je pro:</label>
              <input
                type="text"
                value={formData.customerName}
                onChange={handleNameChange}
                placeholder="Zadej své jméno"
                className={`w-full p-2 rounded bg-white/70 text-pink-700 placeholder-pink-400 font-semibold ${
                  info ? "border border-red-300" : ""
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-pink-100 transition"
            >
              Vytvořit shake
            </button>
          </form>
        )}

        {info && <p className="text-sm text-center mt-4 text-red-100">{info}</p>}
      </div>
    </div>
  );
}
