import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-transparent font-['Rubik_Wet_Paint']">
      <div className="flex items-center">
        <a href="/" className="inline-block cursor-pointer">
          <img
            src="/logo-main.png"
            alt="Logo"
            className="h-[110px] transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>
      <nav className="flex gap-10">
  <a
    href="/kontakt"
    className="text-white font-bold text-2xl transform transition-all duration-500 hover:text-[#7B3F00] hover:scale-110"
  >
    Kontakty
  </a>
  <a
    href="/o-nas"
    className="text-white font-bold text-2xl transform transition-all duration-500 hover:text-[#7B3F00] hover:scale-110"
  >
    O nás
  </a>
</nav>
    </header>
  );
};

export default Header;
