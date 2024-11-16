import React from 'react';
import Table from '../admin/adminComponents/table.js';  // Import Table component
import { columns, data } from '../admin/adminComponents/tableData.js';

const AdminView = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>This is the admin view for managing the site.</p>
          <article>
          <h1>Admin Dashboard</h1>
          <p>This is the admin dashboard.</p>
          <div>
        <h1>Dynamic Table</h1>
        <Table columns={columns} data={data}/> 
      </div>
        </article>
    </div>
  );
};

export default AdminView;