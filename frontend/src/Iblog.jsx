import React from "react";

function Iblog() {
  return (
    <div>
      <Card.Text>{description.slice(0, 100)}...</Card.Text>
      <Card.Text>
        <strong>Why Visit:</strong> {why}
      </Card.Text>
      <Card.Text>
        <strong>Ideal For:</strong> {idealFor}
      </Card.Text>
      <Card.Text>
        <strong>Best Time:</strong> {bestTime}
      </Card.Text>
      <Card.Text>
        <strong>Ideal Duration:</strong> {iDuratrion}
      </Card.Text>
      <Card.Text>
        <strong>How to Reach:</strong> {hReach}
      </Card.Text>
      <Card.Text>
        <strong>Things to Do:</strong> {thingsToDo}
      </Card.Text>
      <Card.Text>
        <strong>Places to Stay:</strong> {placeToStay}
      </Card.Text>
    </div>
  );
}

export default Iblog;
