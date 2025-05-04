import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddProduct from './pages/Addproduct';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch API products once
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/add-product" element={<AddProduct setProducts={setProducts} />} />
      </Routes>
    </>
  );
}

export default App;
