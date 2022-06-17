import React from 'react';
import '../style/Header.css';
import img from '../projectIntro.gif';

function Header() {
  return (
    <header>
      <div>
        <img src={ img } alt="Star Wars Logo" />
        <a href="#StarWarsDataTable">
          <button type="button">
            May the force be with you.
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
