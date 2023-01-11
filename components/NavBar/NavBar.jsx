import React from 'react';
import CartWidget from './CartWidget.jsx';
import './StyleNavBar.css';
import { Link } from "react-router-dom";

const NavBar = ({href}) => {
  
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
            <Link className="nav-link" to={href}>Productos</Link>
          </li>
          <li>
            <Link className="nav-link" to={href}>Diseños</Link>
          </li>
          <li>
            <Link className="nav-link" to={href}>Contacto</Link>
          </li>
          <li>
            <Link className="nav-link" to={href}>Comprar</Link>
          </li>
          <CartWidget />
        </ul>         
      </nav>

    </header>
  );
};

export default NavBar;

