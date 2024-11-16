import { createContext, useEffect, useState } from "react";
import { myAxios } from "./myAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [pList, setPList] = useState([]); // product list
  const [cList, setCList] = useState([]); // category list
  const [singleProduct, setSingleProduct] = useState(null); // to hold a single product

  // Function to fetch data from the endpoint
  function getData(endpoint) {
    myAxios
      .get(endpoint)
      .then(function (response) {
        console.log(response.data);
        if (endpoint === "/products") {
          setPList(response.data);
        } else if (endpoint === "/products/categories") {
            
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getSingleProduct(id) {
    myAxios
      .get(`/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setSingleProduct(response.data); // Store the single product in the state
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addProduct(newProduct) {
    myAxios
      .post("/products", newProduct)
      .then((response) => {
        console.log("Product added:", response.data);
        setPList((prevList) => [...prevList, response.data]); // Add the new product to the product list
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  }

  useEffect(() => {
    // Fetch data once when the component mounts
    getData("/products");
    getData("/products/categories");
  }, []);

  // Function to post data (unchanged from your version)
  function postData(endpoint, data) {
    myAxios
      .post(endpoint, data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteData(id){
    myAxios
    .delete(`/products/${id}`)
    .then(function (response) {
      console.log("Product deleted:", response.data);
      
      // Update the product list after deletion
      setPList((prevList) => prevList.filter((product) => product.id !== id)); 
    })
    .catch(function (error) {
      console.error("Error deleting product:", error);
    });
}

function modifyData(id, updatedProduct){
  myAxios
  .put(`/products/${id}`)
  .then(function (response) {
    console.log("Product modified: ", response.data);
      // Update the product list after modification
      setPList((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      )
})
.catch(function (error) {
  console.error("Error modifying product:", error);
});
}

  return (
    <ApiContext.Provider value={{ pList, cList, postData, singleProduct, getSingleProduct, addProduct, deleteData, modifyData  }}>
      {children}
    </ApiContext.Provider>
  );
};