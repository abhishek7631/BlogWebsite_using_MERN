import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

function SignUpModal({ showSignup, handleSignupClose }) {
  return (
    <Modal show={showSignup} onHide={handleSignupClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="signupName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="signupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
