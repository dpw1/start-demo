import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);

  const populateProducts = async () => {
    const url = `https://app.ecwid.com/api/v3/${storeData.store_id}/products?token=${storeData.access_token}`;

    const { data: _products } = await axios.get(url);
    setProducts(_products);
  };

  useEffect(() => {
    setStoreData(window.EcwidApp.getPayload());
  }, []);

  useEffect(() => {
    setStoreData(window.EcwidApp.getPayload());

    (async () => {
      populateProducts();
    })();

    console.log("rr my store data: ", storeData);
  }, [storeData]);

  return (
    <div className="App">
      this is react: {products && JSON.stringify(products)}
    </div>
  );
}

export default App;
