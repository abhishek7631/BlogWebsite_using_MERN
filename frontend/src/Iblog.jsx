import React from "react";
import blog from "./Data";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Iblog() {
  const { id } = useParams(); // Get the ID from the URL
  const post = blog.find((item) => item.id === id); // Find the blog post by ID

  if (!post) {
    return <h2 className="text-center my-5">Blog post not found!</h2>;
  }

  return (
    <Container className="my-5">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={post.img}
          alt={post.name}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="mb-4">{post.name}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>
            <strong>Why Visit:</strong> {post.why}
          </Card.Text>
          <Card.Text>
            <strong>Ideal For:</strong> {post.idealFor}
          </Card.Text>
          <Card.Text>
            <strong>Best Time:</strong> {post.bestTime}
          </Card.Text>
          <Card.Text>
            <strong>Ideal Duration:</strong> {post.iDuratrion}
          </Card.Text>
          <Card.Text>
            <strong>How to Reach:</strong> {post.hReach}
          </Card.Text>
          <Card.Text>
            <strong>Things to Do:</strong> {post.thingsToDo}
          </Card.Text>
          <Card.Text>
            <strong>Places to Stay:</strong> {post.placeToStay}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Iblog;
