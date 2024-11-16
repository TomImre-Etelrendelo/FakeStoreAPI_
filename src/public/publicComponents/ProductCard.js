import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";

function ProductCard({ title, image, description }) {
  return (
    <Card style={{ width: "18rem" }}>
      {
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ height: "250px", objectFit: "cover" }}
        />
      }
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ height: "200px", overflowY: "auto" }}>
          {description}
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
