import React from 'react';
import Header from '../Header';
import Footer from "../Footer/index";
import { Link } from 'react-router-dom';

const ONas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ec5f74] to-[#fbc1cc] text-white font-['Poppins',sans-serif]">
      <Header />
      <main className="flex-1 flex justify-center items-center px-6 py-12 text-center">
        <div className="max-w-3xl bg-white backdrop-blur-lg rounded-2xl p-10 shadow-xl">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg text-black">O nás</h1>
          <p className="text-lg mb-5 leading-relaxed text-black">
            Vítejte u <span className="font-semibold text-black">Šejkyho Milkšejků</span>!  Jsme mladý tým, který
            přináší svěží mix inovací, technologií a lahodných chutí. Naším cílem je spojit tradiční receptury
            s moderním přístupem a přinést vám milkshake zážitek nové generace.
          </p>
          <p className="text-lg mb-5 leading-relaxed text-black">
            Využíváme chytré objednávkové systémy, digitální personalizaci a neustále hledáme nové příchutě. 
            Zákazník je pro nás středobodem a každý shake je vytvořen s láskou, kreativitou a technologickou precizností.
          </p>
          <p className="text-lg mb-5 leading-relaxed text-black">
            Zakládáme si na <span className="font-semibold text-black">týmové spolupráci</span>, <span className="font-semibold text-black">otevřené komunikaci</span> a <span className="font-semibold text-black">neustálém růstu</span>. Jsme tady proto,
            abychom vám nabídli víc než jen nápoj – chceme tvořit zážitek.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/add-shake" className="text-xl bg-white text-pink-600 font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-pink-100">
              Prozkoumat šejky
            </Link>
            <Link to="/kontakt" className="border border-white text-pink-600 font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-pink-100 hover:text-pink-600">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ONas;
