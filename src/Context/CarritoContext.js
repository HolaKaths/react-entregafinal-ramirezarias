
import { useState, createContext } from "react";



export const CarritoContext = createContext({ carrito: [] });


export const CarritoProvider = ({ children }) => {
  
    const [carrito, setCarrito] = useState([]);


    console.log(carrito);


    const agregarProducto = (item, cantidad) => {
   
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
  
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
    
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });

            setCarrito(carritoActualizado);
        }
    }

    /*
    //Función auxiliar "yaEstaEnCarrito":
    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }
    */


    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }


    const vaciarCarrito = () => {
        setCarrito([]);
    }

    

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }} >
            {children}
        </CarritoContext.Provider>

    )


}