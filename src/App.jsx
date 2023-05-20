import React from 'react';
import ReactDOM from 'react-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Categorias from './components/Categorias/Categorias';
import UseRef from './components/UseRef/UseRef';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Banner />
      <Routes>
        <Route path='/' element={<Categorias />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />

      </Routes>

      <ItemListContainer greeting="¡Bienvenido a tu Tienda Pet!" />
      


      <br />

     
      <Footer />
    </BrowserRouter>
  );
}






export default App;

