import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <a href="/" className="logo-link">
          <img src="/logo-main.png" alt="Logo" className="logo" />
        </a>
      </div>
      <nav className="nav">
        <a href="/kontakt" className="nav-link">Kontakty</a>
        <a href="/o-nas" className="nav-link">O nás</a>
      </nav>
    </header>
  );
};

export default Header;
