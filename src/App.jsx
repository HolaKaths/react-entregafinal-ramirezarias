import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Categorias from './components/Categorias/Categorias';
import Banner from './components/Banner/Banner';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Productos from './components/Productos/Productos';
import { CarritoProvider } from './Context/CarritoContext';
import Checkout from './components/Checkout/Checkout';
import Formulario from './components/Formulario/Formulario';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Banner />
      <CarritoProvider>
        <Routes>
          <Route path='/' element={<>
            <Categorias />
            <Productos />
          </>} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/QuienesSomos' element={<QuienesSomos />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Formulario' element={<Formulario />} />
        </Routes>
      </CarritoProvider>
      <br />
      <Footer />
    </BrowserRouter>
  );
}


export default App;

