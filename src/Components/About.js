import React, { useState } from 'react';
import './About.css';
import organicFoodImage from '../assets/aboutus.jpeg'; // Ensure the image path is correct

export default function About(props) {
    const [mystyles, setmystyle] = useState({
        backgroundColor: "#ffffff",
        color: "#333",
    });

    const [btnTxt, setbtntxt] = useState("Enable Dark Mode");

    const togglemodes = () => {
        if (mystyles.color === "#333") {
            setmystyle({
                backgroundColor: "#1e1e1e",
                color: "#e0e0e0",
            });
            setbtntxt("Enable Light Mode");
        } else {
            setmystyle({
                backgroundColor: "#ffffff",
                color: "#333",
            });
            setbtntxt("Enable Dark Mode");
        }
    };

    return (
        <div className="container py-5" style={mystyles}>
            <div className="card shadow-sm border-0 mb-4" style={mystyles}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="image-container">
                            <img src={organicFoodImage} alt="Organic Foods" className="img-fluid rounded-start full-height" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title aboutus_header">About Us</h1>
                            <p className="card-text">
                                Welcome to <strong>Organic Foods</strong>, your trusted source for premium organic foods. 
                                We are passionate about providing you with the finest organic products that promote health, sustainability, and the well-being of our planet.
                            </p>
                            <h2 className="card-title">Our Mission</h2>
                            <p className="card-text">
                                At <strong>Organic Foods</strong>, our mission is simple: to make high-quality organic foods accessible to everyone. 
                                We believe that eating organically isn't just a lifestyle choice but a commitment to better health, environmental sustainability, and support for ethical farming practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 mb-4" style={mystyles}>
                        <div className="card-body">
                            <h5 className="card-title">Why Choose Us?</h5>
                            <p className="card-text">
                                At Organic Foods, we prioritize quality, transparency, and sustainability. 
                                All our products are sourced from certified organic farms that follow strict guidelines to ensure the best quality and taste. We are the best in the category.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm border-0 mb-4" style={mystyles}>
                        <div className="card-body">
                            <h5 className="card-title">Our Commitment to You</h5>
                            <p className="card-text">
                                We are committed to delivering products that are not only good for you but also good for the planet. 
                                From organic fruits and vegetables to whole grains and natural sweeteners, every product we offer is 100% organic and chemical-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4" style={mystyles}>
                <div className="card-body">
                    <h5 className="card-title">Our Values</h5>
                    <ul className="values-list">
                        <li><strong>Health First:</strong> Providing the healthiest food options for you and your family.</li>
                        <li><strong>Sustainability:</strong> Supporting eco-friendly farming practices and sustainable sourcing.</li>
                        <li><strong>Transparency:</strong> Ensuring every product's origin is clear, so you know exactly what you're eating.</li>
                        <li><strong>Community:</strong> Working with local farmers and producers to boost community economies and promote ethical business practices.</li>
                    </ul>
                </div>
            </div>

            {/* Toggle Button */}
            <div className="text-center mt-4">
                <button 
                    onClick={togglemodes} 
                    style={{ backgroundColor: "#4d6530", color: "white" }} 
                    className="btn btn-lg btn-toggle-mode px-4 py-2">
                    {btnTxt}
                </button>
            </div>
        </div>
    );
}
