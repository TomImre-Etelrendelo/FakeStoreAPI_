import React, { useContext } from 'react';
import { ApiContext } from "../../contexts/apiContext";
import ProductCard from "./ProductCard";


function Cards() {

    const { pList } = useContext(ApiContext);
    

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {pList.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
        ></ProductCard>      
      ))}
    </div>
  );
}

export default Cards;
