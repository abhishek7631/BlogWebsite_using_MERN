import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

function LoginModal({ showLogin, handleLoginClose }) {
  return (
    <Modal show={showLogin} onHide={handleLoginClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
