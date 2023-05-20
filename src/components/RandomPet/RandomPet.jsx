import React, { useState, useEffect } from 'react';
import './RandomPet.css';
import Categorias from '../Categorias/Categorias';

function RandomPet() {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const obtenerRazaAleatoria = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar la imagen");
        }
        return response.json();
      })
      .then(data => {
        setImageUrl(data.message);
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  useEffect(() => {
    obtenerRazaAleatoria();
  }, []);

  return (
    <div className="containerpet random-pet-container">
      <div className="random-pet-wrapper">
        <h1>Hoy queremos regalarte una foto pet</h1>
        <p className="dogInfo"></p>
        <h2>¿Cuál será el tuyo?</h2>
        {error && <div className="alert">{error}</div>}
        <div className="randomImageContainer image-container">
          {imageUrl && <img src={imageUrl} alt="Random Pet" className="random-image" />}
        </div>
        <p className="dogInfo h5">Este será tu foto pet de la suerte...</p>
        <button id="btn" onClick={obtenerRazaAleatoria}>¡Quiero mi Pet!</button>
      </div>
    </div>
  );
}

export default RandomPet;
