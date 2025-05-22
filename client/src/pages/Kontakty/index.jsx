import React, { useState } from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { createForm } from "../../models/Form";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Kontakty = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

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
    <div className="min-h-screen bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-black font-['Poppins',sans-serif]">
      <Header />
          <div className="flex justify-center items-center mt-20">
            <div className="mb-5 space-y-4 text-white/90 flex flex-col items-center">
              <div className="flex items-center gap-3 text-black">
                <Mail className="w-5 h-5 text-black" />
                <span>
                  <strong>Email:</strong> sejky@milksejky.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Phone className="w-5 h-5 text-black" />
                <span>
                  <strong>Telefon:</strong> +420 123 456 789
                </span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <MapPin className="w-5 h-5 text-black" />
                <span>
                  <strong>Adresa:</strong> Pařížská 123, Praha, PSČ
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 mt-20 drop-shadow">
            Formulář pro kontakt
          </h2>

          {!formSubmitted ? (
            <form className="space-y-6" onSubmit={handlePost}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Vaše jméno"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ec5f74] hover:shadow-md hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium mb-3 mt-5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Váš email"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ec5f74] hover:shadow-md hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium mb-3 mt-5">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Napište nám zprávu..."
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 shadow-2xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ec5f74] hover:shadow-md resize-none hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              <div className="text-center pt-5">
                <button
                  type="submit"
                  className="bg-white text-black font-bold py-3 px-10 rounded-full transition-all duration-300 hover:bg-[#ffe3ea] hover:scale-105 shadow-2xl"
                >
                  Odeslat
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 p-6 bg-green-600/90 text-white text-lg rounded-2xl text-center font-semibold shadow-lg">
              Děkujeme, brzy se vám ozveme!
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

<Footer />;

export default Kontakty;
