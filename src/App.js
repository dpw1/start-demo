import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "./Products";

function App() {
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setStoreData(window.EcwidApp.getPayload());
  }, []);

  useEffect(() => {
    console.log("rr my store data: ", storeData);
  }, [storeData]);

  return (
    <div className="EasyUpsellApp">
      <Products></Products>
    </div>
  );
}

export default App;
