import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApiContext } from "../../contexts/apiContext"; // Assuming you're using context to get product list
import { Container, Row, Col, Button } from "react-bootstrap";

function SelectedProduct() {
  const { productId } = useParams();  // Get the productId from the URL
  const { pList } = useContext(ApiContext);  // Get the list of products from context

  // Find the product with the matching productId
  const product = pList.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;  // If the product is not found
  }


    return (
      <Container fluid className="p-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg">
              <Row noGutters>
                <Col md={6}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                  />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title className="text-center">{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">
                      $ {product.price}
                    </Card.Subtitle>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button variant="primary" size="lg" block>
                      Buy Now
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default SelectedProduct;
