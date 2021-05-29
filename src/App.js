import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "./Products";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);

  const populateProducts = async () => {
    // const url = `https://app.ecwid.com/api/v3/${storeData.store_id}/products?token=${storeData.access_token}`;
    const url = `https://app.ecwid.com/api/v3/37374877/products?token=secret_EkQGe8SC4V4DHgSrnkmXsQsneDQ9JwQ4`;

    const { data: _products } = await axios.get(url);
    setProducts(_products);
  };

  useEffect(() => {
    setStoreData(window.EcwidApp.getPayload());
  }, []);

  useEffect(() => {
    (async () => {
      populateProducts();
    })();

    console.log("rr my store data: ", storeData);
  }, [storeData]);

  return (
    <div className="App">
      <Products products={products}></Products>
    </div>
  );
}

export default App;
