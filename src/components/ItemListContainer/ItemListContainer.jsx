import { useState, useEffect } from 'react'
//import { getProductos, getProductosPorCategoria, } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../Services/config';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();


    useEffect(() => {

        const misProductos = idCategoria ? query(collection(db, "Inventario"),
            where("categorias", "==", idCategoria)) : collection(db, "Inventario");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))

    }, [idCategoria])

    return (
        <div className="container1">
            <h2 className="titleprod">Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer