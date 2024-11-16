import React, { useState } from 'react';
import Table from '../admin/adminComponents/table.js';  // Import Table component
import { columns, data } from '../admin/adminComponents/tableData.js';
import AddProductForm from '../admin/adminComponents/addProductForm.js';
import { Button } from 'react-bootstrap';

const AdminView = () => {

    // State to toggle the visibility of the AddProductForm
    const [showAddProductForm, setShowAddProductForm] = useState(false);
  
    // Function to toggle the form visibility
    const toggleAddProductForm = () => {
      setShowAddProductForm((prevState) => !prevState);
    };

  return (
    <div>
      <h1>Admin Page</h1>
      <p>This is the admin view for managing the site.</p>
          <article>
          <h1>Admin Dashboard</h1>
          <p>This is the admin dashboard.</p>

        <Button variant="primary" onClick={toggleAddProductForm}>
          {showAddProductForm ? "Cancel" : "Add New Item"}
        </Button>

        {showAddProductForm && (
          <div>
            <AddProductForm />
          </div>
        )}
          <div>
        <Table columns={columns} data={data}/> 
      </div>
        </article>
    </div>
  );
};

export default AdminView;