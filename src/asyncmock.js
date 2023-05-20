const productos = [
    { nombre: "Acondicionador", precio: 600, id: "001", img: "/Images/acondicionador.png", categorias: "Higiene" },
    { nombre: "Champú", precio: 550, id: "002", img: "/Images/champu (1).png", categorias: "Higiene" },
    { nombre: "Antipulgas", precio: 306, id: "003", img: "/Images/anti-pulgas.png", categorias: "Higiene" },
    { nombre: "Cepillo", precio: 100, id: "004", img: "/Images/cepillo.png", categorias: "Higiene" },
    { nombre: "Óleo VitE", precio: 300, id: "005", img: "/Images/vitamina-e.png", categorias: "Suplementos" },
    { nombre: "Collar azul", precio: 300, id: "006", img: "/Images/collar-azul.png", categorias: "Accesorios" },
    { nombre: "Collar isabelino", precio: 250, id: "007", img: "/Images/collar-isabelino.png", categorias: "Accesorios" },
    { nombre: "Collar rojo", precio: 300, id: "008", img: "/Images/collar-rojo.png", categorias: "Accesorios" },
    { nombre: "Cortauñas", precio: 230, id: "009", img: "/Images/cortaunas.png", categorias: "Higiene" },
    { nombre: "Gel de baño", precio: 470, id: "010", img: "/Images/geldebano.png", categorias: "Higiene" },
    { nombre: "Jabón", precio: 470, id: "011", img: "/Images/jabon.png", categorias: "Higiene" },
    { nombre: "Kit Peluquería", precio: 670, id: "012", img: "/Images/kit-peluqueria.png", categorias: "Higiene" },
    { nombre: "Kit Paso 1 & Paso 2", precio: 645, id: "013", img: "/Images/kitchampuyacondicionador.png", categorias: "Higiene" },
    { nombre: "Loción pelaje", precio: 512, id: "014", img: "/Images/locion-pelaje.png", categorias: "Higiene" },
    { nombre: "Loción", precio: 512, id: "015", img: "/Images/locion.png", categorias: "Higiene" },
    { nombre: "Talco", precio: 512, id: "016", img: "/Images/talco.png", categorias: "Higiene" },
    { nombre: "Toalla", precio: 755, id: "017", img: "/Images/toalla.png", categorias: "Higiene" },
    { nombre: "Alimento seco", precio: 180, id: "018", img: "/Images/alimentos-para-mascotas.png", categorias: "Alimentos" },
    { nombre: "Galletas", precio: 180, id: "019", img: "/Images/snacks.png", categorias: "Snacks" },
    { nombre: "Bozal", precio: 237, id: "020", img: "/Images/bozal.png", categorias: "Accesorios" },
    { nombre: "Colgante pluma", precio: 112, id: "021", img: "/Images/colgante-pluma.png", categorias: "Juguetes" },
    { nombre: "Colgante ratón", precio: 117, id: "022", img: "/Images/colgante-raton.png", categorias: "Juguetes" },
    { nombre: "Kit juguetes", precio: 295, id: "023", img: "/Images/kit-juguetes.png", categorias: "Juguetes" },
    { nombre: "Kong", precio: 99, id: "024", img: "/Images/kong.png", categorias: "Juguetes" },
    { nombre: "Rascador sencillo", precio: 100, id: "025", img: "/Images/rascador.png", categorias: "Juguetes" },
    { nombre: "Rascador doble", precio: 156, id: "026", img: "/Images/rascador-doble.png", categorias: "Juguetes" },
    { nombre: "Rascador deluxe", precio: 100, id: "027", img: "/Images/rascador-deluxe.png", categorias: "Juguetes" },
    { nombre: "Cuerda", precio: 52, id: "028", img: "/Images/cuerda.png", categorias: "Juguetes" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 1000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.categorias === idCategoria);
            resolve(productosCategoria);
        }, 1000);
    });
};