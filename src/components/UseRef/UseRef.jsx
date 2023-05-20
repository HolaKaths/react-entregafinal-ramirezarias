import {useRef} from 'react';


const UseRef = () => {
    const contadorCarrito = useRef(0);
  

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <h2> Aquí podrás comprar tus Productos Pet favoritos: {contadorCarrito.current}  </h2>
        <button onClick={agregarAlCarrito}> Agregar al Carrito </button>

    </div>
  )
}

export default UseRef