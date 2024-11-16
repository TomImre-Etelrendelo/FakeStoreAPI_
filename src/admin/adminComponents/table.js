import React, { useContext } from 'react';
import { ApiContext } from "../../contexts/apiContext";

function Table({ columns, data }) {

  const { pList } = useContext(ApiContext); // Consume the product list from the context


  return (
    <div>
      <h1>Product Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {pList.length > 0 ? (
            pList.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

  
  export default Table;