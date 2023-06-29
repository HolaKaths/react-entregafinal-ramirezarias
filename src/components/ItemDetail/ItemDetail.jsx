import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Services/config";




const descriptions = {
  '002': 'Un acondicionador de alta calidad para mantener el pelaje suave y brillante.',
  '001': 'Un champú suave y efectivo que dejará a tu mascota con un olor fresco y limpio.',
  '003': 'Un suplemento nutritivo con vitamina E para fortalecer la salud de tu mascota.',
  '004': 'Un collar azul elegante y duradero para añadir estilo a tu mascota.',
  '005': 'La mejor protección postquirúrgica para tu mascota.',
  '006': 'Un alimento completo y equilibrado para satisfacer las necesidades nutricionales de tu mascota.',
  '007': 'Deliciosas galletas para premiar y consentir a tu mascota en cualquier momento.',
  '008': 'Un colgante con diseño de pluma para añadir estilo y personalidad a tu mascota.',
  '009': 'Un colgante con forma de ratón para entretener y divertir a tu mascota.',
  '010': 'Un completo kit de peluquería para mantener a tu mascota con un aspecto impecable.',
  '011': 'Un jabón natural y suave para cuidar la piel sensible de tu mascota.',
  '013': 'Un kit de champú y acondicionador para un cuidado completo del pelaje de tu mascota.',
  '014': 'Una loción especial para mantener el pelaje de tu mascota suave y saludable.',
  '015': 'Una loción hidratante para proteger y nutrir la piel de tu mascota.',
  '016': 'Un talco suave y absorbente para mantener a tu mascota fresca y libre de olores.',
  '017': 'Una toalla suave y absorbente para secar a tu mascota después del baño.',
  '020': 'Un bozal cómodo y seguro para controlar el comportamiento de tu mascota.',
  '023': 'Un kit de juguetes variados para mantener a tu mascota activa y entretenida.',
  '024': 'Un juguete clásico y resistente que estimula el instinto de masticación de tu mascota.',
  '025': 'Un rascador sencillo para satisfacer el instinto de arañar de tu mascota. Disponible en colores beige y marrón.',
  '026': 'Un rascador doble con múltiples opciones para el entretenimiento y cuidado de las uñas de tu mascota.',
  '027': 'Un rascador deluxe con plataformas y escondites para el máximo disfrute de tu mascota.',
  '028': 'Una cuerda resistente y duradera para juegos de tira y afloja con tu mascota. Disponible en colores verde, azul y rojo.',

};



const ItemDetail = ({ id, nombre, precio, img, stock, producto }) => {
  const description = descriptions[id];
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  const descontarStock = async (producto) => {
    const productoRef = doc(db, "Inventario", producto.id);
    const nuevoStock = producto.stock - 1;

    await updateDoc(productoRef, { stock: nuevoStock });

  }

  return (
    <div className="itemDetailContainer">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <h3>Stock: {stock}</h3>
      <p>{description}</p>


      <button onClick={() => descontarStock(producto)}>Comprar</button>

      {agregarCantidad > 0 ? (
        <Link to="/Cart">Terminar compra</Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};


export default ItemDetail;