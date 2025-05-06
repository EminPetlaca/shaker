import React from 'react';
import Header from '../Header/index';
import Footer from "../Footer/index";

const Kontakty = () => {
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
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">Jméno:</label>
            <input
              type="text"
              id="name"
              name="name"
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
              required
              className="w-full p-3 rounded-md bg-white/90 text-gray-800 text-base focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Zpráva:</label>
            <textarea
              id="message"
              name="message"
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
      </main>
<Footer/>
    </div>
  );
};

export default Kontakty;
