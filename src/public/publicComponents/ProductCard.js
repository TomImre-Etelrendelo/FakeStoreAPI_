import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


function ProductCard({ title, image, description }) {


  function FirstTenWords({ description }) {
    const getFirstTenWords = () => {
      // Split the description into words
      const words = description.split(' ');
      // Get the first 10 words
      const firstTen = words.slice(0, 10);
  
      // If there are more than 10 words, add "..."
      if (words.length > 10) {
        return `${firstTen.join(' ')}...`;
      }
  
      // If there are 10 or fewer words, just return them
      return firstTen.join(' ');
    };
  
    return (
      <div>
        <p>{getFirstTenWords()}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "200px", }}>
      <Card style={{ width: "18rem"}}>
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
            height: "180px"
          }}
        >
          <Card.Title style={{textAlign: "center"}}>{title}</Card.Title>
          <Card.Text >
            
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
