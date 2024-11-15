import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">Uttarakhand Unfolded</h5>
            <p>
              Discover, plan, and explore the world's most beautiful places.
              Your journey starts with us!
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#terms" className="text-light text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#policy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Footer Bottom */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Travel Explorer. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
