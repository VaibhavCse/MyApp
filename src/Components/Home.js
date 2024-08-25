import React from 'react';
import './Home.css'; // Assuming you will use custom styles
import bannerImage from '../assets/bannernew.jpg'; // Replace with your actual image path
import promoCard1 from '../assets/banner.jpeg';
import promoCard2 from '../assets/card2.jpeg';
import promoCard3 from '../assets/card3.jpeg';
import productData from './data/productData'; // Ensure this import is correct and unique
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'; // Ensure react-toastify is imported
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

// Ensure props are passed correctly to the Home component
const Home = ({ handleAddToCart }) => {  
  // Function to handle adding product to cart and triggering a toast notification
  const handleAddProduct = (product) => {
    handleAddToCart(product); // Call the passed function to add the product to the cart

    // Trigger the toast notification
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="home-page">
      {/* Banner Section */}
      <section className="banner-section">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Cold-Pressed, Organic Goodness in Every Drop</h1>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotional-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="promo-card">
                <img src={promoCard1} alt="Banner" className="promoCard1" />
                <h3>From Nature’s Heart to Your Health</h3>
                <p>Discover the benefits of cold-pressed oils.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="promo-card">
                <img src={promoCard2} alt="Banner" className="promoCard2" />
                <h3>Cold-Pressed Quality, Organic Goodness</h3>
                <p>Experience the rich nutrients preserved in every bottle.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="promo-card">
                <img src={promoCard3} alt="Banner" className="promoCard3" />
                <h3>Did You Know?</h3>
                <p>
                  The roots of cold-pressed oil date back to the Indus Valley
                  Civilization.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Section */}
      <ToastContainer />
      <section className="product-section">
        <Container>
          <h2>Our Products</h2>
          <Row>
            {productData.map((product, index) => (
              <Col key={index} md={3} sm={6} className="mb-4">
                <Card className="product-card">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
                    <Button variant="primary" onClick={() => handleAddProduct(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
