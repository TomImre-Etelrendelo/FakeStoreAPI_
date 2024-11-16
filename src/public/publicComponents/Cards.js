import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/apiContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function Cards() {
  const { pList } = useContext(ApiContext);
  const navigate = useNavigate();

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the products based on the search query
  const filteredProducts = pList.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBlock: "1rem", padding: "0.5rem", width: "100%" }}
      />

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div>
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
              />
              <button onClick={() => handleViewProduct(product.id)}>
                View Product
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
