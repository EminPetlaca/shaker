import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-transparent font-['Rubik_Wet_Paint']">
      <div className="flex items-center">
        <a href="/" className="inline-block cursor-pointer outline-none focus:outline-none">
          <img
            src="/logo-main.png"
            alt="Logo"
            className="h-[110px] transition-transform duration-300 hover:scale-110 select-none"
          />
        </a>
      </div>
      <nav className="flex gap-10">
  <a
    href="/kontakt"
    className="text-white font-bold text-2xl transform transition-all duration-500 hover:text-[#9b3d79] hover:scale-110 focus:outline-none select-none"
  >
    Kontakty
  </a>
  <a
    href="/o-nas"
    className="text-white font-bold text-2xl transform transition-all duration-500 hover:text-[#9b3d79] hover:scale-110 focus:outline-none select-none"
  >
    O nás
  </a>

  <a
    href="/add-shake"
    className="text-white font-bold text-2xl transform transition-all duration-500 hover:text-[#9b3d79] hover:scale-110 focus:outline-none select-none"
  >
    Vytvoř si shake
  </a>

</nav>
    </header>
  );
};

export default Header;
