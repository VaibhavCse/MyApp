import React from 'react';
import './Cart.css'; // Custom CSS for cart styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart({ cartItems, removeFromCart, updateCartItems }) {
  
  // Function to handle quantity updates
  const updateQuantity = (item, newQuantity) => {
    // Prevent quantity from being less than 1
    if (newQuantity < 1) return;
    
    // Update the quantity in the cart
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name ? { ...cartItem, quantity: newQuantity } : cartItem
    );

    // Call the updateCartItems function to set the new cart state
    updateCartItems(updatedCart);

    // Trigger a toast notification for quantity update
    toast.info(`${item.name} quantity updated to ${newQuantity}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);

    // Trigger a toast notification for item removal
    toast.error(`${item.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn("Your cart is empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Trigger a toast notification for checkout
    toast.success("Thank you for your purchase!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear the cart after checkout
    updateCartItems([]);
  };

  return (
    <div className="cart-container">
      <ToastContainer />
      <h2 className="cart-title">Your Cart</h2>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-item-price">₹{item.price * item.quantity}</span>
              </div>
              <button 
                className="remove-button" 
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <h3>Total: ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
      </div>
      
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
}
