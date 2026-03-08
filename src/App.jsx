import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Products from './Pages/Products'
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
