import React from 'react';
import ReactDOM from 'react-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Categorias from './components/Categorias/Categorias';
import UseRef from './components/UseRef/UseRef';
import Banner from './components/Banner/Banner';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import RandomPet from './components/RandomPet/RandomPet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RiH2 } from 'react-icons/ri';
import Cart from './components/Cart/Cart';
import { useContext } from 'react';
import Productos from './components/Productos/Productos';
import { CarritoProvider } from './Context/CarritoContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <br />
      <Banner />
      <Productos />
      <CarritoProvider>
        <Routes>
          <Route path='/' element={<Categorias />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/QuienesSomos' element={<QuienesSomos />} />
          <Route path='/RandomPet' element={<RandomPet />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='*' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          
        </Routes>
      </CarritoProvider>
      <ItemListContainer greeting="¡Bienvenido a tu Tienda Pet!" />

      <br />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

