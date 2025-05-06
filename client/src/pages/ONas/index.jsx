import React from 'react';
import './ONas.css';
import Header from '../Header/index';
 
 const ONas = () => {
   return (
     <div className="onas-container">
       <Header />
       <main className="onas-main">
         <div className="onas-content">
           <h1>O nás</h1>
           <p>
             Jsme dynamický tým s vášní pro inovace a technologii. Naší misí je přinášet 
             kvalitní a kreativní řešení pro naše klienty. Naše zkušenosti a znalosti v oboru 
             nám umožňují poskytovat efektivní a moderní služby, které splňují náročné požadavky.
           </p>
           <p>
             Naše hodnoty zahrnují týmovou práci, transparentnost a zaměření na výsledky. 
             Snažíme se neustále zlepšovat a hledat nové způsoby, jak vytvářet hodnotu pro naše klienty.
           </p>
         </div>
       </main>
       <footer className="onas-footer">
         &copy; 2025 Šejkyho Milkšejky
       </footer>
     </div>
   );
 };
 
 export default ONas;