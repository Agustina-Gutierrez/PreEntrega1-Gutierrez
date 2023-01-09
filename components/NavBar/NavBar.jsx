import React from 'react';
import CartWidget from './CartWidget.jsx';
import './StyleNavBar.css';

const NavBar = () => {
  
  const brand =
    'https://i.postimg.cc/XqkBpkS6/png-20230107-104827-0000.png';
  return (
    <header className="header">
    <h1 id="name">Amar Maderas</h1>
      <div className="logo-container">

        <img src={brand} alt="logo"/>
      </div>
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Diseños</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
          <li>
            <a href="/">Comprar</a>
          </li>
          <CartWidget />
        </ul>         
      </nav>

    </header>
  );
};

export default NavBar;
