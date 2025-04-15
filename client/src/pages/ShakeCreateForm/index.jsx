import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createShake } from "../../models/Shake"; // Make sure this points to the correct file

import React from "react";

export default function ShakeCreateForm() {
  const [formData, setFormData] = useState({ type: "", ingredients: [] });
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const ingredientOptions = {
    Smoothie: ["Banana", "Strawberry", "Mango", "Spinach"],
    Milkshake: ["Chocolate", "Vanilla", "Strawberry Syrup", "Caramel"]
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setFormData({ type: selectedType, ingredients: [] }); // reset ingredients on type change
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

  const postForm = async () => {
    const shake = await createShake(formData);
    if (shake.status === 201) {
      return navigate("/");
    }
    setInfo(shake.message);
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <h1>Create Shake</h1>
      <form onSubmit={handlePost}>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleTypeChange} required>
          <option value="">Select type</option>
          <option value="Smoothie">Smoothie</option>
          <option value="Milkshake">Milkshake</option>
        </select>

        {formData.type && (
          <>
            <label>Ingredients:</label>
            {ingredientOptions[formData.type].map((ingredient) => (
              <div key={ingredient}>
                <input
                  type="checkbox"
                  name="ingredients"
                  value={ingredient}
                  checked={formData.ingredients.includes(ingredient)}
                  onChange={handleIngredientChange}
                />
                <label>{ingredient}</label>
              </div>
            ))}
          </>
        )}

        <button type="submit">Add Shake</button>
      </form>

      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
