import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Heart } from 'lucide-react';

export default function OrderSummary() {
  const location = useLocation();
  const data = location.state;

const factsPool = [
  "Banány jsou technicky bobule, ale jahody nejsou.",
  "Med nikdy nezkazí – v egyptských hrobkách našli jedlý med starý 3000 let.",
  "Jahody jsou jediným ovocem, které má semínka na povrchu.",
  "Kiwi má více vitamínu C než pomeranč.",
  "Milkshaky byly původně léčivým nápojem v lékárnách v 19. století.",
  "Největší jahoda na světě vážila přes 250 gramů.",
  "Borůvky jsou přírodní antioxidantové bomby.",
  "Ananas dozrává rychleji vzhůru nohama.",
  "Kokosová voda byla použita jako náhrada krevní plazmy během druhé světové války.",
  "Mango je národní ovoce Indie, Pákistánu a Filipín.",
  "Citron obsahuje více cukru než jahoda, přesto chutná kyseleji.",
  "Mrkev původně nebyla oranžová, ale fialová.",
  "Červený meloun je tvořen až z 92 % vodou.",
  "Jeden střední banán má přibližně 105 kalorií.",
  "Čokoláda obsahuje látky, které zvyšují produkci endorfinů.",
  "Zmrzlina byla poprvé zmíněna v Číně před více než 2000 lety.",
  "Avokádo je ovoce, nikoli zelenina.",
  "Borůvky mohou přirozeně barvit jazyk a zuby.",
  "Původní kiwi se pěstovalo v Číně, ne na Novém Zélandu.",
  "Jahodové semínka tvoří až 200 kusů na jednom plodu.",
  "Původ slova 'smoothie' sahá až do 60. let v Kalifornii.",
  "Pomeranč je jedním z mála plodů, které neobsahují tuk.",
  "Karamel vzniká zahříváním cukru nad 170 °C.",
  "Lotus sušenky vznikly v Belgii a jsou známé od roku 1932.",
  "První recept na milkshake obsahoval whiskey, vejce a mléko.",
  "Mandarinky se snadno loupou díky tenké slupce a volné dužině.",
  "Rostliny vanilky kvetou jen jeden den v roce.",
  "Ořechy jako mandle nebo kešu jsou často využívány v shakech jako zdroj bílkovin.",
  "Zelený čaj může být přidán do smoothies jako antioxidant.",
  "Mandle obsahují více vápníku než mléko na 100 g.",
  "Jablka obsahují přírodní pektin, který pomáhá trávit.",
  "Původní ananasy měly hodně semen a byly téměř nepoživatelné.",
  "Ovocné pyré je základem mnoha smoothie receptů.",
  "Rostlinné mléko jako mandlové nebo ovesné je skvělou alternativou k kravskému.",
  "Proteinové prášky se často přidávají do smoothie po cvičení.",
  "Datle jsou přírodním sladidlem bohatým na vlákninu.",
  "Červená řepa se přidává do smoothies pro zlepšení okysličení krve.",
  "Zázvor přidaný do šejku podporuje trávení a imunitu.",
  "Chia semínka absorbují vodu a tvoří gel, který zasytí.",
  "Špenát ve smoothie téměř nezmění chuť, ale zvýší obsah vitamínů.",
  "Kakao je jedním z nejbohatších přírodních zdrojů hořčíku.",
  "Led v smoothie zředí konzistenci a osvěží.",
  "Citronová šťáva zvyšuje vstřebávání železa ze zeleniny.",
  "Oves je přirozeným zdrojem beta-glukanů, které pomáhají snižovat cholesterol.",
  "Papája obsahuje enzym papain, který pomáhá s trávením.",
  "Lněná semínka obsahují omega-3 mastné kyseliny a vlákninu.",
  "Karotenoidy z mrkve jsou důležité pro zdraví očí.",
  "Růžová pitaya obsahuje betacyaniny s antioxidačním účinkem.",
  "Kurkuma má protizánětlivé vlastnosti a zlatou barvu.",
  "Vanilka je druh orchideje – jediný jedlý druh z této skupiny.",
  "Datle jsou skvělým zdrojem přírodní energie pro sportovce.",
  "Med je antibakteriální a často se používá k posílení imunity.",
  "Rebarbora je technicky zelenina, ale používá se jako ovoce.",
  "Jahody zrají rychleji na slunci než ve stínu.",
  "Granátové jablko obsahuje stovky malých šťavnatých semínek.",
  "Švestky obsahují antioxidanty podporující zdravé trávení.",
  "Kefír je fermentovaný nápoj bohatý na probiotika.",
  "Borůvky zlepšují paměť a funkci mozku.",
  "Zelený banán má více škrobu než zralý.",
  "Ananas obsahuje enzym bromelain, který pomáhá trávit bílkoviny.",
  "Kokosový olej je zdrojem rychlé energie díky MCT tukům.",
  "Arónie je jedno z nejvíce antioxidantních bobulí vůbec.",
  "Hrušky obsahují více vlákniny než jablka.",
  "Meloun je ideálním ovocem pro hydrataci v létě.",
  "Přezrálý banán je ideální do šejků pro sladkou chuť.",
  "Hroznové víno obsahuje resveratrol, který podporuje zdravé srdce.",
  "Broskve mají přirozený obsah betakarotenu pro zdravou pokožku.",
  "Zelený hrášek obsahuje bílkoviny a je výborný do zeleninových smoothie.",
  "Fíky jsou bohaté na draslík a přírodní cukry.",
  "Kakaové boby jsou základem čokolády a superpotravina.",
  "Cuketa může být tajnou složkou v šejku pro krémovou konzistenci.",
  "Peruánská maca podporuje hormonální rovnováhu a energii.",
  "Koriandr detoxikuje těžké kovy z těla.",
  "Černý rybíz má čtyřnásobek vitamínu C oproti pomeranči.",
  "Jedna porce špenátu pokrývá denní potřebu vitamínu K.",
  "Batáty jsou skvělým zdrojem komplexních sacharidů ve smoothie.",
  "Rajče je botanicky ovoce, i když ho používáme jako zeleninu.",
  "Limetka má výraznější kyselost než citron a výborně osvěží.",
  "Perlivá voda se někdy přidává do šejků pro extra říz.",
  "Mangostan je známý jako 'královna ovoce' v jihovýchodní Asii.",
  "Jedna hrst malých borůvek může pokrýt denní potřebu manganu."
];
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * factsPool.length);
    setRandomFact(factsPool[randomIndex]);
  }, []);

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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <img
        src={imagePath}
        alt={data.type}
        className="w-32 h-auto drop-shadow-xl mb-[-3em] z-[6]"
      />

      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-4">Děkujeme za objednávku!</h1>

        <p className="text-lg font-semibold mb-6">
          Vaše objednávka bude co nejrychleji připravena s láskou a péčí
        </p>

        <div className="text-left space-y-4 mb-6 text-lg">
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

          <p>
            <i className="fas fa-user mr-2" title="Zákazník"></i>
            <span className="ml-1">{data.customerName}</span>
          </p>
        </div>

<div
  className="italic text-sm text-[#6d3400] bg-white/30 backdrop-blur-sm rounded px-4 py-3 shadow-inner mt-4 transition-opacity duration-700 opacity-100 animate-pulse"
>
        {/* Random fact */}
          {randomFact}
</div>
        {/* Domeček */}
        <Link
          to="/"
          className="mt-6 inline-block text-[#7B3F00] hover:text-[#692f00] transition text-2xl"
          title="Zpět domů"
        >
          <i className="fas fa-home" />
        </Link>
      </div>
    </div>
  );
}
