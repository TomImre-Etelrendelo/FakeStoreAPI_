import React, { useEffect, useState } from 'react';
import Table from '../admin/adminComponents/table.js';  // Import Table component
import AddProductForm from '../admin/adminComponents/addProductForm.js';
import { Button } from 'react-bootstrap';
import ModifyProductForm from '../admin/adminComponents/modifyProductForm';


const AdminView = () => {

    // State to toggle the visibility of the AddProductForm
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [showModifyForm, setShowModifyForm] = useState(false);
  
    useEffect(() => {
      console.log("Selected product updated:", selectedProduct);
    }, [selectedProduct]);

    useEffect(() => {
      console.log("Selected product updated:", showModifyForm);
    }, [showModifyForm]);

    const handleModifyClick = (product) => {
      console.log("Modify clicked for product:", product); // Debug log
      setSelectedProduct({...product});
      console.log(selectedProduct)
      setShowModifyForm(true);
    };

    const placeholderModifyClick = () => {
      console.warn("Modify handler is not yet ready.");
    };

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
      {/* Pass handleModifyClick as a prop to Table */}
      <Table onModifyClick={handleModifyClick} />
      
      {/* Show the form when showModifyForm is true */}
      {showModifyForm ? <ModifyProductForm product={selectedProduct} />:""}
    </div>
        </article>
    </div>
  );
};

export default AdminView;