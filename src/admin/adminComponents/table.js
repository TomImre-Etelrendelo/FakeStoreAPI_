import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/apiContext";
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap"; // Import the Table component from react-bootstrap

function ProductTable() {
  const { pList, deleteData } = useContext(ApiContext);  // Make sure deleteData is available in context



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
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pList.length > 0 ? (
            pList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td><Button variant='warning'  onClick={() => deleteData(product.id)}>Modify</Button></td>
                <td><Button variant='danger'  onClick={() => deleteData(product.id)}>Delete</Button></td>
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