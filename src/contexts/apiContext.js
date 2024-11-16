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
          setCList(response.data);
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

  return (
    <ApiContext.Provider value={{ pList, cList, postData, singleProduct, getSingleProduct }}>
      {children}
    </ApiContext.Provider>
  );
};