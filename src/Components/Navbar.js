import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Your custom styles
import logo from '../assets/brandlogo.jpeg';  // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';  // Font Awesome Icons

export default function Navbar1({ title, cartItems }) {
  console.log("Navbar component rendered");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Brand logo and title */}
        <Navbar.Brand as={Link} to="/" className="brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Brand Logo"
          /> 
          {title}
        </Navbar.Brand>
        
        {/* Navbar toggler for responsive behavior */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Navbar */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* Main Navigation Links */}
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

            {/* Dropdown for "Shop by Diet" */}
            <NavDropdown title="Shop by Diet" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/ghee-oils">Ghee & Oils</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/grains-cereals">Grains & Cereals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/snacking">Snacking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/superfoods">Superfoods</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search form */}
          <Form className="d-flex search-form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className="search-button">
              <i className="fa fa-search"></i>
            </Button>
          </Form>
          
          {/* Account and Cart Icons */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/account" className="me-3">
              <i className="fas fa-user"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Prop types validation
Navbar1.propTypes = {
  title: PropTypes.string.isRequired,  // Ensuring title is passed
  cartItems: PropTypes.array.isRequired,  // Ensuring cartItems is passed
};
