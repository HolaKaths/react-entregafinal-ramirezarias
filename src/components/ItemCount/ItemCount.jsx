import './ItemCount.css';
import { useState } from "react";



const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

   
    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const reducir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <div>
            <button onClick={reducir}> - </button>
            <p> {contador} </p>
            <button onClick={aumentar}> + </button>
        </div>

        <button onClick ={() =>funcionAgregar}> Agregar al carrito </button>
        </>
    )
}

export default ItemCount
