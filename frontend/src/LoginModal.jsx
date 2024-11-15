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

          <Button variant="primary" type="submit" className="w-100">
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
