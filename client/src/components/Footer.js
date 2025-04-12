import React from 'react';
import './Footer.css'; // Import the Footer.css file
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-grid">
          <Col>
            <h2 className="footer-logo">
              Abay <span>Garment</span>
            </h2>
            <p className="footer-about">
              Abay Garment is dedicated to providing high-quality garments inspired by the beauty and flow of the Abay River.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="/" className="footer-link">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="/shop" className="footer-link">Shop</a>
              </li>
              <li className="footer-link-item">
                <a href="/about" className="footer-link">About Us</a>
              </li>
              <li className="footer-link-item">
                <a href="/contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>123 Abay Street, Addis Ababa, Ethiopia</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+251 123 456 789</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>info@abaygarment.com</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom">
            Copyright &copy; Abay Garment {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;