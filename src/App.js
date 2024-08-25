import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './Components/Navbar.js';
import About from './Components/About';
import Home from './Components/Home.js';
import Shop from './Components/Shop';
import Offers from './Components/Offers';
import WalletComponent from './Components/WalletComponent';
import BlogPage from './Components/Blog.js';
import Cart from './Components/Cart';

function App() {
  // Cart state to manage items and their quantities
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.name === product.name);

    if (existingItem) {
      // Update the quantity of the existing item
      setCartItems(cartItems.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item to the cart with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name));
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar with cart items passed down */}
        <Navbar1 title="Organic Foods" cartItems={cartItems} />

        <div className="content">
          {/* Route configuration */}
          <Routes>
            <Route 
              path="/" 
              element={<Home handleAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/shop" 
              element={<Shop handleAddToCart={handleAddToCart} />} 
            />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/wallet" element={<WalletComponent />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  removeFromCart={handleRemoveFromCart} 
                  updateCartItems={setCartItems} 
                />
              } 
            />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
