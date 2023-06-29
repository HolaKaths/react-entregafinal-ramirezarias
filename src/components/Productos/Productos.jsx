import './Productos.css';
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/config";
import ItemDetail from '../ItemDetail/ItemDetail';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "Inventario"), where("precio", "<", 800));

        getDocs(misProductos)
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, []);

    return (
        <>
            <h2 className='titulo'> Productos </h2>
            <div className='productos-container'>
                {productos.map((producto) => (
                    <div className='producto-card' key={producto.id}>
                        <ItemDetail
                            img={producto.img}
                            nombre={producto.nombre}
                            id={producto.id}
                            precio={producto.precio}
                            stock={producto.stock}
                            producto={producto}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Productos;
