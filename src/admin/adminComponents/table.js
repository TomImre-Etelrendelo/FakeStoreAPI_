import React from 'react';
import { columns, data } from './tableData.js';  // Import columns and data


function Table({ columns, data }) {
    return (
      <table border="1">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;