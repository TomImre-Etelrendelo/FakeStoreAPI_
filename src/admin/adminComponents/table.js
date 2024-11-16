import React, { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext";

import { Table } from "react-bootstrap"; // Import the Table component from react-bootstrap

function ProductTable() {
  const { pList } = useContext(ApiContext);

  return (
    <div>
      <h1>Product Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pList.length > 0 ? (
            pList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td> {/* Display the product ID */}
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
