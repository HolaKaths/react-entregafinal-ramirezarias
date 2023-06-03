import './CartWidget.css'
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';



const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


  return (
    <Link to='{/Cart}'>
      <RiShoppingCart2Line className='imgCarrito' />

      {

        totalCantidad > 0 && <span> {totalCantidad} </span>
      }

    </Link>
  )
}

export default CartWidget
