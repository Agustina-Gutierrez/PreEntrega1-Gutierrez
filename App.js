import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Greeting from './components/ItemListContainer/ItemListContainer.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
       <Route path="/" element={<Greeting saludo='Bienvenido a Amar Maderas'/>} />
       <Route path="*" element={<h2>Pagina no encontrada</h2>}/>
      </Routes>
    </Router>
    </>
  );
}

