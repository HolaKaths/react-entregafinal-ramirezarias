import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Categorias.css';

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `Categoria ${categoria}`;
  }, [categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <div className="container">
      <h2 className="title">Categorías de Productos</h2>
      <div className="containercat">
        <NavLink className="catProducto" to="/categoria/Alimentos">Alimentos</NavLink>
        <NavLink className="catProducto" to="/categoria/Snacks">Snacks</NavLink>
        <NavLink className="catProducto" to="/categoria/Higiene">Higiene</NavLink>
        <NavLink className="catProducto" to="/categoria/Accesorios">Accesorios</NavLink>
        <NavLink className="catProducto" to="/categoria/Juguetes">Juguetes</NavLink>
        <NavLink className="catProducto" to="/categoria/Suplementos">Suplementos</NavLink>
      </div>
    </div>
  );
};

export default Categorias;


