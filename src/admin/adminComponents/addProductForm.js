import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProductForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter product Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddProductForm;