import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from "../../contexts/apiContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ModifyProductForm({ product, onClose }) {
  const { modifyData } = useContext(ApiContext); // Assuming addProduct is available in context

  const [formData, setFormData] = useState({
    name: product.title || "",
    price: product.price || "",
    category: product.category || "",
    description: product.description || "",
  });


  useEffect(() => {
    if (product) {
      setFormData({
        name: product.title || "",
        price: product.price || "",
        category: product.category || "",
        description: product.description || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Map 'name' back to 'title' if necessary (depends on your API's expected structure)
    const updatedProduct = {
      ...formData,
      title: formData.name, // Map 'name' to 'title' for API compatibility
    };
  
    modifyData(product.id, updatedProduct); // Call modifyData with the product ID and updated data
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter product name" value={formData.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" value={formData.price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter product Category" value={formData.category} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product image URL"
          value={formData.image}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ModifyProductForm;
