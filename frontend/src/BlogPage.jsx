import React from "react";
import blog from "./Data";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Blog</h1>
      <Row className="g-4">
        {blog.map((post) => (
          <Col key={post.id} md={6} lg={4}>
            <BlogCard
              id={post.id}
              name={post.name}
              image={post.img}
              description={post.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function BlogCard({ id, name, image, description }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description.slice(0, 100)}...</Card.Text>
        <Link to={`/blog/${id}`}>
          <Button variant="primary">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogPage;
