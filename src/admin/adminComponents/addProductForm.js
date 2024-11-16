import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ApiContext } from "../../contexts/apiContext";

function AddProductForm() {
  const { postData } = useContext(ApiContext);
  // minden urlapnak van egy sajat stateje, ami az urlapadatokat kezeli
  const { addProduct } = useContext(ApiContext); // Assuming addProduct is available in context
  const [data, setData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  // Handle the form submission
  function sendEvent(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the data to the API using the addProduct function from context
    console.log(data);
    addProduct(data);

    // Optionally reset form after submission
    setData({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  }

  // Handle changes to the form inputs
  function onChangeEvent(event) {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <Form onSubmit={sendEvent}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" value={data.title} onChange={onChangeEvent} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" value={data.price} onChange={onChangeEvent} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter product Category" value={data.category} onChange={onChangeEvent} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product description"
          value={data.description}
          onChange={onChangeEvent}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product image URL"
          value={data.image}
          onChange={onChangeEvent}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddProductForm;
