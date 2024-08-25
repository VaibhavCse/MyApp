import React from 'react';
import './Offers.css'; 
import category_in_focus1 from '../assets/CATEGORYINFOCUS1.jpeg';
import category_in_focus2 from '../assets/CATEGORYINFOCUS2.jpeg';
import category_in_focus3 from '../assets/CATEGORYINFOCUS3.jpeg';

export default function Offers() {
  return (
    <div className="offers-container">
      <div className="banner">
        <h1>Stock up on health, not chemicals</h1>
        <p className="discount">25% OFF</p>
        <p className="min-purchase">on minimum purchase of ₹2500</p>
        <p className="cashback">Additional 10% cashback on every order</p>
      </div>
      
      <div className="category-section">
        <h2>CATEGORY IN FOCUS</h2>
        <p>Pure pulses: unpolished and chemical free</p>
        <div className="product-grid">
          <img src={category_in_focus1} alt="Category 1" className="category_in_focus"/>
          <img src={category_in_focus2} alt="Category 2" className="category_in_focus"/>
          <img src={category_in_focus3} alt="Category 3" className="category_in_focus"/>
        </div>
      </div>

      <div className="sugar-honey-section">
        <h2>SUGAR & HONEY</h2>
        <p>Indulge guilt-free with our natural sweeteners</p>
        <div className="product-images">
          {/* Add product images here */}
        </div>
      </div>

      <div className="bestsellers-section">
        <h2>OUR BESTSELLERS</h2>
        <p>Explore what everyone’s loving</p>
        <div className="product-images">
          {/* Add product images here */}
        </div>
      </div>

      <div className="additional-offers">
        <p>Experience the difference in purity & quality with our chemical-free groceries</p>
        <div className="flat-offers">
          <div className="offer">
            <p>FLAT 10% off</p>
            <p>on minimum order value of ₹750</p>
          </div>
          <div className="offer">
            <p>FLAT 15% off</p>
            <p>on minimum order value of ₹1500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
