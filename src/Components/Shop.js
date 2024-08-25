import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'; // Ensure react-toastify is imported
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import productData from './data/productData';  // Your product data

export default function Shop({ handleAddToCart }) {
  // Function to handle adding product to cart and triggering the toast
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
    <div>
      {/* ToastContainer must be added to display toast notifications */}
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
}

