import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


function ProductCard({ title, image, description }) {

  return (
    <div>
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

        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
