import React, { useState } from 'react';
import Header from '../Header/index';
import Footer from "../Footer/index";
import { createForm } from '../../models/Form';
import toast from 'react-hot-toast';

const Kontakty = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState();

  const handlePost = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const data = await createForm(formData);

    if (data.status === 201) {
      toast.success("Formulář byl úspěšně odeslán!");
    } else {
      toast.error("Nepodařilo se odeslat, chyba: " + data.status);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-white font-['Poppins',sans-serif]">
      <Header />
      <main className="max-w-3xl mx-auto my-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl text-left">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow">Kontakty</h1>
        <p className="mb-6 text-lg">
          Pokud nás chcete kontaktovat, neváhejte nás oslovit pomocí následujících údajů:
        </p>
        <div className="mb-8 space-y-2">
          <p><strong>Email:</strong> sejky@milksejky.com</p>
          <p><strong>Telefon:</strong> +420 123 456 789</p>
          <p><strong>Adresa:</strong> Pařížská 123, Praha, PSČ</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 drop-shadow">Formulář pro kontakt:</h2>
        
        {!formSubmitted && (
          <form className="space-y-6" onSubmit={handlePost}>
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Jméno:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 text-base focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 text-base focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Zpráva:</label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-[#ec5f74] font-bold py-3 px-6 rounded-full cursor-pointer transition-transform duration-200 hover:bg-[#ffe3ea] hover:scale-105"
            >
              Odeslat
            </button>
          </form>
        )}

        {formSubmitted && (
          <div className="mt-6 p-6 text-lg text-center bg-green-600/80 text-white rounded-xl font-semibold shadow-lg">
            Děkujeme, brzy se vám ozveme!
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Kontakty;
