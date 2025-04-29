import React from 'react';
import './kontakty.css';
import Header from '../../Header/Header';

const Kontakty = () => {
  return (
    <div className="kontakty-container">
      <Header />
      <main className="contact">
        <h1>Kontakty</h1>
        <p>
          Pokud nás chcete kontaktovat, neváhejte nás oslovit pomocí následujících údajů:
        </p>
        <div className="contact-info">
          <p><strong>Email:</strong> sejky@milksejky.com</p>
          <p><strong>Telefon:</strong> +420 123 456 789</p>
          <p><strong>Adresa:</strong> Pařížská 123, Praha, PSČ</p>
        </div>
        <h2>Formulář pro kontakt:</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Jméno:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Zpráva:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Odeslat</button>
        </form>
      </main>
      <footer className="kontakt-footer">
        &copy; 2025 Šejkyho Milkšejky
      </footer>
    </div>
  );
};

export default Kontakty;
