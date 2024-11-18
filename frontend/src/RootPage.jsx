import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import LoginModal from "./LoginModal"; // Import LoginModal
import SignUpModal from "./SignUpModal"; // Import SignUpModal

function RootPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Handle Login Modal
  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  // Handle Sign Up Modal
  const handleSignupShow = () => setShowSignup(true);
  const handleSignupClose = () => setShowSignup(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "28px",
              color: "#f8f9fa",
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "0.5rem 1rem",
            }}
          >
            Uttarakhand Unfolded
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button
                variant="outline-light"
                className="me-2"
                onClick={handleLoginShow}
              >
                Login
              </Button>
              <Button variant="light" onClick={handleSignupShow}>
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Intro Section */}
      <Container className="text-center py-5 bg-light">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex flex-column align-items-center justify-content-center text-center py-5">
              {/* Welcome Text */}
              <h1 className="display-3 mb-4 text-dark">Welcome to</h1>
              {/* ReactTyped Section */}
              <ReactTyped
                className="text-danger display-4 fw-bold mb-4"
                strings={[
                  "Mountain Vibes",
                  "Majestic Views",
                  "Serene Uttarakhand",
                ]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>

            <p className="lead mt-4 text-muted">
              Embark on unforgettable adventures! Explore the world’s most
              breathtaking destinations, thrilling activities, and cultural
              treasures—all in one place.
            </p>
            <Button
              variant="success"
              size="lg"
              className="mt-4"
              onClick={handleSignupShow}
            >
              Start Your Journey 🚀
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg"
              alt="Travel Illustration"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* Modals */}
      <LoginModal showLogin={showLogin} handleLoginClose={handleLoginClose} />
      <SignUpModal
        showSignup={showSignup}
        handleSignupClose={handleSignupClose}
      />

      {/* Features Section */}
      <Container>
        <Row className="mt-5">
          <Col>
            <h2 className="fw-bold text-secondary">What You Can Explore</h2>
            <p className="text-muted">
              Plan, explore, and enjoy—your dream journey awaits!
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={3}>
            <div className="p-3 border rounded shadow-sm bg-white">
              <h3>🌍 Popular Destinations</h3>
              <p>Discover the most sought-after places worldwide.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded shadow-sm bg-white">
              <h3>🏔️ Adventure Activities</h3>
              <p>Feel the thrill with unforgettable outdoor adventures.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded shadow-sm bg-white">
              <h3>🍴 Local Cuisines</h3>
              <p>Savor delicious dishes from diverse cultures.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded shadow-sm bg-white">
              <h3>🏨 Hotel Stays</h3>
              <p>Find the perfect accommodations for your trip.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RootPage;
