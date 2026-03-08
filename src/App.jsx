import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Products from './Pages/Products'
import Navbar from './Components/Navbar';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';

function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar />

    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
