import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(1);

    let maximo = 10;
    const aumentar = () => {
        if (contador < maximo) {
            setContador(contador + 1);
        }
    }

    const reducir = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={reducir}> - </button>
            <p> {contador} </p>
            <button onClick={aumentar}> + </button>
        </div>
    )
}

export default ItemCount
