import React from 'react';
import './QuienesSomos.css';
import Categorias from '../Categorias/Categorias';

function QuienesSomos() {
  return (
    <div>
      <div className="content">
        <p>
          <h2>¿Qué es Proyecto Pet?</h2>
          Proyecto Pet nace de la necesidad de contar con un archivo en la nube que recopile todo lo
          que ocurre con tu mascota en términos de salud y bienestar general.
          Imagina poder ingresar desde tu celular, computadora (o cualquier dispositivo con Internet) a
          la historia clínica de tu mascota, donde tendrás con fecha y detalles todo sobre sus
          controles, procedimientos veterinarios, vacunación, recordatorios de vacunas, peluquería y
          ¡mucho más!
          <br />
          <br />
          Adicionalmente accederás a nuestra Tienda Pet en donde podrás encontrar productos especializados para tus mascotas como 
          alimento orgánico, snacks importados, snacks locales, juguetes hipoalergénicos y accesorios exclusivos por tamaños (sí, sabemos
          que conseguir disfraces para perros de más de 45kg es difícil, así que acá podrás adquirirlos *guiño, guiño*).
          <br />
          <br />
          <h3>¿Cómo puedo ser parte de Proyecto Pet?</h3>
          <br />
          ¡Ser parte de la comunidad de Proyecto Pet es muy fácil! Para hacerlo solo debes registrarte en nuestra cuenta básica
          con el fin de acceder a los beneficios del portal. Si deseas adquirir el plan premium, no dudes en
          contactarnos. Vive la experiencia Pet.
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <div className="categorias-container">
        <Categorias />
      </div>
    </div>
  );
}

export default QuienesSomos;
