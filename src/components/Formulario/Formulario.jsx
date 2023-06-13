import React from 'react';
import { db } from '../../Services/config';
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setTelefono] = useState("");



  const manejadorFormulario = (event) => {
    event.preventDefault();


    addDoc(collection(db, "Usuarios"), {
      nombre: nombre,
      apellido: apellido,
      telefono: celular,
    })

    setNombre("");
    setApellido("");
    setTelefono("");

  }

  return (
    <form onSubmit={manejadorFormulario}>

      <h2>Formulario de contacto</h2>
      <label htmlFor=""> Nombre </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label htmlFor=""> Apellido </label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

      <label htmlFor=""> Celular </label>
      <input type="text" value={celular} onChange={(e) => setTelefono(e.target.value)} />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
