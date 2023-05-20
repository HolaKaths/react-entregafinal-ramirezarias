import React from 'react';
import './ItemDetail.css';

const descriptions = {
    '001': 'Un acondicionador de alta calidad para mantener el pelaje suave y brillante.',
    '002': 'Un champú suave y efectivo que dejará a tu mascota con un olor fresco y limpio.',
    '003': 'La solución perfecta para combatir las pulgas y proteger a tu mascota de parásitos.',
    '004': 'Un cepillo ergonómico diseñado para un cepillado fácil y cómodo.',
    '005': 'Un suplemento nutritivo con vitamina E para fortalecer la salud de tu mascota.',
    '006': 'Un collar azul elegante y duradero para añadir estilo a tu mascota. Disponible en azul claro y azul oscuro.',
    '007': 'Un collar isabelino transparente que ayuda en la recuperación de heridas o cirugías.',
    '008': 'Un collar rojo vibrante para destacar el estilo de tu mascota. Disponible en rojo intenso y rojo fuego.',
    '009': 'Un cortauñas de alta calidad para mantener las uñas de tu mascota en buen estado.',
    '010': 'Un gel de baño suave que limpia profundamente sin irritar la piel de tu mascota.',
    '011': 'Un jabón natural y suave para cuidar la piel sensible de tu mascota.',
    '012': 'Un completo kit de peluquería para mantener a tu mascota con un aspecto impecable.',
    '013': 'Un kit de champú y acondicionador para un cuidado completo del pelaje de tu mascota.',
    '014': 'Una loción especial para mantener el pelaje de tu mascota suave y saludable.',
    '015': 'Una loción hidratante para proteger y nutrir la piel de tu mascota.',
    '016': 'Un talco suave y absorbente para mantener a tu mascota fresca y libre de olores.',
    '017': 'Una toalla suave y absorbente para secar a tu mascota después del baño.',
    '018': 'Un alimento completo y equilibrado para satisfacer las necesidades nutricionales de tu mascota.',
    '019': 'Deliciosas galletas para premiar y consentir a tu mascota en cualquier momento.',
    '020': 'Un bozal cómodo y seguro para controlar el comportamiento de tu mascota.',
    '021': 'Un colgante con diseño de pluma para añadir estilo y personalidad a tu mascota. Disponible en colores plateado, dorado y cobre.',
    '022': 'Un colgante con forma de ratón para entretener y divertir a tu mascota.',
    '023': 'Un kit de juguetes variados para mantener a tu mascota activa y entretenida.',
    '024': 'Un juguete clásico y resistente que estimula el instinto de masticación de tu mascota.',
    '025': 'Un rascador sencillo para satisfacer el instinto de arañar de tu mascota. Disponible en colores beige y marrón.',
    '026': 'Un rascador doble con múltiples opciones para el entretenimiento y cuidado de las uñas de tu mascota.',
    '027': 'Un rascador deluxe con plataformas y escondites para el máximo disfrute de tu mascota.',
    '028': 'Una cuerda resistente y duradera para juegos de tira y afloja con tu mascota. Disponible en colores verde, azul y rojo.',
    
  };
  
  
  
  const ItemDetail = ({ id, nombre, precio, img }) => {
    const description = descriptions[id];
  
    return (
      <div className="itemDetailContainer">
        <h2>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>{description}</p>
        <img src={img} alt={nombre} />
      </div>
    );
  }
  
  export default ItemDetail;