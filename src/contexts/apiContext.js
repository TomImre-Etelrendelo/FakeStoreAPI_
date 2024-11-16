import { createContext, useEffect, useState } from "react";
import { myAxios } from "./myAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [pList, setPList] = useState([]); // product list
  const [cList, setCList] = useState([]); // category list

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
    <ApiContext.Provider value={{ pList, cList, postData }}>
      {children}
    </ApiContext.Provider>
  );
};