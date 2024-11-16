import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ title, image, description }) {
  return (
    <Card style={{ width: '18rem' }}>
      { <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} /> }
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
