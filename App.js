import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Greeting from './components/ItemListContainer/ItemListContainer.jsx';
import './index.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Greeting saludo='Bienvenido a Amar Maderas'/>
    </>
  );
}
